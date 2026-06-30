---
filename: "2026-06-30-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-30T09:07:36-04:00"
title: "Estatus del Sistema - 30 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-30T09:07:36-04:00"
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

# Estatus del Sistema - 30 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 93%

## Acciones Tomadas

- ✅ Auto-limpieza: uv (228M)
- ✅ Auto-limpieza: playwright (539M)
- ✅ Auto-limpieza: opencode (2.3M)
- ✅ Auto-limpieza: codex_runtimes (1.5G)

_Post-limpieza: disco bajo de 93% a 92%_

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 170Gi | 14Gi | 93% |
| SD Card (KINGSTON) | 954Gi | 9.4Gi | 944Gi | 1% |

### RAM

- Total: 16384.0 MB
- Usado: 1065.5 MB (6.5%)
- Libre: 68.7 MB

### CPU

- Uso: 19.7%
- Idle: 80.27%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| codex_runtimes | 1.5G |
| go_build | 0B |
| google | 391M |
| homebrew | 615M |
| opencode | 2.3M |
| playwright | 539M |
| spotify | 0B |
| uv | 228M |
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

_Ultima verificacion: 2026-06-30 09:07:45_
