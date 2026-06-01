---
title: "Estatus del Sistema - 01 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-01T01:14:47-04:00"
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

- ⚠️ Disco principal al 97%

## Acciones Tomadas

- ✅ Auto-limpieza: opencode (2.0M)
- ✅ Auto-limpieza: codex_runtimes (748M)

_Post-limpieza: disco bajo de 97% a 96%_

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 193Gi | 7.5Gi | 97% |
| SD Card (KINGSTON) | 954Gi | 235Gi | 719Gi | 25% |

### RAM

- Total: 16384.0 MB
- Usado: 886.6 MB (5.4%)
- Libre: 33.7 MB

### CPU

- Uso: 20.7%
- Idle: 79.34%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| codex_runtimes | 748M |
| go_build | 1.5G |
| google | 1.6G |
| homebrew | 884M |
| opencode | 2.0M |
| spotify | 1.8G |
| vscode | 997M |


---

## Hermes Agent

| Componente | Tamano |
|------------|--------|
| hermes_home | 2.3G |
| hermes_agent | 2.3G |
| state_db | 2.8M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-06-01 01:14:55_
