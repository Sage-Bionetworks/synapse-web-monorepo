import { portalsViteConfig } from 'vite-config'
import { mergeConfig } from 'vite'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname)

// Unless absolutely necessary, all changes should go into the shared vite configuration, not the individual portal configuration
export default mergeConfig(portalsViteConfig, {
  // TODO: PORTALS-3159
  // Until we create a build/exports strategy for synapse-portal-framework, we have to create an alias so Vite can resolve the module
  // This must be configured for each file because it depends on the projectRootDir
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
