// データは Shipnote (`shipnote sync`) が書き出す。手で直さない。
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const asset = z.object({ name: z.string(), url: z.string(), size: z.number() });

const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    github: z.string(),
    repoUrl: z.string(),
    tagline: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    platforms: z.string(),
    screenshots: z.array(z.string()),
    license: z.string(),
    listed: z.boolean(),
    latest: z
      .object({ tag: z.string(), name: z.string(), url: z.string(), date: z.coerce.date(), assets: z.array(asset) })
      .nullable(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    project: z.string(),
    projectName: z.string(),
    tag: z.string(),
    releaseUrl: z.string(),
    prerelease: z.boolean(),
  }),
});

export const collections = { projects, posts };
