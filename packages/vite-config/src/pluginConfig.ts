import { PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import dts from 'vite-plugin-dts'

export type PluginConfigOptions = {
  includeReactPlugins?: boolean
  includeLibraryPlugins?: boolean
}

/**
 * Plugins that all of our Vite configurations will use
 */
const COMMON_PLUGINS: PluginOption[] = [nodePolyfills()]

/**
 * Plugins that our React apps and libraries will use
 */
const REACT_PLUGINS: PluginOption[] = [
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
]

/**
 * Plugins that libraries that should emit ESM and CJS bundles will use
 */
const LIBRARY_PLUGINS: PluginOption[] = [
  // Do not bundle any dependencies; the consumer's bundler will resolve and link them.
  externalizeDeps(),
  // Generate a single type definition file for distribution.
  dts({
    rollupTypes: true,
  }),
]

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
    plugins.push(...LIBRARY_PLUGINS)
  }
  return plugins
}
