---
layout: "../../layouts/BlogLayout.astro"
title: "Instalación de Flutter en Mac OS "
description: ""
tags: ["code", "flutter"]
time: 4
featured: true
timestamp: "2018-07-31T12:20:31-0300"
filename: "2018-07-31_Instalaci-n-de-Flutter-en-Mac-OS-e8378735f071"
---

Instalación de Flutter en Mac OS
================================

En esta guía paso a paso revisaremos como instalar Flutter en Mac OS a la fecha actual julio del 2018 (Como Flutter esta constantemente…

* * *

### Instalación de Flutter en Mac OS

En esta guía paso a paso revisaremos como instalar Flutter en Mac OS a la fecha actual julio del 2018 (Como Flutter esta constantemente cambiando puede ser que en el futuro su instalación sea de una forma diferente).

De todas formas dejare un video en el cual podran revisar en detalle la instalación

Para instalar y ejecutar Flutter, su entorno de desarrollo debe cumplir estos requisitos mínimos:

*   **Sistema operativo** : macOS (64 bits)
*   **Espacio en disco** : 700 MB (no incluye espacio en disco para IDE / herramientas).
*   **Herramientas** : Flutter depende de que estas herramientas de línea de comandos estén disponibles en su entorno.
*   `bash`, `mkdir`, `rm`, `git`, `curl`, `unzip`,`which`

### Descargue el SDK de Flutter

1.  Descargue el siguiente paquete de instalación para obtener la última versión beta del SDK de Flutter (para ver otros canales de lanzamiento y versiones anteriores, consulte la página de [**archivo de SDK**](https://flutter.io/sdk-archive/) ):

*   [**_flutter\_macos\_v0.5.1-beta.zip_**](https://storage.googleapis.com/flutter_infra/releases/beta/macos/flutter_macos_v0.5.1-beta.zip)

1.  Extraiga el archivo en la ubicación deseada, por ejemplo:

`$ cd ~/development $ unzip ~/Downloads/flutter_macos_v0.5.1-beta.zip`

2\. Agregue las herramientas de flutter para que sean visibles desde el terminal:

*   ``$ export PATH=`pwd`/flutter/bin:$PATH``

El comando anterior establece su variable PATH temporalmente, para la ventana de terminal actual. Para agregar Flutter permanentemente a su ruta,

Debemos realizar lo siguiente:

> Puede actualizar su variable PATH para la sesión actual solo en la línea de comando. Es probable que desee actualizar esta variable permanentemente, para que pueda ejecutar los comandos de Flutter en cualquier sesión de terminal.

Los pasos para modificar esta variable permanentemente para todas las sesiones de terminal son específicos de la máquina. Normalmente agrega una línea a un archivo que se ejecuta cada vez que abre una nueva ventana. Por ejemplo:

1.  Determine el directorio donde colocó el SDK de Flutter. Lo necesitarás en el Paso 3.
2.  Abrir (o crear) `$HOME/.bash_profile`. La ruta del archivo y el nombre del archivo pueden ser diferentes en su máquina.
3.  Agregue la siguiente línea y cambie `[PATH_TO_FLUTTER_GIT_DIRECTORY]`para que sea la ruta donde clonó el repo de git de Flutter:

    $ export PATH=[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin:$PATH

1.  Ejecutar `source $HOME/.bash_profile`para actualizar la ventana actual.
2.  Verifique que el `flutter/bin`directorio esté ahora en su PATH ejecutando:

    $ echo $PATH

¡Ahora estás listo para ejecutar comandos de Flutter!

### Ejecutar Flutter doctor

Ejecute el siguiente comando para ver si hay alguna dependencia que necesite instalar para completar la instalación:

    $ flutter doctor

Este comando verifica su entorno y muestra un informe en la ventana del terminal. El Dart SDK está incluido con Flutter; no es necesario instalar Dart por separado. Compruebe cuidadosamente el resultado para ver si hay otro software que necesite instalar o tareas adicionales (se muestra en **negrita**).

Por ejemplo:

\[-\] Android toolchain - desarrolla para dispositivos Android  
    • SDK de Android en / Users / obiwan / Library / Android / sdk  
    **✗ Android SDK no tiene herramientas de línea de comando; descargar desde** [**https://goo.gl/XxQghQ**](https://goo.gl/XxQghQ)  
    • Intente volver a instalar o actualizar su SDK de Android,  
      visite [https://flutter.io/setup/#android-setup](https://flutter.io/setup/#android-setup) para obtener instrucciones detalladas.

Las siguientes secciones describen cómo realizar estas tareas y finalizar el proceso de configuración.

Una vez que haya instalado las dependencias que faltan, `flutter doctor`vuelva a ejecutar el comando para verificar que haya configurado todo correctamente.

> Las herramienta de Flutter utilizan Google Analytics para informar de forma anónima las estadísticas de uso de funciones y los informes de fallas básicas. Esta información se usa para ayudar a mejorar las herramientas de Flutter a lo largo del tiempo. Los análisis no se envían en la primera ejecución ni en las ejecuciones `flutter config`, por lo que puede optar por excluirse de los análisis antes de enviar los datos. Para desactivar la generación de informes, escriba `flutter config --no-analytics`y para mostrar la configuración actual, escriba `flutter config`. Consulte la política de privacidad de Google: [www.google.com/intl/es/policies/privacy](https://www.google.com/intl/en/policies/privacy/) .

### Configuración de la plataforma

macOS admite el desarrollo de aplicaciones de Flutter para iOS y Android. Complete al menos uno de los dos pasos de configuración de la plataforma ahora, para poder construir y ejecutar su primera aplicación Flutter.

### configuración de iOS

### Instalar Xcode

Para desarrollar aplicaciones de Flutter para iOS, necesita una Mac con Xcode 9.0 o posterior:

1.  Instale Xcode 9.0 o posterior (a través de [la descarga de la web](https://developer.apple.com/xcode/) o la [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835) ).
2.  Configure las herramientas de línea de comandos de Xcode para usar la versión recién instalada de Xcode ejecutándose `sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer`desde la línea de comandos.
3.  Esta es la ruta correcta para la mayoría de los casos, cuando desee utilizar la última versión de Xcode. Si necesita usar una versión diferente, especifique esa ruta en su lugar.

4\. Asegúrese de que el acuerdo de licencia de Xcode esté firmado al abrir Xcode una vez y confirmar o ejecutar `sudo xcodebuild -license` desde la línea de comandos.

Con Xcode, podrás ejecutar aplicaciones de Flutter en un dispositivo con iOS o en el simulador.

### Configura el simulador de iOS

Para prepararse para ejecutar y probar su aplicación Flutter en el simulador de iOS, siga estos pasos:

1.  En tu Mac, busca el simulador a través de Spotlight o usando el siguiente comando en la terminal:

    $ open -a Simulator

1.  Asegúrate de que tu simulador esté usando un dispositivo de 64 bits (iPhone 5s o posterior) marcando las configuraciones en el menú **Hardware> Dispositivo** del simulador .
2.  Dependiendo del tamaño de la pantalla de su máquina de desarrollo, los dispositivos iOS simulados de alta densidad de pantalla pueden desbordar su pantalla. Establezca la escala del dispositivo en el menú **Ventana> Escala** en el simulador.
3.  Comience su aplicación ejecutándose `flutter run`.

### Implementar en dispositivos iOS

Para implementar su aplicación Flutter en un dispositivo iOS físico, necesitará algunas herramientas adicionales y una cuenta Apple. También deberá configurar la implementación del dispositivo físico en Xcode.

1.  Instala [homebrew](http://brew.sh/) .
2.  Abra el terminal y ejecute estos comandos para instalar las herramientas para implementar aplicaciones de Flutter en dispositivos con iOS.

    $ brew update$ brew install --HEAD libimobiledevice$ brew install ideviceinstaller ios-deploy cocoapods$ pod setup

Si alguno de estos comandos falla con un error, ejecute `brew doctor`y siga las instrucciones para resolver el problema.

1.  Siga el flujo de firmas de Xcode para aprovisionar su proyecto:
2.  Abra el espacio de trabajo de Xcode predeterminado en su proyecto ejecutando `open ios/Runner.xcworkspace`en una ventana de terminal desde su directorio de proyecto de Flutter.
3.  En Xcode, seleccione el `Runner`proyecto en el panel de navegación izquierdo.
4.  En la `Runner`página de configuración de destino, asegúrese de que su Equipo de desarrollo esté seleccionado en **General> Firmar> Equipo** . Cuando selecciona un equipo, Xcode crea y descarga un Certificado de Desarrollo, registra su dispositivo con su cuenta y crea y descarga un perfil de aprovisionamiento (si es necesario).

*   Para comenzar su primer proyecto de desarrollo de iOS, es posible que deba iniciar sesión en Xcode con su ID de Apple.

![](https://cdn-images-1.medium.com/max/800/0*sPlANTeXNfXqivOi.png)

*   El desarrollo y las pruebas son compatibles con cualquier ID de Apple. Se requiere inscribirse en el Programa de Desarrolladores de Apple para distribuir su aplicación a la App Store. Vea las [diferencias entre los tipos de membresía de Apple](https://developer.apple.com/support/compare-memberships) .
*   La primera vez que utilice un dispositivo físico conectado para el desarrollo de iOS, deberá confiar tanto en su Mac como en el Certificado de desarrollo en ese dispositivo. Seleccione `Trust`en el mensaje de diálogo cuando conecte por primera vez el dispositivo iOS a su Mac.

![](https://cdn-images-1.medium.com/max/800/0*by2m3hQbe39tJKvM.png)

*   Luego, vaya a la aplicación Configuración en el dispositivo iOS, seleccione **General> Administración de dispositivos** y confíe en su Certificado.
*   Si la firma automática falla en Xcode, verifique que el valor **General del identificador> Identidad> Identificador del paquete** sea ​​único.

![](https://cdn-images-1.medium.com/max/800/0*WEUOSBlknMLbhXTo.png)

Comience su aplicación ejecutándose `flutter run`.

### Configuración de Android

**Nota:** Flutter se basa en una instalación completa de Android Studio para proporcionar sus dependencias de la plataforma Android. Sin embargo, puedes escribir tus aplicaciones de Flutter en varios editores; un paso posterior discutiremos eso.

### Instalar Android Studio

1.  Descargue e instale [Android Studio](https://developer.android.com/studio/index.html) .

2\. Inicie Android Studio y vaya a través del “Asistente de configuración de Android Studio”. Esto instalará las últimas SDK de Android, Android SDK Platform-Tools y Android SDK Build-Tools, que son requeridas por Flutter cuando se desarrolla para Android.

### Configura tu dispositivo Android

Para prepararte para ejecutar y probar tu aplicación Flutter en un dispositivo Android, necesitarás un dispositivo Android con Android 4.1 (nivel de API 16) o superior.

1.  Habilite las **opciones de desarrollador** y la **depuración de USB** en su dispositivo. Las instrucciones detalladas están disponibles en la [documentación de Android](https://developer.android.com/studio/debug/dev-options.html) .
2.  Solo Windows: instale el [controlador USB de Google](https://developer.android.com/studio/run/win-usb)
3.  Con un cable USB, conecte su teléfono a su computadora. Si se le solicita en su dispositivo, autorice a su computadora a acceder a su dispositivo.
4.  En la terminal, ejecute el `flutter devices`comando para verificar que Flutter reconozca su dispositivo Android conectado.

De forma predeterminada, Flutter usa la versión del SDK de Android en la `adb`que se basa su herramienta. Si desea que Flutter use una instalación diferente de Android SDK, debe establecer la `ANDROID_HOME`variable de entorno en ese directorio de instalación.

### Configurar el emulador de Android

Para prepararse para ejecutar y probar su aplicación Flutter en el emulador de Android, siga estos pasos:

1.  Habilita la [aceleración de VM](https://developer.android.com/studio/run/emulator-acceleration.html) en tu máquina.
2.  Inicie **Android Studio> Herramientas> Android> Administrador AVD** y seleccione **Crear dispositivo virtual** . (El submenú de **Android** solo está presente cuando está dentro de un proyecto de Android).
3.  Elija una definición de dispositivo y seleccione **Siguiente** .
4.  Seleccione una o más imágenes del sistema para las versiones de Android que desea emular y seleccione **Siguiente** . Se recomienda una imagen _x86_ o _x86\_64_ .
5.  En Emulated Performance, seleccione **Hardware — GLES 2.0** para habilitar [la aceleración de hardware](https://developer.android.com/studio/run/emulator-acceleration.html) .
6.  Verifique que la configuración de AVD sea correcta y seleccione **Finalizar** .
7.  Para obtener más información sobre los pasos anteriores, consulte [Administrar AVD](https://developer.android.com/studio/run/managing-avds.html) .

8\. En Android Virtual Device Manager, haga clic en **Ejecutar** en la barra de herramientas. El emulador se inicia y muestra el lienzo predeterminado para la versión del sistema operativo y el dispositivo seleccionados.

![](https://cdn-images-1.medium.com/max/800/1*oSLWIb29Q6GnUa2dG7-MeQ.png)

By [Jaime Hernández](https://medium.com/@devjaime) on [July 31, 2018](https://medium.com/p/e8378735f071).

[Canonical link](https://medium.com/@devjaime/instalaci%C3%B3n-de-flutter-en-mac-os-e8378735f071)

Exported from [Medium](https://medium.com) on March 15, 2025.