/**
 * Returns the portal origin URL.
 *
 * - On the client, returns `window.location.origin` (works for any environment:
 *   local dev, staging, production).
 * - On the server (SSR / pre-render), derives the production origin from the
 *   portal key using the `https://<portalKey>.synapse.org` convention.
 *
 * This avoids hard-coding a specific portal's domain in shared framework code.
 */
export function getPortalOrigin(portalKey: string): string {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  if (portalKey) {
    return `https://${portalKey}.synapse.org`
  }
  return ''
}
