// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://shiryunno.github.io/cosmos-codex',
	base: '/cosmos-codex',
	integrations: [
		starlight({
			title: 'Códice de Memórias',
			description: 'Compêndio de consulta para a campanha — raças, equipamento, mechas e naves no fim das estrelas.',
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
					items: [
						{ label: 'Visão geral', link: 'equipamento' },
						{ label: 'Munição Especializada', link: 'equipamento/municao' },
						{
							label: 'Armaduras',
							items: [
								{ label: 'Armaduras Leves', link: 'equipamento/armaduras/leves' },
								{ label: 'Armaduras Médias', link: 'equipamento/armaduras/medias' },
								{ label: 'Armaduras Pesadas', link: 'equipamento/armaduras/pesadas' },
								{ label: 'Escudos', link: 'equipamento/armaduras/escudos' },
							],
						},
						{
							label: 'Armas',
							autogenerate: { directory: 'equipamento/armas' },
						},
					],
				},
			],
			customCss: ['./src/styles/custom.css', './src/styles/global.css'],
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
						href: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap',
					},
				},
			],
		}),
	],
});
