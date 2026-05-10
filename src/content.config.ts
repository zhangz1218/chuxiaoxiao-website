import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro:schema';

const diary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diary' }),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    mood: z.enum(['happy', 'excited', 'tired', 'sad', 'angry', 'neutral', 'shocked']),
  }),
});

export const collections = { diary };