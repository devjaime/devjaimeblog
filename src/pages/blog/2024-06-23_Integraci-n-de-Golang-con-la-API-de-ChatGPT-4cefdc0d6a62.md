---
layout: "../../layouts/BlogLayout.astro"
title: "Integración de Golang con la API de ChatGPT"
description: ""
tags: ["code", "Golang", "chatGPT"]
time: 4
featured: true
timestamp: "2024-06-23T12:20:32-0300"
filename: "2024-06-23_Integraci-n-de-Golang-con-la-API-de-ChatGPT-4cefdc0d6a62"
---

Integración de Golang con la API de ChatGPT \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Integración de Golang con la API de ChatGPT
===========================================

En la era actual, las aplicaciones impulsadas por inteligencia artificial están ganando una popularidad significativa. Integrar capacidades…

* * *

### Integración de Golang con la API de ChatGPT

![](https://cdn-images-1.medium.com/max/800/0*Atm0sii4_bstXiSM.png)

En la era actual, las aplicaciones impulsadas por inteligencia artificial están ganando una popularidad significativa. Integrar capacidades de lenguaje natural en tus aplicaciones puede proporcionar una experiencia de usuario rica y dinámica. En este artículo, aprenderás cómo integrar Golang con la API de ChatGPT para aprovechar las poderosas funcionalidades del modelo de lenguaje de OpenAI.

### ¿Por qué usar Golang con ChatGPT?

Golang, conocido por su rendimiento y eficiencia, es ideal para construir aplicaciones de backend y servicios RESTful. Por otro lado, ChatGPT proporciona capacidades avanzadas de procesamiento del lenguaje natural (NLP). La integración de ambos puede llevar a la creación de aplicaciones que respondan inteligentemente a las consultas de los usuarios.

### Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

*   [Golang](https://golang.org/dl/) instalado en tu máquina.
*   Una cuenta de OpenAI y una clave API. Puedes obtenerla registrándote en [OpenAI](https://www.openai.com/).

### Paso 1: Configuración del Entorno

Primero, asegúrate de tener Go instalado. Puedes verificarlo ejecutando:

go version

Si Go no está instalado, sigue las [instrucciones oficiales](https://golang.org/doc/install).

### Paso 2: Crear un Proyecto Golang

Crea un nuevo directorio para tu proyecto y navega a él:

mkdir chatgpt-golang  
cd chatgpt-golang

Inicializa un nuevo módulo Go:

go mod init chatgpt-golang

### Paso 3: Instalar Dependencias

Usaremos el paquete `net/http` de Go para hacer solicitudes HTTP. Además, instalaremos el paquete `encoding/json` para manejar la serialización JSON.

No se requiere una instalación separada para estos paquetes ya que vienen incluidos en la biblioteca estándar de Go.

### Paso 4: Implementar la Llamada a la API de ChatGPT

Crea un archivo llamado `main.go` y escribe el siguiente código:

package main  
  
import (  
 "bytes"  
 "encoding/json"  
 "fmt"  
 "net/http"  
 "os"  
)  
  
// Estructura para la solicitud a la API de ChatGPT  
type ChatGPTRequest struct {  
 Model    string \`json:"model"\`  
 Messages \[\]Message \`json:"messages"\`  
}  
  
// Estructura para los mensajes en la solicitud  
type Message struct {  
 Role    string \`json:"role"\`  
 Content string \`json:"content"\`  
}  
  
// Estructura para la respuesta de la API de ChatGPT  
type ChatGPTResponse struct {  
 Choices \[\]struct {  
  Message Message \`json:"message"\`  
 } \`json:"choices"\`  
}  
  
func main() {  
 // Clave API de OpenAI  
 apiKey := os.Getenv("OPENAI\_API\_KEY")  
 if apiKey == "" {  
  fmt.Println("Por favor, establece la variable de entorno OPENAI\_API\_KEY.")  
  return  
 }  
  
 // URL de la API  
 apiURL := "https://api.openai.com/v1/chat/completions"  
  
 // Crear la solicitud  
 requestBody := ChatGPTRequest{  
  Model: "gpt-4",  
  Messages: \[\]Message{  
   {  
    Role:    "system",  
    Content: "Eres un asistente útil.",  
   },  
   {  
    Role:    "user",  
    Content: "Hola, ¿cómo estás?",  
   },  
  },  
 }  
  
 // Convertir la solicitud a JSON  
 jsonRequest, err := json.Marshal(requestBody)  
 if err != nil {  
  fmt.Printf("Error al convertir a JSON: %v\\n", err)  
  return  
 }  
  
 // Hacer la solicitud HTTP  
 client := &http.Client{}  
 req, err := http.NewRequest("POST", apiURL, bytes.NewBuffer(jsonRequest))  
 if err != nil {  
  fmt.Printf("Error al crear la solicitud HTTP: %v\\n", err)  
  return  
 }  
  
 req.Header.Set("Authorization", "Bearer "+apiKey)  
 req.Header.Set("Content-Type", "application/json")  
  
 resp, err := client.Do(req)  
 if err != nil {  
  fmt.Printf("Error al realizar la solicitud HTTP: %v\\n", err)  
  return  
 }  
 defer resp.Body.Close()  
  
 // Leer la respuesta  
 var chatResponse ChatGPTResponse  
 err = json.NewDecoder(resp.Body).Decode(&chatResponse)  
 if err != nil {  
  fmt.Printf("Error al decodificar la respuesta: %v\\n", err)  
  return  
 }  
  
 // Mostrar la respuesta  
 fmt.Printf("Respuesta de ChatGPT: %s\\n", chatResponse.Choices\[0\].Message.Content)  
}

### Explicación del Código

*   **Estructuras de Datos**: Definimos estructuras para las solicitudes y respuestas que usamos para interactuar con la API.
*   **Solicitud**: Creamos una solicitud HTTP POST que contiene el mensaje del usuario.
*   **Respuesta**: Decodificamos la respuesta JSON en la estructura `ChatGPTResponse` y mostramos el contenido del primer mensaje de la respuesta.

### Paso 5: Establecer la Clave API

Debes establecer tu clave API de OpenAI como una variable de entorno. Puedes hacerlo temporalmente en la terminal:

export OPENAI\_API\_KEY="tu-clave-api"

O añadirlo a tu archivo de configuración de entorno (`.bashrc`, `.zshrc`, etc.) para que esté disponible en todas las sesiones.

### Paso 6: Ejecutar el Proyecto

Corre el siguiente comando para ejecutar tu programa:

go run main.go

### Conclusión

Integrar Golang con la API de ChatGPT es un proceso directo que puede enriquecer tus aplicaciones con funcionalidades avanzadas de NLP. Con esta integración, puedes construir chatbots, asistentes virtuales, y muchas otras aplicaciones que se beneficien de respuestas generadas por IA.

Explora más sobre lo que puedes hacer con ChatGPT y personaliza las solicitudes para adaptarlas a tus necesidades específicas.

¡Feliz codificación!

By [Jaime Hernández](https://medium.com/@devjaime) on [June 23, 2024](https://medium.com/p/4cefdc0d6a62).

[Canonical link](https://medium.com/@devjaime/integraci%C3%B3n-de-golang-con-la-api-de-chatgpt-4cefdc0d6a62)

Exported from [Medium](https://medium.com) on March 15, 2025.