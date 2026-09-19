---
filename: "2026-09-19-gpt-6-astra-vs-modelos-locales"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-09-19T10:00:00-03:00"
publishDate: "2026-09-19T10:00:00-03:00"
modifiedDate: "2026-09-19T10:00:00-03:00"
title: "GPT-6 Astra vs modelos locales: qué puede hacer cada uno en ingeniería de software"
description: "Comparo GPT-6 Astra (OpenAI) con los mejores modelos locales para coding: tareas reales de ingeniería, límites de hardware y cuán lejos están los open-weight del frontier."
author:
  name: "Jaime Hernández"
  url: "https://jaimehernandez.dev"
authorHandle: "devjaime"
tags:
  - "GPT-6 Astra"
  - "Modelos locales"
  - "Open Source"
  - "Ingeniería de Software"
  - "IA"
category: "AI Engineering"
draft: false
time: 14
featured: true
lang: es
type: article
source: human
reviewStatus: published
---

## Frontier en la nube vs ownership local

Cada vez que sale un modelo “más capaz”, la pregunta práctica no es si satura un leaderboard. Es **dónde quiero que viva el trabajo**: en una API con herramientas hospedadas, o en una GPU bajo mi control.

GPT-6 Astra, anunciado por OpenAI en septiembre de 2026, es el modelo más capaz de la compañía para trabajo end-to-end duro: razonamiento, coding, computer use, investigación y documentos. Al mismo tiempo, el ecosistema open-weight —Qwen3-Coder, Devstral, gpt-oss, DeepSeek, GLM— sigue cerrando huecos en tareas de ingeniería que hace dos años parecían exclusivas del frontier.

Este post no es “cloud gana” ni “local gana”. Es una comparación honesta de **qué puede hacer cada uno en ingeniería de software**, con qué hardware, a qué costo, y con qué límites de privacidad, offline y control. Uso cifras del [anuncio de OpenAI](https://openai.com/index/gpt-6-astra/) y de la [documentación de API](https://developers.openai.com/api/docs/models/gpt-6-astra/), y marco los benchmarks de terceros (Real-SWE, guías de hardware de la comunidad) como lo que son: reportes secundarios, no evangelio.

## Qué es GPT-6 Astra

Según la documentación oficial, el id de API es `gpt-6-astra`. OpenAI lo posiciona como el modelo más capaz para el trabajo difícil de punta a punta. Los números duros del producto:

| Dimensión | Valor (docs OpenAI) |
| --- | --- |
| Contexto | hasta **1.050.000** tokens |
| Salida máxima | **128.000** tokens |
| Knowledge cutoff | **30 abr 2026** |
| `reasoning.effort` | `low`, `medium`, `high`, `xhigh`, `max` |
| Precio API (aprox.) | **~$10 / $50** por 1M tokens input/output (puede cambiar; hay multipliers por prompts largos, cache, batch, flex y fast mode) |

Las herramientas que importa para ingeniería —vía Responses API— incluyen web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP y tool search. Eso no es “chat con autocomplete”: es un **harness cloud** con shell, parches, navegación y skills.

El rollout cubre ChatGPT (Plus, Pro, Business, Enterprise), API, Azure y Bedrock. En Enterprise, como suele pasar con features nuevas, puede requerir que un admin lo habilite.

### Claims de software engineering (OpenAI)

Del anuncio y tablas públicas de OpenAI (snippets de lanzamiento):

- **Terminal-Bench 4.0**: 57,9%
- **DeepSWE v1.1**: 74,1%
- **Artificial Analysis Coding Agent Index** (según tabla OpenAI): ~67
- En computer/browser use, OpenAI reporta ~**1,9×** más rápido vs GPT-5.6 Sol en Mind2Web con harness Codex actualizado

OpenAI también lo posiciona como SOTA en computer use, browsing, software engineering y ciencia. Un matiz importante de seguridad: bajo Preparedness, Astra alcanza el umbral **Critical** en capacidades cibernéticas; eso implica **restricciones** en cyber avanzado, no un free-for-all ofensivo. Para un ingeniero que usa agentes en prod, es relevante: el modelo es más capaz *y* más acotado en ciertas clases de tareas.

### Real-SWE: el suelo de la empresa privada

Un benchmark de terceros que me importa más que saturaciones en repos públicos: **Real-SWE** (Specific Labs, sep 2026). Según reportes del leaderboard publicado, Astra + Codex CLI obtiene ~**33,8%** pass@1 en tareas privadas de empresa; Claude Fable 5.1 + Claude Code lideró con ~**38,8%**.

La lección no es “Astra pierde”. Es que **el código privado de empresa sigue siendo duro para todos los modelos**, incluso el frontier. Si tu expectativa es “el agente resuelve el 90% de tickets de billing/tax/migración en un monolito desconocido”, los números de Real-SWE te bajan a tierra.

## Qué significa “el local más avanzado”

Aquí hay que ser preciso: **local ≠ open-weight en un rack**. Muchos “mejores open-weight” viven en clusters o vía API de terceros. Para este post, “local práctico” es lo que puedes correr en hardware razonable sin mentirte sobre VRAM.

### Tier 1 — Single GPU ~24 GB (el día a día)

El standout que más recomiendo hoy para coding cotidiano en una tarjeta de 24 GB es **Qwen3-Coder 30B-A3B** (MoE, ~3B activos). Licencia Apache-2.0. En cuantización Q4, la comunidad reporta footprints del orden de **~17–22 GB** según contexto (guías como quantized.uk / localmodel.run / Hardwarepedia; cifras estimadas, no gospel). Contexto nativo largo (256K, extensible), buen fit para FIM, edits y agent loops cortos.

También en este tier, según reportes de comunidad y del propio Mistral: **Devstral Small 2 (24B)** —orientado a trabajo agentic multi-archivo— cabe en consumer GPUs (RTX 4090 / equivalentes) con cuantización cuidadosa. Útil cuando el harness (Cline, Continue, Aider, Vibe, etc.) importa tanto como el modelo.

### Tier 2 — Una tarjeta “seria” (~80 GB) o workstation

**gpt-oss-120b** (~117B MoE, ~5B activos, Apache-2.0) cabe, según guías como [dreaming.press](https://dreaming.press/posts/how-to-run-gpt-oss-120b-single-80gb-gpu-agent-backend.html) (sep 2026, guía comunitaria), en una sola GPU de ~80 GB (H100 / MI300X) con cuantización MXFP4 (~60 GB de pesos). Eso ya no es un laptop: es un backend de agente privado en un nodo.

### Tier 3 — Open-weight gigantes (no son “tu notebook”)

**DeepSeek V4 Pro**, **Qwen3-Coder 480B**, **GLM-5.x** y similares: mejor capacidad bruta, pero **no son locales de escritorio**. Viven en racks, clouds open-weight o APIs. Compararlos con Astra como si fueran “gratis en mi Mac” distorsiona la decisión.

| Tier | Ejemplo | Hardware típico | Rol |
| --- | --- | --- | --- |
| Everyday local | Qwen3-Coder 30B-A3B | 24 GB Q4 | Autocomplete, edits, agentes cortos |
| Agentic 24 GB | Devstral Small 2 24B | 24 GB (cuantizado) | Multi-file, tool use |
| Nodo privado | gpt-oss-120b | ~80 GB | Backend de agente on-prem |
| Open-weight frontier | Qwen3-Coder 480B, DeepSeek V4 Pro, GLM-5.x | Cluster / API | Cercano a cloud, sin ownership de laptop |

## Matriz de tareas de ingeniería de software

La pregunta útil es por **tarea**, no por marca. Abajo, “local fuerte” = lo mejor que cabe en 24–80 GB con un harness decente; “Astra” = modelo + herramientas hospedadas (Codex / Responses).

| Tarea | Quién suele ganar | Por qué |
| --- | --- | --- |
| **Autocomplete / FIM** | Local (empate práctico) | Latencia y costo marginal: un MoE 3B activo en GPU local responde sin round-trip. Astra es overkill para completar una línea. |
| **Edit single-file** | Empate / ligera ventaja local en loop | Diffs pequeños: Qwen3-Coder / Devstral bastan. Astra brilla si el edit pide juicio de diseño o research web. |
| **Feature multi-archivo** | Astra (margen clara) | Planificación, apply patch, shell y contexto largo confiable. Locales agentic (Devstral, Qwen3-Coder) lo intentan; fallan más en coherencia cross-file. |
| **Debug incidente producción** | Astra | Logs + hypotesis + tools + browsing de docs. Local ayuda a grepear y proponer; el juicio de causa raíz y el acceso a tools hospedados pesan. |
| **Diseño de arquitectura** | Astra | Trade-offs, alternativas, riesgos. Locales dan borradores decentes; el frontier mantiene mejor el hilo de constraints de negocio. |
| **Generación de tests** | Empate inclinado a local para volumen | Tests unitarios/property: local barato. Tests de integración difíciles o flaky diagnosis: Astra. |
| **Migración / refactor grande** | Astra | Ventanas de contexto enormes + shell + patch. Locales con 256K ayudan, pero la *fiabilidad* del long context y el loop largo favorecen al frontier. |
| **Security review** | Astra con humano | Astra razona mejor sobre clases de vulnerabilidades; **cyber Critical** restringe ayuda ofensiva avanzada. Local es útil para scanners + triage privado sin subir el repo. |
| **Computer-use / browser agents** | Astra | OpenAI lo posiciona como SOTA; tools nativos de computer use. Locales con browser tools existen, pero el gap de juicio + robustez es grande. |
| **Agent loops de horizonte largo** | Astra | Menos deriva, mejor uso de tools, skills y MCP. Local gana en privacidad y costo si el loop es corto y acotado. |

### Lectura de la matriz

Para el **inner loop** (completar, editar, generar tests, refactor chico), un local fuerte ya es “suficientemente bueno” y a menudo *mejor* en $/token y latencia. Para el **outer loop** (incidente, arquitectura, migración, agente que navega y aplica patches durante horas), Astra —o un frontier peer— sigue siendo el techo.

El número de Real-SWE (~34% Astra, ~39% Fable en privados) recuerda que ni el techo es magia: **empresa privada, reglas locales, medianas de 11 archivos tocados** siguen rompiendo agentes.

## Cuán lejos está lo local del frontier

Gaps honestos, sin marketing:

1. **Juicio de ingeniería.** No es solo “escribe el patch”: es decidir *qué* no tocar, qué ADR escribir, qué riesgo aceptar. Los open-weight de 24–120B mejoraron mucho; el frontier todavía generaliza mejor bajo ambigüedad.
2. **Long context confiable.** Tener 256K o 1M en la ficha no es lo mismo que *usar* bien ese contexto. Astra ofrece hasta ~1,05M con un producto pensado para ventanas Codex / prior windows buscables; en local, KV cache, cuantización y “lost in the middle” siguen siendo fricción real.
3. **Tool use robusto.** Shell hospedado, apply patch, computer use, MCP y skills integrados reducen el glue code que tú tienes que mantener. En local, el harness (Ollama + Continue, vLLM + OpenHands, etc.) es tan importante como el checkpoint —y varía más.
4. **Cyber y research agentes.** Capacidades altas + políticas Preparedness: el frontier cloud tiene techo y frenos. Local open-weight no tiene el mismo producto de safety; tampoco el mismo techo de computer-use.
5. **Resolución en código privado.** Incluso Astra+Codex ~33,8% en Real-SWE. El gap local↔frontier importa, pero el gap **agente↔ingeniero senior en repo desconocido** sigue siendo el que más duele.

Dicho al revés: en autocomplete, tests unitarios y features acotadas con buen harness, el gap se siente pequeño. En “arregla este incidente de pagos en tres servicios con runbooks internos”, se siente enorme —y a veces el frontier tampoco lo cierra solo.

## Cuándo usar cada uno (recomendación híbrida)

Mi setup mental hoy:

### Usa local cuando…

- El código o los datos **no deben salir** (PII, IP, compliance).
- Quieres **offline** o latencia de milisegundos en el IDE.
- El volumen es alto: miles de completions/día donde $10/$50 por millón se nota.
- La tarea es FIM, edit single-file, tests, docs internas, triage con scanners.
- Puedes fijar el modelo (Qwen3-Coder 30B-A3B o Devstral Small 2 en 24 GB; gpt-oss-120b si tienes el nodo).

### Usa Astra cuando…

- Necesitas **computer use**, browsing serio, research + patch en el mismo loop.
- El trabajo es multi-archivo, migración, arquitectura o incidente con ambigüedad.
- Quieres el harness managed (Codex, shell, apply patch, skills, MCP) sin operar vLLM.
- El costo de un error humano supera el costo de tokens a $10/$50 por millón.
- Estás en Azure/Bedrock/Enterprise y ya tienes el compliance path hacia OpenAI.

### Híbrido que más me funciona

1. **Local** genera el 70–80% del volumen (completions, drafts, tests).
2. **Astra** (o peer frontier) revisa, diseña, desbloquea el 20–30% duro.
3. **CI + eval** (tests, linters, secret scanning, review humano) como outer loop —independiente del modelo.
4. Nunca subir secretos “porque el modelo es bueno”. El modelo no es tu boundary de seguridad.

| Escenario | Inclino a… |
| --- | --- |
| Startup con repo semi-público y poca PII | Astra + Codex para features; local para autocomplete |
| Banco / salud / gov con datos sensibles | Local / VPC open-weight primero; frontier solo con contrato y redaction |
| Laptop 24 GB, viaje, avión | Qwen3-Coder 30B-A3B o Devstral Small 2 |
| Workstation 80 GB on-prem | gpt-oss-120b como backend de agentes internos |
| “¿Puede el agente cerrar el ticket de tax jurisdiction?” | Ni local ni frontier solos: humano + harness + dominio |


### Un flujo concreto que uso

1. Abro el IDE con Qwen3-Coder 30B-A3B (o Devstral Small 2) para FIM y edits chicos: no pago latencia de red ni tokens cloud.
2. Cuando la feature cruza tres o más archivos con contratos ambiguos, cambio a Astra/Codex: pido plan → diffs → tests → PR description.
3. Si el incidente involucra logs de prod + docs externas + un runbook interno, Astra con file search / shell; el local solo grepea lo que ya bajé.
4. Security: scanners y SAST locales primero; Astra para explicar clases de riesgo y remediación —sin pedirle exploits. Preparedness Critical no es un detalle de marketing.
5. Cierro con CI: tests, lint, secret scan. El modelo no mergea.

Ese flujo no maximiza un benchmark. Maximiza **control del secreto** y **techo donde duele**.

### Costo: no solo el precio por millón

A ~$10 / $50 por 1M (según docs; puede cambiar), una sesión agentic larga con reasoning `high`/`xhigh`/`max` y tools no es barata. Cache de input ($1 / 1M cached según docs) ayuda en loops repetitivos. Batch/Flex al 50% ayudan en trabajo asíncrono. Pero el costo *real* del local es CAPEX (GPU), electricidad, tiempo de ops (vLLM, cuantización, plantillas de tool calling) y el riesgo de un harness mal configurado.

Si tu equipo ya quema cientos de dólares/día en agentes cloud, un nodo 80 GB con gpt-oss-120b puede amortizarse. Si eres un solo ingeniero con una 4090, Qwen3-Coder 30B-A3B suele ser el sweet spot: Apache-2.0, MoE rápido, suficiente para el inner loop.

## Conclusión

Astra sube el techo del **agente cloud con tools**: contexto enorme, reasoning effort hasta `max`, computer use, coding y research en un solo producto. Los números oficiales de Terminal-Bench / DeepSWE / Coding Agent Index son fuertes; Real-SWE recuerda que el suelo de la empresa privada sigue bajo para todos.

Los modelos locales no son “Astra pero gratis”. Son otra curva: **ownership, privacidad, latencia y costo marginal**, con un techo más bajo en juicio de horizonte largo y computer use. En 24 GB, Qwen3-Coder 30B-A3B y Devstral Small 2 ya son compañeros serios de ingeniería diaria. En 80 GB, gpt-oss-120b es un backend privado creíble. Los gigantes open-weight en rack se acercan al frontier —pero dejan de ser “locales” en el sentido de laptop.

La decisión madura no es elegir un bando. Es **asignar tareas al techo correcto** y mantener el juicio humano donde Real-SWE dice que todavía fallamos ~60–70% de las veces.

### Enlaces oficiales

- [GPT-6 Astra — anuncio OpenAI](https://openai.com/index/gpt-6-astra/)
- [GPT-6 Astra — docs API](https://developers.openai.com/api/docs/models/gpt-6-astra/)

Terceros (etiquetados): Real-SWE / Specific Labs (sep 2026); Artificial Analysis si contrastas Coding Agent Index; guías de hardware comunitarias (dreaming.press y similares) para footprints de VRAM.

---

*English version:* [/blog/2026-09-19-gpt-6-astra-vs-local-models](/blog/2026-09-19-gpt-6-astra-vs-local-models)
