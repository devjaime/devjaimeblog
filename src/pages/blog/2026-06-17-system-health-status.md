---
filename: "2026-06-17-system-health-status"
layout: "../../layouts/BlogLayout.astro"

timestamp: "2026-06-17T09:00:53-04:00"
title: "Estatus del Sistema - 17 Jun 2026"
description: "Reporte diario de salud del sistema: disco, RAM, CPU, caches y estado de Hermes."
publishDate: "2026-06-17T09:00:53-04:00"
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

# Estatus del Sistema - 17 Jun 2026

**Status:** WARNING

## Alertas Activas

- ⚠️ Disco principal al 99%

## Acciones Tomadas

- ✅ Auto-limpieza: opencode (2.3M)
- ✅ Auto-limpieza: codex_runtimes (1.4G)

_Post-limpieza: disco bajo de 99% a 98%_

## Recursos del Sistema

### Disco

| Particion | Total | Usado | Disponible | Uso |
|-----------|-------|-------|------------|-----|
| Principal (macOS) | 228Gi | 183Gi | 2.8Gi | 99% |
| SD Card (KINGSTON) | 954Gi | 207Gi | 747Gi | 22% |

### RAM

- Total: 16384.0 MB
- Usado: 1003.1 MB (6.1%)
- Libre: 39.1 MB

### CPU

- Uso: 20.5%
- Idle: 79.48%

---

## Caches del Sistema

| Cache | Tamano |
|-------|--------|
| codex_runtimes | 1.4G |
| go_build | 1.7G |
| google | 811M |
| homebrew | 907M |
| opencode | 2.3M |
| spotify | 1.9G |
| vscode | 1.0G |


---

## Hermes Agent

| Componente | Tamano |
|------------|--------|
| hermes_home | 2.4G |
| hermes_agent | 2.3G |
| state_db | 53M |


---

## Configuracion

- Monitoreo automatico: activo
- Schedule: diario 09:00 CLT
- Auto-limpieza threshold: 90%
- Threshold alerta disco: 85%
- Threshold alerta RAM: 85%

---

_Ultima verificacion: 2026-06-17 09:01:03_
