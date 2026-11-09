/**
 * Minimal Node.js server for local testing, or for hosting the API on any Node platform
 * (Render, Railway, a VPS). Usage: `npm run dev` with a `.env` file in this folder.
 */
import { createServer } from 'node:http';
import { readConfig } from './src/config.js';
import { handleContactRequest } from './src/handler.js';
import { createSmtpSender } from './src/mailer.js';
import { createMemoryRateLimiter } from './src/rate-limit.js';

try {
  process.loadEnvFile?.('.env');
} catch {
  // No .env file — rely on the real environment.
}

const config = readConfig();
const send = config ? createSmtpSender(config) : null;
const rateLimiter = createMemoryRateLimiter();
const port = Number(process.env.PORT ?? 8787);

if (!config) console.warn('SMTP is not configured — requests will return 500 until SMTP_USER and SMTP_PASS are set.');

createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`);
  if (url.pathname !== '/api/contact') {
    res.writeHead(404, { 'Content-Type': 'application/json' }).end(JSON.stringify({ ok: false, error: 'Not found' }));
    return;
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(chunk as Buffer);
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'string') headers.set(key, value);
    else if (Array.isArray(value)) headers.set(key, value.join(', '));
  }
  if (!headers.has('x-forwarded-for')) headers.set('x-forwarded-for', req.socket.remoteAddress ?? 'unknown');

  const method = req.method ?? 'GET';
  const request = new Request(url, {
    method,
    headers,
    body: method === 'GET' || method === 'HEAD' ? undefined : Buffer.concat(chunks),
  });
  const response = await handleContactRequest(request, { config, send, rateLimiter });

  res.writeHead(response.status, Object.fromEntries(response.headers));
  res.end(await response.text());
}).listen(port, () => console.log(`Contact API listening on http://localhost:${port}/api/contact`));
