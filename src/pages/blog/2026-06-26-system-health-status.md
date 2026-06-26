---
filename: "2026-06-26-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-26T09:02:06-04:00"
title: "Estatus del Sistema - 26 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-26T09:02:06-04:00"
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

# Estatus del Sistema - 26 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 99%

## Acciones Tomadas

- ✅ Auto-limpieza: opencode (2.3M)
- ✅ Auto-limpieza: codex_runtimes (1.5G)

_Post-limpieza: disco bajo de 99% a 98%_

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 183Gi | 2.3Gi | 99% |
| SD Card (KINGSTON) | 954Gi | 207Gi | 747Gi | 22% |

### RAM

- Total: 16384.0 MB
- Usado: 1125.8 MB (6.9%)
- Libre: 19.9 MB

### CPU

- Uso: 22.7%
- Idle: 77.3%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| codex_runtimes | 1.5G |
| go_build | 1.7G |
| google | 1.6G |
| homebrew | 907M |
| opencode | 2.3M |
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

_Ultima verificacion: 2026-06-26 09:02:18_
