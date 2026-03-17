// Config fragments
export { default as baseConfig } from './baseConfig.js'
export { default as vitestConfig } from './vitest-config.js'

// Build config helpers
export {
  libraryBuildConfig,
  preserveModulesBuildConfig,
} from './vite-library-config.js'

// Plugin helpers
export {
  reactPlugins,
  nodePolyfillsPlugin,
  tsconfigPathsPlugin,
  libraryPlugins,
} from './plugins.js'
export type { LibraryPluginsOptions } from './plugins.js'

// Pre-composed configs (convenience exports for common cases)
export { default as portalsViteConfig } from './portals-vite-config.js'
export { default as sitemapViteConfig } from './sitemap-vite-config.js'
