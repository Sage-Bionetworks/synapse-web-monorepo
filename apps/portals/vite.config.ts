import { defineConfig } from 'vite'
import { vitestConfig } from 'vite-config'
import { mergeConfig } from 'vitest/config'

export default mergeConfig(
  vitestConfig,
  defineConfig({
    envDir: './src/config',
    test: {
      include: ['src/tests/**/*.test.[jt]s?(x)'],
      setupFiles: ['src/tests/setupTests.ts'],
    },
  }),
)
