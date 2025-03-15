---
layout: "../../layouts/BlogLayout.astro"
title: "Explorando JSONB en PostgreSQL: Almacenamiento y Consultas Flexibles"
description: ""
tags: ["code", "JSONB", "Postgress"]
time: 4
featured: true
timestamp: "2023-09-18T12:20:32-0300"
filename: "2023-09-18_Explorando-JSONB-en-PostgreSQL--Almacenamiento-y-Consultas-Flexibles-6c1a98d2162f"
---

Explorando JSONB en PostgreSQL: Almacenamiento y Consultas Flexibles \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Explorando JSONB en PostgreSQL: Almacenamiento y Consultas Flexibles
====================================================================

Introducción

* * *

### Explorando JSONB en PostgreSQL: Almacenamiento y Consultas Flexibles

![](https://cdn-images-1.medium.com/max/800/0*TvyEzu_C7DjyTiR4.jpg)

Introducción

En el mundo de las bases de datos relacionales, PostgreSQL se destaca por su capacidad para manejar datos estructurados y semi-estructurados de manera efectiva. Uno de los tipos de datos más poderosos y versátiles que PostgreSQL ofrece es JSONB (Binary JSON), que permite almacenar y consultar datos JSON de manera eficiente. En este artículo, exploraremos en detalle qué es JSONB en PostgreSQL, cómo se almacena y cómo se pueden realizar consultas flexibles en estos datos.

¿Qué es JSONB?

JSONB es un tipo de dato en PostgreSQL que permite almacenar datos JSON (JavaScript Object Notation) de forma binaria. A diferencia de su contraparte, JSON (que almacena datos JSON en formato de texto), JSONB almacena los datos de manera más eficiente en una representación binaria. Esto conlleva ventajas significativas en términos de almacenamiento y rendimiento, especialmente cuando se manejan grandes volúmenes de datos JSON.

Almacenamiento Eficiente

JSONB almacena los datos JSON de manera eficiente debido a su representación binaria. Esto se traduce en un menor espacio en disco en comparación con JSON, lo que puede ser fundamental en aplicaciones que manejan grandes cantidades de datos JSON. Además, PostgreSQL optimiza el almacenamiento de JSONB, eliminando espacios en blanco y reduciendo redundancias, lo que contribuye a un uso más eficiente del espacio en disco.

Flexibilidad en la Estructura de Datos

Una de las ventajas más notables de JSONB es su flexibilidad en la estructura de datos. A diferencia de las tablas tradicionales de PostgreSQL, que requieren un esquema predefinido y rígido, JSONB permite almacenar datos con una estructura variable. Esto es especialmente útil cuando se trabaja con datos semiestructurados, donde los campos pueden variar de un registro a otro. JSONB se adapta fácilmente a estos escenarios, lo que facilita la administración de datos dinámicos.

Consultas Flexibles

Además de su eficiencia en el almacenamiento, JSONB brinda la capacidad de realizar consultas flexibles en los datos JSON almacenados. PostgreSQL ofrece un conjunto de operadores y funciones para trabajar con datos JSONB, lo que permite realizar consultas, filtrados y agregaciones de manera sencilla y poderosa.

A continuación, se muestran algunos ejemplos de consultas JSONB en PostgreSQL:

1.  Búsqueda por Valor: Puedes buscar registros que contengan un valor específico en un campo JSONB utilizando la función `->>`. Por ejemplo, `SELECT * FROM personas WHERE datos->>'nombre' = 'Juan'` recuperará todas las personas con el nombre "Juan" en su estructura JSONB.
2.  Filtrado por Condición: Puedes aplicar condiciones de filtrado más complejas utilizando operadores como `->`, `->>`, `@>`, y `?`. Por ejemplo, `SELECT * FROM productos WHERE detalles->>'precio' > '50'` seleccionará todos los productos con un precio mayor a 50.
3.  Agregación de Datos: Puedes realizar agregaciones en datos JSONB utilizando funciones como `jsonb_agg` y `jsonb_object_agg`. Esto es útil para agrupar datos y generar resúmenes.

Ejemplos:

1.- Búsqueda por Valor:

Supongamos que tenemos una tabla llamada `personas` con un campo JSONB llamado `datos` que contiene información sobre cada persona. Queremos buscar todas las personas cuyo nombre sea "Juan". Podemos hacerlo de la siguiente manera:

SELECT \* FROM personas WHERE datos\-\>>'nombre' \= 'Juan';

Este SQL seleccionará todos los registros de la tabla `personas` donde el valor del campo "nombre" en el JSONB sea igual a "Juan".

Filtrado por Condición:

Imagina que tienes una tabla llamada `productos` con un campo JSONB llamado `detalles` que contiene información sobre cada producto, incluido su precio. Queremos seleccionar todos los productos que tengan un precio mayor a 50:

SELECT \* FROM productos WHERE detalles\-\>>'precio' \> '50';

En este caso, estamos usando el operador `->>` para acceder al valor del campo "precio" en el JSONB y luego aplicando una condición para seleccionar los productos con un precio mayor a 50.

Agregación de Datos:

Supongamos que tenemos una tabla llamada `pedidos` con un campo JSONB llamado `productos` que contiene información sobre los productos incluidos en cada pedido. Queremos obtener una lista de todos los productos en todos los pedidos. Podemos usar `jsonb_agg` para agregar los datos:

SELECT jsonb\_agg(productos) FROM pedidos;

Este SQL agregará todos los objetos JSONB contenidos en el campo “productos” de todos los pedidos y los devolverá como un único JSONB que contiene una lista de productos.

Estos ejemplos ilustran cómo realizar operaciones básicas de búsqueda por valor, filtrado por condición y agregación de datos utilizando JSONB en PostgreSQL. Estas capacidades permiten trabajar de manera flexible y eficiente con datos JSON en una base de datos relacional.

Conclusiones

JSONB en PostgreSQL ofrece una solución poderosa para el almacenamiento y consulta de datos JSON. Su capacidad de almacenamiento eficiente y flexibilidad en la estructura de datos lo convierten en una elección valiosa para aplicaciones que manejan datos semiestructurados o variables. Además, la amplia gama de funciones y operadores disponibles en PostgreSQL permite realizar consultas flexibles y sofisticadas en datos JSONB, lo que facilita el procesamiento y análisis de datos en aplicaciones modernas.

Al aprovechar las capacidades de JSONB en PostgreSQL, los desarrolladores pueden diseñar sistemas más flexibles y eficientes, lo que puede tener un impacto significativo en el rendimiento y la escalabilidad de sus aplicaciones.

En resumen, JSONB es una herramienta poderosa en el kit de herramientas de PostgreSQL, permitiendo a los desarrolladores manejar datos JSON de manera eficiente y flexible. Si estás diseñando una aplicación que requiere almacenar o consultar datos JSON, definitivamente vale la pena considerar el uso de JSONB en PostgreSQL.

By [Jaime Hernández](https://medium.com/@devjaime) on [September 18, 2023](https://medium.com/p/6c1a98d2162f).

[Canonical link](https://medium.com/@devjaime/explorando-jsonb-en-postgresql-almacenamiento-y-consultas-flexibles-6c1a98d2162f)

Exported from [Medium](https://medium.com) on March 15, 2025.