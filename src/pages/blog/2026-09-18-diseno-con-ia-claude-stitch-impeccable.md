---
filename: "2026-09-18-diseno-con-ia-claude-stitch-impeccable"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-09-18T18:00:00-03:00"
publishDate: "2026-09-18T18:00:00-03:00"
modifiedDate: "2026-09-18T18:00:00-03:00"
title: "Diseño con IA: Claude Design, Stitch, Impeccable y cómo los modelos locales se acercan"
description: "Los desafíos reales de diseñar con IA, tres enfoques (Claude Design, Google Stitch e Impeccable), técnicas concretas, y cómo los modelos locales pueden ponerse al día con los frontier."
author:
  name: "Jaime Hernández"
  url: "https://jaimehernandez.dev"
authorHandle: "devjaime"
tags:
  - "Diseño"
  - "IA"
  - "UI"
  - "Claude"
  - "Google Stitch"
  - "Impeccable"
  - "Modelos locales"
category: "AI Engineering"
draft: false
time: 14
featured: true
lang: es
type: article
source: human
reviewStatus: published
---

## El problema no es “hacer UI”. Es hacer UI que no se note como IA

La primera vez que pedí a un modelo “diseña un dashboard moderno”, el resultado se veía… bien. Hasta que lo puse al lado de un producto real. Gradientes púrpura, grilla de cards idénticas, Inter en todos lados, beige “AI”, glassmorphism, animaciones con bounce. El clásico **AI slop**: una estética promedio del corpus de entrenamiento, no de tu marca.

Eso no es un bug del prompt. Es el default estadístico. Sin sistema de diseño, sin discovery y sin un outer loop humano, la IA acelera la producción de interfaces genéricas. Y genérico, en producto, es deuda visual: se acumula en cada landing, cada pantalla interna y cada “prototipo rápido” que alguien termina shippeando.

Este post es el paralelo de lo que escribí sobre code review con IA: la herramienta amplifica, pero **el juicio queda afuera**. Aquí el juicio es gusto de marca, accesibilidad, propósito para usuarios y criterio de ship. Miro tres enfoques distintos —[Claude Design](https://claude.com/product/design), [Google Stitch](https://stitch.withgoogle.com/) e [Impeccable](https://impeccable.style/)— y después las técnicas que sí mueven la aguja, incluida la pregunta incómoda: ¿pueden los modelos locales acercarse a los frontier sin magia?

## Los desafíos reales del diseño con IA

### 1. AI slop como default visual

Si no restringes, el modelo vuelve a los mismos tropes: hero con blur, cards con sombra suave, tipografía segura, acentos violeta/azul, microinteracciones decorativas. No porque sean malas por sí solas, sino porque **todas las apps empiezan a parecer la misma app generada**.

### 2. Inconsistencia de marca sin design system

Sin tokens, componentes y reglas escritas, cada conversación reinventa la identidad. Un botón “primary” en la pantalla A no se parece al de la pantalla B. En un equipo eso destruye confianza: el diseño deja de ser un lenguaje compartido y vuelve a ser una imagen aislada.

### 3. Saltar discovery y ir directo a píxeles

La tentación es enorme: “hazme la UI del onboarding”. Sin brief de usuarios, jobs-to-be-done, estados vacíos/error y criterios de éxito, obtienes maquetas bonitas que resuelven el problema equivocado. La IA no pregunta por default; **tú tienes que forzar el shape antes del craft**.

### 4. El gap de handoff: mock ≠ código de producción

Una captura hermosa no es un contrato. Faltan tokens nombrados, variantes de componente, responsive real, a11y, estados y ownership en el repo. Si el handoff es “mira este screenshot”, el agente de coding improvisa —y vuelve el slop, ahora en CSS.

### 5. Límites de tokens y costo en herramientas cloud

Los canvas de diseño con IA consumen cuota compartida con el resto del producto (chat, code, slides). Un deck completo o un rediseño largo cuesta más que un mensaje típico. Eso importa en equipos: hay que diseñar el flujo para no quemar el presupuesto en exploración infinita.

### 6. Outer loop: gusto, accesibilidad y juicio de producto

La IA es excelente en el *inner loop* (variantes, layout, tipografía, detección de patrones). El *outer loop* sigue siendo humano: ¿esto representa la marca?, ¿alguien con teclado y lector de pantalla puede usarlo?, ¿shippeamos esto o es solo exploración?

| Loop | Quién | Qué decide |
| --- | --- | --- |
| **Inner** | Modelo + skills + detectores | Variantes, layout, type, color, hallazgos mecánicos |
| **Outer** | Diseño / producto / ingeniería | Marca, usuarios, a11y de negocio, merge y release |

## Tres productos, tres filosofías

No son competidores uno-a-uno. Uno es canvas conversacional dentro del ecosistema Claude, otro es canvas nativo de Google Labs para “vibe design”, y el tercero es un **vocabulario de diseño para agentes de coding** que vive en el repo.

### Claude Design (Anthropic Labs)

Según el producto oficial en [claude.com/product/design](https://claude.com/product/design) y el anuncio de Anthropic Labs, Claude Design es un workspace en beta para crear trabajo visual on-brand: prototipos, decks, landings, one-pagers y más. Está incluido en planes pagos (Pro, Max, Team, Enterprise; en Enterprise suele ir apagado hasta que un admin lo active).

Lo que me importa en la práctica:

- **Chat + canvas**: describes, Claude arma una primera versión, iteras con comentarios inline, edición de texto, sliders de ajuste y controles de layout (arrastrar, redimensionar, alinear).
- **Design systems como fuente**: importas desde GitHub, archivos de diseño o codebase. Claude intenta construir con tus componentes y corregir antes de mostrarte el resultado. En equipos grandes, admins pueden fijar un sistema aprobado.
- **Puente con Claude Code**: `/design-sync` para traer el sistema de diseño; `/design` para crear, editar y sincronizar proyectos desde el entorno de código. El handoff deja de ser “pega este PNG”.
- **Export y conectores**: PPTX, PDF, HTML; y conectores hacia herramientas que ya usas (Adobe, Canva, Gamma, Lovable, Miro, Replit, Vercel, Wix, entre otras según la página del producto).
- **Cuota compartida**: el trabajo en Design cuenta hacia los límites del plan, junto con el resto de Claude. No es un silo mágico e infinito.

Claude Design brilla cuando quieres **exploración visual + marca** sin salir del ecosistema Anthropic, y cuando el destino natural es Claude Code o un conector de entrega.

### Google Stitch (Google Labs)

[Stitch](https://stitch.withgoogle.com/) es el canvas de diseño nativo de IA de Google Labs. En marzo de 2026, el [blog de Google Labs](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/) lo reposicionó como software design canvas para lo que llaman **“vibe design”**: partir del objetivo de negocio, de lo que quieres que sienta el usuario, o de referencias —no necesariamente de un wireframe.

Capacidades que destaco (según ese anuncio y materiales públicos del producto):

- Entradas multimodales: texto, imágenes, sketches, código e incluso voz hacia el canvas.
- **Canvas infinito** para divergir/converger; agente de diseño con contexto del proyecto; Agent Manager para explorar direcciones en paralelo.
- Prototipos interactivos: “coser” pantallas y usar Play para recorrer flujos; generación de pantallas siguientes lógicas.
- **DESIGN.md** como archivo agent-friendly para exportar/importar reglas de diseño entre herramientas.
- Puente a desarrollo: MCP server y SDK, skills, exports hacia herramientas como AI Studio y Antigravity; además generación orientada a UI de alta fidelidad y caminos hacia Figma / HTML-código según la documentación pública del producto.

Stitch es fuerte cuando quieres **exploración visual rápida y multimodal** con Gemini, y cuando te conviene un canvas dedicado más que un skill dentro del IDE.

### Impeccable (skill / vocabulario para agentes)

[Impeccable](https://impeccable.style/) no compite como canvas hospedado en el mismo sentido. Es la **vocabulario de diseño faltante para agentes** (Cursor, Claude Code, Codex, Copilot, Gemini CLI, y otros). La tesis: el agente ya escribe UI; lo que falta es expertise de diseño + contexto persistente + detectores de slop.

Piezas clave:

- Contexto durable: `PRODUCT.md` (usuarios, propósito, a11y) y `DESIGN.md` (tokens, tipografía, componentes, reglas).
- Comandos como `/impeccable init`, `shape`, `craft`, `polish`, `audit`, `critique`, `typeset`, `layout`, `colorize`, `animate`, `live`, entre otros.
- Instalación típica: `npx impeccable install` (también marketplace / skills según el harness).
- Detectores determinísticos de AI slop (decenas de checks que corren en código, sin API key) más crítica con LLM.
- Complementa a los canvas: **sube el piso** de la UI que el agente escribe en el repo.

Impeccable brilla cuando el artefacto final es código en producción y quieres que el agente respete proceso, no solo “se vea lindo en un mock”.

### Comparación rápida

| Dimensión | Claude Design | Google Stitch | Impeccable |
| --- | --- | --- | --- |
| **Qué es** | Canvas + chat en Claude | Canvas AI-native (Labs) | Skill / vocabulario para agentes |
| **Dónde vive** | Cloud (Claude web/desktop) | Cloud (Stitch) | Local al repo + harness del agente |
| **Design system** | Import GitHub / archivos / codebase; admin lock | DESIGN.md + extract desde URL / reglas portables | PRODUCT.md + DESIGN.md + tokens/componentes del proyecto |
| **Mejor cuando…** | Exploración on-brand + handoff a Claude Code / conectores | Vibe design multimodal, prototipos y variantes rápidas | Craft en el repo, anti-slop y QA de UI generada |
| **No es…** | Un skill portable a cualquier IDE | Un reemplazo de tu sistema de componentes en prod | Un canvas hospedado tipo Figma/Stitch |

## Técnicas que sí uso (y por qué funcionan)

Estas técnicas aplican con cualquiera de las tres herramientas. Son proceso, no magia de modelo.

### 1. Design system como fuente de verdad

Tokens (color, spacing, type, radius, motion), componentes con variantes, y reglas de marca bloqueadas. Sin esto, cada generación es un mundo nuevo. Con Claude Design o Stitch, importa el sistema *antes* de pedir pantallas. Con Impeccable, documenta lo existente (`/impeccable document`) o inicializa con intención.

### 2. Contexto persistente en archivos

`PRODUCT.md`, `DESIGN.md`, y cuando aplica `AGENTS.md` o equivalentes del harness. El modelo no “recuerda la marca” entre sesiones; **el repo sí**. Un párrafo sobre usuarios en móvil, contraste mínimo y “nunca escondas el conteo de seats” vale más que diez adjetivos en el prompt.

### 3. Shape before craft

Discovery brief antes de píxeles: objetivo, usuarios, flujo feliz, estados borde, una acción primaria por pantalla, anti-referencias (“nada de glassmorphism”). En Impeccable eso es literalmente `shape` antes de `craft`. En un canvas, es el mismo orden: primero intención, después estética.

### 4. Critique + polish en múltiples pases

No pidas “déjalo perfecto” de una. Secuencia útil:

1. Layout / jerarquía  
2. Tipografía  
3. Color / contraste  
4. Motion  
5. Accesibilidad  

Cada pase tiene un criterio de salida. `critique` → `polish` → `audit` es un loop concreto, no un vibe.

### 5. Referencia visual hi-fi como target

Cuando puedas, el target es una imagen o prototipo aprobado, no un párrafo. “Implementa hacia este mock” reduce ambigüedad. Canvas → export/código → agente con la imagen abierta es más estable que “hazlo moderno y limpio”.

### 6. Detectores determinísticos + crítica LLM (QA híbrido)

Los detectores atrapan defaults medibles (beige AI, tipografías conflictivas, chips de status de más, contrastes rotos). El LLM juzga jerarquía emocional y claridad. El híbrido es más barato y más reproducible que “pídele al frontier que revise todo”.

### 7. Contratos de handoff Design → Code

Sync de sistema, tokens nombrados, componentes reales, no solo screenshots. `/design-sync`, DESIGN.md portable, Storybook, o un bundle de handoff. El contrato responde: ¿qué es canónico? ¿quién puede cambiarlo?

### 8. Generación restringida (anti-patrones prohibidos)

Lista explícita en prompts/skills: no Inter por default, no gradientes púrpura genéricos, no bounce, no glassmorphism, no cards-en-cards sin necesidad. Las restricciones *suben* la calidad más que adjetivos positivos sueltos.

### 9. Multi-variante y luego converger

Pide tres direcciones, elige una, congela tokens, profundiza. Divergence → convergence. Stitch lo hace natural en canvas; en agentes, genera ramas o variantes y descarta con criterio escrito.

### 10. Accesibilidad como first-class

Contraste, foco visible, labels, `prefers-reduced-motion`, tamaños táctiles, no información solo por color. Si la a11y es “al final”, nunca llega. Entrála en PRODUCT.md y en el pase de audit.

## Cómo los modelos locales pueden acercarse a los frontier

Visión honesta de ingeniería: un modelo local de 7B–70B no “gana” a Opus o Gemini overnight en gusto multimodal y conocimiento de tendencias. Pero **sí puede cerrar la brecha en *tu* marca** si mejoras proceso, datos y evaluación.

### Distillation y fine-tunes especializados en UI

Enseñar a un modelo más chico con pares (brief → layout bueno / malo), preferencias de tu design system y correcciones de slop. No necesitas el mundo entero; necesitas *tu* distribución de pantallas aprobadas.

### Cuantización + contexto largo en máquina local

GGUF/MLX en Mac o GPU local permiten iterar sin mandar mocks sensibles a la nube. Contexto largo ayuda a meter DESIGN.md, tokens y ejemplos sin recortar el brief.

### RAG sobre tu verdad de diseño

Indexa DESIGN.md, Storybook, tokens de Figma, PRs aprobados y screenshots “golden”. En retrieval, el modelo local recibe evidencia de *cómo se ve lo correcto aquí*, no un promedio de internet.

### Skills que codifican juicio senior

Impeccable-style: process gates (shape → craft → polish), anti-patrones y detectores. Un modelo más débil siguiendo un buen proceso supera a un frontier improvisando sin sistema. Eso es apalancamiento de ingeniería, no de parámetros.

### Speculative decoding / draft-verify

Local genera borradores rápidos; un modelo más capaz (o un humano) verifica solo los pasos duros: jerarquía visual ambigua, branding borderline, decisiones de producto. Ahorras costo y latencia sin abdicar calidad de loop.

### Harnesses de eval offline

Detectores, diffs de screenshot, scanners a11y (axe y similares), checklists de tokens. No requieren frontier. Si tu CI falla el merge cuando el detector marca “AI beige” o contraste roto, el piso sube aunque el generador sea local.

### Híbrido pragmático

Local para iteración privada y volumen; cloud para saltos multimodales difíciles (sketch → hi-fi, critique visual sutil). La frontera no es “todo local” vs “todo cloud”: es **dónde está el secreto y dónde está la dificultad**.

### Límites reales

Visión, gusto y conocimiento de tendencias actuales siguen siendo ventajas de los frontier. Un local no “vence” esa carrera solo por más VRAM. Gana en consistencia de marca, privacidad, costo marginal y velocidad de loop —si le das datos y proceso.

## Cómo elijo la herramienta según el trabajo

| Trabajo | Inclino a… | Por qué |
| --- | --- | --- |
| Explorar landings / decks / one-pagers on-brand | Claude Design | Canvas + design system + export/conectores |
| Vibe design multimodal, prototipos, muchas variantes | Stitch | Canvas infinito, voz, agent manager, DESIGN.md |
| UI en el repo con agentes de coding | Impeccable | PRODUCT/DESIGN.md, comandos, detectores |
| Privacidad / iteración barata | Local + skills + eval | Menos round-trips cloud; mismo contrato de calidad |

La combinación que más sentido me hace hoy: canvas (Claude Design o Stitch) para **divergir**, Impeccable (o un skill equivalente) para **converger en código**, y eval determinística para no mentirme sobre la calidad.

## Conclusión

La IA amplifica la exploración. Eso es bueno —si no confundes velocidad con criterio. Los humanos siguen dueños de la marca, de los usuarios y de las condiciones de ship. Claude Design y Stitch son excelentes para pensar en canvas; Impeccable sube el piso cuando el artefacto es código en el repo. Los modelos locales no cierran la brecha solo con más parámetros: la cierran con **proceso, datos de tu sistema y evaluación**.

Si hoy estás generando UI “moderna” sin design system ni shape, no necesitas un modelo más grande. Necesitas un contrato de diseño y un outer loop con gusto. El resto —sliders, MCP, skills, detectores— son herramientas para respetar ese contrato más seguido.

### Enlaces oficiales

- [Claude Design](https://claude.com/product/design)
- [Google Stitch](https://stitch.withgoogle.com/)
- [Impeccable](https://impeccable.style/)
- [Google Labs: vibe design with Stitch](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)
- [Anthropic: Introducing Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)
