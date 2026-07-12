import type { ArticleFrontmatter, ProjectFrontmatter } from "./types";
import { dateFromPath, normalizeEditorial } from "./editorial";
import { getMarkdownBodyTextLength, getShortDescription, processContentInDir } from "./utils";

// Internal caches to avoid hitting the filesystem / import.meta.glob twice
let _articlesCache: ArticleFrontmatter[] | null = null;
let _projectsCache: ProjectFrontmatter[] | null = null;

type ArticleRecord = ArticleFrontmatter & { timestamp: string };
type ProjectRecord = ProjectFrontmatter & { timestamp: string };

const sortByTimestampDesc = <T extends { timestamp: string }>(items: T[]) =>
  items.sort((a, b) => {
    const aTime = new Date(a.timestamp).getTime();
    const bTime = new Date(b.timestamp).getTime();
    return (Number.isNaN(bTime) ? 0 : bTime) - (Number.isNaN(aTime) ? 0 : aTime);
  });

const cleanSlug = (value?: string) => {
  if (!value) return undefined;
  const slug = value.replace(/^\/?(blog|projects)\//, "").replace(/\.mdx?$/, "").trim();
  if (!slug || slug.includes("+ ") || slug.includes(" +") || /\s/.test(slug)) return undefined;
  return slug;
};

const slugFromFile = (file?: string) => cleanSlug(file?.split("/").pop());

const SHORT_AI_POST_MIN_LENGTH = 40;
const SHORT_AI_POST_MAX_LENGTH = 300;

const mapArticle = (data: { frontmatter: ArticleFrontmatter; file?: string; url?: string; content?: string }) => {
  // Astro routes Markdown files from their physical filename. Prefer that
  // value over a legacy frontmatter filename, which can differ by _ vs -.
  const slug = cleanSlug(data.url) ?? slugFromFile(data.file) ?? cleanSlug(data.frontmatter.filename) ?? data.frontmatter.filename;
  const shortDescription = getShortDescription(data.frontmatter.description);
  const bodyTextLength = getMarkdownBodyTextLength(data.content);
  const isShortAiPost =
    bodyTextLength >= SHORT_AI_POST_MIN_LENGTH && bodyTextLength < SHORT_AI_POST_MAX_LENGTH;
  return normalizeEditorial({
    ...data.frontmatter,
    title: data.frontmatter.title,
    description: shortDescription,
    tags: data.frontmatter.tags,
    time: data.frontmatter.time,
    featured: data.frontmatter.featured,
    timestamp: data.frontmatter.timestamp ?? dateFromPath(slug) ?? "",
    filename: `/blog/${slug}`,
    // Short automated notes are kept accessible but visibly separated from
    // manually written editorial articles.
    source: isShortAiPost ? "agentic" : data.frontmatter.source,
  } as ArticleFrontmatter);
};

const mapProject = (data: { frontmatter: ProjectFrontmatter; file?: string }) => {
  const slug = cleanSlug(data.frontmatter.filename) ?? slugFromFile(data.file) ?? data.frontmatter.filename;
  const shortDescription = getShortDescription(data.frontmatter.description);
  return {
    title: data.frontmatter.title,
    description: shortDescription,
    tags: data.frontmatter.tags,
    githubUrl: data.frontmatter.githubUrl,
    liveUrl: data.frontmatter.liveUrl,
    featured: data.frontmatter.featured,
    timestamp: data.frontmatter.timestamp,
    filename: `/projects/${slug}`,
  } as ProjectFrontmatter;
};

export const loadArticles = async () => {
  if (_articlesCache) return _articlesCache;
  const loaded = await processContentInDir<ArticleFrontmatter, ArticleFrontmatter>(
    "blog",
    mapArticle,
  );
  _articlesCache = sortByTimestampDesc(loaded as ArticleRecord[]);
  return _articlesCache;
};

export const loadProjects = async () => {
  if (_projectsCache) return _projectsCache;
  const loaded = await processContentInDir<ProjectFrontmatter, ProjectFrontmatter>(
    "projects",
    mapProject,
  );
  _projectsCache = sortByTimestampDesc(loaded as ProjectRecord[]);
  return _projectsCache;
};

export const loadFeaturedArticles = async () => {
  const all = await loadArticles();
  return all.filter((a) => a.featured);
};

export const loadFeaturedProjects = async () => {
  const all = await loadProjects();
  return all.filter((p) => p.featured);
};
