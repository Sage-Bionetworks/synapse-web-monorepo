import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig, UserConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import tsconfigPaths from 'vite-tsconfig-paths'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * Vite config properties that are shared across all Vite configurations.
 */
const baseConfig: UserConfig = defineConfig({
  server: { port: 3000 },
  build: {
    outDir: './build',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  plugins: [nodePolyfills(), tsconfigPaths()],
  define: {
    __TEST__: JSON.stringify(false),
    __DEV__: JSON.stringify(false),
  },
  optimizeDeps: {
    rolldownOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
  resolve: {
    alias: {
      src: resolve(__dirname, '/src'),
      process: 'process/browser',
      path: 'path-browserify',
      timers: 'timers-browserify',
      fs: 'memfs',
      https: 'https-browserify',
      stream: 'stream-browserify',
      http: 'stream-http',
      buffer: 'buffer/',
      util: 'util',
    },
  },
})

export default baseConfig
