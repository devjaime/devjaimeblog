---
layout: "../../layouts/BlogLayout.astro"
title: "Creando una biblioteca simple usando CLI angular 7 y desplegando en azure"
description: ""
tags: ["code", "Angular"]
time: 4
featured: true
timestamp: "2018-11-07T12:20:31-0300"
filename: "2018-11-07_Creando-una-biblioteca-simple-usando-CLI-angular-7-y-desplegando-en-azure-d8c9d66668bd"
---

Creando una biblioteca simple usando CLI angular 7 y desplegando en azure
=========================================================================

Angular CLI 7 ya está aquí! Con ello, el equipo de Angular ha facilitado mucho la creación de bibliotecas.

* * *

### Creando una biblioteca simple usando CLI angular 7 y desplegando en azure

Angular CLI 7 ya está aquí! Con ello, el equipo de Angular ha facilitado mucho la creación de bibliotecas.

En este artículo, mostramos paso a paso cómo crear una biblioteca simple utilizando Angular CLI 6. Vamos a sumergirnos en …

### Preparar

Vamos a configurar para crear nuestra biblioteca. Si ya tiene instalado Angular CLI 7, pase a la siguiente sección.

#### Instala Node.js

Para empezar, necesitamos instalar Node.js. Puede descargar el último instalador de LTS de Node.js en [https://nodejs.org/dist/v8.11.2/node-v8.11.2.pkg](https://nodejs.org/dist/v8.11.2/node-v8.11.2.pkg) . Una vez que el instalador haya finalizado, ejecute el siguiente comando en el terminal para volver a verificar todo lo que funcionó:

`$ node --version`

#### Instalar CLI angular

Después de instalar Node.js, podemos instalar Angular CLI. En una ventana de terminal, emita el siguiente comando:

`$ npm install -g @angular/cli`

Una vez finalizada la instalación, podemos emitir el siguiente comando para asegurarnos de que tenemos todo en su lugar:

`$ ng --version`

### Proyecto

Ahora que hemos finalizado la configuración, podemos seguir adelante y crear nuestro nuevo proyecto Angular emitiendo el `ng new`comando:

`$ ng new angular-library --prefix al`

Ahora pasemos a nuestro nuevo proyecto con:

`$ cd angular-library`

Si es nuevo en la versión 6 de Angular CLI, notará que el `.angular-cli.json`archivo ha sido reemplazado por `angular.json`. Como novedad en esta versión, este archivo define su área de trabajo para el proyecto que se acaba de crear. Dentro de ti encontrarás dos proyectos que se crean con el nuevo comando. Tenemos nuestro `angular-library`proyecto y nuestro `angular-library-e2e`proyecto.

Para obtener más información sobre el `angular.json`archivo, visite la página de documentación de [Angular Workspace](https://github.com/angular/angular-cli/wiki/angular-workspace) .

Ahora no solo podemos generar múltiples aplicaciones fácilmente en un nuevo proyecto Angular, sino que también podemos generar nuestra biblioteca.

#### Generar la biblioteca

Para esta demostración, [usaré REQ | RES](https://reqres.in/) , una API de REST alojada que nos permitirá poner todo en funcionamiento rápidamente. Para generar nuestra biblioteca para REQ | En el proyecto RES, utilizaremos el `ng generate`comando.

`$ ng generate library reqres --prefix rr`

Este comando ha hecho dos cosas dentro de nuestro proyecto. En el `angular.json`archivo ahora tenemos `reqres`proyecto debajo del `angular-libraries-e2e`. La segunda es que en nuestro proyecto ahora tenemos una `projects`carpeta que contiene todos los archivos que necesita nuestra biblioteca para comenzar.

#### Crear los modelos

Lo siguiente que queremos hacer es crear un par de modelos para nuestra biblioteca. Para esta demostración solo nos centraremos en el REQ | RES obtener la lista de usuarios de la API. Si vamos a [https://reqres.in/api/users?page=1](https://reqres.in/api/users?page=1) , vemos que el JSON devuelto será:

`json`

`{`

`"page": 1,`

`"per_page": 3,`

`"total": 12,`

`"total_pages": 4,`

`"data": [`

`{`

`"id": 1,`

`"first_name": "George",`

`"last_name": "Bluth",`

`"avatar": "[https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg](https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg)"`

`},`

`{`

`"id": 2,`

`"first_name": "Janet",`

`"last_name": "Weaver",`

`"avatar": "[https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg](https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg)"`

`},`

`{`

`"id": 3,`

`"first_name": "Emma",`

`"last_name": "Wong",`

`"avatar": "[https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg](https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg)"`

`}`

`]`

`}`

Vamos a crear la `projects/reqres/src/lib/model`carpeta y nuestras dos nuevas clases `users`y `user`. Ingrese lo siguiente en el termianl:

`$ ng generate class model/user --project=reqres`

`$ ng generate class model/users --project=reqres`

`export class User {`

`constructor(`

`public id: number,`

`public first_name: string,`

`public last_name: string,`

`public avatar: string`

`) {}`

`}`

Nuestro `users`modelo será:

`import { User } from './user';`

`export class Users {`

`constructor(`

`public page: number,`

`public per_page: number,`

`public total: number,`

`public total_pages: number,`

`public data: User[]`

`) {}`

`}`

Ahora hagamos nuestros nuevos modelos disponibles para su uso. En el `projects/reqres/src/public_api.ts`archivo, agregue lo siguiente:

`export * from './lib/model/user';`

`export * from './lib/model/users';`

Nuestro `public_api`archivo completo debería verse como sigue:

`export * from './lib/reqres.service';`

`export * from './lib/reqres.component';`

`export * from './lib/reqres.module';`

`export * from './lib/model/user';`

`export * from './lib/model/users';`

#### Crear el servicio

Angular CLI ya ha generado el `projects/reqres/src/lib/reqres.service.ts`archivo para nosotros, por lo que todo lo que tenemos que hacer es agregar nuestro código para llamar a la API. Vamos a abrir `reqres.service.ts`y editarlo para que el resultado final sea el siguiente:

`import { Injectable } from '@angular/core';`

`import { HttpClient, HttpParams } from '@angular/common/http';`

`import { Observable } from 'rxjs';`

`import { Users } from './model/users';`

`@Injectable({`

`providedIn: 'root'`

`})`

`export class ReqresService {`

`private readonly apiRoot = '[https://reqres.in/api](https://reqres.in/api)';`

`constructor(private httpClient: HttpClient) { }`

`getUsers(page: number): Observable<Users> {`

`const params = new HttpParams().set('page', String(page));`

``return this.httpClient.get<Users>(`${this.apiRoot}/users`, {params: params});``

`}`

`}`

Este servicio es bastante sencillo, solo un simple ‘get’ para la API. Una cosa a tener en cuenta es la propiedad `providedIn: 'root'`. Esto es nuevo para Angular 6 y especifica en qué módulo se configurará el servicio, en este caso `root`,. Esto permite que la sacudida de árboles ocurra para los servicios ahora.

#### Crear los componentes

Ahora vamos a generar el componente de usuarios para nuestra biblioteca. Para hacer esto, volvamos a nuestro terminal y usemos la CLI para generar nuestros archivos.

`$ ng generate component users --project=reqres`

Todo lo que haremos en este componente es generar una lista de los usuarios. El código final del componente será el siguiente:

`import { Component, OnInit, Input } from '@angular/core';`

`import { ReqresService } from '../../public_api';`

`import { Users } from '../model/users';`

`@Component({`

`selector: 'rr-user',`

`templateUrl: './users.component.html',`

`styleUrls: ['./users.component.css']`

`})`

`export class UsersComponent implements OnInit {`

`users: Users;`

`@Input() pageNumber: number;`

`constructor(private reqresService: ReqresService) { }`

`ngOnInit() {`

`this.getUsers();`

`}`

`getUsers(): void {`

`this.reqresService.getUsers(this.pageNumber).subscribe(arg => this.users = arg);`

`}`

`}`

El HTML para el componente es solo la siguiente lista simple:

`<div>`

`<ul>`

`<li *ngFor="let user of users.data">`

`{{user.last_name}}, {{user.first_name}}`

`</li>`

`</ul>`

`</div>`

Ahora que hemos creado el componente, asegurémonos de que nuestro módulo tenga todo lo que necesita.

En el `reqres.module.ts`archivo necesitamos importar el `CommonModule`y el `HttpClientModule`. El CLI agregó nuestras declaraciones para el `ReqresComponent`y el `UsersComponent`.

Ahora debemos agregar el `UsersComponent`a el `exports`para que se pueda usar fuera del módulo y nuestra biblioteca esté lista. El módulo final debería verse así:

`import { NgModule } from '@angular/core';`

`import { ReqresComponent } from './reqres.component';`

`import { CommonModule } from '@angular/common';`

`import { HttpClientModule } from '@angular/common/http';`

`import { UsersComponent } from './users/users.component';`

`@NgModule({`

`imports: [CommonModule, HttpClientModule],`

`declarations: [ReqresComponent, UsersComponent],`

`exports: [UsersComponent]`

`})`

`export class ReqresModule { }`

#### Construir la biblioteca

Ahora que tenemos todo listo para usar, necesitamos construir nuestra biblioteca. Esto es tan fácil como el siguiente comando:

`$ ng build reqres`

Con la compilación completa, podemos seguir adelante y usarla en nuestra aplicación raíz.

[**Vea también:** Introducción a Xamarin.Forms y el Servicio de aplicación móvil de Azure](https://keyholesoftware.com/2018/05/21/getting-started-with-xamarin-forms-and-azure-mobile-app-service/)

#### Usar la biblioteca

Para usar la biblioteca primero necesitamos importarla. En la `src/app/app.module.ts`suma `ReqresModule`de las importaciones. La importación del módulo debe verse como:

`import { ReqresModule } from 'reqres';`

La final `app.module.ts`será:

`import { BrowserModule } from '@angular/platform-browser';`

`import { NgModule } from '@angular/core';`

`import { AppComponent } from './app.component';`

`import { ReqresModule } from 'reqres';`

`@NgModule({`

`declarations: [`

`AppComponent`

`],`

`imports: [`

`BrowserModule,`

`ReqresModule`

`],`

`providers: [],`

`bootstrap: [AppComponent]`

`})`

`export class AppModule { }`

Observe que no estamos importando el módulo utilizando una ruta relativa. Podemos configurar esto como la biblioteca estaba en nuestros node\_modules porque cuando la CLI creó la biblioteca. También agregó lo siguiente a la `tsconfig.json`:

`"paths": {`

`"reqres": [`

`"dist/reqres"`

`]`

`}`

Una vez que el módulo se publica y se introduce en nuestra aplicación a través de node\_modules, todo lo que tendremos que hacer es volver a `tsconfig.json`la ruta y eliminarla.

El último paso será utilizar nuestra lista en nuestro componente. Añadir “a `app.component.html`.

Ahora que tenemos todo en su lugar, servimos la aplicación ejecutando:

`$ ng serve`

Una vez que el servidor esté en funcionamiento, vaya a [http: // localhost: 4200](http://localhost:4200/) mostrará una lista de tres usuarios en nuestra aplicación que se generó usando nuestra biblioteca.

#### Publicar la biblioteca

Lo único que queda por hacer es publicar nuestra biblioteca. Si estamos publicando para `NPM`esto está emitiendo algunos comandos desde el terminal. Solo recuerda que para publicar en NPM necesitas una cuenta.

`$ ng build reqres --prod`

`$ cd dist/reqres`

`$ npm publish`

En nuestro caso desplegaremos con integracion continua desde GitHub

**Desplegando**

1.  Ve al `Build and Release`menú y selecciona`Builds`
2.  Haga clic en el `New`botón para crear una nueva construcción
3.  Comenzar con un `empty process`

**Obtener su codigo**

1.  Debajo `Process`, haga clic en`Get Sources`
2.  Seleccione Github, ingrese su autorización y seleccione su repositorio y sucursal

**Instale el CLI angular**

1.  Haga clic `Add Task`, a la izquierda, busque `npm`a la derecha
2.  Seleccione `npm (run an npm command)`y haga clic`Add`
3.  Ingrese un nombre como `install the angular cli`
4.  Ingrese el comando npm como `install`
5.  Ingrese los argumentos como `@angular/cli -g`

**Instalar los paquetes NPM del proyecto**

1.  Haga clic `Add Task`, a la izquierda, busque `npm`a la derecha
2.  Seleccione `npm (run an npm command)`y haga clic`Add`
3.  Ingrese un nombre como `install packages via npm`
4.  Ingrese el comando npm como `install`

**Construye el Proyecto con el CLI Angular**

1.  Haga clic `Add Task`, a la izquierda, busque `command line`a la derecha
2.  Seleccione `Command Line`y haga clic`Add`
3.  Ingrese un nombre como `build the angular app`
4.  Introduzca la herramienta como `ng`
5.  Ingrese los argumentos como `build --prod`

**Instale los paquetes NPM del servidor Express**

1.  Haga clic `Add Task`, a la izquierda, busque `npm`a la derecha
2.  Seleccione `npm (run an npm command)`y haga clic`Add`
3.  Ingrese un nombre como `npm install in the dist folder for express`
4.  Entra en la carpeta de trabajo como `dist/`
5.  Ingrese el comando npm como `install`

**Implementar a Azure**

1.  Haga clic `Add Task`, a la izquierda, busque `azure app service deploy`a la derecha
2.  Seleccione `Azure App Service Deploy`y haga clic`Add`
3.  Ingrese un nombre como `Azure App Service Deploy: my-app`
4.  Seleccione su suscripción de Azure
5.  Seleccione el nombre del servicio de su aplicación
6.  Establecer la `package or folder`a`dist/`
7.  Seleccione la casilla de verificación para `Generate Web.config`
8.  Introduzca el `Web.config parameters`como`-Handler iisnode -NodeStartFile index.js -appType node`
9.  Seleccione la casilla de verificación para `Publish using Web Deploy`
10.  Marque la casilla para `Remove additional files at destination`

**Ejecute este proceso en todos los compromisos / fusiones con Github**

1.  Ir a `triggers`en la parte superior izquierda y `enable`la integración continua.
2.  Presiona el `Save and Queue`boton

¡Entonces puedes ponerlo en cola y ver el progreso de la construcción!

### Pensamientos finales

¡Y eso es todo lo que necesitas para sacar tus propias bibliotecas para el mundo!

Espero que este tutorial le haya ayudado a tener una buena idea de lo fácil que es con Angular CLI 7configurar sus propias bibliotecas y publicarlas para su uso. Espero ver qué nuevos y emocionantes módulos se crean. ¡Por favor hazme saber si tienes preguntas!

By [Jaime Hernández](https://medium.com/@devjaime) on [November 7, 2018](https://medium.com/p/d8c9d66668bd).

[Canonical link](https://medium.com/@devjaime/creando-una-biblioteca-simple-usando-cli-angular-7-y-desplegando-en-azure-d8c9d66668bd)

Exported from [Medium](https://medium.com) on March 15, 2025.