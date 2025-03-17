---
layout: "../../layouts/BlogLayout.astro"
title: "Migrando Microservicios de NestJS con TypeScript a Go: Una Semana de Descubrimientos"
description: ""
tags: ["code", "Microservicios", "NestJS", "Typescript", "Go"]
time: 4
featured: true
timestamp: "2024-06-23T12:20:32-0300"
filename: "2024-06-23_Migrando-Microservicios-de-NestJS-con-TypeScript-a-Go--Una-Semana-de-Descubrimientos-c754ff0cea6a"
---

Migrando Microservicios de NestJS con TypeScript a Go: Una Semana de Descubrimientos
====================================================================================

En la última semana, me he sumergido en el mundo de Go con el objetivo de migrar nuestros microservicios desarrollados en NestJS con…

* * *

### Migrando Microservicios de NestJS con TypeScript a Go: Una Semana de Descubrimientos

![](https://cdn-images-1.medium.com/max/800/0*9uYraLkbpKaIvlBm.png)

En la última semana, me he sumergido en el mundo de Go con el objetivo de migrar nuestros microservicios desarrollados en NestJS con TypeScript. Esta travesía ha sido un ejercicio intenso de desaprender ciertos paradigmas y adoptar otros, comprendiendo las diferencias fundamentales entre estos dos ecosistemas de desarrollo.

### Nuestra Arquitectura en NestJS

En nuestro stack con NestJS, manejamos microservicios conectados a bases de datos PostgreSQL y Redis. Implementamos diversas estrategias de comunicación entre microservicios:

1.  **Comunicación por Eventos**: Utilizamos Pub/Sub para suscripciones y tópicos que permiten la comunicación asíncrona entre microservicios.
2.  **Backend for Frontend (BFF)**: Implementamos APIs REST protegidas con JWT, que sirven de intermediarios entre el frontend y la base de datos.

#### Validaciones y Migraciones

La validación de DTOs y la migración de datos son cruciales en nuestro sistema. TypeScript nos ha permitido definir tipos estrictos y estructuras con Knex y TypeORM para manejar migraciones. Aunque eficaz, este enfoque requiere un conocimiento profundo del lenguaje y de cómo manipular flujos de datos a través de diferentes microservicios.

#### Retos con NestJS

Detectamos problemas de **event loop** que afectaban la performance, los cuales abordamos usando la librería Clinic.js. Identificamos los cuellos de botella y optimizamos el uso de patrones de diseño junto con `async` y `await`. Sin embargo, manejar concurrencia en Node.js puede ser complejo y costoso en términos de recursos.

### Adentrándonos en Go

Al explorar Go, nos encontramos con una transición de paradigmas y una serie de diferencias significativas:

1.  **Compilación y Tipado Estático**: A diferencia de TypeScript, Go es un lenguaje compilado con tipado estático fuerte, lo que nos fuerza a detectar errores en tiempo de compilación.
2.  **Control de Flujo y Manejo de Errores**: Go simplifica el manejo de errores a través de su enfoque explícito de retorno de errores, en lugar de excepciones.
3.  **Estructura de Datos y Memoria**: La asignación de memoria y la gestión de estructuras de datos en Go requiere una comprensión más profunda del hardware, lo cual es diferente al enfoque más abstracto de JavaScript.

#### POO e Interfaces

En Go, aunque la orientación a objetos es soportada, se manifiesta de manera diferente. La ausencia de herencia tradicional y la utilización de interfaces proporciona una flexibilidad distinta que debe ser entendida a fondo para aprovechar al máximo.

#### Ejemplos Comparativos

Validación de Datos

**NestJS**: Usamos Decoradores en DTOs para la validación.

import { IsString, IsInt } from 'class-validator';  
  
class CreateUserDto {  
    @IsString()  
    name: string;  
  
    @IsInt()  
    age: number;  
}

**Go**: Usamos librerías como `go-playground/validator` para la validación.

import (  
    "gopkg.in/go-playground/validator.v9"  
)  
  
type User struct {  
    Name string \`validate:"required"\`  
    Age  int    \`validate:"gte=0"\`  
}  
  
validate := validator.New()  
user := &User{Name: "Alice", Age: 25}  
err := validate.Struct(user)

Comunicación Asíncrona

*   **NestJS**: Uso de `async/await` para manejar promesas.

async function fetchData(): Promise<void\> {  
    const data = await apiCall();  
    console.log(data);  
}

**Go**: Uso de gorutinas y canales para concurrencia.

func fetchData() {  
    dataChan := make(chan string)  
    go func() {  
        dataChan <- apiCall()  
    }()  
    data := <-dataChan  
    fmt.Println(data)  
}

#### Herramientas y Configuración

En Go, hemos adoptado herramientas como **Gin** para APIs REST y **Gorm** como ORM. La configuración de nuestro entorno en VSCode con `make` para automatizar tareas ha sido crucial para mantener la productividad y adaptarnos a este nuevo flujo de trabajo.

### Reflexiones Finales

Migrar de NestJS con TypeScript a Go ha sido desafiante pero también gratificante. Mientras que NestJS ofrece una experiencia enriquecida en el desarrollo rápido de APIs con un enfoque en la reutilización y la abstracción, Go nos ha brindado un control más granular sobre la concurrencia y el rendimiento, esencial para aplicaciones altamente escalables.

Seguimos experimentando y ajustando nuestros flujos de trabajo, y a pesar de los desafíos, estamos entusiasmados con las posibilidades que ofrece Go para el futuro de nuestros microservicios.

* * *

Espero que este blog sirva como una guía y una inspiración para aquellos que estén considerando una transición similar. ¿Qué experiencias han tenido ustedes con la migración de tecnologías? ¿Qué retos y soluciones han encontrado en el camino?

¡Compartan sus historias y sigamos aprendiendo juntos!

By [Jaime Hernández](https://medium.com/@devjaime) on [June 23, 2024](https://medium.com/p/c754ff0cea6a).

[Canonical link](https://medium.com/@devjaime/migrando-microservicios-de-nestjs-con-typescript-a-go-una-semana-de-descubrimientos-c754ff0cea6a)

Exported from [Medium](https://medium.com) on March 15, 2025.