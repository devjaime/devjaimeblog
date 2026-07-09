---
filename: "2026-07-09-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-07-09T09:01:10-04:00"
title: "Estatus del Sistema - 09 Jul 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-07-09T09:01:10-04:00"
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

# Estatus del Sistema - 09 Jul 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 92%

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 171Gi | 15Gi | 92% |
| SD Card (KINGSTON) | 954Gi | 9.6Gi | 944Gi | 2% |

### RAM

- Total: 16384.0 MB
- Usado: 1088.1 MB (6.6%)
- Libre: 21.6 MB

### CPU

- Uso: 21.2%
- Idle: 78.75%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| go_build | 0B |
| google | 638M |
| homebrew | 615M |
| spotify | 0B |
| vscode | 1.2G |


---

## Hermes Agent

| Componente | Tamano |
|------------|--------|
| hermes_home | 2.6G |
| hermes_agent | 2.3G |
| state_db | 132M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-07-09 09:01:14_
