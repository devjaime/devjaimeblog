---
filename: "2026-02-20_Vocari-Cl-Plataforma-Orientacion-Vocacional-IA-Chile"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-07T08:00:00-0300"
title: "Título: "Comprar tu Informe Vocacional en 3 Pasos""
description: "Título: "Comprar tu Informe Vocacional en 3 Pasos""
publishDate: "2026-06-07T08:00:00-0300"
author:
  name: "Jaime Hernandez"
  url: "https://devjaime.cl"
tags:
  - "Blog"
category: "Blog"
draft: false
time: 15
featured: false
---


#### 🎬 Video 2: Flujo de Compra de Informes

**Título:** "Comprar tu Informe Vocacional en 3 Pasos"

<div class="my-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
  <p class="text-lg mb-4">🎬 Video en producción</p>
  <p class="text-sm text-gray-600 dark:text-gray-400">Pronto disponible en YouTube</p>
</div>

**Descripción del video:**
Un video corto y directo que muestra el proceso de compra de un informe profesional.

**Contenido:**
- **Paso 1:** El estudiante realiza el test vocacional gratuito
- **Paso 2:** Selecciona el tipo de informe (Esencial o Premium)
- **Paso 3:** Proceso de pago con PayPal
- **Paso 4:** Recepción del informe por email y en el dashboard
- **Bonus:** Qué incluye cada tipo de informe

**Duración estimada:** 1.5-2 minutos
**Estilo:** Paso a paso con números animados y checkmarks
**Elementos visuals:** PayPal UI mock, emails, PDFs, celebration animation

---

#### 🎬 Video 3: Flujo de Orientación

**Título:** "Tu Primera Sesión de Orientación con IA"

<div class="my-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
  <p class="text-lg mb-4">🎬 Video en producción</p>
  <p class="text-sm text-gray-600 dark:text-gray-400">Pronto disponible en YouTube</p>
</div>

**Descripción del video:**
Muestra cómo funciona el sistema de orientación vocacional assisted por inteligencia artificial.

**Contenido:**
- El estudiante inicia sesión en Vocari.cl
- Realiza el test RIASEC (60 preguntas, ~10 minutos)
- Recibe su perfil vocacional instantáneamente
- Explora carreras recomendadas con datos MINEDUC
- Chat con el asistente de IA para preguntas específicas
- Solicita revisión de un orientador humano
- Recibe recomendaciones personalizadas

**Duración estimada:** 3-4 minutos
**Estilo:** Screencast animado con voz en off
**Elementos:** UI de la plataforma, gráficos RIASEC, chat con IA

---

#### 🎬 Video 4: Asistencia con Inteligencia Artificial

**Título:** "Conoce tu Asistente de Orientación IA"

<div class="my-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
  <p class="text-lg mb-4">🎬 Video en producción</p>
  <p class="text-sm text-gray-600 dark:text-gray-400">Pronto disponible en YouTube</p>
</div>

**Descripción del video:**
Demostración approfondida de las capacidades de IA en Vocari.cl.

**Contenido:**
- **Identificación de perfil:** La IA analiza respuestas y determina tipo RIASEC
- **Recomendaciones personalizadas:** "Basado en tu perfil Realista, estas carreras pueden interesarte..."
- **Chat interactivo:** Preguntas como "¿Qué hace un Ingeniero Civil?", "¿Cuánto gana?", "¿Dónde estudiarlos?"
- **生成 de informe:** La IA redacta el informe completo en segundos
- **Seguimiento:** Recordatorios personalizados, sugerencias de siguiente paso
- **Modo híbrido:** Deriva a orientador humano cuando detecta incertidumbre

**Duración estimada:** 4-5 minutos
**Estilo:** Demo interactiva con ejemplos reales de conversación
**Elementos:** Chat UI, streaming de texto, gráficos dinámicos

---

### Tecnología: Cómo Generamos los Videos con Remotion

**Remotion** es un framework que permite crear videos programmaticamente usando React. En Vocari.cl lo usamos para:

```typescript
// Ejemplo de composición de video con Remotion
import { Composition } from 'remotion';

export const InformesVideo = () => {
  return (
    <Composition
      id="compra-informe"
      component={CompraInformeFlow}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
```

**Beneficios de usar Remotion:**
- ✅ Videos personalizados para cada estudiante
- ✅ Actualización automática cuando cambian los precios/procesos
- ✅ Generation en alta calidad (1080p, 4K)
- ✅Costos significativamente menores que video production tradicional
- ✅ Posibilidad de generar videos on-demand

**Pipeline de generación:**
1. Estudiante compra informe → Se trigger Webhook
2. Edge Function genera datos del informe
3. Remotion compila video con datos personalizados
4. Video se sube a Supabase Storage
5. Link enviado por email al estudiante

---

### Conclusión

Vocari.cl no es solo una plataforma de tests vocacionales. Es un ecosistema completo que busca democratizar el acceso a orientación profesional de calidad en Chile.

Creemos que cada estudiante merece:
- Conocer sus fortalezas reales
- Acceso a datos actualizados del mercado laboral
- Orientación personalizada, no genérica
- Precios accesibles para todas las familias

**El futuro de la orientación vocacional es aquí, y se llama Vocari.cl.**

---

*¿Quieres probar Vocari.cl? Visita [vocari.cl](https://vocari.cl) y realiza el test vocacional gratuitamente.*

*¿Eres un colegio interesado en integrar Vocari.cl? Contáctanos para una демо personalizada.*
