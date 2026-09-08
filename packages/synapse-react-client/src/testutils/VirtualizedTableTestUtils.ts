/**
 * `@tanstack/react-virtual` requires layout metrics that JSDOM does not compute (it never
 * performs real layout), and JSDOM's `ResizeObserver` polyfill eventually "corrects" measured
 * element sizes to 0, which would make the virtualizer stop rendering any rows.
 *
 * Call this in a `beforeAll` to make a virtualized table render its rows under JSDOM, and call
 * the returned cleanup function in the matching `afterAll` to restore the original behavior.
 *
 * See https://github.com/TanStack/virtual/issues/641#issuecomment-2851908893
 */
export function mockVirtualizedTableLayout(): () => void {
  const originalOffsetHeight = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'offsetHeight',
  )
  const originalOffsetWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'offsetWidth',
  )
  const originalResizeObserver = window.ResizeObserver

  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    configurable: true,
    value: 800,
  })
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
    configurable: true,
    value: 800,
  })
  // Disabling it makes the virtualizer fall back to the (stubbed, stable) offsetHeight/
  // offsetWidth above for the lifetime of the test.
  // @ts-expect-error -- intentionally disabling for this suite
  window.ResizeObserver = undefined

  return () => {
    if (originalOffsetHeight) {
      Object.defineProperty(
        HTMLElement.prototype,
        'offsetHeight',
        originalOffsetHeight,
      )
    }
    if (originalOffsetWidth) {
      Object.defineProperty(
        HTMLElement.prototype,
        'offsetWidth',
        originalOffsetWidth,
      )
    }
    window.ResizeObserver = originalResizeObserver
  }
}
