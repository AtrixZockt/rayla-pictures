import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sets' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    cover: z.string(),
    images: z.array(z.string()),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { sets };