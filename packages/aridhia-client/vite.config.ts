import { mergeConfig } from 'vite'
import { baseConfig, vitestConfig, nodePolyfillsPlugin } from 'vite-config'

const config = mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [nodePolyfillsPlugin()],
  }),
)

export default config
