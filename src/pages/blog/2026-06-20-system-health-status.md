---
filename: "2026-06-20-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-20T09:00:03-04:00"
title: "Estatus del Sistema - 20 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-20T09:00:03-04:00"
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

# Estatus del Sistema - 20 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 99%

## Acciones Tomadas

- ✅ Auto-limpieza: opencode (2.3M)
- ✅ Auto-limpieza: codex_runtimes (1.5G)

_Post-limpieza: disco bajo de 99% a 98%_

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 184Gi | 2.5Gi | 99% |
| SD Card (KINGSTON) | 954Gi | 207Gi | 747Gi | 22% |

### RAM

- Total: 16384.0 MB
- Usado: 889.4 MB (5.4%)
- Libre: 18.7 MB

### CPU

- Uso: 20.8%
- Idle: 79.22%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| codex_runtimes | 1.5G |
| go_build | 1.7G |
| google | 870M |
| homebrew | 907M |
| opencode | 2.3M |
| spotify | 1.9G |
| vscode | 1.1G |


---

## Hermes Agent

| Componente | Tamano |
|------------|--------|
| hermes_home | 2.4G |
| hermes_agent | 2.3G |
| state_db | 54M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-06-20 09:00:18_
