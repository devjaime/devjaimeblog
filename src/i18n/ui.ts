export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = "es";

export const routeKeys = ["home", "about", "projects", "blog", "videos", "services", "contact", "cv"] as const;
export type RouteKey = (typeof routeKeys)[number];

export const routes: Record<Locale, Record<RouteKey, string>> = {
  es: {
    home: "/",
    about: "/about",
    projects: "/projects",
    blog: "/blog",
    videos: "/videos",
    services: "/services",
    contact: "/contact",
    cv: "/cv",
  },
  en: {
    home: "/en",
    about: "/en/about",
    projects: "/en/projects",
    blog: "/en/blog",
    videos: "/en/videos",
    services: "/en/services",
    contact: "/en/contact",
    cv: "/cv",
  },
};

export const ui = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      blog: "Blog",
      videos: "Videos",
      services: "Servicios",
      contact: "Contacto",
      cv: "CV",
    },
    meta: {
      title: "devjaime • AI & Software Engineering from Chile",
      description:
        "Blog y portfolio de Jaime Hernández, devjaime: ingeniero de software e IA desde Chile, enfocado en backend, cloud, agentes, RAG y sistemas reales.",
    },
    hero: {
      eyebrow: "devjaime · AI & Software Engineering from Chile",
      title: "Construyo sistemas inteligentes que funcionan en producción.",
      subtitle:
        "Soy Jaime Hernández, devjaime. Ingeniero de software e IA desde Chile. Diseño backends, agentes, RAG pipelines, automatizaciones y plataformas cloud para resolver problemas reales de negocio.",
      ctas: {
        articles: "Leer artículos",
        videos: "Ver videos",
        projects: "Ver proyectos",
        contact: "Contactar",
      },
      boardTitle: "Sistema IA en producción",
      boardRegion: "Chile / LatAm",
      terminal: "$ deploy ai-workflow --with-observability",
      checks: "checks: retrieval, latency, cost, human-review",
    },
    authority: ["Backend Engineering", "AI Agents", "RAG Systems", "Cloud & Data", "Developer Tools"],
    stack: {
      eyebrow: "Stack con intención",
      title: "Ingeniería para sistemas que viven en producción.",
      capabilities: [
        {
          title: "Backend productivo",
          text: "Microservicios, APIs y flujos transaccionales con Go, Node/NestJS, Kubernetes y observabilidad.",
          items: ["Go", "NestJS", "Pub/Sub", "Kubernetes", "Datadog"],
        },
        {
          title: "IA aplicada",
          text: "Agentes, RAG y automatizaciones conectadas a sistemas reales, con evaluación y control humano.",
          items: ["LangGraph", "LlamaIndex", "MCP", "RAGAS", "n8n"],
        },
        {
          title: "Cloud y datos",
          text: "Pipelines, BigQuery, PostgreSQL y arquitectura cloud para que la IA tenga datos confiables.",
          items: ["GCP", "BigQuery", "PostgreSQL", "Python", "FastAPI"],
        },
      ],
    },
    writing: {
      eyebrow: "Writing",
      title: "Escritura técnica",
      intro: "Ensayos prácticos sobre IA aplicada, backend, agentes y la realidad de construir software desde LatAm.",
      viewAll: "Ver todos",
      latest: "Último artículo",
      noteSpanish:
        "La mayoría de los artículos largos están publicados en español por ahora. La versión inglesa prioriza navegación, contexto y curaduría.",
    },
    projects: {
      eyebrow: "Case studies",
      title: "Casos y proyectos",
      intro: "Productos, experimentos y herramientas donde el aprendizaje técnico se conecta con usuarios, datos y operación.",
      viewAll: "Ver todos",
    },
    videos: {
      eyebrow: "YouTube",
      title: "Videos, demos y experimentos",
      intro:
        "Demos de productos, agentes, RAG, automatización e IA aplicada. Curados por fecha desde el canal de devjaime.",
      viewAll: "Ver todos los videos",
      watch: "Ver video",
      featuredTitle: "Videos recientes",
    },
    blogPage: {
      eyebrow: "devjaime / blog",
      title: "Notas de ingeniería para construir IA real, no solo demos.",
      intro: "Notas de ingeniería sobre IA aplicada, backend, cloud, agentes, RAG y carrera técnica en LatAm.",
      topics: ["AI Agents", "RAG", "Go", "GCP", "Backend", "Career"],
    },
    about: {
      title: "Ingeniería backend, IA aplicada y una carrera construida en producción.",
      intro:
        "Soy Jaime Hernández, también conocido como devjaime. Trabajo en ingeniería de software, backend e inteligencia artificial aplicada. Me interesa construir sistemas que funcionen en producción: APIs, microservicios, pipelines de datos, agentes IA, RAG y herramientas que ayuden a equipos reales a operar mejor.",
      focusTitle: "Mi foco",
      focus:
        "IA que se integra con datos, procesos y equipos reales: agentes con herramientas, RAG evaluable, automatizaciones con trazabilidad y backends mantenibles.",
      journey: "De sistemas empresariales a IA de producción.",
      ctaTitle: "Estoy construyendo en público.",
      ctaText: "Escribo y grabo sobre lo que aprendo implementando backends, agentes, RAG, automatización y productos IA como Vocari.",
    },
    services: {
      eyebrow: "Consultoría técnica",
      title: "IA aplicada con criterio de backend, datos y operación.",
      intro: "Ayudo a equipos a llevar IA, automatización y backend cloud desde el prototipo hasta producción.",
      processTitle: "Primero sistemas, después modelos.",
      contact: "Contactar por LinkedIn",
    },
    contact: {
      title: "Hablemos de software, IA y sistemas reales.",
      intro: "Para consultoría, colaboración técnica, oportunidades remotas o proyectos donde la IA necesita llegar a producción.",
      availability: "Disponible para proyectos seleccionados",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      youtube: "YouTube",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      blog: "Blog",
      videos: "Videos",
      services: "Services",
      contact: "Contact",
      cv: "CV",
    },
    meta: {
      title: "devjaime • Software & AI Engineer from Chile",
      description:
        "The blog and portfolio of Jaime Hernández, devjaime: a Software & AI Engineer from Chile focused on backend, cloud, agents, RAG and production systems.",
    },
    hero: {
      eyebrow: "devjaime · Software & AI Engineering from Chile",
      title: "I build intelligent systems that work in production.",
      subtitle:
        "I’m Jaime Hernández, also known as devjaime. A software and AI engineer from Chile building backends, agents, RAG pipelines, automations and cloud platforms for real business workflows.",
      ctas: {
        articles: "Read articles",
        videos: "Watch videos",
        projects: "View projects",
        contact: "Contact",
      },
      boardTitle: "Production AI system",
      boardRegion: "Chile / LatAm",
      terminal: "$ deploy ai-workflow --with-observability",
      checks: "checks: retrieval, latency, cost, human-review",
    },
    authority: ["Backend Engineering", "AI Agents", "RAG Systems", "Cloud & Data", "Developer Tools"],
    stack: {
      eyebrow: "Intentional stack",
      title: "Engineering for systems that live in production.",
      capabilities: [
        {
          title: "Production backend",
          text: "Microservices, APIs and transactional workflows with Go, Node/NestJS, Kubernetes and observability.",
          items: ["Go", "NestJS", "Pub/Sub", "Kubernetes", "Datadog"],
        },
        {
          title: "Applied AI",
          text: "Agents, RAG and automations connected to real systems, with evaluation and human control.",
          items: ["LangGraph", "LlamaIndex", "MCP", "RAGAS", "n8n"],
        },
        {
          title: "Cloud and data",
          text: "Pipelines, BigQuery, PostgreSQL and cloud architecture so AI has reliable data underneath.",
          items: ["GCP", "BigQuery", "PostgreSQL", "Python", "FastAPI"],
        },
      ],
    },
    writing: {
      eyebrow: "Writing",
      title: "Technical writing",
      intro: "Practical notes on applied AI, backend systems, agents and building software from LatAm.",
      viewAll: "View all",
      latest: "Latest article",
      noteSpanish:
        "Most long-form articles are currently published in Spanish. This English section gives context and a curated path through the same archive.",
    },
    projects: {
      eyebrow: "Case studies",
      title: "Projects and case studies",
      intro: "Products, experiments and tools where technical learning meets users, data and operations.",
      viewAll: "View all",
    },
    videos: {
      eyebrow: "YouTube",
      title: "Videos, demos and experiments",
      intro:
        "Product demos, agents, RAG, automation and applied AI. Curated by date from the devjaime channel.",
      viewAll: "View all videos",
      watch: "Watch video",
      featuredTitle: "Recent videos",
    },
    blogPage: {
      eyebrow: "devjaime / blog",
      title: "Engineering notes for building real AI, not just demos.",
      intro: "Notes on applied AI, backend, cloud, agents, RAG and technical career growth in LatAm.",
      topics: ["AI Agents", "RAG", "Go", "GCP", "Backend", "Career"],
    },
    about: {
      title: "Backend engineering, applied AI and a career built in production.",
      intro:
        "I’m Jaime Hernández, also known as devjaime. I work across software engineering, backend systems and applied AI. I care about production-grade systems: APIs, microservices, data pipelines, AI agents, RAG and tools that help real teams operate better.",
      focusTitle: "My focus",
      focus:
        "Applied AI that connects with real data, processes and teams: tool-using agents, evaluable RAG, traceable automations and maintainable backends.",
      journey: "From enterprise systems to production AI.",
      ctaTitle: "I build in public.",
      ctaText: "I write and record what I learn while building backends, agents, RAG, automation and AI products such as Vocari.",
    },
    services: {
      eyebrow: "Technical consulting",
      title: "Applied AI with backend, data and operations judgment.",
      intro: "I help teams move AI, automation and cloud backend work from prototype to production.",
      processTitle: "Systems first, models second.",
      contact: "Contact on LinkedIn",
    },
    contact: {
      title: "Let’s talk about software, AI and real systems.",
      intro: "For consulting, technical collaboration, remote opportunities or projects where AI needs to reach production.",
      availability: "Available for selected projects",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      youtube: "YouTube",
    },
  },
} as const;

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

export function getAlternatePath(pathname: string, targetLocale: Locale) {
  const clean = pathname.replace(/\/$/, "") || "/";
  const currentKey = routeKeys.find((key) => routes.es[key] === clean || routes.en[key] === clean);
  if (currentKey) return routes[targetLocale][currentKey];
  if (clean.startsWith("/blog/") || clean.startsWith("/projects/")) return clean;
  const withoutEn = clean === "/en" ? "/" : clean.replace(/^\/en(?=\/)/, "");
  if (targetLocale === "en") return withoutEn === "/" ? "/en" : `/en${withoutEn}`;
  return withoutEn;
}
