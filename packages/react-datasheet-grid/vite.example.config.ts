import { defineConfig } from 'vite'
import { reactPlugins } from 'vite-config'

/**
 * Vite config for the demo app that the Playwright e2e suite drives.
 *
 * The app imports the grid from `../src` rather than the built package, so e2e
 * runs need no library build step.
 */
export default defineConfig({
  root: 'example',
  plugins: [...reactPlugins()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
