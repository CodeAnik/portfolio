export interface ContactConfig {
  smtp: {
    host: string;
    port: number;
    secure: boolean;
    user: string;
    pass: string;
  };
  to: string;
  allowedOrigins: string[];
}

const DEFAULT_ORIGINS = ['https://codeanik.github.io'];
/** Inbox that receives contact-form messages when CONTACT_TO is not set. */
export const DEFAULT_RECIPIENT = 'cse.anik.world@gmail.com';

/**
 * Reads SMTP settings from server-side environment variables.
 * Returns null (instead of throwing) so the handler can answer with a clean 500.
 */
export function readConfig(env: Record<string, string | undefined> = process.env): ContactConfig | null {
  const host = env.SMTP_HOST?.trim() || 'smtp.gmail.com';
  const port = Number(env.SMTP_PORT ?? 465);
  const user = env.SMTP_USER?.trim();
  const pass = env.SMTP_PASS?.replace(/\s+/g, ''); // Google shows app passwords in groups of four
  const to = env.CONTACT_TO?.trim() || DEFAULT_RECIPIENT;

  if (!user || !pass || !Number.isInteger(port)) return null;

  const allowedOrigins = (env.ALLOWED_ORIGINS ?? '')
    .split(',')
    .map((origin) => origin.trim().replace(/\/+$/, ''))
    .filter(Boolean);

  return {
    smtp: { host, port, secure: port === 465, user, pass },
    to,
    allowedOrigins: allowedOrigins.length ? allowedOrigins : DEFAULT_ORIGINS,
  };
}
