---
layout: "../../layouts/BlogLayout.astro"
title: "Día 3: Arquitectura Flutter y configuración del proyecto"
description: ""
tags: ["code", "Flutter"]
time: 4
featured: true
timestamp: "2021-03-23T12:20:31-0300"
filename: "2021-03-23_D-a-3--Arquitectura-Flutter-y-configuraci-n-del-proyecto-9307aa98b4fe"
---

Día 3: Arquitectura Flutter y configuración del proyecto \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Día 3: Arquitectura Flutter y configuración del proyecto
========================================================

Bienvenido al día 3, donde aprenderas sobre la arquitectura del marco Flutter y verá cómo configurar un proyecto Flutter con algunas…

* * *

### Día 3: Arquitectura Flutter y configuración del proyecto

Bienvenido al día 3, donde aprenderas sobre la arquitectura del marco Flutter y verá cómo configurar un proyecto Flutter con algunas buenas reglas de linter.

### Arquitectura Flutter

Ya sea que haya creado una aplicación Flutter antes o no, es útil obtener una descripción general de alto nivel de la arquitectura Flutter desde un punto de vista conceptual.

![](https://cdn-images-1.medium.com/max/800/0*Zne8-v9BhEYBuQNy)

Flutter usa su propio motor de renderizado llamado Skia. Está escrito en C/C ++ y proporciona API de bajo nivel para renderizado. Cuando escribes aplicaciones en Flutter, su código no llama directamente a las API del motor Flutter. Más bien, utiliza un conjunto de API de alto nivel proporcionadas por el **marco** Flutter .

Por diseño, **Flutter controla cada píxel que se dibuja en la pantalla** . El framework de Flutter ofrece un amplio conjunto de componentes de IU (llamados widgets) que se asemejan mucho a los controles de IU nativos en iOS y Android.

### Modelo de programación declarativa

Flutter usa un modelo de programación declarativo.

Los widgets de Flutter definen su IU anulando el método **build()** , que es una función que convierte el estado en IU:

**UI = f(state)**

Los widgets pequeños y de un solo propósito se **componen** juntos para crear otros más complejos y especializados que representan la interfaz de usuario de su aplicación. Por lo tanto, toda la aplicación está representada por un **árbol de widgets** .

Por ejemplo, así es como se ve el árbol de widgets para la aplicación de contador Flutter predeterminada:

![](https://cdn-images-1.medium.com/max/800/0*iAmiW7_uEolAjGJm)

​

En la próxima lección sobre gestión de estados, hablaremos sobre cómo reconstruir la interfaz de usuario cuando algunos estados **cambian** y qué técnicas están disponibles para hacerlo.

Pero por ahora esta es toda la teoría que necesita. Y si quieres una explicación más detallada de la arquitectura de Flutter, no hay mejor lugar que la documentación oficial:

*   [Descripción de la arquitectura flutter](https://flutter.dev/docs/resources/architectural-overview)

Esta es una lectura larga, pero vale la pena si quieres entender cómo funciona Flutter bajo el capó.

Pasemos a algo más práctico.

### Configuración del proyecto

Cuando creas un nuevo proyecto de Flutter, se generarán algunos archivos y carpetas.

![](https://cdn-images-1.medium.com/max/800/0*ruKZk537QYa7g2F0)

​

El archivo más importante se llama **pubspec.yaml** . Este se usa para especificar las **dependencias de** su aplicación . Estos recursos explican cómo funciona este archivo y cómo usarlo para instalar paquetes:

*   [El archivo pubspec](https://dart.dev/tools/pub/pubspec)
*   [El uso de paquetes](https://flutter.dev/docs/development/packages-and-plugins/using-packages)

Además de esto, recomiendo encarecidamente agregar un archivo **analysis\_options.yaml** . Esto se puede usar para especificar **reglas de linter** y habilitar advertencias y errores adicionales para su proyecto. Aquí hay una guía detallada al respecto:

*   [Primeros pasos: Creación de su proyecto](https://dash-overflow.net/articles/getting_started/) implementando reglas de linter

En particular, lea la sección “Cómo administrar sus reglas de linter fácilmente” al final. Esto explica cómo crear un conjunto de reglas limpias y fáciles de mantener que puede modificar en sus aplicaciones.

Puede descargar un archivo **analysis\_options.yaml** “oficial” [desde aquí](https://dart-lang.github.io/linter/lints/options/options.html) y también ver una [lista de todas las reglas admitidas con explicaciones](https://dart-lang.github.io/linter/lints/index.html).

### Reto diario

Agregue un archivo **analysis\_options.yaml** a su proyecto y escribe un tweet al respecto.

[**Donate to devjaime**  
_Help support devjaime by donating or sharing with your friends._www.paypal.com](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S "https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S")[](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S)

![](https://cdn-images-1.medium.com/max/800/0*AoPJYe3CEt6kH81S)

By [Jaime Hernández](https://medium.com/@devjaime) on [March 23, 2021](https://medium.com/p/9307aa98b4fe).

[Canonical link](https://medium.com/@devjaime/d%C3%ADa-3-arquitectura-flutter-y-configuraci%C3%B3n-del-proyecto-9307aa98b4fe)

Exported from [Medium](https://medium.com) on March 15, 2025.