---
layout: "../../layouts/BlogLayout.astro"
title: "Comprender los webhooks"
description: ""
tags: ["code", "webhooks"]
time: 4
featured: true
timestamp: "2022-04-14T12:20:31-0300"
filename: "2022-04-14_Comprender-los-webhooks-25dcf883f698"
---


Comprender los webhooks
=======================

¿Qué es un webhook?

* * *

### Comprender los webhooks

![](https://cdn-images-1.medium.com/max/800/1*nyZpTde-GMycbKb6wQT4Ng.png)

### ¿Qué es un webhook?

Un webhook es una “solicitud HTTP inversa” entre servidores en lugar de un cliente y un servidor. Un servidor remoto envía una solicitud HTTP POST a una URL pública en el servidor de su aplicación cada vez que ocurre un evento en su extremo para que pueda activar un evento en su propia aplicación en función de esa actualización.

### Escenario

Al utilizar una aplicación web, ¿ha intentado cambiar la información que se muestra en la página web en la que se encuentra? Incluso si no se da cuenta, probablemente lo haya hecho, muchas veces, a través del uso de la comunicación cliente-servidor de su computadora.

Por ejemplo, hace clic en algo en la interfaz de usuario de una aplicación web en su máquina (el cliente), que luego envía una solicitud HTTP al servidor de la aplicación. Luego, el servidor envía una respuesta a su dispositivo, que luego activa un cambio en la interfaz de usuario de la aplicación web.

![](https://cdn-images-1.medium.com/max/800/0*HWOQcoWs-jgB79cH.png)

Sin embargo, ¿qué sucede cuando el servidor de la aplicación web desea desencadenar un evento basado en algo que sucede en un servidor remoto en lugar de una acción del usuario? ¡Ahí es donde entran los webhooks!

### Explorando algunos ejemplos

Ahora que tiene una idea de lo que es un webhook, veamos un par de ejemplos de casos de uso para consolidar su comprensión.

### Activación de acciones en el pago exitoso

![](https://cdn-images-1.medium.com/max/800/1*F1pQhmu2Vf5TnI2dXJ1NWw.png)

![](https://cdn-images-1.medium.com/max/800/0*RvCw1_BEdWaqLpAW.png)

Tiene un sitio web de comercio electrónico con una integración de procesamiento de pagos de terceros. El proceso de finalización puede tener un éxito instantáneo, pero también puede demorarse o terminar en un error. Dado que el procesamiento de pagos lo realiza un servicio externo, no tendrá acceso directo al proceso de pago que ocurre en su extremo. Sin embargo, ¿qué sucede si desea que se active un evento en su aplicación después de la compra exitosa de un cliente?

Un cliente compra en su sitio web, que utiliza Stripe o Paypal o Criptomonedas, para el procesamiento de pagos. Cuando se completa una compra, envía un texto de agradecimiento. Stripe admite webhooks para alertarnos cuando una compra se ha realizado correctamente. Usted proporciona una URL (que usted controla) a Stripe y recibe detalles sobre la compra al instante. Luego, su aplicación toma la información recibida y envía un mensaje SMS en respuesta.

### Esperando una transcripción

Al solicitar una transcripción de Deepgram, puede esperar a que se genere, pero esto puede demorar unos segundos más de lo que podría esperar para archivos más grandes. Puede acceder al webhook de Deepgram al incluir la función de devolución de llamada en su solicitud, lo que le permite al usuario redirigir los resultados de la transcripción a la URL de su elección.

Su solicitud de una transcripción se puede responder de inmediato, lo que le permite recibir una respuesta inmediata. Al mismo tiempo, Deepgram funciona en segundo plano antes de enviar los resultados a su servidor a través de la URL proporcionada.

![](https://cdn-images-1.medium.com/max/800/0*uoFIUg-3ic5UVptW.png)

Debido a que usted controla la aplicación que recibe una carga de webhook, puede crear cualquier lógica comercial adicional para ejecutar una vez que tenga los datos. Usted podría:

*   Envíe un correo electrónico a su cliente para informarle que su transcripción está completa con los resultados.
*   Traduzca la transcripción proporcionada a su servidor para que se muestre en la interfaz de usuario de su aplicación.
*   Envíe un mensaje de texto SMS al teléfono del usuario con una breve vista previa de los resultados.

### Webhooks con Node.js

Un consumidor de webhook es solo un controlador de ruta. En lugar de recibir solicitudes de una acción de usuario, el servicio que emite webhooks la activará. Aquí hay un ejemplo con Express:

![](https://cdn-images-1.medium.com/max/800/1*TerqwRCNdKHKCTSsGvVUQA.png)

Dado que los webhooks crean una solicitud POST para su aplicación, deberá crear un controlador de ruta POST en su aplicación. Suponiendo que la URL de nuestra aplicación sea , la URL `https://myDIYstore.com`de nuestro consumidor de webhook será `[https://myDIYstore.com/hook](https://myDIYstore.com/hook.)`[.](https://myDIYstore.com/hook.)

### Webhooks vs Surveys

En los ejemplos anteriores, vemos que el servidor remoto envía datos a nuestra aplicación mediante webhooks. Sin embargo, una alternativa a este método es sondear desde el servidor de su aplicación al servidor remoto de su elección.

Sondeo significa que su servidor solicitará de forma periódica y continua comprobar si ha habido una actualización en el servidor remoto. Si hay uno, regresa con la información solicitada y su aplicación puede dejar de verificar.

La principal diferencia entre el uso de webhooks y el sondeo es que los webhooks envían una solicitud desde un servidor remoto a su servidor tan pronto como ocurre un evento. Con el sondeo, su servidor realiza una solicitud periódicamente hasta que detecta una actualización en el servidor remoto.

Para aprovechar los webhooks, el servicio de terceros debe admitirlos. Cuando no estén disponibles, deberá sondear las actualizaciones. Si bien este método puede requerir más recursos para las aplicaciones, a veces, puede ser su única opción (o incluso una más adecuada teniendo en cuenta el contexto, pero eso está fuera del alcance de este artículo). Vea a continuación un ejemplo de cómo se vería el sondeo en un servidor Express.

![](https://cdn-images-1.medium.com/max/800/1*_frWPKywnwWXbh0BqRPM7w.png)

En este ejemplo, estamos consultando continuamente nuestra API de terceros elegida cada 2 segundos hasta que se cumplan los criterios. Una vez que se cumplen los criterios, procedemos con nuestra lógica comercial y se detiene el sondeo. Como puede ver, este puede ser un método intensivo en recursos con muchas solicitudes sin cambios en los datos. Sin embargo, puede ser la opción más apropiada (o la única), por lo que es valioso comprender tanto las Surveys como los webhooks.

¡Los webhooks son una herramienta maravillosamente conveniente e intuitiva una vez que aprendes a usarla! ¡Pero es importante recordar que los webhooks deben ser compatibles con el servicio del que solicita los datos para que funcionen! Algunas plataformas que los usan incluyen Deepgram, Twitter, Discord y Stripe.

By [Jaime Hernández](https://medium.com/@devjaime) on [April 14, 2022](https://medium.com/p/25dcf883f698).

[Canonical link](https://medium.com/@devjaime/comprender-los-webhooks-25dcf883f698)

Exported from [Medium](https://medium.com) on March 15, 2025.