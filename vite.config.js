import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,js}",
    }),
  ],
  resolve: {
    alias: {
      "react-reveal": path.resolve(__dirname, "src/components/fade/Fade.jsx"),
      "react-reveal/Fade": path.resolve(__dirname, "src/components/fade/Fade.jsx"),
      "react-easy-emoji": path.resolve(__dirname, "src/utils/emoji.js"),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
  build: {
    outDir: "build",
  },
});
