---
title: "Estatus del Sistema - 01 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-01T01:19:08-04:00"
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
---

# Estatus del Sistema - 01 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 96%

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 192Gi | 8.3Gi | 96% |
| SD Card (KINGSTON) | 954Gi | 235Gi | 719Gi | 25% |

### RAM

- Total: 16384.0 MB
- Usado: 859.8 MB (5.2%)
- Libre: 33.8 MB

### CPU

- Uso: 25.8%
- Idle: 74.2%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| go_build | 1.5G |
| google | 1.6G |
| homebrew | 884M |
| spotify | 1.8G |
| vscode | 997M |


---

## Hermes Agent

| Componente | Tamano |
|------------|--------|
| hermes_home | 2.3G |
| hermes_agent | 2.3G |
| state_db | 3.3M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-06-01 01:19:13_
