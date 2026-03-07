---
layout: "../../layouts/BlogLayout.astro"
title: "Flujo Completo B2B de Vocari.cl: De la Demo al Test Vocacional"
description: "Tutorial detallado del flujo B2B para colegios: desde la solicitud de demo hasta que los estudiantes completan su test vocacional con IA."
tags: ["Vocari", "B2B", "Educación", "Colegios", "Orientación Vocacional", "Tutorial"]
time: 8
featured: false
timestamp: "2026-03-06T21:00:00-0300"
filename: "2026-03-06_Flujo-Completo-Vocari-B2B"
---

# Flujo Completo B2B de Vocari.cl: De la Demo al Test Vocacional

*Tutorial detallado para implementar Vocari.cl en tu establecimiento educativo*

* * *

## Introducción

Este tutorial te guiará paso a paso por el flujo completo de Vocari.cl para colegios. Desde que un establecimiento solicita una demo hasta que los estudiantes completan su test vocacional, cubriremos cada etapa del proceso.

* * *

## 🚀 Resumen del Flujo

```
Solicitar Demo → Contacto Comercial → Alta de Colegio → 
Invitar Estudiantes → Estudiantes activan cuenta → 
Completan Test → Dashboard Orientador → Resultados
```

* * *

## Paso 1: Solicitar Demo

### Landing B2B

El colegio visita la página B2B en **[vocari.cl/colegios](https://vocari.cl/colegios)**.

Esta página incluye:
- Descripción del servicio para instituciones
- Beneficios del dashboard administrativo
- Botón "Solicitar Demo" que abre un email a hola@vocari.cl
- Enlace a demo interactiva del dashboard

### Demo Dashboard

En **[vocari.cl/demo-colegio](https://vocari.cl/demo-colegio)** pueden ver un dashboard de ejemplo con datos simulados:
- 156 estudiantes totales
- 89 completados, 42 en progreso, 25 pendientes
- Gráficos de perfiles dominantes (RIASEC)
- Carreras más populares

Esto permite visualizar el producto sin necesidad de contacto comercial.

* * *

## Paso 2: Contacto Comercial

Cuando el colegio está interesado:

1. **Reunión de presentación** (30 min)
   - Demostración del dashboard
   - Explicación de precios y planes
   - Responder preguntas técnicas

2. **Propuesta comercial**
   - Plan personalizado según número de estudiantes
   - Período de piloto sugerido (2-3 meses)
   - Inclinación de orientadores incluidos

3. **Confirmación**
   - El colegio confirma interés
   - Se agenda sesión de onboarding técnico

* * *

## Paso 3: Alta del Colegio

El administrador de Vocari.cl (super_admin) crea la institución en el sistema.

### Datos requeridos:
```
- Nombre del colegio
- Código único (ej: COLEGIO-001)
- Tipo: particular / municipal / subvencionado
- Comuna y Región
- Contacto: nombre, email, teléfono
- Máximo de estudiantes permitidos
- Fecha inicio/fin del piloto
```

Esto se hace desde el panel de admin en `/admin/institutions`.

### Asignar Admin del Colegio

Se crea un usuario con rol `admin_colegio` vinculado a la institución. Este usuario tendrá acceso al dashboard B2B.

* * *

## Paso 4: Invitar Estudiantes

El admin del colegio tiene dos opciones para agregar estudiantes:

### Opción A: Invitación individual

Desde el dashboard, el orientador puede invitar estudiante por estudiante:
- Email del estudiante
- Nombre completo
- Curso (3° Medio / 4° Medio)
- Código de estudiante (opcional)

### Opción B: Importación masiva (CSV)

Para colegios con muchos estudiantes:
1. Preparar CSV con formato: `email,nombre,curso,codigo_estudiante`
2. Subir desde el dashboard
3. El sistema procesa y crea códigos de activación

### Código de Activación

Por cada estudiante se genera un código único (ej: `VOC-ABC123`). Este código:
- Se envía por email al estudiante
- Es necesario para activar la cuenta
- Vence si no se usa en X días

* * *

## Paso 5: Activación de Cuenta del Estudiante

Cuando el estudiante recibe su código:

1. **Estudiante visita** [vocari.cl](https://vocari.cl)
2. **Hace clic** en "Activar mi cuenta" o ingresa código
3. **Completa registro**:
   - Nombre y apellido
   - Email (debe coincidir con el convite)
   - Contraseña
4. **Cuenta se activa** con el código
5. **Queda vinculado** al colegio automáticamente

### Vista del Estudiante

Una vez logueado, el estudiante ve:
- Su progreso en el test
- Recomendaciones personalizadas
- Chat con asistente de IA
- Opción de comprar informe profesional

* * *

## Paso 6: Completar el Test Vocacional

### El Test RIASEC

El test consiste en 52 preguntas (4 por par de dimensiones RIASEC):
- **R**ealista
- **I**nvestigativo
- **A**rtístico
- **S**ocial
- **E**mpresarial
- **C**onvencional

### Flujo del test:

```
1. Pantalla inicial → "Comenzar Test"
2. Pregunta 1-52 →Seleccionar entre 2 opciones
3. Progress bar → Muestra avance
4. Finalización → Cálculo automático de perfil
5. Resultados → Muestra perfil dominante
```

### Resultado Inmediato

Al terminar, el estudiante ve:
- Su perfil RIASEC (ej: "SIA" = Social-Investigativo-Artístico)
- Descripción del perfil
- Carreras relacionadas con su perfil (gratis)
- Chat con IA para preguntas

* * *

## Paso 7: Dashboard del Orientador

El orientador del colegio accede a su dashboard en `/admin/colegio` y puede:

### 📊 Estadísticas
- Total estudiantes invitados
- Completados vs en progreso vs pendientes
- Tasa de finalización

### 📈 Análisis
- Perfiles RIASEC dominantes
- Carreras más elegidas por curso
- Comparativa con otros cursos

### 👥 Gestión de Estudiantes
- Buscar por nombre
- Filtrar por curso o estado
- Ver perfil individual de cada estudiante

### 📄 Informes
- DescargarCSV con todos los datos
- Ver resultados agregados
- Exportar para análisis externo

* * *

## Paso 8: Comprar Informe Profesional

### Opciones disponibles:

| Informe | Precio | Incluye |
|---------|--------|---------|
| **Esencial** | $10.990 | PDF perfil, 10-15 carreras, datos MINEDUC |
| **Premium** | $14.990 | Todo + explicación visual, resumen animado, prioridad |

### Flujo de compra:

1. Estudiante hace clic en "Comprar Informe"
2. Selecciona tipo de informe
3. Redirección a PayPal
4. Pago exitoso → generación automática del PDF
5. PDF disponible en dashboard + email

* * *

## Diagrama del Flujo Completo

```
┌─────────────────────────────────────────────────────────────────┐
│                     FLUJO B2B VOCARI.CL                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────┐    ┌──────────────┐    ┌──────────────────┐    │
│  │ Landing  │───▶│  Solicitar   │───▶│  Contacto        │    │
│  │ /colegios│    │    Demo      │    │  Comercial       │    │
│  └──────────┘    └──────────────┘    └──────────────────┘    │
│                                              │                 │
│                                              ▼                 │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────────┐ │
│  │  Dashboard   │◀───│    Alta      │◀───│  Alta Colegio    │ │
│  │   Colegio    │    │  Admin       │    │  (super_admin)   │ │
│  └──────────────┘    └──────────────┘    └──────────────────┘ │
│         │                    │                                  │
│         ▼                    ▼                                  │
│  ┌──────────────┐    ┌──────────────┐                         │
│  │  Invitar     │───▶│  Estudiantes │                         │
│  │  Estudiantes │    │  reciben     │                         │
│  └──────────────┘    │  códigos     │                         │
│                      └──────────────┘                         │
│                             │                                   │
│                             ▼                                   │
│                      ┌──────────────┐                         │
│                      │  Estudiante  │                         │
│                      │  activa      │                         │
│                      │  cuenta      │                         │
│                      └──────────────┘                         │
│                             │                                   │
│                             ▼                                   │
│                      ┌──────────────┐                         │
│                      │  Completa    │                         │
│                      │  test RIASEC │                         │
│                      └──────────────┘                         │
│                             │                                   │
│         ┌───────────────────┴───────────────────┐             │
│         ▼                                       ▼             │
│  ┌──────────────┐                      ┌──────────────┐      │
│  │  Resultados  │                      │   Comprar    │      │
│  │  inmediatos  │                      │   Informe    │      │
│  └──────────────┘                      └──────────────┘      │
│         │                                       │             │
│         └───────────────────┬───────────────────┘             │
│                             ▼                                  │
│                      ┌──────────────┐                         │
│                      │  Dashboard   │                         │
│                      │  Orientador  │                         │
│                      │  (stats +    │                         │
│                      │   gestión)   │                         │
│                      └──────────────┘                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

* * *

## API y Servicios Involucrados

### institutionService.js

```javascript
// Funciones principales del flujo B2B

// Gestión de instituciones
createInstitution(data)           // Alta de colegio
getInstitutionById(id)            // Ver detalles
updateInstitution(id, updates)    // Modificar datos

// Invitación de estudiantes
inviteStudent(instId, student)    // Individual
batchInviteStudents(instId, list) // CSV masivo
getInstitutionStudents(instId)    // Listar

// Estadísticas
getInstitutionStats(instId)       // Dashboard del orientador
getInstitutionStudents(instId)    // Con resultados de test

// Activación
activateAccountWithCode(code, userId)  // Estudiante activa
checkActivationCode(code)              // Verificar código
```

### Tablas involucradas

| Tabla | Función |
|-------|---------|
| `institutions` | Datos del colegio |
| `user_profiles` | Perfiles de estudiantes |
| `test_results` | Resultados RIASEC |
| `payments` | Transacciones de informes |
| `reports` | Informes comprados |

* * *

## Checklist de Implementación

Para un colegio nuevo, completar:

- [ ] Landing B2B visitada por el cliente
- [ ] Solicitud de demo enviada
- [ ] Reunión comercial realizada
- [ ] Colegio dado de alta en el sistema
- [ ] Admin de colegio configurado
- [ ] Estudiantes importados (CSV o individual)
- [ ] Códigos de activación enviados
- [ ] Estudiantes activan cuentas
- [ ] Estudiantes completan test
- [ ] Dashboard del orientador con datos
- [ ] Primera compra de informe (test end-to-end)

* * *

## Conclusión

El flujo B2B de Vocari.cl está diseñado para ser:

1. **Simple** - few clicks para dar de alta un colegio
2. **Escalable** - importación masiva de estudiantes
3. **Transparente** - dashboard con estadísticas en tiempo real
4. **Automatizado** - activación y resultados instantáneos

¿Tienes preguntas sobre el flujo? ¿Necesitas ayuda para implementar Vocari.cl en tu colegio?

**Contáctanos: hola@vocari.cl**

---

*¿Quieres probar Vocari.cl? Visita [vocari.cl](https://vocari.cl) y realiza el test vocacional gratuitamente.*

*¿Eres un colegio interesado? Solicita una demo en [vocari.cl/colegios](https://vocari.cl/colegios)*
