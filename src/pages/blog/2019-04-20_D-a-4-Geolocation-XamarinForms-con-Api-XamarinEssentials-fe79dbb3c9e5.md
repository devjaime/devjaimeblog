---
layout: "../../layouts/BlogLayout.astro"
title: "Día 4 Geolocation XamarinForms con Api XamarinEssentials "
description: ""
tags: ["code", "Xamarin", "XamarinForms"]
time: 4
featured: true
timestamp: "2019-04-20T12:20:31-0300"
filename: "2019-04-20_D-a-4-Geolocation-XamarinForms-con-Api-XamarinEssentials-fe79dbb3c9e5"
---

Día 4 Geolocation XamarinForms con Api XamarinEssentials \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Día 4 Geolocation XamarinForms con Api XamarinEssentials
========================================================

La clase de Geolocalización proporciona un API para recuperar las coordenadas actuales de geolocalización del dispositivo.

* * *

### Día 4 Geolocation XamarinForms con Api XamarinEssentials

La clase de Geolocalización proporciona un API para recuperar las coordenadas actuales de geolocalización del dispositivo.

Para empezar con este proyecto abriremos nuestro Visual Studio

Crearemos un nuevo proyecto

![](https://cdn-images-1.medium.com/max/800/1*jXlA4RMUKE2z12HPR26IWg.png)

Seleccionaremos Aplicación Móvil (Xamarin.Forms)

![](https://cdn-images-1.medium.com/max/800/1*O6mfYAuUqbLhJg9h5eb-Tw.png)

Crearemos nuestra solución Geolocalización

![](https://cdn-images-1.medium.com/max/800/1*ngxma5dj2s_7nSOZFK7RoQ.png)

![](https://cdn-images-1.medium.com/max/800/1*4f_RyNU3-qDvQj-YTwRczw.png)

Una vez creado nuestro proyecto, agregaremos el paquete nuGet Xamarin.Essentials como se muestra a continuación.

![](https://cdn-images-1.medium.com/max/800/1*AF2Klsyd5g2adCQfkJh-5g.png)

El link de nuestro patrón de diseño y al igual que en post anteriores lo dejare acá

[**MVVM.rar**  
_Edit description_drive.google.com](https://drive.google.com/open?id=1QwNzT8fc5O8d8X2gmyvD45kRRdzB8eMA "https://drive.google.com/open?id=1QwNzT8fc5O8d8X2gmyvD45kRRdzB8eMA")[](https://drive.google.com/open?id=1QwNzT8fc5O8d8X2gmyvD45kRRdzB8eMA)

Solo deben copiarlo al proyecto como se muestra a continuación.

![](https://cdn-images-1.medium.com/max/800/1*XWb_39kJfThyMgss9-mvCw.png)

Una vez realizado esto crearemos un page llamado GeolocationPage.xaml, (esto en nuestra carpeta View).

![](https://cdn-images-1.medium.com/max/800/1*CIK7QoZCE7ktsGIX4xjjZw.png)

Luego en nuestra carpeta ViewModel crearemos la clase GeolocationViewModel

![](https://cdn-images-1.medium.com/max/800/1*bdZ10oasX7J1mF-We6LhMg.png)

Nuestra Vista GeolocationPage.xaml tendrá el siguiente código

Donde la información obtenida sera la siguiente:

Última ubicación conocida.

Ubicación actual.

La exactitud

Nuestra clase de la vista tendrá el siguiente código

y nuestro ViewModel tendrá el siguiente código.

También debemos considerar los permisos para nuestra plataforma de destino en este caso Android

Archivo AndroidManifiest

![](https://cdn-images-1.medium.com/max/800/1*YaOJViOdUbnAX4tUSGfLvA.png)

![](https://cdn-images-1.medium.com/max/800/1*WRhAEb5OCgjxNEX1vrRsng.png)

A continuación los permisos para que los incluyas.

en nuestro app.xaml.cs apunta a nuestra pagina creada de la siguiente forma.

![](https://cdn-images-1.medium.com/max/800/1*3PS9TQ9QqwNAS7AQfjuW8g.png)

Ahora podrás ejecutar la aplicación, como veras te aparecerán las coordenadas de tu ubicación actual (en este caso aparecen las de mi casa).

![](https://cdn-images-1.medium.com/max/800/1*06RbuyXBzWdVkHixaE2izQ.png)

En el próximo post y debido a las cosas que se pueden hacer con esta librería intentare realizar algo más llamativo relacionado con mapas.

Se me olvidaba!! el código fuente de la app lo pueden descargar desde

[**devjaime/geolocalizacion**  
_obtiene la localización actual en xamarin forms con Xamarin Essentials - devjaime/geolocalizacion_github.com](https://github.com/devjaime/geolocalizacion "https://github.com/devjaime/geolocalizacion")[](https://github.com/devjaime/geolocalizacion)

By [Jaime Hernández](https://medium.com/@devjaime) on [April 20, 2019](https://medium.com/p/fe79dbb3c9e5).

[Canonical link](https://medium.com/@devjaime/d%C3%ADa-4-geolocation-xamarinforms-con-api-xamarinessentials-fe79dbb3c9e5)

Exported from [Medium](https://medium.com) on March 15, 2025.