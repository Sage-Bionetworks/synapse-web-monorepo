import { mergeConfig } from 'vite'
import {
  baseConfig,
  nodePolyfillsPlugin,
  reactPlugins,
  tsconfigPathsPlugin,
  vitestConfig,
} from 'vite-config'

const config = mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [nodePolyfillsPlugin(), tsconfigPathsPlugin(), ...reactPlugins()],
    test: {
      include: ['src/test/**/*.test.[jt]s?(x)'],
      setupFiles: ['src/test/setupTests.ts'],
    },
  }),
)

export default config
