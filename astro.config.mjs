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
