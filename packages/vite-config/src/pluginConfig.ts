import { PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import dts from 'vite-plugin-dts'

export type PluginConfigOptions = {
  includeReactPlugins?: boolean
  includeLibraryPlugins?: boolean
  externalizeDepsOptions?: Parameters<typeof externalizeDeps>[0]
  /**
   * When true, the library build preserves the source module structure.
   * This switches vite-plugin-dts from emitting a single rolled-up index.d.ts
   * to emitting per-file .d.ts declarations alongside each output .js file.
   */
  preserveModules?: boolean
}

/**
 * Plugins that all of our Vite configurations will use
 */
const COMMON_PLUGINS: PluginOption[] = [nodePolyfills()]

/**
 * Plugins that our React apps and libraries will use
 */
const REACT_PLUGINS: PluginOption[] = [
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
  svgr({
    svgrOptions: {
      plugins: ['@svgr/plugin-jsx'],
      ref: true,
      exportType: 'named',
    },
    // Explicitly exclude SVG imports that end in a query (such as ?url) - Vite can already handle these
    include: /^.*\.svg$/,
  }),
]

/**
 * Plugins that libraries that should emit ESM and CJS bundles will use
 */
function getLibraryPlugins(
  externalizeDepsOptions?: Parameters<typeof externalizeDeps>[0],
  preserveModules?: boolean,
): PluginOption[] {
  const plugins: PluginOption[] = [
    // Do not bundle any dependencies; the consumer's bundler will resolve and link them.
    // When preserveModules is true, also externalize devDependencies to prevent
    // test utilities (vitest, faker, testing-library, etc.) from leaking into dist.
    externalizeDeps({
      devDeps: preserveModules ?? false,
      ...externalizeDepsOptions,
    }),
  ]

  if (!preserveModules) {
    // For non-preserveModules builds, use vite-plugin-dts to generate a single
    // rolled-up index.d.ts. For preserveModules builds, per-file .d.ts files
    // are emitted by a separate `tsc --emitDeclarationOnly` step in the build
    // script, which is faster (incremental) and avoids vite-plugin-dts issues
    // with glob entries.
    plugins.push(dts({ rollupTypes: true }))
  }

  return plugins
}

/**
 * Get a shared configuration of Vite plugins to use based on the provided options. Note that Vite does not deeply merge
 * plugin configurations (see https://github.com/vitejs/vite/issues/16479)
 */
export function getPluginConfig(options: PluginConfigOptions): PluginOption[] {
  const plugins: PluginOption[] = [...COMMON_PLUGINS]
  if (options.includeReactPlugins) {
    plugins.push(...REACT_PLUGINS)
  }
  if (options.includeLibraryPlugins) {
    plugins.push(
      ...getLibraryPlugins(
        options.externalizeDepsOptions,
        options.preserveModules,
      ),
    )
  }
  return plugins
}
