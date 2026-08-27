import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

/**
 * Returns `false` during prerendering/hydration, then `true`.
 *
 * Defers browser-only reads (like cookies) post-hydration to prevent React
 * hydration mismatches that wipe third-party `<body>` elements.
 * Returns `true` immediately in client-only apps.
 */
export function useIsHydrated(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
