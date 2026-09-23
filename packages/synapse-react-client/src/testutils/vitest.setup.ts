// import jest-dom for Testing Library matchers (compatible with Vitest)
import '@testing-library/jest-dom/vitest'
import './ComponentToBePassedPropsCustomMatcher'
import './muiDatePickerMock'
import { setupIntersectionMocking } from 'react-intersection-observer/test-utils'
import 'whatwg-fetch'
import { TextEncoder, TextDecoder } from 'node:util'

// Some test utility libraries (@testing-library/dom-testing-library, @googlemaps/jest-mocks) expect `jest` to be defined
// globally, and may not directly support Vitest. Luckily, most of these utilities can work with Vitest's `vi` object,
// so for those cases, we can stub `jest` to use `vi`.
vi.stubGlobal('jest', vi)

if (typeof window !== 'undefined') {
  // JSDOM doesn't support createObjectURL and revokeObjectURL, so we shim them
  // https://github.com/jsdom/jsdom/issues/1721
  window.URL.createObjectURL = vi
    .fn()
    .mockReturnValue('blob:mockBlobUrlConfiguredInTestSetup')
  window.URL.revokeObjectURL = vi.fn()

  // IntersectionObserver polyfill for JSDOM
  setupIntersectionMocking(vi.fn)

  // PointerEvent polyfill for JSDOM - https://github.com/jsdom/jsdom/issues/2527
  // dnd-kit's pointer sensor narrows events with
  // `event instanceof getWindow(event.target).PointerEvent`, which throws
  // "Right-hand side of 'instanceof' is not an object" rather than returning
  // false when the constructor is absent. The throw escapes as an unhandled
  // error and fails the run even when every assertion passes.
  //
  // jsdom implements PointerEvent as of v27; drop this once this package
  // moves off v26.
  if (window.PointerEvent == null) {
    class JSDOMPointerEvent extends MouseEvent {
      readonly pointerId: number
      readonly pointerType: string
      readonly isPrimary: boolean

      constructor(type: string, params: PointerEventInit = {}) {
        super(type, params)
        this.pointerId = params.pointerId ?? 0
        this.pointerType = params.pointerType ?? ''
        this.isPrimary = params.isPrimary ?? false
      }
    }
    window.PointerEvent = JSDOMPointerEvent as unknown as typeof PointerEvent
  }

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
        reload: {
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
}

// Add TextEncoder & TextDecoder polyfills for react-router - https://github.com/remix-run/react-router/issues/12363
if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder
}

if (!global.TextDecoder) {
  // @ts-expect-error - Type mismatch
  global.TextDecoder = TextDecoder
}
