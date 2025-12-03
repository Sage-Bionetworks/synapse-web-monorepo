import { defineConfig, UserConfig, Plugin } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

/**
 * Creates a Vite/Rollup plugin that stubs out module imports that match the given patterns.
 * Instead of externalizing these imports (which requires Node.js to resolve them at runtime),
 * this plugin resolves them to an empty virtual module.
 *
 * This is useful for sitemap generation where we need to import the route tree but don't
 * need to actually execute React components.
 */
function stubModulesPlugin(patterns: RegExp[]): Plugin {
  const STUB_PREFIX = '\0virtual:empty-stub:'

  return {
    name: 'stub-modules',
    enforce: 'pre',
    resolveId(id: string, _importer?: string) {
      // Check if this import matches any of our stub patterns
      for (const pattern of patterns) {
        if (pattern.test(id)) {
          // Return a unique virtual module ID for each stubbed import
          // Use syntheticNamedExports to allow any named import to be resolved
          // from the default export
          return {
            id: STUB_PREFIX + id,
            syntheticNamedExports: true,
          }
        }
      }
      return null
    },
    load(id: string) {
      if (id.startsWith(STUB_PREFIX)) {
        // Return a module with a default export that's a Proxy
        // The proxy will return a no-op function for any property access
        // This allows `import { anything } from 'stubbed-module'` to work
        return `
          const noOp = () => null;
          noOp.default = noOp;
                    
          // Make the default export return noOp for any property access
          // This enables syntheticNamedExports to work for any import name
          export default new Proxy(noOp, {
            get(target, prop) {
              if (prop in target) return target[prop];
              return noOp;
            }
          });
        `
      }
      return null
    },
  }
}

/**
 * Vite config for building sitemap route extraction scripts.
 *
 * This configuration:
 * - Targets Node.js 18 for SSR/CLI execution
 * - Uses tsconfigPaths to resolve workspace package aliases
 * - Stubs React components and page modules (they're not needed for route extraction)
 * - Outputs a single ESM bundle that can be executed with Node.js
 */
const sitemapViteConfig: UserConfig = defineConfig({
  build: {
    ssr: true,
    target: 'node18',
    outDir: 'build',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: 'sitemap-entry.mjs',
      },
      // Externalize Node.js built-ins
      external: ['fs', 'path', 'node:fs', 'node:path'],
    },
  },
  plugins: [
    // Stub out modules BEFORE tsconfigPaths resolves them
    stubModulesPlugin([
      // React ecosystem
      /^react$/,
      /^react-dom$/,
      /^react\//,
      /^react-dom\//,
      /^react\/jsx-runtime$/,
      // Page and component imports (relative/alias paths)
      /@\/pages\//,
      /@\/components\//,
      /\/pages\//,
      /\/components\//,
      // synapse-react-client - all of it
      /synapse-react-client/,
      // synapse-types - all of it (pulls in complex types we don't need)
      /@sage-bionetworks\/synapse-types/,
      // MUI and other UI libraries
      /@mui\//,
      /@emotion\//,
      // Any .tsx file imports (likely React components)
      /\.tsx$/,
    ]),
    tsconfigPaths(),
  ],
  define: {
    __TEST__: JSON.stringify(false),
    __DEV__: JSON.stringify(false),
  },
})

export default sitemapViteConfig
