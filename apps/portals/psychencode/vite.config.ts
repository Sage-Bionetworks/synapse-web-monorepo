import { portalsViteConfig } from 'vite-config'
import { mergeConfig } from 'vite'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname)

export default mergeConfig(portalsViteConfig, {
  // TODO: PORTALS-3159
  // Until we create a build/exports strategy for synapse-portal-framework, we have to create an alias so Vite can resolve the module
  resolve: {
    alias: [
      {
        find: /^@sage-bionetworks\/synapse-portal-framework$/,
        replacement: resolve(
          projectRootDir,
          '../../synapse-portal-framework/src/index.ts',
        ),
      },
      {
        find: /@sage-bionetworks\/synapse-portal-framework/,
        replacement: resolve(projectRootDir, '../../synapse-portal-framework'),
      },
    ],
  },
})
