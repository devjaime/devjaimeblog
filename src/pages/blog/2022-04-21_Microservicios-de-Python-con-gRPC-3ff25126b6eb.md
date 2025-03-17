---
layout: "../../layouts/BlogLayout.astro"
title: "Microservicios de Python con gRPC"
description: ""
tags: ["code", "python", "grpc", "microservicios"]
time: 4
featured: true
timestamp: "2022-04-21T12:20:31-0300"
filename: "2022-04-21_Microservicios-de-Python-con-gRPC-3ff25126b6eb"
---

Microservicios de Python con gRPC
=================================

Los microservicios son una forma de organizar sistemas de software complejos. En lugar de poner todo su código en una aplicación, divide su…

* * *

### Microservicios de Python con gRPC

![](https://cdn-images-1.medium.com/max/800/1*CQKET2UX1UJ3qBxt9Ka73g.png)

**Los microservicios** son una forma de organizar sistemas de software complejos. En lugar de poner todo su código en una aplicación, divide su aplicación en microservicios que se implementan de forma independiente y se comunican entre sí. Este tutorial le enseña cómo ponerse en marcha con los microservicios de Python utilizando gRPC, uno de los marcos más populares.

Es importante implementar bien un framework de microservicios. Cuando crea un framework para admitir aplicaciones críticas, debe asegurarse de que sea sólido y fácil de usar para los desarrolladores.

### ¿Por qué Microservicios?

Imagina que trabajas en Mercado Libre, un popular sitio de comercio electrónico que vende todo tipo de productos en linea. La compañía tiene varios cientos de desarrolladores. Cada desarrollador está escribiendo código para algún producto o función de back-end, como administrar el carrito del usuario, generar recomendaciones, manejar transacciones de pago o manejar el inventario del almacén.

Ahora pregúntese, ¿querría todo ese código en una aplicación gigante? ¿Qué tan difícil sería eso de entender? ¿Cuánto tiempo tardaría en probar? ¿Cómo mantendría el código y los esquemas de la base de datos coherentes? Definitivamente sería difícil, especialmente porque el negocio trata de moverse rápidamente.

¿No preferiría que el código correspondiente a las características del producto modular fuera, bueno, y compacto? Un microservicio de carro para gestionar carros. Un microservicio de inventario para administrar el inventario.

En las siguientes secciones, profundizará un poco más en algunas razones para separar el código de Python en microservicios.

### Modularidad

Los cambios de código a menudo toman el camino de menor resistencia. Sus prod owner quiere agregar una nuevas funciones de compre de productos y obtenga uno gratis. Eres parte del equipo al que se le ha pedido que lo lance lo más rápido posible. Eche un vistazo a lo que sucede cuando todo su código está en una sola aplicación.

Siendo el ingeniero más inteligente de su equipo, menciona que puede agregar algún código a la lógica del carrito para verificar si hay más de dos productos en el carrito. Si es así, simplemente puede restar el costo del producto más barato del total del carrito. No se preocupe, haga una solicitud de extracción.

Luego, su prod owner le dice que necesita realizar un seguimiento del impacto de esta campaña en las ventas del producto. Esto también es bastante sencillo. Dado que la lógica que implementa la función compre dos, obtenga uno está en el código del carrito, agregará una línea en el flujo de pago que actualice una nueva columna en la base de datos de transacciones para indicar que la venta fue parte de la promoción:

![](https://cdn-images-1.medium.com/max/800/1*lw-mWtXp1giS7nrwGNX0nQ.png)

A continuación, su jefe de producto le recuerda que la oferta es válida para un solo uso por cliente. Debe agregar algo de lógica para verificar si alguna transacción anterior tenía ese `**_buy_two_get_one_free_promo_**`indicador establecido. Ah, y debe ocultar el banner de promoción en la página de inicio, por lo que también agrega ese cheque. Ah, y debes enviar correos electrónicos a las personas que no han usado la promoción. Añade eso también.

Varios años después, la base de datos de transacciones ha crecido demasiado y debe reemplazarse con una nueva base de datos compartida. Todas esas referencias necesitan ser cambiadas. Desafortunadamente, en este punto se hace referencia a la base de datos en todo el código base. Considera que en realidad fue un poco _demasiado_ fácil agregar todas esas referencias.

Es por eso que tener todo tu código en una sola aplicación puede ser peligroso a largo plazo. A veces es bueno tener límites.

La base de datos de transacciones debe ser accesible solo para un microservicio de transacciones. Entonces, si necesitas escalarlo, no está tan mal. Otras partes del código pueden interactuar con transacciones a través de una API abstraída que oculta los detalles de implementación. _Podría_ hacer esto en una sola aplicación, solo que es menos probable que lo haga . Los cambios de código a menudo toman el camino de menor resistencia.

* * *

### Flexibilidad

Dividir su código de Python en microservicios le brinda más flexibilidad. Por un lado, puede escribir sus microservicios en diferentes idiomas. A menudo, la primera aplicación web de una empresa se escribirá en [Ruby](https://www.ruby-lang.org/en/about/) o [PHP](https://www.php.net/manual/en/intro-whatis.php) . ¡Eso no significa que todo lo demás tenga que serlo también!

También puede escalar cada microservicio de forma independiente. En este tutorial, usará una aplicación web y un microservicio de Recomendaciones como ejemplo de ejecución.

Es probable que su aplicación web esté [vinculada a E/S](https://en.wikipedia.org/wiki/I/O_bound) , obteniendo datos de una base de datos y tal vez cargando plantillas u otros archivos desde el disco. Un microservicio de Recomendaciones puede estar haciendo muchos cálculos numéricos, por lo que está [vinculado a la CPU](https://en.wikipedia.org/wiki/CPU-bound) . Tiene sentido ejecutar estos dos microservicios de Python en hardware diferente.

* * *

### Robustez

Si todo su código está en una aplicación, debe implementarlo todo a la vez. ¡Este es un gran riesgo! Significa que un cambio en una pequeña parte del código puede acabar con todo el sitio.

* * *

### Propiedad

Cuando un gran número de personas comparte un solo código base, a menudo no hay una visión clara de la arquitectura del código. Esto es especialmente cierto en las grandes empresas donde los empleados van y vienen. Puede haber personas que tengan una visión de cómo debería verse el código, pero es difícil de hacer cumplir cuando cualquiera puede modificarlo y todos se mueven rápidamente.

Un beneficio de los microservicios es que los equipos pueden tener una propiedad clara de su código. Esto hace que sea más probable que haya una visión clara del código y que el código se mantenga limpio y organizado. También deja en claro quién es responsable de agregar características al código o realizar cambios cuando algo sale mal.

### ¿Qué tan pequeño es “Micro”?

Lo pequeños que deberían ser los microservicios es uno de esos temas que puede provocar un acalorado debate entre los ingenieros. Tal vez: _micro_ es un nombre inapropiado. Sólo deberíamos decir _servicios_ . Sin embargo, en este tutorial verá _microservicios_ utilizados por coherencia.

Hacer que los microservicios sean demasiado pequeños puede generar problemas. En primer lugar, en realidad anula el propósito de hacer que el código sea modular. El código en un microservicio debe tener sentido en conjunto, al igual que los datos y métodos en una clase tienen sentido en conjunto.

Para usar las clases como una analogía, considere los objetos`**file**`en Python. El objecto`**file**`tiene todos los métodos que necesita,`.read()`ya`.write()` o `.readlines()`si quieres. No deberías necesitar una `FileReader`y una Clase `FileWriter`. Tal vez esté familiarizado con los lenguajes que hacen esto, y tal vez siempre pensó que era un poco engorroso y confuso.

Los microservicios son lo mismo. El alcance del código debe sentirse correcto. No demasiado grande, no demasiado pequeño.

En segundo lugar, los microservicios son más difíciles de probar que el código monolítico. Si un desarrollador quiere probar una función que se extiende a través de muchos microservicios, entonces necesita ponerlos en funcionamiento en su entorno de desarrollo. Eso añade fricción. No es tan malo con unos pocos microservicios, pero si son docenas, será un problema importante.

Obtener el tamaño correcto del microservicio es un arte. Una cosa a tener en cuenta es que cada equipo debe poseer una cantidad razonable de microservicios. Si su equipo tiene cinco personas pero veinte microservicios, entonces esta es una señal de alerta. Por otro lado, si su equipo trabaja en un solo microservicio que también comparten otros cinco equipos, esto también podría ser un problema.

No haga que los microservicios sean lo más pequeños posible solo porque sí. Algunos microservicios pueden ser grandes. Pero tenga cuidado cuando un solo microservicio está haciendo dos o más cosas que no están relacionadas. Esto suele suceder porque agregar una funcionalidad no relacionada a un microservicio existente es el camino de menor resistencia, no porque pertenezca allí.

Aquí hay algunas formas en que podría dividir su librería en línea hipotética en microservicios:

*   **Marketplace** sirve la lógica para que el usuario navegue por el sitio.
*   **Cart** realiza un seguimiento de lo que el usuario ha puesto en su carrito y el flujo de pago.
*   **Transacciones** maneja el procesamiento de pagos y el envío de recibos.
*   **El inventario** proporciona datos sobre qué productos están en stock.
*   **La cuenta de** usuario administra el registro del usuario y los detalles de la cuenta, como cambiar su contraseña.
*   **Reseñas** almacena calificaciones de los productos y reseñas ingresadas por los usuarios.

Estos son solo algunos ejemplos, no una lista exhaustiva. Sin embargo, puede ver cómo cada uno de estos probablemente sería propiedad de su propio equipo, y la lógica de cada uno es relativamente independiente. Además, si el microservicio de Reseñas se implementó con un error que provocó que se bloqueara, el usuario aún podría usar el sitio y realizar compras a pesar de que las reseñas no se cargan.

### La compensación entre microservicio y monolito

Los microservicios no siempre son mejores que los monolitos que mantienen todo su código en una sola aplicación. En general, y especialmente al comienzo de un ciclo de vida de desarrollo de software, los monolitos le permitirán avanzar más rápido. Hacen que sea menos complicado compartir código y agregar funcionalidad, y tener que implementar solo un servicio le permite hacer llegar su aplicación a los usuarios rápidamente.

La compensación es que, a medida que crece la complejidad, todas estas cosas pueden hacer que el monolito sea más difícil de desarrollar, más lento de implementar y más frágil. Es probable que la implementación de un monolito le ahorre tiempo y esfuerzo desde el principio, pero puede volver a atormentarlo más tarde.

Es probable que la implementación de microservicios en Python le cueste tiempo y esfuerzo a corto plazo, pero si se hace bien, puede ayudarlo a escalar mejor a largo plazo. Por supuesto, implementar microservicios demasiado pronto podría ralentizarlo cuando la velocidad es más valiosa.

El ciclo de inicio típico de Silicon Valley es comenzar con un monolito para permitir una iteración rápida a medida que la empresa encuentra un producto adecuado para los clientes. Una vez que la empresa tiene un producto exitoso y contrata a más ingenieros, es hora de comenzar a pensar en los microservicios. No los implemente demasiado pronto, pero no espere demasiado.

Para obtener más información sobre la compensación microservicio-monolito, vea la excelente discusión de Sam Newman y Martin Fowler, [Cuándo usar microservicios (¡y cuándo no!)](https://www.youtube.com/watch?v=GBTdnfD6s5Q) .

### Microservicios de ejemplo

En esta sección, definirá algunos microservicios para su sitio web Online de productos. Definirá una API para ellos y escribirá el código de Python que los implementa como microservicios a medida que avanza en este tutorial.

Para mantener las cosas manejables, definirá solo dos microservicios:

1.  **Marketplace** será una aplicación web mínima que muestra una lista de libros al usuario.
2.  **Recomendaciones** será un microservicio que proporciona una lista de productos en los que el usuario puede estar interesado.

Aquí hay un diagrama que muestra cómo su usuario interactúa con los microservicios:

![](https://cdn-images-1.medium.com/max/800/0*RON2mOV1g19NpJIo.png)

Puede ver que el usuario interactuará con el microservicio Marketplace a través de su navegador, y el microservicio Marketplace interactuará con el microservicio Recomendaciones.

Piense por un momento en la API de recomendaciones. Desea que la solicitud de recomendaciones tenga algunas características:

*   **ID de usuario:** puede usar esto para personalizar las recomendaciones. Sin embargo, para simplificar, todas las recomendaciones de este tutorial serán aleatorias.
*   **Categoría de productos:** para que la API sea un poco más interesante, agregará categorías de productos, como misterio, autoayuda, etc.
*   **Resultados máximos:** no desea devolver todos los productos en stock, por lo que agregará un límite a la solicitud.

La respuesta será una lista de productos. Cada producto tendrá los siguientes datos:

*   **Id. de producto:** un Id. numérico único para el producto.
*   **Título del producto:** el título que puede mostrar al usuario.

Un sitio web real tendría más datos, pero mantendrá la cantidad de funciones limitada por el bien de este ejemplo.

Ahora puede definir esta API de manera más formal, en la sintaxis de los **búferes de protocolo** :

![](https://cdn-images-1.medium.com/max/800/1*uwj9etKo6p3fPS8Ox2BVTg.png)

Este archivo [de búfer de protocolo](https://developers.google.com/protocol-buffers) declara su API. Los búferes de protocolo se desarrollaron en Google y proporcionan una forma de especificar formalmente una API. Esto puede parecer un poco críptico al principio, así que aquí hay un desglose línea por línea:

*   **La línea 1** especifica que el archivo usa la `**proto3**`sintaxis en lugar de la `proto2`versión anterior.
*   **Las líneas 3 a 7** definen las categorías de su producto y a cada categoría también se le asigna una identificación numérica.
*   **Las líneas 9 a 13** definen su solicitud de API. A `**message**`contiene campos, cada uno de un tipo específico. Está utilizando `**int32**`, que es un número entero de 32 bits, para los campos `**user_ID**`y **.** `**max_results**`También está utilizando la `**BookCategory**`enumeración que definió anteriormente como el tipo`**category**`. Además de que cada campo tiene un nombre, también se le asigna un ID de campo numérico. Puedes ignorar esto por ahora.
*   **Las líneas 15 a 18** definen un nuevo tipo que puede usar para una recomendación de libros. Tiene una identificación de entero de 32 bits y un título basado en cadenas.
*   **Las líneas 20 a 22** definen la respuesta del microservicio de Recomendaciones. Tenga en cuenta la palabra clave`**repeated**`, que indica que la respuesta en realidad tiene una lista de los objectos **ProductRecomendation**.
*   **Las líneas 24 a 26** definen el **método** de la API. Puede pensar en esto como una función o un método en una clase. Toma un `**RecommendationRequest**`y devuelve un `**RecommendationResponse**`.

`**RPC**`significa llamada a **procedimiento remoto** . Como verá en breve, puede llamar a una RPC como una función normal en Python. Pero la implementación del RPC se ejecuta en otro servidor, que es lo que lo convierte en una llamada a procedimiento _remoto ._

### ¿Por qué RPC y búferes de protocolo?

Bien, entonces, ¿por qué debería usar esta sintaxis formal para definir su API? Si desea realizar una solicitud de un microservicio a otro, ¿no puede simplemente realizar una solicitud HTTP y obtener una respuesta JSON? Bueno, puede hacerlo, pero el uso de búferes de protocolo tiene ventajas.

* * *

### Documentación

El primer beneficio de usar búferes de protocolo es que le dan a su API un esquema bien definido y autodocumentado. Si usa JSON, debe documentar los campos que contiene y sus tipos. Al igual que con cualquier documentación, corre el riesgo de que la documentación sea inexacta, incompleta o desactualizada.

Cuando escribe su API en el lenguaje de búfer de protocolo, puede generar código Python a partir de él. Su código nunca estará desincronizado con su documentación. La documentación es buena , pero el código autodocumentado es mejor.

* * *

### Validación

El segundo beneficio es que, cuando genera código Python a partir de búferes de protocolo, obtiene una validación básica de forma gratuita. Por ejemplo, el código generado no aceptará campos del tipo incorrecto. El código generado también tiene todo el modelo de RPC integrado.

Si usa HTTP y JSON para su API, entonces necesita escribir un pequeño código que construya la solicitud, la envíe, espere la respuesta, verifique el código de estado y analice y valide la respuesta. Con los búferes de protocolo, puede generar un código que se parece a una llamada de función normal, pero que realiza una solicitud de red bajo el capó.

Puede obtener estos mismos beneficios utilizando framework HTTP y JSON como [Swagger](https://swagger.io/about/) y [RAML](https://raml.org/about-raml) . Para ver un ejemplo de Swagger en acción, consulte las API REST de Python con Flask, Connexion y SQLAlchemy .

Entonces, ¿hay razones para usar gRPC en lugar de una de esas alternativas? La respuesta sigue siendo sí.

* * *

### Performance

El framework gRPC [generalmente es más eficiente](https://www.yonego.com/nl/why-milliseconds-matter/) que el uso de solicitudes HTTP típicas. gRPC se basa en [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) , que puede realizar varias solicitudes en paralelo en una conexión de larga duración de forma segura para subprocesos. La configuración de la conexión es relativamente lenta, por lo que hacerlo una vez y compartir la conexión entre varias solicitudes ahorra tiempo. Los mensajes gRPC también son binarios y más pequeños que JSON. Además, HTTP/2 tiene compresión de encabezado integrada.

gRPC tiene compatibilidad integrada para transmitir solicitudes y respuestas. Manejará los problemas de la red con más gracia que una conexión HTTP básica, y se volverá a conectar automáticamente incluso después de largas desconexiones. También tiene **interceptores** , sobre los cuales aprenderá más adelante en este tutorial. Incluso puede implementar complementos en el código generado, lo que la gente ha hecho para generar sugerencias de tipo Python . Básicamente, ¡obtienes una gran infraestructura gratis!

### Facilidad para desarrolladores

Probablemente, la razón más interesante por la que muchas personas prefieren gRPC a REST es que puede definir su API en términos de funciones , no de recursos y verbos HTTP. Como ingeniero, está acostumbrado a pensar en términos de llamadas a funciones, y así es exactamente como lucen las API de gRPC.

Asignar la funcionalidad a una API REST suele ser complicado. Tienes que decidir cuáles son tus recursos, cómo construir caminos y qué verbos usar. A menudo hay múltiples opciones, como por ejemplo, cómo anidar recursos o si usar POST o algún otro verbo. REST vs gRPC puede convertirse en un [debate sobre preferencias](https://cloud.google.com/blog/products/api-management/understanding-grpc-openapi-and-rest-and-when-to-use-them) . Uno no siempre es mejor que el otro, así que use lo que mejor se adapte a su caso de uso.

Estrictamente hablando, los _búferes de protocolo_ se refieren al formato de serialización de los datos enviados entre dos microservicios. Entonces, los búferes de protocolo son similares a JSON o XML en el sentido de que son formas de formatear datos. A diferencia de JSON, los búferes de protocolo tienen un esquema estricto y son más compactos cuando se envían a través de la red.

Por otro lado, la infraestructura RPC en realidad se llama **gRPC** o Google RPC. Esto es más parecido a HTTP. De hecho, como se mencionó anteriormente, gRPC se basa en HTTP/2.

* * *

### Implementación de ejemplo

Después de toda esta charla sobre los búferes de protocolo, es hora de ver qué pueden hacer. El término _búfer de protocolo_ es un bocado, por lo que verá los **protobufs** abreviados comunes que se usan en este tutorial en el futuro.

Como se mencionó varias veces, puede generar código Python a partir de protobufs. La herramienta se instala como parte del `grpcio-tools`paquete.

Primero, defina su estructura de directorio inicial:

![](https://cdn-images-1.medium.com/max/800/1*9E1U9jCJPHd3Jfn-VOzknA.png)

El `**protobufs/**`directorio contendrá un archivo llamado `**recommendations.proto**`. El contenido de este archivo es el código protobuf anterior. Para mayor comodidad, puede ver el código expandiendo la sección plegable a continuación:

![](https://cdn-images-1.medium.com/max/800/1*uwj9etKo6p3fPS8Ox2BVTg.png)

Vas a generar código Python para interactuar con esto dentro del **recomendations/directory**. Primero, debe instalar `**_grpcio-tools_**`. Cree el archivo `**recommendations/requirements.txt**`y agregue lo siguiente:

![](https://cdn-images-1.medium.com/max/800/1*4ld7ETSA5TGxDRzxXu1EVA.png)

Para ejecutar el código localmente, deberá instalar las dependencias en un entorno virtual . Los siguientes comandos instalarán las dependencias:

Ahora, para generar código Python a partir de los **protobufs**, ejecute lo siguiente:

![](https://cdn-images-1.medium.com/max/800/1*DVm4VSNkv_ioa1jYtBdu1A.png)

Esto genera varios archivos de Python a partir del archivo `**.proto**`. Aquí hay un desglose:

*   `**python -m grpc_tools.protoc**`ejecuta el compilador protobuf, que generará código Python a partir del código protobuf.
*   `**-I ../protobufs**`le dice al compilador dónde encontrar los archivos que importa su código protobuf. En realidad, no usa la función de importación, pero la `-I`bandera es necesaria, no obstante.
*   `**--python_out=. --grpc_python_out=.**`le dice al compilador dónde generar los archivos de Python. Como verá en breve, generará dos archivos, y puede colocar cada uno en un directorio separado con estas opciones si lo desea.
*   `**../protobufs/recommendations.proto**`es la ruta al archivo protobuf, que se usará para generar el código de Python.

Si observa lo que se genera, verá dos archivos:

![](https://cdn-images-1.medium.com/max/800/1*YqwwsCs-a-02ZnDYmgSDzw.png)

Estos archivos incluyen tipos y funciones de Python para interactuar con su API. El compilador generará código de cliente para llamar a un RPC y código de servidor para implementar el RPC. Primero verás el lado del cliente.

### El cliente RPC

El código que se genera es algo que solo una placa base podría amar. Es decir, no es muy bonito Python. Esto se debe a que en realidad no está destinado a ser leído por humanos. Abra un shell de Python para ver cómo interactuar con él:

![](https://cdn-images-1.medium.com/max/800/1*_HCi4NKb8WYe1HhUhE3yVw.png)

Puede ver que el compilador de protobuf generó tipos de Python correspondientes a sus tipos de protobuf. Hasta aquí todo bien. También puede ver que hay algún tipo de verificación en los campos:

![](https://cdn-images-1.medium.com/max/800/1*ntZV1NJH-q7aXFxPaGr87w.png)

Esto muestra que obtiene un TypeError si pasa el tipo incorrecto a uno de sus campos protobuf.

Una nota importante es que todos los campos `proto3`son opcionales, por lo que deberá validar que estén configurados. Si deja uno sin configurar, se establecerá de forma predeterminada en cero para los tipos numéricos o en una cadena vacía para las cadenas:

![](https://cdn-images-1.medium.com/max/800/1*kN9HnLZF62Lw_rI8GDm0kg.png)

Aquí obtiene `**0**`porque ese es el valor predeterminado para los campos`**int**` no establecidos.

Si bien los protobufs verifican el tipo por usted, aún necesita validar los valores reales. Entonces, cuando implemente su microservicio de recomendaciones, debe validar que todos los campos tengan buenos datos. Esto siempre es cierto para cualquier servidor, independientemente de si usa protobufs, JSON o cualquier otra cosa. Siempre valide la entrada.

El archivo`**recommendations_pb2.py**` que se generó para usted contiene las definiciones de tipo. El archivo`**recommendations_pb2_grpc.p**y` contiene el framework para un cliente y un servidor. Eche un vistazo a las importaciones necesarias para crear un cliente:

![](https://cdn-images-1.medium.com/max/800/1*D73VjJbsguYyr9w-P1Tjkw.png)

Importa el módulo`**grpc**` , que proporciona algunas funciones para configurar conexiones a servidores remotos. Luego importas el stub del cliente RPC. Se llama **stub** porque el cliente en sí no tiene ninguna funcionalidad. Llama a un servidor remoto y devuelve el resultado.

Si mira hacia atrás en su definición de protobuf, verá la `**service Recommendations {...}**`parte al final. El compilador protobuf toma este nombre de microservicio `**Recommendations**`, y lo agrega `**Stub**`para formar el nombre del cliente, `**RecommendationsStub**`.

Ahora puede realizar una solicitud RPC:

![](https://cdn-images-1.medium.com/max/800/1*HbbcNbJ9vQ4_ohyRUkiUtQ.png)

Usted crea una conexión a `**localhost**`, su propia máquina, en el puerto `**50051**`. Este puerto es el puerto estándar para gRPC, pero puede cambiarlo si lo desea. Por ahora, usará un canal no seguro, que no está autenticado ni cifrado, pero aprenderá a usar canales seguros más adelante en este tutorial. Luego, pasa este canal a su stub para crear una instancia de su cliente.

Ahora puede llamar al método`**Recommend**` que definió en su `**Recommendations**`microservicio. Vuelve a pensar en la línea 25 de tu definición de protobuf: `_rpc Recommend (...) returns (...)_`. De ahí `**Recommend**`viene el método. Obtendrá una excepción porque no hay ningún microservicio ejecutándose en `**_localhost:50051_**`, ¡así que lo implementará a continuación!

Ahora que tiene el cliente resuelto, verá el lado del servidor.

* * *

### El servidor RPC

Probar el cliente en la consola es una cosa, pero implementar el servidor allí es demasiado. Puede dejar su consola abierta, pero implementará el microservicio en un archivo.

Comience con las importaciones y algunos datos:

![](https://cdn-images-1.medium.com/max/800/1*RoBJC1hljhlduNqawm7Jsg.png)

Este código importa sus dependencias y crea algunos datos de muestra. Aquí hay un desglose:

*   **La línea 2** importa `**futures**`porque gRPC necesita un grupo de subprocesos. Llegarás a eso más tarde.
*   **La línea 3** importa `**random**`porque va a seleccionar libros al azar para recomendaciones.
*   **La línea 14** crea el diccionario **product**`**_by_category**`, en el que las claves son categorías de productos y los valores son listas de productos en esa categoría. En un microservicio real de Recomendaciones, los productos se almacenarían en una base de datos.

A continuación, creará una clase que implemente las funciones de microservicio:

![](https://cdn-images-1.medium.com/max/800/1*cjr20VxAhE1o3xCV61CCXg.png)

Ha creado una clase con un método para implementar el `**Recommend**`RPC. Aquí están los detalles:

*   **La línea 29** define la clase `**RecommendationService**`. Esta es la implementación de su microservicio. Tenga en cuenta que subclase `**RecommendationsServicer**`. Esto es parte de la integración con gRPC que debe realizar.
*   **La línea 32** define un `**Recommend()**`método en su clase. Este debe tener el mismo nombre que el RPC que define en su archivo protobuf. También toma `**RecommendationRequest**`y devuelve un `**RecommendationResponse**`como en la definición de protobuf. También toma un parámetro`**context**`. El [contexto](https://grpc.github.io/grpc/python/grpc.html#grpc.ServicerContext) le permite establecer el código de estado para la respuesta.
*   **Las líneas 33 y 34** se usan `[abort()](https://grpc.github.io/grpc/python/grpc.html#grpc.ServicerContext.abort)`para finalizar la solicitud y establecer el código de estado `NOT_FOUND`si obtiene una categoría inesperada. Dado que gRPC se basa en HTTP/2, el código de estado es similar al código de estado HTTP estándar. Configurarlo permite al cliente realizar diferentes acciones en función del código que recibe. También permite que el middleware, como los sistemas de monitoreo, registre cuántas solicitudes tienen errores.
*   **Las líneas 36 a 40** eligen al azar algunos libros de la categoría dada para recomendar. Asegúrese de limitar el número de recomendaciones a `**max_results**`. Lo utiliza `min()`para asegurarse de no pedir más libros de los que hay, o de lo contrario `**random.sample**`se producirá un error.
*   **La línea 38** devuelve un objeto`**RecommendationResponse**`con su lista de recomendaciones de productos.

Tenga en cuenta que sería mejor generar una excepción en las condiciones de error en lugar de usar `abort()`como lo hace en este ejemplo, pero entonces la respuesta no establecería el código de estado correctamente. Hay una forma de evitar esto, a la que llegará más adelante en el tutorial cuando observe los interceptores.

La clase`**RecommendationService**`define la implementación de su microservicio, pero aún necesita ejecutarlo. Eso es lo que `**serve()**`hace:

![](https://cdn-images-1.medium.com/max/800/1*d-XhfmkgJ2BswtjDBHTd9w.png)

`serve()`inicia un servidor de red y usa su clase de microservicio para manejar las solicitudes:

*   **La línea 42** crea un servidor gRPC. Le dice que use `10`subprocesos para atender solicitudes, lo cual es una exageración total para esta demostración, pero es un buen valor predeterminado para un microservicio de Python.
*   **La línea 43** asocia tu clase con el servidor. Esto es como agregar un controlador para las solicitudes.
*   **La línea 46** le dice al servidor que se ejecute en el puerto `**50051**`. Como se mencionó anteriormente, este es el puerto estándar para gRPC, pero puede usar cualquier cosa que desee en su lugar.
*   **Las líneas 47 y 48** llaman `**server.start()**`y `**server.wait_for_termination()**`para iniciar el microservicio y esperan hasta que se detenga. La única forma de detenerlo en este caso es escribir Ctrl+C en la terminal. En un entorno de producción, hay mejores formas de apagar, que veremos más adelante.

Sin cerrar la terminal que estaba usando para probar el cliente, abra una nueva terminal y ejecute el siguiente comando:

Esto ejecuta el microservicio Recomendaciones para que pueda probar el cliente con algunos datos reales. Ahora regrese a la terminal que estaba usando para probar el cliente para que pueda crear el código auxiliar del canal. Si dejó su consola abierta, puede omitir las importaciones, pero se repiten aquí como un repaso:

![](https://cdn-images-1.medium.com/max/800/1*8bYwadhbrREq8FGEU2VWBg.png)

Ahora que tiene un objeto de cliente, puede realizar una solicitud:

![](https://cdn-images-1.medium.com/max/800/1*Z3enmL83IFZT9RPCO5EoKw.png)

¡Funciona! Hiciste una solicitud RPC a tu microservicio y obtuviste una respuesta. Tenga en cuenta que el resultado que ve puede ser diferente porque las recomendaciones se eligen al azar.

Ahora que tiene el servidor implementado, puede implementar el microservicio Marketplace y hacer que llame al microservicio Recomendaciones. Puede cerrar su consola de Python ahora si lo desea, pero deje el microservicio Recomendaciones en ejecución.

### Unir su Trabajo

Cree un nuevo `marketplace/`directorio y coloque un `marketplace.py`archivo en él para su microservicio Marketplace. Su árbol de directorios ahora debería verse así:

![](https://cdn-images-1.medium.com/max/800/1*8sT85wVOr0CnZ3aG6E9BEg.png)

Tenga en cuenta el nuevo `**marketplace/**`directorio para su código de microservicio `**requirements.txt**`, y una página de inicio. Todo se describirá a continuación. Puede crear archivos vacíos para ellos por ahora y completarlos más tarde.

Puede comenzar con el código de microservicio. El microservicio Marketplace será una aplicación Flask para mostrar una página web al usuario. Llamará al microservicio Recomendaciones para obtener recomendaciones de libros para mostrar en la página.

Abra el archivo`**marketplace/marketplace.py**` y agregue lo siguiente:

Configura Flask, crea un cliente gRPC y agrega una función para representar la página de inicio. Aquí hay un desglose:

*   **La línea 10** crea una aplicación Flask para representar una página web para el usuario.
*   **Las líneas 12 a 16** crean su canal y código auxiliar de gRPC.
*   **Las líneas 20 a 30** se crean `**render_homepage()**`para ser llamadas cuando el usuario visita la página de inicio de su aplicación. Devuelve una página HTML cargada desde una plantilla, con tres recomendaciones de productos de ciencia ficción.

> **Nota:** En este ejemplo, crea el canal gRPC y el código auxiliar como globales . Por lo general, los globales están prohibidos, pero en este caso se justifica una excepción.

> El canal gRPC mantiene una conexión persistente con el servidor para evitar la sobrecarga de tener que conectarse repetidamente. Puede manejar muchas solicitudes simultáneas y restablecerá las conexiones caídas. Sin embargo, si crea un nuevo canal antes de cada solicitud, Python lo recolectará basura y no obtendrá la mayoría de los beneficios de una conexión persistente.

> Desea que el canal permanezca abierto para que no tenga que volver a conectarse al microservicio de recomendaciones para cada solicitud. Podría ocultar el canal dentro de otro módulo, pero dado que solo tiene un archivo en este caso, puede simplificar las cosas usando globales.

Abra el archivo `**homepage.html**` en su directio`**marketplace/templates**/` y agregue el siguiente HTML:

![](https://cdn-images-1.medium.com/max/800/1*We3cRXpga7HbbouHPlnD7Q.png)

Esta es solo una página de inicio de demostración. Debería mostrar una lista de recomendaciones de productos cuando haya terminado.

Para ejecutar este código, necesitará las siguientes dependencias, que puede agregar a `marketplace/requirements.txt`:

Los microservicios de Recomendaciones y Marketplace tendrán cada uno su propio `**requirements.txt**`, pero para mayor comodidad en este tutorial, puede usar el mismo entorno virtual para ambos. Ejecute lo siguiente para actualizar su entorno virtual:

Ahora que ha instalado las dependencias, también necesita generar código para sus protobufs en el `**marketplace/directory**`. Para hacer eso, ejecute lo siguiente en una consola:

Este es el mismo comando que ejecutó antes, así que no hay nada nuevo aquí. Puede parecer extraño tener los mismos archivos en los directorios `marketplace/`y `recommendations/`, pero más adelante verá cómo generarlos automáticamente como parte de una implementación. Por lo general, no los almacenaría en un sistema de control de versiones como Git.

Para ejecutar su microservicio Marketplace, ingrese lo siguiente en su consola:

Ahora debería tener los microservicios de Recomendaciones y Marketplace ejecutándose en dos consolas separadas. Si cierra el microservicio Recomendaciones, reinícielo en otra consola con lo siguiente:

Esto ejecuta su aplicación Flask, que se ejecuta de forma predeterminada en el puerto `5000`. Continúe, ábralo en su navegador y compruébelo:

¡Ahora tiene dos microservicios hablando entre sí! Pero todavía están solo en su máquina de desarrollo. A continuación, aprenderá a introducirlos en un entorno de producción.

Puede detener sus microservicios de Python escribiendo Ctrl+C en la terminal donde se están ejecutando. A continuación , los ejecutará en Docker , que es como se ejecutarán en un entorno de producción.

### Microservicios de Python listos para producción

En este punto, tiene una arquitectura de microservicio de Python ejecutándose en su máquina de desarrollo, lo cual es excelente para realizar pruebas. En esta sección, lo hará funcionar en la nube.

* * *

### Docker

**Docker** es una tecnología asombrosa que le permite aislar un grupo de procesos de otros procesos en la misma máquina. Puede tener dos o más grupos de procesos con sus propios sistemas de archivos, puertos de red, etc. Puede pensar en él como un entorno virtual de Python, pero para todo el sistema y más seguro.

Docker es perfecto para implementar un microservicio de Python porque puede empaquetar todas las dependencias y ejecutar el microservicio en un entorno aislado. Cuando implementa su microservicio en la nube, puede ejecutarse en la misma máquina que otros microservicios sin que se molesten unos a otros. Esto permite una mejor utilización de los recursos.

Este tutorial no profundizará en Docker porque se necesitaría un libro completo para cubrirlo. En cambio, simplemente se configurará con los conceptos básicos que necesita para implementar sus microservicios de Python en la nube. Para obtener más información sobre Docker, puede consultar los tutoriales de Python Docker .

Antes de comenzar, si desea realizar un seguimiento en su máquina, asegúrese de tener Docker instalado. Puedes descargarlo desde el [sitio oficial](https://docs.docker.com/get-docker/) .

**Creará dos imágenes** de Docker , una para el microservicio Marketplace y otra para el microservicio Recomendaciones. Una imagen es básicamente un sistema de archivos más algunos metadatos. En esencia, cada uno de sus microservicios tendrá un entorno mini Linux para sí mismo. Puede escribir archivos sin afectar el sistema de archivos real y abrir puertos sin entrar en conflicto con otros procesos.

Para crear sus imágenes, debe definir un archivo `Dockerfile`. Siempre comienzas con una **imagen base** que contiene algunas cosas básicas. En este caso, su imagen base incluirá un intérprete de Python. Luego, copiará los archivos de su máquina de desarrollo a su imagen de Docker. También puede ejecutar comandos dentro de la imagen de Docker. Esto es útil para instalar dependencias.

#### RecomendationsDockerFile

Comenzará creando la imagen de Docker del microservicio Recomendaciones. Crea `**recommendations/Dockerfile**`y agrega lo siguiente:

Aquí hay un tutorial línea por línea:

*   **La línea 1** inicializa su imagen con un entorno Linux básico más la última versión de Python. En este punto, su imagen tiene un diseño de sistema de archivos típico de Linux. Si tuviera que mirar dentro, tendría `**/bin**`**,** `**/home**`y todos los archivos básicos que esperaría.
*   **La línea 3** crea un nuevo directorio en `**/service**`para contener su código de microservicio.
*   **Las líneas 4 y 5** copian los directorios `**protobufs/**`y en .`**recommendations//service**`
*   **La línea 6** le da a Docker un directorio de trabajo`**WORKDIR** **/service/recommendations**` , que es como hacer una `cd`imagen dentro de la imagen. Cualquier ruta que proporcione a Docker será relativa a esta ubicación, y cuando ejecute un comando, se ejecutará en este directorio.
*   **La linea 7 ocupa pip** para evitar advertencias sobre versiones anteriores.
*   **La línea 8** le dice a Docker que se ejecute `**pip install -r requirements.txt**`dentro de la imagen. Esto agregará todos los archivos `**grpcio-tools**`y cualquier otro paquete que pueda agregar a la imagen. Tenga en cuenta que no está utilizando un entorno virtual porque no es necesario. Lo único que se ejecutará en esta imagen será su microservicio, por lo que no necesita aislar más su entorno.
*   **La línea 9** ejecuta el comando`**python -m grpc_tools.protoc**` para generar los archivos Python desde el archivo protobuf. Su directorio `**/service**`dentro de la imagen ahora se ve así:

![](https://cdn-images-1.medium.com/max/800/1*9JqsVclYoqQUP2TPGrcV4A.png)

*   **La línea 12** le dice a Docker que va a ejecutar un microservicio en el puerto `50051`y desea exponerlo fuera de la imagen.
*   **La línea 13** le dice a Docker cómo ejecutar su microservicio.

Ahora puede generar una imagen de Docker desde su archivo `Dockerfile`. Ejecute el siguiente comando desde el directorio que contiene todo su código, no dentro del directorio`**recommendations/**`, sino un nivel por encima de eso:

Esto creará la imagen de Docker para el microservicio de Recomendaciones. Debería ver algún resultado a medida que Docker crea la imagen. Ahora puedes ejecutarlo:

No verá ningún resultado, pero su microservicio de recomendaciones ahora se está ejecutando dentro de un contenedor de Docker. Cuando ejecuta una imagen, obtiene un contenedor. Puede ejecutar la imagen varias veces para obtener varios contenedores, pero todavía hay una sola imagen.

La opción `**-p 127.0.0.1:50051:50051/tcp**` le dice a Docker que reenvíe [las conexiones TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) en el puerto `50051`de su máquina al puerto `50051`dentro del contenedor. Esto le brinda la flexibilidad de reenviar diferentes puertos en su máquina.

Por ejemplo, si estuviera ejecutando dos contenedores que ejecutaran microservicios de Python en el puerto `50051`, entonces necesitaría usar dos puertos diferentes en su máquina host. Esto se debe a que dos procesos no pueden abrir el mismo puerto al mismo tiempo a menos que estén en contenedores separados.

#### Market`Dockerfile`

A continuación, creará su imagen de Marketplace. Crea `**marketplace/Dockerfile**`y agrega lo siguiente:

Esto es muy similar a las Recomendaciones `**Dockerfile**`, con algunas diferencias:

*   **La línea 13 se** usa `**ENV FLASK_APP=marketplace.py**`para establecer la variable de entorno `**FLASK_APP**`dentro de la imagen. Flask necesita esto para funcionar.
*   **La línea 14 se** suma `**--host=0.0.0.0**`al comando`**flask run**`. Si no agrega esto, Flask solo aceptará conexiones de localhost.

Pero espera, ¿no sigues ejecutando todo `localhost`? Bueno en realidad no. Cuando ejecuta un contenedor Docker, está aislado de su máquina host de forma predeterminada. `localhost`dentro del contenedor es diferente del `localhost`exterior, incluso en la misma máquina. Es por eso que debe decirle a Flask que acepte conexiones desde cualquier lugar.

Continúe y abra una nueva terminal. Puede crear su imagen de Marketplace con este comando:

Eso crea la imagen del MarketPlaces. Ahora puede ejecutarlo en un contenedor con este comando:

No verá ningún resultado, pero su microservicio Marketplace ahora se está ejecutando.

### Redes

Desafortunadamente, a pesar de que tanto sus contenedores de Recomendaciones como los de Marketplace se están ejecutando, si ahora accede a `**http://localhost:5000**`en su navegador, obtendrá un error. Puede conectarse a su microservicio Marketplace, pero ya no puede conectarse al microservicio Recomendaciones. Los contenedores están aislados.

Afortunadamente, Docker proporciona una solución a esto. Puede crear una red virtual y agregarle ambos contenedores. También puede darles nombres DNS para que puedan encontrarse entre sí.

A continuación, creará una red llamada `**microservices**`y ejecutará el microservicio Recomendaciones en ella. También le dará el nombre DNS `recommendations`. Primero, detenga los contenedores que se están ejecutando actualmente con Ctrl+C . Luego ejecuta lo siguiente:

El comando`**docker network create**` crea la red. Solo necesita hacer esto una vez y luego puede conectar varios contenedores a él. Luego agrega `**‑‑network microservices**`el comando`docker run` para iniciar el contenedor en esta red. La `**‑‑name recommendations**`opción le da el nombre DNS `**recommendation**s`.

Antes de reiniciar el contenedor del mercado, debe cambiar el código. Esto se debe a que codificaste `**localhost:50051**`en esta línea de `**marketplace.py**`:

Ahora desea conectarse en `**recommendations:50051**`su lugar. Pero en lugar de codificarlo nuevamente, puede cargarlo desde una variable de entorno. Reemplace la línea anterior con las dos siguientes:

Esto carga el nombre de host del microservicio de Recomendaciones en la variable de entorno `RECOMMENDATIONS_HOST`. Si no está configurado, puede establecerlo de forma predeterminada en `localhost`. Esto le permite ejecutar el mismo código directamente en su máquina o dentro de un contenedor.

Deberá reconstruir la imagen del mercado ya que cambió el código. Luego intente ejecutarlo en su red:

Esto es similar a cómo lo ejecutó antes, pero con dos diferencias:

1.  Agregó la opción `**‑‑network microservices**` debe ejecutarlo en la misma red que su microservicio de Recomendaciones. No agregó una opción`**‑‑name**` porque, a diferencia del microservicio Recomendaciones, nada necesita buscar la dirección IP del microservicio Marketplace. El reenvío de puertos proporcionado por `**-p 127.0.0.1:5000:5000/tcp**`es suficiente y no necesita un nombre DNS.
2.  Agregó `**-e RECOMMENDATIONS_HOST=recommendations**`, que establece la variable de entorno dentro del contenedor. Así es como pasa el nombre de host del microservicio Recomendaciones a su código.

En este punto, puede probar `**localhost:5000**`en su navegador una vez más y debería cargarse correctamente. ¡Hurra!

### Docker Compose

Es sorprendente que puedas hacer todo esto con Docker, pero es un poco tedioso. Sería bueno si hubiera un solo comando que pudiera ejecutar para iniciar todos sus contenedores. ¡Por suerte lo hay! Se llama `docker-compose`y es parte del proyecto Docker.

En lugar de ejecutar un montón de comandos para crear imágenes, crear redes y ejecutar contenedores, puede declarar sus microservicios en un archivo YAML:

![](https://cdn-images-1.medium.com/max/800/1*6zJJvkqp9ty0qLTvTDLwWg.png)

Por lo general, coloca esto en un archivo llamado `docker-compose.yaml`. Coloque esto en la raíz de su proyecto:

![](https://cdn-images-1.medium.com/max/800/1*uZVrGQhKQ1NVokscVc2FiQ.png)

Este tutorial no entrará en muchos detalles sobre la sintaxis ya que está bien documentado en otros lugares. Realmente hace lo mismo que ya has hecho manualmente. Sin embargo, ahora solo necesita ejecutar un solo comando para abrir su red y contenedores:

Una vez que esto se esté ejecutando, debería poder volver a abrir `**localhost:5000**`en su navegador, y todo debería funcionar perfectamente.

Tenga en cuenta que no necesita exponer el puerto`**50051**`en el contenedor `**recommendations**`contenedor cuando está en la misma red que el microservicio de Marketplace, por lo que puede descartar esa parte.

**Nota:** Al desarrollar con `**docker-compose**`, si cambia alguno de los archivos, ejecute `**docker-compose build**`para reconstruir las imágenes. Si ejecuta `**docker-compose up**`, usará las imágenes antiguas, lo que puede resultar confuso.

Si desea detenerse `**docker-compose**`para realizar algunas ediciones antes de subir, presione Ctrl+C .

### Pruebas

Para realizar pruebas unitarias de su microservicio de Python, puede crear una instancia de su clase de microservicio y llamar a sus métodos. Aquí hay una prueba de ejemplo básica para su implementación`**RecommendationService**`:

![](https://cdn-images-1.medium.com/max/800/1*oGpTJkbj79RNp0Nojrmo5w.png)

Aquí hay un desglose:

*   **La línea 6** instancia la clase como cualquier otra y llama a métodos en ella.
*   **La línea 11** pasa `[**None**](https://realpython.com/null-in-python/)`**por** el contexto, que funciona mientras no lo uses. Si desea probar las rutas de código que usan el contexto, puede simularlo.

Las pruebas de integración implican la ejecución de pruebas automatizadas con múltiples microservicios no simulados. Así que es un poco más complicado, pero no es demasiado difícil. Añadir un archivo`**marketplace/marketplace_integration_test.py**`:

![](https://cdn-images-1.medium.com/max/800/1*J-XlJOIltoe8qycqLJWfoQ.png)

Esto realiza una solicitud HTTP a la URL de la página de inicio y comprueba que devuelve algo de HTML con un título y tres `<li>`elementos de viñetas. Esta no es la mejor prueba ya que no sería muy fácil de mantener si la página tuviera más, pero demuestra un punto. Esta prueba pasará solo si el microservicio de Recomendaciones está en funcionamiento. Incluso podría probar el microservicio Marketplace al hacerle una solicitud HTTP.

Entonces, ¿cómo se ejecuta este tipo de prueba? Afortunadamente, la buena gente de Docker también ha proporcionado una forma de hacerlo. Una vez que esté ejecutando sus microservicios de Python con `docker-compose`, puede ejecutar comandos dentro de ellos con `**docker-compose exec**`. Entonces, si desea ejecutar su prueba de integración dentro del contenedor `**marketplace**`, puede ejecutar el siguiente comando:

Esto ejecuta el comando`**pytest**`dentro del `marketplace`contenedor. Debido a que su prueba de integración se conecta a `localhost`, debe ejecutarla en el mismo contenedor que el microservicio.

### Implementación en Kubernetes

¡Estupendo! Ahora tiene un par de microservicios ejecutándose en su computadora. Puede abrirlos rápidamente y ejecutar pruebas de integración en ambos. Pero necesita llevarlos a un entorno de producción. Para ello, utilizará [Kubernetes](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/) .

Este tutorial no profundizará en Kubernetes porque es un tema amplio, y la documentación y los tutoriales completos están disponibles en otros lugares. Sin embargo, en esta sección encontrará los conceptos básicos para llevar sus microservicios de Python a un clúster de Kubernetes en la nube.

**Nota:** Para implementar imágenes de Docker en un proveedor de la nube, debe enviar sus imágenes de Docker a un **registro de imágenes** como [Docker Hub](https://hub.docker.com/) .

Los siguientes ejemplos usan las imágenes de este tutorial, que ya se enviaron a Docker Hub. Si desea cambiarlos o si desea crear sus propios microservicios, deberá crear una cuenta en Docker Hub para poder enviar imágenes. También puede crear un registro privado si lo desea, o usar otro registro, como [el ECR de Amazon](https://aws.amazon.com/ecr/) .

* * *

#### Configuraciones de Kubernetes

Puede comenzar con una configuración mínima de Kubernetes en `**kubernetes.yaml**`. El archivo completo es un poco largo, pero consta de cuatro secciones distintas, por lo que las verá una por una:

![](https://cdn-images-1.medium.com/max/800/1*uCPQAil6pUq1xJGoOlVsqw.png)

Esto define una **implementación** para el microservicio Marketplace. Una [implementación](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) le dice a Kubernetes cómo implementar su código. Kubernetes necesita cuatro piezas principales de información:

1.  Qué imagen de Docker implementar.
2.  Cuántas instancias implementar.
3.  Qué variables de entorno necesitan los microservicios.
4.  Cómo identificar su microservicio.

Puede decirle a Kubernetes cómo identificar su microservicio mediante el uso de **etiquetas** . Aunque no se muestra aquí, también puede decirle a Kubernetes qué memoria y recursos de CPU necesita su microservicio. Puedes encontrar muchas otras opciones en la [documentación de Kubernetes](https://kubernetes.io/docs/home/) .

Esto es lo que está sucediendo en el código:

*   **La línea 9** le dice a Kubernetes cuántos pods crear para su microservicio. Un **pod** es básicamente un entorno de ejecución aislado, como una máquina virtual liviana implementada como un conjunto de contenedores. La configuración `**replicas: 3**`le brinda tres pods para cada microservicio. Tener más de uno permite la redundancia, habilita actualizaciones continuas sin tiempo de inactividad, se escala a medida que necesita más máquinas y tiene conmutación por error en caso de que una falle.
*   **La línea 20** es la imagen de Docker para implementar. Debe utilizar una imagen de Docker en un registro de imágenes. Para obtener su imagen allí, debe enviarla al registro de imágenes. Hay instrucciones sobre cómo hacer esto cuando inicia sesión en su cuenta en Docker Hub.

El microservicio desplegado para las recomendaciones es muy similar:

![](https://cdn-images-1.medium.com/max/800/1*WiRlR74j3dp6XQCPwa8UCw.png)

La principal diferencia es que uno usa el nombre `**marketplace**`y el otro usa `**recommendations**`. También establece la variable de entorno`**RECOMMENDATIONS_HOST**` en la `marketplace`implementación, pero no en la implementación`**recommendations**`.

A continuación, defina un **servicio** para el microservicio de recomendaciones. Mientras que una implementación le dice a Kubernetes cómo implementar su código, un servicio le dice cómo enrutar las solicitudes. Para evitar confusiones con el término _servicio_ que se usa comúnmente para hablar de microservicios, verá la palabra en mayúscula cuando se usa en referencia a un servicio de Kubernetes.

Aquí está la definición de servicio para `**recommendations**`:

![](https://cdn-images-1.medium.com/max/800/1*ddyhBZtvHAuqp44gS-QSLA.png)

Esto es lo que sucede en la definición:

*   **Línea 48:** cuando crea un servicio, Kubernetes esencialmente crea un nombre de host DNS con el mismo `**name**`dentro del clúster. Entonces, cualquier microservicio en su clúster puede enviar una solicitud a `**recommendations**`. Kubernetes reenviará esta solicitud a uno de los pods en su implementación.
*   **Línea 51:** Esta línea conecta el Servicio con el Despliegue. Le dice a Kubernetes que reenvíe las solicitudes a `**recommendations**`uno de los pods en la `**recommendations**`implementación. Esto debe coincidir con uno de los pares clave-valor en el `labels`de la implementación.

El servicio`**marketplace**` es similar:

Aparte de los nombres y puertos, solo hay una diferencia. Notarás que `**type**: **LoadBalance**r` aparece solo en el servicio`**marketplace**`. Esto se debe a que`**marketplace**` debe ser accesible desde fuera del clúster de Kubernetes, mientras que `**recommendations**`solo debe ser accesible dentro del clúster.

> **Nota:** Es más común usar un servicio`**Ingress**` que un Servicio`**LoadBalancer**` en un clúster grande con muchos microservicios. Si está desarrollando microservicios en un entorno corporativo, probablemente ese sea el camino a seguir.

Consulte el artículo de Sandeep Dinesh [¿Kubernetes NodePort vs LoadBalancer vs Ingress? ¿Cuándo debo usar qué?](https://medium.com/google-cloud/kubernetes-nodeport-vs-loadbalancer-vs-ingress-when-should-i-use-what-922f010849e0) para más información.

Puede ver el archivo completo expandiendo el cuadro a continuación:

![](https://cdn-images-1.medium.com/max/800/1*w4g3xUtYvqiZre2G8lDLQA.png)

Ahora que tiene una configuración de Kubernetes, ¡su próximo paso es implementarlo!

#### Implementación de Kubernetes

Por lo general, implementa Kubernetes con un proveedor de la nube. Hay muchos proveedores de nube entre los que puede elegir, incluidos [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine) , [Amazon Elastic Kubernetes Service (EKS)](https://aws.amazon.com/eks/) y [DigitalOcean](https://www.digitalocean.com/products/) .

Si está implementando microservicios en su empresa, es probable que su infraestructura dicte el proveedor de la nube que utilice. Para esta demostración, ejecutará Kubernetes localmente. Casi todo será lo mismo que usar un proveedor de nube.

Si está ejecutando Docker Desktop en Mac o Windows, viene con un clúster local de Kubernetes que puede habilitar en el menú Preferencias. Abra Preferencias haciendo clic en el ícono Docker en la bandeja del sistema, luego busque la sección Kubernetes y actívela:

![](https://cdn-images-1.medium.com/max/800/0*g_PQ_S2bldXsDjBp.png)

Si está ejecutando Linux, puede instalar [minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) . Siga las instrucciones en la [página de inicio](https://minikube.sigs.k8s.io/docs/start/) para configurarlo.

Una vez que haya creado su clúster, puede implementar sus microservicios con el siguiente comando:

Si desea intentar implementar Kubernetes en la nube, DigitalOcean es el menos complicado de configurar y tiene un modelo de precios simple. Puede [registrarse](https://m.do.co/c/a2fcb9500d34) para obtener una cuenta y luego [crear un clúster de Kubernetes](https://cloud.digitalocean.com/kubernetes/clusters/new) con unos pocos clics. Si cambia los valores predeterminados para usar solo un nodo y las opciones más baratas, entonces, en el momento de escribir este artículo, el costo era de solo $ 0.015 por hora.

Siga las instrucciones que proporciona DigitalOcean para descargar un archivo de configuración `**kubectl**`y ejecutar el comando anterior. Luego puede hacer clic en el botón _Kubernetes_ en DigitalOcean para ver sus Servicios ejecutándose allí. DigitalOcean asignará una dirección IP a su servicio`**LoadBalancer**`, para que pueda visitar su aplicación Marketplace copiando esa dirección IP en su navegador.

**Importante:** cuando haya terminado, **destruya su clúster para que no se le siga cobrando por él**. También debe ir a la pestaña Redes y destruir el **Load Balancer**, que está separado del clúster pero también acumula un cargo.

Eso concluye la implementación en Kubernetes. A continuación, aprenderá a monitorear sus microservicios de Python.

### Supervisión de microservicios de Python con interceptores

Una vez que tenga algunos microservicios en la nube, querrá tener visibilidad de cómo les está yendo. Algunas cosas que desea monitorear incluyen:

*   Cuántas solicitudes recibe cada microservicio
*   Cuántas solicitudes dan como resultado un error y qué tipo de error generan
*   La latencia en cada solicitud.
*   Registros de excepciones para que pueda depurar más tarde

Aprenderá acerca de algunas maneras de hacer esto en las secciones a continuación.

### ¿Por qué no los decoradores?

Una forma de hacerlo, y la más natural para los desarrolladores de Python, es agregar un decorador a cada punto final de microservicio. Sin embargo, en este caso, el uso de decoradores tiene varias desventajas:

*   Los desarrolladores de nuevos microservicios deben recordar agregarlos a cada método.
*   Si tiene mucho monitoreo, entonces podría terminar con una pila de decoradores.
*   Si tiene una pila de decoradores, los desarrolladores pueden apilarlos en el orden incorrecto.
*   Podría consolidar todo su monitoreo en un solo decorador, pero luego podría complicarse.

Esta pila de decoradores es lo que quieres evitar:

![](https://cdn-images-1.medium.com/max/800/1*TV-2meL2sPPEz3F4om9YWQ.png)

Tener esta pila de decoradores en cada método es feo y repetitivo, y viola el [principio de programación DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) : no te repitas. Los decoradores también son un desafío para escribir, especialmente si aceptan argumentos.

* * *

### Interceptores

Hay un enfoque alternativo para usar decoradores que seguirá en este tutorial: gRPC tiene un concepto de **interceptor** que proporciona una funcionalidad similar a un decorador pero de una manera más limpia.

#### Implementación de interceptores

Desafortunadamente, la implementación de Python de gRPC tiene una [API bastante compleja para los interceptores](https://grpc.github.io/grpc/python/grpc.html#service-side-interceptor) . Esto se debe a que es [increíblemente flexible](https://github.com/grpc/proposal/blob/master/L13-python-interceptors.md#server-side-implementation) . Sin embargo, hay un paquete `[**grpc-interceptor**](https://pypi.org/project/grpc-interceptor/)`para simplificarlos.

Agréguelo a su `**recommendations/requirements.txt**`junto con `[**pytest**](https://realpython.com/pytest-python-testing/)`, que usará en breve:

Luego actualice su entorno virtual:

Ahora puede crear un interceptor con el siguiente código. No necesita agregar esto a su proyecto, ya que es solo un ejemplo:

![](https://cdn-images-1.medium.com/max/800/1*MamPDNOsGHE-wFRALAZt2A.png)

Esto llamará `log_error()`cada vez que se llame una excepción no controlada en su microservicio. Puede implementar esto, por ejemplo, registrando excepciones en [Sentry](https://sentry.io/features/stacktrace/) para recibir alertas e información de depuración cuando ocurran.

Para usar este interceptor, lo pasarías `grpc.server()`así:

![](https://cdn-images-1.medium.com/max/800/1*x0TC85PJ4pc2KTKbwc9mxQ.png)

Con este código, cada solicitud y respuesta de su microservicio de Python pasará por su interceptor, por lo que puede contar cuántas solicitudes y errores recibe.

`**También grpc-interceptor**` proporciona una excepción para cada código de estado de gRPC y un interceptor llamado `**ExceptionToStatusInterceptor**`. Si el microservicio genera una de las excepciones, `**ExceptionToStatusInterceptor**`establecerá el código de estado de gRPC. Esto le permite simplificar su microservicio al realizar los cambios resaltados a continuación para `**recommendations/recommendations.py**`:

![](https://cdn-images-1.medium.com/max/800/1*iqpVcU_z0H3BCYqDQmndsg.png)

Esto es más legible. También puede generar la excepción de muchas funciones en la pila de llamadas en lugar de tener que pasar `context`para poder llamar `context.abort()`. Tampoco es necesario que detecte la excepción usted mismo en su microservicio: el interceptor la detectará por usted.

* * *

#### Interceptores de prueba

Si desea escribir sus propios interceptores, debe probarlos. Pero es peligroso burlarse demasiado al probar algo como los interceptores. Por ejemplo, podría llamar `.intercept()`a la prueba y asegurarse de que devuelva lo que desea, pero esto no probaría entradas realistas o que incluso se llamen.

Para mejorar las pruebas, puede ejecutar un microservicio gRPC con interceptores. El `grpc-interceptor`paquete proporciona un marco para hacerlo. A continuación, escribirá una prueba para el `ErrorLogger`interceptor. Este es solo un ejemplo, por lo que no necesita agregarlo a su proyecto. Si tuviera que agregarlo, lo agregaría a un archivo de prueba.

Así es como podrías escribir una prueba para un interceptor:

![](https://cdn-images-1.medium.com/max/800/1*4For6DdIx8ZQtkb2yG8y0w.png)

Aquí hay un recorrido:

*   Subclase de las **líneas 3 a 8**`**ErrorLogger**` para simular `log_error()`. En realidad, no desea que ocurra el efecto secundario del registro. Sólo quiere asegurarse de que se llame.
*   **Las líneas 15 a 18** usan el administrador de contexto`dummy_client()` para crear un cliente que está conectado a un microservicio gRPC real. Envía `DummyRequest`al microservicio y responde con `DummyResponse`. De forma predeterminada, el `input`de `DummyRequest`se repite en el `output`de `DummyResponse`. Sin embargo, puede pasar `dummy_client()`un diccionario de casos especiales, y si `input`coincide con uno de ellos, llamará a una función que proporcione y devolverá el resultado.
*   **Líneas 21 a 23:** Pruebas que `log_error()`se llama con la excepción esperada. `raises()`devuelve otra función que genera la excepción proporcionada. Se establece `input`en `error`para que el microservicio genere una excepción.

Una alternativa a los interceptores en algunos casos es usar una **malla de servicio** . Enviará todas las solicitudes y respuestas de microservicios a través de un proxy, por lo que el proxy puede registrar automáticamente cosas como el volumen de solicitudes y el recuento de errores. Para obtener un registro de errores preciso, su microservicio aún necesita establecer los códigos de estado correctamente. Entonces, en algunos casos, sus interceptores pueden complementar una red de servicios. Una malla de servicio popular es [Istio](https://istio.io/latest/docs/concepts/observability/) .

### Mejores prácticas

Ahora tiene una configuración de microservicio Python en funcionamiento. Puede crear microservicios, probarlos juntos, implementarlos en Kubernetes y monitorearlos con interceptores. Puede comenzar a crear microservicios en este punto. Sin embargo, debe tener en cuenta algunas prácticas recomendadas, por lo que aprenderá algunas en esta sección.

* * *

### Organización Protobuf

En general, debe mantener sus definiciones de protobuf separadas de la implementación de su microservicio. Los clientes se pueden escribir en casi cualquier idioma, y ​​si agrupa sus archivos protobuf en una Python-wheels o algo similar, entonces si alguien quiere un cliente Ruby o Go, será difícil para ellos obtener los archivos protobuf.

Incluso si todo su código es Python, ¿por qué alguien debería instalar el paquete para el microservicio solo para escribir un cliente para él?

Una solución es poner sus archivos protobuf en un repositorio Git separado del código del microservicio. Muchas empresas colocan _todos_ los archivos protobuf para _todos los_ microservicios en un solo repositorio. Esto hace que sea más fácil encontrar todos los microservicios, compartir estructuras protobuf comunes entre ellos y crear herramientas útiles.

Si elige almacenar sus archivos protobuf en un solo repositorio, debe tener cuidado de que el repositorio permanezca organizado y definitivamente debe evitar las dependencias cíclicas entre los microservicios de Python.

* * *

### Versión de Protobuf

El control de versiones de API puede ser difícil. La razón principal es que si cambia una API y actualiza el microservicio, es posible que aún haya clientes que usen la API anterior. Esto es especialmente cierto cuando los clientes viven en las máquinas de los clientes, como clientes móviles o software de escritorio.

No puedes obligar fácilmente a la gente a actualizar. Incluso si pudiera, la latencia de la red provoca condiciones de carrera y es probable que su microservicio reciba solicitudes utilizando la API anterior. Las buenas API deben ser compatibles con versiones anteriores o estar versionadas.

Para lograr la **compatibilidad con versiones anteriores** , los microservicios de Python que usan protobufs versión 3 aceptarán solicitudes con campos faltantes. Si desea agregar un nuevo campo, está bien. Puede implementar el microservicio primero y seguirá aceptando solicitudes de la API anterior sin el nuevo campo. El microservicio solo necesita manejar eso con gracia.

Si desea realizar cambios más drásticos, deberá **actualizar** su API. Protobufs le permite colocar su API en un espacio de nombres de paquete, que puede incluir un número de versión. Si necesita cambiar drásticamente la API, puede crear una nueva versión de la misma. El microservicio también puede seguir aceptando la versión anterior. Esto le permite implementar una nueva versión de API mientras elimina gradualmente una versión anterior con el tiempo.

Si sigue estas convenciones, puede evitar realizar cambios importantes. Dentro de una empresa, las personas a veces sienten que hacer cambios importantes en una API es aceptable porque controlan a todos los clientes. Depende de usted decidirlo, pero tenga en cuenta que realizar cambios importantes requiere implementaciones coordinadas de clientes y microservicios, y complica las reversiones.

Esto puede estar bien muy temprano en el ciclo de vida de un microservicio, cuando no hay clientes de producción. Sin embargo, es bueno adquirir el hábito de realizar solo cambios continuos una vez que su microservicio sea fundamental para la salud de su empresa.

* * *

### Linter Protobuf

Una forma de asegurarse de no realizar cambios importantes en sus protobufs es usar un **linter** . Uno popular es `[buf](https://buf.build/docs/introduction)`. Puede configurar esto como parte de su [sistema de CI](https://en.wikipedia.org/wiki/Continuous_integration) para que pueda verificar cambios importantes en las solicitudes de extracción.

* * *

### Comprobación de tipo de código generado por Protobuf

Mypy es un proyecto para verificar estáticamente el tipo de código de Python. Si es nuevo en la comprobación de tipos estáticos en Python, puede leer [Comprobación de tipos de Python](https://realpython.com/python-type-checking/#static-type-checking) para aprender todo al respecto.

El código generado por `protoc`es un poco retorcido y no tiene anotaciones de tipo. Si intenta escribir, verifíquelo con Mypy, obtendrá muchos errores y no detectará errores reales como nombres de campo mal escritos. Afortunadamente, la buena gente de Dropbox escribió un [complemento](https://github.com/dropbox/mypy-protobuf) para que el `protoc`compilador genere códigos auxiliares. Estos no deben confundirse con los apéndices de gRPC.

Para usarlo, puede instalar el `mypy-protobuf`paquete y luego actualizar el comando para generar una salida protobuf. Tenga en cuenta la nueva opción`‑‑mypy_out`:

![](https://cdn-images-1.medium.com/max/800/1*kfk3aXf09VZnrhz17Pi9bg.png)

La mayoría de los errores de Mypy deberían desaparecer. Aún puede recibir un error sobre el paquete`grpc` que no tiene información de tipo. Puede instalar [stubs de tipo gRPC](https://pypi.org/project/grpc-stubs/) no oficiales o agregar lo siguiente a su configuración de Mypy:

![](https://cdn-images-1.medium.com/max/800/1*qpa0OGmjSgmeF3AGRCf5Sg.png)

Aún obtendrá la mayoría de los beneficios de la verificación de tipos, como la detección de campos mal escritos. Esto es realmente útil para detectar errores antes de que lleguen a producción.

* * *

### Apagar con gracia

Al ejecutar su microservicio en su máquina de desarrollo, puede presionar Ctrl+C para detenerlo. Esto hará que el intérprete de Python genere una `KeyboardInterrupt`excepción.

Cuando Kubernetes está ejecutando su microservicio y necesita detenerlo para implementar una actualización, enviará una señal a su microservicio. En concreto, enviará una señal `SIGTERM` y esperará treinta segundos. Si su microservicio no ha salido para entonces, enviará una señal`SIGKILL`.

Puede, y debe, capturar y manejar el correo electrónico `SIGTERM`para que pueda terminar de procesar las solicitudes actuales pero rechazar las nuevas. Puedes hacerlo poniendo el siguiente código en `serve()`:

![](https://cdn-images-1.medium.com/max/800/1*E0SJsCDOEcljGDbZS_gWgg.png)

Aquí hay un desglose:

*   Importaciones **de línea 1**`signal` , que le permiten capturar y manejar señales de Kubernetes o casi cualquier otro proceso.
*   **La línea 11** define una función para manejar `SIGTERM`. La función se llamará cuando Python reciba la señal`SIGTERM`, y Python le pasará dos argumentos. Sin embargo, no necesita los argumentos, así que utilícelos `*_`para ignorarlos a ambos.
*   **La línea 13** llama `server.stop(30)`para cerrar el servidor correctamente. Rechazará nuevas solicitudes y esperará unos `30`segundos hasta que se completen las solicitudes actuales. Regresa inmediatamente, pero devuelve un objeto`threading.Event`en el que puede esperar.
*   **La línea 14** espera en el objeto`Event`para que Python no se cierre prematuramente.
*   **La línea 17** registra a su controlador.

Cuando implementa una nueva versión de su microservicio, Kubernetes enviará señales para cerrar el microservicio existente. Manejarlos para que se cierren correctamente garantizará que no se elimine una solicitud.

### Canales de seguridad

Hasta ahora, ha estado usando canales gRPC no seguros. Esto significa algunas cosas:

1.  El cliente no puede confirmar que está enviando solicitudes al servidor previsto. Alguien podría crear un microservicio impostor e inyectarlo en algún lugar al que el cliente pueda enviar una solicitud. Por ejemplo, podrían inyectar el microservicio en un pod al que el equilibrador de carga enviaría solicitudes.
2.  El servidor no puede confirmar que el cliente le envíe solicitudes. Siempre que alguien pueda conectarse al servidor, puede enviarle solicitudes gRPC arbitrarias.
3.  El tráfico no está cifrado, por lo que cualquier nodo que enrute el tráfico también puede verlo.

Esta sección describirá cómo agregar la autenticación y el cifrado [TLS .](https://en.wikipedia.org/wiki/Transport_Layer_Security)

**Nota:** Esto no aborda la autenticación de usuarios, solo los procesos de microservicio.

Aprenderá dos formas de configurar TLS:

1.  La forma sencilla, en la que el cliente puede validar el servidor, pero el servidor no valida al cliente.
2.  La forma más compleja, con TLS mutuo, en el que el cliente y el servidor se validan entre sí.

En ambos casos, el tráfico está encriptado.

* * *

#### Conceptos básicos de TLS

Antes de sumergirse, aquí hay una breve descripción general de TLS: por lo general, un cliente valida un servidor. Por ejemplo, cuando visita Amazon.com, su navegador valida que es realmente Amazon.com y no un impostor. Para hacer esto, el cliente debe recibir algún tipo de garantía de un tercero confiable, algo así como confiar en una nueva persona solo si tiene un amigo en común que responda por ellos.

Con TLS, el cliente debe confiar en una **autoridad certificadora (CA)** . La CA firmará algo en poder del servidor para que el cliente pueda verificarlo. Esto es un poco como si un amigo mutuo firmara una nota y tú reconocieras su letra. Para obtener más información, consulte [Cómo funciona la seguridad en Internet: TLS, SSL y](https://opensource.com/article/19/11/internet-security-tls-ssl-certificate-authority) CA.

Su navegador confía implícitamente en algunas CA, que suelen ser empresas como GoDaddy, DigiCert o Verisign. Otras empresas, como Amazon, pagan a una CA para que les firme un certificado digital para que su navegador confíe en ellas. Por lo general, la CA verificaría que Amazon es propietario de Amazon.com antes de firmar su certificado. De esa forma, un impostor no tendría una firma en un certificado de Amazon.com y su navegador bloquearía el sitio.

Con los microservicios, realmente no puede pedirle a una CA que firme un certificado porque sus microservicios se ejecutan en máquinas internas. La CA probablemente estaría encantada de firmar un certificado y cobrarle, pero el punto es que no es práctico. En este caso, su empresa puede actuar como su propia CA. El cliente gRPC confiará en el servidor si tiene un certificado firmado por tu empresa o por ti si estás haciendo un proyecto personal.

* * *

#### Autenticación del servidor

El siguiente comando creará un certificado de CA que se puede usar para firmar el certificado de un servidor:

Esto generará dos archivos:

1.  `**ca.key**`es una clave privada.
2.  `**ca.pem**`es un certificado público.

A continuación, puede crear un certificado para su servidor y firmarlo con su certificado de CA:

Esto producirá tres nuevos archivos:

1.  `**server.key**`es la clave privada del servidor.
2.  `**server.csr**`es un archivo intermedio.
3.  `**server.pem**`es el certificado público del servidor.

> **Nota:** Estos comandos son solo para fines de ejemplo. Las claves privadas _no_ están encriptadas. Si desea generar certificados para su empresa, consulte a su equipo de seguridad. Es probable que tengan políticas para crear, almacenar y revocar certificados que debe seguir.

Puede agregar esto al microservicio Recomendaciones `Dockerfile`. Es muy difícil agregar secretos de manera segura a una imagen de Docker, pero hay una manera de hacerlo con las últimas versiones de Docker, que se muestra a continuación:

![](https://cdn-images-1.medium.com/max/800/1*d9ZhxQJDiCnMHG46IrDs-g.png)

Las nuevas líneas están resaltadas. Aquí hay una explicación:

*   **Se necesita la línea 1** para habilitar los secretos.
*   **Las líneas 2 y 3** muestran el comando sobre cómo crear la imagen de Docker.
*   **La línea 11** copia el certificado público de CA en la imagen.
*   **Las líneas 18 y 19** generan una nueva clave privada y certificado del servidor.
*   **Las líneas 20 a 22** cargan temporalmente la clave privada de CA para que pueda firmar el certificado del servidor con ella. Sin embargo, no se mantendrá en la imagen

> **Nota:** Para obtener más información sobre `**‑‑mount=type=secret**`, consulte la [documentación de Docker](https://docs.docker.com/develop/develop-images/build_enhancements/#new-docker-build-secret-information) . En el futuro, es posible que esta función se promocione a la versión estable, momento en el cual no necesitará incluir el `**syntax = docker/dockerfile:1.0-experimental**`comentario en el archivo `Dockerfile`.

> De acuerdo con la [política de control de versiones](https://github.com/moby/buildkit/issues/528) , la sintaxis experimental no desaparecerá, por lo que puede continuar usándola indefinidamente.

Su imagen ahora tendrá los siguientes archivos:

*   `ca.pem`
*   `server.csr`
*   `server.key`
*   `server.pem`

Ahora puede actualizar `serve()`como se resalta`recommendations.py`:

![](https://cdn-images-1.medium.com/max/800/1*EzhYAF6uT2pR8YFlTdwpMw.png)

Aquí están los cambios:

*   **Las líneas 7 a 10** cargan la clave privada y el certificado del servidor.
*   **Las líneas 12 y 13** ejecutan el servidor usando TLS. Ahora solo aceptará conexiones cifradas con TLS.

Deberá actualizar `**marketplace.py**`para cargar el certificado de CA. Solo necesita el certificado público en el cliente por ahora, como se destaca:

![](https://cdn-images-1.medium.com/max/800/1*CK2fvxhDzh_ySK7Ovtt2PQ.png)

También tendrá que agregar `COPY ca.pem /service/marketplace/`a Marketplace `Dockerfile`.

Ahora puede ejecutar el cliente y el servidor con cifrado, y el cliente validará el servidor. Para hacer que la ejecución de todo sea sencilla, puede usar `docker-compose`. Sin embargo, en el momento de escribir este artículo, `docker-compose` [no admitía compilar secretos](https://github.com/docker/compose/issues/6358) . Tendrá que crear las imágenes de Docker manualmente en lugar de hacerlo con `**docker-compose build**`.

Sin embargo, aún puede ejecutar `docker-compose up`. Actualice el `docker-compose.yaml`archivo para eliminar las secciones`build`:

![](https://cdn-images-1.medium.com/max/800/1*8H5RoOsXJVNXMgQzsHOevA.png)

Ahora está encriptando el tráfico y verificando que se está conectando al servidor correcto.

* * *

#### Autenticacion mutua

El servidor ahora demuestra que se puede confiar en él, pero el cliente no. Afortunadamente, TLS permite la verificación de ambos lados. Actualice Marketplace `Dockerfile`como se destaca:

![](https://cdn-images-1.medium.com/max/800/1*-E1G7YKshCNoaB93w-cOGg.png)

Estos cambios son similares a los que realizó para el microservicio Recomendaciones en la sección anterior.

> **Nota:** si está colocando claves privadas en sus Dockerfiles, no las aloje en un repositorio público. Sería mejor cargar las claves privadas en tiempo de ejecución, a través de la red, desde un servidor al que solo se pueda acceder a través de VPN.

Actualice `serve()`para `recommendations.py`autenticar al cliente como se resalta:

![](https://cdn-images-1.medium.com/max/800/1*L5cR5TiK7DE9ZKEJe7p-BA.png)

Esto carga el certificado CA y requiere la autenticación del cliente.

Finalmente, actualice `marketplace.py`para enviar su certificado al servidor como se resalta:

![](https://cdn-images-1.medium.com/max/800/1*Fv1WNBXrnVX3RnghNxL6dA.png)

Esto carga los certificados y los envía al servidor para su verificación.

Ahora, si intenta conectarse al servidor con otro cliente, incluso uno que use TLS pero con un certificado desconocido, el servidor lo rechazará con el error `PEER_DID_NOT_RETURN_A_CERTIFICATE`.

**Importante:** Si bien es posible administrar TLS mutuo de esta manera, no es fácil hacerlo. Se vuelve especialmente difícil si desea habilitar solo ciertos microservicios para realizar solicitudes a otros.

Si necesita una mayor seguridad como esta, probablemente sea mejor usar una **malla de servicio** y dejar que administre los certificados y la autorización por usted. Además del monitoreo de tráfico mencionado en la sección de interceptores, [Istio también](https://istio.io/latest/docs/concepts/security/) puede administrar TLS mutuo y autorización por servicio. También es más seguro porque administrará los secretos por usted y volverá a emitir certificados con más frecuencia.

Eso concluye asegurando la comunicación entre microservicios. A continuación, aprenderá a usar AsyncIO con microservicios.

### AsyncIO y gRPC

La compatibilidad con AsyncIO en el paquete gRPC oficial estuvo ausente durante mucho tiempo, pero se agregó recientemente. Todavía es experimental y está en desarrollo activo, pero si realmente desea probar AsyncIO en sus microservicios, entonces podría ser una buena opción. Puede consultar la [documentación de gRPC AsyncIO](https://grpc.github.io/grpc/python/grpc_asyncio.html) para obtener más detalles.

También hay un paquete de terceros llamado `[grpclib](https://grpclib.readthedocs.io/en/latest/)`que implementa la compatibilidad con AsyncIO para gRPC y existe desde hace más tiempo.

Tenga mucho cuidado con AsyncIO en el lado del servidor. Es fácil escribir accidentalmente un **código de bloqueo** , lo que pondrá de rodillas a su microservicio. Como demostración, así es como puede escribir el microservicio de recomendaciones usando AsyncIO con toda la lógica eliminada:

![](https://cdn-images-1.medium.com/max/800/1*lSkNxrYht6zn-HkcdcvB7w.png)

Hay un error en este código. En la línea 17, accidentalmente realizó una llamada de bloqueo dentro de una función `async`, lo cual es un gran no-no. Debido a que los servidores AsyncIO son de un solo subproceso, esto bloquea todo el servidor para que solo pueda procesar una solicitud a la vez. Esto es mucho peor que un servidor con subprocesos.

Puede demostrar esto haciendo varias solicitudes simultáneas:

![](https://cdn-images-1.medium.com/max/800/1*0EzvUEndDsJDs1YN9Zqvag.png)

Esto hará cinco solicitudes simultáneas, pero en el lado del servidor verás esto:

![](https://cdn-images-1.medium.com/max/800/1*iOMp3-ltmtDfcwKAvAYkPg.png)

Las solicitudes se manejan secuencialmente, ¡lo cual no es lo que desea!

Hay casos de uso para AsyncIO en el lado del servidor, pero debe tener mucho cuidado de no bloquear. Esto significa que no puede usar paquetes estándar como `[requests](https://realpython.com/python-requests/)`o incluso hacer RPC para otros microservicios a menos que los ejecute en otro hilo usando `[run_in_executor](https://docs.python.org/3/library/asyncio-eventloop.html#asyncio.loop.run_in_executor)`.

También hay que tener cuidado con las consultas de la base de datos. Es posible que muchos de los excelentes paquetes de Python que ha llegado a usar aún no sean compatibles con AsyncIO, así que tenga cuidado de verificar si lo son. A menos que tenga una gran necesidad de AsyncIO en el lado del servidor, podría ser más seguro esperar hasta que haya más compatibilidad con paquetes. Los errores de bloqueo pueden ser difíciles de encontrar.

Si desea obtener más información sobre AsyncIO, puede consultar [Primeros pasos con las funciones Async en Python](https://realpython.com/python-async-features/) y [Async IO en Python: un recorrido completo](https://realpython.com/async-io-python/) .

### Conclusión

Los microservicios son una forma de gestionar sistemas complejos. Se convierten en una forma natural de organizar el código a medida que crece una organización. Comprender cómo implementar microservicios de manera efectiva en Python puede aumentar su valor para su empresa a medida que crece.

**En este tutorial, has aprendido:**

*   Cómo implementar microservicios de Python de manera efectiva con **gRPC**
*   Cómo implementar microservicios en **Kubernetes**
*   Cómo incorporar funciones como **pruebas de integración** , **interceptores** , **TLS** y **AsyncIO** en sus microservicios
*   Qué **mejores prácticas** seguir al crear microservicios de Python

Ahora está equipado para comenzar a dividir sus aplicaciones Python más grandes en microservicios más pequeños, lo que hace que su código sea más organizado y fácil de mantener. Para revisar todo lo que ha aprendido en este tutorial, puede descargar el código fuente de los ejemplos haciendo clic en el siguiente enlace:

By [Jaime Hernández](https://medium.com/@devjaime) on [April 21, 2022](https://medium.com/p/3ff25126b6eb).

[Canonical link](https://medium.com/@devjaime/microservicios-de-python-con-grpc-3ff25126b6eb)

Exported from [Medium](https://medium.com) on March 15, 2025.