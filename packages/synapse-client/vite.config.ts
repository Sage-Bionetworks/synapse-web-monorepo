import { resolve } from 'path'
import { ConfigBuilder } from 'vite-config'

const config = new ConfigBuilder()
  .setIncludeLibraryConfig(true)
  .setIncludeVitestConfig(true)
  .setBuildLibEntry(resolve(__dirname, 'src/index.ts'))
  .build()

export default config
