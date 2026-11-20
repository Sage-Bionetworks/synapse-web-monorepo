import { useEventListener, useResizeObserver } from '@react-hookz/web'
import { useCallback, useLayoutEffect, useState } from 'react'

const PASSIVE = { passive: true }

/** The height of the part of an element at `rect` that is inside a viewport `viewportHeight` tall */
export function getHeightInViewport(
  { top, bottom }: Pick<DOMRect, 'top' | 'bottom'>,
  viewportHeight: number,
) {
  return Math.max(0, Math.min(bottom, viewportHeight) - Math.max(top, 0))
}

/**
 * The height of the part of `element` that is inside the viewport, kept current as the page
 * scrolls, as the viewport or the element resizes, and as the page around it changes size.
 * `undefined` until the element is measured. With a `null` element, it keeps the last height, so a
 * caller can pass `null` while the element is hidden, which would measure as empty.
 */
export function useHeightInViewport(element: HTMLElement | null) {
  const [heightInViewport, setHeightInViewport] = useState<number>()

  const measure = useCallback(() => {
    if (!element) {
      return
    }
    setHeightInViewport(
      getHeightInViewport(element.getBoundingClientRect(), window.innerHeight),
    )
  }, [element])

  // A ResizeObserver reports only after the browser paints, so a new element is measured before then
  useLayoutEffect(() => {
    measure()
  }, [measure])
  useResizeObserver(element, measure)
  // Content above the element that changes size moves the element without resizing it, but it resizes the body
  useResizeObserver(element ? document.body : null, measure)
  useEventListener(window, 'scroll', measure, PASSIVE)
  useEventListener(window, 'resize', measure, PASSIVE)

  return heightInViewport
}

export default useHeightInViewport
