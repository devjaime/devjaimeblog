---
layout: "../../layouts/BlogLayout.astro"
title: "Visual Studio Code para el desarrollo de flutter"
description: ""
tags: ["code", "vscode", "Flutter"]
time: 4
featured: true
timestamp: "2022-05-29T12:20:31-0300"
filename: "2022-05-29_Visual-Studio-Code-para-el-desarrollo-de-flutter-256dbd13b453"
---

Visual Studio Code para el desarrollo de flutter \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Visual Studio Code para el desarrollo de flutter
================================================

Una lista seleccionada de accesos directos, extensiones y configuraciones populares de VSCode para acelerar tu flujo de trabajo de…

* * *

### Visual Studio Code para el desarrollo de flutter

![](https://cdn-images-1.medium.com/max/800/0*Qu8Dfj18ynX3eoyg)

Una lista seleccionada de accesos directos, extensiones y configuraciones populares de VSCode para acelerar tu flujo de trabajo de desarrollo de Flutter y codificar como un profesional.

* * *

VSCode es un excelente IDE para el desarrollo de Flutter.

Una vez que haya completado los [pasos básicos de configuración](https://docs.flutter.dev/get-started/install) , lo mejor que puedes hacer, es personalizarlo para mejorar tu flujo de trabajo.

Entonces, en este artículo, te mostraré todos los **accesos directos** , **extensiones** y **configuraciones** que uso para el desarrollo diario de Flutter.

¿Listo? ¡Vamos!

### Accesos directos de VSCode para el desarrollo de Flutter

YouTube ya tiene muchos videos excelentes sobre los atajos de VSCode, y vincularé los mejores al final.

Pero por ahora, aquí hay una lista corta de mis favoritos:

### 1\. Solución rápida

*   Mac OS:`CMD+.`
*   Ventanas:`CTRL+.`

Use esto en cualquier parte del editor para obtener una lista **contextual** de acciones de código .

Puede usarlo para **envolver** , **extraer** , **eliminar** widgets, etc.:

![](https://cdn-images-1.medium.com/max/800/0*BwWz4MjmAk_1jeQl.png)

O para importar archivos cuando sea necesario:

![](https://cdn-images-1.medium.com/max/800/0*QdK39DLtZHvk935h.png)

O para crear un constructor (o incluso todos los métodos de **clase de datos ) a partir de propiedades existentes en una clase.**

![](https://cdn-images-1.medium.com/max/800/0*t8c-pmXtoZA7vb85.png)

### 2\. Mostrar paleta de comandos

*   Mac OS:`CMD+Shift+P`
*   Ventanas:`CTRL+Shift+P`

Esto abrirá un cuadro de búsqueda donde puede ver todos los comandos usados ​​recientemente y escribir para buscar nuevos:

![](https://cdn-images-1.medium.com/max/800/0*kGrCGEqDS_1khcjS.png)

### 3\. Buscar archivos por nombre

*   Mac OS:`CMD+P`
*   Ventanas:`CTRL+P`

Esto es excelente para abrir cualquier archivo en tu proyecto sin salir del teclado:

![](https://cdn-images-1.medium.com/max/800/0*YlR0qRgmntTYUHjH.png)

### 4\. Dart: agregar dependencias

Primero, abre la paleta de comandos y escriba “Dart: Add Dependency” o “Dart: Add Dev Dependency”:

![](https://cdn-images-1.medium.com/max/800/0*5ZPVRBklSkCb2pHR.png)

Luego mostrará una lista de búsqueda de paquetes que están disponibles en [pub.dev](http://pub.dev/) :

![](https://cdn-images-1.medium.com/max/800/0*J4Ng3213Y7Pk3id3.png)

Una vez que seleccione una dependencia, se agregará a su archivo `pubspec.yaml` y se instalará automáticamente.

### 5\. Fragmentos de Flutter & Dart

Los complementos Dart y Flutter incluyen muchos fragmentos que puede usar para agregar widgets comunes de Flutter rápidamente.

Es posible que ya estés familiarizado con estos:

*   `stless`: Insertar un`StatelessWidget`
*   `stful`: Insertar un`StatefulWidget`
*   `stanim`: Inserte un `StatefulWidget`con un`AnimationController`

![](https://cdn-images-1.medium.com/max/800/0*ItZGE3V0JBagCddJ.png)

Estos son excelentes porque generan todo el código repetitivo para tí, y todo lo que le queda por hacer es nombrar su widget:

![](https://cdn-images-1.medium.com/max/800/0*jZOuT-vgwoAOn5MD.png)

Pero también puede usar fragmentos para generar bloques de código comunes , como if/else, bucles for, definiciones de funciones, etc.:

![](https://cdn-images-1.medium.com/max/800/0*iDEKVNFEJRxNwuDZ.png)

![](https://cdn-images-1.medium.com/max/800/0*VkVh7RXj5ojjGE-c.png)

Para ver todos los fragmentos de Dart disponibles, [consulta este archivo](https://github.com/Dart-Code/Dart-Code/blob/master/snippets/dart.json) .

> _Si deseas llevar esto más lejos, puede instalar la extensión_ [_Awesome Flutter Snippets_](https://marketplace.visualstudio.com/items?itemName=Nash.awesome-flutter-snippets) _, que ofrece muchos otros fragmentos útiles._

### 6\. Lista de métodos abreviados de teclado

*   Mac OS:`CMD+K CMD+S`
*   Ventanas:`CTRL+K CTRL+S`

VSCode tiene un montón de atajos. Si desea verlos todos y personalizar las combinaciones de teclas, este es el que debe usar:

![](https://cdn-images-1.medium.com/max/800/0*nuDH5b_rjk7KONUz.png)

### Extensiones de VSCode para el desarrollo de Flutter

Usar las extensiones correctas te ahorrará mucho tiempo y te dará **superpoderes** . Estos son mis favoritos:

### 3\. Error de lens

¿Quieres saber si cometes errores **mientras escribes** ?

La extensión [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) mejora el resaltado de errores, advertencias y otros diagnósticos de idiomas, y la encuentro inmensamente útil:

![](https://cdn-images-1.medium.com/max/800/0*ISR91qi3DQaWryT1.png)

### 4\. Mejores comentarios

Mejore los comentarios de su código resaltando alertas, notas, TODO y más:

![](https://cdn-images-1.medium.com/max/800/0*NeINDjUS6JBiLrpA.png)

Descarga aquí:

*   [mejores comentarios](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

### 5\. Eliminar comentarios

Esto es bastante útil para eliminar todos los comentarios predeterminados cuando creas un nuevo proyecto de Flutter:

![](https://cdn-images-1.medium.com/max/800/0*wke8g5z_ZJIoTZ3Q.png)

Descarga aquí:

*   [Eliminar comentarios](https://marketplace.visualstudio.com/items?itemName=plibither8.remove-comments)

### 6\. Advanced New File

La forma habitual de crear archivos es seleccionar la carpeta que desea en la barra lateral y luego hacer clic en “Nuevo archivo”.

Esto es lento ya que te obliga a usar el mouse. Y para grandes proyectos, encontrar la carpeta correcta puede ser un desafío.

La extensión **Advanced New File** te permite crear archivos en cualquier lugar de su espacio de trabajo, usando solo su teclado.

Puede ejecutar esto desde la paleta de comandos:

![](https://cdn-images-1.medium.com/max/800/0*Jj69IOOj5Qp-4-FF.png)

Luego, la extensión utilizará la coincidencia de patrones para ayudarte a encontrar la carpeta que necesita **mientras escribe** :

![](https://cdn-images-1.medium.com/max/800/0*YJvFfg84RYntFtqV.png)

Finalmente, escribe el nombre del archivo en la carpeta elegida:

![](https://cdn-images-1.medium.com/max/800/0*4eVdG7wv3a9NsB_G.png)

Como resultado, la extensión creará un archivo vacío en el lugar correcto y lo abrirá por ti:

![](https://cdn-images-1.medium.com/max/800/0*udusUHNNiQ9PfoUn.png)

Descarga aquí:

*   [advanced-new-file](https://marketplace.visualstudio.com/items?itemName=patbenatar.advanced-new-file)

### 7\. GitHub copilot

GitHub Copilot es un programador de pares de IA que sugiere terminaciones de línea y cuerpos de funciones completos a medida que escribe:

![](https://cdn-images-1.medium.com/max/800/0*bmmq5cyD9-5qNDBV.png)

Si bien no siempre lo hace bien, ¡me ha sorprendido cuánto tiempo me ha ahorrado hasta ahora!

¡Me ha ayudado a escribir documentación, e incluso parte de la copia de la página de destino!

![](https://cdn-images-1.medium.com/max/800/0*AM2gP4r6r4tUXVDm.png)

Descarga aquí:

*   [Github copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

### 9\. Explorador Firebase

Si desea ver todos sus proyectos de Firebase, datos de Firestore, Cloud Functions y más sin salir de VSCode, este es para usted:

![](https://cdn-images-1.medium.com/max/800/0*QhEulpPUPveNSAoF.png)

Descarga aquí:

*   [firebase explored](https://marketplace.visualstudio.com/items?itemName=jsayol.firebase-explorer)

### Extensiones útiles para trabajar con API REST

Si su aplicación Flutter se conecta a algunas API REST, estas extensiones también serán útiles:

*   [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) : envíe una solicitud HTTP y vea la respuesta en Visual Studio Code directamente.
*   [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client): una buena alternativa a Postman para administrar todas tus llamadas API REST en VSCode.
*   [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): inicie un servidor de desarrollo local con función de recarga en vivo para páginas estáticas y dinámicas.

### Configuración de VSCode para el desarrollo de Flutter

Además de todos los excelentes atajos y extensiones, ¡hay algunas configuraciones específicas de Flutter que te ayudarán mucho!

Estos se pueden configurar abriendo **Preferencias: Configuración abierta (JSON)** en la paleta de comandos:

![](https://cdn-images-1.medium.com/max/800/0*ZTiC433zH-BC-06P.png)

Las que encuentro más útiles son las opciones para **corregir todos los errores** y **formatear el código** al guardar.

### 1\. Solucione todos los errores en Guardar

Estoy seguro de que te molestó que el linter te dijera que usaras `const`una y otra vez:

![](https://cdn-images-1.medium.com/max/800/0*28-ae2auHiusEtd4.png)

Bueno, en lugar de corregir todas estas advertencias a mano, simplemente agregue esto a su archivo de configuración:

    "editor.codeActionsOnSave": {    "source.fixAll": true}

¡Y todos los errores constantes (junto con muchos otros) desaparecerán cuando guardes!

### 2\. Formatear al guardar

Al crear un diseño declarativo, a menudo terminamos con un código desequilibrado o líneas muy largas:

![](https://cdn-images-1.medium.com/max/800/0*Q4NNPQzcEQPnvcpW.png)

Para solucionar esto, todo lo que tenemos que hacer es **agregar todas las comas en los lugares correctos** y luego guardar el archivo:

![](https://cdn-images-1.medium.com/max/800/0*OCuzQfcETglVlgHK.png)

Para habilitar el formato al guardar, agregue esto a la configuración:

    {   "editor.formatOnSave": true}

### 3\. Colorización de par entre corchetes

Una versión reciente de VSCode ha introducido **la colorización de par de corchetes de alto rendimiento** , una característica que es especialmente útil en Flutter.

Todo lo que tienes que hacer es habilitarlo:

    {    "editor.bracketPairColorization.enabled": true}

Y luego podrás disfrutar de todos los corchetes de colores:

![](https://cdn-images-1.medium.com/max/800/0*XHQn9efp1ijZzgPn.png)

### 4\. Vista previa de las guías de interfaz de usuario de Flutter

Otra configuración que me gusta mucho se llama `previewFlutterUiGuides`, que se puede habilitar así:

    {    "dart.previewFlutterUiGuides": true}

Con esto en su lugar, el editor mostrará algunas guías de interfaz de usuario junto a nuestros widgets:

![](https://cdn-images-1.medium.com/max/800/0*a4wndIt4_FZgU-PK.png)

### Mi archivo settings.json

Siéntase libre de tomar mi propia configuración y personalizarla según sus necesidades:

    {    "security.workspace.trust.enabled": false,    "[dart]": {        "editor.codeActionsOnSave": {            "source.fixAll": true        },        "editor.rulers": [            80        ],        "editor.selectionHighlight": false,        "editor.suggest.snippetsPreventQuickSuggestions": false,        "editor.suggestSelection": "first",        "editor.tabCompletion": "onlySnippets",        "editor.wordBasedSuggestions": false,    },    "dart.warnWhenEditingFilesOutsideWorkspace": false,    "window.zoomLevel": 1,    "workbench.colorTheme": "Dracula",    "editor.bracketPairColorization.enabled": true,    "editor.inlineSuggest.enabled": true,    "editor.formatOnSave": true}

### Bonificación

¿Alguna vez regresaste a un proyecto de Flutter que no habías tocado durante uno o dos años y encontraste un montón de advertencias obsoletas? (¡Te estoy mirando, `FlatButton`y `RaisedButton`!)

No temas, porque no tienes que arreglarlos todos a mano.

En su lugar, todo lo que tienes que hacer es ejecutar `dart fix`en la terminal:

    dart fix --dry-run # preview of the proposed changesdart fix --apply # apply the changes

Más información [en esta página](https://dart.dev/tools/dart-fix) .

¡Espero que todos los accesos directos, extensiones y configuraciones anteriores aumenten tu productividad!

Por supuesto, hay muchos más consejos y trucos que podría aprender sobre VSCode.

Para eso, recomiendo este video de Fireship.io:

*   [25 consejos de productividad de VS Code y trucos rápidos](https://www.youtube.com/watch?v=ifTF3ags0XI)

¡ Feliz codificación !

By [Jaime Hernández](https://medium.com/@devjaime) on [May 29, 2022](https://medium.com/p/256dbd13b453).

[Canonical link](https://medium.com/@devjaime/visual-studio-code-para-el-desarrollo-de-flutter-256dbd13b453)

Exported from [Medium](https://medium.com) on March 15, 2025.