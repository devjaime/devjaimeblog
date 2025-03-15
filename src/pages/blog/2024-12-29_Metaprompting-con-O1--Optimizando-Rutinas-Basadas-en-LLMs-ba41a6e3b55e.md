---
layout: "../../layouts/BlogLayout.astro"
title: "Metaprompting con O1: Optimizando Rutinas Basadas en LLMs"
description: ""
tags: ["code", "Metaprompting", "O1", "OpenAI", "LLMs"]
time: 4
featured: true
timestamp: "2024-12-29T12:20:33-0300"
filename: "2024-12-29_Metaprompting-con-O1--Optimizando-Rutinas-Basadas-en-LLMs-ba41a6e3b55e"
---

Metaprompting con O1: Optimizando Rutinas Basadas en LLMs \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Metaprompting con O1: Optimizando Rutinas Basadas en LLMs
=========================================================

En este artículo exploraremos cómo usar el modelo O1-mini para generar y mejorar rutinas basadas en modelos de lenguaje grande (LLMs). Este…

* * *

### Metaprompting con O1: Optimizando Rutinas Basadas en LLMs

![](https://cdn-images-1.medium.com/max/800/1*ZhPuzDOsd4h8hM-dUD7H6w.png)

[https://www.kdnuggets.com/getting-started-with-openai-o1-reasoning-models](https://www.kdnuggets.com/getting-started-with-openai-o1-reasoning-models)

En este artículo exploraremos cómo usar el modelo **O1-mini** para generar y mejorar rutinas basadas en modelos de lenguaje grande (LLMs). Este enfoque permite optimizar tareas como la generación de políticas de servicio al cliente, el ajuste de instrucciones y la evaluación iterativa para mejorar resultados en contextos dinámicos.

* * *

### Introducción a Metaprompting

El metaprompting consiste en el uso de un modelo de lenguaje para analizar y mejorar iterativamente un conjunto de instrucciones o políticas, utilizando evaluaciones previas como guía. Esta técnica es particularmente útil cuando se trabaja con rutinas de alta complejidad, como políticas de cancelación de vuelos, donde múltiples herramientas y pasos deben coordinarse eficientemente.

### ¿Por qué usar O1?

*   **Optimización iterativa:** Permite ajustar rutinas basadas en evaluaciones previas.
*   **Compatibilidad:** Diseñado para trabajar con herramientas específicas definidas por el usuario.
*   **Flexibilidad:** Admite cambios en el formato y enfoque de las instrucciones.

* * *

### Caso Práctico: Política de Cancelación de Vuelos

### Paso 1: Generar la Rutina

Comenzamos con una política de servicio al cliente escrita en texto plano y la convertimos en una rutina estructurada usando O1-mini.

#### Código para Generar la Rutina

from openai import OpenAI  
client = OpenAI(api\_key=openai\_api\_key)  
CONVERSION\_PROMPT = """  
You are a helpful assistant tasked with taking an external-facing help center policy and converting it into a structured routine.  
... (instrucciones detalladas para el formato y condiciones específicas)  
"""  
with open('originalPolicy/flightCancellationsPolicy.md', 'r') as file:  
    flight\_cancellation\_policy = file.read()  
messages = \[  
    {  
        "role": "user",  
        "content": f"""{CONVERSION\_PROMPT}\\nPOLICY:\\n{flight\_cancellation\_policy}"""  
    }  
\]  
response = client.chat.completions.create(  
    model='o1-mini',  
    messages=messages  
)  
print(response.choices\[0\].message.content)

El resultado es una rutina en formato estructurado que incluye pasos numerados, subpasos y condiciones específicas.

* * *

### Paso 2: Verificar la Calidad de la Rutina

Una vez generada, verificamos que la rutina utilice exclusivamente las herramientas definidas en nuestra lista de `TOOLS`.

#### Código para Verificación

import re  
from collections import Counter  
def extract\_function\_names(text):  
    pattern = r'\`(.\*?)\`'  
    return re.findall(pattern, text)  
\# Funciones utilizadas en la rutina  
function\_names\_from\_routine = set(extract\_function\_names(response.choices\[0\].message.content))  
\# Funciones definidas en TOOLS  
function\_names\_defined = \[tool\["function"\]\["name"\] for tool in TOOLS\]  
\# Diferencias  
unused\_functions = set(function\_names\_defined) - function\_names\_from\_routine  
extra\_functions = function\_names\_from\_routine - set(function\_names\_defined)  
print("Funciones no utilizadas:", unused\_functions)  
print("Funciones adicionales requeridas:", extra\_functions)

Este proceso asegura que la rutina generada esté alineada con las herramientas disponibles.

* * *

### Paso 3: Evaluar y Mejorar la Rutina

#### Evaluación

Corremos la rutina contra un conjunto de datos de prueba para medir su precisión y determinar áreas de mejora.

#### Código para Evaluación

from concurrent.futures import ThreadPoolExecutor  
import pandas as pd  
\# Evaluar llamadas a funciones  
def evaluate\_function\_calls(df, policy, model):  
    records = \[\]  
    with ThreadPoolExecutor() as executor:  
        futures = {executor.submit(process\_row, row\_number, row, policy, model): row\_number for row\_number, row in df.iterrows()}  
        for future in futures:  
            records.append(future.result())  
    eval\_df = pd.DataFrame(records)  
    accuracy = eval\_df\['is\_correct'\].mean()  
    return eval\_df, accuracy  
\# Resultados iniciales  
eval\_df = pd.read\_csv('evals/policyEvals.csv')  
eval\_results, initial\_accuracy = evaluate\_function\_calls(eval\_df, flight\_cancellation\_policy, 'gpt-4o-mini')  
print("Precisión inicial:", initial\_accuracy)

#### Mejora de la Rutina

Iteramos sobre la rutina usando un bucle de metaprompting para incorporar cambios basados en los resultados de evaluación.

for i in range(3):  
    messages = \[  
        {  
            "role": "user",  
            "content": f"""# Data\\nRoutine: {current\_routine}\\nResults: {eval\_results.to\_json()}"""  
        }  
    \]  
  
response = client.chat.completions.create(  
        model='o1-mini',  
        messages=messages  
    )  
    updated\_routine = response.choices\[0\].message.content  
    current\_routine = updated\_routine  
    eval\_results, accuracy = evaluate\_function\_calls(eval\_df, current\_routine, 'gpt-4o-mini')  
    print(f"Iteración {i+1}, Precisión: {accuracy}")

El objetivo es maximizar la precisión del modelo mientras se mantiene la consistencia con la política original.

* * *

### Conclusión

El metaprompting con O1 es una herramienta poderosa para optimizar rutinas basadas en LLMs. Desde la generación inicial hasta la mejora iterativa, este enfoque asegura que las rutinas sean precisas, consistentes y adaptadas a herramientas específicas.

### Recursos Relacionados

*   [Documentación de O1](https://platform.openai.com/docs/)
*   [Cookbook de O1](https://cookbook.openai.com/examples/o1/using_reasoning_for_routine_generation)

By [Jaime Hernández](https://medium.com/@devjaime) on [December 29, 2024](https://medium.com/p/ba41a6e3b55e).

[Canonical link](https://medium.com/@devjaime/metaprompting-con-o1-optimizando-rutinas-basadas-en-llms-ba41a6e3b55e)

Exported from [Medium](https://medium.com) on March 15, 2025.