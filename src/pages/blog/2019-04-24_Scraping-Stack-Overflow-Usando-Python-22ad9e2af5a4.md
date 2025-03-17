---
layout: "../../layouts/BlogLayout.astro"
title: "Scraping Stack Overflow Usando Python"
description: ""
tags: ["code", "scrapping", "python"]
time: 4
featured: true
timestamp: "2019-04-24T12:20:31-0300"
filename: "2019-04-24_Scraping-Stack-Overflow-Usando-Python-22ad9e2af5a4"
---

Scraping Stack Overflow Usando Python
=====================================

Escribo este articulo debido a que estuve viendo el video Scraping Stack Overflow Using Python Tutorial | Beautiful Soup

* * *

### Scraping Stack Overflow Usando Python

Escribo este articulo debido a que estuve viendo el video Scraping Stack Overflow Using Python Tutorial | Beautiful Soup

Me pareció genial como en el vídeo se nos muestra el uso de scrapping en Python y quise replicarlo y dejar mi experiencia, Nota importante sigan los vídeos y a la persona detrás de estos artículos un tipo muy inteligente y sus vídeos de Flutter son geniales.

Para los que no conozcan el termino “scraping”

La definición de scraping es la siguiente

**_Web scraping_** es una técnica utilizada mediante [programas de software](https://es.wikipedia.org/wiki/Programa_inform%C3%A1tico "Programa informático") para extraer información de [sitios web](https://es.wikipedia.org/wiki/Sitio_web "Sitio web"). Usualmente, estos programas simulan la navegación de un humano en la [World Wide Web](https://es.wikipedia.org/wiki/World_Wide_Web "World Wide Web") ya sea utilizando el [protocolo HTTP](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol") manualmente, o incrustando un [navegador](https://es.wikipedia.org/wiki/Navegador_web "Navegador web") en una [aplicación](https://es.wikipedia.org/wiki/Aplicaci%C3%B3n_inform%C3%A1tica "Aplicación informática").

Este tutorial se nos muestra la forma de obtener una pagina web y tomar su información para poder transformarla en un archivo json que después podrá ser encapsulada y consumida.

Lo primero es descargar python de la pagina oficial

[https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://cdn-images-1.medium.com/max/800/1*R27V3urNQJ7kIcF32ytqMA.png)

### Asegurate de tener Python & pip

Antes de continuar, asegurate de que tienes Python y que esta disponible en tu línea de comandos. Puedes verificar esto ejecutando:

$ python --version

Deberías tener un output como `3.7.X`.

Nota

Si eres nuevo y obtienes un error como este:

> **\>>>** python  
> Traceback (most recent call last):  
>  File "<stdin>", line 1, in <module>  
> NameError: name 'python' is not defined

Es porque este comando tiene la intención de correr en un _shell_ (también llamado _terminal_ o _consola_).

Adicionalmente, necesitas asegurarte que tienes pip disponible. Puedes verificar esto ejecutando:

$ pip --version  
pip 9.0.1

Si tienes instalado Python desde su fuente, con un instalador de [python.org](https://python.org/), o via [\`Homebrew\`\_](https://pipenv-es.readthedocs.io/es/latest/install.html#id3)deberías ya tener pip. Si estas en Linux e instalaste a través de tu manejador de paquetes, tal vez necesites [instalar pip](https://pip.pypa.io/en/stable/installing/) por separado.

Si tu plan es instalar pipenv usando Hombrew puedes saltarte este paso. El instalador de Homebrew se encarga de pip por ti.

### Instalando Pipenv

Pipenv es un manejador de dependencias para los proyectos de Python. Si estas familiarizado con Node.js” [npm](https://www.npmjs.com/) o Ruby [bundler](http://bundler.io/), es similar en espíritu a estas herramientas. Mientras pip puede instalar paquetes de Python, Pipenv es recomendado como herramienta de nivel superior que simplifica el manejo de dependencias para casos comunes.

Use `pip` to install Pipenv:

$ pip install --user pipenv

  
Algunas capturas  
Lo primero que realice fue instalar homebrew

![](https://cdn-images-1.medium.com/max/800/1*ndCcXoBfX1s7eYLU0RUB2Q.png)

Despues de eso instale pipenv desde hombrew  
  

![](https://cdn-images-1.medium.com/max/800/1*aw3ylNSJRDQ9DuFClK6dqA.png)

![](https://cdn-images-1.medium.com/max/800/1*7WSQZeOzCgGkh28sHKINaQ.png)

Puedes descargar el código fuente desde 

[https://github.com/devjaime/webscraping](https://github.com/devjaime/webscraping)  
  

By [Jaime Hernández](https://medium.com/@devjaime) on [April 24, 2019](https://medium.com/p/22ad9e2af5a4).

[Canonical link](https://medium.com/@devjaime/scraping-stack-overflow-usando-python-22ad9e2af5a4)

Exported from [Medium](https://medium.com) on March 15, 2025.