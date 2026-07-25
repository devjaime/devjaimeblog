---
filename: "2026-07-25-smart-replenishment-agente-ia-retail"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-07-25T20:30:00-04:00"
publishDate: "2026-07-25T20:30:00-04:00"
modifiedDate: "2026-07-25T20:30:00-04:00"
title: "Smart Replenishment: cómo construir un agente de IA para decisiones de inventario"
description: "Diseño conceptual y técnico de un agente de reposición: datos, forecast, señales externas, reglas, explicabilidad, supervisión humana y una demo interactiva."
author:
  name: "Jaime Hernández"
  url: "https://jaimehernandez.dev"
authorHandle: "devjaime"
tags:
  - "Inteligencia Artificial"
  - "Retail"
  - "AI Engineering"
  - "Agentes IA"
  - "Google Cloud"
  - "Vertex AI"
  - "BigQuery"
  - "Supply Chain"
category: "AI Engineering"
draft: false
time: 18
featured: false
lang: es
type: article
source: hybrid
reviewStatus: published
---

En [mi reflexión sobre PLAI Week 2026](/blog/2026-07-25-plai-week-futuro-ia-retail) planteé que la IA en retail está pasando de conversar a actuar. En este artículo quiero desmenuzar la idea que trabajamos como equipo: **Smart Replenishment**, un agente que transforma señales de demanda e inventario en sugerencias de reposición explicables y revisables.

Este no es el relato de un sistema productivo ni una promesa de resultados. Es un diseño conceptual acompañado de un prototipo. Todos los datos, personas, productos, tiendas y métricas de la demo son simulados.

<aside class="article-callout">
  <strong>La tesis:</strong> un agente de reposición no debería reemplazar el criterio del planner. Debería reducir el trabajo de detectar excepciones, reunir evidencia, calcular una propuesta y dejar trazabilidad de la decisión.
</aside>

## Presentación visual del concepto

Esta versión navegable reúne las láminas públicas que mejor explican la propuesta. Las presentaciones originales se usaron como material de trabajo; aquí se excluyen nombres, referencias internas y cifras que puedan confundirse con resultados reales.

<presentation-gallery aria-label="Presentación pública de Smart Replenishment">
  <figure data-presentation-slide>
    <img src="/images/plai-week-2026/smart-replenishment-pitch-portada.png" alt="Portada pública del concepto Smart Replenishment" width="1280" height="720" loading="eager" decoding="async" />
    <figcaption>Smart Replenishment: un agente para preparar decisiones de inventario.</figcaption>
  </figure>
  <figure data-presentation-slide>
    <img src="/images/smart-replenishment/dashboard.png" alt="Pipeline público del agente de reposición con datos simulados" width="1920" height="1080" loading="lazy" decoding="async" />
    <figcaption>Del dato transaccional a una sugerencia acotada por reglas.</figcaption>
  </figure>
  <figure data-presentation-slide>
    <img src="/images/plai-week-2026/plai-week-arquitectura.png" alt="Arquitectura de IA con reglas y revisión humana" width="1280" height="720" loading="lazy" decoding="async" />
    <figcaption>El patrón de confianza: modelos para comprender, reglas para validar y personas para decidir.</figcaption>
  </figure>
  <figure data-presentation-slide>
    <img src="/images/smart-replenishment/sku-detail.png" alt="Explicación de una sugerencia de reposición con datos simulados" width="1920" height="1080" loading="lazy" decoding="async" />
    <figcaption>Explicabilidad: evidencia, variables y trazabilidad por decisión.</figcaption>
  </figure>
</presentation-gallery>

<script type="module" src="/scripts/presentation-gallery.js"></script>

## Primero: definir exactamente qué decisión mejora

En retail se mezclan con facilidad dos decisiones distintas:

- **Surtido y compra:** qué productos ofrecer, en qué profundidad, durante qué temporada y en qué tiendas.
- **Reposición:** cómo redistribuir o volver a pedir un producto ya autorizado cuando cambia la demanda o disminuye su cobertura.

Smart Replenishment se concentra en la segunda. Su unidad de decisión es pequeña y verificable: **SKU × tienda × variante × horizonte temporal**. El agente no incorpora productos nuevos al surtido ni modifica libremente la estrategia comercial.

La salida tampoco es una orden opaca. Es una propuesta con cantidad, prioridad, confianza, restricciones aplicadas y evidencia.

![Vista pública del pipeline de Smart Replenishment con datos simulados](/images/smart-replenishment/dashboard.png)

## La arquitectura: señales, predicción, restricciones y acción

El flujo puede entenderse en seis capas:

1. **Fuentes transaccionales:** ventas, inventario disponible, stock en tránsito, pedidos y catálogo.
2. **Contexto externo:** clima, calendario comercial y señales agregadas de tendencias.
3. **Ingesta y calidad:** eventos con Pub/Sub, procesamiento con Dataflow y contratos de datos antes de persistir.
4. **Capa analítica:** zonas Bronze, Silver y Gold en BigQuery; las variables reutilizables pueden publicarse en Vertex AI Feature Store.
5. **Predicción y decisión:** forecast por SKU-local, modificadores de contexto, cálculo del gap y validación contra reglas operacionales.
6. **Revisión y ejecución:** el planner aprueba, ajusta o rechaza; solo entonces una integración controlada prepara la acción en el sistema transaccional.

En forma compacta:

```text
SAP / WMS / POS / fuentes externas
              ↓
     Pub/Sub + Dataflow
              ↓
 DLP → BigQuery → Feature Store
              ↓
 Forecast + reglas + herramientas del agente
              ↓
 Propuesta explicable → revisión humana → ejecución
```

### Qué hace cada herramienta

**Pub/Sub** desacopla productores y consumidores; **Dataflow** valida, transforma y enruta eventos; **Cloud DLP** evita que información personal avance a la capa analítica; **BigQuery** conserva historia y habilita análisis reproducibles; **Vertex AI** sirve modelos, features y capacidades generativas; **IAM, VPC Service Controls, KMS y Secret Manager** reducen la superficie de acceso.

La IA generativa es útil para orquestar herramientas y explicar una decisión. No debería inventar la cantidad de reposición. Esa cantidad debe provenir de modelos y reglas deterministas que puedan probarse por separado.

## El núcleo cuantitativo

Un punto de partida sencillo es estimar la demanda esperada durante el lead time:

```text
demanda_ajustada = forecast_base × factor_tendencia × factor_clima × factor_campaña

stock_objetivo = demanda_ajustada + stock_seguridad

gap = max(0, stock_objetivo - stock_disponible - stock_en_tránsito)

pedido = aplicar_restricciones(gap, MOQ, múltiplo_caja, capacidad, presupuesto, surtido)
```

El `forecast_base` puede comenzar con un modelo estadístico interpretable. Antes de buscar sofisticación, conviene construir un baseline estacional por SKU-local, medir su error por segmento y compararlo contra la regla que hoy usa la operación.

Los factores externos no deberían multiplicar la demanda sin límites. Cada señal necesita:

- una ventana temporal y una tasa de decaimiento;
- una categoría o atributo de producto compatible;
- límites superior e inferior;
- evidencia de que mejora el forecast fuera de muestra;
- un mecanismo para ignorarla cuando su calidad cae.

Así evitamos que una tendencia ruidosa en redes se convierta directamente en sobrestock.

## El agente como orquestador de capacidades

La parte “agente” aparece cuando el sistema puede reunir y usar herramientas especializadas para resolver una excepción:

- **Inventory & Risk:** calcula cobertura, stockout proyectado y stock en tránsito.
- **Geo-Spatial Demand:** identifica sustitución o desplazamiento de demanda entre tiendas cercanas.
- **Lifecycle & Attribute:** reconoce estacionalidad, ciclo de vida y compatibilidad de atributos.
- **Market Intelligence:** transforma señales públicas y agregadas en features acotadas.
- **Planned Campaigns:** incorpora promociones y calendario conocidos.

El orquestador recibe un caso, llama a estas capacidades, valida sus resultados con políticas y construye una recomendación. Cada herramienta debe tener un contrato claro: entradas tipadas, respuesta estructurada, versión, latencia, nivel de confianza y causas de error.

## Explicabilidad que permita decidir

Una explicación útil no es un párrafo persuasivo generado por un modelo. Debe permitir reconstruir el cálculo:

- inventario y cobertura observados;
- forecast y horizonte utilizados;
- contribución de cada modificador;
- restricciones que cambiaron la cantidad final;
- versión del modelo y de las reglas;
- fuentes y fecha de actualización;
- alternativas consideradas.

![Detalle público de una sugerencia por SKU con datos simulados](/images/smart-replenishment/sku-detail.png)

El modelo de lenguaje puede traducir ese registro a una explicación legible, pero la evidencia estructurada sigue siendo la fuente de verdad.

## Human-in-the-loop y límites de autonomía

El camino seguro no comienza automatizando pedidos. Comienza en **shadow mode**: el sistema calcula sugerencias sin ejecutarlas y se compara con las decisiones reales del equipo.

Después se puede avanzar por niveles:

1. **Observación:** genera recomendaciones y mide diferencias.
2. **Asistencia:** el planner aprueba, ajusta o rechaza cada propuesta.
3. **Automatización acotada:** ejecuta solo casos de bajo riesgo dentro de límites explícitos.
4. **Excepción humana:** cualquier señal anómala, baja confianza o restricción conflictiva vuelve a revisión.

La interfaz debe registrar quién decidió, qué cambió y por qué. Esos overrides no son ruido: son datos valiosos para detectar reglas incompletas y cambios del negocio.

## Demo interactiva

La siguiente experiencia funciona completamente en el navegador. Permite recorrer el pipeline, ejecutar la simulación, generar sugerencias, filtrar la tabla, abrir una explicación, aprobar o rechazar casos y exportar un CSV. No se conecta a sistemas corporativos ni envía datos a un backend.

<div class="interactive-demo" aria-label="Demo interactiva de Smart Replenishment">
  <div class="interactive-demo__notice">Demo conceptual · datos e identidades simulados · se recomienda verla en escritorio</div>
  <iframe
    src="/demos/smart-replenishment/index.html"
    title="Smart Replenishment Lab — demo interactiva"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin allow-downloads"
    referrerpolicy="no-referrer"
  ></iframe>
</div>

<p><a href="/demos/smart-replenishment/index.html" target="_blank" rel="noopener noreferrer">Abrir la demo en pantalla completa →</a></p>

## Recorrido en video

<div class="article-video">
  <video controls preload="metadata" poster="/images/smart-replenishment/dashboard.png">
    <source src="/videos/smart-replenishment-walkthrough.mp4" type="video/mp4" />
    Tu navegador no soporta video HTML5.
  </video>
</div>

## Cómo llevarla a producción

### Fase 0 — contrato de decisión y datos

Definir alcance, propietarios, fuentes, SLA, restricciones, costo de errores y proceso de reversa. Auditar disponibilidad, frescura y consistencia por SKU-local.

### Fase 1 — baseline offline

Construir el dataset histórico, evitar leakage temporal, entrenar un baseline y hacer backtesting con ventanas móviles. Segmentar el error: un promedio global puede esconder categorías inservibles.

### Fase 2 — shadow mode

Ejecutar diariamente sin generar pedidos. Comparar contra decisiones humanas y contra el baseline actual. Registrar aceptación hipotética, falsos positivos, falsos negativos y causas de divergencia.

### Fase 3 — decisión asistida

Mostrar recomendaciones priorizadas con evidencia. Medir tiempo ahorrado, tasa de aceptación, magnitud de ajustes y resultados posteriores. Incorporar observabilidad de datos, modelo, agente y costos.

### Fase 4 — automatización acotada

Automatizar únicamente combinaciones de bajo riesgo, alta confianza y reglas estables. Usar límites por monto y cantidad, idempotencia, aprobación por política, auditoría y kill switch.

## Qué medir realmente

Las métricas de una demo son ilustrativas. En un piloto, el éxito debe compararse contra una línea base y un grupo de control:

- tasa de quiebre y nivel de servicio;
- ventas perdidas estimadas y sell-through;
- días de inventario, sobrestock y merma;
- error y sesgo del forecast por segmento;
- aceptación, ajuste y rechazo de recomendaciones;
- latencia, disponibilidad y costo por decisión;
- drift de datos, features y comportamiento del agente.

También hay que cuantificar el costo asimétrico de equivocarse: pedir 20 unidades de más no equivale a dejar de pedir 20 unidades cuando el producto tiene distinto margen, vida útil o lead time.

## Riesgos que el diseño debe asumir desde el inicio

Los principales fallos rara vez son “el modelo respondió mal”. Son inventario atrasado, unidades inconsistentes, productos sin correspondencia, tendencias mal asociadas, reglas comerciales fuera de versión, integraciones que repiten una acción o explicaciones que suenan convincentes sin evidencia.

Por eso la defensa es por capas: contratos y pruebas de datos, evaluación offline, políticas deterministas, permisos mínimos, PII fuera del flujo, trazas completas, aprobación humana y reversibilidad.

## La idea de negocio detrás de la tecnología

El valor no está en agregar otra pantalla. Está en convertir miles de combinaciones SKU-local en una cola pequeña de excepciones priorizadas, con suficiente contexto para decidir rápido.

Si la solución funciona, el planner dedica menos tiempo a buscar datos y más a resolver casos donde realmente importa su experiencia. Esa es la visión que considero más potente para los agentes en retail: **software que prepara decisiones confiables, aprende de la operación y gana autonomía únicamente cuando la evidencia lo justifica**.
