---
filename: "2026-06-25-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-25T09:06:18-04:00"
title: "Estatus del Sistema - 25 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-25T09:06:18-04:00"
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

# Estatus del Sistema - 25 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 97%

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 181Gi | 6.0Gi | 97% |
| SD Card (KINGSTON) | 954Gi | 207Gi | 747Gi | 22% |

### RAM

- Total: 16384.0 MB
- Usado: 814.5 MB (5.0%)
- Libre: 31.4 MB

### CPU

- Uso: 26.4%
- Idle: 73.56%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| go_build | 1.7G |
| google | 923M |
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

_Ultima verificacion: 2026-06-25 09:06:23_
