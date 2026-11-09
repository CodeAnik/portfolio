export interface Experience {
  id: string;
  company: string;
  companyType: string;
  role: string;
  kind: 'professional' | 'freelance';
  period: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  focus: string[];
}

/** Most recent first. Dates from the 2026 resume. */
export const experience: Experience[] = [
  {
    id: 'dgency',
    company: 'Dgency',
    companyType: 'Digital agency',
    role: 'Web Developer',
    kind: 'professional',
    period: 'Mar 2023 – Present',
    location: 'Mohakhali DOHS, Dhaka',
    summary: 'Builds client websites and web applications end to end, from WordPress and WooCommerce to full-stack TypeScript.',
    responsibilities: [
      'Built the Escape Room Marketer platform (escaperoommarketer.com): an Astro and TypeScript monorepo on Cloudflare with a D1/Drizzle data layer, R2 media and a custom CMS with authentication, revision history and publishing.',
      'Engineered a full-stack CMS for a medical-admissions client: an Express, TypeScript, Prisma and PostgreSQL API with JWT authentication, a React admin dashboard and a Next.js front end, deployed on DigitalOcean.',
      'Integrated WooCommerce as a headless backend for a React and TypeScript storefront through the WooCommerce REST API and custom WordPress endpoints.',
      'Developed custom WordPress and WooCommerce plugins for client stores, including tiered quantity pricing, registration approval, checkout auto-fill and a certificate-verification system with its own database table and REST API.',
      'Use agentic AI coding workflows (Claude Code) for planning, refactoring, debugging and documentation, with developer-led review of every change.',
      'Maintain, debug and support live client websites built on WordPress, Elementor and WooCommerce.',
    ],
    focus: ['TypeScript', 'React', 'Next.js', 'Astro', 'Node.js', 'PostgreSQL', 'WordPress', 'WooCommerce', 'Cloudflare'],
  },
  {
    id: 'rumor-scanner',
    company: 'Rumor Scanner Bangladesh',
    companyType: 'Fact-checking organisation',
    role: 'IT Consultant & Fact Checker',
    kind: 'professional',
    period: 'Jan 2022 – Nov 2022',
    location: 'Mirpur DOHS, Dhaka',
    summary: 'Kept the organisation’s WordPress publishing platform running and wrote fact-check reports.',
    responsibilities: [
      'Maintained the Rumor Scanner WordPress website and handled IT tasks so fact-checks could be published reliably.',
      'Researched and wrote detailed reports that debunk misinformation, published on the Rumor Scanner website.',
    ],
    focus: ['WordPress', 'Website maintenance', 'IT support', 'Research & writing'],
  },
  {
    id: 'bizuz',
    company: 'Bizuz',
    companyType: 'E-learning education platform',
    role: 'Web Developer',
    kind: 'professional',
    period: 'Nov 2020 – Oct 2021',
    location: 'Lalmatia, Mohammadpur, Dhaka',
    summary: 'Maintained and extended the WordPress website of an online education platform and led its IT work.',
    responsibilities: [
      'Maintained and extended the Bizuz WordPress website, building new features and keeping course content accurate.',
      'Led IT tasks and worked with the team to improve website performance and user experience.',
      'Trained new staff on the company’s web workflows.',
    ],
    focus: ['WordPress', 'PHP', 'E-learning', 'IT operations'],
  },
  {
    id: 'freelance',
    company: 'Fiverr & Upwork',
    companyType: 'Freelance marketplaces',
    role: 'Web Developer & Graphics Designer',
    kind: 'freelance',
    period: 'Freelance',
    summary: 'Responsive websites and brand identity work for independent clients.',
    responsibilities: [
      'Designed and developed responsive websites to each client’s brief.',
      'Created logos and brand identities.',
    ],
    focus: ['WordPress', 'Web design', 'Logo design'],
  },
  {
    id: 'robo-tech-valley',
    company: 'Robo Tech Valley',
    companyType: 'Robotics and technology organisation',
    role: 'IT Project Analyst & Graphics Designer',
    kind: 'freelance',
    period: 'Freelance',
    location: 'Mirpur, Dhaka',
    summary: 'Planned IT projects and produced visual content.',
    responsibilities: [
      'Planned and executed IT projects and analysed project data.',
      'Ran quality assurance on deliverables and created visual content.',
    ],
    focus: ['Project planning', 'Quality assurance', 'Graphic design'],
  },
];
