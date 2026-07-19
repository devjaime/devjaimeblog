export type Video = {
  title: string;
  description: string;
  date: string;
  youtubeId: string;
  tags: string[];
  featured?: boolean;
  lang?: "es" | "en";
};

const videoCatalog = [
  {
    title: "Google ADK en acción — Lo que aprendí construyendo agentes de IA con Python",
    description: "Exploración práctica de Google ADK para construir agentes IA con Python y aprendizajes de implementación.",
    date: "2026-04-06",
    youtubeId: "gYGO_CTVCg8",
    tags: ["Google ADK", "Python", "AI Agents"],
    featured: true,
    lang: "es",
  },
  {
    title: "Reconversión laboral con IA: descubre tu próximo camino profesional | Vocari",
    description: "Demo y contexto de Vocari como plataforma de reconversión laboral y orientación con inteligencia artificial.",
    date: "2026-04-03",
    youtubeId: "i8aHXES2KQQ",
    tags: ["Vocari", "AI", "Career"],
    featured: true,
    lang: "es",
  },
  {
    title: "AnclaIA — Diagnóstico de equipos marítimos con IA | Portfolio Demo",
    description: "Demo de diagnóstico técnico con IA aplicado a equipamiento marítimo y flujos de soporte especializado.",
    date: "2026-03-30",
    youtubeId: "nmWwldc5VHY",
    tags: ["RAG", "Diagnostics", "Portfolio"],
    featured: true,
    lang: "es",
  },
  {
    title: "Implementación personalizada de OpenClaw",
    description: "Implementación y análisis de OpenClaw como pieza de automatización e integración para sistemas personales.",
    date: "2026-03-22",
    youtubeId: "ulnlxVE5jxY",
    tags: ["OpenClaw", "Automation", "AI"],
    featured: true,
    lang: "es",
  },
  {
    title: "Vocari: Construí una Plataforma de IA para Orientación Vocacional en 4 Semanas — Demo Completo",
    description: "Recorrido completo por Vocari, desde la idea hasta una plataforma IA funcional para orientación vocacional.",
    date: "2026-03-22",
    youtubeId: "88If8b_icwI",
    tags: ["Vocari", "Product", "AI"],
    featured: true,
    lang: "es",
  },
  {
    title: "Construí una App Experimental de Salud con IA en menos de 2 horas (con Claude Code)",
    description: "Experimento rápido de construcción de producto con asistencia de IA aplicada a una app de salud.",
    date: "2026-01-22",
    youtubeId: "OLgVLgZT27c",
    tags: ["Claude Code", "Prototype", "AI"],
    featured: true,
    lang: "es",
  },
  {
    title: "Bienvenido a este video donde te presento JSON AI Inspector",
    description: "Demo de JSON AI Inspector, una herramienta developer para analizar y trabajar con estructuras JSON usando IA.",
    date: "2025-04-19",
    youtubeId: "oVpF1bNhj1s",
    tags: ["Developer Tools", "JSON", "AI"],
    lang: "es",
  },
  {
    title: "Agentes Copilot: La IA que Planifica y Colabora Contigo | Descubre Cómo Funciona en LangGraph",
    description: "Introducción práctica a agentes tipo Copilot, planificación y colaboración usando LangGraph.",
    date: "2025-01-19",
    youtubeId: "CHNAl6_7SGM",
    tags: ["LangGraph", "AI Agents", "Copilot"],
    lang: "es",
  },
  {
    title: "Talleres de Python e Inteligencia Artificial generativa para pycon Chile",
    description: "Contenido de talleres sobre Python e IA generativa preparado para comunidad técnica en Chile.",
    date: "2025-01-18",
    youtubeId: "6d1KYMZYFt8",
    tags: ["Python", "GenAI", "Workshop"],
    lang: "es",
  },
  {
    title: "Roadmap 2025 para IA Generativa y AI Engineering: Introducción Español",
    description: "Mapa inicial para orientar aprendizaje y práctica profesional en IA generativa y AI Engineering.",
    date: "2025-01-03",
    youtubeId: "3fSlG5eFs90",
    tags: ["Roadmap", "AI Engineering", "GenAI"],
    lang: "es",
  },
] satisfies Video[];

export const videos: Video[] = videoCatalog.toSorted(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export const featuredVideos = videos.filter((video) => video.featured).slice(0, 6);
