export type EditorialType =
  | "article"
  | "note"
  | "case-study"
  | "agentic-status"
  | "changelog"
  | "experiment";

export type EditorialSource = "human" | "agentic" | "hybrid";

export type ReviewStatus = "draft" | "reviewed" | "published";

export type EditorialOrigin = {
  commitSha?: string;
  branch?: string;
  generatedBy?: string;
  agentName?: string;
  workflow?: string;
  runId?: string;
};

export type EditorialMetrics = {
  commits?: number;
  filesChanged?: number;
  insertions?: number;
  deletions?: number;
  postsUpdated?: number;
  buildStatus?: string;
  lighthousePerformance?: number;
  lighthouseAccessibility?: number;
  lighthouseBestPractices?: number;
  lighthouseSEO?: number;
  readingTime?: number;
  wordCount?: number;
  videosEmbedded?: number;
  internalLinks?: number;
  externalLinks?: number;
};

export type EditorialMeta = {
  pubDate?: string;
  updatedDate?: string;
  lang?: "es" | "en";
  type?: EditorialType;
  source?: EditorialSource;
  author?: string | { name?: string; url?: string };
  authorHandle?: string;
  reviewStatus?: ReviewStatus;
  origin?: EditorialOrigin;
  metrics?: EditorialMetrics;
};

export type ProjectFrontmatter = {
  /**
   * The title of the project
   */
  title: string;

  /**
   * The description of the project
   */
  description: string;

  /**
   * The tags of the project
   * (eg. ["JavaScript", "React", "Node.js"])
   */
  tags?: string[];

  /**
   * The GitHub URL of the project
   */
  githubUrl?: string;

  /**
   * The live URL of the project
   */
  liveUrl?: string;

  /**
   * Whether the project should be featured on the homepage
   */
  featured?: boolean;

  /**
   * The date the project was created or started in W3C format
   * (this will determine the sort order of the projects)
   */
  timestamp: string;

  /**
   * The URL of the project on the website
   * (eg. https://zaggonaut.dev/projects/my-project)
   */
  filename: string;
};

export type ArticleFrontmatter = EditorialMeta & {
  /**
   * The title of the article
   */
  title: string;

  /**
   * THe summary description of the article
   */
  description: string;

  /**
   * The tags of the article
   * (eg. ["JavaScript", "React", "Node.js"])
   */
  tags?: string[];

  /**
   * The estimated time to read the article in minutes
   */
  time: number;

  /**
   * Whether the article should be featured on the homepage
   */
  featured: boolean;

  /**
   * The timestamp the article was published in W3C format
   */
  timestamp: string;

  publishDate?: string;
  modifiedDate?: string;
  category?: string;
  draft?: boolean;

  /**
   * The URL of the article on the website
   * (eg. https://zaggonaut.dev/blog/my-article)
   */
  filename: string;
};
