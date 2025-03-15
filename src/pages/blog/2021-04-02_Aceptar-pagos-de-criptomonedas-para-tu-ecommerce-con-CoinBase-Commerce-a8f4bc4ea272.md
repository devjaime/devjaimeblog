---
layout: "../../layouts/BlogLayout.astro"
title: "Aceptar pagos de criptomonedas para tu ecommerce con CoinBase Commerce"
description: ""
tags: ["code", "criptomonedas", "coinbase", "cloud functions"]
time: 4
featured: true
timestamp: "2021-04-02T12:20:31-0300"
filename: "2021-04-02_Aceptar-pagos-de-criptomonedas-para-tu-ecommerce-con-CoinBase-Commerce-a8f4bc4ea272"
---

Aceptar pagos de criptomonedas para tu ecommerce con CoinBase Commerce \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Aceptar pagos de criptomonedas para tu ecommerce con CoinBase Commerce
======================================================================

Este es un tutorial basado en la última publicado por Jeff Delaney en fireship

* * *

### Aceptar pagos de criptomonedas para tu ecommerce con CoinBase Commerce

![](https://cdn-images-1.medium.com/max/800/0*_tVaUuwvdVIPlBak.jpg)

Este es un tutorial basado en la última publicado por Jeff Delaney en fireship

> **Pueden ver el video explicativo a**[**quí**](https://www.youtube.com/watch?v=sZif1kuAjcY)

Aceptar pagos con criptomonedas, como Bitcoin y Ethereum, en tu aplicación abre la puerta a más clientes en un nicho de rápido crecimiento. [Coinbase Commerce](https://commerce.coinbase.com/?lang=en) es como la API de Stripe Payments para criptomonedas. Proporciona una API simple donde puedes crear cargos a una cuenta, facturas, etc. Pero a diferencia de las tarjetas de crédito, que son procesadas por una autoridad central, los pagos con criptomonedas se distribuyen a una red global de mineros donde se confirman en la cadena de bloques. El proceso de confirmación lleva tiempo y presenta una variedad de desafíos únicos para los desarrolladores.

El siguiente tutorial demuestra cómo aceptar pagos con Coinbase Commerce, utilizando Firebase Cloud Functions como su servidor backend.

### Flujo de pago con Criptomonedas

Los pagos criptográficos se basan en push, lo que significa que Coinbase necesita escuchar constantemente los cambios en la red de pagos. La API envía webhooks cada vez que ocurre un evento importante con un cargo.

1.  Su servidor crea un **_cargo_** con una cantidad a pagar por el usuario. Caduca después de 1 hora.
2.  El usuario paga, lo que pone el cargo en estado **_pendiente_** (manejo a través de webhook).
3.  Algún tiempo después, hasta 10 minutos, el cargo se **_confirma_** o **_falla_** (manejo a través de webhook).

![](https://cdn-images-1.medium.com/max/800/0*2NOHbFpc_2Tjnrdg.png)

### Configuración inicial

### Cuenta de comercio de Coinbase

💡 Aunque no es obligatorio, es una buena idea tener una cuenta [**personal de Coinbase**](https://www.coinbase.com/join/hernan_rehe) con ETH o BTC disponible para pequeños pagos de prueba. Actualmente, Coinbase no tiene sandbox 🙄, por lo que debe realizar pagos reales para probar su integración.

Regístrese para obtener una cuenta de [Coinbase Commerce](https://commerce.coinbase.com/) .

Crea una clave de API y anota el secreto de firma de Webhook; se necesitarán en la siguiente sección.

![](https://cdn-images-1.medium.com/max/800/1*DaRkgODyIJDYb73h1aNzfQ.png)

### Cloud Functions

Las funciones en la nube (Cloud functions) son necesarias para:

1.- Crear un **_cargo por_** intención de pago

2\. Escuchar los webhooks que se activan cuando el pago se envía y confirma en la cadena de bloques.

Coinbase tiene un [SDK](https://github.com/coinbase/coinbase-commerce-node) para nodeJS, para simplificar la integración.

En su linea de comandos escriba lo siguiente:

\>>

Importar los paquetes requeridos

### Backend

### Crear un cargo

Cree un [cargo](https://commerce.coinbase.com/docs/api/#charges) con la cantidad y los detalles del producto. Esta demostración utiliza un producto estático en una función que se aloja en la nube HTTP, pero es probable que deseas pasar datos personalizados a través del cuerpo de la solicitud. El objeto de cargo resultante proporciona un `**hosted_url**`campo que se puede mostrar al usuario final donde puede elegir su moneda preferida para el pago.

### Manejar Webhooks

Cuando el estado de la transacción cambia en la cadena de bloques, Coinbase enviará un webhook (evento) a su servidor.

*   `**pending**` significa que el usuario ha enviado un pago, pero aún no está confirmado en la cadena de bloques.
*   `**confirmed**`se completa el pago. OK para enviar.
*   `**failed**`pago fallido. NO envíe.

Por seguridad, es esencial llamar `**Webhook.verifyEventBody**`con su secreto de webhook desde el panel de Coinbase. Sin este paso, un hacker podría hacerse pasar por Coinbase y enviar webhooks a su servidor.

Cree otra función de nube HTTP para manejar webhooks.

### implementación de la función y deploy en cloud functions

Inicia una nueva ventana de línea de comando y ejecuta lo siguiente:

    firebase serve

    # Deployment required to handle webhooksfirebase deploy

### Interfaz

### Index.js

El código de la interfaz debe realizar una solicitud a la función de la nube para crear un cargo. Cuando el objeto de cargo está disponible, puede redirigir o mostrar un enlace a la página de pago alojada.

![](https://cdn-images-1.medium.com/max/800/1*zq6nmP2aEOaxTsA_fw0MpQ.png)

![](https://cdn-images-1.medium.com/max/800/1*vkl-WYQwYGKbICr7l4My2g.png)

![](https://cdn-images-1.medium.com/max/800/1*7eKAQxZa3FOpnur49wF7sQ.png)

[**Donate to devjaime**  
_Help support devjaime by donating or sharing with your friends._www.paypal.com](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S "https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S")[](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S)

By [Jaime Hernández](https://medium.com/@devjaime) on [April 2, 2021](https://medium.com/p/a8f4bc4ea272).

[Canonical link](https://medium.com/@devjaime/aceptar-pagos-de-criptomonedas-para-tu-ecommerce-con-coinbase-commerce-a8f4bc4ea272)

Exported from [Medium](https://medium.com) on March 15, 2025.