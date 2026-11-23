import { useResizeObserver } from '@react-hookz/web'
import { useCallback, useLayoutEffect, useState } from 'react'

/**
 * The width of `element`'s border box, kept current as the element resizes. 0 until there is an
 * element to measure.
 */
export function useElementWidth(element: HTMLElement | null) {
  const [width, setWidth] = useState(0)

  const measure = useCallback(() => {
    if (element) {
      setWidth(element.getBoundingClientRect().width)
    }
  }, [element])

  // A ResizeObserver reports only after the browser paints, so a new element is measured before then
  useLayoutEffect(() => {
    measure()
  }, [measure])
  useResizeObserver(element, measure)

  return width
}

export default useElementWidth
