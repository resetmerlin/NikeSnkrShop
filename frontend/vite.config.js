import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api":
        "https://api.render.com/deploy/srv-cfld7k9gp3ju5h3hpu80?key=FX5EkWWe__Q:5050",
    },
  },
  plugins: [react()],
});
