// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jaimehernandez.dev",
  trailingSlash: "never",
  output: 'server',
  adapter: netlify(),
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [tailwind(), sitemap()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'],
          },
        },
      },
    },
    ssr: {
      noExternal: ['@astrojs/tailwind'],
    },
  },
});
