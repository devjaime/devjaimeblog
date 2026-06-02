---
title: "Estatus del Sistema - 02 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-02T09:01:03-04:00"
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

# Estatus del Sistema - 02 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 96%

## Acciones Tomadas

- ✅ Auto-limpieza: opencode (2.1M)
- ✅ Auto-limpieza: codex_runtimes (1.3G)

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 188Gi | 8.2Gi | 96% |
| SD Card (KINGSTON) | 954Gi | 235Gi | 719Gi | 25% |

### RAM

- Total: 16384.0 MB
- Usado: 1054.5 MB (6.4%)
- Libre: 30.4 MB

### CPU

- Uso: 20.5%
- Idle: 79.48%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| codex_runtimes | 1.3G |
| go_build | 1.5G |
| google | 1.7G |
| homebrew | 884M |
| opencode | 2.1M |
| spotify | 1.9G |
| vscode | 997M |


---

## Hermes Agent

| Componente | Tamano |
|------------|--------|
| hermes_home | 2.3G |
| hermes_agent | 2.3G |
| state_db | 8.7M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-06-02 09:01:14_
