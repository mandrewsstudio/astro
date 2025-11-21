import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
// Minimal config - let Astro handle paths automatically
export default defineConfig({
  site: 'https://mandrewsstudio.github.io',
  base: '/astro',
  output: 'static',
  build: {
    assetsPrefix: '/astro',
  },
  build: {
    format: 'directory'
},
 integrations: [mdx()],
});
