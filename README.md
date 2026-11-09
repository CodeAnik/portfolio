# Md. Anik Khan — Portfolio

Personal portfolio of **Md. Anik Khan**, a full-stack developer in Dhaka, Bangladesh using agentic AI workflows to build websites and web applications across React, Next.js, Node.js, WordPress and WooCommerce.

Live: **https://codeanik.github.io/portfolio/**

Built with [Astro](https://astro.build), TypeScript and Tailwind CSS. The site is fully static, ships almost no JavaScript, and is deployed to GitHub Pages. The contact form sends email through Gmail SMTP via a small serverless API in [`contact-api/`](contact-api/README.md).

## Tech stack

- **Astro 7** — static generation, content collections, image optimisation
- **TypeScript** (strict) and **Tailwind CSS 4**
- **Fontsource** — self-hosted Montserrat (display) and Inter (body)
- **@astrojs/sitemap** — sitemap generation
- **Nodemailer** (contact API only) — Gmail SMTP

## Project structure

```text
src/
  assets/          Optimised source images (profile photos, project screenshots)
  components/
    cards/         ProjectCard, CodeCover
    forms/         ContactForm
    hero/          Hero
    layout/        Footer, PageHeader, Reveal (scroll animations)
    navigation/    Header (with mobile menu), ThemeToggle
    sections/      Home/about/experience page sections
    seo/           SEO (meta tags, Open Graph, JSON-LD)
    ui/            Button, Icon, Logo, SectionHeading, SocialLinks
  data/            profile, social, skills, experience, education, activities, services, projects
  layouts/         BaseLayout
  lib/             url helpers
  pages/           index, about, experience, projects/, contact, 404, robots.txt
  styles/          global.css (design tokens, Tailwind theme)
public/            favicons, Open Graph image, web manifest, redirects for old .html URLs
contact-api/       Serverless contact-form endpoint (deployed separately)
```

## Editing content

All personal information lives in `src/data/` — components never hard-code it.

| What | Where |
| --- | --- |
| Name, role, summary, email, phone, WhatsApp, resume links (currently `#`) | `src/data/profile.ts` |
| Social profiles | `src/data/social.ts` |
| Skills | `src/data/skills.ts` |
| Work experience | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Leadership & volunteering | `src/data/activities.ts` |
| Projects (order = display order) | `src/data/projects.ts` |

**Add a project:** put a WebP screenshot in `src/assets/projects/` (name it `anik-khan-<project>.webp`), import it in `projects.ts`, and add an entry with `contribution` and `features` where useful. Projects without a public screenshot can omit `cover` and get a typographic cover. Mark private client code with `code: 'private'` (it is described, never linked). Set `featured: true` to show it on the home page.

## Commands

```bash
npm install
npm run dev        # http://localhost:4321/portfolio/
npm run check      # TypeScript + Astro diagnostics
npm run build      # type-check, then build to dist/
npm run preview    # serve the production build
```

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys on every push to `master`.

One-time setup in the GitHub repository:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. (Optional, for the contact form) **Settings → Secrets and variables → Actions → Variables → New repository variable**
   `PUBLIC_CONTACT_ENDPOINT` = the URL of your deployed contact API, e.g. `https://your-project.vercel.app/api/contact`.

`astro.config.mjs` is configured for the project site: `site: https://codeanik.github.io`, `base: /portfolio`. Internal links use the `url()` helper in `src/lib/url.ts`, so they always include the base path.

Old URLs (`about.html`, `portfolio.html`, `contact.html`) redirect to the new pages.

## Contact form

The site is static, so it can't hold SMTP credentials. The form posts to a separate serverless function that sends the email through Gmail SMTP — see [`contact-api/README.md`](contact-api/README.md). If `PUBLIC_CONTACT_ENDPOINT` isn't set, the form falls back to opening the visitor's email app with the message pre-filled.

Never commit `.env` files. `.env.example` documents every variable.

## SEO

Every page has a unique title and description, a canonical URL, Open Graph and Twitter tags, and JSON-LD (Person, WebSite, WebPage, BreadcrumbList, CreativeWork). The sitemap is at `/portfolio/sitemap-index.xml`.

Because this is a project site under `/portfolio/`, `robots.txt` is served at `/portfolio/robots.txt`, which crawlers don't read automatically. Submit the sitemap in Google Search Console instead.
