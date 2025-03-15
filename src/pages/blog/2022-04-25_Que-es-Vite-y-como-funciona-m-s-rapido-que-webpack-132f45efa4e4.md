---
layout: "../../layouts/BlogLayout.astro"
title: "Que es Vite y como funciona más rapido que webpack"
description: ""
tags: ["code", "vite", "javascript"]
time: 4
featured: true
timestamp: "2022-04-25T12:20:31-0300"
filename: "2022-04-25_Que-es-Vite-y-como-funciona-m-s-rapido-que-webpack-132f45efa4e4"
---

Que es Vite y como funciona más rapido que webpack \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Que es Vite y como funciona más rapido que webpack
==================================================

Vite es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos…

* * *

### Que es Vite y como funciona más rapido que webpack

![](https://cdn-images-1.medium.com/max/800/0*9je4S8adxijCGILV.jpg)

Vite es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos. Consta de dos partes principales:

*   Un servidor de desarrollo que proporciona [amplias mejoras de características](https://vitejs.dev/guide/features.html) sobre [los módulos ES nativos , por ejemplo,](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement) extremadamente rápido .
*   Un comando de compilación que agrupa su código con [Rollup](https://rollupjs.org/) , preconfigurado para generar activos estáticos altamente optimizados para producción.

Link oficial: [https://vitejs.dev/](https://vitejs.dev/)

### Los problemas

Antes de que los ES modules estuvieran disponibles en los navegadores, los desarrolladores no tenían un mecanismo nativo para crear JavaScript de forma modular. Es por eso que todos estamos familiarizados con el concepto de “empaquetado”: usar herramientas que rastrean, procesan y concatenan nuestros módulos fuente en archivos que pueden ejecutarse en el navegador.

Con el tiempo, hemos visto herramientas como [webpack](https://webpack.js.org/) , [Rollup](https://rollupjs.org/) y [Parcel](https://parceljs.org/) , que mejoraron enormemente la experiencia de desarrollo para los desarrolladores frontend.

Sin embargo, a medida que comenzamos a crear aplicaciones cada vez más ambiciosas, la cantidad de JavaScript con la que nos enfrentamos también aumentó exponencialmente. No es raro que los proyectos a gran escala contengan miles de módulos. Estamos empezando a encontrarnos con un cuello de botella en el rendimiento de las herramientas basadas en JavaScript: a menudo puede llevar una espera excesivamente larga (¡a veces hasta minutos!) poner en marcha un servidor de desarrollo, las ediciones de archivos pueden tardar un par de segundos en reflejarse. en el navegador. El ciclo de retroalimentación lento puede afectar en gran medida la productividad y la felicidad de los desarrolladores.

Vite tiene como objetivo abordar estos problemas aprovechando los nuevos avances en el ecosistema: la disponibilidad de ES modules nativos en el navegador y el surgimiento de herramientas JavaScript escritas en lenguajes nativos de compilación.

### Inicio lento del servidor

Cuando se inicia en frío el servidor de desarrollo, una configuración de compilación basada en un paquete tiene que rastrear y compilar ansiosamente toda la aplicación antes de que se pueda servir.

Vite mejora el tiempo de inicio del servidor de desarrollo dividiendo primero los módulos de una aplicación en dos categorías: dependencias y código fuente .

*   Las dependencias son en su mayoría JavaScript simple que no cambia con frecuencia durante el desarrollo. Algunas dependencias grandes (por ejemplo, bibliotecas de componentes con cientos de módulos) también son bastante caras de procesar. Las dependencias también se pueden enviar en varios formatos de módulos (por ejemplo, ESM o CommonJS).
*   Vite preagrupa [las dependencias](https://vitejs.dev/guide/dep-pre-bundling.html) mediante [esbuild](https://esbuild.github.io/) . esbuild está escrito en Go y preagrupa las dependencias entre 10 y 100 veces más rápido que los paquetes basados ​​en JavaScript.
*   El código fuente a menudo contiene JavaScript no simple que necesita transformación (por ejemplo, componentes JSX, CSS o Vue/Svelte), y se editará con mucha frecuencia. Además, no es necesario cargar todo el código fuente al mismo tiempo (por ejemplo, con división de código basada en rutas).
*   Vite sirve código fuente sobre [ESM nativo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) . Básicamente, esto permite que el navegador se haga cargo de parte del trabajo de un empaquetador: Vite solo necesita transformar y servir el código fuente a pedido, según lo solicite el navegador. El código detrás de las importaciones dinámicas condicionales solo se procesa si realmente se usa en la pantalla actual.

![](https://cdn-images-1.medium.com/max/800/0*EIRXP6Xvfp_8aGWC.png)

![](https://cdn-images-1.medium.com/max/800/0*zonVIzsG6kCl3Jo0.png)

### Actualizaciones lentas

Cuando se edita un archivo en una configuración de compilación basada en un paquete, es ineficiente reconstruir todo el paquete por razones obvias: la velocidad de actualización se degradará linealmente con el tamaño de la aplicación.

En algunos paquetes, el servidor de desarrollo ejecuta el paquete en la memoria, por lo que solo necesita invalidar parte de su gráfico de módulo cuando cambia un archivo, pero aún necesita reconstruir todo el paquete y recargar la página web. Reconstruir el paquete puede ser costoso y recargar la página arruina el estado actual de la aplicación. Esta es la razón por la que algunos paquetes admiten el reemplazo de módulo en caliente (HMR): lo que permite que un módulo se “reemplace en caliente” a sí mismo sin afectar el resto de la página. Esto mejora en gran medida DX; sin embargo, en la práctica hemos descubierto que incluso la velocidad de actualización de HMR se deteriora significativamente a medida que crece el tamaño de la aplicación.

En Vite, HMR se realiza sobre ESM nativo. Cuando se edita un archivo, Vite solo necesita invalidar con precisión la cadena entre el módulo editado y su límite HMR más cercano (la mayoría de las veces solo el módulo en sí), lo que hace que las actualizaciones de HMR sean consistentemente rápidas, independientemente del tamaño de su aplicación.

Vite también aprovecha los encabezados HTTP para acelerar las recargas de páginas completas (nuevamente, permita que el navegador haga más trabajo por nosotros): las solicitudes del módulo de código fuente se hacen condicionales a través `304 Not Modified`de , y las solicitudes del módulo de dependencia se almacenan en caché `Cache-Control: max-age=31536000,immutable`para que no lleguen al servidor nuevamente. una vez en caché.

Una vez que experimente lo rápido que es Vite, dudamos mucho que esté dispuesto a soportar nuevamente el desarrollo en paquete.

### Por qué agrupar para producción

Aunque el ESM nativo ahora es ampliamente compatible, el envío de ESM desagregado en producción sigue siendo ineficiente (incluso con HTTP/2) debido a los viajes de ida y vuelta de la red adicionales causados ​​por las importaciones anidadas. Para obtener el rendimiento de carga óptimo en producción, aún es mejor agrupar su código con agitación de árboles, carga diferida y división de fragmentos comunes (para un mejor almacenamiento en caché).

Garantizar un resultado óptimo y una coherencia de comportamiento entre el servidor de desarrollo y la compilación de producción no es fácil. [Esta es la razón por la que Vite se envía con un comando de compilación](https://vitejs.dev/guide/build.html) preconfigurado que incluye muchas [optimizaciones](https://vitejs.dev/guide/features.html#build-optimizations) de rendimiento listas para usar.

### ¿Por qué no agrupar con esbuild?

Si bien `esbuild`es increíblemente rápido y ya es un paquete muy capaz para bibliotecas, algunas de las funciones importantes necesarias para agrupar _aplicaciones_ todavía están en progreso, en particular, la división de código y el manejo de CSS. Por el momento, Rollup es más maduro y flexible en estos aspectos. Dicho esto, no descartaremos la posibilidad de usar `esbuild`para la construcción de producción cuando estabilice estas características en el futuro.

### Create React APP y Vite

![](https://cdn-images-1.medium.com/max/800/0*6poDC_xXdTrdpi_z.png)

Lo primero que debe realizar es instalar vite: Recomiendo pnpm (las razones en este articulo) [https://medium.com/@devjaime/que-es-pnpm-37553a828c1b](https://medium.com/@devjaime/que-es-pnpm-37553a828c1b)

NPM:

Yarn:

PNPM (recomendado)

Para completar los pasos según su proyecto siga estos pasos

![](https://cdn-images-1.medium.com/max/800/1*am8g-6Us2lZDykgW6UU1QQ.png)

### Creando la App React JS usando Vite

Comandos para crear las diferentes versiones

![](https://cdn-images-1.medium.com/max/800/1*Mp4dcjSe-vpNDPMGzoiDbQ.png)

Después de instalar las dependencias, puede iniciar la app con el siguiente comando npm run dev

Felicdades!!

By [Jaime Hernández](https://medium.com/@devjaime) on [April 25, 2022](https://medium.com/p/132f45efa4e4).

[Canonical link](https://medium.com/@devjaime/que-es-vite-y-como-funciona-m%C3%A1s-rapido-que-webpack-132f45efa4e4)

Exported from [Medium](https://medium.com) on March 15, 2025.