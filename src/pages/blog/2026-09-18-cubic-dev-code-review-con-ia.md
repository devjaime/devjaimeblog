---
filename: "2026-09-18-cubic-dev-code-review-con-ia"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-09-18T12:00:00-03:00"
publishDate: "2026-09-18T12:00:00-03:00"
modifiedDate: "2026-09-18T12:00:00-03:00"
title: "Cubic.dev: AI code review para codebases complejos en GitHub"
description: "Cómo pensar e implementar cubic (cubic.dev) para reviews con IA en GitHub: GitHub App, cubic.yaml, custom agents, CLI, privacidad y contrastes honestos con otras herramientas."
author:
  name: "Jaime Hernández"
  url: "https://jaimehernandez.dev"
authorHandle: "devjaime"
tags:
  - "Code Review"
  - "IA"
  - "Cubic"
  - "GitHub"
  - "DevOps"
category: "AI Engineering"
draft: false
time: 12
featured: true
lang: es
type: article
source: human
reviewStatus: published
---

## Cuando el review humano no alcanza el ritmo del código

En equipos chilenos —y en cualquier equipo remoto que vive de GitHub— el ritual del pull request se está tensando. No porque hayamos dejado de valorar el review, sino porque el volumen cambió. Hoy un developer (o un agente) puede producir un diff grande en una tarde. Revisarlo con la misma profundidad de siempre requiere tiempo que la sprint no tiene.

El síntoma es conocido: PRs que esperan días, reviews superficiales (“LGTM” con culpa), y bugs que aparecen en staging porque nadie miró el path raro. La respuesta ingenieril no es “revisar más horas”. Es **cambiar la forma del trabajo**: separar lo que una máquina puede filtrar bien de lo que solo un humano debería decidir.

Ahí entra [cubic](https://www.cubic.dev/) (cubic.dev): un AI code reviewer orientado a GitHub, con énfasis en codebases complejos, reglas de equipo y un flujo que combina PR, IDE y CLI. En este artículo cuento cómo lo entiendo, cómo lo implementaría, y cómo lo contrastaría —sin unfairness— con herramientas como CodeRabbit.

## El problema que cubic dice resolver

Según su documentación y sitio, cubic se posiciona como reviewer de IA para **codebases complejos**: no solo comenta el diff, sino que busca entender impacto más amplio, ofrecer resúmenes de PR, reglas custom (“custom agents”), aprendizaje a partir del feedback del equipo, y opciones para pedir fixes (incluido “Fix with cubic” / coding agents, según configuración).

Su intro de docs afirma ser el top-ranked AI code reviewer en **Code Review Bench** para codebases complejos en GitHub. Eso es un claim de producto basado en un benchmark público; no lo voy a inflar con números que no verifiqué línea a línea. Lo útil para nosotros es la tesis de diseño: **menos ruido, más hallazgos que importan**, y configuración que el equipo puede versionar.

Hoy cubic documenta soporte de **GitHub** (no GitLab/Bitbucket todavía, según FAQ de docs). Si tu org vive en otra plataforma, ese es un filtro inmediato.

## Outer loop humano, inner loop de IA

Antes de botones e YAML, la misma arquitectura mental que uso con cualquier AI reviewer:

| Capa | Responsable | Ejemplos |
| --- | --- | --- |
| Inner loop | IA + automatización | Comentarios en el PR, CLI local, custom rules, linters |
| Outer loop | Humanos | Merge, arquitectura, riesgo de negocio, excepciones |

Cubic puede acelerar el inner loop de forma agresiva (reviews automáticos, ultrareview, auto-approve en modo shadow/live, background/coding agents). Por eso el diseño de **defaults seguros** importa más que la demo. Empieza con review automático y comentarios; deja auto-approve y fixes autónomos para después, con branch protection fuerte.

## Cómo funciona cubic en la práctica

Flujo documentado en el [Developer Quickstart](https://docs.cubic.dev/ai-review/quickstart):

1. Te registras en [cubic.dev/sign-up](https://www.cubic.dev/sign-up) con GitHub.
2. Instalas la GitHub App en los repos que elijas (documentan trial gratuito sin tarjeta).
3. Los **PRs nuevos** se revisan automáticamente.
4. Para PRs ya abiertos: comenta `@cubic-dev-ai review this PR`.
5. Interactúas en hilos: preguntas, pides fixes, das feedback negativo para que aprenda.
6. Opcionalmente instalas CLI e IDE integrations para revisar antes de pushear.

También documentan:

- **Custom agents**: reglas en lenguaje natural (o respaldadas por archivos del repo) para estándares del equipo.
- **PR descriptions** generadas por IA (configurable).
- **Ultrareview**: revisión más profunda, manual o automática según settings.
- **Integraciones** de contexto: Linear, Jira, Asana, Notion, Confluence (traer criterios de aceptación / docs al review).
- **Límite de archivos grandes**: si un PR tiene más de 200 archivos elegibles, cubic selecciona hasta 200 de mayor prioridad.

Eso último es importante: un PR monstruo no recibe magia ilimitada; sigue siendo un olor de proceso.

## Privacidad y seguridad (lo verificable)

La página de producto y las docs de [Privacy & security](https://docs.cubic.dev/account/privacy-security) / intro afirman, entre otros puntos:

- Cifrado en tránsito (TLS 1.2+) y en reposo (AES-256).
- Proveedores de modelos **contractualmente impedidos** de entrenar con el código del cliente.
- SOC 2 (docs: SOC 2 Type I compliant).
- Principio de least privilege en la GitHub App.
- El marketing del sitio habla de no almacenar código / no entrenar; para decisiones de compliance, lee la documentación de Privacy & Security y políticas legales actuales, no solo el landing.

Sobre learning: docs de memory indican aprendizaje desde feedback explícito dirigido a cubic, con alcance de equipo/repo y gestión en dashboard —no “memoria misteriosa entre orgs”.

Para fixes automáticos: cubic puede pushear a la rama del PR o abrir un fix PR, según config. **Nunca** debería ser tu único control: branch protection en `main`, required reviews humanos, y revisión de lo que el agente commitió.

## Implementación paso a paso en un equipo GitHub

### 1. Piloto acotado

Igual que con cualquier GitHub App sensible:

- 1 repo interno no crítico, o un fork de práctica.
- 2–3 developers voluntarios.
- Una semana de observación: calidad de findings, ruido, tiempo hasta primer comentario útil.

Define “éxito” en lenguaje de equipo: *¿atrapó un bug real que el review humano habría pasado?*, *¿redujo idas y vueltas por nits?*, *¿alguien lo silenció por spam?*

### 2. Instalar y disparar el primer review

1. [Sign up](https://www.cubic.dev/sign-up) con GitHub.
2. Selecciona repos del piloto.
3. Abre un PR nuevo **con un defecto deliberado** (null check faltante, API mal usada, log con dato sensible simulado).
4. Espera el review automático, o en un PR viejo comenta:

```text
@cubic-dev-ai review this PR
```

5. Prueba interacción:

```text
@cubic-dev-ai Can you explain why this is a concern?
```

(En español también puedes preguntar; el punto es el tag y el hilo.)

Si pides un fix:

```text
@cubic-dev-ai Please fix this
```

Documentan que genera el fix y lo pushea a la rama del PR (revisa antes de mergear). Para un PR separado: `@cubic-dev-ai open a fix PR`.

### 3. Versionar política con `cubic.yaml`

Cubic permite configurar desde el dashboard **o** con un archivo `cubic.yaml` en la raíz del repo. La [doc de cubic.yaml](https://docs.cubic.dev/configure/cubic-yaml) es clara:

- Se lee desde la **default branch** (no desde feature branches).
- Prioridad: repo YAML > org YAML (`{org}/cubic-config`) > UI > defaults.
- Puedes exportar settings actuales desde la UI (copy/download).

Plantilla alineada con el template oficial (claves documentadas):

```yaml
# yaml-language-server: $schema=https://cubic.dev/schema/cubic-repository-config.schema.json

version: 1

reviews:
  enabled: true
  sensitivity: medium
  incremental_commits: true
  check_drafts: false
  architecture_diagrams: false
  resolve_threads_when_addressed: true
  auto_approve_behavior: disabled
  auto_approve: disabled
  ultrareview: manual
  custom_instructions: |
    Prioriza seguridad, contratos de API y regresiones.
    Evita nits de estilo cubiertos por linters del CI.
  ignore:
    files:
      - "**/generated/**"
      - "**/dist/**"
      - "**/node_modules/**"
    pr_labels:
      - skip-review
      - WIP
    max_changed_lines: 5000
  custom_rules:
    - name: Sin secretos ni PII en logs
      description: |
        Señala logs o errores que puedan filtrar tokens, passwords,
        RUT u otros datos personales. Sugiere redaction.
      include:
        - "src/**"
    - name: Guía de errores HTTP
      description: Enforce el manejo de errores documentado.
      file_paths:
        - docs/error-handling.md
      include:
        - "src/api/**"

pr_descriptions:
  generate: true
  instructions: |
    Resume impacto, riesgos y cómo probar. En español si el PR está en español.

issues:
  fix_with_cubic_buttons: true
  pr_comment_fixes: true
  fix_commits_to_pr: true
  coding_agent_provider: cubic
```

Decisiones deliberadas en este template:

- **`auto_approve_*` deshabilitado** al inicio. Si más adelante quieres experimentar, docs permiten `auto_approve_behavior: shadow` antes de `live`.
- **`check_drafts: false`** para no gastar atención (ni cuota) en borradores.
- **`ultrareview: manual`**: usa ultrareview cuando el PR toca auth/pagos/migraciones, no en cada typo fix.
- **`custom_rules`**: aquí es donde cubic se siente “de equipo”. Escribe reglas que ya pelean en reviews orales.

Para defaults de toda la org: crea un repo `cubic-config` con su `cubic.yaml` y asegúrate de que cubic tenga acceso a ese repo. Los repos individuales pueden overridear campos.

### 4. CLI local (inner loop aún más temprano)

Docs del quickstart:

```bash
curl -fsSL https://cubic.dev/install | bash
cubic review
```

(`cubic review -b` para comparar la rama contra su base.)

La idea es cazar issues **antes del push**. La misma docs advierten que el CLI prioriza velocidad/local iteration y puede ser menos exhaustivo que el review cloud del PR: usa ambos en capas, no como exclusivos.

También documentan conexión a IDEs/agentes (Cursor, Claude Code, VS Code, Codex, Gemini CLI, etc.). Eso acerca findings al momento de editar; sigue siendo tu responsabilidad mergear con criterio.

### 5. Integraciones de contexto (con cuidado)

Conectar Linear/Jira/Notion/Confluence puede mejorar el review si el PR referencia issues con acceptance criteria. Las propias docs advierten: en proyectos open source, el contenido de issues sensibles podría filtrarse a comentarios públicos. En repos públicos, sé conservador con esas integraciones.

### 6. Ritual de equipo

Propongo un contrato corto:

1. El autor atiende findings claros de cubic antes de pedir review humano.
2. Si un finding es falso, se responde en el hilo para enseñar preferencias.
3. Ultrareview o review humano profundo obligatorio en paths críticos (auth, billing, migrations).
4. Auto-approve solo después de shadow mode y con reglas de exclusión explícitas.
5. Fixes de agente = diff a revisar, no “merge porque el bot lo escribió”.

## Contraste breve con CodeRabbit (sin unfairness)

Ambos viven en el mismo problema: **AI code review en GitHub**. Diferencias útiles, basadas en lo que cada uno documenta públicamente:

| Dimensión | CodeRabbit | cubic |
| --- | --- | --- |
| Plataformas | GitHub y también GitLab (según FAQ/producto) | GitHub (GitLab/Bitbucket “not yet” en docs) |
| Config en repo | `.coderabbit.yaml` | `cubic.yaml` (+ org `cubic-config`) |
| Perfil de ruido | Profiles `quiet` / `chill` / `assertive` | `sensitivity` low/medium/high |
| Énfasis visible | Ecosystem amplio (tools/linters, triage, finishing touches, multi-plataforma) | Custom agents, ultrareview, CLI/IDE, learning de seniors |
| Privacidad (docs) | No reteniene código post-review salvo caching; SOC 2 Type II (FAQ) | No training en proveedores; SOC 2 Type I (docs); ver Privacy & Security |

No voy a declarar un “ganador”. La elección suele depender de stack (¿solo GitHub?), de si valoran más un ecosistema de checks/tools vs. reglas custom + flujo de fix agents, de compliance, y de cómo se siente el ruido en **tu** codebase después de una semana de piloto. Evalúa ambos con el mismo set de PRs reales.

## Riesgos y límites

- **Ruido**: `sensitivity: high` sin custom instructions puede generar fatiga. Baja sensibilidad y escribe reglas específicas.
- **Falsos negativos**: un PR “limpio” según cubic no garantiza correctitud de negocio.
- **PRs enormes**: tope de 200 archivos elegibles en un review; parte el trabajo.
- **Auto-approve mal configurado**: puede chocar con branch protection o dar falsa seguridad. Usa shadow primero.
- **Agentes que escriben código**: útiles, pero aumentan la superficie de cambios no leídos. Exige review humano del fix.
- **Precios y cuotas**: el sitio publica planes Starter/Team/Pro/Enterprise y open source free; los números y qué cuenta como “línea revisada” deben leerse en la página de pricing actual (docs de FAQ del sitio explican reviewed lines). No los congeles en un blog.

## Conclusión

Cubic.dev es una apuesta clara por el AI code review **dentro de GitHub**, con configuración versionable, reglas de equipo y un camino desde “comenta el PR” hasta “ayúdame a arreglarlo / revísalo en el CLI”. Implementarlo bien es menos instalar un bot y más **diseñar el proceso**:

1. Piloto en pocos repos.
2. `cubic.yaml` con defaults conservadores.
3. Custom agents que capturen lo que ya discuten los seniors.
4. CLI/IDE como capas tempranas, PR cloud como capa de verdad compartida.
5. Humanos dueños del outer loop: merge, riesgo, excepciones.

La IA puede acortar la distancia entre “abrí el PR” y “alguien con contexto lo miró en serio”. No puede —ni debería— firmar por nosotros. Si tu equipo está ahogado en cola de reviews, un piloto honesto de cubic (y, si aplica, una comparación lado a lado con CodeRabbit) es una hora de ingeniería que suele pagar más que otra reunión sobre “cómo mejorar la calidad”.

**Referencias oficiales**

- Producto: [https://www.cubic.dev/](https://www.cubic.dev/)
- Intro / features: [https://docs.cubic.dev/ai-review/introduction](https://docs.cubic.dev/ai-review/introduction)
- Quickstart: [https://docs.cubic.dev/ai-review/quickstart](https://docs.cubic.dev/ai-review/quickstart)
- `cubic.yaml`: [https://docs.cubic.dev/configure/cubic-yaml](https://docs.cubic.dev/configure/cubic-yaml)
- Privacy & security: [https://docs.cubic.dev/account/privacy-security](https://docs.cubic.dev/account/privacy-security)
