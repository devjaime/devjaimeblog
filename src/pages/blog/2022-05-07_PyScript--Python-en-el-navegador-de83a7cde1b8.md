---
layout: "../../layouts/BlogLayout.astro"
title: "PyScript: Python en el navegador"
description: ""
tags: ["code", "pyscript", "python"]
time: 4
featured: true
timestamp: "2022-05-07T12:20:31-0300"
filename: "2022-05-07_PyScript--Python-en-el-navegador-de83a7cde1b8"
---

PyScript: Python en el navegador
================================

¿Qué es PyScript?

* * *

### PyScript: Python en el navegador

![](https://cdn-images-1.medium.com/max/800/0*W8YhlrWAxgOst4gE)

### ¿Qué es PyScript?

Desarrollado por el equipo de Anaconda, “es una forma de incluir python con html y otros lenguajes en el navegador.” Esto significa que puede escribir y ejecutar código Python con HTML, interactuar con las bibliotecas de Javascript en PyScript y hacer todo el desarrollo en PyScript.

### ¿Qué significa para el mundo y para los científicos de datos usar PyScript?

*   Con PyScript, ahora podemos escribir Python (y potencialmente otros lenguajes) en HTML y crear aplicaciones web. PyScript hace que el poder de Python sea accesible a una audiencia mucho mayor de desarrolladores y creadores front-end.
*   Con PyScript, ya no tenemos que preocuparnos por la implementación. PyScript proporciona el “cambio arquitectónico más allá de la nube”. Todo sucederá en su navegador web. Como científicos de datos, podemos compartir nuestros tableros y nuestros modelos en un archivo html, que ejecutará el código cada vez que otros abran el archivo en un navegador web.

![](https://cdn-images-1.medium.com/max/800/0*W8YhlrWAxgOst4gE)

### ¿Cuál es la magia detrás de PyScript?

PyScript actualmente se basa en [Pyodide](http://pyodide.org/) , que es un “port de CPython a WebAssembly/Emscripten”. PyScript admite escribir y ejecutar código de Python en un navegador, y brindará soporte para otros lenguajes en el futuro.

![](https://cdn-images-1.medium.com/max/800/0*7ZP2TuWTSkDfJzgH)

#### ¿Qué es WebAssembly?

La tecnología fundamental que hace posible escribir sitios web en Python es WebAssembly. Cuando se desarrolló originalmente WebAssembly, los navegadores web solo admitían Javascript.

Lanzado por primera vez en 2017, WebAssembly se convirtió rápidamente en el estándar oficial del Consorcio World Wide Web (W3C) en 2019. Incluye un lenguaje de formato de texto .wat legible por humanos, que luego se convierte a un formato binario .wasm que los navegadores pueden ejecutar. Esto nos permite escribir código en cualquier idioma, compilarlo en WebAssembly y luego ejecutarlo en un navegador web.

### Cómo usar PyScript

La versión alfa de PyScript se puede encontrar en [pyscript.net](http://pyscript.net/) . El código está disponible en [https://github.com/pyscript](https://github.com/pyscript) . Siga [estas instrucciones](https://github.com/pyscript/pyscript/blob/main/pyscriptjs/README.md) para intentarlo. PyScript le permite escribir Python en html usando los siguientes tres componentes principales:

*   py-env define los paquetes de Python necesarios para ejecutar su código de Python.
*   py-script es donde escribe su código Python que se ejecuta dentro de la página web.
*   py-repl crea un componente REPL (read-eval-print loop) que evalúa el código que ingresan los usuarios y muestra los resultados.

#### ejemplo de py-env

Aquí hay un ejemplo de cómo podemos definir nuestro entorno de Python en un HTML usando **py-env** . En [este ejemplo](https://github.com/pyscript/pyscript/blob/main/pyscriptjs/examples/panel_stream.html#L38-L43) , cargamos los paquetes bokeh, numpy, pandas y scikit-learn en nuestro entorno.

![](https://cdn-images-1.medium.com/max/800/0*DyLUlTujVqrg5Dv5)

#### ejemplo de secuencia de comandos py

Este ejemplo muestra un tablero de Panel con transmisión de datos. Como puede ver en el código, podemos escribir [nuestro código Python familiar](https://github.com/pyscript/pyscript/blob/main/pyscriptjs/examples/panel_stream.html#L71-L126) en **py-script** como lo hacemos normalmente en un archivo de Python. Si no le gusta escribir su código de Python directamente en **py-script** , también puede usar un archivo de Python como código fuente como este:

![](https://cdn-images-1.medium.com/max/800/0*4NzKem9m_tSrqLzW)

![](https://cdn-images-1.medium.com/max/800/0*AsUQMoYoO9LI5dpC)

Fuente: [https://github.com/pyscript/pyscript/blob/main/pyscriptjs/examples/panel\_stream.html](https://github.com/pyscript/pyscript/blob/main/pyscriptjs/examples/panel_stream.html)

También puede encontrar muchos otros ejemplos en [la página de PyScript Github](https://github.com/pyscript/pyscript/tree/main/pyscriptjs/examples) , incluida una visualización D3 y un juego de Mario con visión por computadora.

Vea el video de Fazt sobre pyScript

### El futuro de PyScript

PyScript trae Python al navegador.Trae muchas cosas interesentes, aunque su velocidad es cuestionable aun, las cosas que se podrán realizar son realmente interesantes.

Fuente original [https://anaconda.cloud/pyscript-python-in-the-browser](https://anaconda.cloud/pyscript-python-in-the-browser)

By [Jaime Hernández](https://medium.com/@devjaime) on [May 7, 2022](https://medium.com/p/de83a7cde1b8).

[Canonical link](https://medium.com/@devjaime/pyscript-python-en-el-navegador-de83a7cde1b8)

Exported from [Medium](https://medium.com) on March 15, 2025.