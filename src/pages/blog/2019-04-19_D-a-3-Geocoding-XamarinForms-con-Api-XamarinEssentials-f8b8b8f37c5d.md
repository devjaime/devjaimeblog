---
layout: "../../layouts/BlogLayout.astro"
title: "Día 3 Geocoding XamarinForms con Api XamarinEssentials"
description: ""
tags: ["code", "Xamarin", "XamarinForms"]
time: 4
featured: true
timestamp: "2019-04-19T12:20:31-0300"
filename: "2019-04-19_D-a-3-Geocoding-XamarinForms-con-Api-XamarinEssentials-f8b8b8f37c5d"
---

Día 3 Geocoding XamarinForms con Api XamarinEssentials \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Día 3 Geocoding XamarinForms con Api XamarinEssentials
======================================================

En este tercer día y siguiendo los artículos anteriores, comentare mi experiencia con Geocoding de XamarinEssentials.

* * *

### Día 3 Geocoding XamarinForms con Api XamarinEssentials

En este tercer día y siguiendo los artículos anteriores, comentare mi experiencia con Geocoding de XamarinEssentials.

La clase Geocoding proporciona una API para geocodificar una dirección de posición en coordenadas posicionales y revertir las coordenadas de geocodificación en una dirección de posición.

Tal como en los 2 post anteriores abriremos nuestro Visual Studio y crearemos un nuevo proyecto de tipo XamarinForms llamado “Geocodificacion”

Seleccionaremos una plantilla en blanco, seleccionaremos nuestras plataformas de destino y presionamos el botón crear.

![](https://cdn-images-1.medium.com/max/800/1*5FvGAXXBR5mxgTXXx6m7JA.png)

Luego de lo anterior seleccionaremos Administración de paquetes Nuget y y presionamos en instalar Xamarin.Essentials.

![](https://cdn-images-1.medium.com/max/800/1*kMQm00o6XfpRDvdRZr_bng.png)

Luego de lo anterior crearas las siguientes carpetas para conservar nuestro patrón de diseño MVVM, (Si has visto los post anteriores te darás cuenta que es exactamente la misma estructura) por lo cual te dejo un enlace con las carpetas para que puedas copiar este modelo y así no tengas que crear una por una.

![](https://cdn-images-1.medium.com/max/800/1*7shj5AupIi7S2tAwtn90yw.png)

[**Geocodificacion.rar**  
_EMMVM Geocodingn_drive.google.com](https://drive.google.com/open?id=1Y5J6wtQoc0PTgtXVMf3fU8ptkuAxXih8 "https://drive.google.com/open?id=1Y5J6wtQoc0PTgtXVMf3fU8ptkuAxXih8")[](https://drive.google.com/open?id=1Y5J6wtQoc0PTgtXVMf3fU8ptkuAxXih8)

Luego en nuestra carpeta View creamos una nueva Page llamada “GeocodingPage.xaml”

![](https://cdn-images-1.medium.com/max/800/1*7f0FJYnMO8MC53Vnk8k0zA.png)

y en nuestra carpeta ViewModel creamos en el enlace llamado “GeocodingViewModel”

![](https://cdn-images-1.medium.com/max/800/1*9-6FzQGoQqFU7SCXvRu6tA.png)

El código de nuestra View “GeocodingPage.xaml” sera el siguiente.

En la clase deberás copiar lo siguiente.

En nuestro ViewModel deberes escribir el siguiente código.

y por ultimo deberás fijarte que inicializas vista desde el app principal

![](https://cdn-images-1.medium.com/max/800/1*VgZ2LBPRPbgLxavhQkfpWQ.png)

Una cosa importante es siempre fijarte en los permisos dependiendo de nuestro dispositivo, en este caso como estoy probando con un dispositivo Android, deberás realizar lo siguiente.

En el archivo AndroidManifiest de nuestro proyecto Android agrega lo siguiente

![](https://cdn-images-1.medium.com/max/800/1*zvGiKzCEPPTjApwQ1twMsA.png)

y en el assambly que esta en la misma parte agrega el siguiente código

![](https://cdn-images-1.medium.com/max/800/1*1Y4ttFo4O9J_C7RjrwCs_Q.png)

El diseño final de nuestra aplicación sera el siguiente, si vez coincidí perfectamente con la dirección buscada en google maps

![](https://cdn-images-1.medium.com/max/800/1*J-gVSAEnrTHG6ETmKXchlw.png)

El código de la app lo puedes descargar del siguiente repositorio.

[**devjaime/Geocodificacion**  
_Repositorio XamarinForms donde se explica el sensor geocoding para obtener información de una ubicación en particular …_github.com](https://github.com/devjaime/Geocodificacion "https://github.com/devjaime/Geocodificacion")[](https://github.com/devjaime/Geocodificacion)

By [Jaime Hernández](https://medium.com/@devjaime) on [April 19, 2019](https://medium.com/p/f8b8b8f37c5d).

[Canonical link](https://medium.com/@devjaime/d%C3%ADa-3-geocoding-xamarinforms-con-api-xamarinessentials-f8b8b8f37c5d)

Exported from [Medium](https://medium.com) on March 15, 2025.