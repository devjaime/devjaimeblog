---
layout: "../../layouts/BlogLayout.astro"
title: "Mi proceso de pensamiento de desarrollo para Frontend con Frontendmentor.io"
description: ""
tags: ["code", "Frontend"]
time: 4
featured: true
timestamp: "2022-10-22T12:20:32-0300"
filename: "2022-10-22_Mi-proceso-de-pensamiento-de-desarrollo-para-Frontend-con-Frontendmentor-io-6387837a90a6"
---

Mi proceso de pensamiento de desarrollo para Frontend con Frontendmentor.io \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Mi proceso de pensamiento de desarrollo para Frontend con Frontendmentor.io
===========================================================================

Me encontré viendo a muchas personas de desarrollo haciendo #100daysofcode en Twitter. Intenté esto hace unos años y duró una semanas. Es…

* * *

### Mi proceso de pensamiento de desarrollo para Frontend con Frontendmentor.io

![](https://cdn-images-1.medium.com/max/800/1*7hUMETiNkkl2-wErBuyHFw.png)

Me encontré viendo a muchas personas de desarrollo haciendo [#100daysofcode](https://twitter.com/search?q=%23100DaysOfCode&src=typeahead_click) en Twitter. Intenté esto hace unos años y duró una semanas. **_Es difícil codificar con consistencia algo increíble todos los días_** cuando tienes una vida familiar ocupada. Cuando vi [Frontendmentor.io](https://www.frontendmentor.io/) , supe que esto era algo que quería probar. No tuve que comprometerme unos meses con este desafío y pude hacerlo en una semana. Quería compartir mi proceso de pensamiento detrás de cada diseño de sitio web que desarrollo.

**_Detalles del desafío:_** [_https://www.frontendmentor.io/challenges/myteam-multipage-website-mxlEauvW_](https://www.frontendmentor.io/challenges/myteam-multipage-website-mxlEauvW)

### Mi proceso de pensamiento para desarrollar un nuevo diseño de sitio web

He tenido el privilegio de construir muchos sitios web utilizando un CMS, para una aplicación móvil y páginas estáticas. Este es mi proceso de pensamiento habitual cuando se trata de diseños receptivos. Para este proyecto, quería construirlo como una solución con CSS puro.

#### Obtener una comprensión de la configuración del layout ya sea figma o sketch

Lo primero realice un vistazo profundo a la configuración del archivo del documento. Esto te dirá mucho sobre lo que el diseñador quiere para el diseño. Si miras un layout de Sketch o Figma, puedes mirar su archivo `layout settings`. Esto te dará información sobre el tamaño de ancho máximo del contenedor, el número de columnas, el ancho de medio etc. Acercarte a la perfección en píxeles, esta es la base que lo preparará para hacer precisamente eso.

![](https://cdn-images-1.medium.com/max/800/0*1wF8nIAHdDn9mZtR.png)

#### Verifique visualmente si el diseño estará contenido en un solo envoltorio o si necesita ser seccionado

Mira el diseño y verás si requiere background fluidos para cada sección. Esta es una clara indicación de que necesita crear contenedores seccionados separados. **_Es mucho más difícil crear márgenes negativos, relleno, posicionamiento, etc_**. de un elemento fluido una vez que lo contiene. Por lo tanto, es mucho más fácil como desarrollador controlar los estilos si crea contenedores individuales dentro de las secciones. Para diseños simples, verá que el diseñador usó un background simple para toda la página. Aquí es cuando puede contener toda la página en un solo contenedor.

![](https://cdn-images-1.medium.com/max/800/0*eIVaxawhwqpH-Kgr.jpeg)

#### Ver estilos de componentes

Acostúmbrese a hacer clic en cada componente que esté diseñando en el archivo sketch. Hay configuraciones como tamaño de fuente, espaciado entre letras, altura de línea, radio de borde, sombra de cuadro, opacidad y más. Nuestros cerebros humanos no pueden traducir toda la información cuando nuestros ojos nos engañan. El diseñador ha confiado en nosotros para perfeccionar su diseño lo mejor que podamos. **_Toda la información está en el documento, solo tenemos que mirar los detalles._**

![](https://cdn-images-1.medium.com/max/800/0*muV1tZmsTKY0hE6b.png)

#### Móvil primero

Hago lo mejor que puedo para construir mi CSS haciendo que los estilos móviles sean los predeterminados. Si hay una variación entre los puntos de interrupción, uso `min-width`para el punto de interrupción que se necesita. De esta forma, los estilos de las pantallas más grandes se eliminarán una vez que el usuario se encuentre en puntos de interrupción más pequeños. Además, manipular los elementos DOM para que se ajusten a dispositivos móviles es mucho más difícil que para computadoras de escritorio.

#### CSS > JS

No hay nada malo con Javascript, simplemente disfruto hacer las cosas con CSS puro como sea posible. Para mí, mantener algo en CSS es mucho más fácil que en Javascript. Puede tomar algunos pasos adicionales, pero es gratificante cuando no necesita confiar en Javascript para implementar una función. Investigué un poco sobre el rendimiento, pero no hay una indicación clara de que uno u otro proporcionen una mayor ganancia de rendimiento que el otro.

#### Estructura de directorios CSS

Descubrí que tener un desacoplamiento de estilos en archivos separados es muy útil. No solo lo mantiene organizado, sino que también lo entrena para que no cree archivos grandes. Sigo el [patrón 7–1](https://sass-guidelin.es/#the-7-1-pattern) muy de cerca. Obviamente, desea modificar la forma en que agrupa sus archivos y cómo los nombra según su proyecto. No todos los proyectos necesitarán la estructura de archivo CSS exacta como el otro.

#### Convención de nomenclatura CSS

Si está familiarizado con [BEM](http://getbem.com/) , comprenderá los puntos débiles. Es una buena convención de nomenclatura, pero se vuelve muy repetitiva cuanto más profundizas en tu estilo. Me estaba acostumbrando a usar [BEVM](https://www.slideshare.net/Jyaasa/bevm-blockelementvariation-modifier) , una variación de BEM, pero pronto me encontré modificando mi convención de nomenclatura. Si bien [Tailwind](https://tailwindcss.com/) es uno de los marcos CSS más populares hasta la fecha, solo me gusta para fines de creación de prototipos. No veo el beneficio de usar Tailwind para mantener una aplicación a gran escala o un sitio web. Las clases de utilidad son geniales, pero no cuando tienes que usarlas para darle estilo a cada parte de tu elemento. Por lo tanto, en el proyecto utilicé una variación de BEVM y clases de utilidad.

![](https://cdn-images-1.medium.com/max/800/0*pFlATqbMIiO7IOvD.png)

#### creé algo interesante

En el proceso de creación de este desafío, me encontré reutilizando muchos estilos de CSS Grid. He usado [Flexboxgrid](http://flexboxgrid.com/) en el pasado y realmente disfruté su simplicidad. Entonces, cree una biblioteca SCSS para CSS Grid usando la convención de nomenclatura de Bootstrap. Mientras lo usaba para este desafío, fue bastante útil. El diseño tiene muchas variaciones de tamaño de pantalla. Presentó muchos desafíos porque las pantallas de tabletas y móviles no usaban el mismo diseño de cuadrícula. Había un elemento que ocupaba 12 columnas en el escritorio, 10 en la tableta, pero volvía a 12 en el móvil. No sería un problema con Flexbox porque puedes centrar las cosas muy fácilmente, pero no con CSS Grid. Debe llamar explícitamente dónde desea que comience el elemento en la cuadrícula.

By [Jaime Hernández](https://medium.com/@devjaime) on [October 22, 2022](https://medium.com/p/6387837a90a6).

[Canonical link](https://medium.com/@devjaime/mi-proceso-de-pensamiento-de-desarrollo-para-desarrollo-frontend-con-frontendmentor-io-6387837a90a6)

Exported from [Medium](https://medium.com) on March 15, 2025.