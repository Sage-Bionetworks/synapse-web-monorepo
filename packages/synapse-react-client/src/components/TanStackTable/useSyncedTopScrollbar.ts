import { useResizeObserver } from '@react-hookz/web'
import { RefObject, UIEvent, useRef, useState } from 'react'

/**
 * Keeps an optional top scrollbar in sync with a scrollable container's horizontal scroll
 * position, sized to match the rendered width of `targetRef`'s element (e.g. a `<table>`).
 */
export function useSyncedTopScrollbar(
  targetRef: RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const topScrollRef = useRef<HTMLDivElement>(null)
  const scrollSyncSourceRef = useRef<'top' | 'bottom' | null>(null)
  const [targetWidth, setTargetWidth] = useState(0)

  useResizeObserver(
    targetRef,
    entry => setTargetWidth((entry.target as HTMLElement).offsetWidth),
    enabled,
  )

  function handleTopScroll(e: UIEvent<HTMLDivElement>) {
    if (scrollSyncSourceRef.current === 'bottom') {
      scrollSyncSourceRef.current = null
      return
    }
    scrollSyncSourceRef.current = 'top'
    if (containerRef.current) {
      containerRef.current.scrollLeft = e.currentTarget.scrollLeft
    }
  }

  function handleBottomScroll(e: UIEvent<HTMLDivElement>) {
    if (scrollSyncSourceRef.current === 'top') {
      scrollSyncSourceRef.current = null
      return
    }
    scrollSyncSourceRef.current = 'bottom'
    if (topScrollRef.current) {
      topScrollRef.current.scrollLeft = e.currentTarget.scrollLeft
    }
  }

  return {
    containerRef,
    topScrollRef,
    targetWidth,
    handleTopScroll,
    handleBottomScroll,
  }
}
