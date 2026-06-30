// Set any item to undefined to remove it from the site or to use the default value

export const GLOBAL = {
  // Site metadata
  username: "devjaime",
  fullName: "Jaime Hernández",
  rootUrl: "https://jaimehernandez.dev",
  
  // Spanish content - senior AI/software engineer positioning
  shortDescription: "AI & Software Engineering from Chile",
  longDescription: "Blog y portfolio de Jaime Hernández, backend engineer en Falabella y constructor de sistemas de IA en producción desde Chile: agentes, RAG, microservicios, GCP, Go y Python.",
  heroDescription: "Soy Jaime Hernández, backend engineer en Falabella y builder de Vocari. Diseño backends, agentes, RAG pipelines y plataformas cloud para convertir tecnología compleja en impacto real.",
  connectButton: "Trabajemos juntos",
  viewCodeButton: "Ver proyectos",
  profileAlt: "Jaime Hernández - AI and Software Engineer from Chile",

  // SEO Keywords - AI Consultant focused
  keywords: [
    "Jaime Hernández",
    "AI Consultant",
    "Consultor IA",
    "inteligencia artificial",
    "AI Agent",
    "agentes autónomos",
    "automatización",
    "LangChain",
    "LangGraph",
    "CrewAI",
    "LLM",
    "RAG",
    "Chile",
    "Latinoamérica",
    "AI automation",
    "artificial intelligence",
    "Golang",
    "Python",
    "backend development",
    "cloud computing",
    "microservices",
    "PostgreSQL",
    "GCP",
    "AWS",
    "Vocari",
    "AI implementation",
    "business automation"
  ],

  // Social media links
  githubProfile: "https://github.com/devjaime/",
  twitterProfile: "https://twitter.com/hsjhernandez",
  linkedinProfile: "https://www.linkedin.com/in/devjaime/",

  // Common text names used throughout the site
  articlesName: "Escritura técnica",
  projectsName: "Casos y proyectos",
  viewAll: "Ver Todos",

  // Common descriptions used throughout the site
  noArticles: "No hay artículos destacados aún.",
  noProjects: "No hay proyectos destacados aún.",

  // Blog metadata
  blogTitle: "Escritura técnica",
  blogShortDescription: "Notas de ingeniería sobre IA aplicada, backend, cloud, agentes, RAG y carrera técnica en LatAm.",
  blogLongDescription: "Artículos técnicos de Jaime Hernández sobre sistemas de IA en producción, agentes, RAG, Go, Python, GCP, microservicios, automatización y aprendizaje profesional.",

  // Project metadata
  projectsTitle: "Casos y proyectos",
  projectShortDescription: "Sistemas, experimentos y productos donde IA, backend y cloud se encuentran con problemas reales.",
  projectLongDescription: "Proyectos de Jaime Hernández: Vocari, plataformas con agentes, RAG, microservicios, automatizaciones Python y herramientas developer.",

  // Profile image
  profileImage: "devjaime.webp",

  // Menu items
  menu: {
    home: "/",
    about: "/about",
    projects: "/projects",
    blog: "/blog",
    videos: "/videos",
    services: "/services",
    contact: "/contact",
    cv: "/cv",
  },

  // External links
  youtubeChannel: "https://www.youtube.com/@devjaime",

  // Skills and expertise - AI Consultant focus
  skills: {
    languages: ["Go", "Python", "TypeScript", "JavaScript"],
    databases: ["PostgreSQL", "Redis", "MongoDB", "Oracle"],
    cloud: ["GCP", "AWS", "Azure", "Docker", "Kubernetes"],
    frameworks: ["Astro", "Next.js", "React", "Node.js", "FastAPI", "NestJS"],
    ai: ["LangChain", "LangGraph", "LlamaIndex", "MCP", "RAG", "Vertex AI", "Claude API", "n8n"],
    tools: ["Git", "Grafana", "Datadog", "Lens", "Jupyter", "Postman"]
  },

  // Experience highlights - AI Consultant positioning
  experience: {
    currentRole: "Backend Engineer & AI Builder",
    yearsOfExperience: "18+ años",
    focusAreas: ["Backend productivo", "Agentes IA", "RAG y automatización"],
    location: "Chile, Latinoamérica"
  },

  // Services section
  servicesTitle: "Consultoría técnica",
  servicesShortDescription: "Ayudo a equipos a llevar IA, automatización y backend cloud desde el prototipo hasta producción.",
  services: [
    {
      title: "Arquitectura de agentes IA",
      description: "Diseño de flujos con herramientas, memoria, evaluación y límites operativos para agentes útiles en negocio.",
      icon: "AI"
    },
    {
      title: "RAG y conocimiento empresarial",
      description: "Pipelines de recuperación, chunking, evaluación y observabilidad para usar conocimiento interno con criterio.",
      icon: "RAG"
    },
    {
      title: "Backend cloud y datos",
      description: "Microservicios, Pub/Sub, BigQuery, APIs y jobs confiables para que la IA tenga sistemas sólidos debajo.",
      icon: "GCP"
    },
    {
      title: "Automatización aplicada",
      description: "Integración de n8n, Python y APIs para reducir trabajo manual sin perder trazabilidad ni control humano.",
      icon: "OPS"
    }
  ]
};
