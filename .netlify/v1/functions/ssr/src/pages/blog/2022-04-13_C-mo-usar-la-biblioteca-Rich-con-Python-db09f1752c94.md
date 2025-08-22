---
layout: "../../layouts/BlogLayout.astro"
title: "Cómo usar la biblioteca Rich con Python"
description: ""
tags: ["code", "Rich", "Python"]
time: 4
featured: true
timestamp: "2022-04-13T12:20:31-0300"
filename: "2022-04-13_C-mo-usar-la-biblioteca-Rich-con-Python-db09f1752c94"
---

Cómo usar la biblioteca Rich con Python
=======================================

En este artículo, aprenderemos sobre una poderosa biblioteca para Python llamada Rich .

* * *

### Cómo usar la biblioteca Rich con Python

![](https://cdn-images-1.medium.com/max/800/1*kwToAOFMIfNSSd8WboKo0g.png)

* * *

En este artículo, aprenderemos sobre una poderosa biblioteca para Python llamada [**Rich**](https://rich.readthedocs.io/en/stable/introduction.html) .

**Rich** es una biblioteca de Python para escribir texto _enriquecido_ (con color y estilo) en la terminal. Le permite mostrar contenido avanzado, como tablas, marcado y código resaltado por sintaxis.

Entonces, ¿por qué es esto útil? Bueno, si no estás usando una herramienta como **Rich**, la salida de tu código en la terminal puede ser un poco aburrida y difícil de entender. Si desea hacerlo más claro y bonito, probablemente quiera usar **Rich**, y ha venido al lugar correcto para aprender cómo hacerlo.

### Cómo instalar Rich

Puede instalar Rich con _pip_ como:

    pip install Rich

Para saber lo que puede hacer todo Rich, puedes escribir el siguiente comando en la terminal:

    python -m rich

![](https://cdn-images-1.medium.com/max/800/0*xhzFCCVS4FOXjtS4.png)

Ahora puedes ver que podemos hacer muchas cosas con Rich. Probemos algunos de ellos para ver cómo funcionan.

### Cómo imprimir valores enriquecidos en Python

Rich tiene la capacidad de resaltar la salida según el tipo de datos. Importaremos la `print`función alternativa de la biblioteca **Rich** que toma los mismos argumentos que el `print`.

Para evitar confusiones con la función `print` integrada, importaremos `print`desde la biblioteca`rich` como `rprint`.

    from rich import print as rprint

    nums_list = [1, 2, 3, 4]rprint(nums_list)

    nums_tuple = (1, 2, 3, 4)rprint(nums_tuple)

    nums_dict = {'nums_list': nums_list, 'nums_tuple': nums_tuple}rprint(nums_dict)

    bool_list = [True, False]rprint(bool_list)

Producción:

![](https://cdn-images-1.medium.com/max/800/0*nPsZARFYldO7dLae.png)

¿Ves cómo los diferentes tipos de datos se resaltan con diferentes colores? Esto puede ayudarnos mucho durante la depuración.

### Cómo realizar una inspección enriquecida en Python

Si usa la `help` función incorporada para ver la documentación de una biblioteca, verá un resultado aburrido.

    import rich

    print(help(rich))

Producción:

![](https://cdn-images-1.medium.com/max/800/0*-7wQqyapy5ArHBLC.png)

**Rich** tiene una `[**inspect()**](https://rich.readthedocs.io/en/stable/reference/init.html#rich.inspect)`función que puede generar un informe sobre cualquier objeto de Python. Es una fantástica ayuda para la depuración y un buen ejemplo de la salida que Rich puede generar.

    from rich import inspectimport rich

    inspect(rich)

Producción:

![](https://cdn-images-1.medium.com/max/800/0*-KnkRqStnzTYcO3g.png)

### Cómo diseñar tu consola con Rich

Para un control completo sobre el formato de la terminal, Rich ofrece una Clase`[**Console**](https://rich.readthedocs.io/en/stable/reference/console.html#rich.console.Console)`.

Escribamos una función para [fusionar los diccionarios de Python](https://ireadblog.com/posts/76/how-to-merge-dictionaries-in-python) .

    from rich.console import Console

    console = Console()

    def merge_dict(dict_one, dict_two):    merged_dict = dict_one | dict_two    console.log(merged_dict, log_locals=True)

    merge_dict({'id': 1}, {'name': 'Ashutosh'})

Producción:

![](https://cdn-images-1.medium.com/max/800/0*AyVCcaSOK00pbqS9.png)

En el ejemplo anterior, hemos utilizado el `[**log**](https://rich.readthedocs.io/en/stable/console.html#logging)` método que ofrece las mismas capacidades que la impresión, pero agrega algunas funciones útiles para depurar una aplicación en ejecución.

Hay varios otros métodos como `[print](https://rich.readthedocs.io/en/stable/console.html#printing)`, `[print_json](https://rich.readthedocs.io/en/stable/console.html#printing-json)`, `[out](https://rich.readthedocs.io/en/stable/console.html#low-level-output)`, `[rule](https://rich.readthedocs.io/en/stable/console.html#rules)`, etc. Obtenga más información sobre ellos [aquí](https://rich.readthedocs.io/en/stable/console.html) .

### Cómo usar Tree en Rich

Rich tiene una clase`[**Tree**](https://rich.readthedocs.io/en/stable/reference/tree.html#rich.tree.Tree)` que puede generar una vista de árbol en la terminal. Una vista de árbol es una excelente manera de presentar el contenido de un sistema de archivos o cualquier otro dato jerárquico. Cada rama del árbol puede tener una etiqueta que puede ser texto o cualquier otro renderizado enriquecido.

Veamos un ejemplo creando un árbol genealógico:

    from rich.tree import Treefrom rich import print as rprint

    tree = Tree("Family Tree")tree.add("Mom")tree.add("Dad")tree.add("Brother").add("Wife")tree.add("[red]Sister").add("[green]Husband").add("[blue]Son")

    rprint(tree)

Producción:

![](https://cdn-images-1.medium.com/max/800/0*efRnXyP-_WSF0JnT.png)

Una vez que creamos una instancia de la `**Tree**`clase, podemos usar el `**add()**`método para agregarle ramas. Para crear un árbol complejo, solo usa el `**add()**`método para agregarle más ramas. Observe la rama _Hermano_ y _Hermana en el ejemplo anterior._

En la documentación oficial, tenemos un archivo [tree.py](https://github.com/Textualize/rich/blob/master/examples/tree.py) que genera la estructura del archivo usando Tree. La salida se ve así:

![](https://cdn-images-1.medium.com/max/800/0*gEYahdlVDHRn-T8D.png)

### Cómo mostrar una barra de progreso usando Rich

**Rich** puede mostrar información continuamente actualizada sobre el estado de las tareas de ejecución prolongada, copias de archivos, etc. También puede personalizar esta información. De forma predeterminada, proporciona una descripción de la ‘tarea’, una barra de progreso, el porcentaje completado y el tiempo restante anticipado.

Se admiten múltiples tareas con una rica pantalla de progreso, cada una con una barra y estadísticas de progreso. Puede usar esto para realizar un seguimiento de varios trabajos en los que se está trabajando en procesos o subprocesos.

Primero probemos el método `progress.track` para crear la barra de progreso.

    from rich.progress import trackfrom time import sleep

    def process_data():    sleep(0.02)

    for _ in track(range(100), description='[green]Processing data'):    process_data()

Producción:

![](https://cdn-images-1.medium.com/max/800/0*Pbr5LN1WBIxfk7Wf.gif)

Si queremos registrar la hora en que se termina de ejecutar una tarea en particular, podemos usarla en su lugar`console.status`.

    from rich.console import Consolefrom time import sleep

    console = Console()

    data = [1, 2, 3, 4, 5]with console.status("[bold green]Fetching data...") as status:    while data:        num = data.pop(0)        sleep(1)        console.log(f"[green]Finish fetching data[/green] {num}")

        console.log(f'[bold][red]Done!')

![](https://cdn-images-1.medium.com/max/800/0*KmCLSZ4yg-A-FZmh.gif)

Puede trabajar directamente con la clase Progreso si necesita varias tareas en la pantalla o desea personalizar las columnas en la pantalla de progreso. Después de haber creado un objeto de Progreso, use ( `add_task()`) para agregar tareas y ( `update_progress()`) para actualizar el progreso.

La clase Progress está diseñada para usarse como un administrador de contexto, iniciando y deteniendo automáticamente la visualización del progreso.

    import time

    from rich.progress import Progress

    with Progress() as progress:

        task1 = progress.add_task("[red]Downloading...", total=100)    task2 = progress.add_task("[green]Processing...", total=100)    task3 = progress.add_task("[cyan]Installing...", total=100)

        while not progress.finished:        progress.update(task1, advance=0.9)        progress.update(task2, advance=0.6)        progress.update(task3, advance=0.3)        time.sleep(0.02)

Producción:

![](https://cdn-images-1.medium.com/max/800/0*A64vFFn8XZItTf82.gif)

### Cómo mostrar columnas enriquecidas en Python

**Rich** puede representar texto u otros elementos de Rich en columnas ordenadas con la clase`[**Columns**](https://rich.readthedocs.io/en/stable/reference/columns.html#rich.columns.Columns)`. Para usar, construya una instancia de Columns con una iteración de renderizables e imprímala en la Consola.

    import jsonfrom urllib.request import urlopen

    from rich.console import Consolefrom rich.columns import Columnsfrom rich.panel import Panel

    def get_content(user):    """Extract text from user dict."""    country = user["location"]["country"]    name = f"{user['name']['first']} {user['name']['last']}"    return f"[b]{name}[/b]\n[yellow]{country}"

    console = Console()

    users = json.loads(urlopen("https://randomuser.me/api/?results=30").read())["results"]user_renderables = [Panel(get_content(user), expand=True) for user in users]console.print(Columns(user_renderables))

Producción:

![](https://cdn-images-1.medium.com/max/800/0*D6Q3YAswgRxTt_JP.png)

### Cómo mostrar tablas enriquecidas en Python

La clase de Rich `[**Table**](https://rich.readthedocs.io/en/stable/reference/table.html#rich.table.Table)`ofrece una variedad de formas de representar datos tabulares en la terminal. Esta clase tiene métodos `**add_column()**`para `**add_row()**`agregar columnas y filas respectivamente a la instancia de la tabla creada a partir de la Clase`**Table**`.

Vamos a crear una tabla para nuestra lista de tareas pendientes. Esta tabla tendrá tres columnas: _S.No._ , _Tarea_ y _Estado_ .

    from rich.console import Consolefrom rich.table import Table

    table = Table(title="Todo List")

    table.add_column("S. No.", style="cyan", no_wrap=True)table.add_column("Task", style="magenta")table.add_column("Status", justify="right", style="green")

    table.add_row("1", "Buy Milk", "✅")table.add_row("2", "Buy Bread", "✅")table.add_row("3", "Buy Jam", "❌")

    console = Console()console.print(table)

Producción:

![](https://cdn-images-1.medium.com/max/800/0*2EGbsWZSDeh4jk78.png)

### Terminando

En este tutorial, aprendimos a usar Rich para embellecer la terminal. Hay muchas otras funciones compatibles con Rich. Obtenga más información sobre ellos en la [documentación oficial](https://rich.readthedocs.io/en/stable/introduction.html) .

By [Jaime Hernández](https://medium.com/@devjaime) on [April 13, 2022](https://medium.com/p/db09f1752c94).

[Canonical link](https://medium.com/@devjaime/c%C3%B3mo-usar-la-biblioteca-rich-con-python-db09f1752c94)

Exported from [Medium](https://medium.com) on March 15, 2025.