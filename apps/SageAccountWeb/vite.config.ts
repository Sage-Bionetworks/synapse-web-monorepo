import { mergeConfig } from 'vite'
import {
  baseConfig,
  vitestConfig,
  reactPlugins,
  nodePolyfillsPlugin,
  tsconfigPathsPlugin,
} from 'vite-config'

const config = mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [nodePolyfillsPlugin(), tsconfigPathsPlugin(), ...reactPlugins()],
    test: {
      include: ['src/**/*.test.[jt]s?(x)'],
      setupFiles: ['src/tests/setupTests.ts'],
    },
  }),
)

export default config
