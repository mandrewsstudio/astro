import { defineCollection, z } from 'astro:content';

const home = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('In Progress'),
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
    description: z.string(),
    date: z.date(),
    author: z.string().default('In Progress'),
  }),
});

export const collections = {
  home,
  thoughts,
};