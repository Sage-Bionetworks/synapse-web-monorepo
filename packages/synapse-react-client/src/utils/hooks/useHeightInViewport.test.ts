import { act, renderHook } from '@testing-library/react'
import { useHeightInViewport } from './useHeightInViewport'

const VIEWPORT_HEIGHT = 800

function createElementAt(top: number, bottom: number) {
  const element = document.createElement('div')
  vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(0, top, 100, bottom - top),
  )
  return element
}

function dispatchWindowEvent(type: 'scroll' | 'resize') {
  act(() => {
    window.dispatchEvent(new Event(type))
  })
}

describe('useHeightInViewport', () => {
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
  ])('measures an element $position on scroll', ({ top, bottom, expected }) => {
    const element = createElementAt(top, bottom)
    const { result } = renderHook(() => useHeightInViewport(element))

    dispatchWindowEvent('scroll')

    expect(result.current).toBe(expected)
  })

  it('measures again when the viewport resizes', () => {
    const element = createElementAt(0, 2000)
    const { result } = renderHook(() => useHeightInViewport(element))
    dispatchWindowEvent('scroll')
    expect(result.current).toBe(VIEWPORT_HEIGHT)

    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(500)
    dispatchWindowEvent('resize')

    expect(result.current).toBe(500)
  })
})
