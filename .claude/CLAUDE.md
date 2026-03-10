# devjaimeblog - Proyecto

## Info del Proyecto

- **Tipo:** Blog personal con Astro
- **URL:** https://jaimehernandez.dev
- **Hosting:** Netlify (auto-deploy desde GitHub)
- **Repo:** github.com/devjaime/devjaimeblog

## Estructura

```
devjaimeblog/
├── src/pages/blog/     # Artículos del blog (Markdown)
├── public/             # Assets estáticos
└── astro.config.mjs    # Configuración
```

## Cómo Agregar Artículos

1. Crear archivo en `src/pages/blog/YYYY-MM-DD_titulo.md`
2. Incluir frontmatter con metadata
3. Commit + push a GitHub
4. Netlify hace build automáticamente

## Frontmatter Requerido

```yaml
---
title: "Título del artículo"
description: "Descripción breve"
publishDate: 2026-03-09
author: 
  name: "Jaime Hernández"
  url: "https://devjaime.cl"
tags: ["tag1", "tag2"]
category: "Development"
draft: false
---
```

## URLs

- Blog index: `/blog`
- Artículo: `/blog/2026-03-09_titulo`

## Build

```bash
pnpm build
```

## Cosas a Recordar

- Artículos en `content/posts/` NO se renderizan - deben estar en `src/pages/blog/`
- Netlify detecta cambios en GitHub y hace deploy automáticamente
- Revisar build local antes de push con `pnpm build`
