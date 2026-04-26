# CLAUDE.md

Contexto persistente para Claude Code neste projeto. Leia este arquivo antes de qualquer alteração estrutural.

## Visão geral do projeto

Este é um **site estático de consulta para uma campanha de RPG de mesa** (D&D 5e, mescla das edições 2014/2024 com homebrew). A audiência são os jogadores da mesa — não é um produto comercial, não é documentação técnica, não é um SaaS. É uma wiki temática que precisa ser fácil de consultar durante a sessão (incluindo no celular).

O cenário é **horror cósmico melancólico** ambientado no espaço pós-apocalíptico. Referências estéticas: Spelljammer, Dark Souls, Neon Genesis Evangelion, All Tomorrows. O conteúdo já existe em documentos de design separados (raças, facções, equipamento, mechas, naves, etc.) e está sendo migrado pra cá de forma incremental.

Conteúdo de jogo (lore, regras, stats) **nunca deve ser inventado** — sempre vem dos documentos de design ou de decisão explícita do usuário em conversa.

## Stack

- **Astro** com integração **Starlight** (tema de documentação)
- **TypeScript** em modo strict
- **Pagefind** (busca client-side, embutida no Starlight)
- **Content Collections** com schemas tipados (`src/content.config.ts`)
- **Deploy**: GitHub Pages via GitHub Actions (a configurar)
- Package manager: npm

## Estrutura do projeto

```
/
├── src/
│   ├── content/
│   │   ├── docs/              # páginas .md/.mdx do site
│   │   └── ...                # outras collections (a criar conforme necessário)
│   ├── content.config.ts      # schemas das collections
│   ├── styles/                # CSS customizado
│   └── components/            # overrides do Starlight (quando necessário)
├── public/                    # assets estáticos (imagens, ícones)
├── astro.config.mjs           # configuração principal
└── CLAUDE.md                  # este arquivo
```

Páginas do site são definidas por arquivos em `src/content/docs/`. O roteamento é file-based: `src/content/docs/racas/aesir.md` vira `/racas/aesir/`.

## Convenções de conteúdo

### Idioma e nomenclatura

- Conteúdo em **português brasileiro**.
- Slugs em **kebab-case sem acentos**: `anao-da-poeira-estelar`, não `anão-da-poeira-estelar`.
- Títulos visíveis (frontmatter `title`) **com acentuação correta**: "Anão da Poeira Estelar".
- Caminhos de pasta também em kebab-case sem acentos.

### Frontmatter obrigatório

Todo arquivo `.md` em `src/content/docs/` precisa ter ao menos:

```yaml
---
title: Nome da Página
description: Resumo curto de uma linha (vai pra meta tags e SEO interno).
---
```

Outros campos do Starlight (`sidebar`, `template`, `tableOfContents`, `editUrl`) só quando fazem diferença real.

### Linguagem temática

A terminologia do cenário é deliberada e deve ser preservada. Quando houver dúvida entre termo técnico genérico e termo temático, use o temático:

- "Sintonia" no lugar de "buff"
- "Ressonância" no lugar de "hack" ou "vínculo"
- "Câmara de Canalização" no lugar de "interface arcana"
- "Faróis", "Carta", "Forja Estelar", "Litania do Espaço" — termos próprios, sempre com inicial maiúscula
- "Abismo", "Vazio", "Éther", "Yggdrasil" — entidades cósmicas, sempre maiúsculas
- Nomes de raças com inicial maiúscula: Kimurokami, Aesir, Atromus, Ceifador, Kirage, Biowl, Kitsune, Raptor Estelar, Anão da Poeira Estelar

### Tom da escrita

Melancólico, denso, evocativo onde couber. Mas a função primária é consulta rápida em mesa — então: descrição evocativa no topo, mecânica clara abaixo. Não enche linguiça poética em cima de uma tabela de dano.

## Content Collections

A medida que o site cresce, novos tipos de conteúdo (raças, armas, mechas, facções, deuses, itens mágicos) viram **collections tipadas** em `src/content.config.ts`. Schema-first: antes de criar várias páginas de um tipo novo, definir o schema com Zod e validar.

Tipos planejados (a implementar conforme demanda):

- `racas` — fichas de raça jogável
- `faccoes` — facções e grupos
- `armas` — catálogo de armamento por tier
- `armaduras` — catálogo de armaduras
- `mechas` — peças e chassis
- `naves` — módulos e cartas
- `itens-magicos` — relíquias e artefatos
- `deuses` — panteão (ainda em desenvolvimento)

**Não criar collection nova sem antes confirmar o schema com o usuário.** Cada collection é uma decisão de design que afeta como o conteúdo é organizado e exibido.

## Identidade visual

A customização visual será feita em fases:

1. Paleta cósmica melancólica (escuros frios, acentos quentes pontuais) via CSS custom properties do Starlight
2. Fontes (a decidir — provavelmente uma serif evocativa pro título e uma sans clara pro corpo)
3. Componentes específicos do cenário só se a navegação padrão do Starlight não der conta

**Não fazer overhaul visual sem discussão prévia.** Customização é progressiva e seletiva.

## Fluxo de trabalho

- Dev server: `npm run dev`
- Build: `npm run build`
- Preview do build: `npm run preview`
- Adicionar integração Astro: `npx astro add <nome>`
- Atualizar Starlight: `npx @astrojs/upgrade`

Mudanças significativas (nova collection, mudança de estrutura de pastas, alteração no `astro.config.mjs`) **devem ser propostas em prosa antes de serem aplicadas**, não executadas direto.

Mudanças pontuais e contidas (corrigir typo, adicionar página seguindo padrão existente, ajustar CSS específico) podem ser feitas direto.

## O que NÃO fazer

- **Não inventar lore, regras, stats ou nomes próprios.** Se faltar informação, perguntar.
- **Não usar emojis** em títulos ou texto de conteúdo. O tom não comporta.
- **Não escrever em inglês** no conteúdo do site (UI do Starlight pode ficar em inglês por enquanto, mas o conteúdo é PT-BR).
- **Não criar páginas placeholder vazias** ("conteúdo em breve"). Se o documento não está pronto, não cria a página ainda.
- **Não usar JS interativo (React/Vue/Svelte) sem necessidade clara.** Astro envia zero JS por padrão e isso é uma vantagem que vale preservar — só hidratar componentes quando há real interatividade necessária.
- **Não traduzir os termos próprios do cenário** mesmo quando "soam estranho" — eles são deliberados.

## Referências externas

Quando bater dúvida sobre Astro ou Starlight, consultar a documentação oficial em vez de adivinhar:

- Starlight: https://starlight.astro.build/
- Astro: https://docs.astro.build/
- Content Collections: https://docs.astro.build/en/guides/content-collections/

API e features mudam — confirme antes de usar.