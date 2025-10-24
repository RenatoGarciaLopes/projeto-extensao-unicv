import { defineConfig } from "vite";
import Checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Checker({
      typescript: true,
      overlay: {
        initialIsOpen: false,
        position: "bl",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".svg")) {
            return "assets/icons/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  preview: {
    port: 3000,
    host: true,
  },
  assetsInclude: ["**/*.svg"],
});
