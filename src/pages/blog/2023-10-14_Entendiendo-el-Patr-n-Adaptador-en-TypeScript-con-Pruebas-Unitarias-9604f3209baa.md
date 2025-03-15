---
layout: "../../layouts/BlogLayout.astro"
title: "Entendiendo el Patrón Adaptador en TypeScript con Pruebas Unitarias"
description: ""
tags: ["code", "TypeScript", "TestUnit"]
time: 4
featured: true
timestamp: "2023-10-14T12:20:32-0300"
filename: "2023-10-14_Entendiendo-el-Patr-n-Adaptador-en-TypeScript-con-Pruebas-Unitarias-9604f3209baa"
---

Entendiendo el Patrón Adaptador en TypeScript con Pruebas Unitarias \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Entendiendo el Patrón Adaptador en TypeScript con Pruebas Unitarias
===================================================================

El patrón Adaptador es un patrón de diseño estructural utilizado para hacer que una interfaz sea compatible con otra. Permite que objetos…

* * *

![](https://cdn-images-1.medium.com/max/800/0*JYV6UA5J8l2MF3AX.jpg)

### Entendiendo el Patrón Adaptador en TypeScript con Pruebas Unitarias

El patrón Adaptador es un patrón de diseño estructural utilizado para hacer que una interfaz sea compatible con otra. Permite que objetos con interfaces incompatibles trabajen juntos. En este blog, exploraremos el patrón Adaptador en TypeScript y cómo implementar pruebas unitarias para garantizar su corrección.

### Comprendiendo el Patrón Adaptador

El patrón Adaptador implica la creación de una clase, conocida como el adaptador, que actúa como un puente entre dos interfaces incompatibles. Permite que las clases con diferentes interfaces trabajen juntas de manera fluida. Este patrón es especialmente útil al integrar bibliotecas externas, trabajar con código heredado o garantizar la interoperabilidad.

#### Componentes del Patrón Adaptador

1.  Objetivo (Target): Esta es la interfaz con la que el código cliente espera trabajar.
2.  Adaptee: Esta es la clase que debe adaptarse para ajustarse a la interfaz objetivo.
3.  Adaptador: Esta es la clase que une la brecha entre el objetivo y el adaptee al implementar la interfaz objetivo y delegar las llamadas al adaptee.

### Implementación del Patrón Adaptador en TypeScript

Consideremos un ejemplo práctico en el que queremos adaptar una clase que proporciona datos meteorológicos en grados Fahrenheit para que funcione con una clase que espera datos en grados Celsius. Aquí tienes el código TypeScript para este escenario:

// Interfaz objetivo  
interface TemperaturaEnCelsius {  
  obtenerTemperaturaEnCelsius(): number;  
}  
  
// Adaptee  
class TemperaturaEnFahrenheit {  
  constructor(private temperaturaEnFahrenheit: number) {}  
  
  obtenerTemperaturaEnFahrenheit(): number {  
    return this.temperaturaEnFahrenheit;  
  }  
}  
  
// Adaptador  
class AdaptadorDeTemperatura implements TemperaturaEnCelsius {  
  constructor(private adaptee: TemperaturaEnFahrenheit) {}  
  
  obtenerTemperaturaEnCelsius(): number {  
    // Adaptar de Fahrenheit a Celsius  
    return (this.adaptee.obtenerTemperaturaEnFahrenheit() - 32) / 1.8;  
  }  
}

En este ejemplo, la clase `AdaptadorDeTemperatura` nos permite utilizar la clase `TemperaturaEnFahrenheit` como si implementara la interfaz `TemperaturaEnCelsius`.

### Implementación de Pruebas Unitarias para el Adaptador

Ahora, implementemos pruebas unitarias para garantizar la corrección de nuestra implementación del patrón Adaptador. Utilizaremos el popular framework de pruebas, Jest, para este propósito.

\# Instalar Jest  
npm install --save-dev jest @types/jest ts-jest  
  
\# Crear un archivo de pruebas, por ejemplo, temperatureAdapter.test.ts

Aquí tienes una prueba unitaria de muestra para nuestro `AdaptadorDeTemperatura`:

// temperatureAdapter.test.ts  
import { TemperaturaEnFahrenheit, AdaptadorDeTemperatura } from './temperatureAdapter';  
  
describe('AdaptadorDeTemperatura', () => {  
  it('debería adaptar la temperatura en Fahrenheit a Celsius', () => {  
    const temperaturaFahrenheit = new TemperaturaEnFahrenheit(32); // 32°F  
    const adaptador = new AdaptadorDeTemperatura(temperaturaFahrenheit);  
  
    const resultado = adaptador.obtenerTemperaturaEnCelsius();  
    expect(resultado).toBe(0); // 0°C  
  });  
});

Para ejecutar las pruebas, agrega el siguiente script a tu archivo `package.json`:

"scripts": {  
  "test": "jest"  
}

Luego, ejecuta las pruebas con `npm test`.

### Conclusión

El patrón Adaptador es una herramienta valiosa para lograr la compatibilidad entre interfaces incompatibles en TypeScript. Al implementar pruebas unitarias, puedes asegurarte de que tus adaptadores funcionen correctamente, incluso a medida que tu código evoluciona. Este blog ha proporcionado una introducción al patrón Adaptador y ha demostrado cómo implementar pruebas unitarias en TypeScript para verificar su funcionalidad.

By [Jaime Hernández](https://medium.com/@devjaime) on [October 14, 2023](https://medium.com/p/9604f3209baa).

[Canonical link](https://medium.com/@devjaime/entendiendo-el-patr%C3%B3n-adaptador-en-typescript-con-pruebas-unitarias-9604f3209baa)

Exported from [Medium](https://medium.com) on March 15, 2025.