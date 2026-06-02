import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 部署时改为实际域名
  site: "https://banlvbao-center.vercel.app",

  vite: {
    plugins: [tailwindcss()],
  },
});
