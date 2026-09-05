---
filename: "2026-09-05-cerebro-jaime-grafo-de-conocimiento-personal"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-09-05T10:00:00-0300"
title: "Cerebro Jaime: un grafo de conocimiento personal, no un modelo afinado"
description: "Cómo construí un gemelo cognitivo en Markdown compatible con Obsidian: ontología, rúbricas de evidencia y un ciclo de aprendizaje sin cron ni fine-tuning."
publishDate: "2026-09-05T10:00:00-0300"
modifiedDate: "2026-09-05T10:00:00-0300"
author:
  name: "Jaime Hernandez"
  url: "https://devjaime.cl"
tags:
  - "AI Engineering"
  - "Agents"
  - "Knowledge Graphs"
  - "OpenClaw"
  - "Obsidian"
category: "AI Engineering"
lang: "es"
type: "article"
source: "hybrid"
reviewStatus: "published"
draft: false
time: 12
featured: true
---

No quiero un chatbot que “me recuerde”. Quiero un sistema que sepa **por qué** decidiría algo, con qué evidencia, y qué tan seguro está de eso.

Esa es la diferencia entre memoria conversacional y un cerebro explícito.

Durante los últimos días iteré ese diseño con un agente de código hasta dejarlo operativo: **Cerebro Jaime**. No es un modelo reentrenado. Es un grafo de conocimiento personal en Markdown, compatible con Obsidian, que un asistente consulta y actualiza cuando la conversación importa.

## El error de afinar un modelo para “ser tú”

Fine-tuning, RAG sobre chats y “memoria” de producto resuelven problemas distintos al de un gemelo cognitivo.

| Enfoque | Qué guarda | Qué falla cuando se trata de identidad |
|---|---|---|
| Fine-tuning | Estilo estadístico | No se audita, no se corrige nodo a nodo, mezcla época y rasgo |
| RAG de conversaciones | Fragmentos similares | Recupera anécdotas, no criterios; confunde una broma con una política |
| Memoria de producto | Notas sueltas | Sin ontología, sin rúbrica, sin trazabilidad ni contradicciones visibles |
| Grafo explícito | Afirmaciones tipadas con evidencia | Exige disciplina. A cambio, se puede leer, corregir y versionar |

Un modelo puede imitar mi tono. No puede mostrarme **qué creyó**, **de qué conversación salió** y **qué nivel de evidencia tiene**. Si no puedo abrir esa creencia como una nota, no es un cerebro: es un reflejo.

Por eso la regla de diseño es simple: **una conversación produce evidencia, no identidad automática**.

## Qué es Cerebro Jaime

Un vault de Markdown con notas enlazadas. Cada nota es un nodo. Cada vínculo tipado es una relación. Obsidian lo visualiza como grafo. El asistente lo trata como fuente de verdad operativa.

No reentrena pesos. Construye memoria:

- consultable;
- corregible;
- versionable;
- privada.

La unidad mínima no es “un recuerdo”. Es una afirmación atómica con tipo, estado y fuente.

```markdown
- sujeto:: [[Personas/Jaime Hernández]]
- relacion:: prefiere
- objeto:: [[Preferencias/Soluciones prácticas y directas]]
- evidencia:: [[Fuentes/2026-09-04 - Solicitud de yo virtual]]
```

Si no hay fuente, no entra al perfil. Si hay contradicción, no se promedia: se enlaza.

## Ontología: tipos, no carpetas decorativas

El grafo no es un diario con wikilinks. Distingue clases porque un valor no se actualiza igual que un proyecto, y una preferencia no es un rasgo.

Tipos de nodo:

- **persona** — quién importa en el sistema
- **valor** — principio estable
- **preferencia** — elección contextual
- **patrón** — conducta repetida
- **meta** — resultado deseado
- **proyecto** — iniciativa con estado
- **decisión** — elección fechada y razonada
- **riesgo** — condición a prevenir
- **práctica** — hábito o método
- **fuente** — evidencia trazable
- **canal** — medio de conversación
- **integración** — fuente externa con permisos
- **conocimiento** — patrón técnico reutilizable, separado de la identidad
- **artefacto** — plantilla operativa

Relaciones permitidas: `valora`, `prefiere`, `evita`, `practica`, `persigue`, `decidio`, `motivado_por`, `entra_en_tension_con`, `respaldado_por`, `contradice`, `reemplaza`.

Esa lista corta importa. Sin tipos, todo se vuelve “nota relacionada”. Con tipos, el asistente puede preguntar lo correcto: no “cuéntame de ti”, sino “esta preferencia choca con esta meta; ¿cuál manda hoy?”.

## Tres rúbricas, no una sola puntuación

Un gemelo sin medición se vuelve fanfiction. Por eso el sistema separa tres preguntas que suelen mezclarse.

### 1. Evidencia: ¿esto es un hecho o una hipótesis mía?

| Nivel | Nombre | Criterio | Acción |
|---:|---|---|---|
| 0 | Desconocido | No hay evidencia | No guardar como rasgo |
| 1 | Hipótesis | Inferencia o ejemplo ambiguo | Registrar y preguntar |
| 2 | Observado | Una declaración o acción contextual | No generalizar |
| 3 | Probable | Se repite en dos o más contextos | Usar con cautela |
| 4 | Confirmado | Lo declaré, corregí o confirmé | Entra al perfil operativo |

Restar un nivel si falta fuente, si la frase era hipotética, si el contexto cambió o si hay contradicción abierta. **No promediar contradicciones.** Conservar ambas evidencias y pedir contexto.

### 2. Fidelidad: ¿esta respuesta se parece a cómo actúo?

Evalúa una respuesta simulada de 0 a 4 en prioridades, razonamiento, pragmatismo, riesgo, comunicación, carga cognitiva, ética y trazabilidad.

- 0–12: imitación superficial
- 13–21: asistente contextual
- 22–27: respaldo cognitivo útil
- 28–32: alta fidelidad, igual con supervisión humana

Una puntuación alta **no autoriza** acciones externas ni suplantación. El cerebro predice; yo decido.

### 3. Cobertura: ¿qué zonas conoce y cuáles son huecos?

No mide cantidad de notas. Mide si el sistema puede anticipar criterios.

Dominios: identidad, valores, decisiones, carrera, dinero y riesgo, relaciones, bienestar, rutinas, voz, cultura, creatividad, límites.

Un dominio solo llega a “calibrado” después de varios escenarios con predicción previa y corrección explícita. Hoy los huecos más claros son rutinas cotidianas y gustos culturales. Eso no es un fallo del grafo: es un mapa honesto de dónde hay que conversar.

## El ciclo de aprendizaje

Sin cron. Sin heartbeats que “me estudien” de madrugada. El aprendizaje ocurre cuando hay una conversación significativa.

```
Conversación
  → fuente fechada
  → hallazgos atómicos
  → rúbrica de evidencia
  → nodos y relaciones
  → perfil de comportamiento
  → predicción
  → corrección
  → mejor calibración
```

Después de un bloque útil:

1. Crear o actualizar una nota en `Fuentes/`.
2. Extraer una idea reutilizable por nodo.
3. Puntuar evidencia.
4. Enlazar relaciones tipadas.
5. Actualizar el perfil **solo** con confirmado o probable.
6. Evaluar fidelidad de la respuesta.
7. Dejar hipótesis para una conversación posterior, no para rellenar el vacío.

Nunca borrar en silencio una creencia anterior. Marcarla `reemplazado` o `contradicho` y enlazar la evidencia nueva. El grafo debe mostrar evolución, no un presente retocado.

## El perfil operativo no es biografía

El perfil de comportamiento es una hoja de vuelo, no un CV. Resume cómo razono, cómo priorizo y cómo hay que hablarme:

- empezar por impacto;
- reproducir, aislar y validar antes de concluir;
- preferir el siguiente paso simple y verificable;
- separar hecho, inferencia e incertidumbre.

Eso es lo que el asistente debe consultar **antes** de responder en una decisión importante. Si responde desde el modelo genérico, el grafo no sirve.

## Canales e integraciones no son memoria

Telegram es el canal. El vault es la memoria. Mezclarlos es el otro error clásico: el bot “sabe cosas” porque las vio en un mensaje, no porque existan como nodo.

La política que me sirve:

- **consultar** correo o redes para contexto, con cuenta personal y permisos mínimos;
- **no publicar, no enviar, no borrar** por iniciativa propia;
- tratar el contenido externo como no confiable hasta convertirlo en hallazgo con evidencia;
- sincronizar el bundle a Obsidian y a un repositorio privado, a mano o al cerrar una conversación, nunca por cron.

El grafo también separa conocimiento técnico reutilizable de identidad. Un patrón de SDLC no me define. Un valor sí.

## Cómo se ve en la práctica

En Obsidian, el filtro `path:"Cerebro-Jaime"` abre el grafo. Las notas de sistema —ontología, protocolo, rúbricas, prompts de entrevista— viven aparte de las de estado. El inbox recibe bruto; el protocolo decide qué se vuelve nodo.

Una sesión típica empieza así:

> Quiero alimentar mi Cerebro Jaime sobre mis rutinas y hábitos. Usa la entrevista profunda, una pregunta a la vez, y al finalizar actualiza el grafo.

Una pregunta a la vez. Sin interrogatorio. Al final, fuente + nodos + perfil, no un resumen que se pierde en el hilo.

## Qué no hace este sistema

- No es un segundo yo con agencia.
- No actúa en el mundo porque “cree conocerme”.
- No ingiere secretos, credenciales ni vida íntima de terceros.
- No convierte una emoción de un viernes en un rasgo de personalidad.
- No sustituye juicio. Calibra el respaldo.

Si un asistente no puede decir “esto es hipótesis, no lo confirmaste”, todavía no tiene cerebro. Tiene confianza.

## Por qué Markdown y no una base opaca

Porque quiero diff, grep, git y un grafo que yo pueda leer sin una UI propietaria. Obsidian ya resuelve visualización. Git resuelve historia. El asistente resuelve ingesta y consulta. Cada capa hace una sola cosa.

El formato también fuerza honestidad: si no cabe en una nota con `status`, `confidence` y `evidencia`, no está listo para influir.

## Qué copiar si quieres el tuyo

No copies mis nodos. Copia el mecanismo.

1. Define tipos de nodo y relaciones permitidas.
2. Separa hipótesis, observación, patrón y hecho.
3. Exige fuente fechada para todo lo que entre al perfil.
4. Mide cobertura por dominio, no por cantidad de archivos.
5. Aprende en conversación, no en un cron que alucina sobre ti.
6. Conserva contradicciones a la vista.

El primer vault puede ser pequeño. El mío nació con decenas de notas validadas y sin enlaces rotos. Lo importante no es el tamaño: es que cada afirmación sepa de dónde viene y qué tan cierta es.

El flujo sigue abierto. El siguiente trabajo no es más automatización. Es más conversación en las zonas vacías, y más correcciones cuando el gemelo se adelante.
