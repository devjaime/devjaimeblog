---
layout: "../../layouts/BlogLayout.astro"
title: "Que es Cookiecutter Django ?"
description: ""
tags: ["code", "django", "python"]
time: 4
featured: true
timestamp: "2022-04-05T12:20:31-0300"
filename: "2022-04-05_Que-es-Cookiecutter-Django---9d51d68950bc"
---

Que es Cookiecutter Django ? \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Que es Cookiecutter Django ?
============================

Este pequeña introducción es tanto para recordarme a “mi mismo” que existe esta herramienta. Como para compartir esta forma fácil y bonita…

* * *

### Que es Cookiecutter Django ?

![](https://cdn-images-1.medium.com/max/800/1*e51KT42qJ_PWbMwcVa7yyA.png)

Este pequeña introducción es tanto para recordarme a “mi mismo” que existe esta herramienta. Como para compartir esta forma fácil y bonita de empezar un proyecto en django backend.

Que es un Cookiecutter? : Dada la definición técnica

> es una utilidad de línea de comandos que crea proyectos a partir de una plantilla (plantillas de proyectos), por ejemplo, crear un proyecto de paquete de Python a partir de una plantilla de proyecto de paquete de Python. La gracia de estás plantillas es que vienen con todo lo necesario para empezar un buen proyecto, por ejemplo de Backend.

#### Aquí un repositorio de configuración con una guía rápida

[**GitHub - cookiecutter/cookiecutter-django: Cookiecutter Django is a framework for jumpstarting…**  
_Powered by Cookiecutter, Cookiecutter Django is a framework for jumpstarting production-ready Django projects quickly…_github.com](https://github.com/cookiecutter/cookiecutter-django "https://github.com/cookiecutter/cookiecutter-django")[](https://github.com/cookiecutter/cookiecutter-django)

[**Deployment with Docker - Cookiecutter Django 2022.14.2 documentation**  
_If you are deploying to AWS, you can use the IAM role to substitute AWS credentials, after which it's safe to remove…_cookiecutter-django.readthedocs.io](https://cookiecutter-django.readthedocs.io/en/latest/deployment-with-docker.html "https://cookiecutter-django.readthedocs.io/en/latest/deployment-with-docker.html")[](https://cookiecutter-django.readthedocs.io/en/latest/deployment-with-docker.html)

### Características

*   Para Django 3.2
*   Funciona con Phyton 3.9
*   Renderiza proyectos de Django con una cobertura de prueba inicial del 100 %
*   Twitter [Bootstrap](https://github.com/twbs/bootstrap) v5
*   Configuraciones basadas en [12 factores a través](http://12factor.net/) [de django-environ](https://github.com/joke2k/django-environ)
*   Seguro por defecto. Creemos en SSL.
*   Configuraciones de desarrollo y producción optimizadas
*   Registro a través [de django-allauth](https://github.com/pennersr/django-allauth)
*   Viene con un modelo de usuario personalizado listo para usar
*   Configuración ASGI básica opcional para Websockets
*   Construcción estática personalizada opcional usando Gulp y livereload
*   Envíe correos electrónicos a través [de Anymail](https://github.com/anymail/django-anymail) (usando [Mailgun](http://www.mailgun.com/) de forma predeterminada o Amazon SES si AWS es el proveedor de la nube seleccionado, pero se puede cambiar)
*   Almacenamiento multimedia con Amazon S3 o Google Cloud Storage
*   Compatibilidad con Docker mediante [docker-compose](https://github.com/docker/compose) para desarrollo y producción (utilizando [Traefik](https://traefik.io/) con compatibilidad con [LetsEncrypt](https://letsencrypt.org/) )
*   [Perfil](https://devcenter.heroku.com/articles/procfile) para implementar en Heroku
*   Instrucciones para implementar en [PythonAnywhere](https://www.pythonanywhere.com/)
*   Ejecutar pruebas con unittest o pytest
*   Versión personalizable de PostgreSQL
*   Integración predeterminada con [compromiso previo](https://github.com/pre-commit/pre-commit) para identificar problemas simples antes de enviarlos a revisión de código

_Espero sea de utilidad para alguien más_

Dejo un video de configuración (pero es siempre bueno ver la documentación oficial del proyecto en el caso de que algo cambiara)

By [Jaime Hernández](https://medium.com/@devjaime) on [April 5, 2022](https://medium.com/p/9d51d68950bc).

[Canonical link](https://medium.com/@devjaime/que-es-cookiecutter-django-9d51d68950bc)

Exported from [Medium](https://medium.com) on March 15, 2025.