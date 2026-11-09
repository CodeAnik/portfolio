import nodemailer, { type Transporter } from 'nodemailer';
import type { ContactConfig } from './config.js';
import type { ContactMessage } from './validation.js';

export type SendContactEmail = (message: ContactMessage, meta: { ip: string; origin: string }) => Promise<void>;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] ?? char);

let cached: { key: string; transporter: Transporter } | undefined;

function transporterFor(config: ContactConfig): Transporter {
  const key = `${config.smtp.host}:${config.smtp.port}:${config.smtp.user}`;
  if (cached?.key !== key) {
    cached = {
      key,
      transporter: nodemailer.createTransport({
        host: config.smtp.host,
        port: config.smtp.port,
        secure: config.smtp.secure, // implicit TLS on 465
        requireTLS: !config.smtp.secure, // STARTTLS on 587
        auth: { user: config.smtp.user, pass: config.smtp.pass },
        connectionTimeout: 10_000,
        greetingTimeout: 10_000,
        socketTimeout: 15_000,
      }),
    };
  }
  return cached.transporter;
}

/** Sends the visitor's message to the site owner through Gmail SMTP, with Reply-To set to the visitor. */
export function createSmtpSender(config: ContactConfig): SendContactEmail {
  return async (message, meta) => {
    const sentAt = new Date().toUTCString();
    const text = [
      `New message from your portfolio contact form.`,
      ``,
      `Name:    ${message.name}`,
      `Email:   ${message.email}`,
      `Subject: ${message.subject}`,
      ``,
      message.message,
      ``,
      `—`,
      `Sent ${sentAt} from ${meta.origin}`,
    ].join('\n');

    const html = `<!doctype html><html><body style="font-family:Arial,sans-serif;color:#0e0e11;line-height:1.6">
<p style="margin:0 0 16px;color:#d90b5a;font-weight:bold">New message from your portfolio contact form</p>
<table cellpadding="6" style="border-collapse:collapse;font-size:14px">
<tr><td style="color:#55555e">Name</td><td><strong>${escapeHtml(message.name)}</strong></td></tr>
<tr><td style="color:#55555e">Email</td><td><a href="mailto:${escapeHtml(message.email)}">${escapeHtml(message.email)}</a></td></tr>
<tr><td style="color:#55555e">Subject</td><td>${escapeHtml(message.subject)}</td></tr>
</table>
<div style="margin-top:16px;padding:16px;border-left:3px solid #f41067;background:#f7f7f9;white-space:pre-wrap;font-size:15px">${escapeHtml(message.message)}</div>
<p style="margin-top:16px;font-size:12px;color:#6e6e78">Sent ${escapeHtml(sentAt)} from ${escapeHtml(meta.origin)}. Reply to this email to answer ${escapeHtml(message.name)} directly.</p>
</body></html>`;

    await transporterFor(config).sendMail({
      from: { name: 'Portfolio Contact Form', address: config.smtp.user },
      to: config.to,
      replyTo: { name: message.name, address: message.email },
      subject: `[Portfolio] ${message.subject}`,
      text,
      html,
    });
  };
}
