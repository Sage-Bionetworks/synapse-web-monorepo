import { vitestConfig } from 'vite-config'
import { mergeConfig } from 'vitest/config'
import { resolve } from 'path'
export default mergeConfig(vitestConfig, {
  build: {
    outDir: 'dist',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SynapsePortalFramework',
      // the proper extensions will be added
      fileName: 'synapse-portal-framework',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
  },
  test: {
    include: ['src/**/*.test.[jt]s?(x)'],
    setupFiles: ['src/tests/setupTests.ts'],
    environment: 'jsdom',
  },
})
