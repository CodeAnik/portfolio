import type { ContactConfig } from './config.js';
import type { SendContactEmail } from './mailer.js';
import type { RateLimiter } from './rate-limit.js';
import { CONTACT_LIMITS, validateContact, type ContactInput } from './validation.js';

const MAX_BODY_BYTES = 16 * 1024;

export interface HandlerDeps {
  config: ContactConfig | null;
  send: SendContactEmail | null;
  rateLimiter: RateLimiter;
  now?: () => number;
  log?: (message: string, detail?: unknown) => void;
}

function json(status: number, body: Record<string, unknown>, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers },
  });
}

function corsHeaders(origin: string): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwarded || request.headers.get('x-real-ip')?.trim() || 'unknown';
}

/**
 * Platform-neutral handler built on the Fetch API Request/Response types.
 * Wrapped by api/contact.ts (Vercel) and server.ts (any Node host).
 */
export async function handleContactRequest(request: Request, deps: HandlerDeps): Promise<Response> {
  const { config, send, rateLimiter, now = Date.now, log = console.error } = deps;
  const origin = request.headers.get('origin')?.replace(/\/+$/, '') ?? '';
  const allowed = config?.allowedOrigins ?? ['https://codeanik.github.io'];

  if (!origin || !allowed.includes(origin)) {
    return json(403, { ok: false, error: 'This origin is not allowed to use the contact form.' }, { Vary: 'Origin' });
  }
  const cors = corsHeaders(origin);

  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
  if (request.method !== 'POST') return json(405, { ok: false, error: 'Method not allowed.' }, { ...cors, Allow: 'POST, OPTIONS' });

  if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    return json(415, { ok: false, error: 'Please send the form as JSON.' }, cors);
  }

  const declaredLength = Number(request.headers.get('content-length') ?? 0);
  if (declaredLength > MAX_BODY_BYTES) return json(413, { ok: false, error: 'The message is too large.' }, cors);

  let payload: ContactInput & { website?: unknown; startedAt?: unknown };
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) {
      return json(413, { ok: false, error: 'The message is too large.' }, cors);
    }
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('Body must be an object');
    payload = parsed as typeof payload;
  } catch {
    return json(400, { ok: false, error: 'The request could not be read.' }, cors);
  }

  const ip = clientIp(request);
  const retryAfter = rateLimiter.hit(ip, now());
  if (retryAfter > 0) {
    return json(
      429,
      { ok: false, error: 'Too many messages in a short time. Please try again later or email me directly.' },
      { ...cors, 'Retry-After': String(retryAfter) },
    );
  }

  // Spam traps: a filled honeypot or an implausibly fast submission gets a quiet success, and no email.
  const startedAt = Number(payload.startedAt);
  const honeypot = typeof payload.website === 'string' && payload.website.trim() !== '';
  const tooFast = !Number.isFinite(startedAt) || now() - startedAt < CONTACT_LIMITS.minFillMs;
  if (honeypot || tooFast) {
    return json(200, { ok: true, message: 'Thanks — your message has been sent.' }, cors);
  }

  const result = validateContact(payload);
  if (!result.ok) {
    return json(422, { ok: false, error: 'Please check the highlighted fields.', fields: result.errors }, cors);
  }

  if (!config || !send) {
    log('Contact API is missing SMTP configuration (SMTP_USER, SMTP_PASS, CONTACT_TO).');
    return json(500, { ok: false, error: 'The email service is not configured yet.' }, cors);
  }

  try {
    await send(result.data, { ip, origin });
  } catch (error) {
    log('Failed to send contact email', error instanceof Error ? error.message : error);
    return json(502, { ok: false, error: 'Your message could not be delivered right now.' }, cors);
  }

  return json(200, { ok: true, message: 'Thanks — your message has been sent. I’ll reply soon.' }, cors);
}
