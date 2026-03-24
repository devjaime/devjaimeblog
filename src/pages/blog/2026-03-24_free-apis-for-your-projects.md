---
layout: "../../layouts/BlogLayout.astro"
title: "Free APIs for Your Projects - Jaime Hernández"
description: "A curated list of free public APIs useful for AI projects, maritime tech, vocational platforms, and more. No API key required options included."
tags: ["api", "development", "ai", "integrations", "tools"]
time: 12
featured: true
timestamp: "2026-03-24T02:20:00-0300"
filename: "2026-03-24_free-apis-for-your-projects"
---

# Free APIs for Your Projects

Based on your active projects (Vocari.cl, FlipReady, Humanloop Maritime, HealthAI), here's a curated list of APIs that can accelerate development.

---

## 🤖 AI & Machine Learning APIs

### Free & Open Source

| API | Description | Free Tier | Auth |
|-----|-------------|-----------|------|
| **Ollama** | Run LLMs locally (Llama, Mistral, etc.) | Unlimited | None |
| **Hugging Face Inference API** | Access 1000+ models | 30k tokens/month | API Key |
| **Claude via Anthropic** | Most capable AI | $5/1M tokens | API Key |
| **Groq** | Fast inference API | 14,400 requests/day | API Key |
| **Fireworks AI** | Open source models | 500k tokens/month | API Key |

### For Maritime/Vocational Projects

```python
# Example: Using Hugging Face for text classification
import requests

API_URL = "https://api-inference.huggingface.co/models/bert-base"
headers = {"Authorization": f"Bearer {HF_TOKEN}"}

response = requests.post(API_URL, headers=headers, json={"inputs": "marine radar installation"})
```

---

## 🧭 Geolocation & Maps

### Best Free Options

| API | Description | Limits | Auth |
|-----|-------------|--------|------|
| **OpenStreetMap/Nominatim** | Maps, geocoding, routing | 1 req/sec | None |
| **Geoapify** | Maps, places, routing | 3,000 credits/day | API Key |
| **MapTiler** | Maps tiles, geocoding | 100k tiles/month | API Key |
| **Positionstack** | Geocoding & reverse geocoding | 25k/month | API Key |

### For Maritime

| API | Description | Limits | Auth |
|-----|-------------|--------|------|
| **Marine Traffic** | Ship tracking, ports | Limited free | API Key |
| **VesselFinder** | AIS data, vessel positions | Limited | API Key |
| **Searoute** | Maritime routing, distances | N/A | Contact |

```javascript
// Example: Geocoding with Nominatim
const response = await fetch(
  'https://nominatim.openstreetmap.org/search?q=Valparaíso+Chile&format=json'
);
const data = await response.json();
// Returns: lat, lon, display_name
```

---

## 📡 Weather & Environmental

### Free Tiers

| API | Description | Limits | Auth |
|-----|-------------|--------|------|
| **Open-Meteo** | Weather, marine, solar | Unlimited | None |
| **OpenWeatherMap** | Weather, air quality | 60 calls/min | API Key |
| **WeatherAPI** | Weather, astronomy | 1M calls/month | API Key |
| **Storm Glass** | Marine weather, tides | 50 calls/day | API Key |

```python
# Example: Marine weather with Open-Meteo
import requests

url = "https://marine-api.open-meteo.com/v1/marine"
params = {
    "latitude": -33.05,
    "longitude": -71.62,
    "hourly": "wave_height,wave_direction",
    "forecast_days": 7
}
response = requests.get(url, params=params)
```

---

## 💼 Jobs & Vocational

### For Vocari.cl

| API | Description | Limits | Auth |
|-----|-------------|--------|------|
| **Adzuna** | Job listings by location | 100 req/day | API Key |
| **Jooble** | Job search aggregation | Contact | API Key |
| **OpenSkills** | Skills taxonomy, job titles | N/A | None |

### Chile-Specific

```javascript
// Example: Chile job data from Adzuna
const response = await fetch(
  'https://api.adzuna.com/v1/api/jobs/cl/search/1?' +
  'app_id=YOUR_ID&app_key=YOUR_KEY&where=Chile&results_per_page=20'
);
```

---

## 🏥 Health & Fitness

### For HealthAI

| API | Description | Limits | Auth |
|-----|-------------|--------|------|
| **OpenFoodFacts** | Food database, nutrition | Unlimited | None |
| **HealthFinder** | Health topics, guidelines | Unlimited | None |
| **Nutritionix** | Food tracking, nutrition | 100/day | API Key |
| **Apple HealthKit** | iOS health data | OAuth | OAuth |

---

## 💳 Payments

### For Any Commercial Project

| API | Description | Fees | Auth |
|-----|-------------|------|-----|
| **Stripe** | Cards, subscriptions | 2.9% + 30¢ | API Key |
| **MercadoPago** | LATAM payments | 3-6% | API Key |
| **PayPal** | Classic + Braintree | 2.9% + $0.30 | API Key |
| **LemonSqueezy** | SaaS payments | 5% flat | API Key |

---

## 📧 Email & Communications

| API | Description | Free Tier | Auth |
|-----|-------------|-----------|------|
| **Resend** | Transactional email | 3,000/month | API Key |
| **Mailgun** | Transactional email | 5,000/month | API Key |
| **Twilio** | SMS, calls | $15 credit | API Key |
| **Brevo (Sendinblue)** | Email, SMS | 300/day email | API Key |

---

## 🗄️ Database & Storage

### For Humanloop Maritime

| API | Description | Free Tier | Auth |
|-----|-------------|-----------|------|
| **Supabase** | PostgreSQL + Auth + Storage | 500MB | API Key |
| **PlanetScale** | MySQL-compatible serverless | 1 DB | API Key |
| **MongoDB Atlas** | Document database | 512MB | API Key |
| **zvec** | SQLite vector search | Unlimited | None |

```bash
# zvec - perfect for maritime equipment embeddings
cargo install zvec
```

---

## 📊 Data & Analytics

| API | Description | Free Tier | Auth |
|-----|-------------|-----------|------|
| **BigQuery** | Google analytics data | 1TB queries/month | OAuth |
| **Plausible** | Privacy analytics | 10k pageviews | API Key |
| **Google Trends** | Search trends | Limited | API Key |

---

## 🔍 Search & Discovery

### For RAG Systems

| API | Description | Free Tier | Auth |
|-----|-------------|-----------|------|
| **SerpAPI** | Google search results | 100/month | API Key |
| **Brave Search** | Web search API | 2,000/month | API Key |
| **DuckDuckGo** | Privacy search | 100/month | API Key |

---

## 🚢 Maritime-Specific

### Equipment Manuals & Specs

| Source | Description | Access |
|--------|-------------|--------|
| **Furunousa.com** | Radar, sonar manuals | Public |
| **Raymarine** | MFD documentation | Public |
| **ICCAT** | Ship tracking database | Registration |
| **ITU** | Maritime radio frequencies | Public |

### Weather & Navigation

| API | Description | Auth |
|-----|-------------|------|
| **NOAA Marine** | US coastal forecasts | None |
| **Windfinder** | Wind, waves, weather | API Key |
| **SailGrib** | GRIB files, routing | Paid |

---

## 🎯 Recommended Stack by Project

### Humanloop Maritime
- **zvec** (local vector DB) + **Supabase** (user data)
- **Open-Meteo** (marine weather)
- **OpenStreetMap** (port locations)
- **Claude API** (RAG for manuals)

### Vocari.cl
- **Supabase** (student data, chat history)
- **Claude API** (AI counselor)
- **SerpAPI** (job market research)
- **Adzuna** (job listings)

### HealthAI
- **HealthKit** (Apple Watch data)
- **OpenFoodFacts** (nutrition database)
- **HealthFinder** (medical guidelines)

### FlipReady
- **Google Maps API** (property locations)
- **MercadoPago** (payments)
- **Twilio** (notifications)

---

## Quick Start: API Key Setup

```bash
# Create .env file
cat > .env << EOF
# AI
ANTHROPIC_API_KEY=sk-ant-...
HUGGINGFACE_TOKEN=hf_...

# Geolocation  
OPENMETEO_API_KEY=

# Payments
STRIPE_SECRET_KEY=sk_live_...
MERCADO_PAGO_TOKEN=APP_...

# Communications
RESEND_API_KEY=re_...
TWILIO_SID=AC...
TWILIO_TOKEN=...
EOF
```

---

## ⚠️ Important Notes

1. **Rate limits** - Most free tiers have limits. Implement caching!
2. **API keys** - Never commit to git. Use environment variables.
3. **CORS** - Some APIs block browser requests. Use a proxy.
4. **Reliability** - Free tiers can disappear. Have fallbacks.

---

*This list is updated regularly. Last update: March 2026*
