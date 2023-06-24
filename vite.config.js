import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// export default defineConfig({});

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins: [react()],
      resolve: {
        alias: [{ find: "@", replacement: "/src" }],
      },
      server: {
        fs: {
          allow: [".."],
        },
      },
      define: {
        // By default, Vite doesn't include shims for NodeJS/
        // necessary for segment analytics lib to work
        global: {},
        process: { env: {} },
      },
    };
  }
  if (command === "build") {
    return {
      plugins: [react()],
      build: {
        chunkSizeWarningLimit: 1000,
      },
    };
  }
});
