import { act } from '@testing-library/react'
import { vi } from 'vitest'

/**
 * Spies on `window.scrollTo` so tests can assert on programmatic scrolling.
 *
 * `window.scrollTo` is stubbed globally in the test setup, so the spy wraps a mock that may already
 * have calls recorded by an earlier test. Those are cleared here.
 */
export function mockWindowScrollTo() {
  const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
  scrollTo.mockClear()
  return scrollTo
}

/**
 * Moves the window's scroll offset to `offset` and notifies scroll listeners.
 *
 * jsdom has no layout engine, so it neither scrolls nor emits scroll events; both have to be faked.
 */
export function simulateWindowScroll(offset: number) {
  act(() => {
    Object.defineProperty(window, 'scrollY', {
      value: offset,
      configurable: true,
      writable: true,
    })
    window.dispatchEvent(new Event('scroll'))
  })
}
