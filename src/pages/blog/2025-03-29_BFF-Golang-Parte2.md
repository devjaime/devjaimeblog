---
filename: "2025-03-29_BFF-Golang-Parte2"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-07T08:00:00-0300"
title: "Creamos un test para nuestro handler principal:"
description: "Creamos un test para nuestro handler principal:"
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


## 🧪 1. Agregando Tests con `httptest`

Creamos un test para nuestro handler principal:

```go
func TestGetUserById(t *testing.T) {
  r := chi.NewRouter()
  h := &handlers.UserHandler{}
  api.RegisterHandlers(r, h)

  req := httptest.NewRequest(http.MethodGet, "/users/123", nil)
  w := httptest.NewRecorder()

  r.ServeHTTP(w, req)

  if w.Code != http.StatusOK {
    t.Errorf("esperado 200, obtenido %d", w.Code)
  }

  var user api.User
  json.NewDecoder(w.Body).Decode(&user)
  if user.Id != "123" {
    t.Errorf("ID esperado '123', obtenido %s", user.Id)
  }
}
```

---

## 🔁 2. Concurrencia con Goroutines y Channels

Supongamos que el BFF necesita llamar a dos servicios remotos al mismo tiempo:

```go
type RemoteUser struct {
  Profile api.User
  Score   int
}

func FetchCombinedData(ctx context.Context, id string) (*RemoteUser, error) {
  chUser := make(chan api.User)
  chScore := make(chan int)
  errCh := make(chan error, 2)

  go func() {
    user, err := fetchUserService(id)
    if err != nil {
      errCh <- err
      return
    }
    chUser <- user
  }()

  go func() {
    score, err := fetchScoreService(id)
    if err != nil {
      errCh <- err
      return
    }
    chScore <- score
  }()

  var user api.User
  var score int

  for i := 0; i < 2; i++ {
    select {
    case u := <-chUser:
      user = u
    case s := <-chScore:
      score = s
    case err := <-errCh:
      return nil, err
    }
  }

  return &RemoteUser{Profile: user, Score: score}, nil
}
```

---

## 🧱 3. Manejo de Resiliencia (Timeouts + Retry)

Usamos contexto y un patrón básico de retry con backoff:

```go
func fetchUserService(id string) (api.User, error) {
  var user api.User
  for i := 0; i < 3; i++ {
    ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()

    req, _ := http.NewRequestWithContext(ctx, "GET", "http://user-service/users/"+id, nil)
    res, err := http.DefaultClient.Do(req)
    if err == nil && res.StatusCode == http.StatusOK {
      json.NewDecoder(res.Body).Decode(&user)
      return user, nil
    }

    time.Sleep(time.Duration(i+1) * 500 * time.Millisecond)
  }
  return user, fmt.Errorf("falló la conexión con user-service")
}
```

---

## 📦 ¿Y la arquitectura hexagonal?

Estas prácticas encajan perfecto si separas:

- **handlers/** ➝ Capa de entrada (HTTP)
- **services/** ➝ Capa de lógica de negocio
- **clients/** ➝ Acceso a servicios remotos

Puedes usar `wire` o `fx` para inyección de dependencias. Esto permite testear cada capa por separado sin acoplamientos fuertes.

---

## 🧩 Próximos pasos

- 📄 Agregar Swagger UI embebido
- 🔐 Incluir autenticación JWT
- 📦 Dockerizar el proyecto para despliegue en la nube

---

¿Te gustó esta segunda parte? Comenta o escribeme para incluir una tercera parte. 🚀

