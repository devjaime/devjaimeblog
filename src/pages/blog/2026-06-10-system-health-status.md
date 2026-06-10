---
filename: "2026-06-10-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-10T09:00:40-04:00"
title: "Estatus del Sistema - 10 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-10T09:00:40-04:00"
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

# Estatus del Sistema - 10 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 92%

## Acciones Tomadas

- ✅ Auto-limpieza: opencode (2.1M)
- ✅ Auto-limpieza: codex_runtimes (1.3G)

_Post-limpieza: disco bajo de 92% a 91%_

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 180Gi | 17Gi | 92% |
| SD Card (KINGSTON) | 954Gi | 188Gi | 766Gi | 20% |

### RAM

- Total: 16384.0 MB
- Usado: 776.3 MB (4.7%)
- Libre: 18.2 MB

### CPU

- Uso: 16.6%
- Idle: 83.39%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| codex_runtimes | 1.3G |
| go_build | 1.5G |
| google | 1.6G |
| homebrew | 884M |
| opencode | 2.1M |
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

_Ultima verificacion: 2026-06-10 09:00:50_
