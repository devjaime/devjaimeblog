---
layout: "../../layouts/BlogLayout.astro"
title: "Pruebas A/B vs Canary Release vs Despliegue Azul Verde"
description: ""
tags: ["code", "Release", "Canary"]
time: 4
featured: true
timestamp: "2022-08-15T12:20:31-0300"
filename: "2022-08-15_Pruebas-A-B-vs-Canary-Release-vs-Despliegue-Azul-Verde-9f12904f9aa0"
---

Pruebas A/B vs Canary Release vs Despliegue Azul Verde
======================================================

A/B Testing

* * *

### Pruebas A/B vs Canary Release vs Despliegue Azul Verde

![](https://cdn-images-1.medium.com/max/800/0*mJsl9m1NQWqV8-Y2)

**A/B Testing**

*   En términos simples, las pruebas A/B son una forma de comparar dos versiones de algo para determinar cuál funciona mejor.
*   En una prueba A/B, un porcentaje de sus usuarios recibe automáticamente la “versión A” y otro recibe la “versión B”.
*   Es un proceso experimental controlado. Para ejecutar el experimento, los grupos de usuarios se dividen en 2 grupos. El grupo “A”, a menudo llamado “grupo de control”, continúa recibiendo la versión del producto existente, mientras que el grupo “B”, a menudo llamado “grupo de tratamiento”, recibe una experiencia diferente, basada en una hipótesis específica sobre las métricas a ser Medido
*   Al final, se comparan los resultados de 2 grupos, que es una variedad de métricas, para determinar qué versión funcionó mejor.

### Canary Release

*   Canary Testing es una forma de reducir el riesgo y validar el nuevo software al lanzar el software a un pequeño porcentaje de usuarios. Con las pruebas Canary, puede ofrecer nuevas funciones a ciertos grupos de usuarios a la vez.
*   Dado que la nueva característica solo se distribuye a una pequeña cantidad de usuarios, su impacto es relativamente pequeño y los cambios se pueden revertir rápidamente si el nuevo código resulta ser defectuoso.
*   Es una técnica para reducir el riesgo de introducir una nueva versión de software en producción implementando lentamente el cambio en un pequeño subconjunto de usuarios antes de implementarlo en toda la infraestructura y ponerlo a disposición de todos.
*   Si bien los lanzamientos canary son una buena manera de detectar problemas y regresiones, las A/B testing son una forma de probar una hipótesis utilizando implementaciones variantes.

### Blue Green Deployment

*   Blue Green Deployment es una estrategia de implementación de software que utiliza dos entornos de producción (un “entorno azul” y un “entorno verde”) para que el proceso de implementación de software sea más fácil y seguro.
*   Los dos entornos de producción se mantienen lo más idénticos posible y, cuando se implementa código nuevo, se envía al entorno que actualmente está inactivo. Una vez que los nuevos cambios se han probado en producción, un enrutador puede cambiar para apuntar al entorno donde están activos los nuevos cambios, lo que permite una transición sin problemas.
*   Uno de los principales beneficios de las implementaciones blue-green es la recuperación ante desastres. Debido a que hay dos entornos idénticos para la producción, si se implementan nuevos cambios en uno (por ejemplo, la versión azul) y se descubren problemas, un enrutador puede simplemente volver al otro entorno (versión verde) que tiene la versión anterior del código con cero tiempo de inactividad.
*   La implementación azul-verde se puede usar para pruebas canary simplemente haciendo que el enrutador dirija un porcentaje de su tráfico a la nueva versión del código para ver cómo funciona con el tráfico en vivo, antes de implementar el cambio al 100% de sus usuarios.

![](https://cdn-images-1.medium.com/max/800/0*mJsl9m1NQWqV8-Y2)

By [Jaime Hernández](https://medium.com/@devjaime) on [August 15, 2022](https://medium.com/p/9f12904f9aa0).

[Canonical link](https://medium.com/@devjaime/a-b-testing-vs-canary-release-vs-blue-green-deployment-9f12904f9aa0)

Exported from [Medium](https://medium.com) on March 15, 2025.