import type { PluginOption } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import svgr from 'vite-plugin-svgr'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import dts from 'vite-plugin-dts'

// const require = createRequire(import.meta.url)

/**
 * Returns the @vitejs/plugin-react plugin with babel-plugin-react-compiler
 * for the DataGrid components, and the vite-plugin-svgr plugin for SVG imports.
 *
 * In Vite 8 / @vitejs/plugin-react v6, Babel is no longer built in.
 * React Compiler support is provided via @rolldown/plugin-babel with
 * the reactCompilerPreset() from the React plugin.
 *
 * @param options.skipReactPlugin - If true, omit @vitejs/plugin-react (useful when
 *   another plugin like reactRouter() provides React support). svgr is still included.
 */
export function reactPlugins(
  options: { skipReactPlugin?: boolean } = {},
): PluginOption[] {
  const plugins: PluginOption[] = []

  if (!options.skipReactPlugin) {
    plugins.push(...react())
    plugins.push(
      babel({
        include: /src\/components\/DataGrid\/.*\.(t|j)sx?$/,
        presets: [reactCompilerPreset()],
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
 * Consumers of this plugin MUST install vite-plugin-node-polyfills as a direct devDependency.
 * This is because in pnpm strict mode, the polyfill shims are in the vite-plugin-node-polyfills
 * package and are not directly accessible from consuming apps.
 *
 * For SSR apps, wrap the result with `clientOnly()` to prevent polyfills from
 * being applied to the Node.js server build.
 */
export function nodePolyfillsPlugin(): PluginOption {
  return nodePolyfills()
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
