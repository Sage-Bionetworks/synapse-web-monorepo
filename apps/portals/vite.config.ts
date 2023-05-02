import { defineConfig } from 'vite'
import sharedConfig from 'vite-config'

export default defineConfig({
  envDir: './src/config',
  ...sharedConfig,
})
