---
layout: "../../layouts/BlogLayout.astro"
title: "Humanloop Maritime — AI-Powered Marine Technical Services"
description: "Building a marketplace for certified marine technicians using Human-in-the-Loop AI orchestration. Radar, GMDSS, AIS, GPS - when ships need experts, we connect them."
tags: ["ai", "maritime", "humanloop", "agents", "mcp"]
time: 8
featured: true
timestamp: "2026-03-23T01:00:00-0300"
filename: "2026-03-23_humanloop-maritime-ai-marine-technicians"
---

# Humanloop Maritime — AI-Powered Marine Technical Services

The maritime industry runs on critical equipment: Furuno radars, GMDSS systems, AIS transponders, GPS navigators, and fish finders. When these systems fail at sea, finding a certified technician is slow, opaque, and depends on informal networks.

**We're changing that.**

---

## The Problem

Commercial and recreational vessels depend on:

- **Radar systems** (Furuno FAR-1523, FAR-1518) for collision avoidance
- **GMDSS** (Global Maritime Distress and Safety System) for emergency communications
- **AIS** for real-time vessel identification and tracking
- **GPS/NAV** for position fixing and route planning
- **Echo sounders** for depth measurement and fish finding

Finding certified technicians for installation, maintenance, and repair? Currently a nightmare:

- No centralized directory of certified marine technicians
- Skills mismatch — not all technicians work on all equipment brands
- Geographic coverage gaps
- Slow response times for critical repairs

---

## The Inspiration

[Navily.com](https://www.navily.com) proved that a community of +1.1 million users can share nautical data collaboratively. They've mapped ports, routes, and harbor information through user contributions.

**We apply the same community model to marine technical services:**

- Verified technicians with specific skill sets
- Real-time availability
- AI-powered matching
- Human-in-the-Loop quality control

---

## The Architecture

Built on Humanloop.cl's proven HITL orchestration framework:

```
┌─────────────────────────────────────────────────────────────┐
│                  AI ORCHESTRATION LAYER                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   Vessel/Agent          Technician         Port Authority     │
│        │                    │                    │           │
│        └────────────────────┼────────────────────┘           │
│                             ▼                                 │
│              ┌─────────────────────────┐                      │
│              │   HITL Orchestrator    │                      │
│              │   (LangGraph + MCP)    │                      │
│              └───────────┬─────────────┘                      │
│                          │                                    │
│    ┌─────────────────────┼─────────────────────┐             │
│    ▼                     ▼                     ▼             │
│ ┌──────────┐      ┌──────────┐         ┌──────────┐       │
│ │ Diagnose │      │  Match   │         │ Schedule │       │
│ │  Agent   │      │  Agent   │         │  Agent   │       │
│ │  (RAG)  │      │ (Skills) │         │ (Time)   │       │
│ └──────────┘      └──────────┘         └──────────┘       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Core Agent Capabilities

**1. Diagnostic Agent (RAG)**
- Processes equipment symptoms
- Queries vector database of manuals
- Suggests probable causes
- Recommends certified technicians

**2. Matching Agent**
- Matches job requirements to technician skills
- Considers location, availability, certifications
- Ranks by relevance score
- Handles urgent vs. routine classification

**3. Scheduling Agent**
- Coordinates availability windows
- Integrates with port schedules
- Handles emergency callbacks
- Manages parts procurement timeline

---

## Technical Skills in the System

### Radar Systems
- **Furuno:** FAR-1523, FAR-1518, FAR-2127, FAR-3000 series
- **Capabilities:** Installation, calibration, ACE configuration, target tracking setup
- **Certifications:** NMEA, Furuno certified installer

### GMDSS Maintenance
- **Equipment:** VHF/HF radios, EPIRB, SART
- **Requirements:** SOLAS certification
- **Services:** Preventive maintenance, battery tests, distress testing

### AIS (Automatic Identification System)
- **Equipment:** FA-150, FA-170, MG-500 series
- **Services:** Transponder diagnostics, channel programming, GPS synchronization
- **Regulations:** IMO compliance verification

### Navigation Systems
- **GPS:** GP-170, GP-39, NAVPILOT series
- **Services:** Antenna replacement, position calibration, ECDIS integration
- **Standards:** IALA, IMO navigation standards

### Sonar & Echo Sounders
- **Equipment:** DFF3D, FCV-628, FE-700
- **Services:** Transducer calibration, sonar diagnostics, software updates
- **Capabilities:** Deep water, shallow water, fish finding

### Communication Systems
- **Equipment:** FS-1575, FS-2075, ICOM radios
- **Services:** Radio installation, DSC configuration, channel 16 testing
- **Certification:** GMDSS compliance

---

## Data Sources

### Furuno USA — Product Documentation

We've catalogued the Furuno product ecosystem for our technical database:

| Category | Products | Documentation |
|----------|---------|--------------|
| Radars | FAR-1523, FAR-1518, FAR-2127 | Manuals, specs, installation guides |
| NavNet MFDs | TZT22X, TZTL15F, TZTL9D | Integration guides, network configs |
| Sonars | DFF3D, CSH8LMK2 | Calibration procedures |
| GPS | GP-170, GP-39 | Position fix protocols |
| Instruments | FI70, RD50 | Display configuration |

### Technical Knowledge Base

Vectorized using **zvec** (Alibaba's SQLite vector search):

- 8,000+ queries/second
- Hybrid search (keyword + semantic)
- Built-in reranking
- Works offline — perfect for port deployments

---

## The Market Opportunity

**Furuno alone operates in 150+ countries.**

The specialized marine technician gig economy is:

- **High-value niche** — technical certification barriers
- **Under-digitized** — mostly word-of-mouth
- **Globally distributed** — ports everywhere
- **Time-critical** — vessel downtime is expensive

---

## Revenue Model

| Tier | Price | Commission | Features |
|------|-------|-------------|----------|
| Technician Pro | $29/month | 15% per job | Featured profile, 10 services |
| Technician Enterprise | $99/month | 15% per job | Unlimited, analytics, priority support |
| Captain Free | Free | — | Search, direct contact |
| Captain Premium | $9/month | — | History, favorites, alerts |

**Key metric:** 85% of job compensation goes to the technician.

---

## Technology Stack

- **AI Orchestration:** LangGraph + MCP (Model Context Protocol)
- **Vector Search:** zvec (SQLite-native, works offline)
- **Frontend:** Next.js (existing Humanloop infrastructure)
- **Database:** PostgreSQL + zvec for embeddings
- **Deployment:** Edge-ready for port locations worldwide

---

## Status

**Current phase:** Data collection and architecture design

Completed:
- ✅ Furuno product catalog research
- ✅ Technical skills taxonomy definition
- ✅ Architecture diagram
- ✅ Data schema design

In progress:
- 🔄 Manual scraping and vectorization
- 🔄 Technician profile schema
- 🔄 MCP tools for marine diagnostics

Next:
- 📋 MVP: Technician search by location + skill
- 📋 RAG-powered diagnostic chat
- 📋 Real user testing with marine technicians

---

## The Big Picture

Every year, thousands of vessels — from fishing boats to cargo ships — need certified marine technicians. The current system: ask around, wait for callbacks, hope someone is nearby.

**Our system: AI matches the right technician to the right job, with human expertise as the final quality gate.**

Maritime is just the beginning. The same HITL pattern applies to:

- Aviation maintenance
- Industrial equipment service
- Medical device support

**We're building the infrastructure for expert-on-demand in any technical field.**

---

*Project in active development. Follow along as we build the future of marine technical services.*
