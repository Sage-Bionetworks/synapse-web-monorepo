import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [svgr()],
  resolve: {
    alias: {
      stream: 'stream-browserify',
      buffer: 'buffer/',
      timers: 'timers-browserify',
      path: 'path-browserify',
      fs: 'memfs',
      util: 'util/',
    },
  },
  optimizeDeps: {
    include: [
      '@mui/material',
      '@welldone-software/why-did-you-render',
      'buffer/',
      'msw-storybook-addon',
    ],
  },
  build: {
    sourcemap: false,
  },
})
