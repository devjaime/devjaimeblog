---
filename: "2026-07-19-ingenieria-agentica-own-the-outer-loop"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-07-19T12:00:00-04:00"
publishDate: "2026-07-19T12:00:00-04:00"
modifiedDate: "2026-07-19T12:00:00-04:00"
title: "La verdadera ingeniería con agentes ocurre fuera del loop"
description: "Cuando la IA puede investigar, programar y probar por sí sola, el valor del ingeniero se desplaza hacia las restricciones, la evidencia, el criterio y la responsabilidad sobre lo que llega a producción."
author:
  name: "Jaime Hernández"
  url: "https://jaimehernandez.dev"
authorHandle: "devjaime"
tags:
  - "AI Engineering"
  - "Agentes IA"
  - "Ingeniería de Software"
  - "Responsabilidad Cognitiva"
  - "Automatización"
category: "AI Engineering"
draft: false
time: 15
featured: true
lang: es
type: article
source: human
reviewStatus: published
---

Durante los últimos meses he pasado de utilizar la inteligencia artificial como un asistente puntual a experimentar con algo bastante más complejo: agentes con memoria, herramientas, acceso a repositorios, tareas programadas y capacidad para ejecutar acciones durante varios pasos.

Ese cambio parece, en principio, una evolución natural. Primero le pedíamos a un modelo que completara una función. Luego comenzamos a solicitarle módulos completos, pruebas, documentación, análisis de errores y cambios distribuidos en varios archivos. Ahora hablamos de agentes capaces de investigar un problema, diseñar un plan, implementarlo, verificarlo y continuar iterando.

Pero mientras mayor es la autonomía del agente, menos útil resulta medir nuestro trabajo solamente por la cantidad de código generado.

La pregunta importante deja de ser:

> ¿Cuánto trabajo puede hacer la IA por mí?

Y se transforma en:

> ¿Qué decisiones debo seguir controlando, qué evidencia necesito y de qué resultado estoy dispuesto a hacerme responsable?

Esta reflexión surgió después de leer [*Own the Outer Loop*](https://addyosmani.com/blog/own-the-outer-loop/), de Addy Osmani. Su planteamiento propone una distinción que considero fundamental para entender la ingeniería de software asistida por agentes: la IA puede operar el **loop interno de ejecución**, pero las personas debemos conservar el **loop externo de decisión, control y responsabilidad**.

Este artículo no es una traducción de ese texto. Es mi interpretación desde la experiencia práctica de trabajar con software empresarial, sistemas heredados, automatizaciones, herramientas de coding y agentes personales.

## Del asistente de código al sistema que ejecuta trabajo

Un modelo de lenguaje aislado solo genera respuestas. Un agente real necesita bastante más:

- instrucciones y objetivos;
- archivos y contexto;
- herramientas;
- memoria;
- permisos;
- entornos controlados;
- pruebas;
- observabilidad;
- mecanismos de recuperación.

El modelo es solo una pieza. Lo que vuelve útil al agente es el sistema construido a su alrededor.

Cuando ese sistema puede repetir un ciclo de investigación, planificación, implementación y verificación, comenzamos a delegar unidades completas de trabajo, no únicamente fragmentos de código.

Podemos representar ese ciclo interno de una forma simplificada:

```text
Investigar
    ↓
Proponer un plan
    ↓
Implementar
    ↓
Ejecutar pruebas y validaciones
    ↓
Corregir o entregar evidencia
```

Este es el **inner loop**. La IA puede recorrerlo varias veces y, en algunos escenarios, hacerlo con mayor velocidad que una persona.

Sin embargo, existe otro ciclo que no debería desaparecer:

```text
Definir la intención
    ↓
Establecer restricciones
    ↓
Determinar qué evidencia es suficiente
    ↓
Aceptar, rechazar o limitar el cambio
    ↓
Asumir las consecuencias
```

Ese es el **outer loop**.

El error sería interpretar la automatización del primer ciclo como la eliminación del segundo.

## Generar código se vuelve barato; comprenderlo no

La IA está reduciendo de forma drástica el costo de producir código, documentación, pruebas iniciales y prototipos. Esto es positivo, pero también mueve el cuello de botella.

Antes, una limitación habitual era la capacidad de implementar. Ahora aparecen otras restricciones:

- revisar una cantidad creciente de cambios;
- verificar que las pruebas realmente cubran el riesgo;
- comprender decisiones tomadas por el agente;
- mantener coherencia arquitectónica;
- detectar supuestos incorrectos;
- operar y mantener el sistema después de desplegarlo.

Un agente puede generar más cambios de los que un ingeniero alcanza a revisar manualmente. Por lo tanto, escalar agentes sin mejorar el sistema de control no aumenta necesariamente la productividad. En muchos casos solo aumenta la velocidad con la que acumulamos riesgo.

La ventaja ya no está en escribir diez veces más código. Está en diseñar un proceso donde ese código pueda ser evaluado mediante evidencia clara y donde los cambios peligrosos encuentren resistencia antes de llegar a producción.

## La evidencia debe cruzar el límite

Una conclusión práctica que extraigo del concepto de *outer loop* es que el agente no debería entregarnos únicamente un resultado. Debe entregarnos un caso verificable para aceptar ese resultado.

No basta con recibir:

> “La tarea fue completada correctamente”.

Necesitamos artefactos observables:

- archivos modificados;
- diferencias respecto del estado anterior;
- pruebas ejecutadas;
- resultados de linting y análisis estático;
- supuestos utilizados;
- decisiones de arquitectura;
- riesgos conocidos;
- operaciones que no pudieron verificarse;
- instrucciones de rollback;
- impacto esperado sobre otros componentes.

La salida valiosa de un agente no es solamente el código. Es **código más evidencia**.

Esto cambia la manera de diseñar prompts, skills y automatizaciones. En lugar de pedir “implementa esta funcionalidad”, deberíamos definir un contrato operacional más parecido a este:

```text
Objetivo:
Implementar el cambio solicitado.

Restricciones:
- No modificar contratos públicos sin autorización.
- No introducir nuevas dependencias sin justificarlo.
- No acceder a producción.
- Mantener compatibilidad con los consumidores existentes.

Evidencia requerida:
- Resumen de archivos modificados.
- Pruebas ejecutadas y sus resultados.
- Riesgos o supuestos pendientes.
- Comparación del comportamiento anterior y posterior.
- Procedimiento de reversión.

Condición de término:
La tarea no está completa hasta que la evidencia pueda ser revisada.
```

El agente conserva capacidad de ejecución, pero la persona conserva la definición de “terminado”.

## Responsabilidad cognitiva

He utilizado varias veces el concepto de **responsabilidad cognitiva** para referirme a la obligación de no delegar también nuestro criterio.

La IA puede ayudarnos a pensar, pero no debería reemplazar el acto de comprender aquello que aprobamos.

Cuando aceptamos una respuesta solo porque está bien redactada, parece técnicamente sofisticada o fue producida por un modelo potente, estamos realizando una cesión cognitiva. El problema no es usar IA. El problema es adoptar su conclusión sin poder explicar por qué es adecuada.

En ingeniería esto tiene consecuencias concretas.

Si un agente modifica un servicio, introduce una condición de carrera, rompe un contrato o interpreta incorrectamente una regla de negocio, la responsabilidad no queda en el modelo. Queda en la persona y en el equipo que autorizaron el cambio.

Por eso considero que la competencia más importante no será aprender una colección infinita de prompts. Será aprender a construir mecanismos para responder preguntas como estas:

- ¿Qué decidió el agente?
- ¿Con qué información lo decidió?
- ¿Qué parte fue verificada de manera independiente?
- ¿Qué riesgo quedó sin cubrir?
- ¿Quién autorizó el cambio?
- ¿Cómo se revierte?
- ¿Qué aprendió el sistema después del error?

La trazabilidad no es burocracia adicional. Es una condición para delegar con seguridad.

## Deuda cognitiva: cuando el sistema avanza más rápido que nosotros

Existe otro riesgo más silencioso: que la capacidad del agente avance más rápido que nuestra comprensión.

Un agente puede crear una solución que funciona, pero que se encuentra muy por encima del nivel de entendimiento del responsable. En el corto plazo esto parece productividad. En el largo plazo puede transformarse en deuda cognitiva.

Esa deuda aparece cuando:

- no sabemos explicar la arquitectura generada;
- dependemos del agente para realizar cualquier modificación posterior;
- no comprendemos las librerías incorporadas;
- no podemos diagnosticar el sistema sin volver a preguntar al modelo;
- aceptamos abstracciones que nadie del equipo puede mantener;
- perdemos conocimiento sobre las reglas de negocio.

El problema se agrava en tareas de largo horizonte. Mientras más pasos autónomos ejecuta el agente, mayor puede ser la distancia entre el resultado final y nuestra representación mental del sistema.

Para evitarlo, no creo que debamos volver a escribir todo manualmente. Eso desperdiciaría parte de la utilidad de estas herramientas. La respuesta es introducir puntos explícitos de aprendizaje y reconstrucción:

1. pedir al agente que explique las decisiones relevantes;
2. revisar los cambios por bloques pequeños;
3. exigir diagramas o modelos de datos actualizados;
4. conservar un registro de supuestos;
5. realizar preguntas de comprensión antes de aprobar;
6. documentar los invariantes que el sistema no puede romper.

Delegar ejecución no debería significar delegar comprensión.

## El impuesto de orquestación

Mantener varios agentes también genera una carga que no siempre se considera.

Es sencillo crear nuevos agentes, asignarles nombres, memorias, herramientas y tareas programadas. Lo difícil es decidir:

- qué agente debería ejecutar cada tarea;
- qué contexto necesita;
- qué permisos puede recibir;
- cómo evitar duplicación de trabajo;
- qué resultados requieren atención inmediata;
- cuándo detener una ejecución;
- cómo resolver contradicciones entre agentes;
- qué información merece persistirse.

La capacidad de cómputo puede paralelizarse. Nuestra atención no.

En mi propio uso de agentes personales he comprobado que agregar más automatizaciones no siempre disminuye la carga mental. Sin una arquitectura clara, un conjunto de agentes puede convertirse en otra bandeja de entrada que necesita supervisión.

Por eso, la orquestación también debe diseñarse alrededor de la atención humana. No todos los eventos merecen una notificación, no todos los cambios requieren aprobación y no toda tarea necesita un agente independiente.

Un sistema útil debería:

- escalar únicamente excepciones relevantes;
- resumir evidencia, no esconderla;
- separar acciones reversibles de acciones críticas;
- trabajar dentro de ámbitos pequeños;
- detenerse cuando una restricción no puede verificarse;
- registrar sus decisiones sin saturar al usuario.

La autonomía útil no es la que realiza más acciones. Es la que consume menos atención sin ocultar riesgo.

## Los sistemas heredados son la prueba real

En proyectos nuevos es relativamente fácil definir convenciones, pruebas, permisos y límites desde el comienzo.

La situación cambia en sistemas empresariales heredados.

Un sistema antiguo no está compuesto solo por código. También contiene:

- decisiones históricas;
- excepciones de negocio;
- procesos manuales;
- datos inconsistentes;
- acuerdos entre equipos;
- dependencias no documentadas;
- procedimientos operacionales;
- incidentes pasados;
- restricciones presupuestarias;
- conocimiento que existe únicamente en algunas personas.

En estos entornos, un agente puede leer el repositorio completo y aun así no comprender el sistema real.

Esta observación conecta directamente con mi experiencia profesional. En sistemas financieros, integraciones empresariales y procesos que evolucionaron durante años, una regla aparentemente extraña puede existir porque evita una falla que ocurrió hace mucho tiempo. El código visible no contiene necesariamente la explicación.

Por eso, incorporar agentes en sistemas heredados exige transformar conocimiento implícito en restricciones explícitas:

- contratos funcionales;
- casos de prueba basados en incidentes reales;
- catálogos de reglas de negocio;
- responsables por dominio;
- linaje de datos;
- criterios de reconciliación;
- límites de acceso;
- procedimientos de recuperación.

El agente necesita un mapa de las cicatrices del sistema, no solamente acceso a sus archivos.

## Mi interpretación: el ingeniero se convierte en diseñador de límites

Durante años hemos asociado el valor del ingeniero de software con su capacidad para implementar soluciones.

Esa capacidad seguirá siendo importante, pero ya no será suficiente para diferenciarnos.

A medida que los agentes asuman más trabajo de ejecución, el ingeniero deberá concentrarse en capacidades de un nivel superior:

### Elegir qué vale la pena construir

No toda idea necesita convertirse en software y no toda automatización genera valor. Cuando crear se vuelve barato, elegir correctamente se vuelve más importante.

### Convertir conocimiento en restricciones

Las reglas que hoy viven en conversaciones, documentos dispersos o experiencia informal deben convertirse en especificaciones, pruebas, políticas y contratos verificables.

### Diseñar evidencia

Un buen sistema agéntico no solo actúa. Explica qué hizo mediante señales que puedan ser inspeccionadas de manera independiente.

### Emitir el veredicto

Aprobar no consiste en presionar un botón. Significa afirmar que la evidencia es suficiente para aceptar el riesgo.

### Mantener la capacidad de responder

Cuando algo falla, alguien debe poder explicar la decisión, reconstruir el cambio y tomar medidas correctivas.

En este contexto, el ingeniero no desaparece. Su responsabilidad aumenta.

## Un modelo operativo para mis propios agentes

A partir de esta reflexión, quiero estructurar mis automatizaciones y agentes con cinco capas.

### 1. Intención

Cada agente debe tener un objetivo acotado y comprensible. “Ayúdame con todo” no es una definición operacional.

La intención debe responder:

- qué problema resuelve;
- para quién;
- qué resultado se espera;
- qué no forma parte de su alcance.

### 2. Restricciones

Antes de entregar herramientas, se deben definir límites:

- directorios permitidos;
- servicios autorizados;
- acciones que requieren aprobación;
- datos que no puede almacenar;
- presupuesto de cómputo;
- tiempo máximo;
- operaciones reversibles y no reversibles.

### 3. Ejecución

El agente puede investigar, planificar, implementar y probar dentro de su ámbito autorizado.

La autonomía ocurre dentro del sistema, no fuera de sus límites.

### 4. Evidencia

Cada ejecución debe producir un registro útil:

- objetivo interpretado;
- plan aplicado;
- cambios realizados;
- validaciones;
- resultados;
- riesgos pendientes;
- recomendación final.

### 5. Veredicto y aprendizaje

Una persona o una política explícita decide si el resultado se acepta.

Después, el sistema debería registrar:

- qué se aprobó;
- quién lo aprobó;
- por qué;
- cuál fue el resultado real;
- qué restricción o prueba debe añadirse para la próxima ejecución.

El objetivo no es solo completar tareas. Es mejorar el loop después de cada experiencia.

## Un contrato mínimo de responsabilidad

Considero útil que los cambios producidos por agentes incluyan un pequeño contrato de responsabilidad.

Podría verse así:

```yaml
change:
  objective: "Descripción del resultado esperado"
  owner: "Persona o equipo responsable"
  agent: "Agente y versión utilizados"
  scope:
    allowed:
      - "Componentes que podía modificar"
    excluded:
      - "Componentes fuera de alcance"
  evidence:
    tests: "Pruebas ejecutadas"
    static_analysis: "Resultados"
    diff_review: "Estado de revisión"
    assumptions: "Supuestos relevantes"
  risk:
    level: "low | medium | high"
    known_issues:
      - "Riesgos no resueltos"
  decision:
    verdict: "approved | rejected | restricted"
    rationale: "Motivo del veredicto"
  recovery:
    rollback: "Procedimiento de reversión"
```

No todas las tareas necesitan este nivel de formalidad. Pero la idea central es reutilizable: una acción autónoma debe dejar una huella comprensible.

## La ventaja profesional no será tener más agentes

Es probable que pronto cualquier desarrollador pueda iniciar varios agentes capaces de producir código en paralelo.

Eso no significa que todos podrán construir sistemas confiables.

La ventaja no estará en presumir una flota mayor, sino en demostrar:

- mejor criterio para delegar;
- restricciones más precisas;
- evidencia más útil;
- menor deuda cognitiva;
- decisiones más explicables;
- responsabilidad sostenida sobre producción.

Un agente puede proponer, implementar y verificar. Pero no puede heredar las consecuencias organizacionales, económicas o humanas de una mala decisión.

Esa diferencia define el nuevo territorio del ingeniero.

## Conclusión

La ingeniería agéntica no consiste únicamente en integrar un modelo con herramientas. Consiste en construir un sistema donde la autonomía tenga límites, la ejecución produzca evidencia y las decisiones importantes mantengan un responsable identificable.

La IA puede hacerse cargo del loop interno:

- investigar;
- implementar;
- probar;
- corregir;
- repetir.

Nosotros debemos conservar el loop externo:

- decidir qué merece existir;
- establecer las restricciones;
- evaluar la evidencia;
- autorizar el cambio;
- cuidar el resultado;
- responder cuando algo falla.

En mi caso, esta idea cambia también la forma en que quiero desarrollar mis agentes personales y profesionales. No necesito agentes que aparenten trabajar de manera independiente. Necesito sistemas que amplifiquen mi capacidad sin debilitar mi comprensión, que reduzcan trabajo mecánico sin transferir mi criterio y que me permitan asumir con claridad aquello que finalmente lleva mi nombre.

La IA puede generar el artefacto.

La ingeniería comienza cuando alguien puede explicar por qué ese artefacto debe existir, por qué es suficientemente seguro y qué hará cuando la realidad demuestre que estaba equivocado.

---

## Lectura que motivó esta reflexión

- Addy Osmani, [*Own the Outer Loop*](https://addyosmani.com/blog/own-the-outer-loop/), publicado el 15 de julio de 2026.
