---
layout: "../../layouts/BlogLayout.astro"
title: "Utilizando Query Builder y Query Runner en NestJS para una Interacción Eficiente con Bases de Datos"
description: ""
tags: ["code", "QueryBuilder", "Nestjs"]
time: 4
featured: true
timestamp: "2023-10-07T12:20:32-0300"
filename: "2023-10-07_Utilizando-Query-Builder-y-Query-Runner-en-NestJS-para-una-Interacci-n-Eficiente-con-Bases-de-Datos-953fa226955b"
---


Utilizando Query Builder y Query Runner en NestJS para una Interacción Eficiente con Bases de Datos
===================================================================================================

NestJS es un marco de trabajo de Node.js que se ha convertido en una elección popular para la creación de aplicaciones web y API robustas…

* * *

### Utilizando Query Builder y Query Runner en NestJS para una Interacción Eficiente con Bases de Datos

![](https://cdn-images-1.medium.com/max/800/0*_MINrEuWpn1yr0vC)

NestJS es un marco de trabajo de Node.js que se ha convertido en una elección popular para la creación de aplicaciones web y API robustas. Uno de los aspectos cruciales al desarrollar aplicaciones es la interacción con bases de datos, y en este artículo, exploraremos dos conceptos clave en NestJS: Query Builder y Query Runner.

### ¿Qué son Query Builder y Query Runner?

Query Builder es una herramienta que proporciona NestJS para construir consultas SQL de manera programática en lugar de escribirlas manualmente. Esto no solo hace que el código sea más legible, sino que también previene posibles vulnerabilidades de seguridad, como la inyección de SQL. Query Builder está diseñado para funcionar con una variedad de bases de datos, incluyendo PostgreSQL, MySQL, SQLite y otros.

Query Runner, por otro lado, es una utilidad que permite ejecutar consultas de manera eficiente y controlada en la base de datos. Puedes utilizarlo para realizar migraciones de bases de datos, transacciones y ejecutar consultas personalizadas.

### Usando Query Builder

Vamos a ver un ejemplo sencillo de cómo utilizar Query Builder en NestJS para construir una consulta SELECT:

import { Injectable } from '@nestjs/common';  
import { InjectRepository } from '@nestjs/typeorm';  
import { Repository } from 'typeorm';  
import { User } from './user.entity';  
@Injectable()  
export class UserService {  
  constructor(    @InjectRepository(User)  
    private readonly userRepository: Repository<User>,  ) {}  
  async getUsersWithAgeGreaterThan(age: number): Promise<User\[\]> {  
    return this.userRepository  
      .createQueryBuilder('user')  
      .where('user.age > :age', { age })  
      .getMany();  
  }  
}

En este ejemplo, estamos utilizando TypeORM como ORM (Object-Relational Mapping) y Query Builder para construir una consulta que selecciona usuarios cuya edad es mayor que un valor dado.

### Utilizando Query Runner

Query Runner es útil cuando necesitas ejecutar consultas personalizadas o llevar a cabo tareas de administración de bases de datos, como migraciones. Aquí hay un ejemplo de cómo se puede usar Query Runner para ejecutar una consulta SQL simple:

import { Injectable } from '@nestjs/common';  
import { Connection } from 'typeorm';  
@Injectable()  
export class DatabaseService {  
  constructor(private readonly connection: Connection) {}  
  async executeCustomQuery(query: string): Promise<any\> {  
    const queryRunner = this.connection.createQueryRunner();  
    await queryRunner.connect();  
    const result = await queryRunner.query(query);  
    await queryRunner.release();  
    return result;  
  }  
}

En este ejemplo, estamos utilizando Query Runner para ejecutar una consulta SQL personalizada proporcionada como una cadena.

### Conclusión

Query Builder y Query Runner son dos herramientas poderosas que NestJS ofrece para facilitar la interacción con bases de datos en tus aplicaciones. Permiten construir consultas de manera programática y ejecutarlas de manera eficiente, lo que mejora la seguridad y la legibilidad del código. Estas herramientas son especialmente útiles cuando trabajas con bases de datos en NestJS y te permiten realizar tareas como consultas personalizadas y migraciones de bases de datos de manera más eficiente.

Esperamos que este artículo te haya ayudado a comprender mejor cómo utilizar Query Builder y Query Runner en NestJS para interactuar con bases de datos de manera efectiva en tus proyectos. ¡Buena suerte en tu desarrollo con NestJS!

[**Insert using Query Builder**  
_INSERT queries using QueryBuilder. Examples:_orkhan.gitbook.io](https://orkhan.gitbook.io/typeorm/docs/insert-query-builder "https://orkhan.gitbook.io/typeorm/docs/insert-query-builder")[](https://orkhan.gitbook.io/typeorm/docs/insert-query-builder)

[**Working with Query Runner**  
_Edit description_orkhan.gitbook.io](https://orkhan.gitbook.io/typeorm/docs/query-runner "https://orkhan.gitbook.io/typeorm/docs/query-runner")[](https://orkhan.gitbook.io/typeorm/docs/query-runner)

By [Jaime Hernández](https://medium.com/@devjaime) on [October 7, 2023](https://medium.com/p/953fa226955b).

[Canonical link](https://medium.com/@devjaime/utilizando-query-builder-y-query-runner-en-nestjs-para-una-interacci%C3%B3n-eficiente-con-bases-de-datos-953fa226955b)

Exported from [Medium](https://medium.com) on March 15, 2025.