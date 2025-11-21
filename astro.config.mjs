import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
// Minimal config - let Astro handle paths automatically
export default defineConfig({
  site: 'https://inprogressstudio.vercel.app',
  // base: '/astro', // Remove this temporarily
  output: 'static',
 integrations: [mdx()],
});
