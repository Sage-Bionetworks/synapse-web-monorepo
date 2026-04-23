import { mergeConfig } from 'vite'
import {
  baseConfig,
  nodePolyfillsPlugin,
  reactPlugins,
  vitestConfig,
} from 'vite-config'

const config = mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [nodePolyfillsPlugin(), ...reactPlugins()],
    test: {
      include: ['src/test/**/*.test.[jt]s?(x)'],
      setupFiles: ['src/test/setupTests.ts'],
    },
  }),
)

export default config
