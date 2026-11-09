import type { IconName } from '@/components/ui/icons';

export interface Service {
  title: string;
  description: string;
  icon: IconName;
}

export const services: Service[] = [
  {
    title: 'Full-stack web applications',
    description: 'TypeScript applications with React or Next.js on the front end and Node.js, Express and PostgreSQL behind them.',
    icon: 'layers',
  },
  {
    title: 'APIs, dashboards & CMS',
    description: 'REST APIs with authentication, admin dashboards and custom or headless CMS setups your team can run.',
    icon: 'layout-dashboard',
  },
  {
    title: 'WordPress & WooCommerce engineering',
    description: 'Custom plugins, themes, REST endpoints and checkout logic — beyond what off-the-shelf plugins can do.',
    icon: 'wordpress',
  },
  {
    title: 'Headless & modern migrations',
    description: 'Moving WordPress or legacy sites to React, Next.js or Astro, or using WooCommerce as a headless backend.',
    icon: 'plug',
  },
  {
    title: 'Business websites',
    description: 'Fast, responsive company sites in WordPress, Elementor or Astro, structured so your team can edit them.',
    icon: 'monitor-smartphone',
  },
  {
    title: 'Maintenance & support',
    description: 'Updates, debugging, performance fixes and technical support for sites that are already live.',
    icon: 'life-buoy',
  },
];
