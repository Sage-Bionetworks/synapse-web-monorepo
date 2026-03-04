import { mergeConfig } from 'vite'
import {
  baseConfig,
  vitestConfig,
  nodePolyfillsPlugin,
  tsconfigPathsPlugin,
} from 'vite-config'

const config = mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [nodePolyfillsPlugin(), tsconfigPathsPlugin()],
    test: {
      setupFiles: ['./src/vitest.setup.ts'],
    },
  }),
)

export default config
