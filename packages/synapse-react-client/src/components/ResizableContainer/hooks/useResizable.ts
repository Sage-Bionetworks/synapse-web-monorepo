import { useCallback, useEffect, useRef, useState } from 'react'

export interface ResizableOptions {
  initialWidth?: number
  initialHeight?: number
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
  onResize?: (size: { width: number; height: number }) => void
}

export interface ResizableState {
  width: number
  height: number
  isResizing: boolean
}

export interface ResizableHandlers {
  handleResizeStart: (e: React.MouseEvent) => void
  setSize: (size: { width: number; height: number }) => void
}

/** See DraggableDialog for an example on how to use useResizable with a ResizableContainer */
export function useResizable(
  options: ResizableOptions = {},
): ResizableState & ResizableHandlers {
  const {
    initialWidth = 600,
    initialHeight = 500,
    minWidth = 300,
    minHeight = 200,
    maxWidth = 1200,
    maxHeight = 800,
    onResize,
  } = options

  const [size, setSize] = useState({
    width: initialWidth,
    height: initialHeight,
  })
  const [isResizing, setIsResizing] = useState(false)
  const resizeStartRef = useRef<{
    x: number
    y: number
    width: number
    height: number
  } | null>(null)

  const handleResizeStart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsResizing(true)
      resizeStartRef.current = {
        x: e.clientX,
        y: e.clientY,
        width: size.width,
        height: size.height,
      }
    },
    [size],
  )

  const handleResizeMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing || !resizeStartRef.current) return

      const deltaX = e.clientX - resizeStartRef.current.x
      const deltaY = e.clientY - resizeStartRef.current.y

      const newWidth = Math.max(
        minWidth,
        Math.min(maxWidth, resizeStartRef.current.width + deltaX),
      )
      const newHeight = Math.max(
        minHeight,
        Math.min(maxHeight, resizeStartRef.current.height + deltaY),
      )

      const newSize = { width: newWidth, height: newHeight }
      setSize(newSize)
      onResize?.(newSize)
    },
    [isResizing, minWidth, maxWidth, minHeight, maxHeight, onResize],
  )

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false)
    resizeStartRef.current = null
  }, [])

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleResizeMove)
      document.addEventListener('mouseup', handleResizeEnd)
    }
    return () => {
      document.removeEventListener('mousemove', handleResizeMove)
      document.removeEventListener('mouseup', handleResizeEnd)
    }
  }, [isResizing, handleResizeMove, handleResizeEnd])

  return {
    width: size.width,
    height: size.height,
    isResizing,
    handleResizeStart,
    setSize,
  }
}
