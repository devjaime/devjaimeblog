import { loadArticles } from "./contentLoaders";
import type { ArticleFrontmatter } from "./types";
import { GLOBAL } from "./variables";

const SITE_URL = GLOBAL.rootUrl.replace(/\/$/, "");

const cleanText = (value: string | undefined) =>
  (value ?? "Sin descripción disponible.")
    .replace(/\s+/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/([\\[\]])/g, "\\$1")
    .trim();

const articleUrl = (path: string) =>
  new URL(path, `${SITE_URL}/`).toString().replace(/\(/g, "%28").replace(/\)/g, "%29");

const articleLine = (article: ArticleFrontmatter) =>
  `- [${cleanText(article.title)}](${articleUrl(article.filename)}): ${cleanText(article.description)}`;

const articleSection = (title: string, articles: ArticleFrontmatter[]) => {
  if (articles.length === 0) return "";
  return [`## ${title}`, "", ...articles.map(articleLine), ""].join("\n");
};

export async function generateLlmsTxt() {
  const articles = (await loadArticles()).filter(
    (article) => article.draft !== true && article.reviewStatus !== "draft" && article.title && article.filename,
  );

  const spanishEditorial = articles.filter(
    (article) => article.lang !== "en" && article.source !== "agentic",
  );
  const englishEditorial = articles.filter(
    (article) => article.lang === "en" && article.source !== "agentic",
  );
  const agenticEntries = articles.filter((article) => article.source === "agentic");

  const navigation = [
    "## Navegación principal",
    "",
    `- [Inicio](${SITE_URL}/): Perfil profesional y contenido destacado.`,
    `- [Blog](${SITE_URL}/blog): Índice web de artículos en español.`,
    `- [Blog en inglés](${SITE_URL}/en/blog): Índice web de artículos en inglés.`,
    `- [Proyectos](${SITE_URL}/projects): Proyectos de software e inteligencia artificial.`,
    `- [Acerca de](${SITE_URL}/about): Información sobre el autor.`,
    `- [Sitemap](${SITE_URL}/sitemap-index.xml): Mapa XML generado durante el build.`,
  ].join("\n");

  return [
    "# Jaime Hernández — Blog de ingeniería de software e inteligencia artificial",
    "> Artículos técnicos en español e inglés sobre agentes de IA, LLM, RAG, backend, microservicios, cloud y arquitectura de software.",
    "Autor: Jaime Hernández (devjaime), ingeniero de software en Chile. Los enlaces siguientes apuntan a las URLs canónicas de los artículos publicados.",
    navigation,
    articleSection("Artículos editoriales en español", spanishEditorial),
    articleSection("Editorial articles in English", englishEditorial),
    articleSection("Contenido automatizado y reportes", agenticEntries),
  ]
    .filter(Boolean)
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trimEnd()
    .concat("\n");
}

export const llmsTextResponse = async () =>
  new Response(await generateLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
