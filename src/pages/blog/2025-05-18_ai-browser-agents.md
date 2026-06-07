---
filename: "2025-05-18_ai-browser-agents"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-07T08:00:00-0300"
title: "1. Introducción a los agentes web 2. Construcción de un agen"
description: "1. Introducción a los agentes web 2. Construcción de un agente simple con LLMs y Playwright"
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


### 🎓 Temario del curso

1. Introducción a los agentes web
2. Construcción de un agente simple con LLMs y Playwright
3. Agente autónomo con MultiOn
4. AgentQ y el algoritmo MCTS
5. Futuro de los agentes web inteligentes

---

## 🧩 ¿Qué es un agente web inteligente?

Un **agente web** es un programa que puede:

- Visitar páginas web.
- Leer e interpretar contenido HTML.
- Tomar decisiones (como hacer clic, completar formularios o buscar información).
- Automatizar tareas como lo haría un humano.

Pero no se trata solo de automatización básica. Lo que realmente los vuelve “inteligentes” es su capacidad de **comprender el contexto** y **adaptarse** a distintas situaciones. Esto se logra combinando:

- LLMs (Modelos de lenguaje grandes) para comprensión semántica.
- Navegadores controlados mediante código (ej. Playwright, MultiOn).
- Algoritmos de búsqueda como MCTS para decidir el mejor camino.

---

## 🛠️ Construyendo un Agente Web Simple

### ¿Por qué es importante?

La mayoría del contenido útil en la web está en HTML sin estructura clara. Un LLM puede ayudarnos a **interpretar** ese contenido como un humano. Aquí es donde entra Playwright como navegador automatizado.

### ¿Qué hicimos?

Creamos un scraper basado en `Playwright` y lo conectamos con un modelo LLM para extraer datos estructurados.

```python
class WebScraperAgent:
    ... # Código de inicialización omitido por brevedad
    async def scrape_content(self, url):
        await self.page.goto(url, wait_until="load")
        return await self.page.content()
```

El modelo LLM recibe el HTML y transforma el contenido en JSON útil:

```python
async def process_with_llm(html, instructions):
    completion = client.beta.chat.completions.parse(
        model="gpt-4o-mini-2024-07-18",
        messages=[{
            "role": "system",
            "content": f"""Extrae información útil del HTML:
            {instructions}"""
        }, {
            "role": "user",
            "content": html[:150000]
        }],
        temperature=0.1,
        response_format=DeeplearningCourseList,
    )
    return completion.choices[0].message.parsed
```

### 🧠 Reflexión:

Este enfoque evita tener que escribir miles de selectores CSS o XPath. El LLM entiende el propósito del scraping y entrega un resultado semántico. Increíble, ¿no?

---

## 🤖 Agentes Autónomos con MultiOn

### ¿Por qué ir más allá del scraping?

El scraping sirve para leer, pero no para interactuar. Aquí es donde entra MultiOn, una plataforma que simula navegación real de usuarios con decisiones autónomas.

### ¿Cómo funciona?

Con MultiOn creamos una “sesión” de navegador que recibe comandos del agente, como “haz clic aquí” o “llena este formulario”.

```python
session = multionClient.create_session("https://deeplearning.ai/courses")
response = multionClient.execute_task("Encuentra y abre el curso sobre RAG")
```

El agente navega paso a paso, toma decisiones y captura pantallazos del progreso. Se vuelve una herramienta poderosa para tareas como:

- Automatizar flujos de onboarding.
- Verificar enlaces rotos.
- Interactuar con formularios.

### 📌 Detalle técnico:

Cada paso se ejecuta como un `cmd` en lenguaje natural. El sistema interpreta eso y lo traduce a acciones de clic, scroll o input. Por ejemplo:

```python
cmd="GO TO URL https://example.com"
cmd="CLICK Login"
cmd="FILL email with 'jaime@example.com'"
```

### 🧠 Reflexión:

MultiOn permite llevar los LLMs desde la teoría a la acción real en la web. Es el puente entre entender qué hacer y hacerlo efectivamente.

---

## 🧠 AgentQ y MCTS

### ¿Por qué MCTS en la web?

Cuando hay múltiples caminos posibles en una interfaz web, ¿cómo elegir el mejor?

**Monte Carlo Tree Search (MCTS)** nos ayuda a simular diferentes acciones y elegir la ruta con más probabilidad de éxito.

### 🔁 ¿Cómo se entrena?

Primero lo aplicamos en un entorno controlado tipo “gridworld”. Luego lo llevamos a una aplicación real con AgentQ.

```python
mcts = MCTSGridWrapper(grid, n_iterations=1000, exploration_weight=2.0)
result = mcts()
```

En la web usamos:

```python
result = await main(objective="Find a course on RAG", eval_mode=True)
```

Esto crea un árbol donde cada nodo representa una acción y el sistema mide:

- Valor esperado de recompensa
- Peso del paso
- Evaluaciones del crítico

### 🌳 Visualización del árbol:

```python
fig = plot_tree(...)
fig.show()
```

Esto permite *auditar* la inteligencia del agente, saber por qué eligió lo que eligió.

### 🧠 Reflexión:

No solo importa que un agente actúe, sino que podamos ver su razonamiento. MCTS + AgentQ nos da transparencia y explicabilidad.

---

## 💡 Aprendizajes Clave

✅ LLMs permiten interpretar interfaces web de forma flexible.  
✅ Navegadores controlados por código (Playwright/MultiOn) hacen que los agentes ejecuten acciones reales.  
✅ Algoritmos como MCTS permiten elegir la mejor acción futura.  
✅ La visualización de árboles de decisión mejora la confianza en la IA.  
✅ El scraping tradicional se queda corto frente a estas nuevas capacidades.

---

## 🚀 Lo que sigue

Estoy preparando una demo real de un agente que se conecta a mi startup [CodeIA.cl](https://codeIA.cl), para analizar páginas web de clientes y generar reportes automatizados sobre SEO, cursos, blogs o datos públicos.

Además, estoy integrando este enfoque en casos como:

- 📦 Automatizar gestión de productos en marketplaces.
- 🧾 Verificar precios y cambios de términos.
- 🧑‍💻 Asistentes que navegan portales internos para ayudar al equipo TI.

---

## 🙋‍♂️ ¿Tienes dudas o ideas?

Te invito a escribirme por [LinkedIn](https://www.linkedin.com/in/devjaime) o revisar más experimentos que compartiré en mi blog.

Este fue uno de los cursos más emocionantes que he tomado. No solo por el contenido, sino por la visión clara de hacia dónde vamos con los agentes autónomos en la web.

Gracias por leer 🙌

Jaime Hernández  
[Founder @ CodeIA.cl](https://codeia.cl)

📌 *Este blog está basado en el curso "Building AI Browser Agents" de Deeplearning.ai.*
