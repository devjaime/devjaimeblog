---
layout: "../../layouts/BlogLayout.astro"
title: "Comandos útiles de git"
description: ""
tags: ["code", "git"]
time: 4
featured: true
timestamp: "2022-04-07T12:20:31-0300"
filename: "2022-04-07_Comandos--tiles-de-git-454276c8074"
---


Comandos útiles de git
======================

Fusión — Merge

* * *

### Comandos útiles de git

### Fusión — Merge

Tener múltiples ramas (branches) es extremadamente conveniente para mantener los cambios nuevos separados entre sí y para asegurarse de que no envíes accidentalmente cambios no aprobados o incompletos a producción. Una vez que se hayan aprobado los cambios, ¡queremos recibir estos cambios en nuestra rama de producción!

Una forma de obtener los cambios de una rama generalmente se realiza un`git merge`! Hay dos tipos de fusiones que Git puede realizar: un **avance rápido** o un **avance sin avance rápido.**

Es posible que esto no tenga mucho sentido en este momento, ¡así que veamos las diferencias!

### Avance rápido ( `--ff`) Fast-forward

Una **fusión de avance rápido** puede ocurrir cuando la rama actual no tiene confirmaciones adicionales en comparación con la rama que estamos fusionando.

Git es… _perezoso_ y primero intentará realizar la opción más fácil: ¡el avance rápido! Este tipo de fusión no crea una nueva confirmación, sino que fusiona las confirmaciones en la rama que estamos fusionando directamente en la rama actual

![](https://cdn-images-1.medium.com/max/800/0*5mQ6R7QEMu3dSMnS.gif)

¡Perfecto! Ahora tenemos todos los cambios que se hicieron en la rama disponibles en la rama master. Entonces, ¿de qué se trata el **avance rápido** ?

### Sin avance rápido ( `--no-ff`) No-fast-foward

Es genial si tu rama actual no tiene confirmaciones adicionales en comparación con la rama que desea fusionar, ¡pero desafortunadamente ese rara vez es el caso! y no podrás hacer Fast-forward o avance rápido.

Si realizamos cambios en la rama actual y la rama que deseamos fusionar no los tienes, git realizará una fusión _sin avance rápido_ .

Con una fusión sin avance rápido, Git crea una nueva _confirmación de fusión_ en la rama activa. ¡Las confirmaciones principales de la confirmación apuntan tanto a la rama activa como a la rama que queremos fusionar!

![](https://cdn-images-1.medium.com/max/800/0*OOQzhyFY4Qpcosxl.gif)

No es gran cosa, ¡una combinación perfecta! La rama`master`ahora contiene todos los cambios que hemos hecho en la rama`dev`.

### Fusionar conflictos

Aunque Git es bueno para decidir cómo fusionar ramas y agregar cambios a los archivos, no siempre puede tomar esta decisión por sí mismo 🙂 Esto puede suceder cuando las dos ramas que intentamos fusionar tienen cambios en la misma línea en el mismo archivo, o si una rama eliminó un archivo que otra rama modificó, y así sucesivamente.

En ese caso, Git te pedirá que ayudes a decidir cuál de las dos opciones queremos conservar. Digamos que en ambas ramas, editamos la primera línea en el archivo `README.md`.

Si queremos fusionarnos la rama`dev`con la rama`master`, esto terminará en un conflicto de fusión: y preguntara ¿le gustaría que se conservara la linea de la rama dev o la rama master?

Cuando intente fusionar las ramas, Git le mostrará dónde ocurre el conflicto. Podemos eliminar manualmente los cambios que no queremos conservar, guardar los cambios, agregar el archivo modificado nuevamente y confirmar los cambios.

![](https://cdn-images-1.medium.com/max/800/0*-_YzzD3RmyC9_D8P.gif)

Aunque los conflictos de fusión suelen ser bastante molestos, tiene mucho sentido: Git no debería simplemente _asumir_ qué cambio queremos conservar.

### rebase

Acabamos de ver cómo podíamos aplicar cambios de una rama a otra realizando un `git merge`. Otra forma de agregar cambios de una rama a otra es realizando un `git rebase`.

A `git rebase` _copia_ las confirmaciones de la rama actual y coloca estas confirmaciones copiadas encima de la rama especificada.

![](https://cdn-images-1.medium.com/max/800/0*YcYoCIP1OJdx585y.gif)

Perfecto, ya tenemos todos los cambios que se hicieron en la rama`master` disponibles en la rama`dev`!

Una gran diferencia en comparación con la “merge” es que Git no intentará averiguar qué archivos conservar y no conservar. ¡La rama que estamos reorganizando siempre tiene los últimos cambios que queremos conservar! No te encontrarás con ningún conflicto de fusión de esta manera, y mantiene un buen historial lineal de Git.

Este ejemplo muestra el cambio de base en la rama`master`. Sin embargo, en proyectos más grandes, por lo general no desea hacer eso. ¡ A `git rebase` **cambia el historial del proyecto** a medida que se crean nuevos hashes para las confirmaciones copiadas!

El cambio de base es excelente siempre que esté trabajando en una rama de características y la rama principal se haya actualizado. ¡Puede obtener todas las actualizaciones en su rama, lo que evitaría futuros conflictos de fusión!

### Rebase interactivo

¡Antes de reorganizar los commits, podemos modificarlos! 😃 Podemos hacerlo con un _rebase interactivo_ . Una reorganización interactiva también puede ser útil en la rama en la que está trabajando actualmente y desea modificar algunas confirmaciones.

Hay 6 acciones que podemos realizar en las confirmaciones que estamos reorganizando:

*   `reword`: Cambiar el mensaje de confirmación
*   `edit`: Modificar este compromiso
*   `squash`: fusionar la confirmación con la confirmación anterior
*   `fixup`: fusionar la confirmación con la confirmación anterior, sin conservar el mensaje de registro de la confirmación
*   `exec`: Ejecutar un comando en cada confirmación que queremos reorganizar
*   `drop`: Eliminar la confirmación

¡Increíble! De esta manera, podemos tener control total sobre nuestras confirmaciones. Si queremos eliminar un compromiso, podemos simplemente hacerlo con el comando drop.

![](https://cdn-images-1.medium.com/max/800/0*Ihm5TYCT9wYLhjjV.gif)

O si queremos juntar varias confirmaciones para obtener un historial más limpio, ¡no hay problema!

![](https://cdn-images-1.medium.com/max/800/0*5ylV4OfCIQ_Lobev.gif)

### Resetting — Restablecer

Puede suceder que cometamos cambios que no queríamos más adelante. ¡ Tal vez sea un compromiso`WIP`, o tal vez un compromiso que introdujo errores! 🐛 En ese caso, podemos realizar un `git reset`.

A `git reset`se deshace de todos los archivos provisionales actuales y nos da control sobre dónde `HEAD`debería apuntar.

### Soft reset — Reinicio suave

¡ Un _restablecimiento parcial_ se mueve `HEAD`a la confirmación especificada (o el índice de la confirmación en comparación con `HEAD`), sin deshacerse de los cambios que se introdujeron en las confirmaciones después!

Digamos que no queremos conservar la confirmación `9e78i`que agregó un archivo `style.css`, y tampoco queremos conservar la confirmación `035cc`que agregó un archivo`index.js`.

El archivo`style.css`Sin embargo, ¡ queremos mantener el `index.js` recién agregado! Un caso de uso perfecto para un restablecimiento parcial.

![](https://cdn-images-1.medium.com/max/800/0*aUw-pT5frZU8cACI.gif)

Al escribir `git status`, verás que aún tenemos acceso a todos los cambios que se realizaron en las confirmaciones anteriores. ¡Esto es genial, ya que significa que podemos corregir el contenido de estos archivos y enviarlos nuevamente más adelante!

### Hard reset — Restablecimiento completo

A veces, no queremos conservar los cambios introducidos por ciertas confirmaciones. A diferencia de un restablecimiento parcial, ya no deberíamos necesitar tener acceso a ellos. Git simplemente debería restablecer su estado a donde estaba en la confirmación especificada: ¡esto incluso incluye los cambios en su directorio de trabajo y archivos preparados!

![](https://cdn-images-1.medium.com/max/800/0*i5obHkYWz8YroHGv.gif)

Git ha descartado los cambios que se introdujeron en `9e78i`y `035cc`y ha restablecido su estado a donde estaba en el commit`ec5be`.

* * *

### revert — revirtiendo

Otra forma de deshacer los cambios es realizando un `git revert`. ¡Al revertir una determinada confirmación, creamos una _nueva confirmación_ que contiene los cambios revertidos!

Digamos que `ec5be`agregó un archivo`index.js`. ¡Más tarde, nos damos cuenta de que ya no queríamos que este cambio se introdujera por este compromiso! Vamos a revertir el commit`ec5be`.

![](https://cdn-images-1.medium.com/max/800/0*8sSA3q5f9un3TFrw.gif)

¡Perfecto! La confirmación `9e78i`revirtió los cambios introducidos por el commit`ec5be`. Realizar un `git revert`es muy útil para deshacer un determinado compromiso, sin modificar el historial de la rama.

### Cherry-picking

Cuando una determinada rama contiene un commit que introdujo los cambios que necesitamos en nuestra rama activa, ¡podemos ejecutar `cherry-pick`! .

`cherry-pick al`enviar una confirmación, creamos una nueva confirmación en nuestra rama activa que contiene los cambios que introdujo el commit`cherry-pick`.

Digamos que el commit`76d12`en la rama`dev` agregó un cambio al archivo`index.js` que queremos en nuestra rama`master`. ¡No queremos _todo_ , solo nos importa este único commit!

![](https://cdn-images-1.medium.com/max/800/0*h9Dzw1Ore-z4OYpU.gif)

¡ Genial, la rama maestra ahora contiene los cambios que se introdujeron en el commit`76d12`!

### Fetching

Si tenemos una rama remota de Git, por ejemplo, una rama en Github, ¡puede suceder que la rama remota tenga commit que la rama actual no tiene! Tal vez se fusionó otra rama, tu compañero impulsó una solución rápida, y así sucesivamente.

¡Podemos obtener estos cambios localmente, realizando un `git fetch`en la rama remota! No afecta a tu rama local de ninguna manera: `fetch`simplemente descarga nuevos datos.

![](https://cdn-images-1.medium.com/max/800/0*p45hIZ9Vf94hww0j.gif)

¡Ahora podemos ver todos los cambios que se han realizado desde la última vez que presionamos! Podemos decidir qué queremos hacer con los nuevos datos ahora que los tenemos localmente.

### Pulling

Aunque un `git fetch`es muy útil para obtener la información remota de una rama, también podemos realizar un `git pull`.

`git pull`es en realidad dos comandos en uno: a `git fetch`y a `git merge`. Cuando extraemos cambios desde el origen, primero obtenemos todos los datos como lo hicimos con un `git fetch`, después de lo cual los cambios más recientes se fusionan automáticamente en la rama local.

![](https://cdn-images-1.medium.com/max/800/0*U8WnlxnOHUaEO_H0.gif)

Impresionante, ahora estamos perfectamente sincronizados con la rama remota y tenemos todos los cambios más recientes.

* * *

### Reflog

Todo el mundo comete errores, ¡y eso está totalmente bien! A veces puede parecer que has estropeado tanto tu repositorio de git que solo quieres eliminarlo por completo.

`git reflog`es un comando muy útil para mostrar un registro de todas las acciones que se han realizado. Esto incluye fusiones, reinicios, reversiones: básicamente cualquier alteración en su rama.

![](https://cdn-images-1.medium.com/max/800/0*wEQ4XLAoLWJ203Ya.gif)

By [Jaime Hernández](https://medium.com/@devjaime) on [April 7, 2022](https://medium.com/p/454276c8074).

[Canonical link](https://medium.com/@devjaime/comandos-%C3%BAtiles-de-git-454276c8074)

Exported from [Medium](https://medium.com) on March 15, 2025.