---
layout: ../../layouts/BlogLayout.astro
title: "3 Formas de Ejecutar Modelos LLM Open Source"
description: "Guía práctica: pruebas locales con Ollama, GUI con LM Studio y despliegues serverless escalables con vLLM en infraestructura on-demand."
tags: ["LLM", "AI", "Serverless", "vLLM", "Ollama", "LM Studio", "MLOps", "Infraestructura"]
time: 12 min read
timestamp: 2025-08-22T10:00:00+00:00
featured: false
filename: serverless-llm-options
---

# 3 Formas de Ejecutar Modelos LLM Open Source: de Local a Serverless

*Ollama · LM Studio · vLLM (serverless con Runpod / infraestructura on‑demand)*

La adopción de modelos open source (Qwen, Llama 3, DeepSeek, Mistral, etc.) está explotando. Ya no dependes exclusivamente de APIs cerradas: puedes iterar localmente, empaquetar prototipos y finalmente escalar a producción **sin bloquearte a un proveedor**.

En este post te cuento **tres enfoques complementarios** para ejecutar LLMs según tu etapa: experimentación, prototipado avanzado y producción serverless.

## 🎯 Resumen Rápido

| Caso de uso | Herramienta | Ventajas Clave | Trade-offs |
|-------------|-------------|----------------|------------|
| Aprender / Probar | Ollama | Instalación mínima, modelos cuantizados, CLI simple | Menos métricas y tooling visual |
| Prototipar / Demo GUI | LM Studio | Interfaz gráfica, monitor de tokens/s, servidor HTTP, selección HF | Requiere más RAM/VRAM para fluidez |
| Producción escalable | vLLM + infraestructura serverless (Runpod, Modal, etc.) | Throughput alto, batching, paged attention, escalado horizontal | Curva de configuración, costo si mal dimensionado |

---
## 1. 🖥️ Ollama: La Puerta de Entrada Simplicidad ➜ Iteración Inmediata

**Cuándo usarlo:** primeras pruebas, evaluar distintos modelos, fine-tuning ligero (con extensiones), construir scripts locales.

**Ventajas:**
- Instalación en segundos (Mac/Linux/Windows WSL)
- Descarga y gestión de modelos unificada (`ollama pull`)
- Soporte para cuantizaciones que bajan el consumo de RAM/VRAM
- Sirve un endpoint local (`/api/generate`) para integraciones rápidas

**Ejemplo básico:**
```bash
# Descargar y ejecutar (streaming en consola)
ollama run qwen2.5:7b

# Promptea directamente
> Eres un experto en Go. Explica qué es un goroutine en 2 frases.

# Usar como API local
curl http://localhost:11434/api/generate \
  -d '{"model": "qwen2.5:7b", "prompt": "Resume qué es paged attention"}'
```

**Regla mental de memoria (aprox.):**
- 7B cuantizado (Q4 / Q5 / MXFP4): 4–6 GB RAM
- 14B: 8–10 GB
- 70B: impráctico local sin GPU grande

> ⚠️ Si tu máquina empieza a swappear, baja de tamaño o usa una cuantización más agresiva.

---
## 2. 🎨 LM Studio: Observabilidad y Control Visual

**Cuándo usarlo:** demos a stakeholders, afinación de prompts, medir tokens/s, probar múltiples modelos y configuraciones de sampling.

**Highlights:**
- UI amigable para gestionar descargas desde Hugging Face
- Métricas en tiempo real: velocidad (tokens/s), utilización
- Panel para parámetros: temperature, top_p, repeat penalty
- Puede levantar un **servidor local** compatible con OpenAI API
- Exporta y reutiliza prompts / sesiones

**Ejecutar un servidor OpenAI-like:**
```bash
# En la UI activas: Enable Local Server
# Luego puedes consumirlo desde tu app:
export OPENAI_API_BASE=http://localhost:1234/v1
export OPENAI_API_KEY=sk-local

curl $OPENAI_API_BASE/chat/completions \
 -H "Authorization: Bearer $OPENAI_API_KEY" \
 -H "Content-Type: application/json" \
 -d '{
   "model": "qwen2.5:7b-instruct",
   "messages": [{"role": "user", "content": "Dame 3 ventajas de Go"}],
   "temperature": 0.7
 }'
```

**Rendimiento observado (ejemplo orientativo):**
- MacBook M‑series con suficiente RAM puede lograr **40–60 tokens/s** con modelos 7B cuantizados MXFP4.

**Cuándo migrar más allá de LM Studio:** cuando necesitas **> concurrent users**, batching, throughput estable o reducir coste por token en producción.

---
## 3. ⚡ vLLM + Infra Serverless: Camino a Producción

**Objetivo:** servir modelos con **bajo coste amortizado**, alta concurrencia y latencias predecibles.

**¿Por qué vLLM?**
- Motor de inferencia optimizado (PagedAttention) ➜ mejor utilización de VRAM
- Batching dinámico y speculative decoding (si activado)
- Manejo eficiente de long context windows
- Soporte OpenAI-compatible endpoints (`/v1/completions`, `/v1/chat/completions`)

**Arquitectura serverless típica (Runpod / Modal / Lambda GPU-like providers):**
```
Cliente → API Gateway → (Queue) → Worker GPU (vLLM Engine) → Respuesta
                     ↘ Autoscaler ↗
```

**Componentes Clave:**
- Queue / dispatcher (async) para nivelar bursts
- Múltiples réplicas vLLM detrás de un load balancer
- Métricas: tokens/s, time-to-first-token, GPU utilization, rejection rate
- Autoscaling por cola pendiente + GPU busy ratio

**Ejemplo de arranque vLLM (CLI):**
```bash
python -m vllm.entrypoints.openai.api_server \
  --model Qwen/Qwen2.5-7B-Instruct \
  --tensor-parallel-size 1 \
  --max-model-len 32768 \
  --port 8000 \
  --dtype auto \
  --enforce-eager
```

**Consumir el endpoint:**
```bash
curl http://localhost:8000/v1/chat/completions \
 -H "Content-Type: application/json" \
 -d '{
  "model": "Qwen2.5-7B-Instruct",
  "messages": [{"role": "user", "content": "Resume las ventajas de paged attention"}],
  "temperature": 0.3
 }'
```

### 📦 Ejemplo Docker (simplificado)
```Dockerfile
FROM nvidia/cuda:12.1.0-runtime-ubuntu22.04
RUN apt-get update && apt-get install -y python3-pip git && rm -rf /var/lib/apt/lists/*
RUN pip install --no-cache-dir vllm==0.5.3
EXPOSE 8000
CMD ["python", "-m", "vllm.entrypoints.openai.api_server", "--model", "Qwen/Qwen2.5-7B-Instruct", "--port", "8000"]
```

### 🔁 Autoscaling (idea conceptual)
- Métrica primaria: `pending_requests` + `avg_time_to_first_token`
- Regla: si `pending_requests > X` durante Y segundos ➜ scale out
- Regla: si `gpu_utilization < 25%` y `pending_requests == 0` por Z segundos ➜ scale in

---
## 🔧 Cuantización (MXFP4 y otras)

**Por qué importa:** reduce VRAM/RAM y coste operativo manteniendo calidad razonable.

| Formato | Uso Memoria | Calidad | Caso Típico |
|---------|-------------|---------|-------------|
| FP16 | Alto | Máxima | Fine-tuning / evaluación
| BF16 | Similar FP16 | Estable | GPUs modernas
| INT8 | Medio | Buena | Prototipos
| Q4_K / Q5_K | Bajo | Aceptable | Uso local
| **MXFP4** | Muy bajo | Sorprendentemente alta | Producción coste-eficiente

> Ajusta `max_model_len` y `max_num_seqs` para evitar OOM en contextos largos.

### 🧬 ¿Qué es MXFP4?

**MXFP4 (Mixed FP4)** es una familia de esquemas de 4 bits en formato flotante mixto (no estrictamente entero) que aprovecha mini‑formatos FP4 (variantes como E2M1 / E3M0) y heurísticas de escalado por bloque para mantener **más rango dinámico** que INT4 puro, reduciendo la pérdida de calidad típica de quantizaciones agresivas.

Características clave:
* Mezcla ("mixed") de sub‑formatos para adaptar rango vs precisión según la distribución interna de pesos.
* Normalización / escala por bloque (8, 16, 32, 64 parámetros) → reduce outliers.
* Puede combinarse con dequant on‑the‑fly + kernels fusionados para minimizar overhead.
* En inference: los pesos permanecen comprimidos hasta la etapa de multiplicación (streaming decomp).

Comparación (aprox.) memoria pesos (sin KV cache) para un modelo 7B:
| Representación | Memoria ≈ |
|----------------|-----------|
| FP16 | ~13.5–14 GB |
| INT8 (per‑tensor) | ~7.0 GB |
| INT8 (per‑channel) | ~7.5 GB (ligero overhead metadatos) |
| Q4_K (LLM.int4) | ~3.8–4.2 GB |
| **MXFP4** | ~3.5–3.9 GB |

> Las cifras varían por: embedding sharing, vocab size, formato KV, capas MoE, etc.

### 🧪 Métricas de Calidad

Una forma común de evaluar la degradación es la **pérdida de perplexity** (ΔPPL) vs FP16 y la caída en benchmarks (MMLU, GSM8K...). MXFP4 bien calibrado suele mostrar:
* ΔPPL típica: +0.5 a +1.2 sobre FP16 (menor que algunos INT4 uniformes)
* Caída en tareas razonamiento: 0–2 puntos porcentuales (depende del modelo)

### 🧠 GPT‑OSS con MXFP4

Cuando veas variantes tipo `gpt-oss-*` o `*-mxfp4` normalmente indica:
* **Pesos base** convertidos a formato MXFP4 post‑training (PTQ) usando calibración con subconjunto de datos.
* Bloques con escalado adaptativo para minimizar saturación en capas sensibles (attention / layer norm adjacente).
* A veces mezcla: embedding en INT8 / capas críticas en FP8 / resto FP4 ("mixed hybrid").

Beneficios prácticos:
* Despliegas un modelo 7B en una GPU de 8–10GB manteniendo contexto ampliado (32K) sin OOM.
* Mayor throughput (menos tráfico de memoria) → más tokens/seg en vLLM.
* Coste por token inferior en entornos serverless.

Trade‑offs:
* Fine‑tuning adicional (LoRA) encima de MXFP4 puede degradar si no re‑cuantizas capas tocadas.
* Leve incremento de error de rounding en respuestas largas (>4K tokens) → más "drift".
* Más sensibilidad a prompts con muchas cifras / formatos estructurados (JSON estricto).

### 🧩 Estrategias de Quantización Complementarias

| Estrategia | Qué Cuantiza | Beneficio | Riesgo |
|------------|--------------|-----------|--------|
| Pesos (W) | Matrices de pesos | Ahorro VRAM principal | Pérdida base si agresivo |
| Activaciones (A) | Output intermedio | Reduce picos VRAM | Puede introducir ruido acumulado |
| KV Cache | Claves/Valores atención | Escala long context barato | Latencia extra por (de)quant |
| Mixta (W + KV) | Combinado | Máximo ahorro | Complejidad en kernels |

### 🧮 Fórmula Aproximada Memoria (Inference)

`Mem_Total ≈ Mem_Pesos + (Batch * 2 * Layer * Head * Dim_Head * Bits_KV/8)`

Al usar MXFP4 sólo en pesos (y mantener KV en FP16 / FP8), el crecimiento lineal del KV sigue dominando en contextos largos. Puedes aplicar KV INT8 / FP8 para extender contexto sin duplicar coste.

### ⚙️ Ejemplos de Uso

vLLM (cuando soporte el flag específico, hoy se hace vía pesos ya cuantizados):
```bash
python -m vllm.entrypoints.openai.api_server \
  --model your-org/gpt-oss-7b-mxfp4 \
  --max-model-len 32768 \
  --tensor-parallel-size 1 \
  --enforce-eager
```

Transformers + bitsandbytes (4bit baseline) como alternativa si no hay MXFP4 nativo:
```python
from transformers import AutoModelForCausalLM, AutoTokenizer

model_name = "your-org/gpt-oss-7b-mxfp4"  # si expone weights ya empaquetados
tok = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    device_map="auto",
    load_in_4bit=True,          # fallback INT4 si no hay kernel MXFP4
    bnb_4bit_compute_dtype="bfloat16",
    bnb_4bit_quant_type="nf4"   # nf4 se aproxima cuando MXFP4 no disponible
)
```

KV Cache cuantizado (ejemplo conceptual en vLLM / configuraciones emergentes):
```bash
--quantization-config '{"kv_cache_dtype": "fp8", "weight_format": "mxfp4"}'
```

### 🛑 Pitfalls Específicos MXFP4
* Reconvertir a FP16 para mezclar LoRA + MXFP4 puede invalidar la compresión (cadenas de conversión → pérdida).
* Benchmarks cortos (short prompts) pueden ocultar degradación en razonamiento largo.
* Métricas de calidad deben revisarse por dominio (code vs general chat).

### ✅ Buenas Prácticas
* Valida con un set de prompts críticos (JSON, código, reasoning, multi‑turn).
* Ajusta `max_model_len` antes de escalar horizontalmente — reduce costo inmediato.
* Monitorea `tokens/s` y `time_to_first_token` tras introducir quantización; deberían mejorar o al menos no empeorar significativamente.
* Documenta el formato exacto (MXFP4 variante) para reproducibilidad.

---

---
## 🧪 Benchmarks Mentales (Orientativos)

| Modelo (7B) | Entorno | Quant | Tokens/s (≈) | Notas |
|-------------|---------|-------|--------------|-------|
| Qwen 2.5 | Ollama local | Q4_K | 25–35 | Laptop M-series |
| Qwen 2.5 | LM Studio | MXFP4 | 40–60 | Mac M4 Pro 48GB |
| Qwen 2.5 | vLLM H100 | MXFP4 | 180–250 | Batching 8 req |

*No son cifras oficiales; sirven para ordenar magnitudes.*

---
## 🧭 Cómo Elegir

1. ¿Estás aprendiendo? ➜ **Ollama**
2. ¿Necesitas mostrar algo visual / iterar prompts con métricas? ➜ **LM Studio**
3. ¿Tienes usuarios concurrentes / SLA / costo por token controlado? ➜ **vLLM serverless**

### Checklist Producción (vLLM)
- [ ] Limitar `max_model_len` (ej: 32K vs 256K si no lo necesitas)
- [ ] Activar logging estructurado
- [ ] Métricas: TTFB, tokens/s, cola, errores
- [ ] Health checks para readiness / liveness
- [ ] Estrategia de rotación de versiones de modelo
- [ ] Política de escalado (frío/caliente)

---
## 💰 Cost & Optimización

| Palanca | Impacto | Acción |
|---------|---------|--------|
| Cuantización | ↓ VRAM | MXFP4 / INT8 | 
| Contexto | ↓ Memoria & Latencia | Limita a 32K si 256K no aporta |
| Batching | ↑ Throughput | Ajusta tamaño dinámico |
| Streaming | ↓ Percepción de latencia | Envía tokens tempranos |
| Warm Pools | ↓ Cold start | Mantén 1–N réplicas calientes |

---
## ⚠️ Pitfalls Comunes
- Subir un contexto gigantesco para prompts simples
- No medir `time_to_first_token` (percepción usuario)
- Hacer scale-out sin límite ➜ costo explosivo nocturno
- Usar modelos demasiado grandes para casos que caben en 7B
- Ignorar límites de cuota del proveedor serverless

---
## 🔮 El Futuro Cercano
- Más **cuantizaciones híbridas** manteniendo calidad casi FP16
- **Inference fusion** (operadores combinados) por defecto
- **Multi-tenancy** nativa más segura en motores de inferencia
- Modelos 7B cada vez más competitivos → drenan necesidad de 70B
- Edge + on-device acelerado (NPUs / GPUs integradas)

---
## 🛠️ Snippet Comparativo (Mismo Prompt)

```bash
# Ollama
ollama run qwen2.5:7b "Explica en una frase qué es paged attention"

# LM Studio (OpenAI compatible)
curl $OPENAI_API_BASE/chat/completions \
 -H "Authorization: Bearer $OPENAI_API_KEY" \
 -H "Content-Type: application/json" \
 -d '{"model":"qwen2.5-7b","messages":[{"role":"user","content":"Explica en una frase qué es paged attention"}]}'

# vLLM
curl http://localhost:8000/v1/chat/completions \
 -H "Content-Type: application/json" \
 -d '{"model":"Qwen2.5-7B-Instruct","messages":[{"role":"user","content":"Explica en una frase qué es paged attention"}],"stream":true}'
```

---
## ✅ Conclusión
No existe una única "mejor" forma de ejecutar LLMs. **Existe la correcta para tu fase actual.** Empieza simple, gana comprensión, añade observabilidad y termina escalando con un motor preparado para producción.

¿Ya probaste alguna? ¿Planeas migrar a vLLM? Cuéntamelo y podemos extender esta guía con benchmarks reales.

---

#️⃣ **#LLM #AI #Serverless #vLLM #Ollama #LMStudio #MLOps #Infraestructura #OpenSource**
