import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite-config.js";

export default mergeConfig(
  viteConfig,
  defineConfig({
    optimizeDeps: {
      exclude: ["vitest/utils"],
      include: ["@vitest/utils", "vitest/browser"],
    },
    test: {
      environment: "jsdom",
      reporters: ["default", "html"],
      outputFile: { html: "./coverage/report/index.html" },
      coverage: {
        provider: "c8",
        reporter: ["text-summary", "html-spa"],
        reportsDirectory: "./coverage/cov",
      },
    },
  })
);
