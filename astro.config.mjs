// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const isNetlify = process.env.NETLIFY === "true";
const adapter = isNetlify ? (await import("@astrojs/netlify")).default() : undefined;

// https://astro.build/config
export default defineConfig({
  site: "https://jaimehernandez.dev",
  trailingSlash: "never",
  ...(adapter
    ? { output: "server", adapter }
    : { output: "static" }),
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [sitemap()],
  vite: {},
});
