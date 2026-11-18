import {
  reportResized,
  stubResizeObserver,
} from '@/testutils/FakeResizeObserver'
import { act, renderHook, waitFor } from '@testing-library/react'
import { getHeightInViewport, useHeightInViewport } from './useHeightInViewport'

const VIEWPORT_HEIGHT = 800

/** An element at `top` to `bottom` in the viewport, which `moveTo` moves as a layout change would */
function createElementAt(top: number, bottom: number) {
  const element = document.createElement('div')
  const getBoundingClientRect = vi.spyOn(element, 'getBoundingClientRect')
  const moveTo = (newTop: number, newBottom: number) =>
    getBoundingClientRect.mockReturnValue(
      new DOMRect(0, newTop, 100, newBottom - newTop),
    )
  moveTo(top, bottom)
  return { element, moveTo }
}

function dispatchWindowEvent(type: 'scroll' | 'resize') {
  act(() => {
    window.dispatchEvent(new Event(type))
  })
}

describe('getHeightInViewport', () => {
  it.each([
    { position: 'inside the viewport', top: 100, bottom: 700, expected: 600 },
    { position: 'cut off at the top', top: -200, bottom: 600, expected: 600 },
    {
      position: 'cut off at the bottom',
      top: 300,
      bottom: 1500,
      expected: 500,
    },
    {
      position: 'taller than the viewport',
      top: -100,
      bottom: 2000,
      expected: 800,
    },
    { position: 'below the viewport', top: 900, bottom: 1200, expected: 0 },
    { position: 'above the viewport', top: -500, bottom: -100, expected: 0 },
  ])('is $expected for an element $position', ({ top, bottom, expected }) => {
    expect(getHeightInViewport({ top, bottom }, VIEWPORT_HEIGHT)).toBe(expected)
  })
})

describe('useHeightInViewport', () => {
  beforeAll(() => {
    stubResizeObserver()
  })

  afterAll(() => {
    vi.unstubAllGlobals()
  })

  beforeEach(() => {
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(VIEWPORT_HEIGHT)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('is undefined without an element', () => {
    const { result } = renderHook(() => useHeightInViewport(null))
    dispatchWindowEvent('scroll')

    expect(result.current).toBeUndefined()
  })

  it('measures the element as soon as it has one', () => {
    const { element } = createElementAt(-200, 600)

    const { result } = renderHook(() => useHeightInViewport(element))

    expect(result.current).toBe(600)
  })

  it('keeps the last height while the element is null', () => {
    const { element, moveTo } = createElementAt(-200, 600)
    const { result, rerender } = renderHook(
      ({ target }) => useHeightInViewport(target),
      { initialProps: { target: element as HTMLElement | null } },
    )

    rerender({ target: null })
    moveTo(0, 0)
    dispatchWindowEvent('scroll')

    expect(result.current).toBe(600)
  })

  it('measures again when the page scrolls', () => {
    const { element, moveTo } = createElementAt(-200, 600)
    const { result } = renderHook(() => useHeightInViewport(element))

    moveTo(300, 1500)
    dispatchWindowEvent('scroll')

    expect(result.current).toBe(500)
  })

  it('measures again when the viewport resizes', () => {
    const { element } = createElementAt(0, 2000)
    const { result } = renderHook(() => useHeightInViewport(element))

    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(500)
    dispatchWindowEvent('resize')

    expect(result.current).toBe(500)
  })

  it('measures again when the element resizes', async () => {
    const { element, moveTo } = createElementAt(-200, 600)
    const { result } = renderHook(() => useHeightInViewport(element))

    moveTo(-200, 300)
    reportResized(element)

    await waitFor(() => expect(result.current).toBe(300))
  })

  it('measures again when content above the element moves it without resizing it', async () => {
    const { element, moveTo } = createElementAt(100, 700)
    const { result } = renderHook(() => useHeightInViewport(element))

    // A banner loads in above the element, which grows the body
    moveTo(300, 900)
    reportResized(document.body)

    await waitFor(() => expect(result.current).toBe(500))
  })
})
