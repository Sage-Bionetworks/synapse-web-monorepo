import { ConfigBuilder } from 'vite-config'

export default new ConfigBuilder()
  .setIncludeVitestConfig(true)
  .setConfigOverrides({
    test: {
      globals: true,
      include: ['test/**/*.test.[jt]s?(x)'],
    },
  })
  .build()
