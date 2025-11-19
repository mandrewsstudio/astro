import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
 
   site: 'https://mandrewsstudio.github.io',
  output: 'static',
  base: '/astro/',
  build: {
    format: 'directory'
}
 integrations: [mdx()],
});
