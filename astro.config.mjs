// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Cosmos Codex',
			locales: {
				root: {
					label: 'Português',
					lang: 'pt-BR',
				},
			},
			sidebar: [
				{
					label: 'Raças',
					autogenerate: { directory: 'racas' },
				},
				{
					label: 'Facções',
					autogenerate: { directory: 'faccoes' },
				},
				{
					label: 'Mechas',
					items: [
						{ label: 'Visão geral', link: 'mechas' },
						{ label: 'Chassis', autogenerate: { directory: 'mechas/chassis' } },
						{ label: 'Braços', autogenerate: { directory: 'mechas/bracos' } },
						{ label: 'Costas', autogenerate: { directory: 'mechas/costas' } },
						{ label: 'Pernas', autogenerate: { directory: 'mechas/pernas' } },
						{ label: 'Geração', autogenerate: { directory: 'mechas/geracao' } },
					],
				},
				{
					label: 'Naves',
					items: [
						{ label: 'Visão geral', link: 'naves' },
						{ label: 'Classes', autogenerate: { directory: 'naves/classes' } },
						{ label: 'Módulos', autogenerate: { directory: 'naves/modulos' } },
					],
				},
				{
					label: 'Equipamento',
					autogenerate: { directory: 'equipamento' },
				},
			],
			customCss: ['./src/styles/global.css'],
			head: [
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				},
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;1,14..32,400&display=swap',
					},
				},
			],
		}),
	],
});
