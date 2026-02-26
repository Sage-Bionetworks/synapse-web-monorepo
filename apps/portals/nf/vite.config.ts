import { reactRouter } from '@react-router/dev/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import { defineConfig, type Plugin } from 'vite'

/**
 * NF Portal Vite configuration — React Router Framework Mode
 *
 * Uses reactRouter() plugin (from @react-router/dev/vite) instead of
 * @vitejs/plugin-react. Pre-rendering is configured in react-router.config.ts.
 *
 * Notes:
 * - nodePolyfills() is wrapped to apply ONLY to the client environment.
 *   The SSR environment runs in Node.js and uses native modules — no polyfills needed.
 * - @mui and @emotion are bundled (noExternal) for SSR to avoid dual-publish issues.
 * - resolve.alias contains only non-browser-polyfill entries (just 'src').
 *   The browser polyfill aliases (fs→memfs, stream→stream-browserify, etc.) are handled
 *   exclusively by the nodePolyfills() plugin via its resolveId hook (client-only).
 */

/**
 * Wraps a plugin so that its resolveId/load/transform hooks
 * skip the SSR environment (environment.name !== 'client').
 * Also strips the config/configResolved hooks to prevent the plugin from
 * injecting SSR-incompatible resolve.alias entries.
 *
 * This prevents browser polyfills from being applied to the Node.js SSR build.
 */
function clientOnlyPlugin(plugin: Plugin): Plugin {
  return {
    ...plugin,
    // Don't run config hook — it would add browser aliases to resolve.alias for all envs
    config: undefined,
    configResolved: undefined,
    resolveId: plugin.resolveId
      ? function (this: any, ...args: any[]) {
          if (this.environment?.name !== 'client') return undefined
          return (plugin.resolveId as any).apply(this, args)
        }
      : undefined,
    load: plugin.load
      ? function (this: any, ...args: any[]) {
          if (this.environment?.name !== 'client') return undefined
          return (plugin.load as any).apply(this, args)
        }
      : undefined,
    transform: plugin.transform
      ? function (this: any, ...args: any[]) {
          if (this.environment?.name !== 'client') return undefined
          return (plugin.transform as any).apply(this, args)
        }
      : undefined,
  }
}

/**
 * Uses the callback form of defineConfig to conditionally set rollupOptions.input
 * for the SSR build only. The client build does not need a custom entry —
 * reactRouter() handles that automatically.
 *
 * Note: vitest's mergeConfig() does not support the callback form of defineConfig,
 * so we include the test config directly inside the callback return value.
 */
export default defineConfig(({ isSsrBuild }) => ({
  server: { port: 3001 }, // Reserve port 3000 for SageAccountWeb
  build: {
    outDir: './build',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: isSsrBuild
      ? {
          // Point the SSR build entry to server/app.ts (Express handler).
          // The virtual:react-router/server-build module is dynamically imported
          // by server/app.ts, but React Router's writeBundle hook expects it to
          // appear as a top-level entry in the Vite manifest. Providing it as an
          // additional input ensures it's listed as an entry, not just a chunk.
          input: ['./server/app.ts', 'virtual:react-router/server-build'],
        }
      : undefined,
  },
  plugins: [
    // Apply nodePolyfills only to the client environment
    clientOnlyPlugin(nodePolyfills() as Plugin),
    reactRouter(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-jsx'],
        ref: true,
        exportType: 'named',
      },
      include: /^.*\.svg$/,
    }),
  ],
  define: {
    __TEST__: JSON.stringify(false),
    __DEV__: JSON.stringify(false),
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  resolve: {
    alias: {
      // Only the src path alias — NOT browser polyfill aliases.
      // Browser polyfill aliases (fs→memfs, etc.) are handled by nodePolyfills()
      // plugin which is wrapped to only apply to the client environment.
      src: new URL('./src', import.meta.url).pathname,
    },
  },
  ssr: {
    // Bundle MUI and Emotion for SSR — their CJS/ESM dual-publish causes issues when externalized
    noExternal: [/^@mui\//, /^@emotion\//],
    // Pre-bundle large barrel exports for SSR dev mode.
    // Without this, Vite's SSR module runner processes each sub-module import
    // individually in @mui/icons-material (13,000+ re-exports), which hangs the dev server.
    optimizeDeps: {
      include: [
        '@mui/icons-material',
        '@mui/material',
        '@emotion/react',
        '@emotion/styled',
      ],
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    reporters: ['default', 'html'],
    outputFile: { html: './coverage/report/index.html' },
    coverage: {
      provider: 'v8',
      reporter: ['text-summary', 'html-spa'],
      reportsDirectory: './coverage/cov',
    },
    server: {
      deps: {
        inline: ['@mui/x-data-grid'],
      },
    },
  },
}))
