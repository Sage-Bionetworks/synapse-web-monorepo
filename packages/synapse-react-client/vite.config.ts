import { resolve } from 'path'
import { globSync } from 'node:fs'
import { ConfigBuilder } from 'vite-config'

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
    f.includes('/testutils/') ||
    f.includes('/mocks/'),
}).map(file => resolve(__dirname, file))

const config = new ConfigBuilder()
  .setIncludeVitestConfig(true)
  .setIncludeReactConfig(true)
  .setIncludeLibraryConfig(true)
  .setPreserveModules(true)
  .setBuildLibEntry(allSourceFiles)
  .setConfigOverrides({
    root: '.',
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
      globals: true,
      include: ['**/*.test.?(c|m)[jt]s?(x)'],
      setupFiles: ['./src/testutils/vitest.setup.ts'],
      silent: process.env.CI === 'true' ? 'passed-only' : false,
      testTimeout: 15_000, // 15 seconds
    },
  })
  .build()

export default config
