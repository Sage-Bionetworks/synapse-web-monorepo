import { vitestConfig } from 'vite-config'
import { mergeConfig } from 'vitest/config'

export default mergeConfig(vitestConfig, {
  test: {
    globals: true,
    include: ['test/**/*.test.[jt]s?(x)'],
  },
})
