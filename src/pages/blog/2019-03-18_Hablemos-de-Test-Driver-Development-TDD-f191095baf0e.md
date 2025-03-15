---
layout: "../../layouts/BlogLayout.astro"
title: "Hablemos de Test Driver Development TDD "
description: ""
tags: ["code", "TDD"]
time: 4
featured: true
timestamp: "2019-03-18T12:20:31-0300"
filename: "2019-03-18_Hablemos-de-Test-Driver-Development-TDD-f191095baf0e"
---

Hablemos de Test Driver Development TDD \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Hablemos de Test Driver Development TDD
=======================================

Este artículo explica qué es el desarrollo basado en pruebas y por qué es importante, es decir, incluye escenarios del mundo real. También…

* * *

### Hablemos de Test Driver Development TDD

Este artículo explica qué es el desarrollo basado en pruebas y por qué es importante, es decir, incluye escenarios del mundo real. También explica el ciclo de vida de TDD.

Hoy, estoy aquí para hablar sobre qué es el desarrollo basado en pruebas y por qué es importante junto con los conceptos relacionados.

Empecemos por hacer algunas preguntas para entender los conceptos.

**¿Qué es el desarrollo basado en pruebas?**

*   Desarrollo o práctica de programación que agrega la confiabilidad al comportamiento de la aplicación.
*   La mentalidad y el enfoque hacia el desarrollo de software que obliga a escribir Pruebas unitarias antes / junto con la codificación de la funcionalidad.
*   Hace cumplir un diseño basado en interfaz para soportar acoplamiento y modularidad.
*   Hace cumplir un check list que se realiza mediante nuestro código; ¿Qué pretendíamos?

**¿Por qué es importante el desarrollo guiado por pruebas?**

*   Muchos proyectos fallan porque carecen de una buena metodología de prueba.
*   Ayuda a los desarrolladores para generar un mejor diseño y confianza en términos de calidad, al verificar y ver el éxito de la ejecución de los casos de prueba. También ayuda a evitar la ruptura en en distintas integraciones o piezas de códigos, dependiente debido a cualquier cambio reciente.
*   Ayuda a los evaluadores al ahorrar su tiempo en el registro de problemas obvios y la re validación, para que puedan centrarse en los escenarios de prueba complejos.
*   Ayuda a los gerentes de proyectos a optimizar el presupuesto general al reducir los ciclos de prueba y reducir los problemas en UAT y producción.
*   Ayuda al cliente con una mejor experiencia general y un menor costo de mantenimiento más adelante.
*   Ayuda a la compañía a conseguir negocios repetidos como resultado de la satisfacción del cliente.
*   Aparece la práctica natural pero en realidad, no es tan común.

**Casos de pruebas unitarias**

Los casos de prueba de unidad se codifican para probar aspectos específicos de una funcionalidad. Se crean para probar escenarios positivos, negativos y de excepción. Son independientes con otras pruebas en términos de escenario y orden de ejecución.

**Escenario del mundo real**

TDD es fundamental, especialmente si el equipo de trabajo está en varios módulos integrados y hay una dependencia de un módulo en otro.

La imagen que se muestra a continuación describe por qué TDD es importante cuando cualquier desarrollador elimina el código y luego se da cuenta de que rompió algo más. En este caso, si tenemos TDD, después de cualquier cambio y compilación, se examinarán los casos de prueba para asegurarnos de que no se rompa nada.

![](https://cdn-images-1.medium.com/max/800/0*OeCixVXiQve35NoC.jpg)

Fuente: Internet

Las imágenes que se muestran a continuación ilustran cómo la detección temprana de los problemas es importante en lo que respecta al costo para solucionar los problemas en etapas posteriores.

![](https://cdn-images-1.medium.com/max/800/0*voW5rBVio-VgvMDU.jpg)

Fuente: Internet

Ahora, hablemos de por qué, si TDD es tan grandioso e increíble, no todos lo estamos usando. Algunas posibles razones se dan a continuación.

*   No incluye esfuerzos de casos de prueba unitaria en una estimación.
*   No hay experiencia de TDD en el Equipo de Desarrollo.
*   Plazos ajustados.
*   “Hacer que funcione” anula el aspecto de calidad.
*   El cliente no está preguntando sobre la cobertura del código de prueba, etc.

**Ciclo de vida de TDD**

Las imágenes que se muestran a continuación muestran el ciclo de vida; TDD pasa por. Por lo general, comienza con la escritura de casos de prueba negativos, luego continúa refinando y refactorizando el código hasta que pasa.

![](https://cdn-images-1.medium.com/max/800/0*OcuNnysE_XZwCMBQ.jpg)

**Marcos de prueba unitaria**

Hay varios marcos disponibles, sin embargo los siguientes son populares.

*   Prueba de MS (Microsoft.VisualStudio.TestTools.UnitTesting)
*   Nunit (Puede ser descargado desde NuGet)
*   Xunit (Se puede descargar desde NuGet)

**Mocking(Simulador)**

Un Mocking es un método para crear un objeto ficticio de cualquier objeto concreto. En ocasiones, cuando probamos cualquier método en particular y tiene un conjunto de dependencias, creamos un objeto ficticio o simulado para imitar el objeto real o la dependencia.

**Cobertura de código**

Cobertura de código es el término utilizado para presentar el porcentaje de bloques de código cubiertos como parte de los casos de prueba unitaria. En general, tener una cobertura de código de más del 80% se considera una buena cobertura; sin embargo, en algunos casos, incluso una cobertura del 70% se considera buena, especialmente cuando hay muchos componentes de IU involucrados.

**Soporte de Visual Studio para el desarrollo de Test Driven**

Visual Studio proporciona excelentes herramientas y soporte para el desarrollo guiado por pruebas. A continuación se presentan algunas de las opciones disponibles en Visual Studio para el mismo.

*   _Test Explorer_
*   Test Explorer es una ventanilla única para ejecutar casos de prueba unitaria y analizar los fallos. Podemos ejecutar los casos de prueba uno por uno o como un grupo.

![](https://cdn-images-1.medium.com/max/800/0*8fvZGPbI4Xwy2tHj.jpg)

*   **Cobertura de código**

Hay dos formas disponibles para extraer las coberturas de código en Visual Studio de la siguiente manera:

*   Menú de prueba -> Analizar cobertura de código -> Pruebas seleccionadas / Todas las pruebas
*   Haga clic con el botón derecho en Prueba desde el Explorador de pruebas / o A cualquier grupo -> Analizar cobertura de código para prueba seleccionada

![](https://cdn-images-1.medium.com/max/800/0*0qy7iwGKVycwzmbT.png)

Podemos habilitar la opción “Mostrar coloración de cobertura de código” en la ventana de diálogo “Resultados de cobertura de código”. Estos son los indicadores junto con su código de colores para ayudar a los desarrolladores a comprender la cobertura del código en los respectivos bloques de código.

*   cubierto (azul claro)
*   parcialmente cubierto (naranja claro)
*   no cubierto (rojo claro)

Por ejemplo, la siguiente captura de pantalla representa los bloques de código cubiertos.

![](https://cdn-images-1.medium.com/max/800/0*olDb_O_ZVkzZfyWj.jpg)

También podemos habilitar la opción para ejecutar pruebas unitarias después de cada compilación exitosa en Visual Studio de la siguiente manera.

Test Menu–> Test Settings y seleccione “Run Tests After Build”

**Desarrollo guiado por pruebas usando Visual Studio**

Hay varias formas de trabajar con TDD en Visual Studio, de la siguiente manera.

*   _Crear tanto los casos de prueba de unidad como la lógica manualmente._  
    Esta opción incluye la inclusión del espacio de nombres Microsoft.VisualStudio.TestTools.UnitTesting y la decoración de la clase como \[TestClass\] y el método como \[TestMethod\].

Tomemos ejemplos de dos métodos e intentemos crear pruebas unitarias para ellos.

A continuación se muestran las pruebas unitarias creadas manualmente para los métodos anteriores.

*   Creación de prototipos de casos de prueba mediante herramientas y lógica de forma manual.

Esta opción se introdujo en Visual Studio 2015 y la veremos en detalle en la siguiente parte.

*   _Creando casos de prueba unitaria y lógica mediante herramientas._

**Creación de prototipos de casos de prueba mediante herramientas y lógica de forma manual.**

En este enfoque, la herramienta genera el prototipo y el desarrollador necesita inyectar la lógica para probar el método. A continuación se presentan los pasos para el mismo.

Por ejemplo, tienes una clase como la siguiente.

haga clic con el botón derecho en la clase llamada “Cuenta” y seleccione “Crear pruebas unitarias” (la clase debe ser pública).

![](https://cdn-images-1.medium.com/max/800/0*S9ExueMTJTWNcL8H.jpg)

Creará métodos de prueba y pondrá el código ficticio con la opción seleccionada en “Código para el método de prueba” en la captura de pantalla del paso anterior. Desde que seleccionamos “Assert Failure”, se ha puesto lo mismo en el cuerpo del método como sigue.

Como puede ver, esta opción ha creado el prototipo de todos los métodos públicos, y ahora, el desarrollador puede usar la lógica para probar los bloques de código respectivos.

**Creando casos de prueba unitaria y lógica mediante herramientas.**

Este es el enfoque de generación de casos de prueba totalmente o casi automatizado en el que las herramientas generan tanto el prototipo como la lógica. Utiliza el framework Pex para la generación de casos de prueba. Hay dos formas en que se puede utilizar. Tenga en cuenta que esta opción solo está disponible en Visual Studio 2015/2017 Enterprise Edition.

**Crear IntelliTest**

Esto guarda todos los casos de prueba generados en los archivos y luego puede ejecutarlos más tarde.

![](https://cdn-images-1.medium.com/max/800/0*al1pGOC2TTe3d78n.jpg)

Todavía se requiere un poco de esfuerzo manual para afirmar los métodos generados. A continuación se muestra la clase de prueba y los métodos generados por esta opción.

**Ejecutar IntelliTest** :

Este es el enfoque totalmente automatizado de generación de casos de prueba y le permitirá ejecutar los casos de prueba primero. A continuación, puede seleccionar las adecuadas para guardar. Al guardar, los nuevos archivos se crean para cada método público y propiedades con el patrón de ClassName.TestMethodName.g.cs. La siguiente pantalla corta muestra lo mismo.

![](https://cdn-images-1.medium.com/max/800/0*y9kaUHiYtApcnll4.jpg)

En esta opción, los casos de prueba son de naturaleza completa con toda la declaración de Assert, etc. A continuación, se muestran todos los casos de prueba generados para uno de los métodos (es decir, Depósito).

**Conclusión**

En este artículo, hemos analizado los enfoques de creación de pruebas unitarias basados ​​en herramientas. Hemos comenzado con la opción “Crear pruebas unitarias” que crea un prototipo de caso de prueba. También hemos visto cómo utilizar la opción IntelliTest (Crear / Ejecutar) para generar casos de prueba automáticamente.

En el mundo real, puede usar casos de prueba tanto manuales como automáticos en conjunto para tener una buena cobertura de código de prueba de unidad.

By [Jaime Hernández](https://medium.com/@devjaime) on [March 18, 2019](https://medium.com/p/f191095baf0e).

[Canonical link](https://medium.com/@devjaime/hablemos-de-test-driver-development-tdd-f191095baf0e)

Exported from [Medium](https://medium.com) on March 15, 2025.