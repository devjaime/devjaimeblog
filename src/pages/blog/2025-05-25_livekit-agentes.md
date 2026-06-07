
------
filename: "2025-05-25_livekit-agentes"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-07T08:00:00-0300"
draft: false
time: 15
featured: false
---

---

LiveKit es una plataforma moderna y de código abierto que permite integrar video, audio y datos en tiempo real en tus aplicaciones. En este blog, te llevaré por un recorrido técnico desde su arquitectura interna hasta la creación de un agente conversacional usando su sistema de agentes.

## 🧱 ¿Qué es LiveKit y por qué importa?

LiveKit nace como una alternativa potente y abierta a plataformas como Twilio o Agora, permitiendo tener control total sobre cómo se enrutan y gestionan las comunicaciones en tiempo real.

### Características destacadas:
- Construido sobre WebRTC, el estándar moderno para voz/video en tiempo real.
- Código abierto, con opción de autoalojamiento o LiveKit Cloud.
- SDKs para Web, iOS, Android, Flutter y Unity.
- Grabación, transcodificación, detección de locutores, encriptación, etc.

LiveKit es utilizado en productos de alto tráfico como salas de reuniones, plataformas de aprendizaje remoto, sistemas de vigilancia inteligente y asistentes de voz.

## 💡 Casos de uso inspiradores

Aquí algunos ejemplos del potencial de LiveKit:

### 🎥 1. Videollamadas educativas
Construye una plataforma de aulas virtuales con control de cámara, chat y detección automática de participación. 

> En este escenario, el sistema podría grabar y transcribir las clases automáticamente usando STT (Speech to Text), permitiendo búsquedas posteriores o resúmenes generados por un LLM.

### 🏥 2. Telesalud con IA
Doctores pueden atender pacientes remotamente mientras un agente de IA transcribe, interpreta y resume la conversación médica.

> Aquí, el modelo STT convierte la conversación en texto para almacenarla o enviarla a un LLM, el cual puede generar notas clínicas o alertas automáticas si detecta condiciones relevantes.

### 🧹 3. Coordinadores logísticos por voz
Como en el caso de FlipReady, un agente puede recibir comandos por voz del personal de limpieza, confirmar tareas, y enviar notificaciones a los administradores.

> El agente usa STT para entender los comandos y, si es necesario, consulta al LLM para validar información o responder preguntas frecuentes.

### 🗣️ 4. Avatares conversacionales en metaverso
Integra avatares animados que reaccionan en tiempo real a lo que dicen los usuarios, con reconocimiento facial, voz, y generación de respuestas naturales.

> En este caso se utilizan todos los módulos: STT para entender al usuario, LLM para generar una respuesta coherente, y TTS (Text to Speech) para responder con voz animada.

### 🛎️ 5. Frontend inteligente para atención al cliente
LiveKit puede actuar como la capa de comunicación visual y auditiva para interfaces impulsadas por modelos como GPT, Claude o Mistral.

> Ideal para reemplazar formularios estáticos por experiencias conversacionales. El STT extrae la consulta, el LLM genera una solución, y el TTS convierte todo en una respuesta fluida por voz.

## 📘 Ejemplos del Curso: Agentes con LiveKit (Explicativo y Reflexivo)

### Componentes de un Agente de Voz

```python
import logging
from dotenv import load_dotenv
_ = load_dotenv(override=True)

logger = logging.getLogger("dlai-agent")
logger.setLevel(logging.INFO)

from livekit import agents
from livekit.agents import Agent, AgentSession, JobContext, WorkerOptions, jupyter
from livekit.plugins import (
    openai,
    elevenlabs,
    silero,
)
```

**¿Por qué estas librerías?**

- `dotenv` permite cargar configuraciones sensibles desde un archivo `.env`.
- `logging` esencial para monitorear el agente en producción.
- `livekit.agents` estructura claramente el ciclo de vida del agente.
- Plugins (`openai`, `elevenlabs`, `silero`) proporcionan capacidades de generación de respuestas y síntesis de voz.

### Ejecución del Agente

```python
class MyAgent(Agent):
    async def on_start(self, session: AgentSession):
        print("🤖 Agente listo para recibir instrucciones de voz")

    async def on_audio(self, audio: bytes, context: JobContext):
        text = await context.transcribe(audio)
        print("Texto reconocido:", text)

        reply = await context.ask_llm(text)
        print("Respuesta del LLM:", reply)

        await context.speak(reply)
```

**Reflexión técnica**:

Es fundamental entender cuándo se usa cada módulo:
- **STT** convierte audio en texto para ser procesado.
- **LLM** genera respuestas basadas en contexto o consultas.
- **TTS** convierte respuestas en voz.


---

## 🔨 Cómo construir un agente con LiveKit paso a paso (Repositorio oficial)

El repositorio oficial de LiveKit Agents proporciona una base para construir agentes multimodales. Aquí el proceso paso a paso:

### 1. Instalación de dependencias
```bash
pip install -r requirements.txt
```

### 2. Estructura del agente personalizado
Implementa métodos específicos como `on_start` y `on_audio`.

### 3. Uso del JobContext
Proporciona herramientas para STT, LLM y TTS.

### 4. Configuración del WorkerOptions
Establece parámetros y plugins necesarios para el agente.

### 5. Despliegue del agente
```python
from livekit.agents import Worker
worker = Worker(options=opts)
await worker.run()
```

### 6. Uso en Jupyter interactivo
Facilita prototipos y demostraciones rápidas con `jupyter.run_agent_interactively()`.

👉 Más detalles y ejemplos en el [repositorio oficial](https://github.com/livekit/agents).
