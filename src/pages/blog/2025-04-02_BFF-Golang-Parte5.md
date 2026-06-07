---
filename: "2025-04-02_BFF-Golang-Parte5"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-07T08:00:00-0300"
title: "Usa logrus o zap para logging estructurado:"
description: "Usa logrus o zap para logging estructurado:"
publishDate: "2026-06-07T08:00:00-0300"
author:
  name: "Jaime Hernandez"
  url: "https://devjaime.cl"
tags:
  - "Blog"
category: "Blog"
draft: false
time: 15
featured: false
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

