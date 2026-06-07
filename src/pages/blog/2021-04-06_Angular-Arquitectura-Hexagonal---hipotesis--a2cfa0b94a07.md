---
filename: "Angular-Arquitectura-Hexagonal_hipotesis"
layout: '../../layouts/BlogLayout.astro'

timestamp: '2021-04-06T08:00:00-0300'
title: 'Angular Arquitectura Hexagonal Hipotesis '
description: 'Angular Arquitectura Hexagonal: {hipotesis}'
publishDate: '2021-04-06T08:00:00-0300'
author:
name: 'Jaime Hernandez'
url: 'https://devjaime.cl'
tags:
  - "Blog"
category: 'Blog'
draft: false
time: 15
featured: false
---


Angular Arquitectura Hexagonal: {hipotesis}
===========================================

Llevo aproximadamente un mes pensando como podría organizar una aplicación Angular que ha tenido un crecimiento acelerado, buscando…

* * *

### Angular Arquitectura Hexagonal: {hipotesis}

![](https://cdn-images-1.medium.com/max/800/0*HfAODU-S9wFn0Ws1.jpg)

Llevo aproximadamente un mes pensando como podría organizar una aplicación Angular que ha tenido un crecimiento acelerado, buscando técnicas para manejar de mejor forma el estado, como implementar algún patrón como Redux, y solucionar la arquitectura de esta para que pueda escalar fácilmente.

Si estás familiarizado con el Framework Angular, entonces sabrás que desde las primeras versiones (Angular 2), el framework y su CLI ayuda bastante en la organización del código fuente. Esto fue mejorando cada vez más a medida que avanzaban las versiones. Entonces, ¿por qué diablos debería preocuparse por utilizar un patrón de arquitectura aplicaciones web?¯\\\_( ͡❛ ͜ʖ ͡❛)\_/¯ Primero explicare de que se tratan todos los rumores sobre arquitectura limpia (Clean Code).

### ¿Qué es la arquitectura limpia?

En resumen: Clean Architecture es un patrón para estructurar la arquitectura de una aplicación en general. Fue introducido originalmente por Robert C Martin, también conocido como el tío Bob, quien también publicó muchos artículos y libros sobre cómo escribir código limpio y reutilizable. Su libro, Arquitectura limpia, resume sus pensamientos y sugerencias sobre cómo mejorar la estructura de su aplicación en un nivel superior al código limpio.

El investigó sobre el diseño de arquitectura en común y descubrió que los principios de arquitectura más populares (por ejemplo, solo por nombrar algunos: Arquitectura hexagonal, Arquitectura de capas) tienen un objetivo principal: construir algún tipo de capas de aplicación y crear una separación de responsabilidades. También vio que cada arquitectura intenta al menos separar la lógica empresarial del resto de la aplicación y que estas arquitecturas producen sistemas que son:

1.  **Independiente de los framework:** tu aplicación no debe ser impulsada por el framework que utiliza.
2.  **Comprobable:** tu aplicación y la lógica empresarial deben poder comprobarse sin depender de la interfaz de usuario, la base de datos o la API web.(en lo personal sufro constantemente del fuerte acoplamiento en aplicaciones¯\\\_( ͡👁️ ͜ʖ ͡👁️)\_/¯)
3.  **Independiente de la interfaz de usuario: la interfaz de usuario de** sus aplicaciones debe controlar la lógica de su negocio, pero no debe controlar cómo se estructura el flujo de datos.
4.  **Independiente de la base de datos:** su aplicación no debe estar diseñada por el tipo de base de datos que está utilizando. A tu lógica empresarial no le importa si sus entidades de datos se almacenan en un almacén de documentos, una base de datos relacional o en la memoria.
5.  **Independiente de cualquier agente externo:** tus reglas de negocio solo deben preocuparse por su propia tarea y no por cualquier otra cosa que posiblemente viva en su aplicación.

Entonces, ¿qué significa esto para nuestro desarrollo de aplicaciones web con Angular? Intentemos aplicar estos puntos a nuestro framework Angular:

1.  **Independiente de los framework:** nuestra lógica y reglas de negocio no deberían verse afectadas por ninguna funcionalidad o estructura del framework angular. Esto logra más flexibilidad al actualizar a nuevas versiones (que pueden introducir una nueva “arquitectura” / estructura de proyecto) o cambiar a un framework completamente diferente, porque no tenemos que depender de ningún elemento específico del framework. Y también se dirige al siguiente punto: ¡Testeabilidad!
2.  **Comprobable:** Considerado **_ingenuamente_**, solo tenemos que probar nuestra lógica y reglas de negocio, lo que hace que las pruebas sean mucho más fáciles. Entonces, para probar la funcionalidad principal de nuestra aplicación, no se necesitan pruebas unitarias de Angular con Karma o Jest (en teoría).
3.  **Independiente de la interfaz de usuario:** las reglas de negocio no se preocupan por cómo se activan o controlan. Por lo tanto, no se debe colocar ninguna lógica comercial dentro de ningún controlador de interfaz de usuario.
4.  **Independiente de la base de datos:** en general, a las aplicaciones web no les importa mucho el uso de bases de datos, porque en su mayoría se alimentan a través de API. Pero al observar el patrón de los repositorios, la mayoría de las aplicaciones realizan algún tipo de operaciones CRUD en algún momento. Estos también se pueden resumir en repositorios. Más adelante en este artículo, verás cómo los repositorios y las API se integran perfectamente.
5.  **Independiente de cualquier agente externo:** como ya se mencionó, nuestra lógica de aplicación central no debería depender de la funcionalidad del framework Angular.

* * *

### Estructurar el proyecto — en teoría

Si ya has leído sobre la creación de aplicaciones con el patrón Arquitectura limpia, definitivamente debería haber visto el siguiente diagrama que explica la estructura general.

![](https://cdn-images-1.medium.com/max/800/0*iOuclFm8Yyu7CkYX.jpeg)

Diagrama clásico de arquitectura limpia

Solo para resumir los conceptos básicos, el espíritu de la arquitectura limpia se basa en la construcción de capas de aplicación que dan forma, como ya se mencionó, una separación de preocupaciones. Además, existen algunas reglas sobre cómo estas capas deben interactuar entre sí:

1.  **Entidades centrales**: Estos son modelos de datos simples que son esencialmente necesarios para representar nuestra lógica central, construir un flujo de datos y hacer que nuestra reglas de negocios funcione.
2.  **Casos de uso**: se basan en las entidades principales e implementan toda la lógica de negocio de la aplicación. Los casos de uso deben **“vivir en su propio mundo”** y solo hacer lo que se supone que deben hacer.
3.  **Regla de dependencia**: cada capa solo debe tener acceso a la capa inferior. Por lo tanto, la capa de casos de uso solo debe usar entidades que están especificadas en la capa de entidades, y el controlador solo debe usar casos de uso de la capa de casos de uso a continuación. Comprenderas mejor cómo funciona esto cuando eche un vistazo al artículo práctico.
4.  **Adaptadores de interfaz**: para obtener una arquitectura funcional más allá del borde de cada capa, la mejor manera es trabajar con adaptadores de interfaz desde el núcleo (capa de entidad y caso de uso) para garantizar una estructura homogénea en todos los proyectos, que encaja como un rompecabezas en el final.

* * *

### Estructurar el proyecto — en la práctica

> Debido a que el diagrama de Arquitectura limpia y las reglas son muy generales, intentemos desglosarlo y ponerlo más en nuestro contexto de desarrollo web. Al principio, me gusta aclarar que la Arquitectura Limpia es un patrón general que se supone que funciona en diferentes plataformas y va desde el backend al móvil hasta las aplicaciones web. Eso significa que no existe la mejor manera de implementarlo. El enfoque mostrado en esta serie de artículos se inspiró principalmente en un artículo sobre **Speakerdeck de Marko Milos**.

La mejor manera de mapear el principio de capa en un proyecto y estructura de código es mediante el uso de algún tipo de paquetes y agrupar todas las clases e interfaces relacionadas con la capa. Recuerda, solo las capas superiores pueden acceder a las capas inferiores, no al revés. Para garantizar la interoperabilidad entre las capas, también es una buena idea especificar interfaces (por ejemplo, repositorios) en una capa muy baja.

La mayoría de las aplicaciones web son algún tipo de aplicaciones CRUD, por lo que nos centraremos en los repositorios / API CRUD en esta serie. Así que supongamos que tenemos las siguientes capas de paquetes:

1.  **Núcleo:** el paquete central agrega entidades centrales, casos de uso y definiciones de interfaz, porque están estrechamente vinculadas. Los casos de uso acceden a las entidades directamente y también tienen que trabajar con interfaces dentro de la lógica de negocio, como guardar datos en repositorios. Dado que nuestro paquete principal, de acuerdo con la regla de dependencia, no debe tener ningún conocimiento sobre la lógica del repositorio real, pero debe saber cómo llamar a una interacción con un repositorio, debe representarse como una interfaz independiente.
2.  **Datos:** esta capa se ocupa de implementar las interfaces de datos reales y vincula la lógica de ahorro de datos específica del marco (por ejemplo, guardar datos en un almacenamiento local o enviarlos a una API) a un adaptador interactiva para nuestro caso de uso especificado en la capa subyacente.
3.  **Presentación:** La capa de presentación contiene la estructura angular clásica con componentes y vistas como ya los conoce. Cada componente ahora puede hacer uso de los casos de uso previamente definidos para llenar los componentes con lógica empresarial.
4.  **Configuración:** en contextos no angulares, podríamos hacer uso de una capa de configuración, que proporciona una abstracción de la inyección de dependencias y otros elementos configurables. Pero como queremos simplificar las cosas en esta introducción, usaremos directamente módulos Angular para estructurar nuestra aplicación y manejar la inyección de dependencias.

![](https://cdn-images-1.medium.com/max/800/0*DdowTcRcnZ3GBK6a.png)

Distribución de clases y entidades en tres capas.

### Mapeadores y objetos de datos específicos de la capa

Hasta ahora todo va bien, ahora sabemos cómo se puede estructurar nuestro proyecto. Una última cosa a mencionar es la importancia de los objetos de datos en toda la arquitectura: dado que nuestro paquete principal abstrae la lógica empresarial a través de casos de uso y entidades, cada capa de aplicación tiene que manejarlos. Pero los objetos de datos en la capa de datos o presentación no son en su mayoría los mismos que se utilizan en la lógica de negocio. Esto se debe a que las API a menudo brindan más información, los repositorios de datos necesitan alguna funcionalidad de mapeo para miembros de objetos o los objetos de datos de presentación necesitan algunos campos más para mostrar los datos según sea necesario. Para hacer frente a esto, se recomienda encarecidamente hacer uso de objetos de datos específicos de la capa y mapearlos desde y hacia las entidades centrales al transferir datos de casos de uso a repositorios o capas de presentación.

![](https://cdn-images-1.medium.com/max/800/0*XgPryww6mUFUFiXp)

![](https://cdn-images-1.medium.com/max/800/0*x0xPdToPBaWqtC6P.png)

Proceso de mapeo al guardar y leer una entidad de la capa de presentación en una base de datos o API.

Después de haber visto en teoría cómo se puede estructurar un proyecto de aplicación web según la Arquitectura Limpia, veamos cómo podemos implementar este patrón en la práctica. Revisaremos todas las capas y veremos qué se implementa allí. Espero que hayas disfrutado de mi pequeña introducción al mundo de la Arquitectura Limpia y que te ayude al menos con el último punto en contra: ¡Minimiza la curva de aprendizaje! 😊 En un proximo articulo veremos un pequeño proyecto con esta implementación (tal vez sea un video)

[**Donate to devjaime**  
_Help support devjaime by donating or sharing with your friends._www.paypal.com](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S "https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S")[](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S)

By [Jaime Hernández](https://medium.com/@devjaime) on [April 6, 2021](https://medium.com/p/a2cfa0b94a07).

[Canonical link](https://medium.com/@devjaime/angular-arquitectura-hexagonal-hipotesis-a2cfa0b94a07)

Exported from [Medium](https://medium.com) on March 15, 2025.