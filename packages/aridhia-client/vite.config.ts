import { mergeConfig } from 'vite'
import { baseConfig, vitestConfig } from 'vite-config'

const config = mergeConfig(baseConfig, vitestConfig)

export default config
