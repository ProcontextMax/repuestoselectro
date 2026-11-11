import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tecnicas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tecnicas' }),
  schema: z.object({
    titulo: z.string(),
    tituloSeo: z.string().max(65),
    descripcion: z.string().min(120).max(160),
    marca: z.string(),
    slug: z.string(),
    tema: z.string(),
    tipo: z.enum([
      'instalacion',
      'diagnostico',
      'mantenimiento',
      'autenticidad',
      'compatibilidad',
      'comparativa',
    ]),
    keyword: z.string(),
    fecha: z.coerce.date(),
    autor: z.string().default('Equipo editorial de repuestoselectro.lat'),
    revisor: z.string().default('Revisión técnica pendiente'),
    faqs: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { tecnicas };