import { reactRouter } from '@react-router/dev/vite'
import { mergeConfig, defineConfig, type Plugin } from 'vite'
import {
  baseConfig,
  vitestConfig,
  clientOnly,
  jsdomStubPath,
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
          // Stub jsdom for client builds; the SSR/prerender build uses the
          // real jsdom in Node.js.
          ...(!isSsrBuild ? { jsdom: jsdomStubPath } : {}),
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
