// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://di14mehdi8.github.io',
  base: '/ry-architecture',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-MA',
          en: 'en-US',
          ar: 'ar-MA',
        },
      },
    }),
  ],
});
