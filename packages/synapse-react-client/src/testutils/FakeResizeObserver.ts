import { act } from '@testing-library/react'

let reportResize: ResizeObserverCallback | undefined

// jsdom has no layout, so its ResizeObserver never reports. Tests report in its place.
class FakeResizeObserver implements Pick<
  ResizeObserver,
  'observe' | 'unobserve' | 'disconnect'
> {
  constructor(callback: ResizeObserverCallback) {
    reportResize = callback
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

/**
 * Replaces the global ResizeObserver with one that reports only through `reportResized`. Call it in
 * `beforeAll`: @react-hookz/web creates its one shared ResizeObserver on first use, so the fake
 * must be in place before the test file's first render. Undo it with `vi.unstubAllGlobals()`.
 */
export function stubResizeObserver() {
  vi.stubGlobal('ResizeObserver', FakeResizeObserver)
}

/** Reports that `target` resized, as a browser's ResizeObserver would after layout */
export function reportResized(target: Element) {
  act(() => {
    reportResize?.([{ target } as ResizeObserverEntry], {} as ResizeObserver)
  })
}
