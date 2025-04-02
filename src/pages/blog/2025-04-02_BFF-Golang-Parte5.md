---
layout: "../../layouts/BlogLayout.astro"
title: "BFF con Go (Parte 5): Observabilidad, Feature Flags y Entornos"
description: "En esta quinta parte exploramos cómo mejorar la observabilidad de tu BFF en Go, manejar entornos de forma segura y aplicar feature flags."
tags: ["golang", "bff", "observabilidad", "feature flags", "entornos", "configuración"]
time: 10
featured: true
timestamp: "2025-04-02T10:00:00-0300"
filename: "2025-04-02_BFF-Golang-Parte5"
---

# BFF con Go (Parte 5): Observabilidad, Feature Flags y Entornos 👁️‍🗨️🚩🌍

Después de asegurar, testear, documentar y desplegar nuestro BFF en Go, en esta quinta parte nos enfocamos en **cómo mantenerlo operativo, flexible y adaptable en producción**.

Veremos cómo:

- 👁️‍🗨️ Añadir observabilidad con logs estructurados y trazas
- 🚩 Aplicar feature flags sin redeploys
- 🌍 Separar entornos de forma segura con archivos `.env` y variables de entorno

---

## 👁️‍🗨️ 1. Observabilidad con logs estructurados y trazabilidad

Usa `logrus` o `zap` para logging estructurado:

```bash
go get github.com/sirupsen/logrus
```

```go
import log "github.com/sirupsen/logrus"

log.SetFormatter(&log.JSONFormatter{})
log.WithFields(log.Fields{
  "endpoint": "/users",
  "status": 200,
}).Info("Request procesado")
```

Para trazabilidad distribuida, puedes integrar OpenTelemetry:

```bash
go get go.opentelemetry.io/otel/sdk
```

Y propagar `trace_id` por headers para seguir requests entre microservicios.

---

## 🚩 2. Feature Flags

Utiliza herramientas como [Unleash](https://www.getunleash.io/) o [Flagsmith](https://flagsmith.com/) para activar o desactivar funcionalidades dinámicamente:

```go
if featureFlags.IsEnabled("nueva_pagina") {
  renderNewPage()
} else {
  renderOldPage()
}
```

También puedes hacerlo con simples variables de entorno mientras creces:

```go
if os.Getenv("FEATURE_NUEVA_PAGINA") == "true" {
  // Activar nueva funcionalidad
}
```

Esto evita redeploys y permite pruebas A/B.

---

## 🌍 3. Separación de entornos con `.env`

Usa [`github.com/joho/godotenv`](https://github.com/joho/godotenv) para cargar variables de entorno:

```bash
go get github.com/joho/godotenv
```

Crea un archivo `.env`:

```
ENV=development
PORT=8080
JWT_SECRET=superclave
```

Y cárgalo en `main.go`:

```go
import "github.com/joho/godotenv"

dotenv.Load()
port := os.Getenv("PORT")
```

Esto permite tener `.env.development`, `.env.production`, etc., y cargar según el entorno.

---

## 🚀 Cierre

Tu BFF ahora es:
- 🔍 Observable
- ⚙️ Configurable por entorno
- 🚩 Flexible con feature flags

Ya tienes una base profesional para operar en producción y escalar funcionalidad de forma segura.

¿Te gustaría una Parte 6 conectando con frontend en React o Flutter? Escríbeme en [codeIA.cl](https://codeia.cl) o déjame tu comentario. 👨‍💻✨

