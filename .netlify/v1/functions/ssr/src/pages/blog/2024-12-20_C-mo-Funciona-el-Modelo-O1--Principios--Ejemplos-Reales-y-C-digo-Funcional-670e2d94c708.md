---
layout: "../../layouts/BlogLayout.astro"
title: "Cómo Funciona el Modelo O1: Principios, Ejemplos Reales y Código Funcional"
description: ""
tags: ["code", "OpenAI", "O1"]
time: 4
featured: true
timestamp: "2024-12-20T12:20:33-0300"
filename: "2024-12-20_C-mo-Funciona-el-Modelo-O1--Principios--Ejemplos-Reales-y-C-digo-Funcional-670e2d94c708"
---

Cómo Funciona el Modelo O1: Principios, Ejemplos Reales y Código Funcional
==========================================================================

Cómo Funciona el Modelo O1: Principios, Ejemplos Reales y Código Funcional

* * *

### Cómo Funciona el Modelo O1: Principios, Ejemplos Reales y Código Funcional

![](https://cdn-images-1.medium.com/max/800/1*URToiWO3AO7yamdVXN-rcg.png)

[https://www.howtouselinux.com/post/how-the-openai-o1-model-stands-out-heres-what-we-discovered](https://www.howtouselinux.com/post/how-the-openai-o1-model-stands-out-heres-what-we-discovered)

### Cómo Funciona el Modelo O1: Principios, Ejemplos Reales y Código Funcional

La inteligencia artificial está revolucionando múltiples industrias gracias a modelos avanzados como **O1**. Este modelo ofrece respuestas claras, precisas y contextualizadas mediante técnicas de _prompting_ efectivas. A continuación, exploraremos los principios de diseño del modelo, ejemplos prácticos, y cómo puedes empezar a trabajar con él, incluyendo código funcional y enlaces a documentación relevante.

* * *

### Principios Fundamentales del Modelo O1

El modelo **O1** sigue una serie de principios para optimizar su desempeño y garantizar resultados confiables:

1.  **Simplicidad y Directo al Punto**  
     Evitar indicaciones extensas o razonamientos explícitos (_Chain of Thought_ o CoT), para aprovechar el razonamiento interno del modelo y evitar respuestas redundantes o confusas.
2.  **Estructuras Consistentes**  
     Utilizar formatos como JSON, XML o Markdown para estructurar las solicitudes y garantizar salidas uniformes, especialmente útiles para procesos automatizados.
3.  **Ejemplos Contextuales**  
     Incorporar ejemplos simples (_few-shot prompting_) para proporcionar un marco claro y efectivo al modelo.

En cada caso, el modelo genera respuestas optimizadas siguiendo estos principios.

* * *

### Ejemplo 1: Generar SMILES IDs para Moléculas

Este ejemplo muestra cómo diseñar un _prompt_ efectivo para obtener identificadores moleculares (SMILES).

### Código Funcional

\# Importar bibliotecas necesarias  
from openai import OpenAI  
  
\# Configurar la API key  
openai\_api\_key = "TU\_API\_KEY"  
client = OpenAI(api\_key=openai\_api\_key)  
\# Definir el prompt  
good\_prompt = """  
Eres un químico computacional. Genera una función en Python que obtenga los SMILES IDs  
para todas las moléculas relacionadas con la insulina.  
"""  
\# Hacer la solicitud al modelo  
response = client.chat.completions.create(  
    model="o1-mini",  
    messages=\[{"role": "user", "content": good\_prompt}\]  
)  
\# Mostrar la respuesta  
print(response.choices\[0\].message.content)

### Salida

El modelo genera un código funcional para extraer los SMILES IDs. Puedes adaptarlo fácilmente a tus necesidades.

* * *

### Ejemplo 2: Atención al Cliente con XML

Este ejemplo demuestra cómo utilizar un formato estructurado para mejorar las respuestas del modelo en escenarios de atención al cliente.

### Código Funcional

structured\_prompt = """  
<instructions>  
    Eres un asistente de atención al cliente de AnyCorp. Sigue las políticas descritas.  
</instructions>  
<policy>  
    \*\*Política de Reembolsos\*\*  
    - Ofrecer reembolsos según las directrices.  
    - Documentar todas las transacciones.  
</policy>  
<user\_query>  
    Me gustaría devolver un producto defectuoso.  
</user\_query>  
"""  
  
response = client.chat.completions.create(  
    model="o1-mini",  
    messages=\[{"role": "user", "content": structured\_prompt}\]  
)  
print(response.choices\[0\].message.content)

### Salida

El modelo generará una respuesta acorde a la política definida, ayudando a resolver la solicitud del cliente.

* * *

### Ejemplo 3: Asesoría Legal con Few-Shot Prompting

En este caso, utilizamos un ejemplo previo para proporcionar contexto y generar una respuesta legal bien fundamentada.

### Código Funcional

example\_prompt = """  
<prompt>  
    Eres un abogado especializado en leyes de competencia.  
</prompt>  
<example>  
<question>  
    Estoy considerando colaborar con un competidor en una campaña de marketing conjunto. ¿Es legal?  
</question>  
<response>  
    Las colaboraciones entre competidores pueden ser legales bajo ciertas condiciones:  
    - Evitar acuerdos per se ilegales.  
    - Garantizar transparencia y límites claros.  
</response>  
</example>  
<query>  
    Una empresa más grande ofrece incentivos a proveedores para no trabajar conmigo. ¿Es esto legal?  
</query>  
"""  
  
response = client.chat.completions.create(  
    model="o1-mini",  
    messages=\[{"role": "user", "content": example\_prompt}\]  
)  
print(response.choices\[0\].message.content)

### Salida

El modelo genera una respuesta profesional basada en el contexto del ejemplo, ayudando a identificar riesgos legales.

* * *

### Enlaces a la Documentación

*   **OpenAI Python SDK**: [Documentación oficial](https://platform.openai.com/docs/)
*   **O1 Model**: Aprende más sobre modelos avanzados como O1 en [DeepLearning.AI](https://www.deeplearning.ai/).
*   **Guía de Prompting**: Mejora tus _prompts_ con [ejemplos y mejores prácticas](https://platform.openai.com/docs/guides/chat).

* * *

### Aplicaciones Prácticas

El modelo O1 es útil en diferentes áreas:

1.  **Atención al cliente:** Automatización de respuestas personalizadas.
2.  **Asesoría legal:** Generación de análisis legales iniciales.
3.  **Ciencia y salud:** Procesamiento de datos moleculares.

Explora cómo aplicar estas técnicas en tus propios proyectos y comparte tus resultados con la comunidad. 🌟

By [Jaime Hernández](https://medium.com/@devjaime) on [December 20, 2024](https://medium.com/p/670e2d94c708).

[Canonical link](https://medium.com/@devjaime/c%C3%B3mo-funciona-el-modelo-o1-principios-ejemplos-reales-y-c%C3%B3digo-funcional-670e2d94c708)

Exported from [Medium](https://medium.com) on March 15, 2025.