---
layout: "../../layouts/BlogLayout.astro"
title: "Publicación de una app Flutter en google play store "
description: ""
tags: ["code", "Flutter", "Google Play"]
time: 4
featured: true
timestamp: "2019-03-10T12:20:31-0300"
filename: "2019-03-10_Publicaci-n-de-una-app-Flutter-en-google-play-store-57b07092092c"
---

Publicación de una app Flutter en google play store
===================================================

Hace un tiempo atrás compre una cuenta google play para publicar aplicaciones en la tienda de google play store, la finalidad al principio…

* * *

### Publicación de una app Flutter en google play store

* * *

Hace un tiempo atrás compre una cuenta google play para publicar aplicaciones en la tienda de google play store, la finalidad al principio es poder tener mi propio portafolio de aplicaciones para posteriormente poder vender alguna de estas aplicaciones en la misma tienda.

Dentro de estos pasos de publicación lo primero que realice fue inscribir este cuenta que tiene un valor de 25 USD en la pagina oficial, para este primer paso puedes ir a leer un poco sobre publicación de aplicaciones en el sitio oficial de android y posteriormente abrir play console.

Te dejo el link aquí: [https://developer.android.com/distribute/console/?hl=ES](https://developer.android.com/distribute/console/?hl=ES)

![](https://cdn-images-1.medium.com/max/800/1*JdJSLckFwpVBvOdNMQBL_g.png)

Pagina oficial para el proceso de publicación en la tienda de google play store

En la tienda debes tener presente 3 factores importantes

Contar con una cuenta de correo gmail, tener una tarjeta de crédito para adquirir los derechos de publicación y leer todos los tips para poder tener la mejor experiencia de publicación.

![](https://cdn-images-1.medium.com/max/800/1*UrXikJj0OqQXWTwEDV77bQ.png)

Google play Console.

Una vez realizado este paso lo que realice fue ir a la pagina oficial de flutter para poder verificar los pasos de publicación.

El link es el siguiente: [https://flutter.dev/docs/deployment/android](https://flutter.dev/docs/deployment/android)

![](https://cdn-images-1.medium.com/max/800/1*wrxCK0-5emwaW8ax-VuYaw.png)

pagina oficial de flutter y su sección de despliegue en la tienda de google play store.

Una buena alternativa (aunque se actualiza con un cierto desfase) es ingresar a la traducción realizada por la comunidad cuyo link seria el siguiente:

[**Preparando para release una app Android**  
_Durante el ciclo de desarrollo típico, probarás una aplicación usando \`flutter run\` en la línea de comando, los botones…_flutter-es.io](https://flutter-es.io/docs/deployment/android "https://flutter-es.io/docs/deployment/android")[](https://flutter-es.io/docs/deployment/android)

![](https://cdn-images-1.medium.com/max/800/1*nSo4hPS2vArZztwOGe-R5A.png)

traducción realizada por la comunidad

Cabe mencionar que este proyecto de traducción es un gran aporte al cual podrías integrarte sin ningún problema bifucardo su proyecto y apoyando en la traducción, la comunidad te lo agradecería mucho.

Link

[**Flutter ES**  
_Comunidad de desarrolladores de Flutter de habla hispana. - Flutter ES_github.com](https://github.com/flutter-es "https://github.com/flutter-es")[](https://github.com/flutter-es)

Entonces para esta demostración ocupare una aplicación que lo único que realiza es la conversión de monedas de un país en otro la cual pueden revisarla del siguiente repositorio:

[**devjaime/FlutterConversor**  
_Simple conversor de monedas para mostrar publicación en la google play store - devjaime/FlutterConversor_github.com](https://github.com/devjaime/FlutterConversor "https://github.com/devjaime/FlutterConversor")[](https://github.com/devjaime/FlutterConversor)

Entonces el primer paso segun la guia oficial de flutter es revisar App Manifest de Android el cual se encuentra en esta dirección <app dir>/android/app/src/main

De este apartado dado que nuestra aplicación se conecta a un api obtiene los datos del valor de cada moneda desde internet dejaremos activo el permiso correspondiente a este, si su app no se conecta a internet no es necesario que activen este permiso.

![](https://cdn-images-1.medium.com/max/800/1*95Fm22DcfHZVvN7Cctjp3w.png)

Paso 1 sección en la que nos encontramos

![](https://cdn-images-1.medium.com/max/800/1*_ZCz5Csn8-fw7chKYjhfIw.png)

Ruta y descripción donde se encuentran los campos a cambiar.

Revisando la configuración de compilación

![](https://cdn-images-1.medium.com/max/800/1*QgYB2JSSCL9x-IvzQxthww.png)

Revisión de la ruta de configuración

Este archivo al principio me costo identificarlo ya que existen varios del mismo nombre por lo cual creo que una captura de pantalla de la aplicación y ver en que lugar se encuentra aclarara esto.

![](https://cdn-images-1.medium.com/max/800/1*F0rSLiShkOS1mUghtpqXng.png)

Captura de pantalla para identificar donde se encuentran los valores anteriormente descritos.

### Añadiendo un icono para el Launcher

![](https://cdn-images-1.medium.com/max/800/1*LzJC9ukRiKH6BNSXZ5Y1dQ.png)

Los distintos iconos que van a aparecer en nuestra app siempre son un tema (ya que existen distintas medidas el como generarlos y donde colocarlos)

Para los que no saben de que se trata esto les dejo una captura de pantalla:

![](https://cdn-images-1.medium.com/max/800/1*OWgVOr1ADxblrHauveOpgw.png)

captura de pantalla realizada desde la extensión vysor [https://www.vysor.io/](https://www.vysor.io/)

Para la generación de los distintos tamaños de estos iconos tenemos varias formas de realizarlo, la que mas aconsejo yo (debido a que no soy un diseñador gráfico) es ocupar un programa que haga el trabajo por nosotros

[**App Icon Generator**  
_Generate icons and images for mobile apps, android and iOS. No need to upload or download. Works on your browser_appicon.co](https://appicon.co/ "https://appicon.co/")[](https://appicon.co/)

Con este generador de iconos solo debemos pegar una imagen con la sufiente densidad (densidad mas alta) y generara todos los iconos necesarios).

Ahora simplemente debemos copiar y reemplazar los iconos y carpetas generadas a nuestra carpeta de assets generados.

![](https://cdn-images-1.medium.com/max/800/1*GaiHw8GY6BpCKUItTRMA-w.png)

![](https://cdn-images-1.medium.com/max/800/1*c41V-T6DQhJ9Lru34HsyzA.png)

Ruta donde se deben copiar y reemplazar los iconos

Firmado de la app

![](https://cdn-images-1.medium.com/max/800/1*70enG2ea54XpKrKdlBqIHg.png)

El firmado de la app fue una de las cosas que más me costo entender y existen varios vídeos y tutoriales de cual es la mejor forma de realizarlo y todas son distintas, por lo cual lo que intente fue realizar la forma más simple posible.

Lo primero que realice fue ejecutar flutter doctor -v en la terminal para ver donde estaba instalado el jdk de java que ejecuta flutter:

![](https://cdn-images-1.medium.com/max/800/1*xEYfgD9gtW_uauXJB3I_LQ.png)

ruta donde se encuentra el java binary at

Si se van al explorador encontraran una ruta como la siguiente

![](https://cdn-images-1.medium.com/max/800/1*dSgdgEaucWTJRb_w7F1deg.png)

El explorador de windows mostrara la siguiente ruta

Entonces desde la ventana cmd me muevo a la misma ruta

Nota importante deben abrir la ventana cmd en modo administrador

![](https://cdn-images-1.medium.com/max/800/1*N2P01JleA3NYmUGDLmEf7w.png)

cmd debe ser abierto como administrador

![](https://cdn-images-1.medium.com/max/800/1*4or2OCSZxXWMKaoXLPrSKA.png)

con cd seguido de la ruta donde se encuentra jre te mueves al directorio para ejecutar el comando

Luego de lo anterior pegas el comando siguiente:

keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key

en mi derivación de este comando para windows lo que realice fue cambiar la ruta “~/key.jks” a “c:\\key.jks” también podrías cambiar el alias o el nombre del archivo si lo deseas.

como se muestra a continuación.

keytool -genkey -v -keystore c:\\keyapp.jks -keyalg RSA -keysize 2048 -validity 10000 -alias keyapp

la razón por la que dejo el archivo en la raiz de c: es solo como demostración

![](https://cdn-images-1.medium.com/max/800/1*AueF2x5P96P0J232dXZI2g.png)

y en esta ejecuto el comando anteriormente descrito

al presionar enter se te ira preguntando los datos necesarios para identificar la clave de publicación

![](https://cdn-images-1.medium.com/max/800/1*8jd0X7Da1oCP6CMkUQIsAQ.png)

Debes ingresar todos los datos solicitados y al finalizar dependiendo en que idioma se encuentre tu sistema operativo dar S=SI o Y=Yes

![](https://cdn-images-1.medium.com/max/800/1*ajUPaeawYcPG1YnFK5-kmA.png)

Al presionar enter te pedirá confirmar si ocuparas la misma clave de almacén en mi caso recomiendo presionar INTRO para ocupar la misma.

![](https://cdn-images-1.medium.com/max/800/1*-NweF4-BglRVQAybBfRAfQ.png)

Si todo sale bien tus claves fueron generadas exitosamente en el path que otorgaste.

![](https://cdn-images-1.medium.com/max/800/1*bEnOUHQl7kZl9L2tHJHtCw.png)

Referencia al keyStore desde la app

![](https://cdn-images-1.medium.com/max/800/1*yLDDGTQHvtOx2__tvQEzag.png)

Una vez creado el archivo, debes generar una referencia desde la app para esto debes ir al directorio de la aplicación y modificar el archivo key.properties

![](https://cdn-images-1.medium.com/max/800/1*qeDy992JQTYQowCwaIsnmg.png)

ingresa los datos anteriormente puestos como son las password el keyalias y la ruta donde se encuentra el archivo.

Configurar la firma en Gradle

![](https://cdn-images-1.medium.com/max/800/1*pRxGjCCr-LYDBOm9iR0q2w.png)

Tal como aparece en la gua oficial solo debes reemplazar la información del archivo por la descrita en este apartado quedando de la siguiente forma.

![](https://cdn-images-1.medium.com/max/800/1*9Zg-oJyXZJrDTRmeb8d-Vw.png)

![](https://cdn-images-1.medium.com/max/800/1*WMoVdHX0Cn6mixv8sLTqdA.png)

![](https://cdn-images-1.medium.com/max/800/1*qm7ufdRaFO3Pfe-3xrt8FA.png)

Para construir la release debes ejecutar el comando tal como aparece y verificar la salida de este

![](https://cdn-images-1.medium.com/max/800/1*8I6GBnBHfnX8TKVwK6et7w.png)

Desde la consola de visual studio code puedes realizar la tarea de generación del apk

luego de ejecutar flutter build apk

debes ejecutar el comando flutter install si quieres instalar y probar tu aplicación

![](https://cdn-images-1.medium.com/max/800/1*DsaDi0hnbqGq1i6g-oa_Jw.png)

en este caso la instalo directamente en el dispositivo de prueba.

Ahora solo nos queda publicar nuestra app con google play console

Recomiendo crear la ficha de play store y completar los datos correspondientes

![](https://cdn-images-1.medium.com/max/800/1*Oi1vpZrXhgBb1kXVFdlqeg.png)

Crear los iconos e imágenes

![](https://cdn-images-1.medium.com/max/800/1*d55zW2MlVaosURDj5vTJRg.png)

Para crear las imágenes recomiendo este link en donde a traces de una captura de pantalla puedes generar los distintos iconos de la aplicación para visualizarlos en la tienda.

[**App Screenshot Generator for App Store & Google Play**  
_AppLaunchpad is an android & ios screenshot generator to create customized App Store & Google Play images for your app…_theapplaunchpad.com](https://theapplaunchpad.com/ "https://theapplaunchpad.com/")[](https://theapplaunchpad.com/)

Seleccionas la plataforma

![](https://cdn-images-1.medium.com/max/800/1*_BxMM_9g30xbHEw3eWqFJA.png)

El template

![](https://cdn-images-1.medium.com/max/800/1*oOjb9oHPUY5EII8Pc3eQYA.png)

y por último subes tu captura de pantalla

Luego de lo anterior sube tu apk y realiza distintas pruebas tienes distintos ambientes, lo recomendable es que realices varias pruebas internas antes de subir a producción puedes realizar pruebas abiertas y pruebas cerradas, verificar los dispositivos y los países en los que se distribuira tu aplicación, te deseo mucho éxito en tu camino a la publicación de tu nueva aplicación de flutter

![](https://cdn-images-1.medium.com/max/800/1*bkHWUldwtq0EVHpLnIrRYQ.png)

![](https://cdn-images-1.medium.com/max/800/1*okt_cMHs1ltWGZs11Hd3Kg.png)

By [Jaime Hernández](https://medium.com/@devjaime) on [March 10, 2019](https://medium.com/p/57b07092092c).

[Canonical link](https://medium.com/@devjaime/publicaci%C3%B3n-de-una-app-flutter-en-google-play-store-57b07092092c)

Exported from [Medium](https://medium.com) on March 15, 2025.