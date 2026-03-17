import { mergeConfig } from 'vite'
import {
  baseConfig,
  reactPlugins,
  nodePolyfillsPlugin,
  tsconfigPathsPlugin,
} from 'vite-config'

const config = mergeConfig(baseConfig, {
  root: '.',
  plugins: [nodePolyfillsPlugin(), tsconfigPathsPlugin(), ...reactPlugins()],
})

export default config
