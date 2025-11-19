import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
   site: 'https://mandrewsstudio.github.io',
     base: '/astro', // Remove this if using custom domain
  output: 'static',
  build: {
    format: 'directory'
});
