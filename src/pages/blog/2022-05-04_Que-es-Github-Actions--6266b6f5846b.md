---
layout: "../../layouts/BlogLayout.astro"
title: "Que es Github Actions?"
description: ""
tags: ["code", "githubActions"]
time: 4
featured: true
timestamp: "2022-05-04T12:20:31-0300"
filename: "2022-05-04_Que-es-Github-Actions--6266b6f5846b"
---

Que es Github Actions? \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Que es Github Actions?
======================

Es una característica ofrecida por GitHub que permite a los desarrolladores a crear workflows que pueden ser usados para compilar, probar e…

* * *

### Que es Github Actions?

![](https://cdn-images-1.medium.com/max/800/0*w5Fsp29pbWIUpW7Q.png)

> Es una característica ofrecida por **GitHub** que permite a los desarrolladores a crear workflows que pueden ser usados para compilar, probar e implementar código, nos da la posibilidad de crear flujos de CI/CD dentro de un repositorio de Git.

Por lo menos eso dice al buscar en google.

### Contexto

Debo reconocer que no soy muy actualizado en cuanto a las últimas tecnologías (o más bien espero que estas sean aceptadas por la comunidad) para poder probarlas.

GitHub Actions no es la excepción y aunque lo tengo integrado en mi sitio web personal, para mi trabajo diario suelo ocupar un despliegue continuo con Docker y Kubernetes (o en un pipeline de Jenkins).

### Inicio rápido para acciones de GitHub

[**Quickstart for GitHub Actions - GitHub Docs**  
_You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow…_docs.github.com](https://docs.github.com/es/actions/quickstart "https://docs.github.com/es/actions/quickstart")[](https://docs.github.com/es/actions/quickstart)

En el link anterior podrás encontrar una breve introducción y lo que voy a comentar no es más que lo mismo que la documentación oficial que también esta en español por lo cual te invito a leerla.

### Introducción

Solo necesita un repositorio de GitHub para crear y ejecutar un flujo de trabajo de acciones de GitHub. En esta guía, agregará un flujo de trabajo que demuestra algunas de las funciones esenciales de GitHub Actions.

El siguiente ejemplo muestra cómo se pueden activar automáticamente los trabajos de GitHub Actions, dónde se ejecutan y cómo pueden interactuar con el código en su repositorio.

### Creando tu primer flujo de trabajo

1.  Cree un `.github/workflows`directorio en su repositorio en GitHub si este directorio aún no existe.
2.  En el `.github/workflows`directorio, cree un archivo llamado `github-actions-nameactios.yml`. Para obtener más información, consulte " [Creación de nuevos archivos](https://docs.github.com/es/github/managing-files-in-a-repository/creating-new-files) ".
3.  Copie los siguientes contenidos YAML en el `github-actions-nameactios.yml`

Acá me detendré un momento para mostrar mi propio flujo y la problemática a resolver para que ustedes también puedan crear sus propias integraciones.

### Caso 1 App React

Mi sitio web es una app react desplegada en [netlify](https://www.netlify.com/)

[**Actions · devjaime/websitepersonal**  
_You can't perform that action at this time. You signed in with another tab or window. You signed out in another tab or…_github.com](https://github.com/devjaime/websitepersonal/actions "https://github.com/devjaime/websitepersonal/actions")[](https://github.com/devjaime/websitepersonal/actions)

Dejo el enlace pero aquí, lo que necesitaba era que al momento de hacer un pull request y un push de mis cambios se ejecutara test automatizados y una vez completados realizara el deploy de los cambios en el servidor de netlify

Para lo anterior seguí la siguiente estructura en el archivo [.github/workflows/netlify.js.yml](https://github.com/devjaime/websitepersonal/blob/2c359658af78ca0d1d6434346505478d4de97346/.github/workflows/netlify.js.yml)

![](https://cdn-images-1.medium.com/max/800/1*iFxGhxbHCasUGTuoJJTn9g.png)

Nota: Ya existen actions predifinidas para distintas tipos de casos las cuales puedes ir viendo en el marketplace o puedes crear una propia

![](https://cdn-images-1.medium.com/max/800/1*fWRQo6k4k6d1xUtettLrhg.png)

### Caso 2 Copy FTP wordpress

Hace poco también tuve que copiar archivos diréctamenete a un servidor VPS de [digitalocean](https://m.do.co/c/a2fcb9500d34), y también ocupe una actions para realizar este proceso al momento de hacer push a mis cambios.

![](https://cdn-images-1.medium.com/max/800/1*HAdfQW5Jkgiltq5Tr57xQw.png)

Como vez es muy fácil crear tus propias acciones y puedes hacer lo que se te ocurra automatizar y desplegar con tu código, en este caso solo reemplazo la carpeta themes cada vez que se hace un push a una Branch X.

By [Jaime Hernández](https://medium.com/@devjaime) on [May 4, 2022](https://medium.com/p/6266b6f5846b).

[Canonical link](https://medium.com/@devjaime/que-es-github-actions-6266b6f5846b)

Exported from [Medium](https://medium.com) on March 15, 2025.