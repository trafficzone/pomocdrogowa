// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://trafficzone.github.io',
  base: '/pomocdrogowa',
  integrations: [tailwind()],
});
