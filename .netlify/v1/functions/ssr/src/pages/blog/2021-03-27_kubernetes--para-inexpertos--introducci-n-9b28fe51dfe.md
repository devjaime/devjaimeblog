---
layout: "../../layouts/BlogLayout.astro"
title: "kubernetes para inexpertos— introducción"
description: ""
tags: ["code", "Kubernetes"]
time: 4
featured: true
timestamp: "2021-03-27T12:20:31-0300"
filename: "2021-03-27_kubernetes--para-inexpertos--introducci-n-9b28fe51dfe"
---


kubernetes para inexpertos— introducción
========================================

Introducción a kubernetes y recursos útiles

* * *

### kubernetes para inexpertos— introducción

![](https://cdn-images-1.medium.com/max/800/0*fx-nDMrH3NhgdBAS.png)

### Contexto

Este año he decidido compartir conocimientos para desarrolladores, desde teoría hasta ejercicios prácticos de distintas tecnologías, dentro de estas esta Kubernetes.

En esta extensa introducción quisiera abordar la **_teoría_** de Kubernetes en el siguiente temario. (Esta introducción la pienso realizar lo más entendible para todos, incluso para mí, ya que siempre me ha costado explicar “conceptos”).

Lo que abordaremos.

> 1\. Introducción  
> 2\. Contenedores, modernización de aplicaciones y desarrollo de 12 factores  
> 3\. Contenedores  
> 4\. Estrategias de implementación  
> 5\. Trabajar en un clúster de Kubernetes

Algunos recursos útiles que me ayudaron a entender Kubernetes:

> [Lista de reproducción de introducción a Kubernetes](https://www.youtube.com/watch?v=oTf0KxK1QNo&list=PLqRCtm0kbeHA5M_E_Anwu-vh4NWlgrOY_) del “Pelado Nerd” , tiene una forma de explicar muy particular de seguro te “impresionara”.

> Otro recurso rápido para ver es el canal de fireship (en lo personal me gusta mucho la forma concisa que tienen de explicar conceptos). En este caso [Kubernetes explicado en 100 segundos](https://www.youtube.com/watch?v=PziYflu8cB8&t=2s)

> y si lo que te gusta es leer te recomiendo los artículos de [DigitalOcean](https://www.digitalocean.com/community/tags/kubernetes)

Bueno si aún con todo lo anterior quisieras saber la teoría en profundidad te invito a seguir leyendo …

![](https://cdn-images-1.medium.com/max/800/0*ckvNuVj0CFcemWEZ.jpg)

### Introducción

**Kubernetes** es un potente sistema de código abierto, desarrollado inicialmente por Google, para administrar aplicaciones en contenedores en un entorno agrupado. Su objetivo es proporcionar mejores formas de administrar componentes y servicios distribuidos relacionados en una infraestructura variada.

Aquí, analizaremos algunos de los conceptos básicos de Kubernetes. Hablaremos sobre la arquitectura del sistema, los problemas que resuelve y el modelo que utiliza para manejar las implementaciones en contenedores y el escalado.

### ¿Qué es Kubernetes?

**Kubernetes** , en su nivel básico, es un sistema para ejecutar y coordinar aplicaciones en contenedores en un grupo de máquinas (orquestador). Es una plataforma diseñada para administrar completamente el ciclo de vida de las aplicaciones y servicios en contenedores utilizando métodos que brindan previsibilidad, escalabilidad y alta disponibilidad.

Como usuario de Kubernetes, puedes definir cómo deben ejecutarse tus aplicaciones y las formas en que deben y poder interactuar con otras aplicaciones o con el mundo exterior. Puedes escalar tus servicios horizontal o verticalmente (ya sea aumentando recursos CPU,RAM o replicando estos). Realizar actualizaciones continuas y cambiar el tráfico entre diferentes versiones de sus aplicaciones para probar funciones o revertir implementaciones problemáticas (Balanceando la carga e acuerdo a la necesidad). Kubernetes proporciona una interfaces básica para tu plataforma que te permiten definir y administrar tus aplicaciones con altos grados de flexibilidad, potencia y confiabilidad.

### Arquitectura de Kubernetes

Para comprender cómo Kubernetes puede proporcionar estas capacidades, es útil tener una idea de cómo está diseñado y organizado a un alto nivel. Kubernetes se puede visualizar como un sistema integrado en capas, y cada capa superior abstrae la complejidad que se encuentra en los niveles inferiores.

En su base, Kubernetes reúne máquinas físicas o virtuales individuales en un clúster utilizando una red compartida para comunicarse entre cada servidor. Este clúster es la plataforma física donde se configuran todos los componentes, capacidades y cargas de trabajo de Kubernetes.

Cada una de las máquinas del clúster tiene un rol dentro del ecosistema de Kubernetes. Un servidor (o un pequeño grupo de implementaciones de alta disponibilidad) funciona como servidor **maestro** . Este servidor actúa como puerta de enlace y cerebro para el clúster, al exponer una API para usuarios y clientes, verificar el estado de otros servidores, decidir cuál es la mejor manera de dividir y asignar el trabajo (conocido como “**scheduling**”) y orquestar la comunicación entre otros componentes. El servidor maestro actúa como el punto de contacto principal con el clúster y es responsable de la mayor parte de la lógica centralizada que proporciona Kubernetes.

Las otras máquinas del clúster se designan como **nodos** : servidores responsables de aceptar y ejecutar cargas de trabajo utilizando recursos locales y externos. Para ayudar con el aislamiento, la administración y la flexibilidad, Kubernetes ejecuta aplicaciones y servicios en **contenedores** , por lo que cada nodo debe estar equipado con un tiempo de ejecución de contenedor (como Docker o rkt). El nodo recibe instrucciones de trabajo del servidor maestro y crea o destruye contenedores en consecuencia, ajustando las reglas de red para enrutar y reenviar el tráfico de manera adecuada.

Como te mencione anteriormente, las aplicaciones y los servicios en sí se ejecutan en el clúster dentro de contenedores. Los componentes subyacentes garantizan que el estado deseado de las aplicaciones coincida con el estado real del clúster. Los usuarios interactúan con el clúster comunicándose con el servidor API principal, ya sea directamente o con clientes y bibliotecas. Para iniciar una aplicación o servicio, se envía un plan declarativo en JSON o YAML que define qué crear y cómo se debe administrar. Luego, el servidor maestro toma el plan y descubre cómo ejecutarlo en la infraestructura examinando los requisitos y el estado actual del sistema. Este grupo de aplicaciones definidas por el usuario que se ejecutan de acuerdo con un plan específico representa la capa final de Kubernetes.

![](https://cdn-images-1.medium.com/max/800/0*ROBcO2IoEDq7qGHN.png)

### Componentes del servidor maestro

Como describimos anteriormente, el servidor maestro actúa como el mapa de control principal para los clústeres de Kubernetes. Sirve como el principal punto de contacto para administradores y usuarios, y también proporciona muchos sistemas en todo el clúster para los nodos trabajadores relativamente poco sofisticados. En general, los componentes del servidor maestro trabajan juntos para aceptar las solicitudes de los usuarios, determinar las mejores formas de ejecutar contenedores de carga de trabajo, autenticar clientes y nodos, ajustar las redes de todo el clúster y administrar las responsabilidades de escalado y verificación del estado.

Estos componentes pueden instalarse en una sola máquina o distribuirse en varios servidores. Echaremos un vistazo a cada uno de los componentes individuales asociados con los servidores maestros en esta sección.

### etcd

Uno de los componentes fundamentales que Kubernetes necesita para funcionar es un almacén de configuración disponible a nivel mundial. El [proyecto **etcd**](https://coreos.com/etcd/docs/latest/) , desarrollado por el equipo de CoreOS, es un almacén de clave valor distribuido y ligero que se puede configurar para abarcar varios nodos.

Kubernetes utiliza `etcd`para almacenar datos de configuración a los que puede acceder cada uno de los nodos del clúster. Esto se puede utilizar para el descubrimiento de servicios y puede ayudar a los componentes a configurarse o reconfigurarse de acuerdo con la información actualizada. También ayuda a mantener el estado del clúster con características como elección del cluster principal y bloqueo distribuido. Al proporcionar una simple API HTTP / JSON , la interfaz para configurar o recuperar valores es muy sencilla.

Como la mayoría de los demás componentes del mapa de control, `etcd`se pueden configurar en un único servidor maestro o, en escenarios de producción, distribuirse entre varias máquinas. El único requisito es que sea accesible desde la red para cada una de las máquinas de Kubernetes.

### kube-apiserver

Uno de los servicios maestros más importantes es un servidor API. Este es el punto de administración principal de todo el clúster, ya que permite al usuario configurar las cargas de trabajo y las unidades organizativas de Kubernetes. También es responsable de asegurarse de que la "store”`etcd` y los detalles del servicio de los contenedores desplegados estén de acuerdo. Actúa como puente entre varios componentes para mantener el estado del clúster y difundir información y comandos.

El servidor API implementa una interfaz RESTful, lo que significa que muchas herramientas y bibliotecas diferentes pueden comunicarse fácilmente con él. Un cliente llamado **kubectl** está disponible como método predeterminado para interactuar con el clúster de Kubernetes desde una computadora local.

### kube-controller-manager

El administrador del controlador es un servicio general que tiene muchas responsabilidades. Principalmente, administra diferentes controladores que regulan el estado del clúster, administran los ciclos de vida de las cargas de trabajo y realizan tareas de rutina. Por ejemplo, un controlador de replicación asegura que la cantidad de réplicas (copias idénticas) definidas para un pod coincida con la cantidad actualmente implementada en el clúster. Los detalles de estas operaciones se escriben en `etcd`, donde el administrador del controlador observa los cambios a través del servidor API.

Cuando se ve un cambio, el controlador lee la nueva información e implementa el procedimiento que cumple con el estado deseado. Esto puede implicar escalar una aplicación horizontal o verticalmente, ajustar los endpoint, etc.

### kube-scheduler

El proceso que realmente asigna cargas de trabajo a nodos específicos en el clúster es el **_scheduler_**. Este servicio lee los requisitos operativos de una carga de trabajo, analiza el entorno de infraestructura actual y coloca el trabajo en un nodo o nodos aceptables.

El **_scheduler_** es responsable de realizar un seguimiento de la capacidad disponible en cada host para asegurarse de que las cargas de trabajo no se programen en exceso de los recursos disponibles. El planificador debe conocer la capacidad total, así como los recursos ya asignados a las cargas de trabajo existentes en cada servidor.

### cloud-controller-manager

Kubernetes se puede implementar en muchos entornos diferentes y puede interactuar con varios proveedores de infraestructura para comprender y administrar el estado de los recursos en el clúster. Si bien Kubernetes trabaja con representaciones genéricas de recursos como el almacenamiento conectable y los balanceadores de carga, necesita una forma de asignarlos a los recursos reales proporcionados por proveedores de nube no homogéneos.

Los administradores de controladores en la nube actúan como el pegamento que permite a Kubernetes interactuar con proveedores con diferentes capacidades, características y API mientras mantiene construcciones relativamente genéricas internamente. Esto permite a Kubernetes actualizar su información de estado de acuerdo con la información recopilada del proveedor de la nube, ajustar los recursos de la nube a medida que se necesitan cambios en el sistema y crear y usar servicios en la nube adicionales para satisfacer los requisitos de trabajo enviados al clúster.

### Node Server Components

En Kubernetes, los servidores que realizan su trabajo ejecutando contenedores se conocen como **nodos** . Los servidores de nodo tienen algunos requisitos que son necesarios para comunicarse con los componentes maestros, configurar la red de contenedores y ejecutar las cargas de trabajo reales que se les asignan.

### Un tiempo de ejecución de contenedor

El primer componente que debe tener cada nodo es un tiempo de ejecución de contenedor. Normalmente, este requisito se satisface instalando y ejecutando [Docker](https://www.docker.com/) , pero también están disponibles alternativas como [rkt](https://coreos.com/rkt/) y [runc](https://github.com/opencontainers/runc) .

El tiempo de ejecución del contenedor es responsable de iniciar y administrar contenedores, aplicaciones encapsuladas en un entorno operativo relativamente aislado pero liviano. Cada unidad de trabajo en el clúster se implementa, en su nivel básico, como uno o más contenedores que deben implementarse. El tiempo de ejecución del contenedor en cada nodo es el componente que finalmente ejecuta los contenedores definidos en las cargas de trabajo enviadas al clúster.

### kubelet

El principal punto de contacto de cada nodo con el grupo de clústeres es un pequeño servicio llamado **kubelet** . Este servicio es responsable de transmitir información hacia y desde los servicios del mapa de control, así como de interactuar con la store`etcd` para leer detalles de configuración o escribir nuevos valores.

El servicio`kubelet`se comunica con los componentes maestros para autenticarse en el clúster y recibir comandos y trabajar. El trabajo se recibe en forma de **manifiesto** que define la carga de trabajo y los parámetros operativos. El proceso`kubelet` entonces asume la responsabilidad de mantener el estado de los trabajos en el servidor de nodo. Controla el tiempo de ejecución del contenedor para lanzar o destruir contenedores según sea necesario.

### kube-proxy

Para administrar la división en subredes de hosts individuales y hacer que los servicios estén disponibles para otros componentes, se ejecuta un pequeño servicio de proxy llamado **kube-proxy** en cada servidor de nodo. Este proceso reenvía las solicitudes a los contenedores correctos, puede realizar un equilibrio de carga primario y, en general, es responsable de asegurarse de que el entorno de red sea predecible y accesible, pero aislado cuando corresponda.

### Objetos y cargas de trabajo de Kubernetes

Si bien los contenedores son el mecanismo subyacente que se utiliza para implementar aplicaciones, Kubernetes usa capas adicionales de abstracción sobre la interfaz del contenedor para proporcionar funciones de escalado, resistencia y administración del ciclo de vida. En lugar de administrar contenedores directamente, los usuarios definen e interactúan con instancias compuestas por varias instancias primarias proporcionadas por el modelo de objetos de Kubernetes. Repasaremos los diferentes tipos de objetos que se pueden usar para definir estas cargas de trabajo a continuación.

### Pods

Un **pod** es la unidad más básica con la que se ocupa Kubernetes. Los contenedores en sí mismos no se asignan a los hosts. En cambio, uno o más contenedores estrechamente acoplados se encapsulan en un objeto llamado cápsula.

Una pod generalmente representa uno o más contenedores que deben controlarse como una sola aplicación. Los pods consisten en contenedores que operan en estrecha colaboración, comparten un ciclo de vida y siempre deben ejecutarse en el mismo nodo. Se gestionan completamente como una unidad y comparten su entorno, volúmenes y espacio de IP. A pesar de su implementación en contenedores, generalmente debe pensar en los pods como una aplicación única y monolítica para conceptualizar mejor cómo el clúster administrará los recursos y la programación del pod.

Por lo general, los pods consisten en un contenedor principal que satisface el propósito general de la carga de trabajo y, opcionalmente, algunos contenedores auxiliares que facilitan tareas estrechamente relacionadas. Estos son programas que se benefician de ser ejecutados y administrados en sus propios contenedores, pero están estrechamente vinculados a la aplicación principal. Por ejemplo, un pod puede tener un contenedor que ejecuta el servidor de aplicaciones principal y un contenedor auxiliar que extrae archivos al sistema de archivos compartido cuando se detectan cambios en un repositorio externo. Por lo general, se desaconseja el escalado horizontal en el nivel del módulo porque hay otros objetos de nivel superior más adecuados para la tarea.

Por lo general, los usuarios no deben administrar los pods por sí mismos, porque no brindan algunas de las características que normalmente se necesitan en las aplicaciones (como la administración y el escalado del ciclo de vida). En su lugar, se anima a los usuarios a trabajar con objetos de nivel superior que utilizan pods o plantillas de pods como componentes básicos, pero que implementan funciones adicionales.

### Controladores de replicación y conjuntos de replicación

A menudo, cuando trabaje con Kubernetes, en lugar de trabajar con pods individuales, estará administrando grupos de pods idénticos y replicados. Estos se crean a partir de plantillas de pod y se pueden escalar horizontalmente mediante controladores conocidos como controladores de replicación y conjuntos de replicación.

Un **controlador de replicación** es un objeto que define una plantilla de pod y parámetros de control para escalar réplicas idénticas de un pod horizontalmente aumentando o disminuyendo el número de copias en ejecución. Esta es una forma sencilla de distribuir la carga y aumentar la disponibilidad de forma nativa dentro de Kubernetes. El controlador de replicación sabe cómo crear nuevos pods según sea necesario porque una plantilla que se parece mucho a una definición de pod está incrustada dentro de la configuración del controlador de replicación.

El controlador de replicación es responsable de garantizar que la cantidad de pods implementados en el clúster coincida con la cantidad de pods en su configuración. Si un pod o un host subyacente falla, el controlador iniciará nuevos pods para compensar. Si cambia el número de réplicas en la configuración de un controlador, el controlador inicia o mata contenedores para que coincidan con el número deseado. Los controladores de replicación también pueden realizar actualizaciones continuas para pasar un conjunto de pods a una nueva versión uno por uno, minimizando el impacto en la disponibilidad de la aplicación.

**Los conjuntos de replicación** son una iteración del diseño del controlador de replicación con mayor flexibilidad en la forma en que el controlador identifica los pods que debe administrar. Los conjuntos de replicación están comenzando a reemplazar a los controladores de replicación debido a sus mayores capacidades de selección de réplicas, pero no pueden realizar actualizaciones continuas para ciclar backends a una nueva versión como pueden hacerlo los controladores de replicación. En cambio, los conjuntos de replicación están diseñados para usarse dentro de unidades adicionales de nivel superior que brindan esa funcionalidad.

Al igual que los pods, tanto los controladores de replicación como los conjuntos de replicación rara vez son las unidades con las que trabajará directamente. Si bien se basan en el diseño del módulo para agregar escalado horizontal y garantías de confiabilidad, carecen de algunas de las capacidades de administración del ciclo de vida de grano fino que se encuentran en objetos más complejos.

### Despliegues

**Las implementaciones** son una de las cargas de trabajo más comunes para crear y administrar directamente. Las implementaciones usan conjuntos de replicación como un bloque de construcción, agregando funcionalidad de administración de ciclo de vida flexible a la combinación.

Si bien las implementaciones creadas con conjuntos de replicaciones pueden parecer que duplican la funcionalidad ofrecida por los controladores de replicación, las implementaciones resuelven muchos de los puntos débiles que existían en la implementación de actualizaciones continuas. Al actualizar aplicaciones con controladores de replicación, los usuarios deben enviar un plan para un nuevo controlador de replicación que reemplazaría al controlador actual. Cuando se utilizan controladores de replicación, las tareas como el seguimiento del historial, la recuperación de fallas en la red durante la actualización y la reversión de cambios incorrectos son difíciles o quedan como responsabilidad del usuario.

Las implementaciones son un objeto de alto nivel diseñado para facilitar la administración del ciclo de vida de los pods replicados. Las implementaciones se pueden modificar fácilmente cambiando la configuración y Kubernetes ajustará los conjuntos de réplicas, administrará las transiciones entre las diferentes versiones de la aplicación y, opcionalmente, mantendrá el historial de eventos y las capacidades de deshacer automáticamente. Debido a estas características, es probable que las implementaciones sean el tipo de objeto de Kubernetes con el que trabaje con más frecuencia.

### Conjuntos con estado

**Los conjuntos con estado** son controladores de pod especializados que ofrecen garantías de pedido y exclusividad. Principalmente, estos se utilizan para tener un control más detallado cuando tiene requisitos especiales relacionados con el pedido de implementación, datos persistentes o redes estables. Por ejemplo, los conjuntos con estado a menudo se asocian con aplicaciones orientadas a datos, como bases de datos, que necesitan acceso a los mismos volúmenes incluso si se reprograman a un nuevo nodo.

Los conjuntos con estado proporcionan un identificador de red estable al crear un nombre único basado en números para cada pod que persistirá incluso si es necesario mover el pod a otro nodo. Del mismo modo, los volúmenes de almacenamiento persistentes se pueden transferir con un pod cuando es necesario reprogramar. Los volúmenes persisten incluso después de que se haya eliminado el pod para evitar la pérdida accidental de datos.

Al desplegar o ajustar la escala, los conjuntos con estado realizan operaciones de acuerdo con el identificador numerado en su nombre. Esto proporciona una mayor previsibilidad y control sobre el orden de ejecución, lo que puede resultar útil en algunos casos.

### Conjuntos de demonios

**Los conjuntos de demonios** son otra forma especializada de controlador de pod que ejecuta una copia de un pod en cada nodo del clúster (o un subconjunto, si se especifica). Esto suele ser útil cuando se implementan pods que ayudan a realizar el mantenimiento y brindan servicios para los propios nodos.

Por ejemplo, la recopilación y reenvío de registros, la agregación de métricas y la ejecución de servicios que aumentan las capacidades del propio nodo son candidatos populares para conjuntos de demonios. Debido a que los conjuntos de demonios a menudo brindan servicios fundamentales y son necesarios en toda la flota, pueden eludir las restricciones de programación de pods que impiden que otros controladores asignen pods a ciertos hosts. Por ejemplo, debido a sus responsabilidades únicas, el servidor maestro se configura con frecuencia para no estar disponible para la programación de pods normal, pero los conjuntos de demonios tienen la capacidad de anular la restricción pod por pod para asegurarse de que los servicios esenciales se estén ejecutando.

### Trabajos y trabajos cron

Las cargas de trabajo que hemos descrito hasta ahora han asumido un ciclo de vida similar al de un servicio de larga duración. Kubernetes utiliza una carga de trabajo denominada **trabajos** para proporcionar un flujo de trabajo más basado en tareas en el que se espera que los contenedores en ejecución salgan correctamente después de un tiempo una vez que hayan completado su trabajo. Los trabajos son útiles si necesita realizar un procesamiento único o por lotes en lugar de ejecutar un servicio continuo.

Construir sobre trabajos son **trabajos cron** . Al igual que los `cron`demonios convencionales en Linux y sistemas similares a Unix que ejecutan scripts según una programación, los trabajos cron en Kubernetes proporcionan una interfaz para ejecutar trabajos con un componente de programación. Los trabajos cron se pueden utilizar para programar un trabajo que se ejecutará en el futuro o de forma periódica y recurrente. Los trabajos cron de Kubernetes son básicamente una reimplementación del comportamiento cron clásico, utilizando el clúster como plataforma en lugar de un único sistema operativo.

### Otros componentes de Kubernetes

Más allá de las cargas de trabajo que puede ejecutar en un clúster, Kubernetes proporciona una serie de otras abstracciones que lo ayudan a administrar sus aplicaciones, controlar las redes y habilitar la persistencia. Discutiremos algunos de los ejemplos más comunes aquí.

### Servicios

Hasta ahora, hemos estado usando el término “servicio” en el sentido convencional, similar a Unix: para denotar procesos de larga ejecución, a menudo conectados a la red, capaces de responder a solicitudes. Sin embargo, en Kubernetes, un **servicio** es un componente que actúa como un equilibrador de carga interno básico y un embajador de los pods. Un servicio agrupa colecciones lógicas de pods que realizan la misma función para presentarlas como una sola entidad.

Esto le permite implementar un servicio que puede realizar un seguimiento y enrutar a todos los contenedores de backend de un tipo en particular. Los consumidores internos solo necesitan conocer el punto final estable proporcionado por el servicio. Mientras tanto, la abstracción del servicio le permite escalar horizontalmente o reemplazar las unidades de trabajo de backend según sea necesario. La dirección IP de un servicio permanece estable independientemente de los cambios en los pods a los que se enruta. Al implementar un servicio, obtiene fácilmente la capacidad de detección y puede simplificar los diseños de sus contenedores.

Siempre que necesite proporcionar acceso a uno o más pods a otra aplicación oa consumidores externos, debe configurar un servicio. Por ejemplo, si tiene un conjunto de pods que ejecutan servidores web a los que se debería poder acceder desde Internet, un servicio proporcionará la abstracción necesaria. Del mismo modo, si sus servidores web necesitan almacenar y recuperar datos, querrá configurar un servicio interno para darles acceso a los pods de su base de datos.

Aunque los servicios, de forma predeterminada, solo están disponibles mediante una dirección IP enrutable internamente, pueden estar disponibles fuera del clúster eligiendo una de varias estrategias. La configuración de **NodePort** funciona abriendo un puerto estático en la interfaz de red externa de cada nodo. El tráfico al puerto externo se enrutará automáticamente a los pods adecuados mediante un servicio IP de clúster interno.

Alternativamente, el tipo de servicio **LoadBalancer** crea un balanceador de carga externo para enrutarlo al servicio mediante la integración del balanceador de carga de Kubernetes de un proveedor en la nube. El administrador del controlador de nube creará el recurso apropiado y lo configurará usando las direcciones de servicio de servicio interno.

### Volúmenes y volúmenes persistentes

Compartir datos de manera confiable y garantizar su disponibilidad entre reinicios de contenedores es un desafío en muchos entornos en contenedores. Los tiempos de ejecución de contenedores a menudo proporcionan algún mecanismo para adjuntar almacenamiento a un contenedor que persiste más allá de la vida útil del contenedor, pero las implementaciones generalmente carecen de flexibilidad.

Para abordar esto, Kubernetes utiliza su propia abstracción de **volúmenes** que permite que todos los contenedores dentro de un pod compartan los datos y que permanezcan disponibles hasta que se termine el pod. Esto significa que los pods estrechamente acoplados pueden compartir archivos fácilmente sin complejos mecanismos externos. Las fallas del contenedor dentro del pod no afectarán el acceso a los archivos compartidos. Una vez que se termina el pod, el volumen compartido se destruye, por lo que no es una buena solución para datos verdaderamente persistentes.

**Los volúmenes persistentes** son un mecanismo para abstraer un almacenamiento más sólido que no está vinculado al ciclo de vida del pod. En cambio, permiten a los administradores configurar recursos de almacenamiento para el clúster que los usuarios pueden solicitar y reclamar para los pods que están ejecutando. Una vez que un pod se hace con un volumen persistente, la política de recuperación del volumen determina si el volumen se mantiene hasta que se elimine manualmente o se elimine junto con los datos de inmediato. Los datos persistentes se pueden usar para protegerse contra fallas basadas en nodos y para asignar mayores cantidades de almacenamiento que las disponibles localmente.

### Etiquetas y anotaciones

Una abstracción organizacional de Kubernetes relacionada con, pero fuera de los otros conceptos, es el etiquetado. Una **etiqueta** en Kubernetes es una etiqueta semántica que se puede adjuntar a los objetos de Kubernetes para marcarlos como parte de un grupo. Luego, estos se pueden seleccionar cuando se dirigen a diferentes instancias para la administración o enrutamiento. Por ejemplo, cada uno de los objetos basados ​​en el controlador usa etiquetas para identificar los pods en los que deben operar. Los servicios usan etiquetas para comprender los pods de backend a los que deben enrutar las solicitudes.

Las etiquetas se proporcionan como pares clave-valor simples. Cada unidad puede tener más de una etiqueta, pero cada unidad solo puede tener una entrada para cada tecla. Por lo general, una clave de “nombre” se usa como un identificador de propósito general, pero además puede clasificar objetos por otros criterios como etapa de desarrollo, accesibilidad pública, versión de la aplicación, etc.

**Las anotaciones** son un mecanismo similar que le permite adjuntar información arbitraria de clave-valor a un objeto. Si bien las etiquetas deben usarse para obtener información semántica útil para hacer coincidir un grupo con los criterios de selección, las anotaciones tienen un formato más libre y pueden contener datos menos estructurados. En general, las anotaciones son una forma de agregar metadatos enriquecidos a un objeto que no son útiles para fines de selección.

### Conclusión

Kubernetes es un proyecto interesante que permite a los usuarios ejecutar cargas de trabajo en contenedores escalables y de alta disponibilidad en una plataforma altamente abstraída. Si bien la arquitectura de Kubernetes y el conjunto de componentes internos pueden parecer desalentadores al principio, su poder, flexibilidad y conjunto de características robustas no tienen paralelo en el mundo del código abierto. Al comprender cómo encajan los bloques de construcción básicos, puede comenzar a diseñar sistemas que aprovechen al máximo las capacidades de la plataforma para ejecutar y administrar sus cargas de trabajo a escala.

[**Donate to devjaime**  
_Help support devjaime by donating or sharing with your friends._www.paypal.com](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S "https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S")[](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S)

By [Jaime Hernández](https://medium.com/@devjaime) on [March 27, 2021](https://medium.com/p/9b28fe51dfe).

[Canonical link](https://medium.com/@devjaime/kubernetes-para-inexpertos-introducci%C3%B3n-9b28fe51dfe)

Exported from [Medium](https://medium.com) on March 15, 2025.