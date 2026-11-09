/**
 * Vercel Function (Node.js runtime, Web-standard handlers).
 * Deployed from the `contact-api` directory; credentials live only in Vercel environment variables.
 */
import { readConfig } from '../src/config.js';
import { handleContactRequest } from '../src/handler.js';
import { createSmtpSender } from '../src/mailer.js';
import { createMemoryRateLimiter } from '../src/rate-limit.js';

const config = readConfig();
const send = config ? createSmtpSender(config) : null;
const rateLimiter = createMemoryRateLimiter({ limit: 5, windowMs: 15 * 60 * 1000 });

const handle = (request: Request) => handleContactRequest(request, { config, send, rateLimiter });

export const POST = handle;
export const OPTIONS = handle;
export const GET = handle;
