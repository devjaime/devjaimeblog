---
layout: "../../layouts/BlogLayout.astro"
title: "Que es rabbitMQ y como implementarlo en nestjs"
description: ""
tags: ["code", "rabbitMQ", "nestjs"]
time: 4
featured: true
timestamp: "2023-03-18T12:20:32-0300"
filename: "2023-03-18_Que-es-rabbitMQ-y-como-implementarlo-en-nestjs-8a8f1a97df5f"
---

Que es rabbitMQ y como implementarlo en nestjs
==============================================

RabbitMQ es un software de intermediación de mensajes de código abierto que se utiliza para enviar y recibir mensajes entre aplicaciones y…

* * *

### Que es rabbitMQ y como implementarlo en nestjs

![](https://cdn-images-1.medium.com/max/800/1*SmGSlOwpeP5v3mmxUusRMw.png)

RabbitMQ es un software de intermediación de mensajes de código abierto que se utiliza para enviar y recibir mensajes entre aplicaciones y sistemas distribuidos. Es una implementación del protocolo de Advanced Message Queuing Protocol (AMQP) y permite que las aplicaciones se comuniquen de manera asíncrona y escalable.

RabbitMQ funciona como un intermediario entre las aplicaciones, recibiendo mensajes de una aplicación y entregándolos a otra. Estos mensajes se pueden enviar de forma segura, confiable y rápida. RabbitMQ se utiliza comúnmente en aplicaciones empresariales, en particular en aquellas que requieren una comunicación de alta disponibilidad y de alta velocidad entre sistemas distribuidos.

RabbitMQ se puede integrar con varios lenguajes de programación y plataformas, incluyendo Java, Python, Ruby, .NET, entre otros. Además, RabbitMQ ofrece diversas características, como la capacidad de encolar mensajes, enrutarlos según criterios específicos, implementar políticas de recuperación de errores y soporte para clústeres.

Para implementar RabbitMQ en NestJS, puedes seguir los siguientes pasos:

Instala el paquete `amqplib` para Node.js utilizando el administrador de paquetes npm:

npm install amqplib

Importa el módulo `AMQPModule` de NestJS y configura la conexión a RabbitMQ en el archivo `app.module.ts`:

![](https://cdn-images-1.medium.com/max/800/1*P4pxjatoEWiBgv5Zn_D_kQ.png)

Crea un consumidor que escuche mensajes de una cola específica en el archivo `consumer.service.ts`:

![](https://cdn-images-1.medium.com/max/800/1*JNmmr2GaGsl5-isUJarBpQ.png)

En este ejemplo, el consumidor está configurado para escuchar mensajes con la clave de enrutamiento “my-routing-key” en la cola “my-queue” del intercambio “my-exchange”.

Crea un productor que envíe mensajes a una cola específica en el archivo `producer.service.ts`:

![](https://cdn-images-1.medium.com/max/800/1*C5M3EPAyz5z31S_rgw6olA.png)

En este ejemplo, el productor envía un mensaje con el contenido especificado a la cola “my-queue”.

Finalmente, puedes inyectar los servicios `ConsumerService` y `ProducerService` donde sea necesario y utilizarlos para recibir y enviar mensajes, respectivamente.

![](https://cdn-images-1.medium.com/max/800/1*b6eYRwVHod6jyadeeWfmKA.png)

En este ejemplo, el controlador expone una ruta GET que utiliza el servicio `ProducerService` para enviar un mensaje a la cola "my-queue".

Espero que esto te ayude a implementar RabbitMQ en NestJS. ¡Buena suerte!

By [Jaime Hernández](https://medium.com/@devjaime) on [March 18, 2023](https://medium.com/p/8a8f1a97df5f).

[Canonical link](https://medium.com/@devjaime/que-es-rabbitmq-y-como-implementarlo-en-nestjs-8a8f1a97df5f)

Exported from [Medium](https://medium.com) on March 15, 2025.