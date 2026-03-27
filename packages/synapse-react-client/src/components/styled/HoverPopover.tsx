import {
  Box,
  Button,
  ButtonProps,
  Popover,
  PopoverOrigin,
  Typography,
} from '@mui/material'
import { PropsWithChildren, ReactNode, useRef, useState } from 'react'

export type HoverPopoverPlacement = 'top' | 'bottom' | 'left' | 'right'

function getOrigins(placement: HoverPopoverPlacement): {
  anchorOrigin: PopoverOrigin
  transformOrigin: PopoverOrigin
} {
  switch (placement) {
    case 'top':
      return {
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
        transformOrigin: { vertical: 'bottom', horizontal: 'center' },
      }
    case 'bottom':
      return {
        anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
        transformOrigin: { vertical: 'top', horizontal: 'center' },
      }
    case 'left':
      return {
        anchorOrigin: { vertical: 'center', horizontal: 'left' },
        transformOrigin: { vertical: 'center', horizontal: 'right' },
      }
    case 'right':
      return {
        anchorOrigin: { vertical: 'center', horizontal: 'right' },
        transformOrigin: { vertical: 'center', horizontal: 'left' },
      }
  }
}

/** Delay in ms before the popover closes after the mouse leaves the trigger or popover */
const CLOSE_DELAY_MS = 150

export type HoverPopoverProps = PropsWithChildren<{
  popoverContent: ReactNode
  /** Optional title rendered as a sticky header above the scrollable content */
  title?: string
  placement?: HoverPopoverPlacement

  maxWidth?: string | number
  minWidth?: string | number
  /** Max height of the scrollable content area. Default 400px. */
  maxHeight?: string | number
  actionButton?: {
    content: ReactNode
    color?: ButtonProps['color']
    variant?: ButtonProps['variant']
    onClick: () => void
    /** If true, closes the popover after the button is clicked */
    closeOnClick?: boolean
  }
}>

/**
 * A popover that opens when the user hovers over the trigger child and remains
 * open as long as the mouse is over either the trigger or the popover itself.
 * The content area is scrollable, avoiding any interaction with browser scroll.
 */
export function HoverPopover({
  children,
  popoverContent,
  title,
  placement = 'right',
  maxWidth = 500,
  minWidth = 300,
  maxHeight = 400,
  actionButton,
}: HoverPopoverProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelClose = () => {
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  const scheduleClose = () => {
    cancelClose()
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorEl(null)
    }, CLOSE_DELAY_MS)
  }

  const { anchorOrigin, transformOrigin } = getOrigins(placement)

  return (
    <>
      <Box
        component="span"
        onMouseEnter={e => {
          cancelClose()
          setAnchorEl(e.currentTarget)
        }}
        onMouseLeave={scheduleClose}
        sx={{ display: 'inline-block' }}
      >
        {children}
      </Box>
      <Popover
        open={anchorEl !== null}
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        onClose={() => setAnchorEl(null)}
        disableAutoFocus
        disableEnforceFocus
        disableScrollLock
        slotProps={{
          backdrop: { sx: { pointerEvents: 'none' } },
          paper: {
            onMouseEnter: cancelClose,
            onMouseLeave: scheduleClose,
            sx: {
              maxWidth,
              minWidth,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            },
          },
        }}
      >
        {title && (
          <Box
            sx={{
              px: '20px',
              pt: '16px',
              pb: '8px',
              flexShrink: 0,
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="smallText1" fontWeight={700}>
              {title}
            </Typography>
          </Box>
        )}
        <Box sx={{ overflowY: 'auto', maxHeight, p: '20px' }}>
          {popoverContent}
        </Box>
        {actionButton && (
          <Box sx={{ px: '20px', pb: '16px', flexShrink: 0 }}>
            <Button
              color={actionButton.color ?? 'primary'}
              variant={actionButton.variant ?? 'contained'}
              fullWidth
              onClick={() => {
                actionButton.onClick()
                if (actionButton.closeOnClick) {
                  setAnchorEl(null)
                }
              }}
            >
              {actionButton.content}
            </Button>
          </Box>
        )}
      </Popover>
    </>
  )
}
