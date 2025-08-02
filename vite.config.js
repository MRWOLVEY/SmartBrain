import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/clarifai-api": {
        target: "https://api.clarifai.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/clarifai-api/, ""),
      },
    },
  },
});
