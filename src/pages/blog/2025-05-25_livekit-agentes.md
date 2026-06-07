---
filename: '2025-05-25_livekit-agentes'
layout: '../../layouts/BlogLayout.astro'

timestamp: '2025-05-25T08:00:00-0300'
title: 'Livekit Agentes'
description: 'El repositorio oficial de LiveKit Agents proporciona una base para construir agentes multimodales. Aquí el proceso paso a paso:'
publishDate: '2025-05-25T08:00:00-0300'
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
