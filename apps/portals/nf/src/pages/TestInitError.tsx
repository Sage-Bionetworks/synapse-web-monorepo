// In SPA/pre-render mode (ssr:false), server-side loaders are not supported.
// Use clientLoader instead to simulate the init error for testing purposes.
export function clientLoader() {
  throw new ReferenceError(
    "Cannot access 'SomeComponent' before initialization",
  )
}

// Export an empty default component.
export default function TestInitError() {
  return null
}
