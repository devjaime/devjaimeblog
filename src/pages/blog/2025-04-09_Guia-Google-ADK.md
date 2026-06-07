------
filename: "2025-04-09_Guia-Google-ADK"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-07T08:00:00-0300"
draft: false
time: 15
featured: false
---

---

Google ha lanzado [ADK (Agent Development Kit)](https://google.github.io/adk-docs/), un potente framework open source que te permite crear agentes de inteligencia artificial de forma modular, segura y escalable. ¿Quieres aprender desde lo más básico hasta construir sistemas complejos multiagente? Esta guía es para ti. 👇

## 🚀 ¿Qué es Google ADK?

ADK permite desarrollar agentes autónomos que razonan con modelos de lenguaje como Gemini, toman decisiones, usan herramientas externas (como APIs o ejecución de código), y pueden ser desplegados en producción con facilidad. Ofrece:

- Agentes LLM, secuenciales, paralelos, en bucle y personalizados.
- Herramientas como búsqueda en Google, ejecución de código y consumo de APIs.
- Evaluaciones integradas para medir desempeño.
- Buenas prácticas de IA responsable.
- Despliegue en Vertex AI, Cloud Run y contenedores Docker.

## 🧠 Tipos de Agentes disponibles

- **LlmAgent**: Agentes impulsados por modelos de lenguaje. Interpretan el input del usuario y deciden qué herramientas usar.
- **SequentialAgent**: Ejecuta agentes en orden fijo, ideal para pipelines.
- **ParallelAgent**: Corre agentes en paralelo para tareas simultáneas.
- **LoopAgent**: Ejecuta agentes repetidamente hasta cumplir una condición.
- **Agentes Personalizados**: Heredan de `BaseAgent` y permiten crear lógicas complejas a medida.

## 🧰 Integración con Herramientas

Puedes conectar fácilmente funciones y servicios externos:

- **Ejecución de código**: Usa código Python para resolver cálculos o tareas lógicas.
- **Consumo de APIs**: Conecta APIs REST usando funciones Python o integraciones OpenAPI.
- **AgentTool**: Usa otros agentes como herramientas, ideal para arquitecturas multiagente.

## 🧪 Evaluación de Agentes

ADK te permite probar tus agentes antes de ir a producción. Define tests unitarios o evalsets con múltiples turnos, y verifica:

- Que se llamaron las herramientas correctas.
- Que se generó la respuesta esperada.
- Que el flujo de razonamiento es correcto.

Puedes correr evaluaciones desde la CLI, con `pytest` o desde la interfaz web de desarrollo.

## ✅ Prácticas de IA Responsable

ADK promueve seguridad desde el diseño:

- Uso de permisos limitados para herramientas.
- Filtros de entrada y salida.
- Sandboxing para ejecución de código.
- Callbacks para monitoreo y validación.
- Evaluaciones continuas para detectar desviaciones.

## ☁️ Despliegue de Agentes

ADK permite desplegar tus agentes de forma sencilla:

- **Vertex AI Agent Engine**: Infraestructura escalable de Google para agentes.
- **Cloud Run**: Publica tu agente como servicio sin servidor (serverless).
- **Docker**: Corre tus agentes en cualquier infraestructura con contenedores.

ADK incluye CLI para desplegar con un solo comando y también puedes crear tu propio Dockerfile para personalizar.

---

🎯 **Conclusión:** Google ADK es una herramienta poderosa para cualquier desarrollador o empresa que quiera construir agentes de IA modernos, seguros y funcionales. Desde un bot simple hasta un sistema multiagente complejo, puedes empezar hoy y escalar sin fricciones.

¿Listo para crear tu primer agente? ¡Dale una mirada a la [documentación oficial](https://google.github.io/adk-docs/)! ✨
