import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "/portfolio/", // Set base path for production
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}));
