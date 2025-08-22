---
layout: "../../layouts/BlogLayout.astro"
title: "AI Agent Develop: Agentes Inteligentes con LangChain y LangGraph"
description: ""
tags: ["code", "AI", "Langchain", "LangGraph"]
time: 4
featured: true
timestamp: "2024-12-19T12:20:33-0300"
filename: "2024-12-19_AI-Agent-Develop--Agentes-Inteligentes-con-LangChain-y-LangGraph-3226c5971fa2"
---

AI Agent Develop: Agentes Inteligentes con LangChain y LangGraph
================================================================

https://www.udemy.com/certificate/UC-780d6420-e70c-468d-800b-1cbf971835d9/

* * *

### AI Agent Develop: Agentes Inteligentes con LangChain y LangGraph

![](https://cdn-images-1.medium.com/max/800/1*iSr7FYvnOi72mt8BRf5Qww.png)

Curso Udemy Pablo Dichone

[https://www.udemy.com/certificate/UC-780d6420-e70c-468d-800b-1cbf971835d9/](https://www.udemy.com/certificate/UC-780d6420-e70c-468d-800b-1cbf971835d9/)

En este blog, exploraremos los conocimientos que adquirí en el curso **“Master AI Agent Development: Build Scalable Agents with LangChain & LangGraph”**. Este curso me permitió desarrollar agentes escalables utilizando herramientas avanzadas como LangChain y LangGraph, desde conceptos básicos hasta aplicaciones sofisticadas en casos reales.

* * *

### ¿Qué son los agentes inteligentes?

Los agentes inteligentes son sistemas diseñados para interactuar de forma autónoma con el entorno, tomando decisiones basadas en datos y modelos de lenguaje. Su aplicación abarca sectores como la atención al cliente, investigación de mercados, educación y análisis financieros.

En este curso, aprendí cómo implementar estos agentes desde cero utilizando modelos como GPT-4.0 y combinándolos con grafos de estado, almacenamiento de memoria y herramientas externas.

* * *

### Ejemplo 1: Construyendo un agente básico

El primer paso fue crear un agente simple que utiliza un modelo de lenguaje grande (LLM) para responder preguntas del usuario. A continuación, un fragmento del código:

import os  
from dotenv import load\_dotenv  
from openai import OpenAI

\# Cargar variables de entorno  
load\_dotenv()  
openai\_key = os.getenv("OPENAI\_API\_KEY")

\# Configurar el modelo  
llm\_name = "gpt-4.0"  
client = OpenAI(api\_key=openai\_key)

class Agent:  
    def \_\_init\_\_(self, system=""):  
        self.system = system  
        self.messages = \[\]  
        if system:  
            self.messages.append({"role": "system", "content": system})

    def \_\_call\_\_(self, message):  
        self.messages.append({"role": "user", "content": message})  
        result = self.execute()  
        self.messages.append({"role": "assistant", "content": result})  
        return result

    def execute(self):  
        response = client.chat.completions.create(  
            model=llm\_name,  
            messages=self.messages  
        )  
        return response.choices\[0\].message.content

\# Uso del agente  
agent = Agent(system="Eres un asistente que brinda respuestas claras y concisas.")  
respuesta = agent("¿Quién fue Nelson Mandela?")  
print(respuesta)

### Explicación:

*   **Inicialización del modelo:** El agente utiliza `gpt-4.0` para procesar mensajes.
*   **Historial de mensajes:** Almacena conversaciones previas para mantener contexto.
*   **Ejemplo de uso:** Responde a preguntas generales.

* * *

### Ejemplo 2: Agente financiero avanzado con LangGraph

LangGraph es una herramienta poderosa que permite modelar flujos de trabajo complejos utilizando grafos de estados. En este ejemplo, implementamos un agente financiero que recopila y analiza datos financieros de manera estructurada.

### Construcción del grafo de estados

LangGraph permite representar la lógica del agente como un conjunto de nodos (estados) y transiciones entre ellos. Cada nodo define una tarea específica que el agente debe realizar.

from langgraph.graph import StateGraph  
from langchain\_openai import ChatOpenAI  
from dotenv import load\_dotenv  
import os

\# Cargar variables de entorno  
load\_dotenv()  
openai\_key = os.getenv("OPENAI\_API\_KEY")

\# Configurar el modelo  
model = ChatOpenAI(api\_key=openai\_key, model="gpt-4.0")

def financial\_analysis(prompt):  
    return model.chat(\[{"role": "user", "content": prompt}\])

\# Crear un grafo de estados  
graph = StateGraph()

\# Definir los estados  
def gather\_data(state, context):  
    # Simula la recopilación de datos financieros  
    context\['data'\] = "Datos financieros recopilados"  
    return "Datos recopilados"

def analyze\_data(state, context):  
    # Simula el análisis de los datos  
    data = context.get('data', "Sin datos")  
    context\['analysis'\] = f"Análisis completado para: {data}"  
    return context\['analysis'\]

def generate\_report(state, context):  
    # Genera un informe basado en el análisis  
    analysis = context.get('analysis', "Sin análisis")  
    return f"Informe generado: {analysis}"

\# Agregar estados al grafo  
graph.add\_state("gather\_data", gather\_data)  
graph.add\_state("analyze\_data", analyze\_data)  
graph.add\_state("generate\_report", generate\_report)

\# Definir las transiciones  
graph.add\_transition("gather\_data", "analyze\_data")  
graph.add\_transition("analyze\_data", "generate\_report")

\# Ejecutar el grafo  
context = {}  
result = graph.run(initial\_state="gather\_data", context=context)  
print(result)

### Explicación detallada:

*   **Estado** `**gather_data**`**:** Recopila datos financieros simulados y los almacena en el contexto del grafo.
*   **Estado** `**analyze_data**`**:** Realiza un análisis de los datos recopilados, también almacenado en el contexto.
*   **Estado** `**generate_report**`**:** Genera un informe basado en el análisis realizado.
*   **Transiciones:** Controlan el flujo entre los estados de manera secuencial.

### Ventajas de LangGraph:

1.  **Modularidad:** Cada estado es una unidad independiente, lo que facilita el mantenimiento y la ampliación del agente.
2.  **Contexto compartido:** El grafo permite almacenar y compartir datos entre estados, garantizando consistencia.
3.  **Escalabilidad:** Ideal para modelar flujos de trabajo complejos con lógica ramificada.
4.  **Visualización:** LangGraph permite generar visualizaciones del flujo, lo que mejora la comprensión del sistema.

* * *

### Casos de uso prácticos

1.  **Atención al cliente:** Creación de asistentes virtuales personalizados.
2.  **Finanzas:** Generación de informes y análisis de datos.
3.  **Educación:** Agentes interactivos para tutorías automatizadas.
4.  **Investigación de mercados:** Análisis competitivo en tiempo real.
5.  **Automatización de procesos:** Flujos complejos en lógicas empresariales.

* * *

### Reflexión final

LangGraph se destaca como una herramienta clave para estructurar agentes inteligentes de manera escalable y eficiente. Su integración con LLMs como GPT-4.0 ofrece una combinación poderosa para resolver problemas complejos en diversos dominios.

Si deseas aprender más, te invito a explorar estos conceptos y llevarlos a tus proyectos. ¡La IA está transformando el futuro, y ahora es el momento de ser parte de este cambio!

By [Jaime Hernández](https://medium.com/@devjaime) on [December 19, 2024](https://medium.com/p/3226c5971fa2).

[Canonical link](https://medium.com/@devjaime/ai-agent-develop-agentes-inteligentes-con-langchain-y-langgraph-3226c5971fa2)

Exported from [Medium](https://medium.com) on March 15, 2025.