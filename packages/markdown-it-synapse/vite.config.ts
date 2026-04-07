import { mergeConfig } from 'vite'
import { baseConfig, vitestConfig, nodePolyfillsPlugin } from 'vite-config'

export default mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [nodePolyfillsPlugin()],
    test: {
      include: ['test/**/*.test.[jt]s?(x)'],
    },
  }),
)
