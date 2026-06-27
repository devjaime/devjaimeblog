---
filename: "2026-06-27-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-27T09:01:21-04:00"
title: "Estatus del Sistema - 27 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-27T09:01:21-04:00"
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

# Estatus del Sistema - 27 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 98%

## Acciones Tomadas

- ✅ Auto-limpieza: codex_runtimes (331M)

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 180Gi | 5.0Gi | 98% |
| SD Card (KINGSTON) | 954Gi | 207Gi | 747Gi | 22% |

### RAM

- Total: 16384.0 MB
- Usado: 908.9 MB (5.5%)
- Libre: 14.3 MB

### CPU

- Uso: 47.0%
- Idle: 53.0%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| codex_runtimes | 107M |
| go_build | 1.7G |
| google | 1.5G |
| homebrew | 907M |
| spotify | 1.9G |
| vscode | 40K |


---

## Hermes Agent

| Componente | Tamano |
|------------|--------|
| hermes_home | 2.4G |
| hermes_agent | 2.3G |
| state_db | 58M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-06-27 09:01:30_
