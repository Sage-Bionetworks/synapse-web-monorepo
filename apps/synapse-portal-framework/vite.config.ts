import { resolve } from 'path'
import { globSync } from 'node:fs'
import { mergeConfig } from 'vite'
import {
  baseConfig,
  vitestConfig,
  reactPlugins,
  libraryPlugins,
  preserveModulesBuildConfig,
} from 'vite-config'
import { viteStaticCopy } from 'vite-plugin-static-copy'

/**
 * Vite config for synapse-portal-framework.
 *
 * Uses preserveModules to emit one output file per source module, enabling
 * deep imports like `@sage-bionetworks/synapse-portal-framework/components/Foo`
 * to resolve to `dist/components/Foo.js`.
 *
 * Uses a glob of all source files as the entry to ensure every module is
 * included in the output (the package has no comprehensive barrel file).
 */
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

const config = mergeConfig(
  baseConfig,
  mergeConfig(
    vitestConfig,
    mergeConfig(preserveModulesBuildConfig(allSourceFiles), {
      root: '.',
      build: {
        emptyOutDir: true,
      },
      plugins: [
        ...reactPlugins(),
        ...libraryPlugins({ preserveModules: true }),
        viteStaticCopy({
          targets: [
            {
              src: 'src/components/assets/*',
              dest: '',
              rename: { stripBase: 1 },
            },
          ],
        }),
      ],
      test: {
        include: ['src/**/*.test.[jt]s?(x)'],
        setupFiles: ['src/tests/setupTests.ts'],
      },
    }),
  ),
)

export default config
