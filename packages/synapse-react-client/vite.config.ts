import { resolve } from 'path'
import { mergeConfig } from 'vite'
import viteConfig from 'vite-config'
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import dts from 'vite-plugin-dts'

export default mergeConfig(viteConfig, {
  root: '.',
  build: {
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
    externalizeDeps(),
    dts({
      rollupTypes: true,
    }),
  ],
})
