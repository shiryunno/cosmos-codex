import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const tracosRaciais = z.object({
	idade: z.string(),
	tamanho: z.enum(['Minúsculo', 'Pequeno', 'Médio', 'Grande', 'Enorme']),
	deslocamento: z.number(),
	idiomas: z.array(z.string()),
	habilidades: z.array(z.object({
		nome: z.string(),
		descricao: z.string(),
	})),
});

const mechaItem = z.array(z.object({
	title: z.string(),
	description: z.string(),
}));

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				tracos: tracosRaciais.optional(),
				propriedades: mechaItem.optional(),
				custos: mechaItem.optional(),
			}),
		}),
	}),
};
