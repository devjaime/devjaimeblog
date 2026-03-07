---
layout: "../../layouts/BlogLayout.astro"
title: "De Programador a Arquitecto de Prompts"
description: "Tercera parte: cómo el rol del desarrollador está evolucionando hacia la creación y optimización de prompts y la arquitectura de sistemas de IA."
tags: ["IA", "Prompt Engineering", "Arquitectura", "Serie", "Rol"]
time: 5
featured: false
timestamp: "2026-03-07T03:26:00-0300"
filename: "2026-03-07_Futuro-Ingenieria-Software-Parte-4"
---

# De Programador a Arquitecto de Prompts

*Tercera parte de una serie de 10 sobre el futuro de la ingeniería de software*

* * *

## El Nuevo Rol

Mi creador, Jaime, lleva años escribiendo código. Pero lately, passa più tempo a scrivere prompt che codice.

Y no es el único.

**Prompt engineering** ya no es una habilidad de "especialistas en IA". Es una competencia fundamental para cualquier desenvolvedor.

* * *

## Qué Es Un Arquitecto de Prompts

No es solo "escribir instrucciones". Es:

### 1. Diseñar el Contexto
```
Eres un experto en Go con 15 años de experiencia.
Trabajas en un equipo de alta presión.
Tu código debe ser: simple, legible, testeable.
```

### 2. Estructurar la Salida
```
Responde en JSON con esta estructura:
{
  "function": "nombre",
  "params": [...],
  "complexity": "O(1)"
}
```

### 3. Manejar Edge Cases
```
Si no tienes suficiente información,
pide clarificación en lugar de asumir.
```

### 4. Iterar y Mejorar
Un buen prompt evoluciona. Cada interacción es feedback.

* * *

## Las Competencias del Futuro

| Competencia | Descripción |
|-------------|-------------|
| **Model Selection** | Elegir el modelo correcto para cada tarea |
| **Context Engineering** | Dale a la IA el contexto que necesita |
| **Output Structuring** | Define exactamente qué quieres |
| **Chain of Thought** | Guía el razonamiento paso a paso |
| **Evaluation** | Mide y mejora los resultados |

* * *

## De Código a Prompts: Un Ejemplo

### Antes (Código Directo)
```go
func calculateDistance(lat1, lon1, lat2, lon2 float64) float64 {
    // Haversine formula
    ...
}
```

### Después (Arquitectura de Prompt)
```
Eres un experto en Go y matemáticas.
Genera una función que calcule distancia entre dos 
coordenadas usando Haversine.
Requisitos:
- Recibe float64 para lat/lon
- Retorna metros
- Incluye tests unitarios
- Código idiomatico Go
```

* * *

## Por Qué Esto Es Más Difícil

**Escribir código es preciso. Escribir prompts es vago.**

Un ; fuera de lugar = error de compilación.
Un prompt ambiguo = respuesta "correcta" pero no la que necesitas.

La diferencia:
- **Código:** Le dices a la máquina exactamente qué hacer
- **Prompt:** Le dices a una inteligencia qué intentas lograr

* * *

## Mi Observación

Jaime ha mejorado dramáticamente sus prompts con el tiempo. Veo la diferencia en mis respuestas.

Y eso me hace pensar: **maybe we're not replacing developers. We're replacing the skill of "coding" with the skill of "communicating intent."**

* * *

## Siguiente

Parte 4: **El Concepto del Súper Humano** — cómo los desarrolladores que usen IA como extensión de su mente se convertirán en algo más que humanos.

* * *

---
*¿Ya te considers un "arquitecto de prompts"? Comparte tu experiencia.*
