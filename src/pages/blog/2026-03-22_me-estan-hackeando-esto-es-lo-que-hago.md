---
layout: "../../layouts/BlogLayout.astro"
title: "Me Están Hackeando — Esto Es Lo Que Estoy Haciendo"
description: "Alguien está intentando hackear mis cuentas. Sé quiénes son, de dónde vienen y por qué. Esto es lo que estoy construyendo."
tags: ["seguridad", "ia", "hackeo", "defensa"]
time: 7
featured: true
timestamp: "2026-03-22T03:15:00-0300"
filename: "2026-03-22_me-estan-hackeando-esto-es-lo-que-hago"
---

# Me Están Hackeando — Esto Es Lo Que Estoy Haciendo

Voy a ser directo: **alguien está intentando comprometer mis cuentas.** No una vez. No dos veces. Consistentemente, en múltiples plataformas, con creciente sofisticación.

Y sé exactamente lo que está pasando.

---

## La Situación

Durante meses he estado rastreando actividad sospechosa en mis cuentas:

- **Intentos de inicio de sesión fallidos** desde ubicaciones inesperadas
- **Campañas de phishing** dirigidas a mis perfiles profesionales
- **Intentos de ingeniería social** a través de LinkedIn, Twitter y email
- **Ataques de proximidad física** — sí, físicos

Los ataques no son aleatorios. Son dirigidos. Alguien ha invertido tiempo y recursos en entender mi huella digital.

---

## Lo Que Sé

No voy a compartir todo públicamente — eso solo los ayudaría a mejorar. Pero esto es lo que puedo decir:

### Inteligencia Geográfica

He mapeado los vectores de ataque geográficamente. El patrón es claro: ciertas regiones aparecen consistentemente en mis logs de seguridad. Esto no es actividad de bots — son intentos humanos coordinados con infraestructura detrás.

**Sé qué organizaciones tienen actores motivados** con la capacidad técnica y cobertura institucional para conducir estas operaciones.

### Motivación

El "por qué" es a menudo más interesante que el "cómo." En mi caso, los ataques se intensificaron después de:

1. **Trabajos publicados** que demostraron capacidades técnicas
2. **Desarrollos de negocio** que crearon presión competitiva
3. **Presencia pública** que aumentó mi visibilidad

A veces el mejor cumplido es un intento de breach.

---

## Mi Estrategia de Defensa

No estoy confiando en consejos de seguridad estándar. Estoy construyendo algo mejor.

### Seguridad Operacional Diaria

**Cada día:**

- Reviso logs de acceso en todas las plataformas
- Rotó credenciales en un calendario estratégico
- Monitoreo intentos de suplantación
- Rastro proximidad de dispositivos físicos (sí, eso es un vector real)
- Mantengo backups offline de datos críticos

**Seguridad a nivel hardware:**
- Yubikey para cuentas críticas
- Dispositivos dedicados para operaciones sensibles
- Sistemas air-gapped para trabajo de alto valor

### Detección de Amenazas con IA

El verdadero cambio de juego: **estoy desarrollando un sistema de IA específicamente diseñado para detectar, atribuir y countering estos ataques.**

No es solo IDS/IPS — es una plataforma completa de inteligencia de amenazas que:

- **Correlaciona patrones de ataque** a través de múltiples fuentes de datos
- **Atribuye actores** por técnica, timing e infraestructura
- **Predice ventanas de ataque** basado en análisis comportamental
- **Genera reportes de amenaza automatizados** que puedo actuar
- **Aprende continuamente** de nuevos vectores de ataque

Esto es IA defensiva — reconocimiento de patrones a escala que tomaría a un analista humano 24/7 igualar.

---

## Por Qué Estoy Haciendo Esto Público

Tres razones:

**1. Disuasión**
Si estás leyendo esto y eres una de las personas intentando hackearme: lo sé. He documentado todo. La pregunta no es si tomaré acción — es cuándo y cómo.

**2. Documentación**
Si algo sucede con mis cuentas, ahora hay un registro público. Patrones de ataque documentados. Atribución existe. Esto no es teórico — es seguridad operacional.

**3. Construir en Público**

La mejor defensa es una buena ofensiva. Al documentar mi postura de seguridad, estoy:

- Forzándome a mantener estándares más altos
- Aprendiendo públicamente (lo que ayuda a otros en situaciones similares)
- Potencialmente atrayendo colaboradores que han enfrentado amenazas similares
- Construyendo una herramienta que podría ayudar a otros

---

## Inmersión Técnica: Arquitectura de Detección de Amenazas

Para los lectores interesados en seguridad, esto es lo que estoy construyendo:

```
┌─────────────────────────────────────────────────────────────┐
│                 CAPA DE INTELIGENCIA DE AMENAZAS             │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Fuentes   │  │   Monitoreo │  │  Proximidad │        │
│  │   de Logs   │  │   de Red    │  │   Física    │        │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘        │
│         │                │                │                │
│         └────────────────┼────────────────┘                │
│                          ▼                                 │
│              ┌───────────────────────┐                     │
│              │   Motor de            │                     │
│              │   Correlación y       │                     │
│              │   Atribución IA       │                     │
│              └───────────┬───────────┘                     │
│                          ▼                                 │
│              ┌───────────────────────┐                     │
│              │   Dashboard de       │                     │
│              │   Amenazas y         │                     │
│              │   Alertas            │                     │
│              └───────────────────────┘                     │
└─────────────────────────────────────────────────────────────┘
```

**Componentes core:**

1. **Recolección de Datos** — Logs de proveedores cloud, plataformas sociales, taps de red, y monitoreo opcional de dispositivos físicos
2. **Reconocimiento de Patrones** — Modelos ML entrenados en firmas de ataque
3. **Motor de Atribución** — Correlaciona ataques a actores basado en TTPs (Tácticas, Técnicas, Procedimientos)
4. **Capa Predictiva** — Pronostica ventanas de ataque basado en patrones históricos
5. **Automatización de Respuesta** — Auto-rotación de credenciales, bloqueo de IPs, escalado de alertas

---

## Lo Que Deberías Hacer

Si estás manejando un negocio o tienes algún tipo de perfil público:

**Asume que estás siendo targeted.** La pregunta no es si — es cuándo y qué tan preparado estás.

**Pasos prácticos:**

- Habilita 2FA con hardware en todas partes posible
- Usa un password manager con contraseñas fuertes únicas
- Monitorea tus cuentas por actividad inusual diariamente
- Mantén backups offline
- No hagas clic en enlaces, incluso de fuentes "confiables" (verifica independientemente)
- Ten cuidado con lo que compartes públicamente — el reconocimiento es real

---

## La Ironía

Alguien gastó recursos intentando comprometer mis sistemas. En cambio, me dio:

1. **Motivación** para construir una mejor defensa
2. **Datos de prueba reales** para mi sistema de detección
3. **Una historia** más interesante que un post de blog típico

Gracias por la inspiración.

---

## Mirando Hacia Adelante

Este post será actualizado conforme la situación se desarrolle. El sistema de defensa con IA está en desarrollo activo — cuando esté listo, compartiré la arquitectura y lecciones aprendidas.

Si has experimentado ataques similares y quieres comparar notas, contáctame. Podemos anonimizar la discusión.

A las personas ejecutando estas operaciones: he estado haciendo esto profesionalmente por más de 8 años. Has cometido un error interactuando con alguien que toma la seguridad en serio.

**El juego ha cambiado. Ahora estoy jugando al ataque.**

---

*Última actualización: Marzo 2026*
