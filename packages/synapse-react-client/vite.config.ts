import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  root: './demo',
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        ref: true,
      },
    }),
  ],
  define: {
    __TEST__: JSON.stringify(false),
    __DEV__: JSON.stringify(false),
    'process.env': {},
    sql: {},
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      // Enable esbuild polyfill plugins
      plugins: [NodeModulesPolyfillPlugin()],
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
