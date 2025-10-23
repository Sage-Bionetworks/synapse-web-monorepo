import { defineConfig } from 'vite'

/**
 * Vite configuration snippet for generating an esm/cjs library bundle.
 */
const viteLibraryConfig = defineConfig({
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: './dist',
    lib: {
      // Note: entry MUST be overridden by an overridden config.
      entry: [],
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
  },
})

export default viteLibraryConfig
