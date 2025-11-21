import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
 
   site: 'https://mandrewsstudio.github.io',
  base: '/astro', // This MUST match your repository name
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
},
 integrations: [mdx()],
});
