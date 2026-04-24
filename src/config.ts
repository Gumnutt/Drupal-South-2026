import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod'

const slides = defineCollection({
  loader: glob({ base: './src/slides', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string().optional(),
    fullscreen: z.boolean().optional(),
    background: z.string().optional(),
    transition: z.string().optional(),
    id: z.string().optional(),
  }),
});

console.log('Slides collection', slides)

export const collections = { slides };
