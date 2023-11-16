import { RefObject, useEffect, useState } from 'react'

/**
 * How to use:
   const divRef = createRef()
   const dimensions = useRefDimensions(divRef)
  ...
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div
        ref={divRef}
      >
        Dimensions: {dimensions.width}w {dimensions.height}h
      </div>
    </div>
  )
 */

const useRefDimensions = (ref: RefObject<Element>) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 })
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const boundingRect = ref.current.getBoundingClientRect()
        const { width, height } = boundingRect
        const newWidth = Math.round(width)
        const newHeight = Math.round(height)
        if (dimensions.width != newWidth || dimensions.height != newHeight)
          setDimensions({ width: newWidth, height: newHeight })
      }
    }

    // Call the updateWidth function initially to set the initial width.
    handleResize()

    // Add an event listener for window resize events.
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dimensions.height, dimensions.width, ref])
  return dimensions
}

export default useRefDimensions
