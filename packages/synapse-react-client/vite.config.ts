import react from '@vitejs/plugin-react'
import { resolve, relative, extname, sep } from 'path'
import { defineConfig, mergeConfig } from 'vite'
import { baseConfig, vitestConfig } from 'vite-config'
import dts from 'vite-plugin-dts'
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import svgr from 'vite-plugin-svgr'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { glob } from 'glob'
import { fileURLToPath } from 'node:url'

/**
 * Vite config to generate the ESM & CJS bundles for Synapse React Client.
 */

const config = defineConfig(({ command }) =>
  mergeConfig(mergeConfig(baseConfig, vitestConfig), {
    build: {
      outDir: './dist',
      sourcemap: true,
      emptyOutDir: false,
      lib: {
        entry: [],
        formats: ['es'],
      },
      rollupOptions: {
        input: Object.fromEntries(
          // Find all index.ts files and create entry points
          glob
            .sync('src/**/*.{ts,tsx}', {
              ignore: [
                'src/mocks/**/*', // exclude mocks
                'src/**/*.test.{ts,tsx}', // Exclude tests
                'src/**/*.stories.{ts,tsx}', // Exclude stories
                'src/**/*.d.{ts,tsx}', // Exclude declaration files (copied manually by vite-plugin-static-copy)
              ],
            })
            .map(file => [
              // This remove `src/` as well as the file extension from each file, so e.g.
              // src/components/Button/index.ts becomes components/Button/index
              relative(
                'src',
                file.slice(0, file.length - extname(file).length),
              ),
              // This expands the relative paths to absolute paths, so e.g.
              // src/components/Button/index.ts becomes /project/src/components/Button/index.ts
              fileURLToPath(new URL(file, import.meta.url)),
            ]),
        ),
      },
    },
    plugins: [
      // viteStaticCopy({
      //   targets: [
      //     {
      //       overwrite: false,
      //       src: 'src/**/*.{css,scss,svg}',
      //       dest: '.',
      //       rename: (fileName, fileExtension, fullPath) => {
      //         // 1. Get the path relative to the project root
      //         const relativePath = relative(__dirname, fullPath)
      //         // 2. Remove the 'src/' part from the beginning
      //         return relativePath.replace(`src${sep}`, '')
      //       },
      //     },
      //   ],
      // }),
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
      // Do not bundle any dependencies; the consumer's bundler will resolve and link them.
      externalizeDeps({
        except: [
          // Include certain monorepo projects because the local versions may drift from the versions released on NPM
          '@sage-bionetworks/react-ui',
          '@sage-bionetworks/synapse-types',
          '@sage-bionetworks/synapse-client',
        ],
      }),
      dts({
        // include: ['src'],
        // rollupTypes: true,
        // include: ['src/SWC.index.ts'],
        // exclude: ['@sage-bionetworks/react-ui/**', '../react-ui/**'],
        // aliasesExclude: ['@sage-bionetworks/react-ui', '../react-ui'],
        // afterDiagnostic(diagnostic) {
        //   console.error(diagnostic)
        // },
      }),
    ],
    test: {
      include: ['**/*.test.?(c|m)[jt]s?(x)'],
      setupFiles: ['./src/testutils/vitest.setup.ts'],
      silent: process.env.CI === 'true' ? 'passed-only' : false,
      testTimeout: 15_000, // 15 seconds
    },
  }),
)

export default config
