---
filename: "2026-07-05-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-07-05T09:14:18-04:00"
title: "Estatus del Sistema - 05 Jul 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-07-05T09:14:18-04:00"
author: 
  name: "Jaime Hernandez"
  url: "https://devjaime.cl"
tags: 
  - "System"
  - "Monitor"
  - "Health"
  - "DevOps"
category: "System Health"
draft: false
time: 5
featured: false
---

# Estatus del Sistema - 05 Jul 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 93%

## Acciones Tomadas

- ✅ Auto-limpieza: uv (12K)
- ✅ Auto-limpieza: playwright (539M)
- ✅ Auto-limpieza: opencode (3.8M)
- ✅ Auto-limpieza: codex_runtimes (1.5G)

_Post-limpieza: disco bajo de 93% a 92%_

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 172Gi | 13Gi | 93% |
| SD Card (KINGSTON) | 954Gi | 9.6Gi | 944Gi | 2% |

### RAM

- Total: 16384.0 MB
- Usado: 1102.4 MB (6.7%)
- Libre: 24.1 MB

### CPU

- Uso: 22.8%
- Idle: 77.21%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| codex_runtimes | 1.5G |
| go_build | 0B |
| google | 638M |
| homebrew | 615M |
| opencode | 3.8M |
| playwright | 539M |
| spotify | 0B |
| uv | 12K |
| vscode | 1.2G |


---

## Hermes Agent

| Componente | Tamano |
|------------|--------|
| hermes_home | 2.6G |
| hermes_agent | 2.3G |
| state_db | 116M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-07-05 09:14:27_
