import { loadFeaturedArticles, loadFeaturedProjects } from "./contentLoaders";

export const featuredProjects = await loadFeaturedProjects();
export const featuredArticles = await loadFeaturedArticles();