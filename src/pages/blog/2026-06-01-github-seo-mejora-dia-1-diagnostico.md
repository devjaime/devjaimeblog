---
title: "Mejora SEO GitHub — Día 1: Diagnóstico y Plan de Acción"
description: "Análisis completo del perfil GitHub de devjaime: 483 repos, 76 followers, 0% con topics. Primer paso del plan de mejoras SEO que ejecutaré semanalmente."
publishDate: 2026-06-01
author: 
  name: "Jaime Hernández"
  url: "https://devjaime.cl"
tags: 
  - "GitHub"
  - "SEO"
  - "Open Source"
  - "Developer Branding"
  - "Career"
category: "Career & Branding"
image: "/images/github-seo-diagnostico.png"
draft: false
---

# Mejora SEO GitHub — Día 1: Diagnóstico y Plan de Acción

Hace unos días pedí un análisis SEO de mi perfil GitHub y LinkedIn. El resultado fue revelador: **483 repos públicos, pero la visibilidad era casi nula**. Sin topics, sin READMEs, sin estructura. Hoy starts el plan de mejora que ejecutaré cada semana de forma automática.

---

## 📊 El Diagnóstico

### Métricas actuales del perfil

| Métrica | Valor | Diagnóstico |
|---------|-------|-------------|
| Repositorios públicos | 483 | ⚠️ Exceso sin mantenimiento |
| Seguidores | 76 | ⚠️ Bajo para 8 años de cuenta |
| Bio | "Software Engineer" | ❌ Sin keywords, genérica |
| Repos con topics | ~0% | ❌ Cero visibilidad en search |
| READMEs en repos | <10% | ❌ Oportunidad perdida |
| Stars totales | ~20 | ❌ Muy bajo para 483 repos |

### Top repositorios por stars

```
⭐7 | taller_principiante_python_ia     | Python  | Sin topics
⭐6 | taller_intermedio_python_ia       | Python  | Sin topics  
⭐3 | taller_avanzado_python_ia         | Python  | Sin topics
⭐1 | openreel-video                    | TypeScript | Fork — descripción completa
⭐1 | orienta-ai                        | JavaScript | Sin topics
⭐1 | devjaimeblog                     | Astro   | Sin topics
```

**Problema claro:** los talleres de Python (15 stars combinados) no tienen ni topics ni descripciones optimizadas.

---

## 🔍 Problemas Identificados

### 1. Bio sin poder de búsqueda

```
Actual: "Software Engineer https://jaimehernandez.dev/ https://codeia.cl/ hernandez.hs@gmail.com"
```

La bio no contiene ninguna keyword de las que los reclutadores buscan:
- Python, Golang, TypeScript
- AI, ML, LangChain, LlamaIndex, MCP
- GCP, Cloud Architecture
- Backend, API, microservices

### 2. cero topics en repositorios

GitHub search funciona con topics. Sin ellos, tus repos no aparecen en búsquedas relevantes. Cada repo necesita 3-5 topics mínimo.

### 3. READMEs ausentes

Cada repo importante necesita:
- Descripción clara (qué hace, para quién)
- Stack tecnológico
- Quick start (cómo usar)
- Badges

### 4. Señal/Ruido destruida

483 repos, la mayoría con 0 stars y sin descripción. Esto confunde a reclutadores y diluye el perfil.

---

## 🎯 El Plan — Acciones Prioritarias

### CRÍTICO (esta semana):
1. ✅ Agregar topics a los 20 repos más activos
2. ✅ Mejorar la bio con keywords
3. ✅ Limpiar/archivar 200+ repos inactivos

### MEDIUM (próximas semanas):
4. Crear README para cada repo importante
5. Crear repo "vocari.cl" (lo menciono en README pero no existe)
6. Hacer pinned repositories los 6 mejores proyectos

### LONG TERM:
7. Crear contenido en el blog sobre Python AI
8. Mejorar el portfolio jaimehernandez.dev

---

## 🤖 Automation — Cron Jobs Creados

He configurado 4 tareas recurrentes que ejecuto cada semana automáticamente:

| Job | Frecuencia | Qué hace |
|-----|------------|----------|
| 🏷️ Repos sin Topics | Semanal | Detecta repos sin topics y sugiere topics por lenguaje |
| 📄 Repos sin README | Semanal | Detecta repos sin README y provee template |
| 🗑️ Repos para archivar | Mensual | Recomienda archivar inactivos |
| 📊 Resumen semanal métricas | Semanal | Compara followers, stars, languages |

---

## 📅 Progreso Histórico

### 2026-06-01 — Día 1
- ✅ Análisis completo del perfil GitHub
- ✅ Identificación de 4 problemas críticos
- ✅ Creación de 4 cron jobs de mantenimiento
- ✅ Skill creado: `github-seo-maintenance`
- 🔄 Pendiente: ejecutar mejoras reales

---

## 🚀 Siguiente paso

La próxima semana iniciaré las mejoras reales:
1. **Bio actualizada** con keywords de búsqueda
2. **Primer batch de topics** en los talleres Python
3. **Primer README** para skill-graph
4. **Primer commit de limpieza** de repos inactivos

Todo el progreso se documentará aquí, en este blog, con entradas semanales.

---

*¿Quieres que analice tu perfil GitHub también? Escríbeme y te hago el diagnóstico igualito.*