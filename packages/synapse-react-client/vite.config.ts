import { resolve } from 'path'
import { ConfigBuilder } from 'vite-config'

/**
 * Vite config to generate the ESM & CJS bundles for Synapse React Client.
 */
const config = new ConfigBuilder()
  .setIncludeVitestConfig(true)
  .setIncludeReactConfig(true)
  .setIncludeLibraryConfig(true, {
    except: [
      // Include certain monorepo projects because the local versions may drift from the versions released on NPM
      '@sage-bionetworks/synapse-types',
      '@sage-bionetworks/synapse-client',
    ],
  })
  .setBuildLibEntry(resolve(__dirname, 'src/SWC.index.ts'))
  .setConfigOverrides([
    {
      test: './src/components/{DataGrid}/**/*.{js,jsx,ts,tsx}',
      plugins: ['babel-plugin-react-compiler'],
    },
    {
      root: '.',
      build: {
        // Do not clean the output directory before building, since we build ESM/CJS and UMD separately.
        emptyOutDir: false,
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
    },
  ])
  .build()

export default config
