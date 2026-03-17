import { reactRouter } from '@react-router/dev/vite'
import { resolve } from 'path'
import { mergeConfig, defineConfig, type Plugin } from 'vite'
import {
  baseConfig,
  vitestConfig,
  clientOnly,
  nodePolyfillsPlugin,
  reactPlugins,
  tsconfigPathsPlugin,
} from 'vite-config'

export default defineConfig(({ isSsrBuild }) =>
  mergeConfig(
    baseConfig,
    mergeConfig(vitestConfig, {
      server: { port: 3001 }, // Reserve port 3000 for SageAccountWeb

      plugins: [
        // Apply nodePolyfills only to the client environment
        clientOnly(nodePolyfillsPlugin() as Plugin),
        reactRouter(),
        tsconfigPathsPlugin(),
        // Since we are using the reactRouter plugin, do not use the @vitejs/plugin-react plugin
        ...reactPlugins({ skipReactPlugin: true }),
      ],
      resolve: {
        alias: {
          // jsdom is statically imported by SanitizeHtmlUtils.ts but only used
          // inside a `typeof window === 'undefined'` guard. The static import
          // pulls Node.js-only transitive deps (agent-base → http.Agent) into
          // the client bundle, crashing the browser. Stub it for the client
          // build; the SSR/prerender build uses the real jsdom in Node.js.
          ...(!isSsrBuild
            ? { jsdom: resolve(__dirname, 'src/shims/jsdom.ts') }
            : {}),
        },
      },
      ssr: {
        external: ['jsdom'],
        noExternal: [/^@mui\//, /^@emotion\//],
        optimizeDeps: {
          include: ['@emotion/*', '@mui/*'],
        },
      },
    }),
  ),
)
