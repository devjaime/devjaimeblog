---
filename: "deterministic-vs-probabilistic-agents-es"
layout: ../../layouts/BlogLayout.astro
timestamp: "2026-05-30T12:00:00-0300"
title: "Por qué tu AI Agent miente: El problema determinístico vs probabilístico"
description: "Ejecuté una herramienta de auditoría de seguridad 50 veces contra la misma aplicación. Mismo código, mismo contexto, mismo prompt. ¿Sabés cuántas veces detectó todas las vulnerabilidades? 31 de 50. Te explico por qué pasa y cómo solucionarlo."
publishDate: 2026-05-30
author: 
  name: "Jaime Hernández"
  url: "https://devjaime.cl"
tags: 
  - "AI Agents"
  - "Tutorial"
  - "Automatización"
  - "Backend Development"
  - "AI de Producción"
category: "AI Engineering"
draft: false
time: 15
featured: false
---

# Por qué tu AI Agent miente: El problema determinístico vs probabilístico

El mes pasado ejecuté una herramienta de auditoría de seguridad 50 veces contra la misma aplicación vulnerable. Mismo código, mismo contexto, mismo prompt. ¿Sabés cuántas veces detectó todas las vulnerabilidades? **31 de 50.** A veces se perdía flaws críticos. A veces encontraba todo. La única variable era la suerte.

Ahí me di cuenta: **estamos construyendo sistemas de producción con componentes probabilísticos donde necesitamos determinísticos.**

## La Mentira Que Nos Decimos

La narrativa de la industria es "dejá que la AI se encargue." Los agents razonan, delegan, sintetizan. Se adaptan. Son inteligentes.

Pero lo que los demos no te muestran: **la adaptabilidad es enemiga de la confiabilidad.**

Trabajo con redes enterprise - lugares donde un AI agent chequear un file hash contra VirusTotal no es opcional. Es mandatorio. No querés que tu security agent "razone" si hoy es un buen día para chequear bases de datos de amenazas. Querés que chequee. Siempre. Sin importar qué.

El problema es que los frameworks modernos de agents optimizan por flexibilidad, no por consistencia. Y para muchos casos de uso en producción, esa es la elección equivocada.

## El Componente Determinístico Que Nadie Habla

Un colega me contó sobre su AI agent para procesar seguros. Pasó tres meses construyendo un sistema multi-agent sofisticado con razonamiento, reflexión y descomposición dinámica de tareas. Funcionaba genial en demos.

Después lo puso en producción y notó algo: el mismo claim se procesaba diferente dependiendo de la hora del día, del "mood" del agent, y de cómo empezaba la conversación. No dramáticamente diferente - solo suficiente para crear inconsistencias que su equipo de compliance no podía tolerar.

Su solución? Envolvió el agent "inteligente" en un shell determinístico:

```python
# Antes: razonamiento puro del agent
result = await insurance_agent.run(claim)

# Después: shell determinístico con agent adentro
async def process_claim(claim):
    # Siempre correr estos checks primero - innegociable
    await validate_format(claim)
    await check_fraud_db(claim)
    await normalize_data(claim)
    
    # Luego dejar que el agent haga lo que sabe
    result = await insurance_agent.run(claim)
    
    # Siempre correr después - innegociable
    await audit_trail(result)
    await compliance_check(result)
    
    return result
```

El agent todavía hace el razonamiento complejo. Pero las partes determinísticas - las que deben pasar - pasan cada vez.

## La Industria Empieza a Notar

El framework de evaluación 2026 de n8n para herramientas de AI agents está dejando caer "integrabilidad" como eje separado y fusionándolo en "codability." ¿Por qué? Porque están viendo que las organizaciones no quieren integraciones pre-configuradas. Quieren **control** sobre cuándo y cómo los agents pueden tomar ciertas acciones.

También están agregando una nueva dimensión de evaluación: "enterprise-readiness," que incluye cosas como:
- Filtrado y firewall basado en proxy
- Procesos pre-definidos determinísticos
- Identidad y linaje del agent
- Transparencia y verificabilidad

Esto es la industria despertando al hecho de que **los agents de producción necesitan guardrails**, no solo capacidades.

## El Framework Cambia

Mi toma sobre cuándo usar componentes determinísticos vs probabilísticos:

**Determinístico (escribí la lógica):**
- Operaciones de seguridad (siempre chequear amenazas)
- Pasos de compliance (nunca saltarse validación)
- Normalización de datos (misma entrada → misma salida)
- Manejo de errores (errores específicos requieren respuestas específicas)
- Trails de auditoría y compliance

**Probabilístico (dejá que el agent decida):**
- Decisiones de routing no críticas
- Nuances de entendimiento de lenguaje natural
- Manejo de escenarios inesperados
- Tareas creativas o de síntesis
- Situaciones donde el fracaso es aceptable

La regla que sigo: **si el costo de que el agent haga algo mal es alto, hacelo determinístico. Si el costo es bajo, dejalo razonar.**

## El Takeaway Práctico

No necesitás elegir entre "agents inteligentes" y "sistemas confiables." Necesitás construir **workflows consciente de agents** donde lógica determinística y razonamiento probabilístico se complementan.

Empezá con el esqueleto determinístico. Después preguntá: ¿dónde el agent realmente agrega valor? Esos son los lugares donde dejás que piense.

¿El resto? Escribí el código.

```python
# El modelo mental
workflow = {
    "deterministic": ["validate", "normalize", "audit"],  # Siempre corre
    "agent_tasks": ["route", "analyze", "decide"],        # El agent decide
    "deterministic_out": ["notify", "archive", "report"]  # Siempre corre
}
```

Esto no es anti-AI. Es AI de producción. Hay una diferencia.

Los agents que realmente llegan a entornos enterprise no son los que pueden razonar su camino a través de cualquier cosa. Son los que saben exactamente cuándo **no** razonar - y simplemente siguen el proceso.

---

*Tags: #AIAgents #Tutorial #Automatización #Backend #AIdeProducción #Chile*
