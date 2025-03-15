---
layout: "../../layouts/BlogLayout.astro"
title: "Introducción a cómo funciona Kafka e implementación usando Python-client"
description: ""
tags: ["code", "Kafka", "python"]
time: 4
featured: true
timestamp: "2022-04-16T12:20:31-0300"
filename: "2022-04-16_Introducci-n-a-c-mo-funciona-Kafka-e-implementaci-n-usando-Python-client-e34b727a472a"
---

Introducción a cómo funciona Kafka e implementación usando Python-client \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Introducción a cómo funciona Kafka e implementación usando Python-client
========================================================================

Configure un cliente de Python para Kafka con kafka-python

* * *

### Introducción a cómo funciona Kafka e implementación usando Python-client

![](https://cdn-images-1.medium.com/max/800/1*BqSRfLZY2b4wZ6qg1fBTuw.png)

* * *

### Configure un cliente de Python para Kafka con kafka-python

El uso de datos en tiempo real se ha convertido en el uso comercial recurrente tanto para las empresas como para sus clientes. Sin embargo, uno de los factores clave a tener en cuenta es cómo el caso de uso comercial se basa en sus datos para el uso en tiempo real, es decir, ¿el caso de uso escribe más datos de los que lee, más de lectura que de escritura.  
Es por esto que necesariamente se necesita procesar datos en tiempo real y en un enfoque basado en eventos, aquí es donde entra en juego Apache Kafka. Repasaremos qué es Kafka, los conceptos de Kafka, quién lo está usando, cómo configurarlo y cómo usarlo con un cliente Python ( `kafka-python`) en este tutorial.

**¿Qué es Apache Kafka?**

Kafka es un sistema de mensajería distribuida de transmisión de eventos que consta de servidores y clientes que se comunican a través del protocolo de red TCP de alto rendimiento.  
.

> Nota: Kafka se desarrolló en Linkedin, pero ahora se administra bajo la fundación Apache, por lo tanto, Apache Kafka. Me referiré a Apache Kafka como Kafka a lo largo de este tutorial.

**Transmisión de eventos**

La transmisión de eventos es la captura, el procesamiento y la transformación de datos en tiempo real en varios eventos de diferentes fuentes, por ejemplo, clicks en sitios web, bases de datos, sistemas de registro, dispositivos IOT, etc.

al mismo tiempo que garantiza el flujo continuo y el enrutamiento de datos de flujo a varios destinos anticipando los datos del evento.

**¿Por qué Kafka?**

Kafka se utiliza en arquitecturas de datos de transmisión de eventos en tiempo real para proporcionar análisis de datos, los mensajes se almacenan en el disco con Kafka, lo que proporciona replicación dentro del clúster, lo que hace que los mensajes sean más duraderos, más confiables y admitan múltiples suscriptores.

Kafka puede transmitir eventos continuamente mediante el uso  
del modelo de publicación-suscripción (pub-sub) en el que los eventos se pueden leer (suscribir).

Tan pronto como se escriben (publicar), procesar o incluso almacenar para la  
retención de datos durante un período como Kafka da la flexibilidad sobre cuánto tiempo retener (almacenar) los datos.

**¿Por qué Kafka es tan rápido?**

Kafka es rápido por varias razones, destacaremos algunas de estas razones a continuación.

1.  **Copia cero**: se basa en gran medida en el principio [de copia cero,](https://en.wikipedia.org/wiki/Zero-copy) es decir, interactúa directamente con el kernel del sistema operativo para mover datos.
2.  **Procesamiento por lotes**: permite el procesamiento por lotes de datos en fragmentos, lo que permite una compresión de datos eficiente y, por lo tanto, reduce la latencia de E/S.
3.  **Escalado horizontal**: Kafka permite el escalado horizontal, ya que permite múltiples particiones (incluso en miles) sobre un tema que podría estar en miles de máquinas, ya sea en las instalaciones o en la nube, lo que lo hace muy capaz de soportar grandes cargas.
4.  **Evitar la memoria RAM**: Kafka escribe en un registro de compromiso inmutable en el disco secuencialmente, evitando así la búsqueda lenta del disco.

**¿Qué problema resuelve Kafka?**

Con el auge de la innovación en varios aspectos de la vida desde Internet de  
las cosas (IOT), automóviles autónomos, inteligencia artificial, soluciones de cadena de bloques, robótica y muchos más, por mencionar algunos, la tasa de generación de datos está creciendo exponencialmente y no es ralentizando en el corto plazo.

Por lo tanto, para que las empresas innoven y entiendan más a sus clientes y brinden mejores servicios, la forma tradicional de desarrollo de software debe mejorarse para incorporar el flujo de este enorme y creciente conjunto de datos de varias fuentes de datos, incluidas las  
mencionadas y otras. Con Kafka, todos los diversos componentes del  
sistema pueden comunicarse en un enfoque basado en eventos donde un evento de una parte del sistema se traduce en acción en otra parte del  
sistema, la belleza de esto es que sucederá en tiempo real.

**¿Qué empresas usan Kafka?**

Miles de empresas están utilizando Kafka en la producción, incluidas las  
empresas como Walmart o Uber, algunas de las empresas incluyen Microsoft, Netflix, Goldman, Sachs, Target, Cisco, Intuit, Box, Pinterest, New York Times y muchas [más](https://kafka.apache.org/powered-by) .

**Primeros pasos con Kafka.**

Kafka implica la comunicación entre servidores y clientes.

**Servidores** : Kafka se ejecuta como un clúster de uno o más servidores que pueden estar ubicados en uno o varios centros de datos en las instalaciones o en la nube.

**Clientes** : los clientes de Kafka nos permiten escribir sistemas/aplicaciones de sistemas distribuidos que leen, escriben y procesan flujos de eventos con un enfoque tolerante a fallas en caso de falla de la red o de la máquina. Los clientes están disponibles como API REST y en varios lenguajes de programación, incluidos Java, Scala, Go, Python, C/C++ y muchos otros. En este tutorial nos centraremos en usar el cliente de python.

Hay varios clientes que podemos usar para comunicarnos con Kafka

1.  Línea de comando
2.  [Kafka confluente](https://github.com/confluentinc/confluent-kafka-python)
3.  kafka-python (lo que estaríamos usando)

**Instalación** :

**PASO 1:**

Descarga Kafka desde [aquí](https://www.apache.org/dyn/closer.cgi?path=/kafka/2.7.0/kafka_2.13-2.7.0.tgz)

Comando

Comando

**PASO 2:**

**NOTA** : Su entorno local debe tener instalado Java 8+.

Abra una terminal y ejecute este comando:

Abra otra terminal y ejecute este comando:

**PASO 3** :

Creación de un Tópico para almacenar eventos

Ejecute este comando en otra terminal:

Ejecute este comando para ver el Tópico:

Que debería devolver algo como esto:

![](https://cdn-images-1.medium.com/max/800/1*OsmhHgVJkFmL0C4JQ1LA8A.png)

### PASO 4:

Ejecute esto en su terminal para escribir un evento en un tópico

### PASO 5:

Ejecute esto en su terminal para leer el evento del tópico

**Zookeeper** es un sistema de archivos consistente para la información de configuración que Kafka se usa para administrar y coordinar clústeres/intermediarios, lo que incluye la elección de leadership para la partición de tópicos de intermediarios.

**Agente de Kafka** : los clústeres de Kafka se componen de múltiples agentes, cada uno de los cuales tiene una identificación única. Cada agente que contiene particiones de registros de tópicos que conectan un cliente de arranque del agente con todo el cliente de Kafka.

Con los pasos resaltados anteriormente, ahora tenemos una instancia de Kafka en ejecución en nuestra máquina. Antes de continuar, familiaricémonos con los conceptos de cómo funciona Kafka y los componentes que implica.

**Conceptos de Kafka**

![](https://cdn-images-1.medium.com/max/800/0*DPsVvc5Cxgf2nQjO.png)

**Eventos** : significa que algo sucedió, es decir, se generan datos en una parte particular del sistema que nos interesa, por lo que se escribe un registro/mensaje en un tópico designado. Por lo tanto, un evento se registra en un formato de clave, valor y marca de tiempo para cada evento escrito.

**Tópico** : el tópico de Kafka se dividió en diferentes depósitos en varios centros de datos en todas las regiones para garantizar la tolerancia a fallas. También garantiza que los eventos se almacenen en el orden en que se escriben agregando nuevos eventos que llegan a los existentes y se replican en varias particiones en diferentes particiones. Nota Cada tópico se identifica mediante un nombre.

**Producer** : son aplicaciones de cliente escritas en cualquiera de los clientes de Kafka disponibles para escribir (publicar) eventos únicamente, es decir, mensajes/registros en su tópico designado, que se identifica con un nombre de tópico.  
Están escritos para ser agnósticos del consumidor, es decir, el productor no está al tanto de la aplicación del consumidor, hace un trabajo y lo hace bien al  
escribir eventos sobre el tópico.

Consumidores: son aplicaciones cliente para consumir eventos, es decir, mensajes/registros en el orden en que llegaron a un tema desde un tópico específico.

**UTILIZANDO KAFKA-PYTHON**

Para este tutorial, se supone que se está familiarizado con el lenguaje de programación python y los entornos virtuales python. Usaremos pipenv como nuestro entorno virtual para este tutorial. Y usaremos un cliente de kafka python de código abierto llamado [kafka-python](https://kafka-python.readthedocs.io/) github.

Configuraríamos nuestro entorno virtual con pipenv ejecutando este comando `pipenv shell`e instalaríamos kafka-python con

`pip install kafka-python`.

Antes de continuar, debemos analizar brevemente algunos términos clave al trabajar con `kafka-python` en el cliente.

### `KafkaProducer`

`**KafkaProducer**`es el cliente responsable de publicar registros en un clúster de Kafka. Lo hace llamando al método de **envío** que es asíncrono y cuando se llama agrega el registro a un búfer de registros pendientes, regresa inmediatamente. Además, el producer vuelve a intentarlo automáticamente si la solicitud falla, a menos que esté configurado de otra manera, que es una de las configuraciones que se pueden establecer.

Vamos a crear un`KafkaProducer`

![](https://cdn-images-1.medium.com/max/800/1*lGvPJAmtmIuoEIVbGFMcJA.png)

Hagamos un recorrido rápido de lo que está sucediendo en el fragmento de código anterior.

`KafkaProducer`es la clase utilizada por `kafka-python`el cliente de python para instanciar una conexión al clúster de Kafka.

bootstrap\_servers es una lista de host\[:port\] con los que el productor debe ponerse en contacto para arrancar los metadatos del clúster inicial.

Ahora enviamos el registro del producer llamando al método de envío que toma el argumento del nombre del tema, que es una cadena en este caso **, el tópico del pedido** , el mensaje, la clave, el valor, la marca de tiempo y algunos otros argumentos opcionales.

Ahora, para el flujo síncrono, podrían ser errores, tal vez el nombre del tópico no se encontró . `kafka-python`El cliente lanza la `KafkaError`excepción que podemos manejar y tratar de manera adecuada.

También podríamos enviar registros codificados mediante `msgpack`el cual producirá mensajes json. Así es como se vería:

![](https://cdn-images-1.medium.com/max/800/1*Ue0pdUZowRaBzlI8dbznyw.png)

> Nota: Hay más configuraciones que se pueden configurar en `KafakProducer`la [documentación](https://kafka-python.readthedocs.io/en/master/apidoc/KafkaProducer.html) para ver más configuraciones que se pueden configurar.

### `KafkaConsumer`

Registros de suscripción (lectura) del consumidor del clúster de Kafka. El consumidor manejará de manera transparente la falla de los servidores en el clúster de Kafka y se adaptará a medida que se creen particiones de tópicos o migren entre intermediarios.

Creemos Kafka Consumer:

![](https://cdn-images-1.medium.com/max/800/1*FFXBacF-MUkB20O7rppX8A.png)

Veamos lo que está pasando en el fragmento de código del Consumidor

`KafkaConsumer`

`bootstrap_servers`– Cadena 'host\[:port\]' (o lista de cadenas 'host\[:port\]') con la que el consumidor debe ponerse en contacto para iniciar los metadatos del clúster inicial.

`group_id`\- Es el nombre del grupo de consumidores al que se puede unir dinámicamente si la asignación de partición está habilitada, que se usa para obtener y confirmar compensaciones.

`value_deserializer`(devolución de llamada) es cualquier invocable que toma un valor de mensaje sin procesar y devuelve un valor deserializado.

Varios enfoques para consumir registros de un tópico

![](https://cdn-images-1.medium.com/max/800/1*3V0K8mvHEqyPue7YjQ9y2g.png)

**Conclusión**

¡Uf!, si llegas hasta aquí, te doy las gracias. Solo hemos arañado la superficie de lo que podemos hacer con Kafka, hay muchas más cosas que se pueden lograr ampliando los argumentos en la `KafkaProducer`autenticación `KafkaConsumer`usando SSL, configurando el certificado SSL, agregando un nuevo tópico dinámicamente. Podemos explorar más configuraciones de la [documentación](https://kafka-python.readthedocs.io/en/master/usage.html) `kafka-python` .

By [Jaime Hernández](https://medium.com/@devjaime) on [April 16, 2022](https://medium.com/p/e34b727a472a).

[Canonical link](https://medium.com/@devjaime/introducci%C3%B3n-a-c%C3%B3mo-funciona-kafka-e-implementaci%C3%B3n-usando-python-client-e34b727a472a)

Exported from [Medium](https://medium.com) on March 15, 2025.