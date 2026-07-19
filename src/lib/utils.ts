import fs from "node:fs/promises";
import { GLOBAL } from "./variables";

type MarkdownData<T extends object> = {
  frontmatter: T;
  file: string;
  url: string;
  content?: string;
};

type MarkdownModule<T extends object> = {
  frontmatter: T;
  file: string;
  url: string;
};

const projectModules = import.meta.glob<MarkdownModule<object>>("/src/pages/projects/*.md");
const blogModules = import.meta.glob<MarkdownModule<object>>("/src/pages/blog/*.md");


/**
 * This function processes the content of a directory and returns an array of processed content.
 * It takes a content type, a function to process the content, and an optional directory.
 * If no directory is provided, it defaults to the current working directory.
 * 
 * @param contentType the type of content to process
 * @param processFn the function to process the content
 * @param dir the directory to process the content from
 * @returns a promise that resolves to an array of processed content
 */
export const processContentInDir = async <T extends object, K>(
  contentType: "projects" | "blog",
  processFn: (data: MarkdownData<T>) => K,
  dir: string = process.cwd(),
) => {
  const files = await fs.readdir(dir + `/src/pages/${contentType}`);
  const markdownFiles = files
    .filter((file: string) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
  const readMdFileContent = async (file: string) => {
    const contentText = await fs.readFile(`${dir}/src/pages/${contentType}/${file}.md`, "utf8");
    const modulePath = `/src/pages/${contentType}/${file}.md`;
    const loadModule = (contentType === "projects" ? projectModules : blogModules)[modulePath];

    if (!loadModule) {
      throw new Error(`Markdown module not found: ${modulePath}`);
    }

    const data = (await loadModule()) as MarkdownModule<T>;
    return processFn({ ...data, content: contentText });
  };
  return await Promise.all(markdownFiles.map(readMdFileContent));
};

/**
 * Shortens a string by removing words at the end until it fits within a certain length.
 * @param content the content to shorten
 * @param maxLength the maximum length of the shortened content (default is 20)
 * @returns a shortened version of the content
 */
export const getShortDescription = (content: string | undefined | null, maxLength = 20) => {
  // Handle undefined, null, or empty content
  if (!content || typeof content !== 'string') {
    return "Sin descripción disponible.";
  }
  
  const splitByWord = content.split(" ");
  const length = splitByWord.length;
  return length > maxLength ? splitByWord.slice(0, maxLength).join(" ") + "..." : content;
};

/**
 * Returns the readable character count of a Markdown document body. This is
 * intentionally based on rendered text rather than file size so frontmatter
 * and Markdown syntax do not make a short note appear to be a full article.
 */
export const getMarkdownBodyTextLength = (content: string | undefined | null) => {
  if (!content) return 0;

  const frontmatterEnd = content.indexOf("\n---", 3);
  const body = frontmatterEnd === -1 ? content : content.slice(frontmatterEnd + 4);

  return body
    .replace(/```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[>#*_`|~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim().length;
};

/**
 * Processes the date of an article and returns a string representing the processed date.
 * @param timestamp the timestamp to process
 * @returns a string representing the processed timestamp
 */
export const processArticleDate = (timestamp: string, lang: "es" | "en" = "es") => {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) {
    return lang === "en" ? "Date unavailable" : "Fecha no disponible";
  }
  return new Intl.DateTimeFormat(lang === "en" ? "en-US" : "es-CL", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
};

/**
 * Generates a source URL for a content item. The URL is used in meta tags and social media cards.
 * @param sourceUrl the source URL of the content
 * @param contentType the type of content (either "projects" or "blog")
 * @returns a string representing the source URL with the appropriate domain
 */
export const generateSourceUrl = (
  sourceUrl: string,
  contentType: "projects" | "blog",
) => {
  const slug = sourceUrl
    .replace(/^https?:\/\/[^/]+\/?/, "")
    .replace(new RegExp(`^/?${contentType}/`), "")
    .replace(/^\/+/, "");
  return `${GLOBAL.rootUrl}/${contentType}/${slug}`;
};
