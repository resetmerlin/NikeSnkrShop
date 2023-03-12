import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://nike-snkrs-shop-server.onrender.com:5050",
    },
  },
  plugins: [react()],
});
