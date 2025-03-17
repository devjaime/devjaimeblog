---
layout: "../../layouts/BlogLayout.astro"
title: "Probando FlutterWeb en windows primera parte"
description: ""
tags: ["code", "Flutter"]
time: 4
featured: true
timestamp: "2019-05-17T12:20:31-0300"
filename: "2019-05-17_Probando-FlutterWeb-en-windows-primera-parte-86a672b0b280"
---

Probando FlutterWeb en windows primera parte
============================================

Flutter para web es una implementación de Flutter compatible con código que se procesa utilizando tecnologías web basadas en estándares…

* * *

### Probando FlutterWeb en windows primera parte

Flutter para web es una implementación de Flutter compatible con código que se procesa utilizando tecnologías web basadas en estándares: HTML, CSS y JavaScript. Con Flutter para web, puede compilar el código existente de Flutter escrito en Dart en una experiencia de cliente que se puede incrustar en el navegador e implementar en cualquier servidor web.

Puede utilizar todas las funciones de Flutter, y no necesita un complemento de navegador.

Flutter para web está disponible actualmente como una vista previa técnica.

Echa un vistazo al [repositorio](https://github.com/flutter/flutter_web) para obtener instrucciones sobre cómo empezar.

![](https://cdn-images-1.medium.com/max/800/1*Khvy8lDxWvNf2lGNNAXHAQ.png)

Agregar soporte web implica implementar la capa de dibujo principal de Flutter sobre las API de navegador estándar. Al usar una combinación de DOM, Canvas y CSS, podemos ofrecer una experiencia de usuario portátil, de alta calidad y con un rendimiento excelente en los navegadores modernos. Implementamos esta capa de dibujo principal completamente en Dart y utilizamos el compilador de JavaScript optimizado de Dart para compilar el núcleo y el marco de Flutter junto con su aplicación en un único archivo fuente minificado que se puede implementar en cualquier servidor web.

En esta primera etapa de desarrollo, prevemos que Flutter para la web sea valioso en muchos escenarios. Por ejemplo:

*   **Una** [**aplicación web progresiva**](https://developers.google.com/web/progressive-web-apps/) **conectada construida con Flutter.** El soporte web para Flutter permite que las aplicaciones basadas en dispositivos móviles se empaquen como un PWA para llegar a una variedad más amplia de dispositivos, o para proporcionar una experiencia web complementaria a una aplicación existente.
*   **Contenido interactivo incrustado.** Flutter proporciona un entorno potente para crear componentes ricos centrados en datos que se pueden alojar fácilmente dentro de una página web existente. Ya sea para visualización de datos, una herramienta en línea como un configurador de automóviles o un gráfico integrado, Flutter puede proporcionar un enfoque de desarrollo productivo para contenido web incorporado.
*   **Incrustar contenido dinámico en una aplicación móvil de Flutter.** Una forma establecida de proporcionar actualizaciones de contenido dinámico dentro de una aplicación móvil existente es el uso de un control de vista web, que puede cargar y mostrar información de forma dinámica. El soporte que Flutter ofrece ahora para un entorno unificado para contenido web y móvil le permite desplegar contenido en línea o incrustado en una aplicación sin tener que volver a escribir.

Como habras podido notar en esta primera parte comparto exactamente la información proporcionada en la pagina oficial de flutter

[**Flutter for web**  
_Announcing the preview release of Flutter for web._flutter.dev](https://flutter.dev/web "https://flutter.dev/web")[](https://flutter.dev/web)

Ahora a traves de 2 proyectos simples podre mostrarte como funciona flutter para web.

Lo primero que quisiera mostrar es que flutter funciona totalmente response tanto cuando depurar con vista de dispositivo móvil como web

![](https://cdn-images-1.medium.com/max/800/1*3UDCyEVdrutkMXYmPei3Zg.png)

![](https://cdn-images-1.medium.com/max/800/1*70204Etv7mRXnXHsIAROgg.png)

En este proyecto lo que realizaremos sera una pagina como esta.

Una nota importante es que debes de tener en cuenta que las funcionalidades no son para nada de modo productivo, y solo estamos en un modo de prueba que estará constantemente evolucionando.

![](https://cdn-images-1.medium.com/max/800/1*ikbJwZdh2laW7hIff7KrFQ.png)

Lo primero es que te vayas al sitio del repositorio [https://github.com/flutter/flutter\_web](https://github.com/flutter/flutter_web)

y de este sigas los pasos para ocupar Flutter web

Flutter 1.5 y superior permiten el soporte para apuntar a la web con Flutter, incluida la compilación de Dart a JavaScript. Para utilizar el SDK de Flutter con la `flutter_web`vista previa, asegúrese de haber actualizado Flutter al menos `v1.5.4`ejecutando `flutter upgrade`desde su máquina. Si está desarrollando activamente Flutter para web, puede preferir estar ejecutando desde uno de los canales inestables. Nuestra wiki describe los [canales de Flutter](https://github.com/flutter/flutter/wiki/Flutter-build-release-channels) y cómo seleccionar el adecuado para sus necesidades.

Ejecuta los comandos respectivos desde tu terminal bash o cmd de windows en modo administrador

Fijate que cumplas los requisitos

![](https://cdn-images-1.medium.com/max/800/1*Crozg0xDA5XhoiS6MLxSTQ.png)

### Instalar las herramientas de construcción flutter\_web

Para instalar el `[webdev](https://pub.dartlang.org/packages/webdev)`[paquete](https://pub.dartlang.org/packages/webdev) , que proporciona las herramientas de compilación para Flutter para web, ejecute lo siguiente:

$ flutter pub global activate webdev

Este es un punto importante antes de realizar el comando anterior debes ir a visual studio code y crear un nuevo proyecto web y desde la terminal en la raiz de este proyecto ejecutar el comando (por lo menos en windows así me pudo funcionar).

![](https://cdn-images-1.medium.com/max/800/1*8uNacRdY-berYecUUoPf9A.png)

Si por alguna razón no te aparece esta opción debes ejecutar flutter doctor desde tu terminal y revisar que tengas las versiones anteriormente mencionadas

Al crear el proyecto le pondremos un nombre en este caso flutterportafolio (recuerda ocupar minúsculas) (podría ser el que ustedes quisieran).

![](https://cdn-images-1.medium.com/max/800/1*-hocIq-xLUT1zfAfYgE_cA.png)

Selecciona una carpeta para tu proyecto

![](https://cdn-images-1.medium.com/max/800/1*DEeOwWEweGjL3sOykdLb5A.png)

Luego de lo anterior debiera crearte el directorio completo de la aplicación flutter, tal como se visualiza a continuación

![](https://cdn-images-1.medium.com/max/800/1*eht12bZv1nouBGkWwUt5RQ.png)

Ahora en la terminal ejecuta el comando $ _flutter packages upgrade_ , con esto verificaremos que tengamos las últimas versiones.

![](https://cdn-images-1.medium.com/max/800/1*NtE99X9z_VOQjPbGeJA9VA.png)

En mi caso tengo la primera

![](https://cdn-images-1.medium.com/max/800/1*lb1M2Up23ohbAwgFYR5Iog.png)

Una vez realizado esto ejecuta el comando siguiente, que es quien se encarga de compilar y ejecutar nuestra app en el navegador

webdev serve

En mi caso como estoy en windows no funciono el comando y aun estoy buscando la explicación (si alguien sabe la respuesta lo puede comentar)

![](https://cdn-images-1.medium.com/max/800/1*-HFcaViA1uNUizm4ewBMdg.png)

Para solucionar lo anterior y leyendo la documentación reemplace el comando por la alternativa directa.

$ _flutter pub global run webdev serve_

![](https://cdn-images-1.medium.com/max/800/1*ggNDYgF0Dd7BUDMsyM_Maw.png)

Puedes presionar ctrl + click sobre link o abrir directamente en chrome (Recuerda por el momento solo funciona en Chrome)

![](https://cdn-images-1.medium.com/max/800/1*OgUD8wPU9frS2khroBnWLQ.png)

Ahora en tu navegador debieras ver lo siguiente

![](https://cdn-images-1.medium.com/max/800/1*fdKujIBmF-iVjlekX4tUdg.png)

Ahora el ejemplo lo dejare para un segundo post para que veamos que podemos realizar en la web.

[**Donate to devjaime**  
_Help support devjaime by donating or sharing with your friends._www.paypal.com](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S "https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S")[](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S)

By [Jaime Hernández](https://medium.com/@devjaime) on [May 17, 2019](https://medium.com/p/86a672b0b280).

[Canonical link](https://medium.com/@devjaime/probando-flutterweb-en-windows-primera-parte-86a672b0b280)

Exported from [Medium](https://medium.com) on March 15, 2025.