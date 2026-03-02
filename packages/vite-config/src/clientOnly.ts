import type { Plugin } from 'vite'

/**
 * Wraps a Vite plugin so that its resolveId/load/transform hooks only run
 * in the client environment (i.e. they are skipped during SSR builds).
 *
 * Also strips the `config` and `configResolved` hooks to prevent the plugin
 * from injecting SSR-incompatible configuration (e.g. browser polyfill
 * resolve.alias entries) into all environments.
 *
 * This is useful for plugins like `nodePolyfills()` that should only apply
 * to the client bundle — the SSR environment runs in Node.js and uses
 * native modules directly.
 *
 * @example
 * ```ts
 * import { clientOnly, nodePolyfillsPlugin } from 'vite-config'
 *
 * export default defineConfig({
 *   plugins: [
 *     clientOnly(nodePolyfillsPlugin() as Plugin),
 *   ],
 * })
 * ```
 */
export function clientOnly(plugin: Plugin): Plugin {
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
