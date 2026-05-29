/// <reference types="vite/client" />

/**
 * Type declarations for portal-specific Vite environment variables.
 *
 * Each portal references this file from its own `src/vite-env.d.ts`:
 * ```ts
 * /// <reference types="vite-config/portal-env" />
 * ```
 */
interface ImportMetaEnv {
  /** Display name (e.g. "NF Data Portal"). */
  readonly VITE_PORTAL_NAME: string
  /** Meta description for SEO. */
  readonly VITE_PORTAL_DESCRIPTION: string
  /** URL subdomain key (e.g. "nf" → nf.synapse.org). */
  readonly VITE_PORTAL_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
