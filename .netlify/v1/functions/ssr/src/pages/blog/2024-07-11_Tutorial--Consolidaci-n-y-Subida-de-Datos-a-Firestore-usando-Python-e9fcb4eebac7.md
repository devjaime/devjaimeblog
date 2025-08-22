---
layout: "../../layouts/BlogLayout.astro"
title: "Tutorial: Consolidación y Subida de Datos a Firestore usando Python"
description: ""
tags: ["code", "Firestore", "python"]
time: 4
featured: true
timestamp: "2024-07-11T12:20:32-0300"
filename: "2024-07-11_Tutorial--Consolidaci-n-y-Subida-de-Datos-a-Firestore-usando-Python-e9fcb4eebac7"
---

Tutorial: Consolidación y Subida de Datos a Firestore usando Python
===================================================================

Introducción

* * *

### Tutorial: Consolidación y Subida de Datos a Firestore usando Python

![](https://cdn-images-1.medium.com/max/800/0*lLKGzMnDZlwKlG_E)

### Introducción

En este tutorial, aprenderemos cómo consolidar múltiples tablas en archivos JSON en un único archivo, y luego subir esos datos a Firestore usando un script en Python. Esto es útil para integrar datos dispersos en una base de datos centralizada y realizar operaciones de datos más eficientes.

### Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente instalado y configurado:

1.  **Python 3.x**
2.  **Google Cloud SDK** (incluyendo `gcloud` y `gsutil`)
3.  **Credenciales de una cuenta de servicio de Google Cloud**

### Paso 1: Configurar el Entorno Virtual de Python

Primero, vamos a crear y activar un entorno virtual para gestionar nuestras dependencias de Python.

python3 -m venv myenv  
source myenv/bin/activate

### Paso 2: Instalar las Dependencias Necesarias

Instalaremos la biblioteca `google-cloud-firestore` que nos permitirá interactuar con Firestore.

pip install google-cloud-firestore

### Paso 3: Obtener Dumps de las Tablas desde PostgreSQL

Vamos a crear un script Bash para obtener dumps de las tablas desde una base de datos PostgreSQL y convertir esos dumps en archivos JSON.

### Script Bash para Obtener Dumps y Convertirlos a JSON

Guarda el siguiente script en un archivo llamado `export_to_json.sh`.

#!/bin/bash  
  
\# Configuración  
HOST="localhost"  
PORT="5432"  
USER="tu\_usuario"  
DB="tu\_base\_de\_datos"  
DIRECTORY="RIM\_FIRESTORE"  
  
\# Crear el directorio si no existe  
mkdir -p $DIRECTORY  
  
\# Listar todas las tablas  
TABLES=$(psql -h $HOST -p $PORT -U $USER -d $DB -t -c "SELECT tablename FROM pg\_tables WHERE schemaname='public';")  
  
\# Exportar cada tabla a JSON  
for TABLE in $TABLES; do  
  echo "Exportando tabla: $TABLE"  
  psql -h $HOST -p $PORT -U $USER -d $DB -c "\\copy (SELECT row\_to\_json(t) FROM (SELECT \* FROM $TABLE) t) TO '$DIRECTORY/$TABLE.json'"  
done

### Ejecutar el Script Bash

Haz que el script sea ejecutable y ejecútalo:

chmod +x export\_to\_json.sh  
./export\_to\_json.sh

### Paso 4: Crear el Script Python para Consolidar y Subir los Datos a Firestore

Vamos a crear un script Python llamado `consolidate_upload.py`. Este script consolidará los archivos JSON y subirá los datos a Firestore.

### Código del Script

Guarda el siguiente código en un archivo llamado `consolidate_upload.py`.

import os  
import json  
import sys  
from collections import defaultdict  
from google.cloud import firestore  
from google.oauth2 import service\_account  
  
FILES\_TO\_CONSOLIDATE = \[  
    "1.json",  
    "2.json",  
    "3.json",  
    "4.json",  
\]  
  
def consolidate\_files(directory):  
    consolidated\_data = \[\]  
    all\_fields = set()  
  
    \# Leer todos los archivos y recolectar todos los campos posibles  
    for filename in FILES\_TO\_CONSOLIDATE:  
        file\_path = os.path.join(directory, filename)  
        if not os.path.exists(file\_path):  
            print(f"Archivo {filename} no encontrado en el directorio {directory}, se omitirá.")  
            continue  
          
        table\_name = os.path.splitext(filename)\[0\]  \# Remover la extensión .json  
        with open(file\_path, 'r') as f:  
            for line in f:  
                try:  
                    document = json.loads(line.strip())  
                    document\["source\_table"\] = table\_name  \# Añadir campo con el nombre de la tabla sin .json  
                    all\_fields.update(document.keys())  
                    consolidated\_data.append(document)  
                except json.JSONDecodeError as e:  
                    print(f"Error al decodificar JSON en {file\_path}: {e}")  
  
    \# Homologar la estructura de todos los documentos  
    homologated\_data = \[\]  
    for document in consolidated\_data:  
        homologated\_document = {field: document.get(field, None) for field in all\_fields}  
        homologated\_document\["source\_table"\] = document\["source\_table"\]  \# Asegurar que el campo 'source\_table' esté presente  
        homologated\_data.append(homologated\_document)  
  
    return homologated\_data, all\_fields  
  
def save\_consolidated\_data(data, output\_file):  
    with open(output\_file, 'w') as f:  
        json.dump(data, f, indent=4)  
    print(f"Datos consolidados guardados en {output\_file}")  
  
def preview\_data(data, fields, num\_records\_per\_table=5):  
    print("Previsualización de los datos consolidados:")  
    print(f"Total de registros: {len(data)}")  
    print(f"Campos homologados: {', '.join(fields)}")  
  
    \# Previsualizar los registros por tabla de origen  
    tables = defaultdict(list)  
    for record in data:  
        tables\[record\["source\_table"\]\].append(record)  
  
    for table\_name, records in tables.items():  
        print(f"\\nTabla: {table\_name}")  
        for record in records\[:num\_records\_per\_table\]:  
            print(record)  
        if len(records) > num\_records\_per\_table:  
            print(f"...y {len(records) - num\_records\_per\_table} registros más.")  
  
def upload\_to\_firestore(data, credentials\_path, collection\_name="consolidate\_mpn"):  
    \# Configurar las credenciales del servicio  
    credentials = service\_account.Credentials.from\_service\_account\_file(credentials\_path)  
    db = firestore.Client(credentials=credentials)  
  
    total\_docs = len(data)  
    collection\_ref = db.collection(collection\_name)  
    for i, document in enumerate(data):  
        doc\_id = str(document.get('id', ''))  
        if doc\_id:  
            doc\_ref = collection\_ref.document(doc\_id)  
            doc = doc\_ref.get()  
            if doc.exists:  
                source\_table = document\["source\_table"\]  
                print(f"Documento con ID {doc\_id} de la tabla {source\_table} ya existe en la colección {collection\_name}. Se eliminará y se volverá a crear.")  
                doc\_ref.delete()  
  
            \# Insertar documento en Firestore  
            doc\_ref.set(document)  
        else:  
            collection\_ref.add(document)  
  
        \# Mostrar el progreso  
        print(f"Progreso: {i + 1}/{total\_docs} documentos subidos ({(i + 1) / total\_docs \* 100:.2f}%)")  
      
    print("Datos consolidados subidos a Firestore.")  
  
if \_\_name\_\_ == "\_\_main\_\_":  
    if len(sys.argv) != 3:  
        print("Uso: python consolidate\_upload.py <directorio> <ruta\_a\_credenciales\_json>")  
        sys.exit(1)  
  
    directory = sys.argv\[1\]  
    credentials\_path = sys.argv\[2\]  
    output\_file = "consolidated\_data.json"  
  
    \# Consolidar archivos  
    consolidated\_data, all\_fields = consolidate\_files(directory)  
  
    \# Guardar datos consolidados en un archivo JSON  
    save\_consolidated\_data(consolidated\_data, output\_file)  
  
    \# Previsualizar datos consolidados  
    preview\_data(consolidated\_data, all\_fields)  
  
    \# Preguntar al usuario si desea subir los datos a Firestore  
    user\_input = input("¿Desea subir los datos consolidados a Firestore? (s/n): ")  
    if user\_input.lower() == 's':  
        upload\_to\_firestore(consolidated\_data, credentials\_path)  
    else:  
        print("Subida cancelada.")

### Descripción del Script

**Consolidar Archivos JSON**:

*   Lee varios archivos JSON de un directorio.
*   Añade un campo `source_table` para indicar el archivo de origen de cada registro.
*   Homologa la estructura de los documentos para asegurarse de que todos los registros tienen los mismos campos.

**Guardar Datos Consolidados**:

*   Guarda los datos consolidados en un archivo JSON.

**Previsualizar los Datos**:

*   Muestra una previsualización de los datos consolidados en la consola.

**Subir Datos a Firestore**:

*   Sube los datos consolidados a Firestore en la colección `consolidate_mpn`.
*   Muestra el progreso de la subida en la consola.
*   Si un documento ya existe, lo elimina y lo vuelve a crear.

### Paso 4: Ejecutar el Script

Ejecuta el script pasando el directorio que contiene los archivos JSON y la ruta al archivo de credenciales:

python consolidate\_upload.py RIM\_FIRESTORE /ruta/a/tus/credenciales.json

### Estructura de Directorios y Archivos

Asegúrate de que tu estructura de directorios se vea así:

proyecto/  
│  
├── myenv/  (entorno virtual)  
├── consolidate\_upload.py  
├── /ruta/a/tus/credenciales.json  
└── ARCHIVOS\_DUMP/  
    ├── 1.json  
    ├── 2.json  
    ├── 3.json  
    ├── 4.json  
    ├── ...

By [Jaime Hernández](https://medium.com/@devjaime) on [July 11, 2024](https://medium.com/p/e9fcb4eebac7).

[Canonical link](https://medium.com/@devjaime/tutorial-consolidaci%C3%B3n-y-subida-de-datos-a-firestore-usando-python-e9fcb4eebac7)

Exported from [Medium](https://medium.com) on March 15, 2025.