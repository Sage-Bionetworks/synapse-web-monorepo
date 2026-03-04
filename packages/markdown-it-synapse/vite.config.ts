import { mergeConfig } from 'vite'
import {
  baseConfig,
  vitestConfig,
  nodePolyfillsPlugin,
  tsconfigPathsPlugin,
} from 'vite-config'

export default mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [nodePolyfillsPlugin(), tsconfigPathsPlugin()],
    test: {
      include: ['test/**/*.test.[jt]s?(x)'],
    },
  }),
)
