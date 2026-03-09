---
title: "Spec-Driven Development: OpenSpec vs GitHub spec-kit - Análisis Completo"
description: "Una guía exhaustiva sobre Spec-Driven Development comparando OpenSpec y GitHub spec-kit. Aprende cuándo usar cada uno y cómo implementarlos en tus proyectos."
publishDate: 2026-03-09
author: 
  name: "Jaime Hernández"
  url: "https://devjaime.cl"
tags: 
  - "Spec-Driven Development"
  - "AI Development"
  - "OpenSpec"
  - "spec-kit"
  - "Software Architecture"
  - "Development Methodology"
category: "Development"
image: "/images/spec-driven-development-cover.png"
draft: false
---

# Spec-Driven Development: OpenSpec vs GitHub spec-kit

El desarrollo de software está experimentando una transformación fundamental. Por décadas, el código ha sido el "rey" - las especificaciones servían al código, no al revés. Pero con el auge de la IA, esta dinámica está cambiando.

En este artículo exploraremos dos herramientas que lideran esta revolución: **OpenSpec** y **GitHub spec-kit**. Ambas prometen transformar cómo escribimos software, pero con enfoques distintos.

---

## ¿Qué es Spec-Driven Development (SDD)?

Antes de profundizar en las herramientas, entendamos el concepto:

**Enfoque tradicional:**
```
PRD → Diseño → Código → Testing
```
Las especificaciones son documentos que guían la implementación, pero el código es la "verdad final".

**Spec-Driven Development invierte esta relación:**
```
Especificación (ejecutable) → Plan de implementación → Código
```
La especificación se convierte en la fuente de verdad. El código es simplemente la expresión de esa especificación en un lenguaje particular.

### ¿Por qué ahora?

Tres tendencias hacen SDD no solo posible sino necesario:

1. **IA ha alcanzado un umbral** donde especificaciones en lenguaje natural pueden generar código funcional
2. **La complejidad del software crece exponencialmente** - mantener sistemas alineados manualmente es insostenible
3. **El ritmo de cambio se acelera** - los pivots ya no son excepcionales, son esperados

---

## OpenSpec: Spec-Deltas Ligero

### ¿Qué es OpenSpec?

OpenSpec es un framework ligero centrado en **spec-deltas**: documentos que capturan cambios en los requerimientos del sistema de forma clara y versionable.

**Sitio web:** [openspec.dev](https://openspec.dev)

### Características Principales

#### 1. Spec Deltas
Cada cambio en los requerimientos se captura como un "delta" que muestra exactamente qué cambió:

```diff
### Requirement: Session expiration
- The system SHALL expire sessions after a configured duration.
+ The system SHALL support configurable session expiration periods.

#### Scenario: Default session timeout
- GIVEN a user has authenticated
- - WHEN 24 hours pass without activity
+ - WHEN 24 hours pass without "Remember me"
- THEN invalidate the session token
+ #### Scenario: Extended session with remember me
+ - GIVEN user checks "Remember me" at login
+ - WHEN 30 days have passed
+ - THEN invalidate the session token
+ - AND clear the persistent cookie
```

Esto permite a los desarrolladores entender rápidamente cómo están modificando el sistema.

#### 2. Gherkin-like Syntax
Utiliza sintaxis similar a Gherkin (Cucumber) para escenarios:
- **Given**: Precondiciones
- **When**: Acciones
- **Then**: Resultados esperados

#### 3. Enfoque Minimalista
- No requiere CLI compleja
- Se centra en el documento de especificación
- Compatible con cualquier flujo de trabajo

### ¿Cómo Usar OpenSpec?

#### Paso 1: Define tu Feature
Escribe tus requerimientos usando la sintaxis de OpenSpec:

```
Feature: User Authentication

### Requirement: Login
- The system SHALL allow users to authenticate with email and password

#### Scenario: Successful login
- GIVEN a registered user exists
- WHEN the user submits valid credentials
- THEN the user SHALL be granted access
- AND a session token SHALL be returned

#### Scenario: Failed login
- GIVEN a registered user exists
- WHEN the user submits invalid credentials
- THEN the user SHALL be denied access
- AND an error message SHALL be displayed
```

#### Paso 2: Versiona los Cambios
Cada modificación genera un delta legible:
```diff
### Requirement: Password reset
+ The system SHALL support password reset via email
```

#### Paso 3: Implementa desde la Spec
Usa la especificación como fuente de verdad para tu código.

### Ventajas de OpenSpec

| Ventaja | Descripción |
|---------|-------------|
| **Ligero** | Sin CLI compleja, focus en documentos |
| **Diff claro** | Spec-deltas facilitan code reviews |
| **Flexible** | Se adapta a cualquier workflow |
| **Minimal learning curve** | Sintaxis familiar (Gherkin) |
| **Versionable** | Changes son fáciles de seguir |

### Desventajas

- No tiene generación automática de código
- Requiere más trabajo manual
- Menor integración con AI agents
- Comunidad más pequeña

---

## GitHub spec-kit: El Toolkit Completo

### ¿Qué es spec-kit?

spec-kit es un toolkit de código abierto de GitHub que automatiza el flujo completo de Spec-Driven Development. Incluye CLI con comandos específicos y soporte para múltiples AI agents.

**Repositorio:** [github.com/github/spec-kit](https://github.com/github/spec-kit)

### Características Principales

#### 1. Comandos CLI Especializados

spec-kit ofrece un flujo estructurado:

```
specify → plan → tasks → implement
```

##### `/speckit.constitution`
Crea los principios rectores del proyecto:

```
/speckit.constitution Create principles focused on code quality, 
testing standards, user experience consistency, and performance requirements
```

##### `/speckit.specify`
Describe qué quieres construir (el qué, no el cómo):

```
/speckit.specify Build an application that can help me organize my photos 
in separate photo albums. Albums are grouped by date and can be 
re-organized by dragging and dropping on the main page.
```

##### `/speckit.plan`
Proporciona stack tecnológico y decisiones arquitectónicas:

```
/speckit.plan The application uses Vite with minimal number of libraries. 
Use vanilla HTML, CSS, and JavaScript. Images are stored locally 
with metadata in SQLite.
```

##### `/speckit.tasks`
Genera lista de tareas ejecutables desde el plan:

```
/speckit.tasks
```

##### `/speckit.implement`
Ejecuta todas las tareas y construye el feature.

#### 2. Soporte Multi-Agent

| Agent | Estado | Notas |
|-------|--------|-------|
| Claude Code | ✅ | Completamente soportado |
| Cursor | ✅ | IDE-based |
| Windsurf | ✅ | IDE-based |
| Codex CLI | ✅ | OpenAI |
| Gemini CLI | ✅ | Google |
| Qwen Code | ✅ | Alibaba |
| GitHub Copilot | ✅ | VS Code extension |
| And 15+ more | ✅ | Including Kiro, Amp, Roo, etc. |

#### 3. Rama de feature automática
- Número automático de features (001, 002...)
- Creación de branches semánticos
- Estructura de directorios `specs/[feature-name]/`

#### 4. Documentación Automática
Genera automáticamente:
- `plan.md` - Plan de implementación
- `data-model.md` - Modelos de datos
- `contracts/` - Contratos de API
- `quickstart.md` - Guía de validación
- `tasks.md` - Lista de tareas

### ¿Cómo Usar spec-kit?

#### Instalación

```bash
# Instalación persistente (recomendado)
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git

# O ejecutar directamente
uvx --from git+https://github.com/github/spec-kit.git specify init <PROJECT_NAME>
```

#### Flujo Completo

```bash
# 1. Inicializar proyecto
specify init my-project --ai claude

# 2. Crear constitución (opcional)
/speckit.constitution Create principles focused on code quality

# 3. Definir feature
/speckit.specify Real-time chat system with message history

# 4. Definir plan técnico
/speckit.plan PostgreSQL for history, Redis for presence, WebSocket

# 5. Generar tareas
/speckit.tasks

# 6. Implementar
/speckit.implement
```

En 15 minutos tienes:
- ✅ Especificación completa con user stories
- ✅ Plan de implementación con decisiones técnicas
- ✅ Contratos de API y modelos de datos
- ✅ Escenarios de test
- ✅ Todo versionado en branch

### Comparativa de Tiempo

| Fase | Tradicional | spec-kit |
|------|-------------|----------|
| PRD | 2-3 horas | 5 min |
| Diseño | 2-3 horas | 5 min |
| Setup | 30 min | Automático |
| Specs técnicas | 3-4 horas | 5 min |
| Plan de tests | 2 horas | Incluido |
| **Total** | ~12 horas | **15 min** |

### Ventajas de spec-kit

| Ventaja | Descripción |
|---------|-------------|
| **Flujo automatizado** | specify → plan → tasks → implement |
| **Multi-agent** | Funciona con 20+ AI agents |
| **Generación automática** | Código, tests, docs desde spec |
| **Constitución** | Principios de proyecto versionables |
| **Comunidad activa** | GitHub respalda el proyecto |
| **Documentación rica** | Plan, modelos, contratos automáticos |

### Desventajas

- Curva de aprendizaje mayor
- Requiere AI agent configurado
- Más opinionado (menos flexible)
- Dependencia de herramientas específicas

---

## Comparación Directa

| Aspecto | OpenSpec | spec-kit |
|---------|----------|----------|
| **Enfoque** | Spec-deltas | Flujo completo SDD |
| **CLI** | No tiene | specify CLI completo |
| **Generación de código** | Manual | Automática |
| **Integración AI** | No nativa | 20+ agents |
| **Curva de aprendizaje** | Baja | Media |
| **Flexibilidad** | Alta | Media |
| **Comunidad** | Pequeña | GitHub-backed |
| **Best for** | Specs minimalistas | Desarrollo completo AI-first |

### ¿Cuándo Usar OpenSpec?

- ✅ Proyectos donde las specs ya están bien definidas
- ✅ Equipos que prefieren control manual
- ✅ Cuando necesitas spec-deltas claros para reviews
- ✅ Flujos de trabajo existentes que no quieres cambiar
- ✅ Proyectos con requerimientos muy estables

### ¿Cuándo Usar spec-kit?

- ✅ Nuevos proyectos desde cero
- ✅ Desarrollo asistido por AI
- ✅ Equipos que quieren automatizar el flujo completo
- ✅ Prototipado rápido
- ✅ Cuando necesitas generación automática de código

---

## ¿Qué Empresas Usan Spec-Driven Development?

### GitHub (Obvio)
El propio spec-kit viene de GitHub. Lo usan internamente para:
- Desarrollo de nuevos features
- Documentación automática
- Consistencia entre productos

### Microsoft
Han adoptado principios similares con:
- **Copilot Studio** - Specs como fuente de verdad
- **Azure AI Studio** - Prompts como especificaciones ejecutables

### Anthropic
- **Claude Code** - Integración nativa con spec-kit
- El concepto de "artifacts" sigue principios de SDD

### Startups y Proyectos Open Source

**Casos documentados:**
- **Linear** - Specs como fuente de verdad para features
- **Vercel** - Next.js app dir sigue principios de spec
- **Supabase** - Specifications para APIs

### Demostraciones de la Comunidad

spec-kit tiene demos disponibles:
- [.NET CLI tool (Greenfield)](https://github.com/mnriem/spec-kit-dotnet-cli-demo)
- [Spring Boot + React (Greenfield)](https://github.com/mnriem/spec-kit-spring-react-demo)
- [ASP.NET CMS extension (Brownfield)](https://github.com/mnriem/spec-kit-aspnet-brownfield-demo)

---

## Análisis: ¿Cuál Elegir?

### Para Proyectos Personales o MVP

**Recomendación: spec-kit**

La automatización completa acelera significativamente el desarrollo. En 15 minutos tienes una base funcional.

### Para Proyectos Empresariales

**Recomendación: Híbrido**

1. Usa **OpenSpec** para documentación de requisitos
2. Integra con **spec-kit** para generación de código
3. Mantén control manual donde sea necesario

### Para Equipos con AI Agents Existentes

**Recomendación: spec-kit**

La integración nativa con Claude Code, Cursor, Windsurf, etc. hace el flujo natural.

### Para Requisitos Muy Estables

**Recomendación: OpenSpec**

Los spec-deltas son perfectos cuando necesitas trackear cambios específicos sin regenerar código.

---

## Conclusión

Spec-Driven Development representa un cambio de paradigma en cómo construimos software. La especificación deja de ser un documento secundario para convertirse en la fuente de verdad.

**OpenSpec** ofrece un enfoque minimalista centrado en spec-deltas claros, ideal para equipos que buscan control y flexibilidad.

**spec-kit** proporciona un toolkit completo que automatiza el flujo completo, integrándose con los principales AI agents del mercado.

Mi recomendación: **Empieza con spec-kit** para nuevos proyectos. La velocidad de desarrollo que ofrece es significativa. A medida que tu equipomadure, puedes adaptar el flujo a tus necesidades.

El futuro del desarrollo de software será cada vez más "spec-first". Las herramientas evolucionan rápido - stay tuned para actualizaciones.

---

## Recursos Adicionales

- [OpenSpec Documentation](https://openspec.dev/docs)
- [spec-kit Repository](https://github.com/github/spec-kit)
- [Spec-Driven Development Guide](https://github.com/github/spec-kit/blob/main/spec-driven.md)
- [Video Overview - spec-kit](https://www.youtube.com/watch?v=a9eR1xsfvHg)

---

*¿Te ha gustado este análisis? ¿Tienes experiencia con alguna de estas herramientas? Déjame tus comentarios.*

*Tags: #SpecDrivenDevelopment #OpenSpec #speckit #AIDevelopment #SoftwareArchitecture*
