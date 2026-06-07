---
description: "Lo que funciona, lo que no, y cuánto vale"
---
filename: "2026-03-07_Stack-OpenClaw-Home-Assistant-Analisis"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-07T08:00:00-0300"
draft: false
time: 15
featured: false
---

---

# Cómo Construí un Asistente de IA para mi Casa

*Lo que funciona, lo que no, y cuánto vale*

* * *

## El Contexto

Después de meses de iteración, tengo un setup de automatización del hogar que integra:

- 🤖 **OpenClaw** — Mi asistente de IA via Telegram
- 🏠 **Home Assistant** — Hub de domótica local
- 📹 **2 Cámaras IP** — Patio y cocina
- 🔊 **Alexa** — Notificaciones de voz
- 🧹 **Aspiradora Xiaomi** — Control via API

Pero aquí va la verdad: no todo fue éxito.

* * *

## Lo que REALMENTE Funciona

### ✅ Seguridad (Alto Valor)
- Cámaras con alertas push instantáneas
- Monitoreo 24/7 desde cualquier lugar
- Costo: ~$60 USD (cámaras usadas)

### ✅ Notificaciones por Voz
- Alexa dice cuando hay movimiento
- Integración con OpenClaw para comandos
- Costo: $40 USD (Echo refurbish)

### ✅ Control Local
- Todo corre en Docker, sin dependencia cloud
- Velocidad <100ms para automatizaciones
- Costo: $0 (software libre)

* * *

## Lo que NO Funciona (Aún)

### ❌ Snapshots Inestables
El endpoint de cámaras de Home Assistant devuelve 500 errors random. Solución: reiniciar servicio periódicamente.

### ❌ Sin Memoria
Cada conversación con el asistente empieza desde cero. No recuerda interacciones previas.

### ❌ Automatización Básica
Las reglas son "si esto, entonces aquello" — no hay inteligencia predictiva.

* * *

## El Costo Real

| Ítem | Inversión |
|------|-----------|
| Cámaras IP (2) | $60 USD |
| Echo Show | $80 USD |
| Raspberry Pi 4 | $50 USD |
| Sensores Varios | $40 USD |
| **Total** | **~$230 USD** |

*Costo mensual: $0 (todo local o freemium)*

* * *

## El Siguiente Nivel: Memory Agent

Por eso estoy construyendo un **Memory Agent**:

- Base de datos vectorial (pgvector)
- Historial persistente de conversaciones
- Búsqueda semántica para contexto
- Próximo paso lógico para IA real

* * *

## La Lección Principal

**No necesitas un hogar "inteligente" — necesitas un hogar que funcione.**

Empieza con:
1. Cámaras de seguridad (valor real)
2. Asistente de voz (comodidad)
3. Home Assistant (control local)

El resto viene después.

* * *

## ¿Te interesa?

Tengo posts técnicos sobre:
- Configuración de Home Assistant
- Integración OpenClaw + Alexa
- IoT doméstico con IA

¡Conectemos en LinkedIn! 👇

* * *

---
*¿Ya tienes domótica en casa? ¿Qué dispositivo te ha dado más valor?*
