---
description: "En sistemas distribuidos modernos, especialmente aquellos con múltiples interfaces frontend (web, mobile, IoT), es común enfrentarse a la necesidad de…"
---
filename: "2025-03-28_BFF-Golang-OpenAPI"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-07T08:00:00-0300"
draft: false
time: 15
featured: false
---

---

# Construyendo un BFF en Go con OpenAPI: Casos de Uso y Buenas Prácticas 🚀

En sistemas distribuidos modernos, especialmente aquellos con múltiples interfaces frontend (web, mobile, IoT), es común enfrentarse a la necesidad de adaptar los datos y funcionalidades del backend para cada canal. Aquí es donde entra en juego el **Backend For Frontend (BFF)**, un patrón que separa la lógica de presentación y facilita la orquestación entre servicios y clientes.

En este artículo, te mostraré cómo construir un BFF en **Golang** utilizando **OpenAPI**, compartiendo ejemplos bien estructurados, casos de uso y buenas prácticas para mantener tu proyecto limpio y escalable.

---

## 🧠 ¿Qué es un BFF y cuándo usarlo?

Un **BFF** actúa como intermediario entre el frontend y los microservicios del backend. Su objetivo es:

- Agregar, adaptar o transformar datos desde distintos servicios.
- Proveer seguridad (autenticación/autorización).
- Exponer una API optimizada para cada tipo de cliente.

**📌 Casos de uso típicos:**

- Una app móvil que requiere datos más livianos o en otro formato.
- Evitar que el frontend conozca detalles de múltiples microservicios.
- Centralizar la autenticación o la gestión de sesiones.
- Minimizar llamadas de red agregando o preprocesando datos en el BFF.

---

## 🧰 ¿Por qué usar Go y OpenAPI para un BFF?

**Go** es eficiente, rápido, con tipado estático y perfecto para construir APIs. Su ecosistema incluye herramientas robustas para definir contratos con OpenAPI, como:

- [`go-swagger`](https://github.com/go-swagger/go-swagger)
- [`oapi-codegen`](https://github.com/deepmap/oapi-codegen)
- [`kin-openapi`](https://github.com/getkin/kin-openapi)

OpenAPI permite definir tu contrato de API primero (spec-first), o bien generarlo desde tu código (code-first), asegurando documentación clara, validación automática y generación de clientes.

---

## ✨ Estructura del Proyecto

```bash
bff-service/
├── api/
│   ├── openapi.yaml          # Definición de la API
│   └── api.gen.go            # Código generado con oapi-codegen
├── cmd/
│   └── main.go               # Entrada principal del BFF
├── handlers/
│   └── user_handler.go       # Handlers HTTP
├── internal/
│   └── services/             # Lógica de negocio y conexiones externas
└── go.mod / go.sum
```

## Ejemplo de OpenAPI (openapi.yaml)
```yaml
openapi: 3.0.0
info:
  title: User BFF API
  version: "1.0"
paths:
  /users/{id}:
    get:
      summary: Obtener usuario por ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Usuario encontrado
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        email:
          type: string
```

## ⚙️ Generar Código con oapi-codegen

Instalamos la herramienta:

```bash
go install github.com/deepmap/oapi-codegen/cmd/oapi-codegen@latest
```

Creamos el archivo api/api.gen.go:

```bash
oapi-codegen -generate types,chi-server -package api api/openapi.yaml > api/api.gen.go
```

## 🧩 Handler de ejemplo (handlers/user_handler.go)

```go
package handlers

import (
  "context"
  "net/http"
  "github.com/yourname/bff-service/api"
)

type UserHandler struct{}

func (h *UserHandler) GetUserById(ctx context.Context, w http.ResponseWriter, r *http.Request, id string) {
  user := api.User{
    Id:    id,
    Name:  "Jane Doe",
    Email: "jane@example.com",
  }
  api.JSONResponse(w, http.StatusOK, user)
}
```

## 🚀 main.go (Registro del router)
```go
package main

import (
  "log"
  "net/http"

  "github.com/go-chi/chi/v5"
  "github.com/yourname/bff-service/api"
  "github.com/yourname/bff-service/handlers"
)

func main() {
  r := chi.NewRouter()
  handler := &handlers.UserHandler{}

  api.RegisterHandlers(r, handler)

  log.Println("🚀 BFF corriendo en http://localhost:8080")
  log.Fatal(http.ListenAndServe(":8080", r))
}
```


## ✅ Buenas prácticas
Valida contratos OpenAPI al inicio del servidor.

Versiona tu API: usa rutas como /v1/users.

Testea con mocks generados desde OpenAPI.

Documenta tus endpoints y errores esperados.

No mezcles lógica de negocio con handlers.


## 🧪 Prueba con Swagger UI
Puedes usar herramientas como Swagger UI o integrarlo en tu servidor para testear los endpoints directamente desde la documentación.


## 💬 Conclusión
Construir un BFF en Go con OpenAPI es una excelente manera de garantizar escalabilidad, claridad en los contratos de servicio y eficiencia para los equipos frontend. Este enfoque mejora la mantenibilidad, facilita la colaboración entre equipos y reduce la complejidad del cliente.

Si te interesa llevar esta implementación a producción o automatizar su despliegue en la nube con CI/CD, ¡déjamelo saber! 👨‍💻