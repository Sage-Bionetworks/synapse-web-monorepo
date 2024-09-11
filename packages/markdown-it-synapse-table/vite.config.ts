import { vitestConfig } from 'vite-config'
import { mergeConfig } from 'vitest/config'
import { resolve } from 'path'
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import dts from 'vite-plugin-dts'

export default mergeConfig(vitestConfig, {
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'markdownitSynapseTable',
      fileName: 'index',
      formats: ['es', 'cjs', 'umd'],
    },
  },
  test: {
    globals: true,
    include: ['test/**/*.test.[jt]s?(x)'],
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
