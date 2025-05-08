import 'whatwg-fetch'
import { vi, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
// Clean up after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
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
  value: (query: any) => ({
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

const oldWindowLocation = window.location
/**
 * Mock `window.location` so we can verify interactions in tests
 * See https://www.benmvp.com/blog/mocking-window-location-methods-jest-jsdom/
 */
// @ts-expect-error - TS doesn't allow us to delete location. Not an issue because we're immediately replacing it with the mock
delete window.location
// @ts-expect-error - TS 5.8.3 broke reassigning `window.location` - https://github.com/microsoft/TypeScript/issues/61335
window.location = Object.defineProperties(
  {},
  {
    ...Object.getOwnPropertyDescriptors(oldWindowLocation),
    // Each method must be manually mocked
    assign: {
      configurable: true,
      value: vi.fn(),
    },
    replace: {
      configurable: true,
      value: vi.fn(),
    },
  },
) as Location

const localStorageMock = (function () {
  let store: Record<string, string> = {}
  return {
    getItem: function (key: string) {
      return store[key]
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString()
    },
    clear: function () {
      store = {}
    },
    removeItem: function (key: string) {
      delete store[key]
    },
  }
})()
Object.defineProperty(window, 'localStorage', { value: localStorageMock })
