import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
// Minimal config - let Astro handle paths automatically
export default defineConfig({
  site: 'https://mandrewsstudio.github.io',
  // Remove base entirely for now to test
  output: 'static',
  build: {
    format: 'directory'
},
 integrations: [mdx()],
});
