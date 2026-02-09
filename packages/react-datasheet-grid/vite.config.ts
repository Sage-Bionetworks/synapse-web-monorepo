import { resolve } from 'path'
import { ConfigBuilder } from 'vite-config'

// The package source uses JSX.Element type annotations which are incompatible with React 19 types.
// Build without TypeScript declaration generation for now - the runtime bundle works fine.
export default new ConfigBuilder()
  .setIncludeVitestConfig(true)
  .setIncludeReactConfig(true)
  .setBuildLibEntry(resolve(__dirname, 'src/index.tsx'))
  .setConfigOverrides({
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.tsx'),
        name: 'ReactDataSheetGrid',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      },
      cssCodeSplit: false,
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'jsxRuntime',
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css'))
              return 'style.css'
            return assetInfo.name || ''
          },
        },
      },
      sourcemap: true,
      minify: 'esbuild',
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./tests/setup.ts'],
      css: true,
    },
  })
  .build()
