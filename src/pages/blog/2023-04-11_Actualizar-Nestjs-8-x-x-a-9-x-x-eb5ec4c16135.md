---
description: "Actualizar Nestjs 8.x.x a 9.x.x ==============================="
---
filename: "2023-04-11_Actualizar-Nestjs-8-x-x-a-9-x-x-eb5ec4c16135"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-07T08:00:00-0300"
draft: false
time: 15
featured: false
---

---


Actualizar Nestjs 8.x.x a 9.x.x
===============================

Para actualizar de NestJS 8.x.x a 9.x.x, siga los siguientes pasos:

* * *

### Actualizar Nestjs 8.x.x a 9.x.x

Para actualizar de NestJS 8.x.x a 9.x.x, siga los siguientes pasos:

1.  Actualice su versión de Node.js a la versión 14 o superior. NestJS 9.x.x requiere Node.js 14.x.x o superior.
2.  Actualice la versión de Nest CLI globalmente. Para hacerlo, ejecute el siguiente comando en la terminal:

npm install -g @nestjs/cli@9

3\. Actualice las dependencias de su proyecto. Para hacerlo, ejecute el siguiente comando en la terminal:

npm install @nestjs/core@9 @nestjs/common@9 @nestjs/platform-express@9

1.  Actualice cualquier otro paquete de NestJS que esté utilizando en su proyecto a la versión 9.x.x. Puede encontrar una lista completa de las actualizaciones en la documentación oficial de NestJS.
2.  Actualice las referencias de NestJS en su código. Por ejemplo, si tiene un archivo `main.ts` que incluye `import { NestFactory } from '@nestjs/core'`, actualice esa referencia a `import { NestFactory } from '@nestjs/platform-express'`.
3.  Una vez que haya actualizado todas las dependencias, ejecute las pruebas de su proyecto para asegurarse de que todo siga funcionando correctamente.

Con estos pasos, debería poder actualizar de NestJS 8.x.x a 9.x.x sin problemas. Recuerde que siempre es una buena práctica realizar una copia de seguridad de su proyecto antes de realizar cualquier actualización importante.

Para que es este caracter ^ en el package.json

El caracter `^` se utiliza en el archivo `package.json` para indicar que se permiten actualizaciones menores de una dependencia específica.

Cuando se define una dependencia en el archivo `package.json`, se puede especificar una versión exacta o un rango de versiones que se permiten. Por ejemplo, si se desea instalar la versión 1.2.3 de una dependencia, se puede escribir:

"dependencies": {  
  "nombre-dependencia": "1.2.3"  
}

Sin embargo, si se utiliza el caracter `^` antes del número de versión, se permite que se actualice a cualquier versión que sea compatible con la versión especificada, pero no se permite una actualización mayor. Por ejemplo:

"dependencies": {  
  "nombre-dependencia": "^1.2.3"  
}

En este caso, se permite cualquier versión que sea mayor o igual a 1.2.3 pero menor que 2.0.0. Si se ejecuta el comando `npm update`, se actualizará a la versión más reciente que sea compatible con esta restricción.

En resumen, utilizar el caracter `^` en el archivo `package.json` ayuda a mantener las dependencias actualizadas sin permitir cambios que puedan romper la compatibilidad con el código existente.

#### Como saber que vulnerabilidades tiene mi package.json

Para conocer las vulnerabilidades en las dependencias de tu proyecto que están registradas en la base de datos del Registro Nacional de Vulnerabilidades de Seguridad de Software de Gobierno de los Estados Unidos (National Vulnerability Database — NVD), puedes utilizar una herramienta como `npm audit`.

El comando `npm audit` se utiliza para analizar las dependencias de un proyecto y verificar si alguna de ellas tiene vulnerabilidades conocidas. Para ejecutar `npm audit`, debes abrir una terminal en la carpeta raíz del proyecto y escribir el siguiente comando:

npm audit

El comando mostrará una lista de las dependencias que tienen vulnerabilidades conocidas y la gravedad de las mismas. Además, proporcionará recomendaciones sobre cómo resolver cada vulnerabilidad.

Por ejemplo, si una dependencia tiene una vulnerabilidad crítica, `npm audit` mostrará un mensaje similar a este:

High            │ Regular Expression Denial of Service  
├───────────────┼─────────────────────────────────────  
│ Package       │ tough-cookie  
│ Patched in    │ >=3.0.1 <4.0.0 || >=5.0.0  
│ Dependency of │ request  
│ Path          │ request > tough-cookie

En este ejemplo, la dependencia `tough-cookie` tiene una vulnerabilidad de denegación de servicio (DoS) de expresiones regulares. La vulnerabilidad se encuentra en la versión actual de `tough-cookie`, pero se soluciona en versiones posteriores, según se indica en el mensaje. La dependencia `request` depende de `tough-cookie`, por lo que se recomienda actualizar `request` para resolver la vulnerabilidad.

Es importante mencionar que `npm audit` solo muestra vulnerabilidades conocidas en la base de datos del NVD y no es capaz de detectar todas las vulnerabilidades potenciales en las dependencias de tu proyecto. Por lo tanto, es recomendable utilizar otras herramientas de seguridad en conjunto con `npm audit` para garantizar la seguridad del proyecto.

### VERSIONES 🤔 ¿CÓMO ACTUALIZAR las dependencias del PACKAGE.JSON? ⬆️ NPM CHECK

By [Jaime Hernández](https://medium.com/@devjaime) on [April 11, 2023](https://medium.com/p/eb5ec4c16135).

[Canonical link](https://medium.com/@devjaime/actualizar-nestjs-8-x-x-a-9-x-x-eb5ec4c16135)

Exported from [Medium](https://medium.com) on March 15, 2025.