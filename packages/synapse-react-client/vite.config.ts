import { resolve } from 'path'
import { ConfigBuilder } from 'vite-config'

/**
 * Vite config to generate the ESM & CJS bundles for Synapse React Client.
 */
const config = new ConfigBuilder()
  .setIncludeReactConfig(true)
  .setIncludeLibraryConfig(true, {
    except: [
      // Include @sage-bionetworks/synapse-types because the local version may drift from the version released on NPM
      '@sage-bionetworks/synapse-types',
    ],
  })
  .setBuildLibEntry(resolve(__dirname, 'src/umd.index.ts'))
  .setConfigOverrides({
    root: '.',
    build: {
      // Do not clean the output directory before building, since we build ESM/CJS and UMD separately.
      emptyOutDir: false,
    },
  })
  .build()

export default config
