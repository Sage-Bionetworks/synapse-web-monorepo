import { ConfigBuilder } from 'vite-config'
import { resolve } from 'path'

const config = new ConfigBuilder()
  .setIncludeReactConfig(true)
  .setIncludeLibraryConfig(true)
  .setBuildLibEntry(resolve(__dirname, 'src/index.ts'))
  .setIncludeVitestConfig(true)
  .setConfigOverrides({
    test: {
      include: ['src/**/*.test.[jt]s?(x)'],
      setupFiles: ['src/tests/setupTests.ts'],
      environment: 'jsdom',
    },
  })
  .build()

export default config
