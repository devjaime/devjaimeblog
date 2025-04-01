---
layout: "../../layouts/BlogLayout.astro"
title: "BFF con Go (Parte 4): Métricas, CI/CD y Control de Acceso"
description: "Completa tu Backend For Frontend con monitoreo, despliegue continuo y control de roles usando Go."
tags: ["golang", "bff", "prometheus", "jwt", "ci/cd", "roles"]
time: 10
featured: true
timestamp: "2025-04-01T10:00:00-0300"
filename: "2025-04-01_BFF-Golang-Parte4"
---

# BFF con Go (Parte 4): Métricas, CI/CD y Control de Acceso 📊🔄🔐

Ya tienes un BFF en Go documentado, seguro y dockerizado. En esta cuarta parte, te mostraré cómo llevarlo al siguiente nivel:

- 📊 Exponer métricas con Prometheus
- 🔄 Automatizar despliegues con GitHub Actions
- 🔐 Validar roles y scopes en JWT para control de acceso

---

## 📊 1. Exponer métricas con Prometheus

Instala Prometheus middleware para Go:

```bash
go get github.com/prometheus/client_golang/prometheus/promhttp
```

Agrega el endpoint `/metrics` en `main.go`:

```go
import "github.com/prometheus/client_golang/prometheus/promhttp"

r.Handle("/metrics", promhttp.Handler())
```

Esto permite que Prometheus scrapee métricas de tu app, como:
- Requests totales
- Latencias
- Uso de memoria

Puedes agregar tus propias métricas:

```go
var totalUsers = prometheus.NewCounter(
  prometheus.CounterOpts{
    Name: "total_user_requests",
    Help: "Total de requests a /users",
  },
)

func init() {
  prometheus.MustRegister(totalUsers)
}
```

---

## 🔄 2. CI/CD con GitHub Actions

Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy BFF

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-go@v4
        with:
          go-version: '1.21'
      - run: go build -o bff ./cmd/main.go

  docker:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/checkout@v3
      - run: docker build -t bff-go .
      - run: echo "Desplegado exitosamente 🎉"
```

Esto automatiza el build en cada push a `main`. Puedes extenderlo para publicar en un registro de contenedores o desplegar a GCP/AWS.

---

## 🔐 3. Control de acceso con Roles en JWT

Supongamos que tu JWT incluye un `role` en los claims:

```json
{
  "sub": "user123",
  "role": "admin"
}
```

Puedes validar así:

```go
claims := token.Claims.(jwt.MapClaims)
role := claims["role"].(string)
if role != "admin" {
  http.Error(w, "No autorizado", http.StatusForbidden)
  return
}
```

Esto te permite proteger rutas específicas según el tipo de usuario:

```go
r.With(JWTMiddleware, AdminOnly).Get("/admin/dashboard", handler.AdminDashboard)
```

---

## 🚀 ¿Qué sigue?

Tu BFF ya está:
- 🧪 Testeado
- 🔁 Concurrencia optimizada
- 🔐 Seguro con JWT
- 📄 Documentado con Swagger
- 📦 Dockerizado
- 📊 Monitoreado con Prometheus
- 🔄 Automatizado con CI/CD

💡 Puedes integrarlo ahora con frontend React, Flutter o aplicaciones móviles.

---

Sígueme en [codeIA.cl](https://codeia.cl) para más contenido práctico de arquitectura con Go y microservicios. ¿Quieres una Parte 5 enfocada en monitoreo avanzado o feature flags? ¡Te leo!

