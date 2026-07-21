import { defineConfig } from 'vitest/config'

// The root vitest.config.ts file is used to assist the Vitest extension in VS Code to
// discover all the per-package Vite/Vitest config files. This file is not used to
// run tests in CI, and should not be used for any other purpose.
export default defineConfig({
  test: {
    projects: ['packages/**/vite.config.ts', 'apps/**/vite.config.ts'],
  },
})
