import { defineCollection, z } from 'astro:content';
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

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({ extend: z.object({ tracos: tracosRaciais.optional() }) }),
	}),
};
