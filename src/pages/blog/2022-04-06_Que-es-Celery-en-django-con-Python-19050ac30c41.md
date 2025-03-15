---
layout: "../../layouts/BlogLayout.astro"
title: "Que es Celery en django con Python"
description: ""
tags: ["code", "Celery", "python"]
time: 4
featured: true
timestamp: "2022-04-06T12:20:31-0300"
filename: "2022-04-06_Que-es-Celery-en-django-con-Python-19050ac30c41"
---

Que es Celery en django con Python \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Que es Celery en django con Python
==================================

Una tecnología imprescindible para los desarrolladores de Python

* * *

### Que es Celery en django con Python

### Una tecnología imprescindible para los desarrolladores de Python

![](https://cdn-images-1.medium.com/max/800/1*M1vSb1FgAzwmeKuvvJPlqA.png)

Celery es una tecnología imprescindible para los desarrolladores de Python

Cuando trabajas en aplicaciones con uso intensivo de datos, las tareas de ejecución prolongada pueden ralentizar seriamente a tus usuarios.

Los usuarios modernos esperan que las páginas se carguen instantáneamente, pero las tareas con muchos datos pueden tardar varios segundos o incluso minutos en completarse. ¿Cómo podemos asegurarnos de que los usuarios tengan una experiencia rápida mientras completan tareas complicadas?

### Workers y Colas de Mensajes

Si queremos que los usuarios experimenten tiempos de carga rápidos en nuestra aplicación, necesitaremos descargar parte del trabajo de nuestro servidor web.

Una forma de hacer esto es con la asincronía. Mientras el servidor web carga la siguiente página, un segundo servidor está haciendo los cálculos que necesitamos en segundo plano.

A estos servidores en segundo plano, basados ​​en tareas, los llamamos “Workers”. Si bien normalmente solo tiene uno o unos pocos servidores web que responden a las solicitudes de los usuarios, puede tener muchos servidores de trabajo que procesan tareas en segundo plano.

Estos trabajadores pueden realizar cambios en la base de datos, actualizar la interfaz de usuario a través de webhooks o devoluciones de llamada, agregar elementos al caché, procesar archivos, enviar correos electrónicos, poner en cola tareas futuras y más. Todo mientras nuestro servidor web principal permanece libre para responder a las solicitudes de los usuarios.

### Colas de mensajes

Les decimos a estos workers qué hacer a través de una cola de mensajes. En pocas palabras, una cola es una estructura de datos de tipo primero en entrar, primero en salir FIFO. Cuando almacenamos mensajes en una cola, el primero que coloquemos en la cola será el primero en ser procesado. Todas las tareas se iniciarán en el orden en que las agreguemos.

Cuando un workers está disponible, toma la primera tarea del frente de la cola y comienza a procesar. Si tenemos muchos workers, cada uno realiza una tarea en orden.

La cola garantiza que cada workers solo obtenga una tarea a la vez y que cada tarea solo sea procesada por un workers.

### ¿Qué es Celery? Gestión de trabajadores para tareas de Python

Celery permite que las aplicaciones de Python implementen rápidamente colas de tareas para muchos workers.

Se encarga de la parte difícil de recibir tareas y asignarlas adecuadamente a los workers.

Utiliza Celery para lograr algunos objetivos principales:

1.  Define tareas independientes que tus workers pueden hacer como una función de Python
2.  Escucha a un intermediario de mensajes (usando Redis en este ejemplo) para obtener nuevas solicitudes de tareas
3.  Asigna esas solicitudes a los workers para completar la tarea
4.  Supervisar el progreso y el estado de las tareas y los workers

### Resumen de Celery y Django

En este ejemplo, usaremos Celery dentro de una aplicación Django para tareas de ejecución prolongada en segundo plano.

Dado que queremos que Celery tenga acceso a nuestra base de datos, modelos y lógica, definiremos las tareas de trabajo dentro de nuestra aplicación Django.

Sin embargo, estas tareas no se ejecutarán en nuestro servidor web Django principal. En cambio, Celery administrará servidores separados que pueden ejecutar las tareas simultáneamente en segundo plano.

Dado que necesitamos que la cola sea accesible tanto para el servidor web de Django (para agregar nuevas tareas) como para los servidores de workers (para recoger las tareas en cola), usaremos un servidor adicional que funcione como intermediario de mensajes.

Ese servidor de intermediario de mensajes utilizará Redis, un almacén de datos en memoria, para mantener la cola de tareas.

![](https://cdn-images-1.medium.com/max/800/0*erZ-QokAuVqqtFM9.png)

Django agrega tareas a Redis; Redis alimenta tareas a Celery

Para recapitular: Django crea una tarea (función de Python) y le dice a Celery que la agregue a la cola. Celery pone esa tarea en Redis (liberando a Django para que continúe trabajando en otras cosas). En un servidor separado, Celery ejecuta workers que pueden realizar tareas. Esos workers escuchan a Redis. Cuando llega la nueva tarea, un trabajador la recoge y la procesa, registrando el resultado nuevamente en Celery.

By [Jaime Hernández](https://medium.com/@devjaime) on [April 6, 2022](https://medium.com/p/19050ac30c41).

[Canonical link](https://medium.com/@devjaime/que-es-celery-en-django-con-python-19050ac30c41)

Exported from [Medium](https://medium.com) on March 15, 2025.