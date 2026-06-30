---
filename: "2026-06-29-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-29T09:08:16-04:00"
title: "Estatus del Sistema - 29 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-29T09:08:16-04:00"
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
lang: es
type: agentic-status
source: agentic
authorHandle: devjaime
reviewStatus: reviewed
---

# Estatus del Sistema - 29 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 94%

## Acciones Tomadas

- ✅ Auto-limpieza: opencode (3.3M)

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 170Gi | 11Gi | 94% |
| SD Card (KINGSTON) | 954Gi | 8.9Gi | 945Gi | 1% |

### RAM

- Total: 16384.0 MB
- Usado: 985.8 MB (6.0%)
- Libre: 25.1 MB

### CPU

- Uso: 19.8%
- Idle: 80.2%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| go_build | 0B |
| google | 409M |
| homebrew | 2.0G |
| opencode | 3.3M |
| spotify | 0B |
| vscode | 40K |


---

## Hermes Agent

| Componente | Tamano |
|------------|--------|
| hermes_home | 2.5G |
| hermes_agent | 2.3G |
| state_db | 81M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-06-29 09:08:19_
