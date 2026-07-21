import { defineConfig } from 'vitest/config'

// The root vitest.config.ts file is used to assist the Vitest extension in VS Code to
// discover all the per-package vitest.config.ts files. This file is not used to
// programmatically run tests, and should not be used for any other purpose.
export default defineConfig({
  test: {
    projects: ['packages/*/vite.config.ts', 'apps/*/vite.config.ts'],
  },
})
