# Guion de video — Google Agent Skills con GCP

Duración objetivo: 11–13 minutos

Formato: 16:9, 1080p, captura de navegador + terminal + editor
Promesa: entender qué son las Agent Skills y ver cómo ayudan a diseñar una solución con Flutter, Cloud Run, Pub/Sub, BigQuery, Storage y Scheduler.

## Preparación

- Abrir `https://github.com/google/skills` en el navegador.
- Abrir la demo local en `/demos/google-skills-gcp/index.html`.
- Abrir en el editor:
  - `skills/cloud/cloud-run-basics/SKILL.md` del clon de `google/skills`;
  - `skills/cloud/gcloud/SKILL.md`;
  - un microservicio pequeño que escuche en `0.0.0.0:$PORT`.
- Aumentar terminal y editor a 18–20 px.
- No mostrar project IDs, correos, tokens, billing accounts ni credenciales reales.
- Ejecutar cualquier demostración contra un proyecto sandbox con presupuesto y alertas; la demo web no requiere GCP.

## 00:00–00:35 — Hook

**Visual:** comenzar en el escenario “Procesar eventos” de la demo y pulsar “Ejecutar escenario”.

**Narración:**

> ¿Puede una carpeta de Markdown hacer que un agente diseñe mejor una arquitectura en Google Cloud? Google publicó 90 Agent Skills. Hoy veremos qué hacen realmente, dónde están sus límites y cómo las usaría para conectar Flutter y un frontend con Cloud Run, Pub/Sub, BigQuery, Storage y Scheduler.

Texto en pantalla: `Skills ≠ SDK ≠ acceso automático`.

## 00:35–01:35 — Qué es el repositorio

**Visual:** README de `google/skills`; recorrer instalación y categorías.

Puntos de narración:

- repositorio oficial, Apache 2.0, en desarrollo activo;
- 90 skills en el commit revisado: 76 Cloud, 12 Ads, 2 Analytics;
- una skill contiene instrucciones y puede incluir referencias, scripts y assets;
- no crea credenciales ni reemplaza IAM, APIs o facturación.

Comando en pantalla:

```bash
npx skills add google/skills
```

## 01:35–02:35 — Anatomía de una skill

**Visual:** `cloud-run-basics/SKILL.md`.

Destacar:

- descripción que activa la skill;
- services, jobs y worker pools;
- `0.0.0.0` y `$PORT`;
- roles requeridos;
- referencias de CLI, IAM, Terraform y networking.

**Narración:**

> El valor no está en recordar un comando. Está en cambiar el proceso del agente: qué inspecciona, qué pregunta, qué valida y cuándo debe detenerse.

## 02:35–03:25 — Instalación selectiva

**Visual:** demo, escenario “Instalar y revisar”.

Mostrar la selección:

```text
google-cloud-solution-architecture
google-cloud-recipe-auth
gcloud
cloud-run-basics
bigquery-basics
google-cloud-storage-basics
```

Explicar por qué no instalar las 90: menos contexto irrelevante, activación más clara y auditoría más simple.

## 03:25–04:40 — Arquitectura del ejemplo

**Visual:** alternar entre los escenarios API y eventos. Después bajar a la sección de mockups Flutter, cambiar entre “Crear pedido” y “Subir comprobante” y ejecutar ambos flujos.

Narrar el flujo:

```text
Flutter/Web → Cloud Run → Pub/Sub → worker → BigQuery
                       ↘ Storage
Scheduler → endpoint privado o Cloud Run Job
```

Enfatizar que la skill de arquitectura primero debería preguntar por volumen, latencia, SLA, seguridad, residencia, RTO/RPO y presupuesto.

## 04:40–06:00 — Microservicio en Cloud Run

**Visual:** escenario “Desplegar API” y editor con el servidor.

Prompt en pantalla:

```text
Usa cloud-run-basics y gcloud. Revisa esta API y prepara un plan para Cloud Run.
Verifica 0.0.0.0:$PORT, health, IAM mínimo, proyecto y región. No ejecutes cambios.
```

Mostrar la evidencia esperada:

- runtime y puerto;
- service account adjunta;
- servicio privado;
- proyecto/región explícitos;
- prueba HTTP autenticada y consulta de logs.

No desplegar si el objetivo del video es reproducible sin costos. Si se hace una demo real, usar un proyecto sandbox y mostrar el plan antes de autorizar.

## 06:00–07:20 — Pub/Sub y Scheduler: el límite honesto

**Visual:** escenario “Procesar eventos”; resaltar el chip amarillo.

**Narración:**

> En la revisión no encontré una skill básica dedicada a Pub/Sub ni otra a Cloud Scheduler. Sí aparecen en referencias y otras skills, pero la cobertura no es equivalente a Cloud Run o BigQuery. Un buen agente debe reconocer ese vacío y consultar fuentes oficiales, no fingir que la skill existe.

Mostrar:

- push autenticado o Eventarc hacia Cloud Run;
- `event_id` e idempotencia;
- reintentos y dead-letter;
- Scheduler con OIDC hacia un servicio privado o ejecución de un job.

## 07:20–08:25 — BigQuery y Storage

**Visual:** demo de eventos y luego Flutter.

Explicar:

- BigQuery como destino analítico, no base OLTP;
- partición por fecha y clustering según consultas;
- suscripción BigQuery directa cuando no hay transformación;
- semántica at-least-once y deduplicación;
- URL firmada corta para carga directa a Storage;
- evento de objeto hacia Pub/Sub para procesamiento posterior.

## 08:25–09:25 — Flutter y frontend sin secretos

**Visual:** escenario “Conectar Flutter”.

Prompt en pantalla:

```text
Diseña la carga directa de archivos desde Flutter con una URL firmada de cinco
minutos. La app no puede recibir claves de service account. Define contrato,
validaciones, CORS, IAM y pruebas.
```

Mensaje central: la app usa identidad de usuario; el backend usa identidad de servicio. Las skills de Flutter y Dart viven en repositorios separados.

Después mostrar los dos teléfonos simulados dentro del laboratorio:

- crear un pedido y seguir `Flutter → Cloud Run → Pub/Sub → BigQuery`;
- subir un PDF y seguir `Flutter → Cloud Run → Storage → Pub/Sub`.

Pulsar “Simular flujo completo” y esperar a que cada servicio muestre `verificado ✓`.

## 09:25–10:35 — Guardrails de `gcloud`

**Visual:** `gcloud/SKILL.md`.

Destacar:

- ayuda del subcomando hoja antes de confiar en la sintaxis;
- proyecto y ubicación explícitos;
- listas limitadas o filtradas;
- comandos individuales y no interactivos;
- autorización humana para operaciones destructivas.

**Narración:**

> Esta es probablemente la parte más valiosa. La skill no solo aporta conocimiento: reduce la libertad operacional del agente en los lugares donde una alucinación cuesta dinero o borra recursos.

## 10:35–11:35 — Flujo recomendado

**Visual:** recorrer una última vez la demo completa.

Texto en pantalla, uno por uno:

`Descubrir → Diseñar → Revisar → Planificar → Validar → Autorizar → Ejecutar → Demostrar`

Explicar que diseño y ejecución deben ser turnos distintos, y que la salida debe incluir evidencia reproducible.

## 11:35–12:10 — Cierre

**Visual:** artículo y enlace a la demo en pantalla completa.

**Narración:**

> Google Agent Skills no convierte al agente en administrador autónomo de tu nube. Lo vuelve más disciplinado. Su valor se mide en preguntas correctas, límites visibles y evidencia antes de cambiar producción. En el artículo dejo los prompts, la arquitectura y esta demo interactiva para que puedas repetir el ejercicio.

CTA: visitar el artículo, probar la demo y comparar un mismo prompt con y sin skills.

## Checklist antes de publicar

- [ ] Verificar que el número de skills y el commit citado sigan vigentes.
- [ ] Ocultar datos de la cuenta y del proyecto.
- [ ] Mostrar el aviso “demo conceptual” al comenzar.
- [ ] Agregar capítulos a YouTube.
- [ ] Enlazar artículo, demo, `google/skills` y documentación oficial.
- [ ] Incluir subtítulos revisados manualmente.
- [ ] Exportar a 1080p, H.264, audio AAC y revisar legibilidad en móvil.
