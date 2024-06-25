import 'whatwg-fetch'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

// Line below is used because plotly has a dependency on mapbox-gl
// which requires a browser env and doesn't provide support for headless
// js testing, so we shim the function below.
// View - https://github.com/mapbox/mapbox-gl-js/issues/3436
window.URL.createObjectURL = function () {
  return ''
}

// JSDOM doesn't implement window.matchMedia
// https://stackoverflow.com/a/53449595
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: query => ({
    matches: true,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
})

Element.prototype.scrollIntoView = vi.fn()

// Clean up after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
