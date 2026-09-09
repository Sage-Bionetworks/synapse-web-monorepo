import { resolve } from 'path'
import { mergeConfig } from 'vite'
import {
  baseConfig,
  libraryPlugins,
  reactPlugins,
  vitestConfig,
} from 'vite-config'

export default mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [...reactPlugins(), ...libraryPlugins()],
    build: {
      sourcemap: true,
      emptyOutDir: true,
      outDir: './dist',
      cssCodeSplit: false,
      lib: {
        entry: resolve(__dirname, 'src/index.tsx'),
        name: 'ReactDataSheetGrid',
        fileName: format => `index.${format === 'es' ? 'js' : 'cjs'}`,
        formats: ['es', 'cjs'],
      },
      rolldownOptions: {
        output: {
          // Consumers import '@sage-bionetworks/react-datasheet-grid/dist/style.css', so the
          // single extracted stylesheet must land at a stable, unhashed path.
          assetFileNames: (assetInfo: { names?: string[]; name?: string }) => {
            const name = assetInfo.names?.[0] ?? assetInfo.name ?? ''
            return name.endsWith('.css') ? 'style.css' : name
          },
        },
      },
    },
    test: {
      include: [
        'src/**/*.test.?(c|m)[jt]s?(x)',
        'tests/**/*.test.?(c|m)[jt]s?(x)',
      ],
      setupFiles: ['./tests/setup.ts'],
      css: true,
    },
  }),
)
