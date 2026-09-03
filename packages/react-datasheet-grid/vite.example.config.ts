import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * Vite config for the demo app that the Playwright e2e suite drives.
 *
 * The app imports the grid from `../src` rather than the built package, so e2e
 * runs need no build step. Deliberately does not use the shared `vite-config`
 * package: depending on it would mean the `e2e` target could not run until
 * `vite-config` had been built, and the demo app needs none of what it adds.
 */
export default defineConfig({
  root: 'example',
  plugins: [...react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
