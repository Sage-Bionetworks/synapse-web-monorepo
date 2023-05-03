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
      // TODO: Coverage reports can be included in the test report when vitest 0.31.0 is released
      reporters: ["default", "html"],
      outputFile: { html: "./coverage/report/index.html" },
      coverage: {
        provider: "c8",
        reportsDirectory: "./coverage/coverage/",
      },
    },
  })
);
