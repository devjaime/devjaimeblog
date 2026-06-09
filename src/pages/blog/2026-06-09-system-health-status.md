---
filename: "2026-06-09-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-09T09:01:02-04:00"
title: "Estatus del Sistema - 09 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-09T09:01:02-04:00"
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

# Estatus del Sistema - 09 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 90%

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 178Gi | 21Gi | 90% |
| SD Card (KINGSTON) | 954Gi | 188Gi | 766Gi | 20% |

### RAM

- Total: 16384.0 MB
- Usado: 738.3 MB (4.5%)
- Libre: 34.0 MB

### CPU

- Uso: 49.4%
- Idle: 50.65%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| go_build | 1.5G |
| google | 1.8G |
| homebrew | 884M |
| spotify | 1.9G |
| vscode | 1.0G |


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

_Ultima verificacion: 2026-06-09 09:01:04_
