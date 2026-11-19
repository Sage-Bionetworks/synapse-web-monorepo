import {
  reportResized,
  stubResizeObserver,
} from '@/testutils/FakeResizeObserver'
import { renderHook, waitFor } from '@testing-library/react'
import { useElementWidth } from './useElementWidth'

function createElementWithWidth(width: number) {
  const element = document.createElement('div')
  const getBoundingClientRect = vi.spyOn(element, 'getBoundingClientRect')
  const resizeTo = (newWidth: number) =>
    getBoundingClientRect.mockReturnValue(new DOMRect(0, 0, newWidth, 100))
  resizeTo(width)
  return { element, resizeTo }
}

describe('useElementWidth', () => {
  beforeAll(() => {
    stubResizeObserver()
  })

  afterAll(() => {
    vi.unstubAllGlobals()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('is 0 without an element', () => {
    const { result } = renderHook(() => useElementWidth(null))

    expect(result.current).toBe(0)
  })

  it('measures the element before the ResizeObserver first reports', () => {
    const { element } = createElementWithWidth(1200)

    const { result } = renderHook(() => useElementWidth(element))

    expect(result.current).toBe(1200)
  })

  it('measures again when the element resizes', async () => {
    const { element, resizeTo } = createElementWithWidth(1200)
    const { result } = renderHook(() => useElementWidth(element))

    resizeTo(800)
    reportResized(element)

    await waitFor(() => expect(result.current).toBe(800))
  })
})
