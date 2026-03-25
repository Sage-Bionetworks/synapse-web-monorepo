import type { PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

/**
 * Returns the @vitejs/plugin-react plugin configured with babel-plugin-react-compiler
 * for the DataGrid components, and the vite-plugin-svgr plugin for SVG imports.
 *
 * @param options.skipReactPlugin - If true, omit @vitejs/plugin-react (useful when
 *   another plugin like reactRouter() provides React support). svgr is still included.
 */
export function reactPlugins(
  options: { skipReactPlugin?: boolean } = {},
): PluginOption[] {
  const plugins: PluginOption[] = []

  if (!options.skipReactPlugin) {
    plugins.push(
      react({
        babel: {
          overrides: [
            {
              test: /src\/components\/DataGrid\/.*\.(t|j)sx?$/,
              plugins: [['babel-plugin-react-compiler']],
            },
          ],
        },
      }),
    )
  }

  plugins.push(
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-jsx'],
        ref: true,
        exportType: 'named',
      },
      // Explicitly exclude SVG imports that end in a query (such as ?url) - Vite can already handle these
      include: /^.*\.svg$/,
    }),
  )

  return plugins
}

/**
 * Returns the vite-plugin-node-polyfills plugin, which polyfills Node.js built-in
 * modules (fs, stream, buffer, etc.) for browser environments.
 *
 * For SSR apps, wrap the result with `clientOnly()` to prevent polyfills from
 * being applied to the Node.js server build.
 */
export function nodePolyfillsPlugin(): PluginOption {
  return nodePolyfills()
}

/**
 * Returns the vite-tsconfig-paths plugin, which resolves TypeScript path aliases
 * from tsconfig.json. Centralizes the import so consumers don't each need the
 * direct dependency.
 */
export function tsconfigPathsPlugin(): PluginOption {
  return tsconfigPaths()
}

export type LibraryPluginsOptions = {
  /**
   * Options passed to vite-plugin-externalize-deps.
   */
  externalizeDepsOptions?: Parameters<typeof externalizeDeps>[0]
  /**
   * When true, also externalize devDependencies and skip vite-plugin-dts
   * (type declarations are emitted by a separate tsc step for preserveModules builds).
   */
  preserveModules?: boolean
}

/**
 * Returns plugins for library builds:
 * - vite-plugin-externalize-deps: prevents bundling dependencies
 * - vite-plugin-dts: generates rolled-up type declarations (skipped for preserveModules builds)
 */
export function libraryPlugins(
  options: LibraryPluginsOptions = {},
): PluginOption[] {
  const plugins: PluginOption[] = [
    // Do not bundle any dependencies; the consumer's bundler will resolve and link them.
    // When preserveModules is true, also externalize devDependencies to prevent
    // test utilities (vitest, faker, testing-library, etc.) from leaking into dist.
    externalizeDeps({
      devDeps: options.preserveModules ?? false,
      ...options.externalizeDepsOptions,
    }),
  ]

  if (!options.preserveModules) {
    // For non-preserveModules builds, use vite-plugin-dts to generate a single
    // rolled-up index.d.ts. For preserveModules builds, per-file .d.ts files
    // are emitted by a separate `tsc --emitDeclarationOnly` step in the build
    // script, which is faster (incremental) and avoids vite-plugin-dts issues
    // with glob entries.
    plugins.push(dts({ rollupTypes: true }))
  }

  return plugins
}
