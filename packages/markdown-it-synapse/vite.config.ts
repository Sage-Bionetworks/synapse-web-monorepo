import { globSync } from 'node:fs'
import { resolve } from 'path'
import { mergeConfig } from 'vite'
import {
  baseConfig,
  libraryPlugins,
  preserveModulesBuildConfig,
  vitestConfig,
} from 'vite-config'

const allSourceFiles = globSync('src/**/*.{ts,tsx}', {
  cwd: __dirname,
  exclude: (f: string) =>
    f.includes('.test.') ||
    f.includes('.stories.') ||
    f.endsWith('.d.ts') ||
    f.includes('/tests/'),
})
  .filter(file => !file.endsWith('sitemap/cli.ts'))
  .map(file => resolve(__dirname, file))

export default mergeConfig(
  baseConfig,
  mergeConfig(
    preserveModulesBuildConfig(allSourceFiles),
    mergeConfig(vitestConfig, {
      root: '.',
      build: {
        emptyOutDir: true,
      },
      plugins: [...libraryPlugins({ preserveModules: true })],
      test: {
        include: ['test/**/*.test.[jt]s?(x)'],
      },
    }),
  ),
)
