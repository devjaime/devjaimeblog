---
layout: "../../layouts/BlogLayout.astro"
title: "Día 2 Bateria En Xamarin Forms con Xamarin Essentials"
description: ""
tags: ["code", "Xamarin"]
time: 4
featured: true
timestamp: "2019-04-19T12:20:31-0300"
filename: "2019-04-19_D-a-2-Bateria-En-Xamarin-Forms-con-Xamarin-Essentials-4d4f0ae8133"
---

Día 2 Bateria En Xamarin Forms con Xamarin Essentials \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Día 2 Bateria En Xamarin Forms con Xamarin Essentials
=====================================================

En este articulo cubriré la experiencia con el segundo sensor a probar en este caso es la batería de nuestro dispositivo.

* * *

### Día 2 Bateria En Xamarin Forms con Xamarin Essentials

En este articulo cubriré la experiencia con el segundo sensor a probar en este caso es la batería de nuestro dispositivo.

La Api que captura el sensor de Batería permite verificar la información de esta y monitorear los cambios, proporciona información sobre el estado de ahorro de energía del dispositivo, que indica si el dispositivo se está ejecutando en un modo de bajo consumo.

Un ejemplo de uso seria el siguiente:

Las aplicaciones deben evitar el procesamiento en segundo plano si el estado de ahorro de energía del dispositivo está activado.

Para esto debemos comenzar de la siguiente forma:

Creamos un nuevo proyecto en visual studio

![](https://cdn-images-1.medium.com/max/800/1*vVren6nk6s4y4jYa9tj1rQ.png)

Seleccionamos una plantilla de Xamarin.Form multiplataforma.

![](https://cdn-images-1.medium.com/max/800/1*7OQvoRukg6h3sZcIlUhQkA.png)

Elegimos el nombre de nuestra Solución

![](https://cdn-images-1.medium.com/max/800/1*lojCSObhbHrzk_zhTO95kQ.png)

Seleccionamos una plantilla en blanco con nuestras plataformas de destino, en este caso Android / IOS

![](https://cdn-images-1.medium.com/max/800/1*APIH6o54MdmLHqGUQM3EHQ.png)

y creamos nuestra solución.

Damos Click derecho sobre nuestra solución y agregamos el package nuGet xamarin.essentials, lo agregamos en nuestra solución para los proyectos involucrados

![](https://cdn-images-1.medium.com/max/800/1*juy6Pq8MsiJmJTEZ3xqPeg.png)

Crearemos la siguiente estructura de carpetas en nuestra aplicación (Si ya vienes del primer post te darás cuenta que es la misma estructura de carpetas y puedes copiarlas directamente del repositorio). Esto solo es para que nuestro patrón de diseño MVVM funcione correctamente.

![](https://cdn-images-1.medium.com/max/800/1*sBY979qvtTTXwex_2iJAww.png)

En nuestra vista carpeta View agregaremos una nueva page llamada BatteryPage

![](https://cdn-images-1.medium.com/max/800/1*R-TaMw1p67zeeLHnvCKFYQ.png)

y en nuestro ViewModel agregaremos una clase llamada BatteryViewModel.cs

![](https://cdn-images-1.medium.com/max/800/1*oB9pwRkoUTUEOSqMyIgdCw.png)

En nuestra vista xaml debemos agregar el siguiente código

En la clase de nuestra vista debemos agregar el siguiente código.

En nuestro viewmodel debemos agregar lo siguiente:

Tambien debes agregar los permisos en el proyecto Android para que esto funcione

AssemblyInfo.cs

\[assembly: UsesPermission(Android.Manifest.Permission.BatteryStats)\]

AndroidManifest.xml

<uses-permission android:name=”android.permission.BATTERY\_STATS” />

![](https://cdn-images-1.medium.com/max/800/1*fxREiDRru0AHrFevX4PGtg.png)

El resultado final de nuestra app sera el siguiente:

![](https://cdn-images-1.medium.com/max/800/1*C_7EnEA10KKiqSadOu8zVw.png)

Puedes descargar el código fuente de esta app desde:

[**devjaime/Bateria**  
_Sensor de bateria con Xamarin Essentials Xamarin Forms - devjaime/Bateria_github.com](https://github.com/devjaime/Bateria "https://github.com/devjaime/Bateria")[](https://github.com/devjaime/Bateria)

By [Jaime Hernández](https://medium.com/@devjaime) on [April 19, 2019](https://medium.com/p/4d4f0ae8133).

[Canonical link](https://medium.com/@devjaime/d%C3%ADa-2-bateria-en-xamarin-forms-con-xamarin-essentials-4d4f0ae8133)

Exported from [Medium](https://medium.com) on March 15, 2025.