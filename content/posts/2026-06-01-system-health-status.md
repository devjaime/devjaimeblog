---
title: "Estatus del Sistema - 01 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-01T09:00:53-04:00"
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

- ⚠️ Disco principal al 94%

## Acciones Tomadas

- ✅ Auto-limpieza: opencode (2.0M)
- ✅ Auto-limpieza: codex_runtimes (748M)

_Post-limpieza: disco bajo de 94% a 93%_

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 187Gi | 14Gi | 94% |
| SD Card (KINGSTON) | 954Gi | 235Gi | 719Gi | 25% |

### RAM

- Total: 16384.0 MB
- Usado: 818.6 MB (5.0%)
- Libre: 23.5 MB

### CPU

- Uso: 11.5%
- Idle: 88.5%

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
| state_db | 4.5M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-06-01 09:01:03_
