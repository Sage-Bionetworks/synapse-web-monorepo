import { resolve } from 'path'
import { ConfigBuilder } from 'vite-config'

/**
 * Vite config to generate the ESM & CJS bundles for Synapse React Client.
 */
const config = new ConfigBuilder()
  .setIncludeVitestConfig(true)
  .setIncludeReactConfig(true)
  .setIncludeLibraryConfig(true, undefined, false)
  .setBuildLibEntry([
    // Enumerate each component that should be a separate entry point
    resolve(__dirname, './src/components/Button/index.ts'),
    resolve(__dirname, './src/components/DialogBase/index.ts'),
  ])
  .setConfigOverrides({
    root: '.',
  })
  .build()

export default config
