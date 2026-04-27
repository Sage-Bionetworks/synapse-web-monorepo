import { mergeConfig } from 'vite'
import {
  baseConfig,
  reactPlugins,
  nodePolyfillsPlugin,
} from 'vite-config'

const config = mergeConfig(baseConfig, {
  root: '.',
  plugins: [nodePolyfillsPlugin(), ...reactPlugins()],
})

export default config
