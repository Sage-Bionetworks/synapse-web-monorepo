import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { glob } from 'glob'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import { viteStaticCopy } from 'vite-plugin-static-copy'
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-jsx'],
        ref: true,
        exportType: 'named',
      },
      // Explicitly exclude SVG imports that end in a query (such as ?url) - Vite can already handle these
      include: /^.*\.svg$/,
    }),
    dts({ include: ['src'] }), // Generates .d.ts files

    // Source declaration files (.d.ts) are not emitted by the dts plugin, so copy them over manually
    viteStaticCopy({
      targets: [
        {
          src: 'src/types/*',
          dest: 'types',
        },
      ],
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      // We will use glob to define our entry points instead.
      entry: '',
      formats: ['es'],
    },
    rollupOptions: {
      // Treat react as an external dependency
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        // Find all index.ts files and create entry points
        glob
          .sync('src/**/*.{ts,tsx}', {
            ignore: [
              'src/**/*.test.{ts,tsx}', // Exclude tests
              'src/**/*.stories.{ts,tsx}', // Exclude stories
              'src/**/*.d.{ts,tsx}', // Exclude declaration files (copied manually by vite-plugin-static-copy)
            ],
          })
          .map(file => [
            // This remove `src/` as well as the file extension from each file, so e.g.
            // src/components/Button/index.ts becomes components/Button/index
            path.relative(
              'src',
              file.slice(0, file.length - path.extname(file).length),
            ),
            // This expands the relative paths to absolute paths, so e.g.
            // src/components/Button/index.ts becomes /project/src/components/Button/index.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        // Preserve module structure in the dist folder
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
})
