---
layout: "../../layouts/BlogLayout.astro"
title: "MicroFrontEnd"
description: ""
tags: ["code", "microfrontend"]
time: 4
featured: true
timestamp: "2019-09-06T12:20:31-0300"
filename: "2019-09-06_MicroFrontEnd-4eecf1498cd1"
---

MicroFrontEnd
=============

Micro frontends

* * *

### MicroFrontEnd

### Micro frontends

_El buen desarrollo frontend es difícil. Escalar el desarrollo de la interfaz para que muchos equipos puedan trabajar simultáneamente en un producto grande y complejo es aún más difícil. En este artículo describiremos una tendencia reciente de dividir los monolitos frontend en muchas piezas más pequeñas y manejables, y cómo esta arquitectura puede aumentar la efectividad y la eficiencia de los equipos que trabajan en el código frontend. Además de hablar sobre los diversos beneficios y costos, cubriremos algunas de las opciones de implementación disponibles, y profundizaremos en una aplicación de ejemplo completa que demuestra la técnica._

06–09–2019

*   [Beneficios](https://martinfowler.com/articles/micro-frontends.html#Benefits)
*   [Mejoras incrementales](https://martinfowler.com/articles/micro-frontends.html#IncrementalUpgrades)
*   [Bases de código simples y desacopladas](https://martinfowler.com/articles/micro-frontends.html#SimpleDecoupledCodebases)
*   [Despliegue independiente](https://martinfowler.com/articles/micro-frontends.html#IndependentDeployment)
*   [Equipos autónomos](https://martinfowler.com/articles/micro-frontends.html#AutonomousTeams)
*   [En una palabra](https://martinfowler.com/articles/micro-frontends.html#InANutshell)
*   [El ejemplo](https://martinfowler.com/articles/micro-frontends.html#TheExample)
*   [Enfoques de integración](https://martinfowler.com/articles/micro-frontends.html#IntegrationApproaches)
*   [Composición de plantilla del lado del servidor](https://martinfowler.com/articles/micro-frontends.html#Server-sideTemplateComposition)
*   [Integración en tiempo de construcción](https://martinfowler.com/articles/micro-frontends.html#Build-timeIntegration)
*   [Integración en tiempo de ejecución a través de iframes](https://martinfowler.com/articles/micro-frontends.html#Run-timeIntegrationViaIframes)
*   [Integración en tiempo de ejecución a través de JavaScript](https://martinfowler.com/articles/micro-frontends.html#Run-timeIntegrationViaJavascript)
*   [Integración en tiempo de ejecución a través de componentes web](https://martinfowler.com/articles/micro-frontends.html#Run-timeIntegrationViaWebComponents)
*   [Estilo](https://martinfowler.com/articles/micro-frontends.html#Styling)
*   [Bibliotecas de componentes compartidos](https://martinfowler.com/articles/micro-frontends.html#SharedComponentLibraries)
*   [Comunicación entre aplicaciones](https://martinfowler.com/articles/micro-frontends.html#Cross-applicationCommunication)
*   [Comunicación de backend](https://martinfowler.com/articles/micro-frontends.html#BackendCommunication)
*   [Pruebas](https://martinfowler.com/articles/micro-frontends.html#Testing)
*   [El ejemplo en detalle](https://martinfowler.com/articles/micro-frontends.html#TheExampleInDetail)
*   [El contenedor](https://martinfowler.com/articles/micro-frontends.html#TheContainer)
*   [Las micro frontends](https://martinfowler.com/articles/micro-frontends.html#TheMicroFrontends)
*   [Comunicación entre aplicaciones a través del enrutamiento](https://martinfowler.com/articles/micro-frontends.html#Cross-applicationCommunicationViaRouting)
*   [Contenido común](https://martinfowler.com/articles/micro-frontends.html#CommonContent)
*   [Infraestructura](https://martinfowler.com/articles/micro-frontends.html#Infrastructure)
*   [Desventajas](https://martinfowler.com/articles/micro-frontends.html#Downsides)
*   [Tamaño de la carga útil](https://martinfowler.com/articles/micro-frontends.html#PayloadSize)
*   [Diferencias ambientales](https://martinfowler.com/articles/micro-frontends.html#EnvironmentDifferences)
*   [Complejidad operacional y de gobierno](https://martinfowler.com/articles/micro-frontends.html#OperationalAndGovernanceComplexity)
*   [Conclusión](https://martinfowler.com/articles/micro-frontends.html#Conclusion)

En los últimos años, los [microservicios](https://martinfowler.com/articles/microservices.html) han explotado en popularidad, con muchas organizaciones que utilizan este estilo arquitectónico para evitar las limitaciones de los grandes servidores monolíticos. Si bien se ha escrito mucho sobre este estilo de creación de software del lado del servidor, muchas compañías continúan luchando con bases de código frontend monolíticas.

Quizás desee crear una aplicación web progresiva o receptiva, pero no puede encontrar un lugar fácil para comenzar a integrar estas características en el código existente. Quizás desee comenzar a utilizar nuevas funciones de lenguaje JavaScript (o uno de los innumerables lenguajes que pueden compilarse en JavaScript), pero no puede ajustar las herramientas de compilación necesarias en su proceso de compilación existente. O tal vez solo desee escalar su desarrollo para que varios equipos puedan trabajar en un solo producto simultáneamente, pero el acoplamiento y la complejidad en el monolito existente significa que todos pisan los pies del otro. Todos estos son problemas reales que pueden afectar negativamente su capacidad de ofrecer eficientemente experiencias de alta calidad a sus clientes.

Últimamente estamos viendo cada vez más atención a la arquitectura general y las estructuras organizativas que son necesarias para el desarrollo web complejo y moderno. En particular, estamos viendo surgir patrones para descomponer los monolitos frontend en trozos más pequeños y simples que pueden desarrollarse, probarse e implementarse de forma independiente, al tiempo que aparecen para los clientes como un solo producto cohesivo. Llamamos a esta técnica **micro frontends** , que definimos como:

> “Un estilo arquitectónico donde las aplicaciones frontend entregables independientemente se componen en un todo mayor”

En la edición de noviembre de 2016 del radar de tecnología ThoughtWorks, enumeramos [micro frontends](https://www.thoughtworks.com/radar/techniques/micro-frontends) como una técnica que las organizaciones deberían evaluar. Más tarde lo promocionamos a Prueba y finalmente a Adoptar, lo que significa que lo vemos como un enfoque comprobado que debe usar cuando tenga sentido hacerlo.

![](https://cdn-images-1.medium.com/max/800/0*Y5sjZdRbZAp-eiie.png)

Figura 1: Micro frontends ha aparecido en el radar tecnológico varias veces.

Algunos de los beneficios clave que hemos visto de micro frontends son:

*   bases de código más pequeñas, más coherentes y mantenibles
*   organizaciones más escalables con equipos autónomos y desacoplados
*   la capacidad de actualizar, actualizar o incluso reescribir partes de la interfaz de una manera más incremental de lo que era posible anteriormente

No es casualidad que estas ventajas principales sean algunas de las mismas que pueden proporcionar los microservicios.

Por supuesto, no hay almuerzos gratis cuando se trata de arquitectura de software, todo tiene un costo. Algunas implementaciones de micro frontend pueden conducir a la duplicación de dependencias, aumentando la cantidad de bytes que nuestros usuarios deben descargar. Además, el aumento dramático en la autonomía del equipo puede causar fragmentación en la forma en que trabajan sus equipos. No obstante, creo que estos riesgos se pueden gestionar y que los beneficios de la arquitectura microfrontend a menudo superan los costos.

### Beneficios

En lugar de definir micro frontends en términos de enfoques técnicos específicos o detalles de implementación, en su lugar ponemos énfasis en los atributos que surgen y los beneficios que brindan.

### Mejoras incrementales

Para muchas organizaciones, este es el comienzo de su viaje de micro frontends. El viejo monolito frontend grande está siendo retenido por la pila de tecnología de antaño, o por un código escrito bajo presión de entrega, y está llegando al punto en que una reescritura total es tentadora. Para evitar los [peligros](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/) de una reescritura completa, preferiríamos [estrangular](https://martinfowler.com/bliki/StranglerApplication.html) la vieja aplicación pieza por pieza y, mientras tanto, continuar entregando nuevas características a nuestros clientes sin ser agobiados por el monolito.

Esto a menudo conduce a una arquitectura de micro frontends. Una vez que un equipo ha tenido la experiencia de obtener una característica hasta la producción con pocas modificaciones al viejo mundo, otros equipos también querrán unirse al nuevo mundo. El código existente aún necesita ser mantenido, y en algunos casos puede tener sentido continuar agregando nuevas características, pero ahora la opción está disponible.

El final del juego aquí es que tenemos más libertad para tomar decisiones caso por caso sobre partes individuales de nuestro producto, y para realizar actualizaciones incrementales a nuestra arquitectura, nuestras dependencias y nuestra experiencia de usuario. Si hay un cambio importante en nuestro marco principal, cada micro interfaz puede actualizarse siempre que tenga sentido, en lugar de verse obligado a detener el mundo y actualizar todo de una vez. Si queremos experimentar con nueva tecnología, o nuevos modos de interacción, podemos hacerlo de una manera más aislada que antes.

### Bases de código simples y desacopladas

El código fuente para cada micro frontend individual será, por definición, mucho más pequeño que el código fuente de un único frontend monolítico. Estas bases de código más pequeñas tienden a ser más simples y fáciles de trabajar para los desarrolladores. En particular, evitamos la complejidad que surge del acoplamiento involuntario e inapropiado entre componentes que no deberían conocerse entre sí. Al dibujar líneas más gruesas alrededor de los [contextos delimitados](https://martinfowler.com/bliki/BoundedContext.html) de la aplicación, hacemos que sea más difícil que surja un acoplamiento accidental.

Por supuesto, una sola decisión arquitectónica de alto nivel (es decir, “hagamos micro frontends”) no es un sustituto de un buen código limpio a la antigua. No estamos tratando de eximirnos de pensar en nuestro código y poner esfuerzo en su calidad. En cambio, estamos tratando de prepararnos para caer en el [pozo del éxito](https://blog.codinghorror.com/falling-into-the-pit-of-success/) haciendo que las malas decisiones sean difíciles y las buenas sean fáciles. Por ejemplo, compartir modelos de dominio en contextos limitados se vuelve más difícil, por lo que es menos probable que los desarrolladores lo hagan. Del mismo modo, las micro frontends lo empujan a ser explícito y deliberado sobre cómo fluyen los datos y los eventos entre diferentes partes de la aplicación, ¡lo cual es algo que deberíamos haber hecho de todos modos!

### Despliegue independiente

Al igual que con los microservicios, la implementación independiente de micro frontends es clave. Esto reduce el alcance de cualquier implementación dada, lo que a su vez reduce el riesgo asociado. Independientemente de cómo o dónde esté alojado su código de interfaz de usuario, cada interfaz de usuario debe tener su propia canalización de entrega continua, que la construye, prueba y despliega hasta la producción. Deberíamos poder implementar cada micro frontend con muy poca atención al estado actual de otras bases de código o tuberías. No debería importar si el antiguo monolito está en un ciclo de lanzamiento trimestral fijo, manual, o si el equipo de al lado ha introducido una característica a medio terminar o rota en su rama maestra. Si un micro frontend determinado está listo para ir a producción, debería poder hacerlo,

![](https://cdn-images-1.medium.com/max/800/0*WUA1jMC7nxlDarg6.png)

Figura 2: cada micro frontend se implementa en producción de forma independiente

### Equipos autónomos

Como un beneficio de orden superior de desacoplar nuestras bases de código y nuestros ciclos de lanzamiento, conseguimos un largo camino para tener equipos totalmente independientes, que pueden poseer una sección de un producto desde la ideación hasta la producción y más allá. Los equipos pueden tener la propiedad total de todo lo que necesitan para entregar valor a los clientes, lo que les permite moverse de manera rápida y efectiva. Para que esto funcione, nuestros equipos deben formarse en torno a sectores verticales de funcionalidad empresarial, en lugar de entorno a capacidades técnicas. Una manera fácil de hacer esto es dividir el producto en función de lo que verán los usuarios finales, de modo que cada micro frontend encapsule una sola página de la aplicación y sea propiedad de un extremo a otro por un solo equipo. Esto trae una mayor cohesión de los equipos ‘

![](https://cdn-images-1.medium.com/max/800/0*oVWvfAbgLxTHPqaU.png)

Figura 3: cada aplicación debe ser propiedad de un solo equipo

### En una palabra

En resumen, las micro frontends tienen que ver con dividir cosas grandes y aterradoras en piezas más pequeñas y manejables, y luego ser explícitas sobre las dependencias entre ellas. Nuestras opciones de tecnología, nuestras bases de código, nuestros equipos y nuestros procesos de lanzamiento deberían poder operar y evolucionar independientemente uno del otro, sin excesiva coordinación.

### El ejemplo

Imagine un sitio web donde los clientes pueden pedir comida para la entrega. En la superficie es un concepto bastante simple, pero hay una sorprendente cantidad de detalles si quieres hacerlo bien:

*   Debe haber una página de destino donde los clientes puedan navegar y buscar restaurantes. Los restaurantes deben poder buscarse y filtrarse por cualquier número de atributos, incluido el precio, la cocina o lo que un cliente ha ordenado previamente
*   Cada restaurante necesita su propia página que muestra los elementos de su menú y le permite al cliente elegir lo que quiere comer, con descuentos, ofertas de comidas y solicitudes especiales.
*   Los clientes deben tener una página de perfil donde puedan ver su historial de pedidos, realizar un seguimiento de la entrega y personalizar sus opciones de pago

![](https://cdn-images-1.medium.com/max/800/0*dPJGNYddcwfDs6AW.png)

Figura 4: Un sitio web de entrega de alimentos puede tener varias páginas razonablemente complejas

Hay suficiente complejidad en cada página que podríamos justificar fácilmente un equipo dedicado para cada uno, y cada uno de esos equipos debería poder trabajar en su página independientemente de todos los demás equipos. Deben ser capaces de desarrollar, probar, implementar y mantener su código sin preocuparse por conflictos o coordinación con otros equipos. Sin embargo, nuestros clientes aún deberían ver un sitio web único y sin interrupciones.

En el resto de este artículo, utilizaremos esta aplicación de ejemplo siempre que necesitemos códigos o escenarios de ejemplo.

### Enfoques de integración

Dada la definición bastante floja anterior, hay muchos enfoques que razonablemente podrían llamarse micro frontends. En esta sección mostraremos algunos ejemplos y discutiremos sus compensaciones. Existe una arquitectura bastante natural que emerge en todos los enfoques: generalmente hay una micro interfaz para cada página en la aplicación, y hay una **aplicación de contenedor** único , que:

*   representa elementos de página comunes como encabezados y pies de página
*   aborda preocupaciones transversales como la autenticación y la navegación
*   reúne los diversos micro frontends en la página y le dice a cada micro frontend cuándo y dónde representarse

![](https://cdn-images-1.medium.com/max/800/0*16ccRzTgfhFChXu-.png)

Figura 5: generalmente puede derivar su arquitectura de la estructura visual de la página

### Composición de plantilla del lado del servidor

Comenzamos con un enfoque decididamente novedoso para el desarrollo frontend: renderizar HTML en el servidor a partir de múltiples plantillas o fragmentos. Tenemos uno `index.html`que contiene elementos de página comunes, y luego utiliza las inclusiones del lado del servidor para conectar el contenido específico de la página desde fragmentos de archivos HTML:

<html lang="en" dir="ltr">  
  <head>  
    <meta charset="utf-8">  
    <title>Feed me</title>  
  </head>  
  <body>  
    <h1>🍽 Feed me</h1>  
    _<!--# include file="$PAGE.html" -->_  
  </body>  
</html>

Servimos este archivo usando Nginx, configurando la `$PAGE` variable haciendo coincidir con la URL que se solicita:

**server** {  
    listen 8080;  
    server\_name localhost;  
  
    root /usr/share/nginx/html;  
    index index.html;  
    ssi on;  
  
    _\# Redirect / to /browse_  
    rewrite ^/$ http://localhost:8080/browse redirect;  
  
    _\# Decide which HTML fragment to insert based on the URL_  
    location /browse {  
      set $PAGE 'browse';  
    }  
    location /order {  
      set $PAGE 'order';  
    }  
    location /profile {  
      set $PAGE 'profile'  
    }  
  
    _\# All locations should render through index.html_  
    error\_page 404 /index.html;  
}

Esta es una composición bastante estándar del lado del servidor. La razón por la que podríamos llamar justificadamente a este micro frontends es que hemos dividido nuestro código de tal manera que cada pieza representa un concepto de dominio autónomo que puede ser entregado por un equipo independiente. Lo que no se muestra aquí es cómo esos diversos archivos HTML terminan en el servidor web, pero se supone que cada uno tiene su propia canalización de implementación, lo que nos permite implementar cambios en una página sin afectar ni pensar en ninguna otra página.

Para una mayor independencia, podría haber un servidor separado responsable de representar y servir a cada micro frontend, con un servidor en el frente que realiza solicitudes a los demás. Con el almacenamiento en caché cuidadoso de las respuestas, esto podría hacerse sin afectar la latencia.

![](https://cdn-images-1.medium.com/max/800/0*bcZWY3EcPe3-cXsW.png)

Figura 6: cada uno de estos servidores se puede construir e implementar de forma independiente

Este ejemplo muestra cómo las micro frontends no son necesariamente una técnica nueva y no tienen que ser complicadas. Mientras tengamos cuidado sobre cómo nuestras decisiones de diseño afectan la autonomía de nuestras bases de códigos y nuestros equipos, podemos lograr muchos de los mismos beneficios independientemente de nuestra pila tecnológica.

### Integración en tiempo de construcción

Un enfoque que a veces vemos es publicar cada micro interfaz como un paquete y hacer que la aplicación contenedor los incluya a todos como dependencias de la biblioteca. Así es como `package.json`podrían verse los contenedores para nuestra aplicación de ejemplo:

{  
  "name": "@feed-me/container",  
  "version": "1.0.0",  
  "description": "A food delivery web app",  
  "dependencies": {  
    "@feed-me/browse-restaurants": "^1.2.3",  
    "@feed-me/order-food": "^4.5.6",  
    "@feed-me/user-profile": "^7.8.9"  
  }  
}

Al principio esto parece tener sentido. Produce un único paquete Javascript desplegable, como es habitual, lo que nos permite duplicar dependencias comunes de nuestras diversas aplicaciones. Sin embargo, este enfoque significa que tenemos que volver a compilar y lanzar cada micro interfaz para lanzar un cambio en cualquier parte individual del producto. Al igual que con los microservicios, hemos visto suficiente dolor causado por un **proceso de liberación** tan **cerrado** que recomendaríamos encarecidamente este tipo de enfoque para las micro frontends.

Habiendo tomado todas las molestias de dividir nuestra aplicación en bases de código discretas que se pueden desarrollar y probar de forma independiente, no reintroduzcamos todo ese acoplamiento en la etapa de lanzamiento. Deberíamos encontrar una manera de integrar nuestras micro interfaces en tiempo de ejecución, en lugar de en tiempo de compilación.

### Integración en tiempo de ejecución a través de iframes

Uno de los enfoques más simples para componer aplicaciones en el navegador es el humilde iframe. Por su naturaleza, los iframes facilitan la creación de una página a partir de subpáginas independientes. También ofrecen un buen grado de aislamiento en términos de estilo y variables globales que no interfieren entre sí.

<html>  
  <head>  
    <title>Feed me!</title>  
  </head>  
  <body>  
    <h1>Welcome to Feed me!</h1>  
  
    <iframe id="micro-frontend-container"></iframe>  
  
    <script type="text/javascript">  
      **const** microFrontendsByRoute = {  
        '/': 'https://browse.example.com/index.html',  
        '/order-food': 'https://order.example.com/index.html',  
        '/user-profile': 'https://profile.example.com/index.html',  
      };  
  
      **const** iframe = document.getElementById('micro-frontend-container');  
      iframe.src = microFrontendsByRoute\[window.location.pathname\];  
    </script>  
  </body>  
</html>

Al igual que con el [lado](https://martinfowler.com/articles/micro-frontends.html#Server-sideTemplateComposition) del [servidor incluye la opción](https://martinfowler.com/articles/micro-frontends.html#Server-sideTemplateComposition) , crear una página con iframes no es una técnica nueva y quizás no parezca tan emocionante. Pero si volvemos a visitar los principales beneficios de las micro frontends [enumeradas anteriormente](https://martinfowler.com/articles/micro-frontends.html#Benefits) , los iframes se ajustan en su mayoría, siempre y cuando tengamos cuidado sobre cómo dividimos la aplicación y estructuramos nuestros equipos.

A menudo vemos mucha reticencia a elegir iframes. Si bien parte de esa reticencia parece estar impulsada por una sensación instintiva de que los iframes son un poco “asquerosos”, hay algunas buenas razones por las que las personas los evitan. El fácil aislamiento mencionado anteriormente tiende a hacerlos menos flexibles que otras opciones. Puede ser difícil crear integraciones entre diferentes partes de la aplicación, por lo que hacen que el enrutamiento, el historial y los enlaces profundos sean más complicados, y presentan algunos desafíos adicionales para que su página responda completamente.

### Integración en tiempo de ejecución a través de JavaScript

El siguiente enfoque que describiremos es probablemente el más flexible, y el que vemos que los equipos adoptan con mayor frecuencia. Cada micro frontend se incluye en la página usando una `<script>`etiqueta, y al cargarlo expone una función global como su punto de entrada. La aplicación contenedor luego determina qué micro frontend se debe montar y llama a la función relevante para decirle a un micro frontend cuándo y dónde renderizarse.

<html>  
  <head>  
    <title>Feed me!</title>  
  </head>  
  <body>  
    <h1>Welcome to Feed me!</h1>  
  
    _<!-- These scripts don't render anything immediately -->_  
    _<!-- Instead they attach entry-point functions to \`window\` -->_  
    <script src="https://browse.example.com/bundle.js"></script>  
    <script src="https://order.example.com/bundle.js"></script>  
    <script src="https://profile.example.com/bundle.js"></script>  
  
    <div id="micro-frontend-root"></div>  
  
    <script type="text/javascript">  
      _// These global functions are attached to window by the above scripts_  
      **const** microFrontendsByRoute = {  
        '/': window.renderBrowseRestaurants,  
        '/order-food': window.renderOrderFood,  
        '/user-profile': window.renderUserProfile,  
      };  
      **const** renderFunction = microFrontendsByRoute\[window.location.pathname\];  
  
      _// Having determined the entry-point function, we now call it,_  
      _// giving it the ID of the element where it should render itself_  
      renderFunction('micro-frontend-root');  
    </script>  
  </body>  
</html>

Lo anterior es obviamente un ejemplo primitivo, pero demuestra la técnica básica. A diferencia de la integración en tiempo de construcción, podemos implementar cada uno de los `bundle.js`archivos de forma independiente. Y a diferencia de los iframes, tenemos total flexibilidad para construir integraciones entre nuestras micro interfaces como nos guste. Podríamos extender el código anterior de muchas maneras, por ejemplo, para descargar solo cada paquete de JavaScript según sea necesario, o para pasar datos dentro y fuera cuando se procesa un micro frontend.

La flexibilidad de este enfoque, combinado con la capacidad de implementación independiente, lo convierte en nuestra opción predeterminada y la que hemos visto en la naturaleza con mayor frecuencia. Lo exploraremos con más detalle cuando entremos en el [ejemplo completo.](https://martinfowler.com/articles/micro-frontends.html#TheExampleInDetail)

### Integración en tiempo de ejecución a través de componentes web

Una variación del enfoque anterior es que cada micro frontend defina un elemento HTML personalizado para que el contenedor cree una instancia, en lugar de definir una función global para que el contenedor llame.

<html>  
  <head>  
    <title>Feed me!</title>  
  </head>  
  <body>  
    <h1>Welcome to Feed me!</h1>  
  
    _<!-- These scripts don't render anything immediately -->_  
    _<!-- Instead they each define a custom element type -->_  
    <script src="https://browse.example.com/bundle.js"></script>  
    <script src="https://order.example.com/bundle.js"></script>  
    <script src="https://profile.example.com/bundle.js"></script>  
  
    <div id="micro-frontend-root"></div>  
  
    <script type="text/javascript">  
      _// These element types are defined by the above scripts_  
      **const** webComponentsByRoute = {  
        '/': 'micro-frontend-browse-restaurants',  
        '/order-food': 'micro-frontend-order-food',  
        '/user-profile': 'micro-frontend-user-profile',  
      };  
      **const** webComponentType = webComponentsByRoute\[window.location.pathname\];  
  
      _// Having determined the right web component custom element type,_  
      _// we now create an instance of it and attach it to the document_  
      **const** root = document.getElementById('micro-frontend-root');  
      **const** webComponent = document.createElement(webComponentType);  
      root.appendChild(webComponent);  
    </script>  
  </body>  
</html>

El resultado final aquí es bastante similar al ejemplo anterior, la principal diferencia es que está optando por hacer las cosas ‘a la manera del componente web’. Si le gustan las especificaciones del componente web y le gusta la idea de usar las capacidades que proporciona el navegador, entonces esta es una buena opción. Si prefiere definir su propia interfaz entre la aplicación contenedor y las micro interfaces, entonces puede preferir el ejemplo anterior.

### Estilo

CSS como lenguaje es inherentemente global, heredando y en cascada, tradicionalmente sin sistema de módulo, espacio de nombres o encapsulación. Algunas de esas características existen ahora, pero a menudo falta el soporte del navegador. En un paisaje de micro frontends, muchos de estos problemas se exacerban. Por ejemplo, si el micro frontend de un equipo tiene una hoja de estilo que dice `h2 { color: black; }`, y otro dice `h2 { color: blue; }`, y ambos selectores están unidos a la misma página, ¡alguien se decepcionará! Este no es un problema nuevo, pero se agrava por el hecho de que estos selectores fueron escritos por diferentes equipos en diferentes momentos, y el código probablemente se divide en repositorios separados, lo que hace que sea más difícil de descubrir.

Con los años, se han inventado muchos enfoques para hacer que CSS sea más manejable. Algunos optan por utilizar una convención de nomenclatura estricta, como [BEM](http://getbem.com/) , para garantizar que los selectores solo se apliquen donde se pretende. Otros, que prefieren no depender solo de la disciplina del desarrollador, utilizan un preprocesador como [SASS](https://sass-lang.com/) , cuyo selector de anidamiento puede usarse como una forma de espacio de nombres. Un enfoque más nuevo es aplicar todos los estilos mediante programación con [módulos CSS](https://github.com/css-modules/css-modules) o una de las diversas bibliotecas [CSS-in-JS](https://mxstbr.com/thoughts/css-in-js/) , lo que garantiza que los estilos se apliquen directamente solo en los lugares que el desarrollador pretende. O para un enfoque más basado en la plataforma, [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) también ofrece aislamiento de estilo.

El enfoque que elija no importa tanto, siempre y cuando encuentre una manera de asegurarse de que los desarrolladores puedan escribir sus estilos independientemente uno del otro, y tengan la confianza de que su código se comportará de manera predecible cuando se componen juntos en una sola aplicación.

### Bibliotecas de componentes compartidos

Mencionamos anteriormente que la consistencia visual a través de micro frontends es importante, y un enfoque para esto es desarrollar una biblioteca de componentes UI compartidos y reutilizables. En general creemos que es una buena idea, aunque es difícil hacerlo bien. Los principales beneficios de crear una biblioteca de este tipo son la reducción del esfuerzo mediante la reutilización del código y la coherencia visual. Además, su biblioteca de componentes puede servir como una guía de estilo de vida y puede ser un gran punto de colaboración entre desarrolladores y diseñadores.

Una de las cosas más fáciles de equivocarse es crear muchos de estos componentes, demasiado pronto. Es tentador crear un [Framework Framework](https://martinfowler.com/bliki/FoundationFramework.html) , con todas las imágenes comunes que se necesitarán en todas las aplicaciones. Sin embargo, la experiencia nos dice que es difícil, si no imposible, adivinar cuáles deberían ser las API de los componentes antes de usarlos en el mundo real, lo que resulta en una gran rotación en la vida temprana de un componente. Por esa razón, preferimos permitir que los equipos creen sus propios componentes dentro de sus bases de código cuando los necesiten, incluso si eso ocasiona alguna duplicación inicialmente. Permita que los patrones emerjan naturalmente, y una vez que la API del componente se haya vuelto obvia, puede [cosechar](https://martinfowler.com/bliki/HarvestedFramework.html) el código duplicado en una biblioteca compartida y tenga la seguridad de que tiene algo probado.

Los candidatos más obvios para compartir son primitivas visuales “tontas”, como iconos, etiquetas y botones. También podemos compartir componentes más complejos que pueden contener una cantidad significativa de lógica de interfaz de usuario, como un campo de búsqueda desplegable de autocompletado. O una mesa clasificable, filtrable y paginada. Sin embargo, tenga cuidado de asegurarse de que sus componentes compartidos contengan solo lógica de interfaz de usuario y no lógica de negocios o dominio. Cuando la lógica de dominio se coloca en una biblioteca compartida, crea un alto grado de acoplamiento entre las aplicaciones y aumenta la dificultad del cambio. Entonces, por ejemplo, generalmente no debes tratar de compartir un`ProductTable`, que contendría todo tipo de suposiciones acerca de qué es exactamente un "producto" y cómo debe comportarse uno. Tal modelado de dominio y lógica de negocios pertenece al código de aplicación de las micro interfaces, más que a una biblioteca compartida.

Al igual que con cualquier biblioteca interna compartida, hay algunas preguntas difíciles sobre su propiedad y gobierno. Un modelo es decir que, como un activo compartido, “todos” lo poseen, aunque en la práctica esto generalmente significa que _nadie lo_ posee. Puede convertirse rápidamente en una mezcolanza de código inconsistente sin convenciones claras o visión técnica. En el otro extremo, si el desarrollo de la biblioteca compartida está completamente centralizado, habrá una gran desconexión entre las personas que crean los componentes y las personas que los consumen. Los mejores modelos que hemos visto son aquellos en los que cualquiera puede contribuir a la biblioteca, pero hay un [custodio](https://martinfowler.com/bliki/ServiceCustodian.html)(una persona o un equipo) responsable de garantizar la calidad, la coherencia y la validez de esas contribuciones. El trabajo de mantener la biblioteca compartida requiere fuertes habilidades técnicas, pero también las habilidades de las personas necesarias para cultivar la colaboración entre muchos equipos.

### Comunicación entre aplicaciones

Una de las preguntas más comunes con respecto a las micro frontends es cómo dejar que hablen entre sí. En general, recomendamos que se comuniquen lo menos posible, ya que a menudo reintroduce el tipo de acoplamiento inapropiado que estamos tratando de evitar en primer lugar.

Dicho esto, a menudo se necesita cierto nivel de comunicación entre aplicaciones. [Los eventos personalizados](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events) permiten que las micro frontends se comuniquen indirectamente, lo cual es una buena manera de minimizar el acoplamiento directo, aunque hace que sea más difícil determinar y hacer cumplir el contrato que existe entre las micro frontends. Alternativamente, el modelo React de pasar devoluciones de llamada y datos hacia abajo (en este caso hacia abajo desde la aplicación del contenedor a las micro interfaces) también es una buena solución que hace que el contrato sea más explícito. Una tercera alternativa es utilizar la barra de direcciones como mecanismo de comunicación, que exploraremos [con más detalle más adelante](https://martinfowler.com/articles/micro-frontends.html#Cross-applicationCommunicationViaRouting) .

Si está utilizando redux, el enfoque habitual es tener una tienda única, global y compartida para toda la aplicación. Sin embargo, si se supone que cada micro frontend es su propia aplicación autónoma, entonces tiene sentido que cada uno tenga su propia tienda redux. Los documentos de redux incluso mencionan [“aislar una aplicación Redux como componente en una aplicación más grande”](https://redux.js.org/faq/store-setup#can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself) como una razón válida para tener múltiples tiendas.

Cualquiera que sea el enfoque que elijamos, queremos que nuestras micro interfaces se comuniquen enviándose mensajes o eventos entre sí, y evitar tener un estado compartido. Al igual que compartir una base de datos a través de microservicios, tan pronto como compartimos nuestras estructuras de datos y modelos de dominio, creamos cantidades masivas de acoplamiento, y se hace extremadamente difícil hacer cambios.

Al igual que con el estilo, hay varios enfoques diferentes que pueden funcionar bien aquí. Lo más importante es pensar mucho sobre qué tipo de acoplamiento está introduciendo y cómo mantendrá ese contrato a lo largo del tiempo. Al igual que con la integración entre microservicios, no podrá realizar cambios importantes en sus integraciones sin tener un proceso de actualización coordinado en diferentes aplicaciones y equipos.

También debe pensar en cómo verificará automáticamente que la integración no se interrumpa. La prueba funcional es un enfoque, pero preferimos limitar la cantidad de pruebas funcionales que escribimos debido al costo de implementarlas y mantenerlas. Alternativamente, podría implementar algún tipo de [contrato impulsado por el consumidor](https://martinfowler.com/articles/consumerDrivenContracts.html) , de modo que cada micro frontend pueda especificar lo que requiere de otros micro frontends, sin necesidad de integrarlos y ejecutarlos todos juntos en un navegador.

### Comunicación de backend

Si tenemos equipos separados trabajando independientemente en aplicaciones frontend, ¿qué pasa con el desarrollo de backend? Creo firmemente en el valor de los equipos full-stack, que poseen el desarrollo de sus aplicaciones desde el código visual hasta el desarrollo de API, y el código de base de datos e infraestructura. Un patrón que ayuda aquí es el patrón [BFF](https://samnewman.io/patterns/architectural/bff/) , donde cada aplicación frontend tiene un back-end correspondiente cuyo propósito es únicamente satisfacer las necesidades de ese frontend. Si bien el patrón BFF originalmente podría haber significado backends dedicados para cada canal frontend (web, móvil, etc.), puede extenderse fácilmente para significar un backend para cada micro frontend.

Hay muchas variables para tener en cuenta aquí. El BFF podría estar autocontenido con su propia base de datos y lógica de negocios, o podría ser simplemente un agregador de servicios posteriores. Si hay servicios posteriores, puede o no tener sentido que el equipo propietario de la micro interfaz y su BFF, también posean algunos de esos servicios. Si el micro frontend tiene solo una API con la que habla, y esa API es bastante estable, entonces puede que no tenga mucho valor construir un BFF. El principio rector aquí es que el equipo que construye un micro frontend particular no debería tener que esperar a que otros equipos construyan cosas para ellos. Entonces, si cada nueva característica agregada a un micro frontend también requiere cambios en el backend, ese es un caso sólido para un BFF, propiedad del mismo equipo.

![](https://cdn-images-1.medium.com/max/800/0*nmGrVk45rf47qq8Q.png)

Figura 7: Hay muchas formas diferentes de estructurar sus relaciones frontend / backend

Otra pregunta común es, ¿cómo debe el usuario de una aplicación de micro frontend ser autenticado y autorizado con el servidor? Obviamente, nuestros clientes solo deberían tener que autenticarse una vez, por lo que la autenticación generalmente cae firmemente en la categoría de preocupaciones transversales que deberían ser propiedad de la aplicación de contenedor. El contenedor probablemente tiene algún tipo de formulario de inicio de sesión, a través del cual obtenemos algún tipo de token. Ese token sería propiedad del contenedor y se puede inyectar en cada micro frontend en la inicialización. Finalmente, el micro frontend puede enviar el token con cualquier solicitud que haga al servidor, y el servidor puede hacer cualquier validación requerida.

### Pruebas

No vemos mucha diferencia entre frontends monolíticos y micro frontends cuando se trata de pruebas. En general, cualquier estrategia que esté utilizando para probar un frontend monolítico puede reproducirse en cada micro frontend individual. Es decir, cada micro interfaz debe tener su propio conjunto integral de pruebas automatizadas que garanticen la calidad y la corrección del código.

La brecha obvia sería la prueba de integración de los diversos micro frontends con la aplicación de contenedor. Esto se puede hacer usando su opción preferida de herramienta de prueba funcional / de extremo a extremo (como Selenium o Cypress), pero no lleve las cosas demasiado lejos; Las pruebas funcionales solo deben cubrir aspectos que no se pueden probar en un nivel inferior de la [Pirámide de prueba](https://martinfowler.com/bliki/TestPyramid.html) . Con esto queremos decir, use pruebas unitarias para cubrir su lógica de negocios de bajo nivel y la lógica de representación, y luego use pruebas funcionales solo para validar que la página esté ensamblada correctamente. Por ejemplo, puede cargar la aplicación totalmente integrada en una URL particular y afirmar que el título codificado de la micro interfaz correspondiente está presente en la página.

Si hay viajes de usuario que abarcan micro frontends, entonces podría usar pruebas funcionales para cubrirlos, pero mantenga las pruebas funcionales enfocadas en validar la integración de los frontends, y no la lógica comercial interna de cada micro frontend, que ya debería haber sido cubierto por pruebas unitarias. [Como se mencionó anteriormente,](https://martinfowler.com/articles/micro-frontends.html#Cross-applicationCommunication) los contratos impulsados ​​por el consumidor pueden ayudar a especificar directamente las interacciones que ocurren entre las micro frontends sin la fragilidad de los entornos de integración y las pruebas funcionales.

### El ejemplo en detalle

La mayor parte del resto de este artículo será una explicación detallada de solo una forma en que nuestra aplicación de ejemplo puede implementarse. Nos centraremos principalmente en cómo la aplicación del contenedor y las micro frontends se [integran juntas usando JavaScript](https://martinfowler.com/articles/micro-frontends.html#Run-timeIntegrationViaJavascript) , ya que esa es probablemente la parte más interesante y compleja. Puede ver el resultado final desplegado en vivo en [https://demo.microfrontends.com](https://demo.microfrontends.com/) , y el código fuente completo se puede ver en [Github](https://github.com/micro-frontends-demo) .

![](https://cdn-images-1.medium.com/max/800/0*1WqEDjCgEKis7Nmn.png)

Figura 8: La página de inicio ‘navegar’ de la aplicación de demostración completa de micro frontends

La demostración está construida utilizando React.js, por lo que vale la pena mencionar que React _no_ tiene el monopolio de esta arquitectura. Micro frontends se pueden implementar con muchas herramientas o marcos diferentes. Elegimos React aquí por su popularidad y por nuestra propia familiaridad con él.

### El contenedor

Comenzaremos con [el contenedor](https://github.com/micro-frontends-demo/container) , ya que es el punto de entrada para nuestros clientes. Veamos qué podemos aprender al respecto de su `package.json`:

{  
  "name": "@micro-frontends-demo/container",  
  "description": "Entry point and container for a micro frontends demo",  
  "scripts": {  
    "start": "PORT=3000 react-app-rewired start",  
    "build": "react-app-rewired build",  
    "test": "react-app-rewired test"  
  },  
  "dependencies": {  
    "react": "^16.4.0",  
    "react-dom": "^16.4.0",  
    "react-router-dom": "^4.2.2",  
    "react-scripts": "^2.1.8"  
  },  
  "devDependencies": {  
    "enzyme": "^3.3.0",  
    "enzyme-adapter-react-16": "^1.1.1",  
    "jest-enzyme": "^6.0.2",  
    "react-app-rewire-micro-frontends": "^0.0.1",  
    "react-app-rewired": "^2.1.1"  
  },  
  "config-overrides-path": "node\_modules/react-app-rewire-micro-frontends"  
}

En la versión 1 `react-scripts`, era posible tener múltiples aplicaciones coexistiendo en una sola página sin conflictos, pero la versión 2 usa algunas características de paquete web que causan errores cuando dos o más aplicaciones intentan mostrarse en una página. Por esta razón, usamos `react-app-rewired`para anular algunas de las configuraciones internas del paquete web `react-scripts`. Esto corrige esos errores y nos permite seguir confiando `react-scripts`para administrar nuestras herramientas de compilación.

De las dependencias en `react`y `react-scripts`, podemos concluir que es una aplicación React.js creada con `[create-react-app](https://facebook.github.io/create-react-app/)`. Más interesante es lo que _no está_ allí: cualquier mención de las micro frontends que vamos a componer juntas para formar nuestra aplicación final. Si tuviéramos que especificarlos aquí como dependencias de la biblioteca, estaríamos siguiendo el camino de la integración en tiempo de construcción, que [como se mencionó anteriormente](https://martinfowler.com/articles/micro-frontends.html#Build-timeIntegration) tiende a causar un acoplamiento problemático en nuestros ciclos de lanzamiento.

Para ver cómo seleccionamos y mostramos un micro frontend, veamos `App.js`. Usamos [React Router](https://reacttraining.com/react-router/) para hacer coincidir la URL actual con una lista predefinida de rutas y representar el componente correspondiente:

<Switch>  
  <Route exact path="/" component={Browse} />  
  <Route exact path="/restaurant/:id" component={Restaurant} />  
  <Route exact path="/random" render={Random} />  
</Switch>

El `Random`componente no es tan interesante: simplemente redirige la página a una URL de restaurante seleccionada al azar. Los componentes `Browse`y se `Restaurant`ven así:

const Browse = ({ history }) => (  
  <MicroFrontend history={history} name="Browse" host={browseHost} />  
);  
const Restaurant = ({ history }) => (  
  <MicroFrontend history={history} name="Restaurant" host={restaurantHost} />  
);

En ambos casos, representamos un `MicroFrontend`componente. Además del objeto de historial (que será importante más adelante), especificamos el nombre único de la aplicación y el host desde el que se puede descargar su paquete. Esta URL controlada por la configuración será algo así como `http://localhost:3001`cuando se ejecuta localmente o `https://browse.demo.microfrontends.com`en producción.

Después de haber seleccionado un micro frontend `App.js`, ahora lo procesaremos `MicroFrontend.js`, que es solo otro componente React:

**class** **MicroFrontend** **extends** **React**.**Component** {  
  render() {  
    **return** <main id={\`${this.props.name}-container\`} />;  
  }  
}

Esta no es toda la clase, pronto veremos más de sus métodos.

Al renderizar, todo lo que hacemos es colocar un elemento contenedor en la página, con una ID que sea exclusiva de la micro interfaz. Aquí es donde le diremos a nuestro micro frontend que se renderice. Usamos React `componentDidMount`como desencadenante para descargar y montar la interfaz de usuario:

`componentDidMount` es un método de ciclo de vida de componentes React, que es llamado por el marco justo después de que una instancia de nuestro componente haya sido 'montada' en el DOM por primera vez.

clase MicroFrontend …

componentDidMount() {  
    **const** { name, host } = **this**.props;  
    **const** scriptId = \`micro-frontend-script-${name}\`;  
  
    **if** (document.getElementById(scriptId)) {  
      **this**.renderMicroFrontend();  
      **return**;  
    }  
  
    fetch(\`${host}/asset-manifest.json\`)  
      .then(res => res.json())  
      .then(manifest => {  
        **const** script = document.createElement('script');  
        script.id = scriptId;  
        script.src = \`${host}${manifest\['main.js'\]}\`;  
        script.onload = **this**.renderMicroFrontend;  
        document.head.appendChild(script);  
      });  
  }

Tenemos que buscar la URL del script desde un archivo de manifiesto de activos, porque `react-scripts`genera archivos JavaScript compilados que tienen hash en su nombre de archivo para facilitar el almacenamiento en caché.

Primero verificamos si la secuencia de comandos relevante, que tiene una ID única, ya se ha descargado, en cuyo caso podemos renderizarla inmediatamente. Si no, buscamos el `asset-manifest.json`archivo desde el host apropiado, para buscar la URL completa del activo del script principal. Una vez que hemos configurado la URL del script, todo lo que queda es adjuntarlo al documento, con un `onload`controlador que representa el micro frontend:

clase MicroFrontend …

renderMicroFrontend = () => {  
    **const** { name, history } = **this**.props;  
  
    window\[\`render${name}\`\](\`${name}-container\`, history);  
    _// E.g.: window.renderBrowse('browse-container', history);_  
  };

En el código anterior llamamos a una función global llamada algo así `window.renderBrowse`, que fue colocada allí por el script que acabamos de descargar. Le pasamos la ID del `<main>` elemento donde el micro frontend debe representarse a sí mismo, y un `history` objeto, que explicaremos pronto. **La firma de esta función global es el contrato clave entre la aplicación de contenedor y las micro interfaces**. Aquí es donde debe ocurrir cualquier comunicación o integración, por lo que mantenerlo bastante liviano hace que sea fácil de mantener y agregar nuevas micro frontends en el futuro. Siempre que queramos hacer algo que requiera un cambio en este código, debemos pensar mucho sobre lo que significa para el acoplamiento de nuestras bases de código y el mantenimiento del contrato.

Hay una última pieza, que se ocupa de la limpieza. Cuando nuestro `MicroFrontend`componente se desmonta (se elimina del DOM), también queremos desmontar la micro interfaz correspondiente. Hay una función global correspondiente definida por cada micro frontend para este propósito, que llamamos desde el método apropiado del ciclo de vida de React:

clase MicroFrontend …

componentWillUnmount() {  
    **const** { name } = **this**.props;  
  
    window\[\`unmount${name}\`\](\`${name}-container\`);  
  }

En términos de su propio contenido, todo lo que el contenedor representa directamente es el encabezado de nivel superior y la barra de navegación del sitio, ya que son constantes en todas las páginas. El CSS para esos elementos se ha escrito cuidadosamente para garantizar que solo estilizará elementos dentro del encabezado, por lo que no debe entrar en conflicto con ningún código de estilo dentro de las micro frontends.

¡Y ese es el final de la aplicación contenedor! Es bastante rudimentario, pero esto nos da un shell que puede descargar dinámicamente nuestros micro frontends en tiempo de ejecución y pegarlos en algo cohesivo en una sola página. Esas micro frontends se pueden implementar de forma independiente hasta la producción, sin tener que cambiar a ninguna otra micro frontend o al contenedor en sí.

### Las micro frontends

El lugar lógico para continuar esta historia es con la función de renderización global a la que nos referimos. La página de inicio de nuestra aplicación es una lista filtrable de restaurantes, cuyo punto de entrada se ve así:

**import** React **from** 'react';  
**import** ReactDOM **from** 'react-dom';  
**import** App **from** './App';  
**import** registerServiceWorker **from** './registerServiceWorker';  
  
window.renderBrowse = (containerId, history) => {  
  ReactDOM.render(<App history={history} />, document.getElementById(containerId));  
  registerServiceWorker();  
};  
  
window.unmountBrowse = containerId => {  
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));  
};

Por lo general, en las aplicaciones React.js, la llamada a `ReactDOM.render`estaría en el ámbito de nivel superior, lo que significa que tan pronto como se carga este archivo de secuencia de comandos, inmediatamente comienza a representarse en un elemento DOM codificado. Para esta aplicación, necesitamos poder controlar cuándo y dónde ocurre el renderizado, por lo que lo envolvemos en una función que recibe la ID del elemento DOM como parámetro, y adjuntamos esa función al `window`objeto global . También podemos ver la función de desmontaje correspondiente que se utiliza para la limpieza.

Si bien ya hemos visto cómo se llama a esta función cuando el micro frontend está integrado en toda la aplicación contenedor, uno de los criterios más importantes para el éxito aquí es que podemos desarrollar y ejecutar los micro frontends de forma independiente. Por lo tanto, cada micro interfaz también tiene el suyo propio `index.html`con un script en línea para representar la aplicación en un modo "independiente", fuera del contenedor:

<html lang="en">  
  <head>  
    <title>Restaurant order</title>  
  </head>  
  <body>  
    <main id="container"></main>  
    <script type="text/javascript">  
      window.onload = () => {  
        window.renderRestaurant('container');  
      };  
    </script>  
  </body>  
</html>

![](https://cdn-images-1.medium.com/max/800/0*Yb6GfkHwHmsCyvOD.png)

Figura 9: Cada micro frontend se puede ejecutar como una aplicación independiente fuera del contenedor.

A partir de este momento, las micro frontends son en su mayoría simplemente viejas aplicaciones de React. La aplicación [‘navegar’](https://github.com/micro-frontends-demo/browse) busca la lista de restaurantes desde el backend, proporciona `<input>` elementos para buscar y filtrar los restaurantes, y presenta `<Link>`elementos de React Router , que navegan a un restaurante específico. En ese momento, pasaríamos a la segunda micro-interfaz ["pedido"](https://github.com/micro-frontends-demo/restaurant-order) , que representa un único restaurante con su menú.

![](https://cdn-images-1.medium.com/max/800/0*Cpu1AFP_dDKTgxO9.png)

Figura 10: Estas micro frontends interactúan solo a través de cambios de ruta, no directamente

Lo último que vale la pena mencionar acerca de nuestros micro frontends es que ambos usan `styled-components`para todo su estilo. Esta biblioteca CSS-in-JS facilita la asociación de estilos con componentes específicos, por lo que tenemos la garantía de que los estilos de un micro frontend no se filtrarán y afectarán el contenedor u otro micro frontend.

### Comunicación entre aplicaciones a través del enrutamiento

Hemos [mencionado anteriormente](https://martinfowler.com/articles/micro-frontends.html#Cross-applicationCommunication) que la comunicación entre aplicaciones debe mantenerse al mínimo. En este ejemplo, el único requisito que tenemos es que la página de navegación necesita decirle a la página del restaurante qué restaurante cargar. Aquí veremos cómo podemos usar el enrutamiento del lado del cliente para resolver este problema.

Las tres aplicaciones de React involucradas aquí están usando React Router para el enrutamiento declarativo, pero se inicializan de dos maneras ligeramente diferentes. Para la aplicación contenedor, creamos un `<BrowserRouter>`, que internamente creará una instancia de un `history`objeto. Este es el mismo `history`objeto que hemos estado pasando por alto anteriormente. Usamos este objeto para manipular el historial del lado del cliente, y también podemos usarlo para vincular múltiples enrutadores React. Dentro de nuestras micro interfaces, inicializamos el enrutador de esta manera:

<Router history={**this**.props.history}>

En este caso, en lugar de dejar que React Router cree una instancia de otro objeto de historial, le proporcionamos la instancia que pasó la aplicación contenedor. Todas las `<Router>`instancias ahora están conectadas, por lo que los cambios de ruta activados en cualquiera de ellas se reflejarán en todas ellas. Esto nos da una manera fácil de pasar "parámetros" de un micro frontend a otro, a través de la URL. Por ejemplo, en el buscador de micro frontend, tenemos un enlace como este:

<Link to={\`/restaurant/${restaurant.id}\`}>

Cuando se hace clic en este enlace, la ruta se actualizará en el contenedor, que verá la nueva URL y determinará que la micro interfaz del restaurante debe montarse y representarse. La lógica de enrutamiento de ese micro frontend extraerá la identificación del restaurante de la URL y mostrará la información correcta.

Esperemos que este ejemplo de flujo muestre la flexibilidad y el poder de la humilde URL. Además de ser útil para compartir y marcar, en esta arquitectura particular puede ser una forma útil de comunicar la intención a través de micro frontends. El uso de la URL de la página para este propósito marca muchos cuadros:

*   Su estructura es un estándar abierto y bien definido.
*   Es accesible globalmente a cualquier código en la página
*   Su tamaño limitado fomenta el envío de solo una pequeña cantidad de datos.
*   Está orientado al usuario, lo que fomenta una estructura que modela el dominio fielmente
*   Es declarativo, no imperativo. Es decir, “aquí es donde estamos”, en lugar de “haga esto”
*   Obliga a las micro frontends a comunicarse indirectamente, y no conocerse o depender el uno del otro directamente

Cuando utilizamos el enrutamiento como nuestro modo de comunicación entre micro frontends, las rutas que elegimos constituyen un **contrato** . En este caso, hemos establecido la idea de que se puede ver un restaurante `/restaurant/:restaurantId`, y no podemos cambiar esa ruta sin actualizar todas las aplicaciones que se refieren a él. Dada la importancia de este contrato, deberíamos tener pruebas automatizadas que verifiquen que se cumpla el contrato.

### Contenido común

Si bien queremos que nuestros equipos y nuestras micro interfaces sean lo más independientes posible, hay algunas cosas que deberían ser comunes. Anteriormente escribimos sobre cómo [las bibliotecas de componentes compartidas](https://martinfowler.com/articles/micro-frontends.html#SharedComponentLibraries) pueden ayudar con la coherencia en las micro interfaces, pero para esta pequeña demostración una biblioteca de componentes sería exagerada. Entonces, en cambio, tenemos un pequeño [repositorio de contenido común](https://github.com/micro-frontends-demo/content) , que incluye imágenes, datos JSON y CSS, que se sirven a través de la red a todos los micro frontends.

Hay otra cosa que podemos elegir compartir a través de micro frontends: dependencias de la biblioteca. Como [describiremos en breve](https://martinfowler.com/articles/micro-frontends.html#PayloadSize) , la duplicación de dependencias es un inconveniente común de las micro interfaces. Aunque compartir esas dependencias entre aplicaciones conlleva su propio conjunto de dificultades, para esta aplicación de demostración vale la pena hablar sobre cómo se puede hacer.

El primer paso es elegir qué dependencias compartir. Un análisis rápido de nuestro código compilado mostró que aproximadamente el 50% de los paquetes fueron aportados por `react`y `react-dom`. Además de su tamaño, estas dos bibliotecas son nuestras dependencias más 'centrales', por lo que sabemos que todas las micro frontends pueden beneficiarse de su extracción. Finalmente, estas son bibliotecas estables y maduras, que generalmente introducen cambios importantes en dos versiones principales, por lo que los esfuerzos de actualización entre aplicaciones no deberían ser demasiado difíciles.

En cuanto a la extracción real, todo lo que necesitamos hacer es marcar las bibliotecas como [externas](https://webpack.js.org/configuration/externals/) en nuestra configuración de paquete web, lo que podemos hacer con un nuevo cableado similar al [descrito anteriormente](https://martinfowler.com/articles/micro-frontends.html#TheContainer) .

module.exports = (config, env) => {  
  config.externals = {  
    react: 'React',  
    'react-dom': 'ReactDOM'  
  }  
  **return** config;  
};

Luego agregamos un par de `script`etiquetas a cada `index.html` archivo, para obtener las dos bibliotecas de nuestro servidor de contenido compartido.

<body>  
  <noscript>  
    You need to enable JavaScript to run this app.  
  </noscript>  
  <div id="root"></div>  
  <script src="%REACT\_APP\_CONTENT\_HOST%/react.prod-16.8.6.min.js"></script>  
  <script src="%REACT\_APP\_CONTENT\_HOST%/react-dom.prod-16.8.6.min.js"></script>  
</body>

Compartir código entre equipos siempre es algo difícil de hacer bien. Necesitamos asegurarnos de que solo compartamos cosas que realmente queremos que sean comunes, y que queremos cambiar en varios lugares a la vez. Sin embargo, si tenemos cuidado con lo que compartimos y lo que no compartimos, entonces se pueden obtener beneficios reales.

### Infraestructura

La aplicación está alojada en AWS, con infraestructura central (buckets S3, distribuciones de CloudFront, dominios, certificados, etc.), aprovisionados de una vez utilizando un [repositorio centralizado](https://github.com/micro-frontends-demo/infra) de código Terraform. Cada micro frontend tiene su propio repositorio de origen con su propia tubería de implementación continua en [Travis CI](https://travis-ci.org/micro-frontends-demo/) , que construye, prueba e implementa sus activos estáticos en esos cubos S3. Esto equilibra la conveniencia de la administración centralizada de la infraestructura con la flexibilidad de la implementación independiente.

Tenga en cuenta que cada micro frontend (y el contenedor) tiene su propio cubo. Esto significa que tiene un reinado libre sobre lo que sucede allí, y no tenemos que preocuparnos por las colisiones de nombres de objetos o las reglas de administración de acceso en conflicto, de otro equipo o aplicación.

### Desventajas

Al comienzo de este artículo, mencionamos que hay compensaciones con micro frontends, como con cualquier arquitectura. Los beneficios que hemos mencionado tienen un costo que cubriremos aquí.

### Tamaño de la carga útil

Los paquetes de JavaScript creados independientemente pueden causar la duplicación de dependencias comunes, aumentando la cantidad de bytes que tenemos que enviar a través de la red a nuestros usuarios finales. Por ejemplo, si cada micro frontend incluye su propia copia de React, entonces estamos obligando a nuestros clientes a descargar React _n_ veces. Existe una [relación directa](https://developers.google.com/web/fundamentals/performance/why-performance-matters/) entre el rendimiento de la página y la participación / conversión del usuario, y gran parte del mundo funciona con una infraestructura de Internet mucho más lenta que las de las ciudades altamente desarrolladas, por lo que tenemos muchas razones para preocuparnos por los tamaños de descarga.

Este problema no es fácil de resolver. Existe una tensión inherente entre nuestro deseo de permitir que los equipos compilen sus aplicaciones de forma independiente para que puedan trabajar de manera autónoma, y ​​nuestro deseo de construir nuestras aplicaciones de tal manera que puedan compartir dependencias comunes. Un enfoque es externalizar dependencias comunes de nuestros paquetes compilados, [como describimos](https://martinfowler.com/articles/micro-frontends.html#CommonContent)para la aplicación de demostración. Sin embargo, tan pronto como seguimos este camino, hemos reintroducido algunos acoplamientos en tiempo de construcción a nuestras micro interfaces. Ahora hay un contrato implícito entre ellos que dice: “todos debemos usar estas versiones exactas de estas dependencias”. Si hay un cambio importante en una dependencia, podríamos terminar necesitando un gran esfuerzo de actualización coordinado y un evento de lanzamiento único. ¡Esto es todo lo que estábamos tratando de evitar con micro frontends en primer lugar!

Esta tensión inherente es difícil, pero no todas son malas noticias. En primer lugar, incluso si elegimos no hacer nada con respecto a las dependencias duplicadas, es posible que cada página individual se cargue más rápido que si hubiéramos creado una interfaz monolítica única. La razón es que al compilar cada página de forma independiente, hemos implementado efectivamente nuestra propia forma de división de código. En los monolitos clásicos, cuando se carga cualquier página de la aplicación, a menudo descargamos el código fuente y las dependencias de cada página a la vez. Al construir de forma independiente, cualquier carga de página solo descargará la fuente y las dependencias de esa página. Esto puede dar como resultado cargas de página iniciales más rápidas, pero una navegación posterior más lenta ya que los usuarios se ven obligados a volver a descargar las mismas dependencias en cada página. Si somos disciplinados en no hinchar nuestros micro frontends con dependencias innecesarias, o si sabemos que los usuarios generalmente se adhieren a solo una o dos páginas dentro de la aplicación, bien podemos lograr una red_ganar_ en términos de rendimiento, incluso con dependencias duplicadas.

Hay muchos “may’s” y “posiblemente’s” en el párrafo anterior, que resalta el hecho de que cada aplicación siempre tendrá sus propias características de rendimiento únicas. Si desea saber con certeza cuáles serán los impactos en el rendimiento de un cambio particular, no hay sustituto para tomar mediciones en el mundo real, idealmente en la producción. Hemos visto a equipos agonizar por unos pocos kilobytes adicionales de JavaScript, solo para descargar muchos megabytes de imágenes de alta resolución o realizar consultas costosas en una base de datos muy lenta. Entonces, si bien es importante tener en cuenta los impactos en el rendimiento de cada decisión arquitectónica, asegúrese de saber dónde están los cuellos de botella reales.

### Diferencias ambientales

Deberíamos ser capaces de desarrollar un único micro frontend sin tener que pensar en todos los otros micro frontends desarrollados por otros equipos. Incluso podemos ejecutar nuestro micro frontend en modo “independiente”, en una página en blanco, en lugar de dentro de la aplicación de contenedor que lo alojará en producción. Esto puede hacer que el desarrollo sea mucho más simple, especialmente cuando el contenedor real es una base de código compleja y heredada, que suele ser el caso cuando usamos micro frontends para hacer una migración gradual del viejo mundo al nuevo. Sin embargo, existen riesgos asociados con el desarrollo en un entorno que es bastante diferente a la producción. Si nuestro contenedor de tiempo de desarrollo se comporta de manera diferente al de producción, entonces podemos encontrar que nuestro micro frontend está roto, o se comporta de manera diferente cuando lo implementamos en producción. De particular preocupación son los estilos globales que pueden ser traídos por el contenedor, o por otras micro interfaces.

La solución aquí no es tan diferente a cualquier otra situación en la que tengamos que preocuparnos por las diferencias ambientales. Si nos estamos desarrollando localmente en un entorno que no es similar a la producción, debemos asegurarnos de que integramos y desplegamos regularmente nuestro micro frontend en entornos que _son_ como la producción, y debemos hacer pruebas (manuales y automatizadas) en estos entornos para detecte los problemas de integración lo antes posible. Esto no resolverá completamente el problema, pero en última instancia es otra compensación que tenemos que sopesar: ¿vale la pena el riesgo de problemas de integración por el aumento de la productividad de un entorno de desarrollo simplificado? ¡La respuesta dependerá del proyecto!

### Complejidad operacional y de gobierno

El último inconveniente es uno con un paralelo directo a los microservicios. Como una arquitectura más distribuida, las micro frontends inevitablemente conducirán a tener más _cosas_ para administrar: más repositorios, más herramientas, más tuberías de compilación / implementación, más servidores, más dominios, etc. Entonces, antes de adoptar dicha arquitectura, hay algunas preguntas que debe hacer Debería considerar:

*   ¿Tiene suficiente automatización para aprovisionar y administrar de manera factible la infraestructura adicional requerida?
*   ¿Sus procesos frontales de desarrollo, prueba y lanzamiento se adaptarán a muchas aplicaciones?
*   ¿Se siente cómodo con las decisiones sobre herramientas y prácticas de desarrollo que se vuelven más descentralizadas y menos controlables?
*   ¿Cómo garantizará un nivel mínimo de calidad, coherencia o gobernanza en sus muchas bases de código de interfaz de usuario independientes?

Probablemente podríamos llenar otro artículo completo discutiendo estos temas. El punto principal que deseamos destacar es que cuando elige micro frontends, por definición, está optando por crear muchas cosas pequeñas en lugar de una cosa grande. Debe considerar si tiene la madurez técnica y organizativa necesaria para adoptar dicho enfoque sin crear caos.

### Conclusión

A medida que las bases de código frontend continúan volviéndose más complejas a lo largo de los años, vemos una creciente necesidad de arquitecturas más escalables. Necesitamos poder trazar límites claros que establezcan los niveles correctos de acoplamiento y cohesión entre las entidades técnicas y de dominio. Deberíamos poder escalar la entrega de software a través de equipos independientes y autónomos.

Aunque lejos de ser el único enfoque, hemos visto muchos casos del mundo real en los que las micro frontends brindan estos beneficios, y hemos podido aplicar la técnica gradualmente con el tiempo a las bases de código heredadas, así como a las nuevas. Ya sea que las micro frontends sean el enfoque adecuado para usted y su organización o no, solo podemos esperar que esto sea parte de una tendencia continua en la que la ingeniería y la arquitectura frontend se traten con la seriedad que sabemos que merece.

[**Donate to devjaime**  
_Help support devjaime by donating or sharing with your friends._www.paypal.com](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S "https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S")[](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S)

By [Jaime Hernández](https://medium.com/@devjaime) on [September 6, 2019](https://medium.com/p/4eecf1498cd1).

[Canonical link](https://medium.com/@devjaime/microfrontend-4eecf1498cd1)

Exported from [Medium](https://medium.com) on March 15, 2025.