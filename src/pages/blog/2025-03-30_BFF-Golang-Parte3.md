------
filename: "2025-03-30_BFF-Golang-Parte3"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-07T08:00:00-0300"
draft: false
time: 15
featured: false
---

---

# BFF con Go (Parte 3): Documentación, Seguridad y Despliegue 📄🔐📦

Luego de construir un Backend For Frontend con Go + OpenAPI y extenderlo con pruebas, concurrencia y resiliencia, es momento de prepararlo para producción.

En esta tercera parte, te mostraré cómo:

- 📄 Agregar Swagger UI embebido para documentar y testear tu API
- 🔐 Incluir autenticación con JWT
- 📦 Dockerizar tu BFF para desplegarlo en la nube

---

## 📄 1. Integrar Swagger UI

Agrega Swagger UI como servidor embebido usando [`github.com/swaggo/http-swagger`](https://github.com/swaggo/http-swagger):

1. Instala la dependencia:

```bash
go get -u github.com/swaggo/http-swagger
```

2. Agrega el handler en tu `main.go`:

```go
import httpSwagger "github.com/swaggo/http-swagger"

func main() {
  r := chi.NewRouter()
  r.Get("/swagger/*", httpSwagger.WrapHandler)
  // Registra tus handlers de API
}
```

3. Sirve tu spec OpenAPI en `/swagger/index.html` 📘

---

## 🔐 2. Autenticación JWT

Instala `github.com/golang-jwt/jwt/v5` para manejar tokens:

```bash
go get github.com/golang-jwt/jwt/v5
```

Agrega un middleware para validar tokens:

```go
func JWTMiddleware(next http.Handler) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    authHeader := r.Header.Get("Authorization")
    tokenStr := strings.TrimPrefix(authHeader, "Bearer ")

    token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
      return []byte("tu_clave_secreta"), nil
    })

    if err != nil || !token.Valid {
      http.Error(w, "Token inválido", http.StatusUnauthorized)
      return
    }

    next.ServeHTTP(w, r)
  })
}
```

Y protégelo en tus rutas:

```go
r.With(JWTMiddleware).Get("/users/{id}", handler.GetUserById)
```

---

## 📦 3. Dockerizar el BFF

Creamos un archivo `Dockerfile` simple:

```Dockerfile
FROM golang:1.21 AS builder
WORKDIR /app
COPY . .
RUN go build -o bff ./cmd/main.go

FROM debian:bullseye-slim
WORKDIR /app
COPY --from=builder /app/bff ./bff
EXPOSE 8080
CMD ["./bff"]
```

Y un `.dockerignore`:

```dockerignore
**/*.go
**/*.mod
Dockerfile
tmp/*
```

Construye y corre tu contenedor:

```bash
docker build -t bff-go .
docker run -p 8080:8080 bff-go
```

---

## 🚀 Próximos pasos sugeridos

- 📊 Métricas con Prometheus
- 🔄 CI/CD para producción
- 🔍 Validación avanzada de JWT con claims
- 🔐 Roles y scopes para control de acceso

---

Con esto, tu BFF en Go está listo para producción: documentado, seguro y desplegable en la nube 🚀

Sígueme en [codeIA.cl](https://codeia.cl) y comenta si quieres que exploremos una integración con frontend o autenticación federada. 💬

