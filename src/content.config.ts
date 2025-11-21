import { defineCollection, z } from 'astro:content';

const home = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    buttonText: z.string().optional(),
    buttonLink: z.string().optional(),
    video: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  home,
  ourkidsclimate, // keep your existing collection
};
