---
filename: "2026-06-23-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-23T09:19:42-04:00"
title: "Estatus del Sistema - 23 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-23T09:19:42-04:00"
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

# Estatus del Sistema - 23 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 98%

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 182Gi | 4.5Gi | 98% |
| SD Card (KINGSTON) | 954Gi | 207Gi | 747Gi | 22% |

### RAM

- Total: 16384.0 MB
- Usado: 901.0 MB (5.5%)
- Libre: 21.2 MB

### CPU

- Uso: 46.2%
- Idle: 53.79%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| go_build | 1.7G |
| google | 914M |
| homebrew | 907M |
| spotify | 1.9G |
| vscode | 1.1G |


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

_Ultima verificacion: 2026-06-23 09:19:48_
