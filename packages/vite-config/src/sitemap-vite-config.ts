import { defineConfig, UserConfig, Plugin } from 'vite'

/**
 * Creates a Vite plugin that stubs out module imports that match the given patterns.
 * Instead of externalizing these imports (which requires Node.js to resolve them at runtime),
 * this plugin resolves them to an empty virtual module.
 *
 * This is useful for sitemap generation where we need to import the route tree but don't
 * need to actually execute React components.
 */
function stubModulesPlugin(patterns: RegExp[]): Plugin {
  const STUB_PREFIX = '\0virtual:empty-stub:'
  const STUB_SUFFIX = '.stub.cjs'

  return {
    name: 'stub-modules',
    enforce: 'pre',
    resolveId(id: string, _importer?: string) {
      for (const pattern of patterns) {
        if (pattern.test(id)) {
          return { id: STUB_PREFIX + id + STUB_SUFFIX }
        }
      }
      return null
    },
    load(id: string) {
      if (id.startsWith(STUB_PREFIX) && id.endsWith(STUB_SUFFIX)) {
        // Return a CJS-style module. Rolldown extracts named exports from CJS
        // `module.exports`, so the Proxy allows `import { anything }` to work.
        return `
          const noOp = () => null;
          noOp.default = noOp;
          module.exports = new Proxy(noOp, {
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
    rolldownOptions: {
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
  ],
  define: {
    __TEST__: JSON.stringify(false),
    __DEV__: JSON.stringify(false),
  },
})

export default sitemapViteConfig
