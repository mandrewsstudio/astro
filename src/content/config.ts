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

const thoughts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    author: z.string().default('In Progress'),
    featuredImage: z.string().optional(),
  }),
});

export const collections = {
  home,
  thoughts,
};