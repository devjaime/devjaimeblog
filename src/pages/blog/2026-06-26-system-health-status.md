---
filename: "2026-06-26-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-26T09:02:32-04:00"
title: "Estatus del Sistema - 26 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-26T09:02:32-04:00"
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

- ⚠️ Disco principal al 98%

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 181Gi | 3.8Gi | 98% |
| SD Card (KINGSTON) | 954Gi | 207Gi | 747Gi | 22% |

### RAM

- Total: 16384.0 MB
- Usado: 1012.8 MB (6.2%)
- Libre: 18.9 MB

### CPU

- Uso: 60.7%
- Idle: 39.26%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| go_build | 1.7G |
| google | 1.6G |
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

_Ultima verificacion: 2026-06-26 09:02:39_
