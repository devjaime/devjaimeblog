---
layout: "../../layouts/BlogLayout.astro"
title: "Haystack: Construyendo Aplicaciones de IA con Componentes Modulares "
description: ""
tags: ["code", "HayStack"]
time: 4
featured: true
timestamp: "2024-08-28T12:20:32-0300"
filename: "2024-08-28_Haystack--Construyendo-Aplicaciones-de-IA-con-Componentes-Modulares-02d1ae93a849"
---

Haystack: Construyendo Aplicaciones de IA con Componentes Modulares
===================================================================

Haystack es un marco de trabajo de código abierto para construir aplicaciones de inteligencia artificial (IA) en Python. Este marco permite…

* * *

### Haystack: Construyendo Aplicaciones de IA con Componentes Modulares

![](https://cdn-images-1.medium.com/max/800/1*2QbWYDFq9mxX_5dRS2YpTg.png)

Haystack es un marco de trabajo de código abierto para construir aplicaciones de inteligencia artificial (IA) en Python. Este marco permite combinar diferentes componentes para crear _pipelines_ que ejecutan tareas específicas en aplicaciones de IA. En este blog, exploraremos cómo utilizar Haystack para crear una aplicación básica de búsqueda de documentos, partiendo desde la inicialización de los componentes hasta la ejecución de la _pipeline_.

### Componentes: La Base de Todo

Los componentes son las unidades fundamentales en Haystack. Cada componente realiza una tarea específica, como procesar texto, generar incrustaciones (_embeddings_) o escribir documentos en un almacén. A continuación, se muestra un ejemplo de cómo inicializar un componente de incrustación de documentos utilizando el modelo `text-embedding-3-small` de OpenAI.

pythonfrom haystack.components.embedders import OpenAIDocumentEmbedder  
embedder = OpenAIDocumentEmbedder(model="text-embedding-3-small")

Este componente tomará documentos como entrada y generará sus respectivas representaciones embebidas.

### Pipelines: Conectando Componentes

Una _pipeline_ en Haystack es simplemente una cadena de componentes conectados entre sí. Estas _pipelines_ permiten realizar tareas complejas al pasar los datos de un componente a otro de manera secuencial.

Para construir una _pipeline_ de indexación de documentos, primero necesitamos inicializar un almacén de documentos. En este caso, utilizaremos `InMemoryDocumentStore`, un almacén simple que no requiere configuración adicional.

from haystack.document\_stores.in\_memory import InMemoryDocumentStore  
document\_store = InMemoryDocumentStore()

### Creando una Pipeline de Indexación

Nuestra _pipeline_ de indexación tomará archivos de texto, los convertirá en documentos, los dividirá en fragmentos manejables, generará incrustaciones para cada fragmento y finalmente los almacenará en nuestro almacén de documentos.

from haystack import Pipeline  
from haystack.components.converters.txt import TextFileToDocument  
from haystack.components.preprocessors.document\_splitter import DocumentSplitter  
from haystack.components.writers import DocumentWriter  
converter = TextFileToDocument()  
splitter = DocumentSplitter()  
embedder = OpenAIDocumentEmbedder()  
writer = DocumentWriter(document\_store=document\_store)  
indexing\_pipeline = Pipeline()  
indexing\_pipeline.add\_component("converter", converter)  
indexing\_pipeline.add\_component("splitter", splitter)  
indexing\_pipeline.add\_component("embedder", embedder)  
indexing\_pipeline.add\_component("writer", writer)

Una vez que los componentes están añadidos, es necesario conectarlos para que los datos fluyan entre ellos:

indexing\_pipeline.connect("converter", "splitter")  
indexing\_pipeline.connect("splitter", "embedder")  
indexing\_pipeline.connect("embedder", "writer")

Finalmente, ejecutamos la _pipeline_ para indexar nuestros documentos:

indexing\_pipeline.run({"converter": {"sources": \['data/davinci.txt'\]}})

### Creando una Pipeline de Búsqueda de Documentos

Una vez que los documentos están indexados, podemos crear una _pipeline_ para buscar información relevante en ellos. Al igual que la _pipeline_ de indexación, necesitamos varios componentes, como un incrustador de consultas y un recuperador de documentos basado en incrustaciones.

rom haystack.components.embedders import OpenAITextEmbedder  
from haystack.components.retrievers.in\_memory import InMemoryEmbeddingRetriever  
query\_embedder \= OpenAITextEmbedder()  
retriever = InMemoryEmbeddingRetriever(document\_store=document\_store)  
document\_search = Pipeline()  
document\_search.add\_component("query\_embedder", query\_embedder)  
document\_search.add\_component("retriever", retriever)  
document\_search.connect("query\_embedder.embedding", "retriever.query\_embedding")

### Ejecución de la Búsqueda

Para buscar en los documentos, formulamos una pregunta y ejecutamos la _pipeline_ de búsqueda.

question = "How old was Davinci when he died?"  
results = document\_search.run({"query\_embedder": {"text": question}})

Los resultados devueltos incluirán los documentos que mejor respondan a la pregunta.

for i, document in enumerate(results\["retriever"\]\["documents"\]):  
    print(f"DOCUMENT {i}")  
    print(document.content)

### Exploración de Nuevas Preguntas y Ajustes

Puedes ajustar los parámetros de búsqueda, como el número de resultados (`top_k`) o probar con diferentes preguntas.

question = "Where was Davinci born?"  
results = document\_search.run({"query\_embedder": {"text": question}, "retriever": {"top\_k": 3}})

Esta flexibilidad permite personalizar la _pipeline_ según las necesidades de la aplicación.

### Conclusión

Haystack ofrece un enfoque modular para construir aplicaciones de IA al permitir la combinación de componentes en _pipelines_. Este enfoque hace que sea fácil experimentar y escalar las aplicaciones de IA, desde la indexación de documentos hasta la búsqueda avanzada.

Para los desarrolladores interesados en construir aplicaciones de búsqueda, generación de respuestas o análisis de documentos, Haystack proporciona las herramientas necesarias para combinar componentes y lograr resultados precisos y eficientes.

Si deseas explorar más sobre Haystack y sus capacidades, visita su documentación oficial. [https://docs.haystack.deepset.ai/docs/intro](https://docs.haystack.deepset.ai/docs/intro)

By [Jaime Hernández](https://medium.com/@devjaime) on [August 28, 2024](https://medium.com/p/02d1ae93a849).

[Canonical link](https://medium.com/@devjaime/haystack-construyendo-aplicaciones-de-ia-con-componentes-modulares-02d1ae93a849)

Exported from [Medium](https://medium.com) on March 15, 2025.