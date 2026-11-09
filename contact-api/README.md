# Contact API

Serverless endpoint behind the contact form on https://codeanik.github.io/portfolio/. It validates the message, filters spam and sends it to your inbox through **Gmail SMTP** with **Reply-To** set to the visitor.

GitHub Pages can only serve static files, so this API is deployed separately (Vercel by default). The SMTP credentials exist only in the API host's environment variables — never in the website or the browser.

```text
Browser (GitHub Pages) ──POST JSON──▶ /api/contact (Vercel) ──SMTP 465/TLS──▶ smtp.gmail.com
```

## What it does

- Accepts `POST` JSON only, from origins listed in `ALLOWED_ORIGINS` (CORS)
- Validates name, email, subject and message on the server (`src/validation.ts`, shared with the form)
- Strips control characters and line breaks from single-line fields (no header injection) and escapes HTML in the email body
- Caps the request body at 16 KB and the message at 5,000 characters
- Spam protection: honeypot field, minimum fill time, origin allowlist and per-IP rate limiting (5 messages / 15 minutes per instance)
- Returns generic error messages; details are only logged server-side

## 1. Create a Google App Password

1. Turn on **2-Step Verification** for cse.anik.world@gmail.com: https://myaccount.google.com/security
2. Open **App passwords** (https://myaccount.google.com/apppasswords) and create one named "Portfolio".
3. Copy the 16-character password. You'll use it as `SMTP_PASS`.

Revoke it at any time from the same page without changing your Google password.

## 2. Deploy to Vercel

1. Import the GitHub repository in Vercel and set **Root Directory** to `contact-api`.
2. Add the environment variables (Project → Settings → Environment Variables):

   | Variable | Value |
   | --- | --- |
   | `SMTP_HOST` | `smtp.gmail.com` |
   | `SMTP_PORT` | `465` |
   | `SMTP_USER` | `cse.anik.world@gmail.com` (the Gmail account that sends) |
   | `SMTP_PASS` | the App Password |
   | `CONTACT_TO` | `cse.anik.world@gmail.com` (default if unset) |
   | `ALLOWED_ORIGINS` | `https://codeanik.github.io` |

3. Deploy. The endpoint is `https://<your-project>.vercel.app/api/contact`.
4. In the **portfolio** GitHub repository, add the Actions variable `PUBLIC_CONTACT_ENDPOINT` with that URL, then re-run the Pages deployment.

The handler in `src/handler.ts` uses standard `Request`/`Response` objects, so it can also run on any Node.js host using `server.ts`.

## Local development

```bash
cd contact-api
npm install
cp .env.example .env     # fill in real values; .env is git-ignored
npm run dev              # http://localhost:8787/api/contact
npm test                 # handler and validation tests
npm run typecheck
```

To test the form against the local API, add your dev origin to `ALLOWED_ORIGINS` and build the site with
`PUBLIC_CONTACT_ENDPOINT=http://localhost:8787/api/contact`.

## Rate limiting note

The limiter is in memory, so each serverless instance counts separately. That stops bursts from a single client. For a strict global limit, back `RateLimiter` (`src/rate-limit.ts`) with a shared store such as Upstash Redis.
