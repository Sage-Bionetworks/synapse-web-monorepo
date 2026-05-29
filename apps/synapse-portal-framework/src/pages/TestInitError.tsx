/**
 * Throws a synthetic ReferenceError from `clientLoader` so portals can verify
 * that initialization-error handling renders the expected error UI.
 *
 * Used by SSG portals only — server-side loaders are not available in
 * `ssr: false` framework-mode builds, so we throw from `clientLoader` instead.
 */
export function clientLoader() {
  throw new ReferenceError(
    "Cannot access 'SomeComponent' before initialization",
  )
}

export default function TestInitError() {
  return null
}
