import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { DEFAULT_RECIPIENT, readConfig } from '../src/config.js';
import { handleContactRequest, type HandlerDeps } from '../src/handler.js';
import type { SendContactEmail } from '../src/mailer.js';
import { createMemoryRateLimiter } from '../src/rate-limit.js';
import { validateContact } from '../src/validation.js';

const ORIGIN = 'https://codeanik.github.io';
const NOW = 1_800_000_000_000;

const valid = {
  name: 'Jane Recruiter',
  email: 'jane@example.com',
  subject: 'WordPress developer role',
  message: 'Hello Anik, I would like to talk about a WordPress developer position.',
  website: '',
  startedAt: NOW - 10_000,
};

function setup(overrides: Partial<HandlerDeps> = {}) {
  const sent: Parameters<SendContactEmail>[0][] = [];
  const deps: HandlerDeps = {
    config: readConfig({ SMTP_USER: 'me@gmail.com', SMTP_PASS: 'abcd efgh ijkl mnop', ALLOWED_ORIGINS: ORIGIN }),
    send: async (message) => {
      sent.push(message);
    },
    rateLimiter: createMemoryRateLimiter({ limit: 3, windowMs: 60_000 }),
    now: () => NOW,
    log: () => {},
    ...overrides,
  };
  return { deps, sent };
}

function post(body: unknown, headers: Record<string, string> = {}) {
  return new Request('https://api.example.com/api/contact', {
    method: 'POST',
    headers: { origin: ORIGIN, 'content-type': 'application/json', 'x-forwarded-for': '203.0.113.7', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

describe('validateContact', () => {
  it('accepts a well-formed message and normalises it', () => {
    const result = validateContact({ ...valid, name: '  Jane\r\nBcc: x@y.z ', email: 'JANE@Example.com' });
    assert.equal(result.ok, true);
    if (result.ok) {
      assert.equal(result.data.name, 'Jane Bcc: x@y.z');
      assert.equal(result.data.email, 'jane@example.com');
    }
  });

  it('reports every invalid field', () => {
    const result = validateContact({ name: 'J', email: 'not-an-email', subject: '', message: 'short' });
    assert.equal(result.ok, false);
    if (!result.ok) assert.deepEqual(Object.keys(result.errors).sort(), ['email', 'message', 'name', 'subject']);
  });

  it('rejects messages over the maximum length', () => {
    const result = validateContact({ ...valid, message: 'a'.repeat(5001) });
    assert.equal(result.ok, false);
  });
});

describe('readConfig', () => {
  it('returns null when credentials are missing', () => {
    assert.equal(readConfig({}), null);
  });

  it('defaults to Gmail on port 465 with TLS, the portfolio inbox and strips app-password spaces', () => {
    const config = readConfig({ SMTP_USER: 'me@gmail.com', SMTP_PASS: 'abcd efgh' });
    assert.equal(config?.smtp.host, 'smtp.gmail.com');
    assert.equal(config?.smtp.port, 465);
    assert.equal(config?.smtp.secure, true);
    assert.equal(config?.smtp.pass, 'abcdefgh');
    assert.equal(config?.to, DEFAULT_RECIPIENT);
    assert.equal(DEFAULT_RECIPIENT, 'cse.anik.world@gmail.com');
  });
});

describe('handleContactRequest', () => {
  it('sends a valid message', async () => {
    const { deps, sent } = setup();
    const res = await handleContactRequest(post(valid), deps);
    assert.equal(res.status, 200);
    assert.equal(res.headers.get('access-control-allow-origin'), ORIGIN);
    assert.equal(sent.length, 1);
    assert.equal(sent[0]?.email, 'jane@example.com');
  });

  it('answers CORS preflight for an allowed origin', async () => {
    const { deps } = setup();
    const res = await handleContactRequest(new Request('https://api.example.com/api/contact', { method: 'OPTIONS', headers: { origin: ORIGIN } }), deps);
    assert.equal(res.status, 204);
    assert.equal(res.headers.get('access-control-allow-methods'), 'POST, OPTIONS');
  });

  it('rejects unknown origins', async () => {
    const { deps, sent } = setup();
    const res = await handleContactRequest(post(valid, { origin: 'https://evil.example' }), deps);
    assert.equal(res.status, 403);
    assert.equal(sent.length, 0);
  });

  it('returns field errors for invalid input', async () => {
    const { deps, sent } = setup();
    const res = await handleContactRequest(post({ ...valid, email: 'nope' }), deps);
    assert.equal(res.status, 422);
    const body = (await res.json()) as { fields: Record<string, string> };
    assert.ok(body.fields.email);
    assert.equal(sent.length, 0);
  });

  it('silently drops honeypot and too-fast submissions', async () => {
    const { deps, sent } = setup();
    const honeypot = await handleContactRequest(post({ ...valid, website: 'https://spam.example' }), deps);
    const fast = await handleContactRequest(post({ ...valid, startedAt: NOW - 500 }), deps);
    assert.equal(honeypot.status, 200);
    assert.equal(fast.status, 200);
    assert.equal(sent.length, 0);
  });

  it('rate limits repeated requests from one IP', async () => {
    const { deps } = setup();
    for (let i = 0; i < 3; i++) await handleContactRequest(post(valid), deps);
    const res = await handleContactRequest(post(valid), deps);
    assert.equal(res.status, 429);
    assert.ok(Number(res.headers.get('retry-after')) > 0);
  });

  it('rejects non-JSON and oversized bodies', async () => {
    const { deps } = setup();
    const form = await handleContactRequest(post('name=x', { 'content-type': 'application/x-www-form-urlencoded' }), deps);
    const huge = await handleContactRequest(post({ ...valid, message: 'a'.repeat(20_000) }), deps);
    const broken = await handleContactRequest(post('{not json'), deps);
    assert.equal(form.status, 415);
    assert.equal(huge.status, 413);
    assert.equal(broken.status, 400);
  });

  it('returns 500 without leaking details when SMTP is not configured', async () => {
    const { deps } = setup({ config: null, send: null });
    // Without config only the default production origin is allowed.
    const local = await handleContactRequest(post(valid, { origin: 'http://localhost:4321' }), deps);
    assert.equal(local.status, 403);
    const prod = await handleContactRequest(post(valid), deps);
    assert.equal(prod.status, 500);
    const body = (await prod.json()) as { error: string };
    assert.doesNotMatch(body.error, /SMTP_|password/i);
  });

  it('returns 502 when the mail server rejects the message', async () => {
    const { deps } = setup({ send: async () => Promise.reject(new Error('535 auth failed')) });
    const res = await handleContactRequest(post(valid), deps);
    assert.equal(res.status, 502);
    const body = (await res.json()) as { error: string };
    assert.doesNotMatch(body.error, /535/);
  });
});
