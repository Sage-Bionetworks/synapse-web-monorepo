import { ConfigBuilder } from 'vite-config'

const config = new ConfigBuilder()
  .setIncludeReactConfig(true)
  .setConfigOverrides({
    root: '.',
  })
  .build()

export default config
