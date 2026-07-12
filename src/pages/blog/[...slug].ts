import fs from "node:fs/promises";
import path from "node:path";
import type { APIRoute } from "astro";

const postsDirectory = path.join(process.cwd(), "src/pages/blog");

export async function getStaticPaths() {
  const files = await fs.readdir(postsDirectory);
  const physicalSlugs = new Set(
    files.filter((name) => name.endsWith(".md")).map((name) => name.replace(/\.md$/, "")),
  );
  const legacySlugs = new Set<string>();
  const paths: { params: { slug: string }; props: { target: string } }[] = [];

  for (const file of files.filter((name) => name.endsWith(".md"))) {
    const physicalSlug = file.replace(/\.md$/, "");
    const source = await fs.readFile(path.join(postsDirectory, file), "utf8");
    const legacySlug = source.match(/^filename:\s*["']?([^"'\n]+)["']?\s*$/m)?.[1]?.trim();

    if (!legacySlug || legacySlug === physicalSlug || physicalSlugs.has(legacySlug) || legacySlugs.has(legacySlug)) continue;

    legacySlugs.add(legacySlug);
    paths.push({ params: { slug: legacySlug }, props: { target: `/blog/${physicalSlug}` } });
  }

  return paths;
}

export const GET: APIRoute = ({ props }) =>
  new Response(null, {
    status: 301,
    headers: { Location: props.target },
  });
