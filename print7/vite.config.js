import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: false,
  },
  build: {
    // Optimize for production
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          mantine: ["@mantine/core", "@mantine/hooks"],
          carousel: ["@mantine/carousel", "embla-carousel-react"],
          i18n: ["i18next", "react-i18next"],
        },
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@mantine/core",
      "@mantine/hooks",
      "react-router-dom",
      "react-helmet-async",
      "i18next",
      "react-i18next",
    ],
  },
  // Enable gzip compression in preview
  preview: {
    port: 4173,
    host: true,
  },
});
