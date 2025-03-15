---
layout: "../../layouts/BlogLayout.astro"
title: "Implementación de un Flujo de Trabajo Interactivo con LlamaIndex en Jupyter Notebook"
description: ""
tags: ["code", "LlamaIndex", "JupyterNotebook"]
time: 4
featured: true
timestamp: "2025-03-12T12:20:33-0300"
filename: "2025-03-12_Implementaci-n-de-un-Flujo-de-Trabajo-Interactivo-con-LlamaIndex-en-Jupyter-Notebook-2b9edf6b8586"
---

Implementación de un Flujo de Trabajo Interactivo con LlamaIndex en Jupyter Notebook \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Implementación de un Flujo de Trabajo Interactivo con LlamaIndex en Jupyter Notebook
====================================================================================

En este artículo, exploraremos un conjunto de notebooks diseñados para implementar un flujo de trabajo interactivo utilizando LlamaIndex…

* * *

### Implementación de un Flujo de Trabajo Interactivo con LlamaIndex en Jupyter Notebook

![](https://cdn-images-1.medium.com/max/800/1*N-KjmkFZnDtWVUMjz1GibQ.png)

En este artículo, exploraremos un conjunto de notebooks diseñados para implementar un flujo de trabajo interactivo utilizando **LlamaIndex**, **OpenAI** y eventos de feedback para mejorar la generación de respuestas. Esta implementación permite la iteración en respuestas a cuestionarios mediante un agente que recibe retroalimentación de un usuario humano.

### 1\. Introducción y Objetivo del Proyecto

Los notebooks están enfocados en la construcción de un **flujo de trabajo iterativo** que utiliza modelos de lenguaje para responder preguntas basadas en documentos cargados, como formularios de solicitud de empleo y currículums.

El objetivo principal es mejorar la precisión de las respuestas generadas mediante un sistema de feedback en tiempo real, permitiendo que un usuario pueda corregir o ajustar las respuestas antes de finalizar el proceso.

### 2\. Instalación y Configuración de Entorno

Antes de ejecutar los notebooks, es necesario configurar el entorno instalando las dependencias adecuadas:

pip install llama-index openai ipywidgets pandas matplotlib

Además, se utilizan claves de API para OpenAI y LlamaIndex, las cuales se extraen a través de funciones auxiliares.

from helper import get\_openai\_api\_key, get\_llama\_cloud\_api\_key  
llama\_cloud\_api\_key = get\_llama\_cloud\_api\_key()  
openai\_api\_key = get\_openai\_api\_key()

### 3\. Construcción del Flujo de Trabajo

### 3.1. Definición de Eventos

Se definen eventos personalizados para estructurar el flujo del agente:

from llama\_index.core.workflow import Event  
class ParseFormEvent(Event):  
    application\_form: str  
class QueryEvent(Event):  
    query: str  
    field: str  
class ResponseEvent(Event):  
    response: str  
class FeedbackEvent(Event):  
    feedback: str  
class GenerateQuestionsEvent(Event):  
    pass

Estos eventos permiten gestionar el proceso de consulta, respuesta y feedback dentro del flujo del agente.

### 3.2. Implementación del Agente con LlamaIndex

El flujo de trabajo está estructurado en pasos utilizando `Workflow` y `step` de LlamaIndex.

from llama\_index.core.workflow import Workflow, step, Context  
class RAGWorkflow(Workflow):  
    storage\_dir = "./storage"  
    llm: OpenAI  
    query\_engine: VectorStoreIndex  
    @step  
    async def set\_up(self, ctx: Context, ev: StartEvent) -> ParseFormEvent:  
        self.llm = OpenAI(model="gpt-4o-mini")  
        return ParseFormEvent(application\_form=ev.application\_form)

Cada paso dentro del flujo maneja una etapa específica:

*   **parse\_form**: Extrae los campos de un formulario para ser respondidos.
*   **generate\_questions**: Genera preguntas basadas en el contenido del documento.
*   **ask\_question**: Utiliza el modelo de lenguaje para obtener respuestas preliminares.
*   **fill\_in\_application**: Recibe feedback del usuario y permite iteraciones.
*   **get\_feedback**: Procesa la retroalimentación para mejorar las respuestas.

### 3.3. Integración de Feedback Humano

Uno de los aspectos más importantes del flujo es la capacidad de recibir y procesar retroalimentación en tiempo real:

@step  
async def get\_feedback(self, ctx: Context, ev: HumanResponseEvent) -> FeedbackEvent | StopEvent:  
    result = self.llm.complete(f"""  
        Has recibido retroalimentación sobre las respuestas.   
        ¿Hay algo que mejorar?  
        <feedback>{ev.response}</feedback>  
        Responde con 'OKAY' si está todo bien o 'FEEDBACK' si hay ajustes necesarios.  
    """)  
      
    verdict = result.text.strip()  
    if verdict == "OKAY":  
        return StopEvent(result=await ctx.get("filled\_form"))  
    else:  
        return FeedbackEvent(feedback=ev.response)

Esto permite que el usuario pueda validar cada respuesta antes de finalizar el proceso.

### 4\. Ejecución y Visualización del Flujo

Para ejecutar el agente, se inicia el flujo de eventos y se gestiona la retroalimentación del usuario:

w = RAGWorkflow(timeout=600, verbose=False)  
handler = w.run(  
    resume\_file="data/fake\_resume.pdf",  
    application\_form="data/fake\_application\_form.pdf"  
)  
  
async for event in handler.stream\_events():  
    if isinstance(event, InputRequiredEvent):  
        print("Formulario generado:\\n")  
        print(event.result)  
        response = input(event.prefix)  
        handler.ctx.send\_event(HumanResponseEvent(response=response))  
response = await handler  
print("Flujo completado. Resultado final:")  
print(str(response))

Este código permite al usuario interactuar con el flujo y hacer ajustes en tiempo real.

### 5\. Conclusión

Este conjunto de notebooks demuestra cómo se puede construir un flujo de trabajo interactivo utilizando modelos de lenguaje, mejorando la precisión de las respuestas con retroalimentación humana. La combinación de **LlamaIndex**, **OpenAI** y eventos personalizados permite crear un sistema flexible y escalable para automatizar tareas de procesamiento de documentos y formularios.

Con este enfoque, se pueden optimizar procesos en áreas como reclutamiento, asistencia virtual y validación automatizada de información.

### 6\. Ejemplo de Validación Automatizada de Información

Un caso de uso práctico es la validación de documentos en un sistema de control de calidad. Supongamos que tenemos un sistema que debe verificar si los datos ingresados en un formulario cumplen con ciertos criterios predefinidos:

@step  
async def validate\_information(self, ctx: Context, ev: ParseFormEvent) -> ResponseEvent:  
    rules = {  
        "email": r"^\[\\w\\.-\]+@\[\\w\\.-\]+\\.\\w+$",  
        "phone": r"^\\+?\[0-9\]{7,15}$"  
    }  
      
    form\_data = json.loads(ev.application\_form)  
    errors = \[\]  
      
    for field, value in form\_data.items():  
        if field in rules and not re.match(rules\[field\], value):  
            errors.append(f"{field} tiene un formato inválido.")  
      
    if errors:  
        return ResponseEvent(response="\\n".join(errors))  
    else:  
        return ResponseEvent(response="Todos los datos son válidos.")

Este ejemplo muestra cómo un flujo de trabajo puede validar automáticamente los datos de un formulario, asegurando que cumplan con ciertos estándares antes de continuar con el proceso.

By [Jaime Hernández](https://medium.com/@devjaime) on [March 12, 2025](https://medium.com/p/2b9edf6b8586).

[Canonical link](https://medium.com/@devjaime/implementaci%C3%B3n-de-un-flujo-de-trabajo-interactivo-con-llamaindex-en-jupyter-notebook-2b9edf6b8586)

Exported from [Medium](https://medium.com) on March 15, 2025.