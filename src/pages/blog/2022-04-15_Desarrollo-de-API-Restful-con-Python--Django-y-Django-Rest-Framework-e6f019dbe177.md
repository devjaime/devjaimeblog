---
layout: "../../layouts/BlogLayout.astro"
title: "Desarrollo de API Restful con Python, Django y Django Rest Framework"
description: ""
tags: ["code", "API", "Python", "Django"]
time: 4
featured: true
timestamp: "2022-04-15T12:20:31-0300"
filename: "2022-04-15_Desarrollo-de-API-Restful-con-Python--Django-y-Django-Rest-Framework-e6f019dbe177"
---

Desarrollo de API Restful con Python, Django y Django Rest Framework \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Desarrollo de API Restful con Python, Django y Django Rest Framework
====================================================================

Introducción

* * *

### Desarrollo de API Restful con Python, Django y Django Rest Framework

### Introducción

> Este artículo es una guía para principiantes que quieran desarrollar proyectos con API RESTful usando Python, Django y Django Rest Framework.

*   [**Django**](https://www.djangoproject.com/) es un framework web escrito en **Python**
*   [**Python**](https://www.python.org/) es un lenguaje de programación de alto nivel interpretado para programación de propósito general
*   **API** o interfaz de programación de aplicaciones es un conjunto de reglas y mecanismos mediante los cuales una aplicación o componente interactúa con los demás.
*   **REST** es un acrónimo que significa **Representational State Transfer** o transferencia de estado. Le agrega una capa muy delgada de complejidad y abstracción a HTTP. Mientras que HTTP es transferencia de archivos, REST se basa en la **transferencia de recursos**.

### API REST

REST es un conjunto de principios que definen la forma en que se deben crear, leer, actualizar y eliminar los datos. Es una arquitectura conocida como **cliente-servidor**, en la que el servidor y el cliente actúan de forma independiente, siempre y cuando la interfaz sea la misma al procesar una solicitud y una respuesta, que son los elementos esenciales. **El servidor expone la API REST y el cliente hace uso de ella**. El servidor almacena la información y la pone a disposición del usuario, mientras que el cliente toma la información y la muestra al usuario o la utiliza para realizar posteriores peticiones de más información.

REST es muy útil cuando:

*   Las interacciones son simples.
*   Los recursos de tu hardware son limitados.

En definición simple, es la representación de datos para un cliente en el formato adecuado para él.

### Qué es una API RESTful

Una API RESTful es una interfaz que utiliza estos principios para comunicarse hacia y desde un servidor. Está diseñada con los conceptos de REST. El principio más importante en las APIs RESTful es el uso de los métodos HTTP:

*   GET
*   POST
*   PUT
*   DELETE

Estos métodos son empleados por los clientes para crear, manipular y eliminar datos en los servidores, respectivamente.

Por lo tanto, RESTful + API es una terminología de uso común para la implementación de dicha arquitectura y restricciones (por ejemplo, en servicios web).

Aquí hay un ejemplo de solicitud **GET** de la API de GitHub

    $ curl https://api.github.com/users/devjaime

Verá una salida similar a esta

![](https://cdn-images-1.medium.com/max/800/1*ska2UXlHDV_iM34_ZzXkMg.png)

Arriba se muestra un conjunto de datos en formato **JSON .**

**_La notación de objetos JSON_** _es un formato de archivo de estándar abierto que utiliza texto legible por humanos para transmitir objetos de datos que consisten en pares de valor de atributo y tipos de datos de matriz._

Otros formatos incluyen XML, INI, CSV, etc. Pero hoy en día, JSON se usa ampliamente porque su estructura es intuitiva, lo que facilita la lectura y el mapeo de objetos de dominio sin importar qué lenguaje de programación se esté utilizando.

### Phyton y Django

**Python** , según su creador, Guido van Rossum, es:

> _lenguaje de programación de alto nivel, y su filosofía central de diseño tiene que ver con la legibilidad del código y una sintaxis que permite a los programadores expresar conceptos en unas pocas líneas de código._

Python utiliza la representación de palabras similares al inglés (p. ej., para métodos, reservar palabras clave y controlar el flujo) que hace que sea más fácil para cualquier principiante saltar directamente a él. También cuenta con un sistema de tipado dinámico, lo que significa que verifica la seguridad de tipo del programa en tiempo de ejecución. También realiza una gestión automática de la memoria.

**Django** es un Framework de alto nivel que permite a los desarrolladores entregar proyectos a tiempo con un diseño limpio y pragmático.

Sus características principales incluyen un diseño para un desarrollo rápido, un producto seguro y escalable.

### Resumen rápido de Django

La forma de Django de propagar cambios al esquema de su base de datos es por medio de sus módulos de **migración .**

`User`modelo de muestra

![](https://cdn-images-1.medium.com/max/800/1*8984sBMJL8PlaKUdHHFm0w.png)

> Si se realizan cambios en sus modelos, ejecute`makemigrations`

    $ python manage.py makemigrations

Finalmente, puede sincronizar la base de datos con el conjunto de modelos y migraciones.

    $ python manage.py migrate

### API REST con Django Rest Framework

[**DRF**](https://www.django-rest-framework.org/) o Django REST Framework es un conjunto de herramientas potente y flexible para crear API web. Ayuda a los desarrolladores a no reinventar la rueda implementando API REST complejas y sólidas desde cero por sí mismos. Porque cuando sus proyectos se vuelven más y más complejos, pronto se dará cuenta de la necesidad de usar DRF u otro Framework para bajar la complejidad.

### 1\. Instalación y configuración del proyecto

Crear directorio de **proyectos**

    $ mkdir djangoapi

Instalar **virtualenv** a través de [pip](https://pip.pypa.io/en/stable/installing/)

> Un **entorno virtual** permite que un proyecto tenga bibliotecas adicionales o cambios en los paquetes dentro de su entorno sin alterar las bibliotecas globales o de otros entornos.

> `_pip_`_es un sistema de administración de paquetes que se utiliza para instalar y administrar paquetes de software escritos en Python._

    $ pip install virtualenv

Para crear una carpeta de entorno en el directorio de su proyecto

    $ cd djangoapi$ virtualenv venv

Para activar el entorno.

    $ source venv/bin/activate

Para deshacer estos cambios en su ruta, simplemente ejecute `deactivate`. Más sobre [virtualenv](https://virtualenv.pypa.io/en/stable/userguide/) .

Instalar **django** , **djangorestframework**

    $ pip install django$ pip install djangorestframework

Creando un **proyecto Django**

    $ django-admin startproject blog

Ejecutando tu **proyecto**

    $ python manage.py runserver

> Las _migraciones no aplicadas_ se refieren a los archivos de migración predeterminados que se incluyen cuando inicia un proyecto Django.

Para sincronizar estos archivos de migración, simplemente ejecute`migrate`

    $ python manage.py migrate

![](https://cdn-images-1.medium.com/max/800/1*veBquKZG6IQ0ZVDUoV9LIg.png)

La base de datos predeterminada en nuestro proyecto está configurada actualmente en SQLite llamada `db.sqlite3`.

Creando **la aplicación de un proyecto django**

    $ cd blog$ python manage.py startapp posts

La estructura del proyecto debe verse como:

![](https://cdn-images-1.medium.com/max/800/1*DfgxEMMESL5z5dMsT0V8cw.png)

### 2\. modelo

Cada instancia de modelo es una fuente definitiva de información sobre sus datos. En general, cada modelo pertenece a una sola tabla en su base de datos.

![](https://cdn-images-1.medium.com/max/800/1*MjOCkpfWlgsZvafiFnpWQg.png)

> `___str___`_es llamado por la_ `_str()_`_función incorporada y por la declaración de impresión para calcular la representación de cadena "informal" de un objeto._

Si intenta ejecutar `makemigrations`, django aún no verá esos cambios.

![](https://cdn-images-1.medium.com/max/800/1*bNOdZ2-cntmwNRlw5q-v_w.png)

Para resolver esto, agregue su `posts` a las aplicaciones instaladas de su proyecto.

![](https://cdn-images-1.medium.com/max/800/1*3BNRj8D7up0SXftxUbVoPQ.png)

Para continuar con la migración de modelos:

![](https://cdn-images-1.medium.com/max/800/1*HI26KN97d8OIVXAbSpOXtA.png)

### 3\. Serialización

> Los serializadores permiten traducir la estructura de datos o el estado del objeto a un formato que puede almacenarse o transmitirse y reconstruirse más adelante.

Cree archivos API`serializers.py`y `views.py`y aíslelos así:

![](https://cdn-images-1.medium.com/max/800/1*alQmWPp112GWQRLvLpXodw.png)

En este tutorial hemos utilizado `ModelSerializer`, más sobre [esto](http://www.django-rest-framework.org/api-guide/serializers/) .

### 4\. Vistas

Una función de vista, o vista para abreviar, es una función de Python que toma una solicitud web y devuelve una respuesta web.

![](https://cdn-images-1.medium.com/max/800/1*iCKqDGB_z8479V3uElNdrg.png)

Como se vio anteriormente, `ListAPIView`se usa para puntos finales de solo lectura para representar una colección de instancias de modelo.

En este fragmento de código, usamos métodos`generics` de vista de `rest_framework`, más sobre [esto](http://www.django-rest-framework.org/api-guide/generic-views/) .

5\. URL

Aquí es donde configuramos nuestras rutas o rutas URL a nuestras vistas designadas en las que esperamos respuestas específicas para cada una.

![](https://cdn-images-1.medium.com/max/800/1*-thSfuCUYDYLDSpkRcQm8w.png)

### 6\. Finalización de la configuración

Asegúrese de que `rest_framework`se agregue a las aplicaciones de nuestro proyecto.

![](https://cdn-images-1.medium.com/max/800/1*CtdpZvjSbj6OrtKXjkf7zA.png)

### 7\. Administrador de Django

Dado que aún no hemos configurado nuestras `POST`solicitudes, completaremos la base de datos a través del panel de administración de Django.

Para hacer eso, cree una cuenta de superusuario `admin`con contraseña `1234password`.

![](https://cdn-images-1.medium.com/max/800/1*Anfv1POf8XDMnsSH1SCJlw.png)

Registre el modelo en el panel de administración.

![](https://cdn-images-1.medium.com/max/800/1*t9dsEO7DgxwcIH29WlVrxA.png)

Eso es todo. Visite el [panel de administración](http://127.0.0.1:8000/admin/) y actualice `posts`los registros del modelo. Más sobre [esto](https://docs.djangoproject.com/en/2.1/ref/contrib/admin/) .

### 8\. Probando nuestra API

![](https://cdn-images-1.medium.com/max/800/1*1kFjyZPuZJOb56K4-It3bw.png)

Estupendo. Ahora es el momento de que actualicemos nuestras vistas y terminemos las operaciones CRUD estándar.

### 9\. Agregar más vistas

`POST`es un método utilizado para crear (a veces actualizar) un recurso en la base de datos.

![](https://cdn-images-1.medium.com/max/800/1*WTrZ2L8xbCT0Of3VIDHuVw.png)

La mayoría de las veces, separamos `List`y vemos las Clases `Create` cuando queremos exponer una lista de conjuntos de datos mientras evitamos _fácilmente_ una determinada solicitud `POST`o creamos un recurso en la base de datos para esa Vista`List` específica.

El caso de uso siempre varía para las aplicaciones, puede optar por usar [ListCreateAPIView](http://www.django-rest-framework.org/api-guide/generic-views/#listcreateapiview) o incluso [ViewSets](http://www.django-rest-framework.org/api-guide/viewsets/) para combinar la lógica para un conjunto de vistas relacionadas.

_Opcional_ : dado que queremos mostrar los datos de una manera más sistemática, anulamos el metodo`create`y mapeamos nuestro controlador de respuesta personalizado en línea.

Agregar más vistas con los métodos `GET`, `PATCH`, `DELETE`para manejar un detalle específico de la publicación del blog.

![](https://cdn-images-1.medium.com/max/800/1*2U8RttTIfgb4tlflQM0sbA.png)

### 10\. Actualización de URL

![](https://cdn-images-1.medium.com/max/800/1*ZtQ8PGyiPWWtM818WkgBpA.png)

Ahora puede enviar solicitudes a su API a través de [Postman](https://www.getpostman.com/) o [Insomnia](https://insomnia.rest/), su aplicación o realizar solicitudes`GET`desde su navegador, ejemplos:

![](https://cdn-images-1.medium.com/max/800/1*1CFThbRfH-a4lTj_beOhRw.png)

Eso es todo. ¡Ha logrado desarrollar con éxito API RESTful con DRF.

By [Jaime Hernández](https://medium.com/@devjaime) on [April 15, 2022](https://medium.com/p/e6f019dbe177).

[Canonical link](https://medium.com/@devjaime/desarrollo-de-api-restful-con-python-django-y-django-rest-framework-e6f019dbe177)

Exported from [Medium](https://medium.com) on March 15, 2025.