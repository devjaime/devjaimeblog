---
filename: "2026-07-01-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-07-01T09:09:39-04:00"
title: "Estatus del Sistema - 01 Jul 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-07-01T09:09:39-04:00"
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

# Estatus del Sistema - 01 Jul 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 93%

## Acciones Tomadas

- ✅ Auto-limpieza: uv (12K)
- ✅ Auto-limpieza: opencode (2.3M)
- ✅ Auto-limpieza: codex_runtimes (1.5G)

_Post-limpieza: disco bajo de 93% a 92%_

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 170Gi | 14Gi | 93% |
| SD Card (KINGSTON) | 954Gi | 9.5Gi | 944Gi | 2% |

### RAM

- Total: 16384.0 MB
- Usado: 1177.7 MB (7.2%)
- Libre: 91.8 MB

### CPU

- Uso: 18.2%
- Idle: 81.81%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| codex_runtimes | 1.5G |
| go_build | 0B |
| google | 638M |
| homebrew | 615M |
| opencode | 2.3M |
| spotify | 0B |
| uv | 12K |
| vscode | 40K |


---

## Hermes Agent

| Componente | Tamano |
|------------|--------|
| hermes_home | 2.6G |
| hermes_agent | 2.3G |
| state_db | 100M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-07-01 09:09:46_
