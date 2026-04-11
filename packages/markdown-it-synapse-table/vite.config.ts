import { resolve } from 'path'
import { mergeConfig } from 'vite'
import { baseConfig, vitestConfig, libraryPlugins } from 'vite-config'

export default mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [...libraryPlugins()],
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
      include: ['test/**/*.test.[jt]s?(x)'],
    },
  }),
)
