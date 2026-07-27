---
filename: "2026-07-26-google-skills-gcp-agentes"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-07-26T12:00:00-04:00"
publishDate: "2026-07-26T12:00:00-04:00"
modifiedDate: "2026-07-26T12:00:00-04:00"
title: "Google Agent Skills en la práctica: microservicios, Flutter y datos en GCP"
description: "Revisión práctica de google/skills: qué es, cómo se instala y cómo usar sus instrucciones para diseñar una solución con Cloud Run, Pub/Sub, BigQuery, Cloud Storage, Cloud Scheduler, Flutter y frontend web."
author:
  name: "Jaime Hernández"
  url: "https://jaimehernandez.dev"
authorHandle: "devjaime"
tags:
  - "Google Cloud"
  - "Agent Skills"
  - "Cloud Run"
  - "Pub/Sub"
  - "BigQuery"
  - "Flutter"
  - "AI Engineering"
category: "Cloud Engineering"
draft: false
time: 18
featured: true
lang: es
type: article
source: human
reviewStatus: reviewed
---

Google publicó [`google/skills`](https://github.com/google/skills), un repositorio de **Agent Skills** para productos y tecnologías de Google. La promesa es atractiva: entregarle a un agente instrucciones especializadas, referencias, scripts y reglas de seguridad para que trabaje con mayor precisión sobre Google Cloud.

Pero conviene comenzar por lo más importante:

> Una skill no es un SDK, un conector mágico ni un reemplazo de la documentación. Es contexto operativo que le enseña al agente cómo abordar una tarea, qué revisar y qué límites respetar.

Revisé el repositorio completo en su commit `d1c9be2` del 24 de julio de 2026. En ese punto contenía **90 skills**: 76 de Cloud, 12 de Ads y 2 de Analytics. El proyecto está bajo licencia Apache 2.0 y su propio README advierte que continúa en desarrollo activo.

En este artículo explicaré cómo instalarlo, qué aporta y cómo lo usaría en una arquitectura realista con frontend web, Flutter, microservicios en Cloud Run, Pub/Sub, Cloud Scheduler, BigQuery y Cloud Storage.

## Demo interactiva

Esta demo simula la selección de skills, el diseño de arquitectura y la evidencia que debería entregar el agente. También incorpora dos mockups funcionales de Flutter: creación de pedidos y carga directa de comprobantes mediante URLs firmadas. No se conecta a una cuenta de Google Cloud, no ejecuta `gcloud` y no crea recursos facturables.

<div class="interactive-demo" aria-label="Demo interactiva de Google Agent Skills con GCP">
  <div class="interactive-demo__notice">Demo conceptual · sin credenciales ni recursos reales · se recomienda verla en escritorio</div>
  <iframe
    src="/demos/google-skills-gcp/index.html"
    title="Google Skills × GCP — laboratorio interactivo"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    referrerpolicy="no-referrer"
  ></iframe>
</div>

<p><a href="/demos/google-skills-gcp/index.html" target="_blank" rel="noopener noreferrer">Abrir la demo en pantalla completa →</a></p>

### Qué puedes probar en el mockup Flutter

La sección **Flutter en el cliente** permite cambiar entre dos flujos y observar cada salto hacia el backend:

1. **Crear pedido:** Flutter envía `POST /orders` con la identidad del usuario; Cloud Run valida el contrato, publica `order.created` y el evento termina disponible para analítica en BigQuery.
2. **Subir comprobante:** Flutter solicita una URL firmada al backend, carga el PDF directamente a un bucket privado y Storage produce un evento para el procesamiento posterior.

Al ejecutar la simulación, cada servicio cambia de estado y muestra la skill que orienta esa parte del diseño. Los mockups no contienen claves ni llaman servicios reales: enseñan el contrato y la separación correcta de identidades.

## Qué contiene realmente `google/skills`

Una skill suele ser un directorio con un archivo `SKILL.md`. Su encabezado describe cuándo debe activarse y el cuerpo define un flujo de trabajo. Algunas agregan referencias, scripts, configuraciones o assets.

Por ejemplo:

- `cloud-run-basics` cubre servicios HTTP, jobs y worker pools;
- `bigquery-basics` cubre datasets, tablas, consultas, ingestión e IAM;
- `google-cloud-storage-basics` cubre objetos, buckets, URLs firmadas, lifecycle, notificaciones y MCP;
- `google-cloud-recipe-auth` separa autenticación humana, ADC e identidades de servicio;
- `gcloud` obliga al agente a validar la sintaxis exacta de cada comando antes de proponerlo o ejecutarlo;
- `google-cloud-solution-architecture` organiza el descubrimiento, diseño, validación y presentación de una solución multiproducto.

Esto cambia la calidad del trabajo porque el agente deja de responder únicamente desde conocimiento general. También recibe un proceso explícito: descubrir requisitos, consultar referencias, preservar el proyecto indicado, reducir resultados, pedir autorización para operaciones peligrosas y entregar evidencia.

## Instalación: selecciona, no acumules

El README propone:

```bash
npx skills add google/skills
```

El instalador permite elegir skills específicas. Para el ejemplo de este artículo instalaría solamente:

```text
google-cloud-solution-architecture
google-cloud-recipe-auth
gcloud
cloud-run-basics
bigquery-basics
google-cloud-storage-basics
firebase-basics
cloud-logging-query-generation
```

No recomiendo instalar todo “por si acaso”. Una skill agrega contexto e instrucciones. Un conjunto pequeño, pertinente y auditable hace más evidente cuál regla está guiando al agente.

También debes reiniciar o abrir una nueva sesión de tu agente después de instalar, según la herramienta que utilices, para que redescubra el catálogo.

## La arquitectura de la demostración

El caso consiste en una plataforma de pedidos consumida desde Flutter y un frontend web:

<pre class="architecture-diagram" aria-label="Arquitectura de Flutter y servicios de Google Cloud"><code><span class="diagram-client">Flutter / Web</span>
      <span class="diagram-flow">│ HTTPS + identidad de usuario</span>
      <span class="diagram-flow">▼</span>
<span class="diagram-run">Cloud Run: orders-api</span>
      <span class="diagram-flow">│ publica order.created</span>
      <span class="diagram-flow">▼</span>
<span class="diagram-pubsub">Pub/Sub</span> <span class="diagram-flow">──────►</span> <span class="diagram-run">Cloud Run: event-worker</span> <span class="diagram-flow">──────►</span> <span class="diagram-data">BigQuery</span>
   <span class="diagram-flow">│                         │</span>
   <span class="diagram-flow">│                         └───────────────►</span> <span class="diagram-storage">Cloud Storage</span>
   <span class="diagram-flow">│</span>
   <span class="diagram-flow">└────────►</span> <span class="diagram-error">dead-letter topic</span>

<span class="diagram-scheduler">Cloud Scheduler</span> <span class="diagram-flow">── OIDC ──►</span> <span class="diagram-run">Cloud Run Job / endpoint privado</span></code></pre>

Es una arquitectura didáctica, no una receta universal. Antes de construirla habría que conocer volumen, latencia, residencia de datos, SLA, presupuesto, modelo de identidad, recuperación, observabilidad y costo aceptable. La skill de arquitectura insiste correctamente en descubrir esos requisitos antes de elegir productos.

## Cómo se reparten las responsabilidades

### Flutter y frontend

Los clientes consumen la API, pero no deberían contener claves de una service account ni hablar con BigQuery. La identidad del usuario puede resolverse con Identity Platform o Firebase Authentication, mientras la autorización de negocio pertenece al backend.

Para archivos grandes, el cliente solicita al backend una URL firmada de corta duración y sube directamente a Cloud Storage. Así evitamos transportar el binario dos veces por Cloud Run. La API conserva el control sobre nombre, tipo, tamaño, expiración y propietario del objeto.

El propio repositorio enlaza skills adicionales de [Flutter](https://github.com/flutter/skills) y [Dart](https://github.com/dart-lang/skills). Están separadas de `google/skills`, por lo que conviene instalarlas solo cuando el agente vaya a modificar el cliente móvil.

### Cloud Run

`cloud-run-basics` recuerda un contrato pequeño pero crítico: el proceso debe escuchar en `0.0.0.0` y utilizar la variable `PORT` inyectada por la plataforma. También distingue tres recursos:

- **service** para solicitudes HTTP y eventos push;
- **job** para trabajo que termina;
- **worker pool** para consumidores pull siempre activos.

En nuestro ejemplo usaría un service para `orders-api`, otro service para eventos push o Eventarc y un job si el cierre diario necesita ejecución batch. La [documentación de Cloud Run y Pub/Sub](https://docs.cloud.google.com/run/docs/tutorials/pubsub) explica cómo invocar un servicio con una suscripción push autenticada.

### Pub/Sub

Aquí aparece el primer límite real del repositorio: al momento de la revisión **no existe una skill dedicada a Pub/Sub**. Pub/Sub sí aparece dentro de arquitectura, Storage, monitoring, GKE y `gcloud`, pero no hay un `pubsub-basics/SKILL.md` equivalente a Cloud Run o BigQuery.

Eso no bloquea el trabajo. Significa que el agente debe declarar el vacío, consultar documentación oficial y validar cada comando con la skill `gcloud`.

Para eventos de dominio usaría un identificador único, versionado de esquema, reintentos con backoff, dead-letter topic e idempotencia en el consumidor. No asumiría “exactly once” de extremo a extremo solo porque un producto ofrezca una opción con ese nombre.

Si el evento no necesita transformación, una [suscripción de BigQuery](https://docs.cloud.google.com/pubsub/docs/bigquery) puede escribir directamente usando Storage Write API y evita mantener un subscriber. Su semántica es *at least once*, de modo que los duplicados todavía deben considerarse. Si hay enriquecimiento, ventanas o agregaciones complejas, Dataflow puede ser mejor alternativa.

### Cloud Scheduler

Tampoco existe hoy una skill específica de Cloud Scheduler. Para una tarea programada preferiría:

- Scheduler invocando un endpoint privado de Cloud Run con OIDC;
- Scheduler ejecutando un Cloud Run Job;
- una tarea nativa de BigQuery si el trabajo es solamente SQL programado.

La decisión depende del contrato: HTTP corto, batch que termina o transformación analítica. La skill de Cloud Run sí explica la diferencia entre services y jobs, mientras `gcloud` reduce el riesgo de inventar flags.

### BigQuery

`bigquery-basics` entrega rutas para CLI, bibliotecas cliente, Terraform, MCP, IAM y seguridad. En este sistema BigQuery es un destino analítico, no la base transaccional de la API.

Una tabla de eventos mínima podría comenzar así:

```sql
CREATE TABLE IF NOT EXISTS analytics.order_events (
  event_id STRING NOT NULL,
  event_type STRING NOT NULL,
  occurred_at TIMESTAMP NOT NULL,
  order_id STRING NOT NULL,
  payload JSON,
  ingested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
)
PARTITION BY DATE(occurred_at)
CLUSTER BY event_type, order_id;
```

En producción agregaría política de retención, clasificación de datos, pruebas del esquema y una estrategia explícita de deduplicación.

### Cloud Storage

La skill de Storage es una de las más completas. Incluye CLI, API, bibliotecas, Terraform, GCSFuse, transferencia, lifecycle, IAM, MCP y notificaciones hacia Pub/Sub.

También contiene una decisión interesante de trazabilidad: pide agregar una etiqueta de atribución a los comandos y un `User-Agent` específico en llamadas HTTP. Es un buen ejemplo de por qué debes leer las skills que instalas; pueden introducir requisitos operativos más allá de una respuesta técnica.

## Prompts que sí ayudan

Un prompt útil incluye alcance, restricciones y evidencia esperada. Por ejemplo:

```text
Usa google-cloud-solution-architecture para diseñar el backend de una app
Flutter de pedidos. Necesito una API privada en Cloud Run, eventos en Pub/Sub,
archivos en Cloud Storage y analítica en BigQuery.

Antes de proponer productos, pregúntame por volumen, latencia, disponibilidad,
RTO/RPO, residencia de datos, presupuesto e identidad. No ejecutes mutaciones.
Entrega decisiones, alternativas, diagrama, IAM mínimo y plan de validación.
```

Para una tarea más concreta:

```text
Usa cloud-run-basics y gcloud. Revisa este microservicio y prepara el despliegue
en PROJECT_ID y REGION. Verifica 0.0.0.0:$PORT, health check, concurrencia,
timeouts y service account. Valida la sintaxis exacta de cada comando y detente
antes de cualquier cambio remoto.
```

Para conectar Flutter:

```text
Usa google-cloud-storage-basics y cloud-run-basics. Diseña un flujo de carga
directa mediante URL firmada de cinco minutos. Flutter no puede recibir claves
de service account. Define contrato, validaciones, CORS, límites, IAM y pruebas.
```

Observa que ninguno dice “crea toda mi nube”. La intención es separar diseño, revisión, plan, autorización, ejecución y validación.

## Autenticación: local no es producción

La documentación oficial de [autenticación de Google Cloud](https://docs.cloud.google.com/docs/authentication) recomienda Application Default Credentials para que las bibliotecas encuentren credenciales según el entorno.

En local puedes autenticar tu usuario con ADC. Para probar permisos de una identidad de servicio es preferible la [impersonación de service accounts](https://docs.cloud.google.com/docs/authentication/use-service-account-impersonation), que emite credenciales temporales. En Cloud Run debes adjuntar una service account con privilegio mínimo y dejar que la plataforma entregue tokens de corta duración.

Evitaría descargar claves JSON. Además del riesgo de filtración, terminan mezclando identidad humana, automatización y runtime.

## Un flujo de trabajo seguro con agentes

Usaría las skills dentro de este ciclo:

1. **Descubrir:** pedir al agente que enumere las skills pertinentes y explique por qué.
2. **Diseñar:** recopilar requisitos y comparar alternativas sin desplegar.
3. **Revisar:** verificar IAM, regiones, límites, costos, entrega e idempotencia.
4. **Planificar:** generar comandos o Terraform con proyecto y región explícitos.
5. **Validar:** ejecutar chequeos estáticos y `terraform plan` cuando corresponda.
6. **Autorizar:** aprobar por separado los cambios remotos y facturables.
7. **Ejecutar:** aplicar una unidad pequeña y observable.
8. **Demostrar:** probar endpoint, evento, objeto y consulta; conservar logs como evidencia.
9. **Limpiar:** eliminar recursos de laboratorio solo con autorización explícita.

La skill `gcloud` es especialmente estricta: exige consultar la ayuda del subcomando exacto, evita listas sin filtro o límite, conserva `--project`, usa ejecución no interactiva y prohíbe operaciones destructivas autónomas. Es una restricción saludable para un agente con terminal.

## Mi evaluación

`google/skills` es valioso por tres razones: convierte documentación en procedimientos activables, incorpora guardrails que un prompt genérico suele olvidar y mantiene las instrucciones cerca de referencias y scripts versionados.

Su principal debilidad es la cobertura desigual. Hay profundidad importante en GKE, Agent Platform, arquitectura, Cloud Run, BigQuery y Storage, pero faltan skills básicas dedicadas a servicios habituales como Pub/Sub y Cloud Scheduler. Además, una skill puede quedar desactualizada igual que cualquier documento; debe revisarse, versionarse y contrastarse con la documentación oficial.

La mejor forma de usar este repositorio no es entregarle acceso total a un agente. Es convertirlo en un colega más disciplinado: uno que sabe qué preguntar, dónde buscar, qué no debe asumir y qué evidencia debe entregar antes de tocar producción.

## Fuentes y siguiente paso

- [Repositorio oficial `google/skills`](https://github.com/google/skills)
- [Especificación abierta Agent Skills](https://agentskills.io/home)
- [Cloud Run con Pub/Sub](https://docs.cloud.google.com/run/docs/tutorials/pubsub)
- [Suscripciones BigQuery de Pub/Sub](https://docs.cloud.google.com/pubsub/docs/bigquery)
- [Autenticación en Google Cloud](https://docs.cloud.google.com/docs/authentication)
- [Impersonación de service accounts](https://docs.cloud.google.com/docs/authentication/use-service-account-impersonation)
- [Skills adicionales para Flutter](https://github.com/flutter/skills)

El siguiente paso razonable es tomar un microservicio pequeño, ejecutar el flujo primero en modo plan y comparar la respuesta del agente con y sin skills. Ahí se vuelve visible el valor real: no tanto cuánto código genera, sino cuántos supuestos peligrosos consigue evitar.
