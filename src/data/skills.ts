import type { IconName } from '@/components/ui/icons';

export interface Skill {
  name: string;
  icon?: IconName;
  /** Used in recent production work (2025–2026 client projects and repositories). */
  core?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  skills: Skill[];
}

/** Only skills backed by shipped work or public repositories. */
export const skillGroups: SkillGroup[] = [
  {
    id: 'core',
    title: 'Core development',
    description: 'The languages I write and debug every day.',
    icon: 'code-xml',
    skills: [
      { name: 'TypeScript', icon: 'typescript', core: true },
      { name: 'JavaScript', icon: 'javascript', core: true },
      { name: 'PHP', icon: 'php', core: true },
      { name: 'HTML', icon: 'html5', core: true },
      { name: 'CSS', icon: 'css', core: true },
      { name: 'SQL' },
    ],
  },
  {
    id: 'frontend',
    title: 'Front-end',
    description: 'Component-driven interfaces that are responsive and accessible.',
    icon: 'layout-template',
    skills: [
      { name: 'React', icon: 'react', core: true },
      { name: 'Next.js', icon: 'nextdotjs', core: true },
      { name: 'Astro', icon: 'astro', core: true },
      { name: 'Tailwind CSS', icon: 'tailwindcss', core: true },
      { name: 'Vue.js', icon: 'vuedotjs' },
      { name: 'shadcn/ui & Radix' },
      { name: 'TanStack Query' },
      { name: 'React Hook Form & Zod' },
      { name: 'Bootstrap', icon: 'bootstrap' },
    ],
  },
  {
    id: 'backend',
    title: 'Back-end & data',
    description: 'APIs, authentication and the databases behind them.',
    icon: 'server',
    skills: [
      { name: 'Node.js', icon: 'nodedotjs', core: true },
      { name: 'Express', icon: 'express', core: true },
      { name: 'REST APIs', core: true },
      { name: 'JWT authentication' },
      { name: 'Prisma', icon: 'prisma', core: true },
      { name: 'Drizzle ORM', icon: 'drizzle' },
      { name: 'PostgreSQL', icon: 'postgresql', core: true },
      { name: 'MySQL', icon: 'mysql', core: true },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Cloudflare D1', icon: 'cloudflare' },
      { name: 'Strapi', icon: 'strapi' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Firebase', icon: 'firebase' },
    ],
  },
  {
    id: 'ai',
    title: 'AI-assisted development',
    description: 'AI speeds up delivery. I own the design, the review and the debugging.',
    icon: 'bot',
    skills: [
      { name: 'Claude Code', icon: 'claude', core: true },
      { name: 'Agentic coding workflows', core: true },
      { name: 'AI-assisted debugging & refactoring', core: true },
      { name: 'Developer-led code review', core: true },
      { name: 'Prompt-driven architecture analysis' },
      { name: 'Rapid prototyping (Lovable)' },
      { name: 'AI-assisted documentation' },
    ],
  },
  {
    id: 'wordpress',
    title: 'WordPress & e-commerce',
    description: 'Where I started, and still a core strength.',
    icon: 'wordpress',
    skills: [
      { name: 'WordPress', icon: 'wordpress', core: true },
      { name: 'WooCommerce', icon: 'woocommerce', core: true },
      { name: 'Plugin development', core: true },
      { name: 'Theme development & customisation', core: true },
      { name: 'Elementor & Elementor Pro', icon: 'elementor' },
      { name: 'Advanced Custom Fields' },
      { name: 'Hooks, AJAX & REST endpoints' },
      { name: 'Headless WordPress & WooCommerce' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & deployment',
    description: 'Version control, builds and the platforms things run on.',
    icon: 'terminal',
    skills: [
      { name: 'Git', icon: 'git', core: true },
      { name: 'GitHub', icon: 'github', core: true },
      { name: 'Vite', icon: 'vite' },
      { name: 'pnpm & Turborepo' },
      { name: 'Cloudflare Pages & Workers', icon: 'cloudflare', core: true },
      { name: 'DigitalOcean', icon: 'digitalocean' },
      { name: 'SMTP & Nodemailer' },
    ],
  },
  {
    id: 'design',
    title: 'Design & communication',
    description: 'Turning designs into interfaces, and explaining technical work clearly.',
    icon: 'pen-tool',
    skills: [
      { name: 'UI implementation' },
      { name: 'Adobe Photoshop' },
      { name: 'Adobe Illustrator' },
      { name: 'Logo & brand design' },
      { name: 'Technical writing' },
      { name: 'Research' },
    ],
  },
];
