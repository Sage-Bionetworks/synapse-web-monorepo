import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig, UserConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

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
  plugins: [nodePolyfills()],
  define: {
    __TEST__: JSON.stringify(false),
    __DEV__: JSON.stringify(false),
  },
  optimizeDeps: {
    // In the dev server, Vite doesn't automatically optimize plotly.js-basic-dist when it should. This causes a broken import
    // This is probably because plotly.js-basic-dist is a UMD module, and we load the entire object returned by the UMD module into react-plotly.js.
    include: ['plotly.js-basic-dist'],
    esbuildOptions: {
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
