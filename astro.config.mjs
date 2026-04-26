// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Cosmos Codex',
			defaultLocale: 'pt-BR',
			sidebar: [
				{
					label: 'Raças',
					autogenerate: { directory: 'racas' },
				},
			],
		}),
	],
});
