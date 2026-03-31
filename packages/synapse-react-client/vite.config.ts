import { resolve } from 'path'
import { globSync, readFileSync } from 'node:fs'
import { mergeConfig } from 'vite'
import {
  baseConfig,
  vitestConfig,
  reactPlugins,
  tsconfigPathsPlugin,
  libraryPlugins,
  preserveModulesBuildConfig,
} from 'vite-config'

const packageJson = JSON.parse(
  readFileSync(resolve(__dirname, 'package.json'), 'utf-8'),
)

/**
 * Vite config to generate the ESM library build for Synapse React Client.
 *
 * Uses preserveModules to emit one output file per source module, enabling
 * deep imports like `synapse-react-client/components/Foo` to resolve to
 * `dist/components/Foo.js` without needing code-split chunk hashes.
 *
 * Uses a glob of all source files as the entry to ensure every module is
 * included in the output, including files not reachable from index.ts
 * (e.g., SWC.index.ts used by the GWT SynapseWebClient).
 */
const allSourceFiles = globSync('src/**/*.{ts,tsx}', {
  cwd: __dirname,
  exclude: (f: string) =>
    f.includes('.test.') ||
    f.includes('.stories.') ||
    f.endsWith('.d.ts') ||
    f.includes('/testutils/'),
}).map(file => resolve(__dirname, file))

const config = mergeConfig(
  baseConfig,
  mergeConfig(
    vitestConfig,
    mergeConfig(preserveModulesBuildConfig(allSourceFiles), {
      root: '.',
      plugins: [
        tsconfigPathsPlugin(),
        ...reactPlugins(),
        ...libraryPlugins({ preserveModules: true }),
      ],
      define: {
        __SRC_VERSION__: JSON.stringify(packageJson.version),
      },
      build: {
        commonjsOptions: {
          // react-datasheet-grid is common-js only and imports tanstack/react-virtual which is an ESM package
          // for some reason this transitive import is treated as common-js but we can fix it with the config below:
          esmExternals: (id: string) => {
            if (id == '@tanstack/react-virtual') {
              return true
            }
            return false
          },
        },
      },
      test: {
        include: ['**/*.test.?(c|m)[jt]s?(x)'],
        setupFiles: ['./src/testutils/vitest.setup.ts'],
        silent: process.env.CI === 'true' ? 'passed-only' : false,
        testTimeout: 15_000, // 15 seconds
      },
    }),
  ),
)

export default config
