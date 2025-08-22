---
layout: "../../layouts/BlogLayout.astro"
title: "Día 4: widgets Flutter + diseños básicos y responsivos"
description: ""
tags: ["code", "Flutter"]
time: 4
featured: true
timestamp: "2021-10-11T12:20:31-0300"
filename: "2021-10-11_D-a-4--widgets-Flutter---dise-os-b-sicos-y-responsivos-5468a0af808b"
---

Día 4: widgets Flutter + diseños básicos y responsivos
======================================================

Bienvenido al día 4, donde hablaremos sobre widgets y diseños.

* * *

### Día 4: widgets Flutter + diseños básicos y responsivos

![](https://cdn-images-1.medium.com/max/800/0*jk-JK7QIUQn7BFLH.png)

Bienvenido al día 4, donde hablaremos sobre widgets y diseños.

Flutter realmente brilla cuando se trata de crear hermosas interfaces de usuario.

Con Flutter, creas interfaces de usuario utilizando widgets y componiéndolos juntos de manera declarativa. Puede pensar en los widgets como componentes de la interfaz de usuario que describen el aspecto de su aplicación.

Flutter ofrece un amplio conjunto de widgets, que se ajustan estrechamente a la especificación de [Material Design](https://flutter.dev/docs/development/ui/widgets/material) . El [catálogo de widgets de Flutter](https://flutter.dev/docs/development/ui/widgets) también incluye [widgets de Cupertino](https://flutter.dev/docs/development/ui/widgets/cupertino) , que son réplicas de alta fidelidad de todos los componentes de la interfaz de usuario que se encuentran en iOS.

Como Flutter controla cada píxel de la pantalla, incluso puedes crear tus propios widgets para ofrecer una experiencia completamente personalizada que deleite a tus usuarios.

Entonces, ¿cuáles son algunos buenos recursos para aprender sobre widgets y diseños?

### Diseños en Flutter

Un buen lugar para comenzar es la guía oficial sobre [diseños en Flutter](https://flutter.dev/docs/development/ui/layout) , que te muestra cómo crear algunos diseños comunes con ilustraciones útiles.

*   [**Flutter Widget de la semana**](https://www.youtube.com/watch?v=b_sQ9bMltGU&list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG) : Esto es realmente una serie de videos que vino desde el equipo de flutter. La mayoría de los videos duran de 1 a 2 minutos y te ayudan a conocer los widgets más útiles. No es necesario que veas toda la serie a la vez, pero no te detendré si lo haces

![](https://cdn-images-1.medium.com/max/800/0*GEWRD-FDTIYl3dEW)

*   . Y a veces, saber que existe un widget significa que no es necesario que lo cree nuevamente (no reinventes la rueda).

Pero tarde o temprano, puede encontrar algunos errores de diseño (¿alguien desborda en la parte inferior?

![](https://cdn-images-1.medium.com/max/800/0*Zoivo4HqAMvauywM)

). Para superar eso, recomiendo esta página que explica cómo funcionan las restricciones en Flutter:

*   [restricciones comprensión](https://flutter.dev/docs/development/ui/layout/constraints)

Lo bueno de esto es que incluye una lista de casi 30 diseños de ejemplo, que te muestran por qué a veces las cosas no funcionan y cómo solucionarlas.

### Diseños responsivos

Una vez que necesite admitir múltiples factores de forma, deberá aprender sobre diseños responsivos y cómo implementarlos en Flutter.

Para eso, recomiendo este tutorial:

*   [¿Cómo construir el diseño de responsivo en el flúter](https://blog.codemagic.io/building-responsive-applications-with-flutter/)?

Esto le mostrará cómo usar [MediaQuery](https://api.flutter.dev/flutter/widgets/MediaQuery-class.html) , [LayoutBuilder](https://api.flutter.dev/flutter/widgets/LayoutBuilder-class.html) y [otros widgets útiles para crear interfaces de usuario responsivas .](https://flutter.dev/docs/development/ui/layout/adaptive-responsive)

Y aunque puede crear una aplicación Flutter totalmente responsiva solo con MediaQuery, LayoutBuilder y otros widgets integrados, existen paquetes que facilitan este proceso.

Uno de estos paquetes es [responsive\_builder](https://pub.dev/packages/responsive_builder) , que facilita la configuración de **puntos de interrupción de** pantalla personalizados y la gestión de varios factores de forma con una API ergonómica. Esto se basa en esta [serie de videos](https://www.youtube.com/playlist?list=PLQQBiNtFxeyJbOkeKBe_JG36gm1V2629H) sobre la interfaz de usuario receptiva de Flutter.

### Reto diario

Si está buscando lo básico, aquí tiene un tutorial paso a paso sobre cómo crear un diseño básico:

*   C[onstrucción de diseños](https://flutter.dev/docs/development/ui/layout/tutorial)

Una vez que te sientas cómodo con los conceptos básicos, puedes intentar subir de nivel y aceptar un desafío de interfaz de usuario más grande.

Por ejemplo, aquí hay un diseño de muestra para la interfaz de usuario de una tablet de punto de venta:

*   [Punto de Venta Diseño de Sistemas | dribbble](https://dribbble.com/shots/14139155-Point-of-Sale-System-Design)

Intenta averiguar cuál es la jerarquía de diseño de este diseño. Cree algunas clases de widget personalizadas para todos los elementos de la interfaz de usuario que pueda identificar y compóngalas juntas para formar la interfaz de usuario completa.

Y por qué no, sube tu proyecto a GitHub y compártelo con otros.

¡No se olviden de compartir sus avances en twitter!

[**Donate to devjaime**  
_Help support devjaime by donating or sharing with your friends._www.paypal.com](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S "https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S")[](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S)

![](https://cdn-images-1.medium.com/max/800/0*u3Gk7mrzz9dOFxko)

By [Jaime Hernández](https://medium.com/@devjaime) on [October 11, 2021](https://medium.com/p/5468a0af808b).

[Canonical link](https://medium.com/@devjaime/d%C3%ADa-4-widgets-flutter-dise%C3%B1os-b%C3%A1sicos-y-responsivos-5468a0af808b)

Exported from [Medium](https://medium.com) on March 15, 2025.