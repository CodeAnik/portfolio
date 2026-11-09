// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages as a project site: https://codeanik.github.io/portfolio/
export default defineConfig({
  site: 'https://codeanik.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
