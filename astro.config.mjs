// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://devjaime.com",
  trailingSlash: "never",
  output: 'server',
  adapter: netlify(),
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [tailwind()],
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
