import type { ArticleFrontmatter, ProjectFrontmatter } from "./types";
import { getShortDescription, processContentInDir } from "./utils";

// Internal caches to avoid hitting the filesystem / import.meta.glob twice
let _articlesCache: ArticleFrontmatter[] | null = null;
let _projectsCache: ProjectFrontmatter[] | null = null;

type ArticleRecord = ArticleFrontmatter & { timestamp: string };
type ProjectRecord = ProjectFrontmatter & { timestamp: string };

const sortByTimestampDesc = <T extends { timestamp: string }>(items: T[]) =>
  items.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

const mapArticle = (data: { frontmatter: ArticleFrontmatter }) => {
  const shortDescription = getShortDescription(data.frontmatter.description);
  return {
    title: data.frontmatter.title,
    description: shortDescription,
    tags: data.frontmatter.tags,
    time: data.frontmatter.time,
    featured: data.frontmatter.featured,
    timestamp: data.frontmatter.timestamp,
    filename: `/blog/${data.frontmatter.filename}`,
  } as ArticleFrontmatter;
};

const mapProject = (data: { frontmatter: ProjectFrontmatter }) => {
  const shortDescription = getShortDescription(data.frontmatter.description);
  return {
    title: data.frontmatter.title,
    description: shortDescription,
    tags: data.frontmatter.tags,
    githubUrl: data.frontmatter.githubUrl,
    liveUrl: data.frontmatter.liveUrl,
    featured: data.frontmatter.featured,
    timestamp: data.frontmatter.timestamp,
    filename: `/projects/${data.frontmatter.filename}`,
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
