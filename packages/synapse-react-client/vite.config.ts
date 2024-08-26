import { resolve } from 'path'
import { mergeConfig } from 'vite'
import viteConfig from 'vite-config'
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import dts from 'vite-plugin-dts'

/**
 * Vite config to generate the ESM & CJS bundles for Synapse React Client.
 */
export default mergeConfig(viteConfig, {
  root: '.',
  build: {
    sourcemap: true,
    emptyOutDir: false,
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SRC',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    // Do not bundle any dependencies; the consumer's bundler will resolve and link them.
    externalizeDeps(),
    // Generate a single type definition file for distribution.
    dts({
      rollupTypes: true,
    }),
  ],
})
