import { resolve } from 'path'
import { ConfigBuilder } from 'vite-config'

export default new ConfigBuilder()
  .setIncludeLibraryConfig(true)
  .setBuildLibEntry(resolve(__dirname, 'src/index.ts'))
  .setIncludeVitestConfig(true)
  .setConfigOverrides({
    build: {
      lib: {
        name: 'markdownitSynapseTable',
        formats: ['es', 'cjs', 'umd'],
      },
    },
    test: {
      globals: true,
      include: ['test/**/*.test.[jt]s?(x)'],
    },
  })
  .build()
