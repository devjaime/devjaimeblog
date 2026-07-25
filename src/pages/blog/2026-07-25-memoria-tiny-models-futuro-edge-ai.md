---
filename: "2026-07-25-memoria-tiny-models-futuro-edge-ai"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-07-25T12:00:00-04:00"
publishDate: "2026-07-25T12:00:00-04:00"
modifiedDate: "2026-07-25T12:00:00-04:00"
title: "El próximo cuello de botella de la IA podría no ser el cómputo, sino la memoria"
description: "Los Tiny Language Models están cambiando la arquitectura de los agentes: inteligencia especializada en el dispositivo, modelos pequeños para tareas locales y la nube solo cuando el problema exige más razonamiento."
author:
  name: "Jaime Hernández"
  url: "https://jaimehernandez.dev"
authorHandle: "devjaime"
tags:
  - "AI Engineering"
  - "Edge AI"
  - "On-Device AI"
  - "Tiny Language Models"
  - "Gemma"
  - "Agentes IA"
category: "AI Engineering"
draft: false
time: 10
featured: true
lang: es
type: article
source: human
reviewStatus: published
---

Hace poco vi una presentación de [Cormac Brick, de Google AI Edge](https://www.youtube.com/watch?v=hacEQHHhu2Q), sobre una idea que parece contraintuitiva en medio de la carrera por construir modelos cada vez más grandes:

> El próximo cuello de botella de la inteligencia artificial podría no ser el cómputo. Podría ser la memoria.

La industria suele hablar de GPUs, NPUs, TOPS y capacidad de procesamiento. Sin embargo, cuando intentamos ejecutar inteligencia artificial en un teléfono, un computador antiguo, una Raspberry Pi o un dispositivo embebido, aparece una restricción mucho más concreta: **el modelo y su contexto deben caber en memoria antes de poder hacer cualquier cosa útil**.

Los números mostrados por Brick son reveladores. Un modelo Gemma de aproximadamente 2.000 millones de parámetros, cuantizado hasta un promedio de 2,9 bits por peso, puede ejecutarse en una Raspberry Pi 5 a cerca de ocho tokens generados por segundo. En hardware con una NPU de Qualcomm, un modelo de esta misma categoría puede alcanzar una velocidad suficiente para combinar generación de texto con algunos cuadros de visión por segundo.

No es un benchmark universal. La velocidad real depende del modelo, la cuantización, el runtime, la longitud del contexto y el hardware. Aun así, demuestra algo importante: **ya es posible ejecutar modelos generativos útiles fuera del centro de datos**.

Pero lo más interesante de esta tendencia no es tener un chatbot más pequeño.

Es la aparición de una arquitectura diferente para distribuir inteligencia.

## La memoria define qué modelo puede existir en un dispositivo

La inferencia de un modelo no consume memoria solamente para almacenar sus parámetros. También necesita espacio para el runtime, los buffers intermedios, las entradas multimodales y la KV cache que conserva el contexto de la conversación.

Por eso, reducir el tamaño de los pesos cambia por completo el conjunto de dispositivos capaces de ejecutar el modelo.

Si representáramos 2.000 millones de parámetros con 16 bits por peso, solo los pesos ocuparían cerca de 4 GB. Al llevarlos a un promedio de 2,9 bits, esa parte teórica baja a menos de 1 GB, aunque la aplicación completa necesitará memoria adicional para operar.

La cuantización no agrega RAM. Lo que hace es permitir que más inteligencia quepa dentro de la RAM disponible.

Ese matiz es fundamental porque la memoria de los dispositivos edge es limitada, compartida con el sistema operativo y costosa. Un acelerador puede multiplicar la velocidad de ciertas operaciones, pero no resuelve el problema de un modelo que simplemente no cabe.

La documentación de [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) muestra cómo este problema se traduce en artefactos reales: una versión cuantizada a 4 bits de Gemma 3 1B ocupa alrededor de 557 MB, mientras que Gemma 3n E2B se acerca a 3 GB. La diferencia determina si una aplicación puede convivir con el resto del software del dispositivo o si queda fuera de alcance antes de comenzar.

En otras palabras, en Edge AI la pregunta no es solamente cuántas operaciones puede ejecutar el procesador por segundo. También es:

> ¿Cuánta inteligencia puedo mantener residente en memoria sin degradar el dispositivo completo?

## Small Language Models y Tiny Language Models no son lo mismo

En la presentación aparece una distinción útil entre modelos pequeños y modelos diminutos.

Los **Small Language Models**, en este contexto, se mueven aproximadamente entre 1.000 y 4.000 millones de parámetros. Todavía pueden mantener una experiencia conversacional general, seguir instrucciones y, en algunos casos, procesar audio o imágenes. Con cuantización y runtimes optimizados, comienzan a ser viables en teléfonos recientes, computadores personales, placas como Raspberry Pi y dispositivos con aceleradores especializados.

Debajo de ellos aparecen los **Tiny Language Models**, con tamaños aproximados de 50 a 500 millones de parámetros.

Estos modelos no intentan responder cualquier pregunta. Su valor está en hacer una tarea pequeña, repetible y bien definida con muy poca memoria, baja latencia y sin depender de una conexión permanente.

Algunos ejemplos son:

- reconocer una intención;
- convertir lenguaje natural en una llamada a función;
- clasificar o extraer información;
- generar embeddings;
- transcribir audio;
- interpretar comandos de voz;
- ejecutar una política específica dentro de una aplicación.

Un modelo diminuto pierde parte de la amplitud de uno generalista. A cambio, puede llegar a dispositivos donde incluso un modelo de 1B no cabe, responder con mucha rapidez y trabajar con datos que nunca abandonan el equipo.

La especialización es lo que vuelve razonable ese intercambio.

## FunctionGemma: 270 millones de parámetros para convertir intención en acción

[FunctionGemma](https://ai.google.dev/gemma/docs/functiongemma) es un buen ejemplo de esta categoría. Está construido sobre Gemma 3 270M y fue entrenado específicamente para traducir lenguaje natural en llamadas a funciones.

No está diseñado para ser un chatbot general. Google lo presenta como una base para crear agentes locales rápidos, privados y especializados mediante fine-tuning.

La demostración **Mobile Actions** permite escribir o pronunciar instrucciones como crear un evento, abrir una ubicación en el mapa o encender la linterna. El modelo identifica la intención, selecciona la herramienta correcta y genera los argumentos estructurados que la aplicación necesita para ejecutar la acción.

El resultado publicado por Google muestra por qué el ajuste especializado importa: el modelo base obtiene un 58% en su evaluación de Mobile Actions, mientras que la versión ajustada alcanza un 85%. En un Samsung S25 Ultra, esa versión ocupa 288 MB y registra cerca de 126 tokens por segundo en decodificación sobre CPU, con una memoria máxima del proceso de aproximadamente 551 MB, según la [model card oficial](https://ai.google.dev/gemma/docs/functiongemma/model_card).

No necesitamos enviar cada orden a un modelo de frontera para resolver diez acciones conocidas. Podemos mantener el procesamiento en el dispositivo, limitar explícitamente las funciones disponibles y escalar a otro modelo solo cuando la solicitud salga de ese dominio.

Esto mejora varias propiedades al mismo tiempo:

- menor latencia para acciones frecuentes;
- funcionamiento sin conexión;
- mayor privacidad para voz y texto;
- costo marginal de inferencia muy bajo;
- superficie de acción controlada por la aplicación;
- comportamiento más predecible dentro de un dominio definido.

El fine-tuning, por supuesto, introduce un costo de ingeniería. Hay que construir datos representativos, evaluar errores y actualizar el modelo cuando cambian las funciones o las políticas. Pero esa inversión puede ser más razonable que pagar la latencia, el costo y la exposición de datos de una llamada cloud para cada interacción.

## El agente como jerarquía de inteligencia especializada

Esta tendencia sugiere una arquitectura distinta para los agentes de IA.

En lugar de utilizar un único modelo universal para todo, podemos construir una jerarquía:

1. **Modelos diminutos** para detectar intención, clasificar solicitudes y generar llamadas a funciones conocidas.
2. **Modelos pequeños y multimodales** para procesar localmente audio, imágenes, cámara y documentos.
3. **Modelos cloud** para las tareas que realmente requieren conocimiento amplio, contextos extensos o razonamiento más profundo.

El flujo podría verse así:

```text
Solicitud del usuario
        ↓
Modelo diminuto de intención y routing
        ↓
¿Existe una capacidad local confiable?
      ↙   ↘
    Sí     No
    ↓       ↓
Función o   Modelo pequeño local
skill local       ↓
            ¿La tarea excede su capacidad?
                  ↙   ↘
                No     Sí
                ↓       ↓
          Respuesta    Modelo cloud
```

Esta arquitectura se parece más a un sistema distribuido que a una conversación con un único LLM.

Cada modelo tiene un ámbito, un costo, una latencia y un nivel de confianza. El router no debería elegir el modelo más grande disponible, sino **el modelo más pequeño capaz de completar la tarea con la confiabilidad exigida**.

La nube sigue siendo importante. No todas las preguntas pueden resolverse localmente y no todos los dispositivos tienen el mismo hardware. El objetivo no es convertir “local” en un dogma, sino evitar que el modelo más caro y lejano sea la respuesta predeterminada para cualquier problema.

## Lo que cambia para los ingenieros de IA

Cuando diseñamos este tipo de sistemas, optimizar prompts y consumo de tokens ya no es suficiente.

También debemos trabajar con:

- **cuantización**, para reducir la memoria ocupada sin destruir la calidad necesaria;
- **ancho de banda de memoria**, porque la generación suele estar limitada por el movimiento de los pesos;
- **decodificación restringida**, para asegurar salidas estructuradas válidas;
- **fine-tuning**, para adaptar modelos diminutos a acciones y políticas concretas;
- **model routing**, para enviar cada tarea al nivel correcto de la jerarquía;
- **carga progresiva de skills**, para no mantener todas las capacidades activas al mismo tiempo;
- **evaluaciones por tarea**, porque un promedio general no demuestra confiabilidad operacional;
- **ejecución híbrida edge-cloud**, para equilibrar privacidad, costo, latencia y capacidad;
- **observabilidad**, para saber cuándo el modelo local resolvió la tarea y cuándo debió escalarla.

También cambia la manera de evaluar un producto.

Un agente puede parecer más inteligente porque utiliza un modelo enorme, pero ser peor como sistema: más lento, más caro, dependiente de internet y difícil de controlar. Otro agente puede usar varios modelos pequeños, responder localmente la mayor parte del tiempo y recurrir a la nube únicamente ante excepciones.

La segunda arquitectura puede producir una experiencia más rápida y confiable con una fracción de los recursos.

## La inteligencia no tiene que vivir en un solo lugar

En una [reflexión anterior sobre IA local](/blog/2026-07-11-ia-local-infraestructura-empresarial) planteaba que los modelos están comenzando a convertirse en una nueva capa de infraestructura de software. Los Tiny Language Models llevan esa idea un paso más allá: esa capa no tiene por qué ser monolítica.

Puede distribuirse entre el teléfono, el computador, una estación local, un servidor privado y la nube.

Algunas capacidades permanecerán cargadas porque se usan constantemente. Otras podrán activarse bajo demanda. Un modelo pequeño podrá preparar o filtrar el contexto antes de enviarlo a uno mayor. Un agente local podrá ejecutar acciones privadas y pedir ayuda externa únicamente para elaborar un plan complejo.

La inteligencia se vuelve componible.

Eso permite pensar en agentes que no dependen de una sola API ni de un único modelo, sino de una política explícita para decidir:

- qué información puede salir del dispositivo;
- qué modelo tiene permiso para ver cada dato;
- qué acciones pueden ejecutarse sin conexión;
- qué nivel de confianza requiere cada función;
- cuándo la tarea debe escalarse;
- cómo se verifica el resultado.

## Conclusión

El futuro de Edge AI probablemente no consista en instalar un modelo universal en todos los dispositivos.

Consistirá en construir una **jerarquía de inteligencia especializada**: modelos diminutos para intenciones y acciones, modelos pequeños para percepción y procesamiento local, y modelos cloud para las tareas que justifican su mayor capacidad.

En esa arquitectura, la memoria deja de ser un detalle del hardware. Se convierte en una restricción de diseño que define qué capacidades pueden estar disponibles, dónde se ejecutan y cuánto cuesta utilizarlas.

El agente más efectivo podría no ser el que tiene acceso al modelo más grande.

Podría ser el que sabe **cuál es el modelo más pequeño capaz de completar cada tarea de forma confiable**.

---

## Fuentes y recursos

- Cormac Brick, [*Why intelligence at scale needs tiny models*](https://www.youtube.com/watch?v=hacEQHHhu2Q).
- Google AI for Developers, [FunctionGemma model overview](https://ai.google.dev/gemma/docs/functiongemma).
- Google AI for Developers, [FunctionGemma model card y resultados de Mobile Actions](https://ai.google.dev/gemma/docs/functiongemma/model_card).
- Google AI for Developers, [Fine-tune FunctionGemma 270M for Mobile Actions](https://ai.google.dev/gemma/docs/mobile-actions).
- Google AI Edge, [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM).
- Google AI Edge, [AI Edge Gallery](https://github.com/google-ai-edge/gallery).
