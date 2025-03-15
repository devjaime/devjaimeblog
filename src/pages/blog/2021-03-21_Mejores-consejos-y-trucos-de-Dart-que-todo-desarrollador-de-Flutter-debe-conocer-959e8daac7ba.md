---
layout: "../../layouts/BlogLayout.astro"
title: "Mejores consejos y trucos de Dart que todo desarrollador de Flutter debe conocer"
description: ""
tags: ["code", "dart", "flutter"]
time: 4
featured: true
timestamp: "2021-03-21T12:20:31-0300"
filename: "2021-03-21_Mejores-consejos-y-trucos-de-Dart-que-todo-desarrollador-de-Flutter-debe-conocer-959e8daac7ba"
---

Mejores consejos y trucos de Dart que todo desarrollador de Flutter debe conocer \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Mejores consejos y trucos de Dart que todo desarrollador de Flutter debe conocer
================================================================================

En este tutorial, comparto mis mejores consejos y trucos de Dart que mejorarán su estilo de codificación como desarrollador de Flutter.

* * *

### Mejores consejos y trucos de Dart que todo desarrollador de Flutter debe conocer

![](https://cdn-images-1.medium.com/max/800/0*Xi6L_7owmvTd6D7A.png)

En este tutorial, comparto mis mejores consejos y trucos de Dart que mejorarán tu estilo de codificación como desarrollador de Flutter.

Puede usarlos para escribir código más conciso y efectivo, y aprovechar al máximo el lenguaje Dart.

¿Listo? ¡Empecemos!

### 1\. ¿Sabías? Dart admite la multiplicación de cadenas.

Aquí hay un programa simple que muestra cómo imprimir un árbol de Navidad con multiplicación de cadenas:

Genial, ¿no es así? 😉

Puede usar esto para verificar cómo encaja una cadena larga dentro de un `Text`widget:

### 2\. ¿Necesita ejecutar varios Future al mismo tiempo? Utilice Future.wait.

Considere esta clase de API simulada que nos dice los últimos números de casos de COVID:

Para ejecutar todos estos Future al mismo tiempo, utilice `Future.wait`. Esto toma una **lista o Future** y devuelve una **lista de Future**:

Esto es ideal cuando los Future son **independientes** y no necesitan ejecutarse **secuencialmente** .

### 3\. Implemente un método de “llamada” en sus clases de Dart para hacerlas invocables como una función.

Aquí hay una `PasswordValidator`clase de ejemplo :

Debido a que el método tiene un nombre `call`, podemos declarar una instancia de clase y usarla **como si** fuera un método:

### 4\. ¿Necesita invocar una devolución de llamada pero solo si no es nula? Utilice la sintaxis “? .Call ()”.

Supongamos que tenemos una clase de widget personalizada que debería llamar a una `onDragCompleted`devolución de llamada cuando se produce un evento determinado:

Pero hay una forma más sencilla (tenga en cuenta el uso de `?.`):

### 5\. Usar funciones anónimas y funciones como argumentos

En Dart, las funciones son **ciudadanos de primera clase** y se pueden pasar **como argumentos** a otras funciones.

Aquí hay un código que define una función anónima y la asigna a una variable `sayHi(di hola)`:

Luego `sayHi`se pasa a una función `welcome` que toma un `Function`argumento y lo usa para saludar al usuario.

`String Function(String)`es un **tipo de función** que toma un argumento `String` y devuelve un `String`. Debido a que la función anónima anterior tiene la misma **firma** , se puede pasar directamente como un argumento o mediante la variable`sayHi`.

* * *

Este estilo de codificación es común cuando se utiliza operadores funcionales, tales como `map`, `where`, y `reduce`.

Por ejemplo, aquí hay una función simple para calcular el cuadrado de un número:

Aquí pasamos `square`como argumento, porque su firma es exactamente lo que espera el operador del mapa. Esto significa que no necesitamos expandirlo con una función anónima:

    values.map((value) => square(value)).toList();

### 6\. Puede utilizar collection-if y spreads con lists, sets y maps

Collection-if y spreads son muy útiles cuando escribes tu interfaz de usuario como código.

¿Pero sabías que también puedes usarlos con maps?

Considere este ejemplo:

Aquí estamos declarando un `restaurant`maps, y sólo la adición de la `avgRating`y `numRatings`valores clave-valor si `addRatings`es `true`. Y debido a que estamos agregando más de un par clave-valor, necesitamos usar el operador de propagación ( `...`).

### 7\. ¿Necesita iterar a través de un maps de una manera segura para nulos? Utiliza \`.entries\`:

Supone que tiene este mapa:

    const timeSpent = <String, double>{  'Blogging': 10.5,  'YouTube': 30.5,  'Courses': 75.2,};

A continuación, te muestro cómo puedes escribir un bucle para ejecutar algún código utilizando todos los pares clave-valor:

    for (var entry in timeSpent.entries) {  // hacer algo con claves y valores  print('${entry.key}: ${entry.value}');}

Al iterar en la variable`entries`, tiene acceso a todos los pares clave-valor **de una manera segura para nulos** .

Esto es más conciso y menos propenso a errores que esto:

    for (var key in timeSpent.keys) {  final value = timeSpent[key]!;  print('$key: $value');}

El código anterior requiere usar el operador de aserción ( `!`) al leer los valores, ya que Dart no puede garantizar que exista un valor para una clave determinada.

### 8\. Utilice constructores con nombre y listas de inicializadores para obtener API más faciles de usar.

Suponga que desea declarar una clase que representa un valor de temperatura.

Puede hacer que la API de su clase sea inequívoca y admitir **tanto** Celsius como Fahrenheit con dos constructores con nombre:

    class Temperature {  Temperature.celsius(this.celsius);  Temperature.fahrenheit(double fahrenheit)    : celsius = (fahrenheit - 32) / 1.8;  double celsius;}

Esta clase solo necesita una variable **almacenada** para representar la temperatura y usa una lista de inicializadores para convertir Fahrenheit a Celsius.

Esto significa que puede declarar valores de temperatura como este:

    final temp1 = Temperature.celsius(30);final temp2 = Temperature.fahrenheit(90);

### 9\. Getters y setters

En la `Temperature`clase anterior, `celsius`se declara como una variable almacenada.

Pero los usuarios pueden preferir **obtener** o **establecer** la temperatura en grados Fahrenheit.

Esto se hace fácilmente con getters y setters, que le permiten definir variables calculadas. Aquí está la clase actualizada:

    class Temperature {  Temperature.celsius(this.celsius);  Temperature.fahrenheit(double fahrenheit)    : celsius = (fahrenheit - 32) / 1.8;  double celsius;  double get fahrenheit    => celsius * 1.8 + 32;  set fahrenheit(double fahrenheit)    => celsius = (fahrenheit - 32) / 1.8;}

Esto facilita la obtención o el ajuste de la temperatura con grados Fahrenheit o Celsius:

    final temp1 = Temperature.celsius(30);print(temp1.fahrenheit);final temp2 = Temperature.fahrenheit(90);temp2.celsius = 28;

**En pocas palabras** : utilice constructores, getters y setters con nombre para mejorar el diseño de sus clases.

### 10\. Utilice guiones bajos para argumentos de función no utilizados

En Flutter a menudo usamos widgets que toman argumentos de función. Un ejemplo común de esto es `ListView.builder`:

    class MyListView extends StatelessWidget {  @override  Widget build(BuildContext context) {    return ListView.builder(      itemBuilder: (context, index) => ListTile(        title: Text('todos iguales'),      ),      itemCount: 10,    );  }}

En este caso, no estamos usando los `(context, index)`argumentos en `itemBuilder`. Entonces podemos reemplazarlos con guiones bajos en su lugar:

    ListView.builder(  itemBuilder: (_, __) => ListTile(    title: Text('todos iguales'),  ),  itemCount: 10,)

_Nota: los dos argumentos son diferentes (_ `___`_y_ `____`_) ya que son_ **_identificadores separados_** _._

### 11\. ¿Necesita una clase que solo se pueda instanciar una vez (también conocida como singleton)? Utiliza una variable de instancia estática con un constructor privado.

La propiedad más importante de un singleton es que solo puede haber **una instancia** de él en todo el programa. Esto es útil para modelar cosas como un sistema de archivos.

    // file_system.dartclass FileSystem {  FileSystem._();  static final instance = FileSystem._();}

Para crear un singleton en Dart, puede declarar un constructor con nombre y hacerlo privado usando la sintaxis`_`.

Luego, puede usarlo para crear una instancia final estática de tu clase.

Y como resultado, cualquier código en otros archivos solo podrá acceder a esta clase a través de la variable`instance`:

    // some_other_file.dartfinal fs = FileSystem.instance;// 

_Nota: los singleton pueden ocasionar muchos problemas si no se tiene cuidado. Asegúrese de comprender las desventajas antes de usarlos._

### 12\. ¿Necesita una colección de artículos únicos? Utilice un conjunto en lugar de una lista.

El tipo de colección más utilizado en Dart es `List`.

Pero las listas pueden tener elementos duplicados y, a veces, esto no es lo que queremos:

    const citiesList = [  'London',  'Paris',  'Rome',  'London',];

Podemos usar un `Set`siempre que necesitemos una colección de valores únicos (tenga en cuenta el uso de `final`):

    // 

El código anterior genera una advertencia porque `London`se incluye dos veces. Si intentamos hacer lo mismo con un conjunto`const`, obtenemos un error y nuestro código no se compila:

    // 

Cuando trabajamos con conjuntos, tenemos acceso a las API útiles, tales como `union`, `difference`y `intersection`:

    citiesSet.union({'Delhi', 'Moscow'});citiesSet.difference({'London', 'Madrid'});citiesSet.intersection({'London', 'Berlin'});

> _En pocas palabras: cuando cree una colección, pregúntese si desea que sus artículos sean únicos y considere usar un conjunto._

### 13\. Cómo usar try, on, catch, rethrow,finally.

`try`y `catch`son ideales cuando se trabaja con API basadas en el futuro que pueden generar una excepción si algo sale mal.

Aquí hay un ejemplo completo que muestra cómo aprovecharlos al máximo:

Algunas notas:

*   puede agregar varias cláusulas`on` para manejar excepciones de diferentes tipos.
*   puede tener una cláusula`catch` de reserva para manejar todas las excepciones que no coincidan con ninguno de los tipos anteriores.
*   puede usar una declaración`rethrow` para lanzar la excepción actual en la pila de llamadas **mientras se conserva el seguimiento de la pila** .
*   puede usar `finally`para ejecutar algún código después de que se `Future`haya completado, independientemente de si tuvo éxito o no.

Si está utilizando o diseñando algunas API basadas en el futuro, asegúrese de manejar las excepciones según sea necesario.

### 14\. Constructores comunes del future

La clase`Future en Dart`viene con algunos constructores de fábrica prácticos: `Future.delayed`, `Future.value`y `Future.error`.

Podemos usar `Future.delayed`para crear un `Future`que espere un cierto retraso. El segundo argumento es una función anónima (opcional) que puede usar para completar con un valor o arrojar un error:

    await Future.delayed(Duration(seconds: 2), () => 'Latte');

Pero a veces queremos crear un `Future`que se complete de inmediato:

    await Future.value('Cappuccino');await Future.error(Exception('

Podemos utilizar `Future.value`para completar correctamente con un valor, o `Future.error`para completar con un error.

Puede utilizar estos constructores para simular la respuesta de sus API basadas en Future. Esto es útil al escribir clases simuladas en su código de prueba.

### 15\. Common Stream constructors

La clase Stream también viene con algunos constructores útiles. Éstos son los más comunes:

utilizar `Stream.fromIterable`para crear a `Stream`partir de una lista de valores.

*   utilícelo `Stream.value`si solo tiene un valor.
*   utilizar `Stream.empty`para crear una secuencia vacía.
*   utilícelo `Stream.error`para crear una secuencia que contenga un valor de error.
*   utilícelo `Stream.fromFuture`para crear una secuencia que contendrá solo un valor, y ese valor estará disponible cuando se complete el futuro.
*   utilizar `Stream.periodic`para crear un flujo periódico de eventos. Puede especificar a `Duration`como el intervalo de tiempo entre eventos y una función anónima para generar cada valor dado su índice en la secuencia.

### 16\. Generadores sincronizados y asíncronos

En Dart podemos definir un generador **síncrono** como una función que devuelve un `Iterable`:

    Iterable<int> count(int n) sync* {  for (var i = 1; i <= n; i++) {    yield i;  }}

Esto usa la sintaxis`sync*`. Dentro de la función podemos "generar" `yield`múltiples valores. Estos se devolverán como una `Iterable`cuando se complete la función.

* * *

Por otro lado, un generador **asincrónico** es una función que devuelve `Stream`:

    Stream<int> countStream(int n) async* {  for (var i = 1; i <= n; i++) {    yield i;  }}

Esto usa esta `async*`sintaxis. Dentro de la función podemos valores `yield`como en el caso sincrónico.

Pero si queremos, podemos `await`hacerlo en las API basadas en el futuro, porque este es un generador **asincrónico** :

    Stream<int> countStream(int n) async* {  for (var i = 1; i <= n; i++) {    // 

### Conclusión

Espero que hayas disfrutado de mis mejores consejos y trucos de Dart para desarrolladores de Flutter.

¿Mi desafío para ti?

Úselos para mejorar el código en sus aplicaciones Flutter. Y déjame saber cuál fue tu favorito [en Twitter](https://twitter.com/HsJhernandez) . 😉

[**Donate to devjaime**  
_Help support devjaime by donating or sharing with your friends._www.paypal.com](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S "https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S")[](https://www.paypal.com/donate/?hosted_button_id=AHPZLS6ZR2A7S)

By [Jaime Hernández](https://medium.com/@devjaime) on [March 21, 2021](https://medium.com/p/959e8daac7ba).

[Canonical link](https://medium.com/@devjaime/mejores-consejos-y-trucos-de-dart-que-todo-desarrollador-de-flutter-debe-conocer-959e8daac7ba)

Exported from [Medium](https://medium.com) on March 15, 2025.