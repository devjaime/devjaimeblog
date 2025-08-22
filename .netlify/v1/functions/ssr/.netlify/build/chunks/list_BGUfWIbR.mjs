import { b as processContentInDir, g as getShortDescription } from './utils_CNYgIkb5.mjs';

const articles = (await processContentInDir(
  "blog",
  (data) => {
    const shortDescription = getShortDescription(
      data.frontmatter.description
    );
    return {
      title: data.frontmatter.title,
      description: shortDescription,
      tags: data.frontmatter.tags,
      time: data.frontmatter.time,
      featured: data.frontmatter.featured,
      timestamp: data.frontmatter.timestamp,
      filename: `/blog/${data.frontmatter.filename}`
    };
  }
)).sort((a, b) => {
  const dateA = new Date(a.timestamp);
  const dateB = new Date(b.timestamp);
  return dateB.getTime() - dateA.getTime();
});
const projects = (await processContentInDir(
  "projects",
  (data) => {
    const shortDescription = getShortDescription(
      data.frontmatter.description
    );
    return {
      title: data.frontmatter.title,
      description: shortDescription,
      tags: data.frontmatter.tags,
      githubUrl: data.frontmatter.githubUrl,
      liveUrl: data.frontmatter.liveUrl,
      featured: data.frontmatter.featured,
      timestamp: data.frontmatter.timestamp,
      filename: `/projects/${data.frontmatter.filename}`
    };
  }
)).sort((a, b) => {
  const dateA = new Date(a.timestamp);
  const dateB = new Date(b.timestamp);
  return dateB.getTime() - dateA.getTime();
});

export { articles as a, projects as p };
