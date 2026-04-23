import { mergeConfig } from 'vite'
import {
  baseConfig,
  vitestConfig,
  reactPlugins,
  nodePolyfillsPlugin,
} from 'vite-config'

const config = mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [nodePolyfillsPlugin(), ...reactPlugins()],
    test: {
      include: ['src/**/*.test.[jt]s?(x)'],
      setupFiles: ['src/tests/setupTests.ts'],
    },
  }),
)

export default config
