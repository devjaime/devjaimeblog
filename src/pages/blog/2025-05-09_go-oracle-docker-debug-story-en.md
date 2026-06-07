------
filename: "2025-05-09_go-oracle-docker-debug-story-en"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-07T08:00:00-0300"
draft: false
time: 15
featured: false
---

---

## 🛤️ Introduction

Sometimes what seems like a simple "connect your app to the database" turns into an epic story of errors, frustration, coffee, and real technical learning. In this journey, I’ll walk you step by step through how I connected a Go application to an Oracle XE database inside a Docker container and how I finally debugged it from VSCode… on an M1 Mac.

---

## 🚧 The challenge

My goal was simple:

- Connect Go to Oracle XE
- Use Docker to avoid local installations
- Debug the Go application with Delve from VSCode

But if you're using a Mac with an M1 chip, you already know things aren't always straightforward…

---

## 🧱 First steps

I started by pulling the official image `gvenzl/oracle-xe:21-slim`. I knew Oracle XE doesn't have native ARM64 support for Docker, so I had to run it as AMD64 using Rosetta or Colima.

Here was my first `docker-compose.yml`:

```yaml
services:
  oracle-xe:
    image: gvenzl/oracle-xe:21-slim
    ports:
      - "1521:1521"
    environment:
      ORACLE_PASSWORD: test123
```

Everything seemed fine… until it wasn’t.

---

## 🔥 First errors

```bash
ORA-12547: TNS:lost contact
DPI-1047: Cannot locate a 64-bit Oracle Client library
```

I found out that Go needs the Oracle Instant Client installed and linked at runtime to connect to Oracle databases.

So, I had to write a Dockerfile that included Instant Client:

```Dockerfile
COPY instantclient-basiclite-linux.x64-19.27.0.0.0dbru.zip /opt/oracle/instantclient.zip
...
ENV LD_LIBRARY_PATH=/opt/oracle/instantclient
```

But wait! The ZIP file couldn’t be downloaded directly with `curl`. Oracle requires login to access it.

---

## 🔧 Tuning, tweaking, fixing…

I added Delve to debug:

```Dockerfile
RUN go install github.com/go-delve/delve/cmd/dlv@latest
```

Then I configured VSCode’s `launch.json` for remote attach:

```json
{
  "type": "go",
  "request": "attach",
  "remotePath": "/app",
  "port": 40000,
  "host": "localhost"
}
```

And it worked!... theoretically. When I launched the app with:

```bash
CMD ["dlv", "exec", "./app", "--headless", "--listen=:40000"]
```

I got the dreaded:

```bash
could not launch process: open /app/app: no such file or directory
```

The reason? I forgot to build the binary. I added `go build -o app .` in the Dockerfile and it finally worked.

---

## 🧪 Testing the connection

My Go code included the following connection string:

```go
dsn := "system/test123@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=oracle-xe)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)))"
```

Using `localhost` didn’t work inside the container, but `oracle-xe` (the Docker service name) did.

My test query:

```go
db.Query("SELECT 1 FROM DUAL")
```

🎉 And it worked!

---

## 💡 Key takeaways

- On Apple Silicon, always use `--platform linux/amd64`
- You can’t download Oracle Instant Client ZIPs with `curl` — do it manually
- Your binary must exist at `/app/app` for Delve to debug
- Use service names like `oracle-xe` instead of `localhost` in Docker

---

## ✅ Final result

My Go app connected successfully to Oracle XE in Docker and I was able to debug it line by line in VSCode with Delve.

It took way longer than expected. I faced obscure errors. But now, I can reproduce this setup in minutes… and so can you.

---

## 🧠 Want the full working repo?

Reach out or check out the packaged version of this project with Docker Compose + Oracle XE + Go + Delve + VSCode Debugging.
