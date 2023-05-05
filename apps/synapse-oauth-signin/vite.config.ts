import { defineConfig } from 'vite'
import { vitestConfig } from 'vite-config'
import { mergeConfig } from 'vitest/config'

export default mergeConfig(
  vitestConfig,
  defineConfig({
    test: {
      include: ['src/test/**/*.test.[jt]s?(x)'],
      setupFiles: ['src/test/setupTests.ts'],
    },
  }),
)
