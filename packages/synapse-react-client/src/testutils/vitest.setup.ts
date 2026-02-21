// import jest-dom for Testing Library matchers (compatible with Vitest)
import '@testing-library/jest-dom/vitest'
import './ComponentToBePassedPropsCustomMatcher'
import { ResizeObserver } from '@juggle/resize-observer'
import './muiDatePickerMock'
import { setupIntersectionMocking } from 'react-intersection-observer/test-utils'
import 'whatwg-fetch'
import { TextEncoder, TextDecoder } from 'node:util'

// Some test utility libraries (@testing-library/dom-testing-library, @googlemaps/jest-mocks) expect `jest` to be defined
// globally, and may not directly support Vitest. Luckily, most of these utilities can work with Vitest's `vi` object,
// so for those cases, we can stub `jest` to use `vi`.
vi.stubGlobal('jest', vi)

// JSDOM doesn't support createObjectURL and revokeObjectURL, so we shim them
// https://github.com/jsdom/jsdom/issues/1721
window.URL.createObjectURL = vi
  .fn()
  .mockReturnValue('blob:mockBlobUrlConfiguredInTestSetup')
window.URL.revokeObjectURL = vi.fn()

// ResizeObserver polyfill for JSDOM
global.ResizeObserver = ResizeObserver

// IntersectionObserver polyfill for JSDOM
setupIntersectionMocking(vi.fn)

const oldWindowLocation = window.location
const oldWindowOpen = window.open

/**
 * Mock `window.location` so we can verify interactions in tests
 * See https://www.benmvp.com/blog/mocking-window-location-methods-jest-jsdom/
 */
beforeAll(() => {
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

  // @ts-expect-error - `delete` is not allowed on a required property
  delete window.open
  window.open = vi.fn()
})
afterAll(() => {
  // restore `window.location` to the original `jsdom`
  // `Location` object
  // @ts-expect-error - TS 5.8.3 broke reassigning `window.location` - https://github.com/microsoft/TypeScript/issues/61335
  window.location = oldWindowLocation
  window.open = oldWindowOpen
})

// Add TextEncoder & TextDecoder polyfills for react-router - https://github.com/remix-run/react-router/issues/12363
if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder
}

if (!global.TextDecoder) {
  // @ts-expect-error - Type mismatch
  global.TextDecoder = TextDecoder
}
