import { mergeConfig } from 'vite'
import { baseConfig, vitestConfig, nodePolyfillsPlugin } from 'vite-config'

const config = mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [nodePolyfillsPlugin()],
    test: {
      setupFiles: ['./src/vitest.setup.ts'],
    },
  }),
)

export default config
