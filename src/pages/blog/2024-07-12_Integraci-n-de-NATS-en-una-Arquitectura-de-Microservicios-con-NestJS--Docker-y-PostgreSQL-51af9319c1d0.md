---
layout: "../../layouts/BlogLayout.astro"
title: "Integración de NATS en una Arquitectura de Microservicios con NestJS, Docker y PostgreSQL"
description: ""
tags: ["code", "NATS", "NESTJS", "DOCKER", "PostgresSQL"]
time: 4
featured: true
timestamp: "2024-07-12T12:20:32-0300"
filename: "2024-07-12_Integraci-n-de-NATS-en-una-Arquitectura-de-Microservicios-con-NestJS--Docker-y-PostgreSQL-51af9319c1d0"
---

Integración de NATS en una Arquitectura de Microservicios con NestJS, Docker y PostgreSQL
=========================================================================================

Introducción

* * *

### Integración de NATS en una Arquitectura de Microservicios con NestJS, Docker y PostgreSQL

![](https://cdn-images-1.medium.com/max/800/0*Uwwpj7DXbcxMeTb7)

### Introducción

En el mundo del desarrollo de software, los microservicios han ganado popularidad debido a su capacidad para dividir aplicaciones grandes y complejas en partes más pequeñas y manejables. En este blog, exploraremos cómo integrar un servidor NATS (Neural Autonomic Transport System) en una arquitectura de microservicios utilizando NestJS, Docker y PostgreSQL. Para hacerlo más tangible, utilizaremos un caso de uso real de una aplicación de gestión de pedidos.

### Caso de Uso: Aplicación de Gestión de Pedidos

Imaginemos que estamos construyendo una aplicación de gestión de pedidos que incluye múltiples servicios, como el servicio de pedidos, el servicio de inventario y el servicio de notificaciones. Estos servicios deben comunicarse entre sí de manera eficiente y confiable. Aquí es donde NATS entra en juego, proporcionando un sistema de mensajería rápida y de bajo retardo.

### Arquitectura de la Aplicación

Nuestra aplicación de gestión de pedidos tendrá la siguiente arquitectura:

1.  **Servicio de Pedidos**: Gestiona la creación, actualización y eliminación de pedidos.
2.  **Servicio de Inventario**: Mantiene el inventario de productos y actualiza las existencias según los pedidos.
3.  **Servicio de Notificaciones**: Envía notificaciones a los usuarios sobre el estado de sus pedidos.

### Configuración de Docker

Primero, configuramos Docker para orquestar nuestros servicios. Creamos un archivo `Dockerfile` para nuestro servicio NestJS y un archivo `docker-compose.yml` para definir y ejecutar múltiples contenedores Docker.

FROM node:14  
WORKDIR /app  
COPY package\*.json ./  
RUN npm install  
COPY . .  
RUN npm run build  
EXPOSE 3000  
CMD \["npm", "run", "start:prod"\]

#### Docker Compose

version: '3'  
services:  
  postgres:  
    image: postgres:latest  
    environment:  
      POSTGRES\_USER: user  
      POSTGRES\_PASSWORD: password  
      POSTGRES\_DB: orders  
    ports:  
      \- "5432:5432"  
    volumes:  
      \- postgres-data:/var/lib/postgresql/data  
  
  nats:  
    image: nats:latest  
    ports:  
      \- "4222:4222"  
  
  orders:  
    build: .  
    environment:  
      DATABASE\_HOST: postgres  
      DATABASE\_PORT: 5432  
      DATABASE\_USER: user  
      DATABASE\_PASSWORD: password  
      DATABASE\_NAME: orders  
      NATS\_SERVER: nats://nats:4222  
    depends\_on:  
      \- postgres  
      \- nats  
    ports:  
      \- "3000:3000"  
    
volumes:  
  postgres-data:

### Configuración de NestJS

Ahora configuramos nuestro proyecto NestJS para que interactúe con NATS y PostgreSQL.

#### Instalación de Dependencias

npm install @nestjs/microservices nats @nestjs/typeorm typeorm pg

Claro, aquí tienes un ejemplo de cómo se podría escribir un blog sobre la integración de un servidor NATS en una configuración de microservicios utilizando NestJS, Docker y PostgreSQL, con un caso de uso real.

* * *

### Integración de NATS en una Arquitectura de Microservicios con NestJS, Docker y PostgreSQL

### Introducción

En el mundo del desarrollo de software, los microservicios han ganado popularidad debido a su capacidad para dividir aplicaciones grandes y complejas en partes más pequeñas y manejables. En este blog, exploraremos cómo integrar un servidor NATS (Neural Autonomic Transport System) en una arquitectura de microservicios utilizando NestJS, Docker y PostgreSQL. Para hacerlo más tangible, utilizaremos un caso de uso real de una aplicación de gestión de pedidos.

### Caso de Uso: Aplicación de Gestión de Pedidos

Imaginemos que estamos construyendo una aplicación de gestión de pedidos que incluye múltiples servicios, como el servicio de pedidos, el servicio de inventario y el servicio de notificaciones. Estos servicios deben comunicarse entre sí de manera eficiente y confiable. Aquí es donde NATS entra en juego, proporcionando un sistema de mensajería rápida y de bajo retardo.

### Arquitectura de la Aplicación

Nuestra aplicación de gestión de pedidos tendrá la siguiente arquitectura:

1.  **Servicio de Pedidos**: Gestiona la creación, actualización y eliminación de pedidos.
2.  **Servicio de Inventario**: Mantiene el inventario de productos y actualiza las existencias según los pedidos.
3.  **Servicio de Notificaciones**: Envía notificaciones a los usuarios sobre el estado de sus pedidos.

### Configuración de Docker

Primero, configuramos Docker para orquestar nuestros servicios. Creamos un archivo `Dockerfile` para nuestro servicio NestJS y un archivo `docker-compose.yml` para definir y ejecutar múltiples contenedores Docker.

#### Dockerfile para el servicio NestJS

FROM node:14  
WORKDIR /app  
COPY package\*.json ./  
RUN npm install  
COPY . .  
RUN npm run build  
EXPOSE 3000  
CMD \["npm", "run", "start:prod"\]

#### Docker Compose

version: '3'  
services:  
  postgres:  
    image: postgres:latest  
    environment:  
      POSTGRES\_USER: user  
      POSTGRES\_PASSWORD: password  
      POSTGRES\_DB: orders  
    ports:  
      \- "5432:5432"  
    volumes:  
      \- postgres-data:/var/lib/postgresql/data  
  
  nats:  
    image: nats:latest  
    ports:  
      \- "4222:4222"  
  
  orders:  
    build: .  
    environment:  
      DATABASE\_HOST: postgres  
      DATABASE\_PORT: 5432  
      DATABASE\_USER: user  
      DATABASE\_PASSWORD: password  
      DATABASE\_NAME: orders  
      NATS\_SERVER: nats://nats:4222  
    depends\_on:  
      \- postgres  
      \- nats  
    ports:  
      \- "3000:3000"  
    
volumes:  
  postgres-data:

### Configuración de NestJS

Ahora configuramos nuestro proyecto NestJS para que interactúe con NATS y PostgreSQL.

#### Instalación de Dependencias

npm install @nestjs/microservices nats @nestjs/typeorm typeorm pg

#### Configuración del Microservicio con NATS

Configuramos el microservicio en el archivo `app.module.ts` para que use NATS como sistema de mensajería.

import { Module } from '@nestjs/common';  
import { ClientsModule, Transport } from '@nestjs/microservices';  
import { TypeOrmModule } from '@nestjs/typeorm';  
import { AppController } from './app.controller';  
import { AppService } from './app.service';  
  
@Module({  
  imports: \[  
    ClientsModule.register(\[  
      {  
        name: 'NATS\_SERVICE',  
        transport: Transport.NATS,  
        options: {  
          url: process.env.NATS\_SERVER,  
        },  
      },  
    \]),  
    TypeOrmModule.forRoot({  
      type: 'postgres',  
      host: process.env.DATABASE\_HOST,  
      port: parseInt(process.env.DATABASE\_PORT, 10),  
      username: process.env.DATABASE\_USER,  
      password: process.env.DATABASE\_PASSWORD,  
      database: process.env.DATABASE\_NAME,  
      entities: \[\_\_dirname + '/\*\*/\*.entity{.ts,.js}'\],  
      synchronize: true,  
    }),  
  \],  
  controllers: \[AppController\],  
  providers: \[AppService\],  
})  
export class AppModule {}

#### Uso del Servicio NATS en un Controlador

En el controlador, usamos NATS para enviar y recibir mensajes.

import { Controller, Get } from '@nestjs/common';  
import { ClientProxy, Client } from '@nestjs/microservices';  
import { Observable } from 'rxjs';  
  
@Controller()  
export class AppController {  
  @Client({ transport: Transport.NATS, options: { url: process.env.NATS\_SERVER } })  
  private client: ClientProxy;  
  
  @Get()  
  getHello(): Observable<string\> {  
    return this.client.send<string\>({ cmd: 'hello' }, {});  
  }  
}

### Integración con PostgreSQL

Configuramos TypeORM para interactuar con PostgreSQL.

#### Configuración de TypeORM

import { TypeOrmModule } from '@nestjs/typeorm';  
  
@Module({  
  imports: \[  
    TypeOrmModule.forRoot({  
      type: 'postgres',  
      host: process.env.DATABASE\_HOST,  
      port: parseInt(process.env.DATABASE\_PORT, 10),  
      username: process.env.DATABASE\_USER,  
      password: process.env.DATABASE\_PASSWORD,  
      database: process.env.DATABASE\_NAME,  
      entities: \[\_\_dirname + '/\*\*/\*.entity{.ts,.js}'\],  
      synchronize: true,  
    }),  
  \],  
  controllers: \[AppController\],  
  providers: \[AppService\],  
})  
export class AppModule {}

### Conclusión

Con esta configuración, hemos logrado integrar un servidor NATS en una arquitectura de microservicios utilizando NestJS, Docker y PostgreSQL. Esta integración permite que nuestros servicios se comuniquen de manera eficiente y escalable, lo que es crucial para aplicaciones modernas de microservicios. La configuración de Docker facilita el despliegue y la gestión de cada componente, asegurando que nuestra aplicación sea fácil de mantener y escalar.

By [Jaime Hernández](https://medium.com/@devjaime) on [July 12, 2024](https://medium.com/p/51af9319c1d0).

[Canonical link](https://medium.com/@devjaime/integraci%C3%B3n-de-nats-en-una-arquitectura-de-microservicios-con-nestjs-docker-y-postgresql-51af9319c1d0)

Exported from [Medium](https://medium.com) on March 15, 2025.