import { mergeConfig } from 'vite'
import { baseConfig, vitestConfig } from 'vite-config'

const config = mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    test: {
      setupFiles: ['./src/vitest.setup.ts'],
    },
  }),
)

export default config
