import React, { useId } from 'react'
import {
  Box,
  Button,
  ButtonProps,
  tooltipClasses,
  TooltipProps,
  Typography,
} from '@mui/material'
import MarkdownSynapse, { MarkdownSynapseProps } from './MarkdownSynapse'
import LightTooltip from '../styled/LightTooltip'
import { atom, useAtom } from 'jotai'

export type MarkdownPopoverProps = React.PropsWithChildren<{
  contentProps: MarkdownSynapseProps
  sx?: TooltipProps['sx']
  placement?: TooltipProps['placement']
  showCloseButton?: boolean
  actionButton?: {
    content: React.ReactNode
    color?: ButtonProps['color']
    variant?: ButtonProps['variant']
    onClick: () => void
    closePopoverOnClick?: boolean
  }
  maxWidth?: string
  minWidth?: string
}>

const buttonBoxSx = {
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

export const MarkdownPopover: React.FunctionComponent<MarkdownPopoverProps> = ({
  children,
  contentProps,
  placement = 'bottom-start',
  showCloseButton = true,
  actionButton,
  sx,
  maxWidth = '500px',
  minWidth = '300px',
}: MarkdownPopoverProps) => {
  const id = useId()
  const [openMarkdownPopoverId, setOpenMarkdownPopoverId] = useAtom(
    openMarkdownPopoverAtom,
  )

  const show = openMarkdownPopoverId === id

  const content = (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="body1" marginBottom={2}>
        <MarkdownSynapse {...contentProps} />
      </Typography>
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
      sx={{
        ...sx,
        [`& .${tooltipClasses.tooltip}`]: {
          maxWidth: { maxWidth },
          minWidth: { minWidth },
        },
      }}
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
        sx={{ display: 'inline-block', cursor: 'pointer' }}
      >
        {children}
      </Box>
    </LightTooltip>
  )
}
