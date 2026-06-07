---
filename: '2025-03-09_Vistas-Materializadas--Cron-Jobs-y-Microservicios-en-Go-2d3a35c4391f'
layout: '../../layouts/BlogLayout.astro'

timestamp: '2025-03-09T08:00:00-0300'
title: 'Vistas Materializadas Cron Jobs Y Microservicios En Go'
description: 'Vistas Materializadas, Cron Jobs y Microservicios en Go'
publishDate: '2025-03-09T08:00:00-0300'
author:
name: 'Jaime Hernandez'
url: 'https://devjaime.cl'
tags:
  - "Blog"
category: 'Blog'
draft: false
time: 15
featured: false
---


Vistas Materializadas, Cron Jobs y Microservicios en Go
=======================================================

Las vistas materializadas son una herramienta poderosa en bases de datos relacionales, especialmente en PostgreSQL, para mejorar el…

* * *

### Vistas Materializadas, Cron Jobs y Microservicios en Go

![](https://cdn-images-1.medium.com/max/800/1*mxCxErqTczpxdscXzihOuQ.png)

> Las **vistas materializadas** son una herramienta poderosa en bases de datos relacionales, especialmente en **PostgreSQL**, para mejorar el rendimiento de consultas en sistemas con grandes volúmenes de datos. Sin embargo, para mantenerlas actualizadas, es necesario contar con un mecanismo de **actualización periódica**, como un **cron job** o una **Cloud Function**.

En este blog, exploraremos cómo integrar **vistas materializadas** con **microservicios en Go**, utilizando **cron jobs** en Kubernetes o **Cloud Functions** en GCP/AWS para refrescarlas automáticamente.

### 1\. ¿Qué es una Vista Materializada?

Una vista materializada es similar a una vista normal, pero los datos se almacenan físicamente en la base de datos. Esto permite mejorar la velocidad de consultas a cambio de requerir actualizaciones periódicas para reflejar los cambios en los datos originales.

**Ejemplo de creación en PostgreSQL:**

CREATE MATERIALIZED VIEW ventas\_diarias AS  
SELECT fecha, SUM(monto) AS total\_ventas  
FROM transacciones  
GROUP BY fecha;

Para actualizar esta vista:

REFRESH MATERIALIZED VIEW ventas\_diarias;

### 2\. Actualización con un Microservicio en Go

Podemos usar **pgx** para ejecutar la actualización desde un servicio en **Go**.

### 2.1 Configuración del Cliente PostgreSQL

Instalamos el driver:

go get github.com/jackc/pgx/v5

Código en Go para actualizar la vista:

package main  
import (  
 "context"  
 "fmt"  
 "log"  
 "time"  
 "github.com/jackc/pgx/v5/pgxpool"  
)  
const dbURL = "postgres://user:password@host:5432/dbname"  
func refreshMaterializedView(db \*pgxpool.Pool) {  
 ctx, cancel := context.WithTimeout(context.Background(), 5\*time.Second)  
 defer cancel()  
 \_, err := db.Exec(ctx, "REFRESH MATERIALIZED VIEW ventas\_diarias;")  
 if err != nil {  
  log.Fatalf("Error actualizando vista: %v", err)  
 }  
 fmt.Println("Vista materializada actualizada correctamente")  
}  
func main() {  
 db, err := pgxpool.New(context.Background(), dbURL)  
 if err != nil {  
  log.Fatalf("No se pudo conectar a la base de datos: %v", err)  
 }  
 defer db.Close()  
 refreshMaterializedView(db)  
}

3\. Automatización con un Cron Job en Kubernetes

Si usamos Kubernetes, podemos definir un **CronJob** que ejecute nuestro microservicio periódicamente:

apiVersion: batch/v1  
kind: CronJob  
metadata:  
  name: refrescar-vista  
spec:  
schedule: '0 \* \* \* \*'
  jobTemplate:  
    spec:  
      template:  
        spec:  
          containers:  
          \- name: refrescar-vista  
            image: mi-registro/miservicio:latest  
            command: \["/app/main"\]  
          restartPolicy: OnFailure

### 4\. Alternativa con Cloud Functions en GCP

Podemos usar una **Cloud Function** en **Go** que se ejecute con Cloud Scheduler:

### 4.1 Código para la Cloud Function

package refrescarvista  
import (  
 "context"  
 "database/sql"  
 "log"  
 "net/http"  
 \_ "github.com/lib/pq"  
)  
const dbURL = "postgres://user:password@host:5432/dbname"  
func RefreshView(w http.ResponseWriter, r \*http.Request) {  
 db, err := sql.Open("postgres", dbURL)  
 if err != nil {  
  http.Error(w, "Error conectando a la BD", http.StatusInternalServerError)  
  return  
 }  
 defer db.Close()  
 \_, err = db.Exec("REFRESH MATERIALIZED VIEW ventas\_diarias;")  
 if err != nil {  
  http.Error(w, "Error actualizando vista", http.StatusInternalServerError)  
  return  
 }  
 w.Write(\[\]byte("Vista actualizada"))  
}

### 4.2 Programación con Cloud Scheduler

Podemos crear una tarea en **Cloud Scheduler** para ejecutar esta función periódicamente:

gcloud scheduler jobs create http refrescar-vista \\  
    \--schedule="0 \* \* \* \*" \\  
    \--uri="https://REGION-PROJECT\_ID.cloudfunctions.net/refrescarvista" \\  
    \--http-method=GET

### 5\. Conclusión

Las vistas materializadas son una excelente opción para mejorar el rendimiento de consultas en bases de datos relacionales. En este blog, vimos cómo integrarlas con **Go** usando:

*   Un **microservicio en Go** para actualizar la vista.
*   Un **CronJob en Kubernetes** para automatizar la tarea.
*   Una **Cloud Function en GCP** con **Cloud Scheduler** como alternativa serverless.

Esto permite una arquitectura flexible y escalable para manejar grandes volúmenes de datos de manera eficiente. 🚀

By [Jaime Hernández](https://medium.com/@devjaime) on [March 9, 2025](https://medium.com/p/2d3a35c4391f).

[Canonical link](https://medium.com/@devjaime/vistas-materializadas-cron-jobs-y-microservicios-en-go-2d3a35c4391f)

Exported from [Medium](https://medium.com) on March 15, 2025.