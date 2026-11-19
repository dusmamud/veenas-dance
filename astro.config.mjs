import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  output: 'static',
  site: 'https://veenas-dance.pages.dev',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => page !== 'https://veenas-dance.pages.dev/search/' })],
  vite: { plugins: [tailwindcss()] },
});
