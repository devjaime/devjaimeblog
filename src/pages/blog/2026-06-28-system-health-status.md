---
filename: "2026-06-28-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-28T09:00:46-04:00"
title: "Estatus del Sistema - 28 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-28T09:00:46-04:00"
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

# Estatus del Sistema - 28 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 95%

## Acciones Tomadas

- ✅ Auto-limpieza: opencode (3.3M)
- ✅ Auto-limpieza: codex_runtimes (1.5G)

_Post-limpieza: disco bajo de 95% a 94%_

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 174Gi | 11Gi | 95% |
| SD Card (KINGSTON) | 954Gi | 207Gi | 747Gi | 22% |

### RAM

- Total: 16384.0 MB
- Usado: 1350.3 MB (8.2%)
- Libre: 43.6 MB

### CPU

- Uso: 18.8%
- Idle: 81.22%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| codex_runtimes | 1.5G |
| go_build | 0B |
| google | 269M |
| homebrew | 56M |
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

_Ultima verificacion: 2026-06-28 09:00:56_
