import { reactRouter } from '@react-router/dev/vite'
import { mergeConfig, type Plugin } from 'vite'
import {
  baseConfig,
  clientOnly,
  nodePolyfillsPlugin,
  reactPlugins,
  tsconfigPathsPlugin,
  vitestConfig,
} from 'vite-config'

export default mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    server: { port: 3001 }, // Reserve port 3000 for SageAccountWeb
    plugins: [
      // Apply nodePolyfills only to the client environment
      clientOnly(nodePolyfillsPlugin() as Plugin),
      // use react-router plugin, do not use @vitejs/plugin-react
      reactRouter(),
      tsconfigPathsPlugin(),
      ...reactPlugins({ skipReactPlugin: true }),
    ],
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    ssr: {
      noExternal: [/^@mui\//, /^@emotion\//],
      optimizeDeps: {
        include: ['@emotion/*', '@mui/*'],
      },
    },
  }),
)
