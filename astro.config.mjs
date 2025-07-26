// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://devjaime.com",
  trailingSlash: "never",
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss()],
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
  experimental: {
    assets: true,
  },
});
