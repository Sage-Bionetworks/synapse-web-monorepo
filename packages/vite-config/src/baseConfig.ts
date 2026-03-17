import { defineConfig, UserConfig } from 'vite'

/**
 * Vite config properties shared across all configurations in this monorepo.
 *
 * This intentionally does NOT include plugins (compose them explicitly in each consumer)
 */
const baseConfig: UserConfig = defineConfig({
  server: { port: 3000 },
  build: {
    outDir: './build',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  define: {
    __TEST__: JSON.stringify(false),
    __DEV__: JSON.stringify(false),
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
})

export default baseConfig
