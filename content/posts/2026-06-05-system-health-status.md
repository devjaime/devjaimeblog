---
title: "Estatus del Sistema - 05 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-05T09:00:55-04:00"
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

# Estatus del Sistema - 05 Jun 2026

**Status:** OK

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 174Gi | 26Gi | 88% |
| SD Card (KINGSTON) | 954Gi | 188Gi | 766Gi | 20% |

### RAM

- Total: 16384.0 MB
- Usado: 670.2 MB (4.1%)
- Libre: 15.7 MB

### CPU

- Uso: 39.1%
- Idle: 60.86%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| codex_runtimes | 1.3G |
| go_build | 1.5G |
| google | 2.1G |
| homebrew | 884M |
| opencode | 2.1M |
| spotify | 1.9G |
| vscode | 1.0G |


---

## Hermes Agent

| Componente | Tamano |
|------------|--------|
| hermes_home | 2.4G |
| hermes_agent | 2.3G |
| state_db | 22M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-06-05 09:00:57_
