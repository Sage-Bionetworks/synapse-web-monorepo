import { useState, useEffect, useRef } from 'react'

const calculateOpacity = (rect: DOMRect): number => {
  const viewportHeight = window.innerHeight
  const elementCenterY = rect.top + rect.height / 2
  const middleRangeStart = viewportHeight * 0.3
  const middleRangeEnd = viewportHeight * 0.7

  if (elementCenterY >= middleRangeStart && elementCenterY <= middleRangeEnd) {
    // center of element is within the viewport bounds that I want to show full opacity
    return 1
  } else {
    //otherwise, subtract the % (of the center of the element to one of the boundaries)
    const distanceToMiddle = Math.min(
      Math.abs(elementCenterY - middleRangeStart),
      Math.abs(elementCenterY - middleRangeEnd),
    )
    const maxDistance = viewportHeight / 4
    return Math.max(0, 1 - distanceToMiddle / maxDistance)
  }
}
/**
 * Use this hook if you want to change the opacity of an element dynamically based on where an element is in the current viewport.
 * Opacity will be 1 when the element is in the middle of the viewport, and 0 when it is outside of the viewport.
 * @returns
 */
export function useScrollFadeTransition() {
  const ref = useRef(null)
  // opacity of the desktop image
  const [opacity, setOpacity] = useState(1)

  // listen to the scroll event, and calculate the opacity based on
  useEffect(() => {
    const handleScroll = () => {
      const rect = (ref.current as any).getBoundingClientRect()
      setOpacity(calculateOpacity(rect))
    }

    if (ref) {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref])
  return { ref, opacity }
}
