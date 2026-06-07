------
filename: "2025-05-09_go-oracle-docker-debug-story"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-07T08:00:00-0300"
draft: false
time: 15
featured: false
---

---

## 🛤️ Introducción

A veces, lo que parece un simple "conecta tu app a la base de datos" se convierte en una historia épica de errores, frustraciones, café y aprendizaje técnico real. En esta historia, te cuento paso a paso cómo logré conectar una aplicación Go con una base de datos Oracle XE dentro de un contenedor Docker, y cómo llegué a depurarla exitosamente desde VSCode… en un Mac M1.

---

## 🚧 El reto

Quería algo simple:

- Conectar Go a Oracle XE
- Usar Docker para no instalar nada directamente en mi sistema
- Depurar la aplicación con Delve desde VSCode

Pero si estás en un Mac con chip M1, ya sabes que nada es tan directo como parece…

---

## 🧱 Primeros pasos

Comencé descargando la imagen oficial `gvenzl/oracle-xe:21-slim`. Sabía que no existía soporte nativo ARM64 para Oracle XE en Docker, así que obligatoriamente tenía que usar la imagen AMD64 bajo emulación con Rosetta o Colima.

Creé este `docker-compose.yml`:

```yaml
services:
  oracle-xe:
    image: gvenzl/oracle-xe:21-slim
    ports:
      - "1521:1521"
    environment:
      ORACLE_PASSWORD: test123
```

Todo se veía bien… hasta que no lo fue.

---

## 🔥 Primeros errores

```bash
ORA-12547: TNS:lost contact
DPI-1047: Cannot locate a 64-bit Oracle Client library
```

Investigué y descubrí que para que Go pueda conectar a Oracle, se necesita el Oracle Instant Client y que esté correctamente vinculado al runtime de Go.

Así que tuve que preparar un `Dockerfile` con Oracle Instant Client:

```Dockerfile
COPY instantclient-basiclite-linux.x64-19.27.0.0.0dbru.zip /opt/oracle/instantclient.zip
...
ENV LD_LIBRARY_PATH=/opt/oracle/instantclient
```

¡Pero sorpresa! El archivo ZIP no era descargable directamente con `curl`. Tuve que descargarlo manualmente desde el sitio de Oracle, porque exige login.

---

## 🔧 Ajustes, ajustes, más ajustes…

Agregué Delve para depurar:

```Dockerfile
RUN go install github.com/go-delve/delve/cmd/dlv@latest
```

Luego preparé un `launch.json` en VSCode para hacer attach:

```json
{
  "type": "go",
  "request": "attach",
  "remotePath": "/app",
  "port": 40000,
  "host": "localhost"
}
```

Y ¡funcionó!... en teoría. Porque cuando lancé la app con:

```bash
CMD ["dlv", "exec", "./app", "--headless", "--listen=:40000"]
```

Apareció el clásico error:

```bash
could not launch process: open /app/app: no such file or directory
```

¿La causa? Estaba olvidando compilar el binario antes. Agregué `go build -o app .` en el Dockerfile y finalmente el ejecutable fue creado y detectado.

---

## 🧪 Probar la conexión

Código Go:

```go
dsn := "system/test123@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=oracle-xe)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)))"
```

Usar `localhost` no funcionó dentro del contenedor, pero usar el nombre del servicio Docker sí.

Finalmente, ejecuté esta query de prueba:

```go
db.Query("SELECT 1 FROM DUAL")
```

Y… 🎉 ¡Conexión exitosa!

---

## 💡 Aprendizajes clave

- En Mac M1/M2, usa imágenes `amd64` con `--platform linux/amd64`
- No intentes bajar el ZIP del Instant Client con `curl`: Oracle lo bloquea
- El binario debe estar en `/app/app` si usas `dlv exec`
- Usa el nombre del servicio Docker, no `localhost`, para acceder a Oracle desde otro contenedor

---

## ✅ Resultado final

Mi aplicación Go se conectó exitosamente a Oracle XE en Docker, y pude depurar paso a paso desde VSCode usando Delve.

Sí, me tomó más de lo planeado. Sí, me topé con errores oscuros. Pero ahora puedo repetir este entorno en minutos… y tú también.

---

## 🧠 ¿Quieres el código base listo para usar?

Contáctame o revisa la versión empaquetada de este proyecto con Docker Compose + Oracle XE + Go + Debug en VSCode.

