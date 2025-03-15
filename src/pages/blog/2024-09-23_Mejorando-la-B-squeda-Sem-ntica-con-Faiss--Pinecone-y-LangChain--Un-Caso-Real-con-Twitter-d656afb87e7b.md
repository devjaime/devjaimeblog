---
layout: "../../layouts/BlogLayout.astro"
title: "Mejorando la Búsqueda Semántica con Faiss, Pinecone y LangChain: Un Caso Real con Twitter"
description: ""
tags: ["code", "Pinecone", "LangChain"]
time: 4
featured: true
timestamp: "2024-09-23T12:20:32-0300"
filename: "2024-09-23_Mejorando-la-B-squeda-Sem-ntica-con-Faiss--Pinecone-y-LangChain--Un-Caso-Real-con-Twitter-d656afb87e7b"
---

Mejorando la Búsqueda Semántica con Faiss, Pinecone y LangChain: Un Caso Real con Twitter \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Mejorando la Búsqueda Semántica con Faiss, Pinecone y LangChain: Un Caso Real con Twitter
=========================================================================================

En este blog exploramos cómo integrar Faiss y LangChain para construir un sistema de recuperación de información utilizando datos de…

* * *

### **Mejorando la Búsqueda Semántica con Faiss, Pinecone y LangChain: Un Caso Real con Twitter**

![](https://cdn-images-1.medium.com/max/800/1*BPRiSJ2pDe5wpx6QxNDutA.jpeg)

En este blog exploramos cómo integrar **Faiss** y **LangChain** para construir un sistema de recuperación de información utilizando datos de Twitter. Además, discutimos cuándo es útil optar por **Pinecone**, una base de datos vectorial gestionada en la nube.

### ¿Qué es Faiss?

Faiss es una biblioteca de código abierto diseñada por Meta para la búsqueda eficiente de similitud entre vectores densos. Es muy utilizada en aplicaciones que requieren manejo de grandes cantidades de datos, como motores de recomendación, búsqueda de texto e imágenes.

### ¿Qué es Pinecone?

Pinecone es una solución de base de datos vectorial en la nube, que permite indexar y buscar vectores sin preocuparte por la infraestructura. Pinecone ofrece escalabilidad sin tener que gestionar servidores, lo que lo hace ideal para aplicaciones en tiempo real y búsqueda de vectores en grandes volúmenes de datos.

### Caso de Uso: Recuperación de Tweets Similares

Este proyecto utiliza la API de Twitter para obtener tweets, generar sus embeddings con OpenAI y almacenarlos en un índice Faiss para realizar búsquedas semánticas. Aquí se muestra el paso a paso.

#### 1\. Obtener Tweets de Twitter

Primero, usamos la API de Twitter para obtener tweets basados en una búsqueda por palabra clave:

import tweepy  
\# Autenticación en la API de Twitter  
auth = tweepy.OAuthHandler('API\_KEY', 'API\_SECRET\_KEY')  
auth.set\_access\_token('ACCESS\_TOKEN', 'ACCESS\_TOKEN\_SECRET')  
api = tweepy.API(auth)  
\# Buscar tweets  
tweets = api.search\_tweets(q="inteligencia artificial", count=100)  
docs = \[tweet.text for tweet in tweets\]

#### 2\. Generar Embeddings con OpenAI

Usamos LangChain para generar los embeddings de cada tweet con OpenAI:

from langchain.embeddings.openai import OpenAIEmbeddings  
embeddings = OpenAIEmbeddings(openai\_api\_key="TU\_API\_KEY")

#### 3\. Crear Índice en Faiss

Con los embeddings generados, almacenamos los vectores en un índice Faiss, lo que nos permite hacer búsquedas eficientes basadas en similitud.

from langchain.vectorstores.faiss import FAISS  
\# Crear índice en Faiss  
index = FAISS.from\_texts(docs, embeddings)

#### 4\. Búsqueda Semántica de Tweets

Hacemos una búsqueda semántica para encontrar tweets similares al texto de una consulta.

query = "últimos avances en inteligencia artificial"  
resultados = index.similarity\_search(query)  
for resultado in resultados:  
    print(resultado)

### ¿Cuándo Usar Faiss o Pinecone?

*   **Faiss** es ideal para proyectos que requieren procesamiento local con alto control sobre los recursos y optimización personalizada, especialmente si tienes acceso a GPUs.
*   **Pinecone**, por otro lado, es una opción potente para proyectos que necesitan escalabilidad inmediata y una base de datos gestionada en la nube, permitiendo realizar búsquedas en tiempo real sin preocuparte por la infraestructura.

#### Integración de Pinecone

Si decides usar Pinecone en lugar de Faiss, puedes integrarlo fácilmente con LangChain y disfrutar de su almacenamiento en la nube para búsquedas semánticas rápidas y escalables.

from langchain.vectorstores import Pinecone  
import pinecone  
\# Inicializar Pinecone  
pinecone.init(api\_key="TU\_API\_KEY", environment="us-west1-gcp")  
\# Crear índice en Pinecone  
index\_name = "my-index"  
pinecone.create\_index(index\_name, dimension=1536)  
index = pinecone.Index(index\_name)  
\# Usar Pinecone en LangChain  
vectorstore = Pinecone(index, embeddings.embed\_query, "text")

### Conclusión

En este blog, exploramos cómo utilizar Faiss y Pinecone para mejorar la búsqueda semántica en aplicaciones que manejan grandes volúmenes de datos. Con **Faiss**, obtienes control y optimización local, mientras que con **Pinecone**, puedes delegar la infraestructura y concentrarte en la escalabilidad. En nuestro caso de uso, implementamos la búsqueda de tweets basados en inteligencia artificial, demostrando cómo estas tecnologías permiten hacer consultas rápidas y precisas.

Ambas herramientas son potentes y te permiten adaptar tu solución según tus necesidades: **control local con Faiss** o **escalabilidad gestionada con Pinecone**.

* * *

Para ver más ejemplos y el código completo, visita el [repositorio de GitHub](https://github.com/devjaime/documentation-helper).

By [Jaime Hernández](https://medium.com/@devjaime) on [September 23, 2024](https://medium.com/p/d656afb87e7b).

[Canonical link](https://medium.com/@devjaime/mejorando-la-b%C3%BAsqueda-sem%C3%A1ntica-con-faiss-pinecone-y-langchain-un-caso-real-con-twitter-d656afb87e7b)

Exported from [Medium](https://medium.com) on March 15, 2025.