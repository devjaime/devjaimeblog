---
layout: "../../layouts/BlogLayout.astro"
title: "Día uno Xamarin Essential Acelerometro"
description: ""
tags: ["code", "Xamarin"]
time: 4
featured: true
timestamp: "2019-04-17T12:20:31-0300"
filename: "2019-04-17_D-a-uno-Xamarin-Essential-Acelerometro-517507ef7615"
---

Día uno Xamarin Essential Acelerometro \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Día uno Xamarin Essential Acelerometro
======================================

Para empezar el día de hoy debemos considerar lo siguiente

* * *

### Día uno Xamarin Essential Acelerometro

Para empezar el día de hoy debemos considerar lo siguiente

Crear nuestro proyecto Xamarin, este proyecto sera creada en la nueva versión de Visual Studio 2019 si aun no lo tienen lo pueden descargar desde el siguiente link

[**Descargas | IDE, Code y Team Foundation Server | Visual Studio**  
_Descargas Descarga gratuita Descargar versión preliminar Evaluación gratuita Descargar versión preliminar Evaluación…_visualstudio.microsoft.com](https://visualstudio.microsoft.com/es/downloads/ "https://visualstudio.microsoft.com/es/downloads/")[](https://visualstudio.microsoft.com/es/downloads/)

![](https://cdn-images-1.medium.com/max/800/1*f3yOSezBo-HI1mi0KXqX7w.png)

Debes seleccionar donde dice, Crear un proyecto.

Luego de lo anterior selecciona Xamarin Forms que es la solución múltiplataforma que implementaremos

![](https://cdn-images-1.medium.com/max/800/1*cRfPXghdFdLTCY2oU8isjQ.png)

Identifica un nombre de solución y selecciona el botón Crear

![](https://cdn-images-1.medium.com/max/800/1*ToMebxjzhF2v1OB664MH5Q.png)

Nombre de la solución Xamarin.Forms

Para este ejemplo seleccionaremos una plantilla en blanco y seleccionaremos como plataforma de destino Android y IOS

![](https://cdn-images-1.medium.com/max/800/1*4W0hsJNoen-hZU3WXDkiEg.png)

Realizaremos click derecho en la solución para abrir administración de paquetes nuGet, en donde seleccionaremos Xamarin.Essentials, este instalaremos la versión estable más reciente.

![](https://cdn-images-1.medium.com/max/800/1*fdVW_kg_IZbsudXUfFnhAw.png)

Confirmaremos los paquetes nuGet instalados.

![](https://cdn-images-1.medium.com/max/800/1*XTj9cLbczi1q8lhSK1gSVg.png)

En nuestra solución crearemos 3 carpetas para nuestro patrón MVVM

![](https://cdn-images-1.medium.com/max/800/1*tcOBbqorqLTpvqaTB4pJyw.png)

Crearemos una pagina de contenido llamada AccelerometerPage.xaml

![](https://cdn-images-1.medium.com/max/800/1*txh7FiyfawOncD7LoNf60Q.png)

En la carpeta ViewModel deberás crear una clase llamada AccelerometerViewModel.cs

![](https://cdn-images-1.medium.com/max/800/1*zBPyk_rjk8Nv7X0uzvU59g.png)

También agregaremos la clase base llamada BaseViewModel.cs

![](https://cdn-images-1.medium.com/max/800/1*OI42I1EvdzQSiDjQhhz11Q.png)

y la clase ObservableObjet que nos servirá para notificar nuestras propiedades a la vista.

![](https://cdn-images-1.medium.com/max/800/1*AQdjghuAmvjonwkAMG8GJg.png)

Las 3 clases creadas a continuación para que copien su código dentro de ellas

AcelerómetroViewModel.cs

BaseViewModel.cs

ObservableObject.cs

Crearemos una vista llamada BasePage.cs

![](https://cdn-images-1.medium.com/max/800/1*BwWV2i0bY6nCKm7G77Ofkg.png)

El código de este a continuación

Nuestro xaml tendrá la siguiente estructura

Una vez implementado esta vista probaremos nuestra aplicación.

Para esto ocupo un dispositivo Android (Dispositivo físico) .

La visualización final de esta parte a continuación

![](https://cdn-images-1.medium.com/max/800/1*D4Ws2ceJOrkyKjC4QXHedQ.png)

El código de esta aplicación lo puedes encontrar en:

[**devjaime / acelerometro acelerometro**  
_Xamarin Forms Utilizando Xamarin Essentials — devjaime / Acelerometro_ github.com](https://github.com/devjaime/Acelerometro "https://github.com/devjaime/Acelerometro")[](https://github.com/devjaime/Acelerometro)

By [Jaime Hernández](https://medium.com/@devjaime) on [April 17, 2019](https://medium.com/p/517507ef7615).

[Canonical link](https://medium.com/@devjaime/d%C3%ADa-uno-xamarin-essential-acelerometro-517507ef7615)

Exported from [Medium](https://medium.com) on March 15, 2025.