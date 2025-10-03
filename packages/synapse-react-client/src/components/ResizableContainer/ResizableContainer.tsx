import { Box, SxProps, Theme } from '@mui/material'
import { ReactNode } from 'react'

export interface ResizeHandleProps {
  onMouseDown: (e: React.MouseEvent) => void
  sx?: SxProps<Theme>
}

export function ResizeHandle({ onMouseDown, sx }: ResizeHandleProps) {
  return (
    <Box
      onMouseDown={onMouseDown}
      sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 20,
        height: 20,
        cursor: 'se-resize',
        // Add a simple diagonal lines to indicate resize handle
        '&::before': {
          content: '""',
          position: 'absolute',
          right: 7,
          bottom: 7,
          width: 5,
          height: 5,
          borderRight: '2px solid #999',
          borderBottom: '2px solid #999',
        },
        ...sx,
      }}
    />
  )
}

export interface ResizableContainerProps {
  children: ReactNode
  width: number
  height: number
  onResizeStart: (e: React.MouseEvent) => void
  showResizeHandle?: boolean
  resizeHandleSx?: SxProps<Theme>
  sx?: SxProps<Theme>
}

/** See DraggableDialog for an example on how to use useResizable with a ResizableContainer */
export function ResizableContainer({
  children,
  width,
  height,
  onResizeStart,
  showResizeHandle = true,
  resizeHandleSx,
  sx,
}: ResizableContainerProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        ...sx,
      }}
    >
      {children}
      {showResizeHandle && (
        <ResizeHandle onMouseDown={onResizeStart} sx={resizeHandleSx} />
      )}
    </Box>
  )
}
