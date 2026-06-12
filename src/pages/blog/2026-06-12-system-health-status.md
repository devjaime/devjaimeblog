---
filename: "2026-06-12-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-12T09:00:35-04:00"
title: "Estatus del Sistema - 12 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-12T09:00:35-04:00"
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

# Estatus del Sistema - 12 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 95%

## Acciones Tomadas

- ✅ Auto-limpieza: opencode (2.2M)
- ✅ Auto-limpieza: codex_runtimes (1.3G)

_Post-limpieza: disco bajo de 95% a 94%_

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 177Gi | 11Gi | 95% |
| SD Card (KINGSTON) | ? | ? | ? | ?% |

### RAM

- Total: 16384.0 MB
- Usado: 1307.9 MB (8.0%)
- Libre: 355.4 MB

### CPU

- Uso: 24.1%
- Idle: 75.86%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| codex_runtimes | 1.3G |
| go_build | 1.5G |
| google | 1.6G |
| homebrew | 907M |
| opencode | 2.2M |
| spotify | 1.9G |
| vscode | 32K |


---

## Hermes Agent

| Componente | Tamano |
|------------|--------|
| hermes_home | 2.4G |
| hermes_agent | 2.3G |
| state_db | 40M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-06-12 09:00:44_
