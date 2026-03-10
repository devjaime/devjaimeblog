---
layout: "../../layouts/BlogLayout.astro"
title: "Spec-Driven Development: OpenSpec vs GitHub spec-kit - Análisis Completo"
description: "Una guía exhaustiva sobre Spec-Driven Development comparando OpenSpec y GitHub spec-kit. Aprende cuándo usar cada uno y cómo implementarlos en tus proyectos."
tags: ["Spec-Driven Development", "AI Development", "OpenSpec", "spec-kit", "Software Architecture", "Development Methodology"]
time: 15
featured: true
timestamp: "2026-03-09T01:00:00-0300"
filename: "2026-03-09_spec-driven_development_openspec_vs_speckit"
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

#### 2. Soporte Multi-Agent

| Agent | Estado |
|-------|--------|
| Claude Code | ✅ |
| Cursor | ✅ |
| Windsurf | ✅ |
| Codex CLI | ✅ |
| Gemini CLI | ✅ |
| +15 más | ✅ |

### Ventajas de spec-kit

| Ventaja | Descripción |
|---------|-------------|
| **Flujo automatizado** | specify → plan → tasks → implement |
| **Multi-agent** | Funciona con 20+ AI agents |
| **Generación automática** | Código, tests, docs desde spec |
| **Constitución** | Principios de proyecto versionables |
| **Comunidad activa** | GitHub respalda el proyecto |

---

## Comparación Directa

| Aspecto | OpenSpec | spec-kit |
|---------|----------|----------|
| **Enfoque** | Spec-deltas | Flujo completo SDD |
| **CLI** | No tiene | specify CLI completo |
| **Generación de código** | Manual | Automática |
| **Integración AI** | No nativa | 20+ agents |

### ¿Cuándo Usar OpenSpec?

- ✅ Proyectos donde las specs ya están bien definidas
- ✅ Equipos que prefieren control manual
- ✅ Cuando necesitas spec-deltas claros para reviews

### ¿Cuándo Usar spec-kit?

- ✅ Nuevos proyectos desde cero
- ✅ Desarrollo asistido por AI
- ✅ Prototipado rápido

---

## Conclusión

Spec-Driven Development representa un cambio de paradigma en cómo construimos software. La especificación deja de ser un documento secundario para convertirse en la fuente de verdad.

**OpenSpec** ofrece un enfoque minimalista centrado en spec-deltas claros, ideal para equipos que buscan control y flexibilidad.

**spec-kit** proporciona un toolkit completo que automatiza el flujo completo, integrándose con los principales AI agents del mercado.

Mi recomendación: **Empieza con spec-kit** para nuevos proyectos. La velocidad de desarrollo que ofrece es significativa.

---

## Recursos Adicionales

- [OpenSpec Documentation](https://openspec.dev/docs)
- [spec-kit Repository](https://github.com/github/spec-kit)

---

*¿Te ha gustado este análisis? ¿Tienes experiencia con alguna de estas herramientas? Déjame tus comentarios.*
