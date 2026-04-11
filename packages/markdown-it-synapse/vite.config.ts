import { mergeConfig } from 'vite'
import { baseConfig, vitestConfig } from 'vite-config'

export default mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    test: {
      include: ['test/**/*.test.[jt]s?(x)'],
    },
  }),
)
