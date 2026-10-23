import { ResizeObserver } from '@juggle/resize-observer'

/**
 * Setup applied to every jsdom test run in the monorepo, ahead of each
 * package's own `setupFiles`.
 *
 * Scope is deliberately narrow: browser APIs jsdom does not implement that a
 * dependency touches at *import* time, where a package cannot defend itself
 * because the throw happens before any test body runs. Everything else —
 * MSW servers, cleanup hooks — belongs in the package's own setup file, which
 * runs after this one and can override anything here.
 */

// jsdom implements no ResizeObserver. `@dnd-kit/dom` resolves the global at
// module scope (`canUseDOM ? ResizeObserver : MockResizeObserver`), so merely
// importing a synapse-react-client component that reaches it raises
// `ReferenceError: ResizeObserver is not defined` while the module graph is
// still loading. Several synapse-react-client components also construct one
// as they render.
globalThis.ResizeObserver = ResizeObserver
