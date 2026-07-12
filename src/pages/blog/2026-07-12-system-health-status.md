---
filename: "2026-07-12-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-07-12T09:02:13-04:00"
title: "Estatus del Sistema - 12 Jul 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-07-12T09:02:13-04:00"
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

# Estatus del Sistema - 12 Jul 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 93%

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 172Gi | 14Gi | 93% |
| SD Card (KINGSTON) | 954Gi | 9.5Gi | 944Gi | 2% |

### RAM

- Total: 16384.0 MB
- Usado: 761.5 MB (4.6%)
- Libre: 114.2 MB

### CPU

- Uso: 22.4%
- Idle: 77.58%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| go_build | 0B |
| google | 725M |
| homebrew | 615M |
| spotify | 0B |
| vscode | 1.2G |


---

## Hermes Agent

| Componente | Tamano |
|------------|--------|
| hermes_home | 2.6G |
| hermes_agent | 2.3G |
| state_db | 148M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-07-12 09:02:19_
