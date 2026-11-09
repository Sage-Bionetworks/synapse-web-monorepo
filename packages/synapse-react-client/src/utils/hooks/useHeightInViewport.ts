import { useEventListener, useResizeObserver } from '@react-hookz/web'
import { useCallback, useState } from 'react'

const PASSIVE = { passive: true }

/**
 * The height of the part of `element` that is inside the viewport, kept current as the page
 * scrolls and as the viewport or the element resizes. `undefined` until the element is measured.
 */
export function useHeightInViewport(element: HTMLElement | null) {
  const [heightInViewport, setHeightInViewport] = useState<number>()

  const measure = useCallback(() => {
    if (!element) {
      return
    }
    const { top, bottom } = element.getBoundingClientRect()
    const visibleTop = Math.max(top, 0)
    const visibleBottom = Math.min(bottom, window.innerHeight)
    setHeightInViewport(Math.max(0, visibleBottom - visibleTop))
  }, [element])

  useResizeObserver(element, measure)
  useEventListener(window, 'scroll', measure, PASSIVE)
  useEventListener(window, 'resize', measure, PASSIVE)

  return heightInViewport
}

export default useHeightInViewport
