---
layout: "../../layouts/BlogLayout.astro"
title: "Azure CLI usando una Mac"
description: ""
tags: ["code", "azure"]
time: 4
featured: true
timestamp: "2018-06-21T12:20:31-0300"
filename: "2018-06-21_Azure-CLI-usando-una-Mac-f2c620ae436f"
---

Azure CLI usando una Mac

Azure CLI usando una Mac
========================

Video tutorial a continuación

* * *

### Azure CLI usando una Mac

Video tutorial a continuación

El **Azure CLI 2.0** proporciona una experiencia de línea de comandos para la gestión de los recursos Azure. Puedes usarlo con Azure Cloud Shell que se encuentra dentro de su navegador web, o puede instalarlo en macOS, Linux y Windows. En esta publicación, lo instalaremos en una Mac.

Azure CLI 2.0 en una Mac es instalar [Homebrew](https://brew.sh/) . Básicamente, homebrew es un administrador de paquetes para Mac que facilita la instalación de la aplicación.

Una vez que esté instalado, se deben ejecutar estos dos comandos:

    brew update brew install azure-cli

El primer comando simplemente actualiza la base de datos homebrew y el siguiente comando instala Azure CLI 2.0 como se muestra a continuación.

![](https://cdn-images-1.medium.com/max/800/0*GXQowmNeNDtJVaZI.png)

Pueden escribir `az h`para obtener la documentación de ayuda o vaya a [aka.ms/cli](https://aka.ms/cli) para leer los documentos.

### Inicia sesión en Azure

![](https://cdn-images-1.medium.com/max/800/0*S7KvV0xYMQSbp_E3.png)

### usar el `az login`comando para iniciar sesión en su cuenta de Azure. Verás el siguiente mensaje:

    To sign in, use a web browser to open the page https://aka.ms/devicelogin and enter the code XXX to authenticate.

Abra un navegador web y vaya a [https://microsoft.com/devicelogin](https://microsoft.com/devicelogin) ingrese su código. Se te pedirá que ingreses el código para autenticarte.

Vuelva a la aplicación de terminal y verá algo similar a lo siguiente si inició sesión correctamente:

Tenga en cuenta que siempre puede volver a esta pantalla con la `az account`lista. Ahora puede intentar crear una máquina virtual de Ubuntu utilizando solo la CLI. [Aquí](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-cli) hay un excelente documento para comenzar.

Asegúrese de leer los [documentos CLI](https://docs.microsoft.com/en-us/cli/azure/overview) completos para obtener más información.

Este articulo fue basado en el blog [https://www.michaelcrump.net/azure-tips-and-tricks34/](https://www.michaelcrump.net/azure-tips-and-tricks34/)

* * *

_Originally published at_ [_lawebdelprogramador.cl_](http://lawebdelprogramador.cl/bloglawebdelprogramador/2018/06/21/azure-cli-usando-una-mac/) _on June 21, 2018._

By [Jaime Hernández](https://medium.com/@devjaime) on [June 21, 2018](https://medium.com/p/f2c620ae436f).

[Canonical link](https://medium.com/@devjaime/azure-cli-usando-una-mac-f2c620ae436f)

Exported from [Medium](https://medium.com) on March 15, 2025.