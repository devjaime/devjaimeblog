---
layout: "../../layouts/BlogLayout.astro"
title: "Construyendo Subconsultas Eficientes en PostgreSQL con CTEs: Ejemplos en Retail y Banca"
description: ""
tags: ["code", "PostgressSQL", "CTEs"]
time: 4
featured: true
timestamp: "2024-08-03T12:20:32-0300"
filename: "2024-08-03_Construyendo-Subconsultas-Eficientes-en-PostgreSQL-con-CTEs--Ejemplos-en-Retail-y-Banca-a60c8ae0780a"
---

Construyendo Subconsultas Eficientes en PostgreSQL con CTEs: Ejemplos en Retail y Banca \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Construyendo Subconsultas Eficientes en PostgreSQL con CTEs: Ejemplos en Retail y Banca
=======================================================================================

En el mundo del desarrollo de bases de datos, las subconsultas son una herramienta poderosa que nos permite realizar consultas complejas de…

* * *

### Construyendo Subconsultas Eficientes en PostgreSQL con CTEs: Ejemplos en Retail y Banca

![](https://cdn-images-1.medium.com/max/800/0*TYMInECvXoCjO5qA)

generada con IA OpenIA

En el mundo del desarrollo de bases de datos, las subconsultas son una herramienta poderosa que nos permite realizar consultas complejas de manera modular y eficiente. PostgreSQL, uno de los sistemas de gestión de bases de datos más avanzados y populares, ofrece una técnica llamada Common Table Expressions (CTEs) para optimizar y ejecutar subconsultas. En este blog, exploraremos cómo construir subconsultas eficientes en PostgreSQL utilizando CTEs con ejemplos prácticos en los sectores de retail y banca.

### ¿Qué son las CTEs?

Las Common Table Expressions (CTEs) son una forma de definir consultas temporales que pueden ser referenciadas dentro de la consulta principal. Las CTEs mejoran la legibilidad y el mantenimiento del código SQL, especialmente cuando se trata de consultas complejas. Se definen utilizando la cláusula `**WITH**`.

### Ventajas de las CTEs

*   **Legibilidad**: Las CTEs hacen que las consultas sean más fáciles de leer y entender.
*   **Reutilización de código**: Permiten reutilizar una subconsulta en varias partes de la consulta principal.
*   **Mantenimiento**: Facilitan el mantenimiento del código, ya que las subconsultas se definen de forma clara y separada.

### Ejemplos de CTEs en Retail y Banca

### Ejemplo en Retail: Filtrar Productos por Precio Promedio

Supongamos que queremos crear una subconsulta que filtre productos con un precio mayor al promedio y luego usar esta subconsulta en la consulta principal.

WITH filtered\_products AS (  
  SELECT nombre\_producto, precio  
  FROM productos  
  WHERE precio \> (SELECT AVG(precio) FROM productos)  
)  
SELECT nombre\_producto, precio  
FROM filtered\_products;

En este ejemplo, la CTE `filtered_products` selecciona los productos cuyo precio es mayor que el precio promedio de todos los productos. Luego, la consulta principal selecciona todos los productos de la CTE.

### Ejemplo en Banca: Filtrar Cuentas por Saldo Promedio

Queremos crear una subconsulta que filtre cuentas con un saldo mayor al promedio y luego usar esta subconsulta en la consulta principal.

WITH filtered\_accounts AS (  
  SELECT numero\_cuenta, saldo  
  FROM cuentas\_bancarias  
  WHERE saldo \> (SELECT AVG(saldo) FROM cuentas\_bancarias)  
)  
SELECT numero\_cuenta, saldo  
FROM filtered\_accounts;

En este ejemplo, la CTE `filtered_accounts` selecciona las cuentas cuyo saldo es mayor que el saldo promedio de todas las cuentas bancarias. Luego, la consulta principal selecciona todas las cuentas de la CTE.

### Ejemplo en Retail: Productos por Categoría con Precio Promedio

Queremos obtener el precio promedio de los productos por cada categoría y mostrarlo junto con el nombre del producto y su precio.

WITH category\_averages AS (  
  SELECT categoria\_id, AVG(precio) AS precio\_promedio  
  FROM productos  
  GROUP BY categoria\_id  
)  
SELECT p.nombre\_producto, p.precio, ca.precio\_promedio  
FROM productos p  
JOIN category\_averages ca ON p.categoria\_id \= ca.categoria\_id;

En este ejemplo, la CTE `category_averages` calcula el precio promedio de los productos por categoría. Luego, la consulta principal une los productos con los precios promedio por categoría.

### Ejemplo en Banca: Saldos Promedios por Tipo de Cuenta

Queremos obtener el saldo promedio de las cuentas por cada tipo de cuenta y mostrarlo junto con el número de cuenta y su saldo.

WITH account\_type\_averages AS (  
  SELECT tipo\_cuenta, AVG(saldo) AS saldo\_promedio  
  FROM cuentas\_bancarias  
  GROUP BY tipo\_cuenta  
)  
SELECT c.numero\_cuenta, c.saldo, ata.saldo\_promedio  
FROM cuentas\_bancarias c  
JOIN account\_type\_averages ata ON c.tipo\_cuenta \= ata.tipo\_cuenta;

En este ejemplo, la CTE `account_type_averages` calcula el saldo promedio de las cuentas por tipo de cuenta. Luego, la consulta principal une las cuentas bancarias con los saldos promedio por tipo de cuenta.

### Ejemplo en Retail: Productos con Ventas Totales

Queremos calcular el total de ventas por producto y mostrarlo junto con el nombre del producto.

WITH total\_sales AS (  
  SELECT producto\_id, SUM(cantidad \* precio) AS ventas\_totales  
  FROM ventas  
  GROUP BY producto\_id  
)  
SELECT p.nombre\_producto, ts.ventas\_totales  
FROM productos p  
JOIN total\_sales ts ON p.producto\_id \= ts.producto\_id;

En este ejemplo, la CTE `total_sales` calcula el total de ventas por producto. Luego, la consulta principal une los productos con sus ventas totales.

### Ejemplo en Banca: Cuentas con Transacciones Recientes

Queremos obtener las cuentas que han tenido transacciones en el último mes y mostrar el número de cuenta junto con el saldo.

WITH recent\_transactions AS (  
  SELECT DISTINCT numero\_cuenta  
  FROM transacciones  
  WHERE fecha \> CURRENT\_DATE \- INTERVAL '1 month'  
)  
SELECT c.numero\_cuenta, c.saldo  
FROM cuentas\_bancarias c  
JOIN recent\_transactions rt ON c.numero\_cuenta \= rt.numero\_cuenta;

En este ejemplo, la CTE `recent_transactions` selecciona las cuentas que han tenido transacciones en el último mes. Luego, la consulta principal une estas cuentas con su saldo.

### Conclusión

Las CTEs son una herramienta esencial en PostgreSQL para realizar subconsultas de manera eficiente y legible. Al entender cómo y cuándo utilizar CTEs, podemos optimizar el rendimiento de nuestras bases de datos y obtener resultados más precisos. Ya sea en el sector retail o en la banca, las CTEs pueden ayudarnos a extraer información valiosa y tomar decisiones informadas.

By [Jaime Hernández](https://medium.com/@devjaime) on [August 3, 2024](https://medium.com/p/a60c8ae0780a).

[Canonical link](https://medium.com/@devjaime/construyendo-subconsultas-eficientes-en-postgresql-con-ctes-ejemplos-en-retail-y-banca-a60c8ae0780a)

Exported from [Medium](https://medium.com) on March 15, 2025.