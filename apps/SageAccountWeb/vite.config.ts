import { vitestConfig } from 'vite-config'
import { mergeConfig, defineConfig } from 'vitest/config'

export default mergeConfig(
  vitestConfig,
  defineConfig({
    test: {
      include: ['src/tests/**/*.test.[jt]s?(x)'],
      setupFiles: ['src/tests/setupTests.ts'],
    },
  }),
)
