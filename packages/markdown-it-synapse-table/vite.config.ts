import { resolve } from 'path'
import { mergeConfig } from 'vite'
import {
  baseConfig,
  vitestConfig,
  nodePolyfillsPlugin,
  tsconfigPathsPlugin,
  libraryPlugins,
} from 'vite-config'

export default mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [
      nodePolyfillsPlugin(),
      tsconfigPathsPlugin(),
      ...libraryPlugins(),
    ],
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
