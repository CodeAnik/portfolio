/**
 * Single source of truth for personal and professional details.
 * Facts come from the original portfolio, the 2026 resume and public GitHub work (CodeAnik, dgency).
 */
export const profile = {
  name: 'Md. Anik Khan',
  shortName: 'Anik Khan',
  givenName: 'Anik',
  familyName: 'Khan',
  role: 'Full-Stack Developer using Agentic AI',
  jobTitle: 'Full-Stack Developer',
  tagline:
    'I build complete websites and web applications, from WordPress and WooCommerce to React, Next.js and custom backends. I combine agentic AI development with hands-on technical knowledge to deliver solutions efficiently, then review and test the work myself.',
  location: {
    city: 'Dhaka',
    country: 'Bangladesh',
    countryCode: 'BD',
    label: 'Dhaka, Bangladesh',
  },
  email: 'cse.anik.world@gmail.com',
  phone: {
    display: '+880 1781-043328',
    href: 'tel:+8801781043328',
  },
  whatsapp: {
    href: 'https://wa.me/8801781043328',
    message: 'Hi Anik, I found your portfolio and would like to talk about a project.',
  },
  resume: {
    /** Resume links are disabled site-wide; every resume button and link points to '#'. */
    pagePath: '#',
    pdfPath: '#',
  },
  availability: 'Open to full-time roles and freelance projects',
  /** First professional web role (Bizuz, November 2020). */
  careerStartYear: 2020,

  /** Recruiter-facing summary used on the home page, resume and metadata. */
  summary:
    'Full-stack developer in Dhaka, building for the web professionally since 2020. I started with WordPress, PHP and WooCommerce — themes, custom plugins and client sites — and now build TypeScript applications with React, Next.js, Node.js/Express and PostgreSQL. At Dgency I deliver client platforms end to end: APIs, admin dashboards, headless CMS integrations and Cloudflare deployments. I use agentic AI coding tools such as Claude Code to plan, prototype and refactor faster, while I own the architecture and review, test and debug the code myself.',

  about: [
    'I’m Md. Anik Khan, a full-stack developer from Dhaka with a B.Sc. in Computer Science & Engineering from the University of Asia Pacific. I’ve been building for the web professionally since 2020.',
    'My foundation is WordPress: theme development and customisation, Elementor builds, and custom WordPress and WooCommerce plugins — tiered quantity pricing, registration approval workflows, checkout automation, and a certificate-verification system with its own database table and REST API.',
    'Since joining Dgency in 2023 my work has moved toward full-stack TypeScript: an Astro platform on Cloudflare for escaperoommarketer.com, an Express + Prisma + PostgreSQL CMS with a React admin dashboard and a Next.js front end, and a React storefront that uses WooCommerce as a headless backend.',
    'I use AI coding tools every day. Agentic assistants like Claude Code help me explore architecture options, draft code, refactor and write documentation quickly — but the decisions, the code review and the debugging are mine. If I can’t explain what a change does, it doesn’t ship.',
  ],

  /** How I work — shown on the home and about pages. */
  approach: [
    {
      title: 'Plan the system',
      body: 'I start from the requirements and the data: what the product must do, the data model, the API surface and where it will run. The architecture is a human decision.',
      icon: 'workflow',
    },
    {
      title: 'Build with AI acceleration',
      body: 'Agentic coding tools handle scaffolding, repetitive code, refactors and first drafts. Project guides such as CLAUDE.md keep their output consistent with the codebase’s conventions.',
      icon: 'bot',
    },
    {
      title: 'Review, test and debug',
      body: 'I read every diff, run type checks and tests, and debug in the browser, the logs and the database. Generated code is treated like a pull request from a new teammate.',
      icon: 'shield-check',
    },
    {
      title: 'Ship and maintain',
      body: 'I deploy to Cloudflare, DigitalOcean or WordPress hosting, then handle updates, fixes and technical support for live client sites.',
      icon: 'git-branch',
    },
  ],

  strengths: [
    'Full-stack TypeScript with React, Next.js, Astro and Node.js',
    'REST APIs with Express, Prisma, Drizzle, PostgreSQL and MySQL',
    'WordPress and WooCommerce engineering: custom plugins, themes, REST endpoints',
    'Headless CMS integrations (WooCommerce, Strapi, custom CMS)',
    'Agentic AI development with developer-led review',
    'Debugging, maintenance and support for live client sites',
    'Research and clear technical writing',
    'Leadership — President of the CSE Career Development Club at UAP',
  ],

  interests: ['Full-stack development', 'Developer tooling', 'Machine learning', 'Computer vision', 'Design'],
} as const;

export type Profile = typeof profile;
