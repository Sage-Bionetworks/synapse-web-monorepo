import { ConfigBuilder } from 'vite-config'

const config = new ConfigBuilder()
  .setIncludeVitestConfig(true)
  .setConfigOverrides({
    test: {
      setupFiles: ['./src/vitest.setup.ts'],
    },
  })
  .build()

export default config
