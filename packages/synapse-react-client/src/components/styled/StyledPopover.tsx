import LightTooltip from '@/components/styled/LightTooltip'
import spreadSx from '@/react-ui/theme/utils/mergeSx'
import {
  Box,
  Button,
  ButtonProps,
  SxProps,
  tooltipClasses,
  TooltipProps,
} from '@mui/material'
import { atom, useAtom } from 'jotai'
import { PropsWithChildren, ReactNode, useId } from 'react'

export type StyledPopoverProps = PropsWithChildren<{
  popoverContent: React.ReactNode
  sx?: TooltipProps['sx']
  placement?: TooltipProps['placement']
  showCloseButton?: boolean
  actionButton?: {
    content: ReactNode
    color?: ButtonProps['color']
    variant?: ButtonProps['variant']
    onClick: () => void
    closePopoverOnClick?: boolean
  }
  maxWidth?: string
  minWidth?: string
  containerSx?: SxProps
}>

const buttonBoxSx: SxProps = {
  mt: 2,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row-reverse',
  '> button': {
    flexGrow: 1,
    maxWidth: '45%',
  },
}

// Register a global atom to track which popover is open, to ensure only one is shown at any given time
const openMarkdownPopoverAtom = atom<string | null>(null)

export function StyledPopover({
  children,
  popoverContent,
  placement = 'bottom-start',
  showCloseButton = true,
  actionButton,
  sx,
  maxWidth = '500px',
  minWidth = '300px',
  containerSx,
}: StyledPopoverProps) {
  const id = useId()
  const [openMarkdownPopoverId, setOpenMarkdownPopoverId] = useAtom(
    openMarkdownPopoverAtom,
  )

  const show = openMarkdownPopoverId === id

  const content = (
    <Box sx={{ padding: '20px' }}>
      {popoverContent}
      <Box sx={buttonBoxSx}>
        {actionButton && (
          <Button
            color={actionButton.color || 'primary'}
            variant={actionButton.variant || 'contained'}
            onClick={() => {
              actionButton.onClick()
              if (actionButton.closePopoverOnClick) {
                setOpenMarkdownPopoverId(null)
              }
            }}
          >
            {actionButton.content}
          </Button>
        )}
        {showCloseButton && (
          <Button
            variant="outlined"
            onClick={() => setOpenMarkdownPopoverId(null)}
          >
            Close
          </Button>
        )}
      </Box>
    </Box>
  )

  return (
    <LightTooltip
      title={content}
      placement={placement}
      open={show}
      sx={spreadSx(sx, {
        [`& .${tooltipClasses.tooltip}`]: {
          maxWidth: { maxWidth },
          minWidth: { minWidth },
        },
      })}
    >
      <Box
        role="button"
        className={'PopoverContainer'}
        onClick={e => {
          // Prevent the default action of the click event -- for example, if this is in a `label` tag for a checkbox,
          // prevent the click from toggling the checkbox value
          e.preventDefault()
          // Prevent the click from propagating to the parent container
          e.stopPropagation()
          setOpenMarkdownPopoverId(currentId => (currentId == id ? null : id))
        }}
        sx={{ display: 'inline-block', cursor: 'pointer', ...containerSx }}
      >
        {children}
      </Box>
    </LightTooltip>
  )
}
