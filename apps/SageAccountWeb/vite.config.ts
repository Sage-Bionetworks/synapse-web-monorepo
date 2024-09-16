import { ConfigBuilder } from 'vite-config'

const config = new ConfigBuilder()
  .setIncludeReactConfig(true)
  .setIncludeVitestConfig(true)
  .setConfigOverrides({
    test: {
      include: ['src/**/*.test.[jt]s?(x)'],
      setupFiles: ['src/tests/setupTests.ts'],
      environment: 'jsdom', // introduced due to random "ReferenceError: window is not defined" during tests
    },
  })
  .build()

export default config
