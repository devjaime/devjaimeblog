// Deprecated direct loaders kept temporarily for backward compatibility.
// Prefer using contentLoaders.ts exported functions instead.
import { loadArticles, loadProjects } from "./contentLoaders";
export const articles = await loadArticles();
export const projects = await loadProjects();