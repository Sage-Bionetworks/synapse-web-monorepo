import { reactRouter } from '@react-router/dev/vite'
import {
  baseConfig,
  clientOnly,
  nodePolyfillsPlugin,
  reactPlugins,
  vitestConfig,
} from 'vite-config'
import { defineConfig, mergeConfig, type Plugin, type UserConfig } from 'vite'

export type PortalsSsgViteConfigOptions = {
  /** Dev server port. Defaults to 3001 (port 3000 is reserved for SageAccountWeb). */
  port?: number
}

/**
 * Pre-composed Vite config for SSG portals (React Router framework mode).
 *
 * Wraps the shared `baseConfig` + `vitestConfig` with the `reactRouter()`
 * plugin and the standard portal SSR settings.
 *
 * Each SSG portal's `vite.config.ts` becomes:
 * ```ts
 * import { portalsSsgViteConfig } from '@sage-bionetworks/synapse-portal-framework/ssg/portalsSsgViteConfig'
 * export default portalsSsgViteConfig
 * ```
 *
 * To override the dev server port:
 * ```ts
 * import { createPortalsSsgViteConfig } from '@sage-bionetworks/synapse-portal-framework/ssg/portalsSsgViteConfig'
 * export default createPortalsSsgViteConfig({ port: 3002 })
 * ```
 */
export function createPortalsSsgViteConfig(
  options: PortalsSsgViteConfigOptions = {},
): UserConfig {
  const { port = 3001 } = options

  return defineConfig(
    mergeConfig(
      baseConfig,
      mergeConfig(vitestConfig, {
        server: { port },
        plugins: [
          // Apply nodePolyfills only to the client environment, not SSR/prerender
          clientOnly(nodePolyfillsPlugin() as Plugin),
          reactRouter(),
          // reactRouter() includes its own React plugin, so skip the default one
          ...reactPlugins({ skipReactPlugin: true }),
        ],
        ssr: {
          noExternal: [/^@mui\//, /^@emotion\//],
          optimizeDeps: {
            include: ['@emotion/*', '@mui/*'],
          },
        },
      }),
    ),
  )
}

export const portalsSsgViteConfig = createPortalsSsgViteConfig()

export default portalsSsgViteConfig
