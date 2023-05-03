import React, { useState } from 'react'
import {
  Button,
  Box,
  TooltipProps,
  tooltipClasses,
  ButtonProps,
} from '@mui/material'
import MarkdownSynapse, {
  MarkdownSynapseProps,
} from './markdown/MarkdownSynapse'
import { Typography } from '@mui/material'
import LightTooltip from '../components/styled/LightTooltip'

export type MarkdownPopoverProps = {
  children: JSX.Element
  contentProps: MarkdownSynapseProps
  sx?: TooltipProps['sx']
  placement?: TooltipProps['placement']
  showCloseButton?: boolean
  actionButton?: {
    content: React.ReactElement
    color?: ButtonProps['color']
    variant?: ButtonProps['variant']
    onClick: () => void
    closePopoverOnClick?: boolean
  }
  maxWidth?: string
  minWidth?: string
}

const buttonBoxSx = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row-reverse',
  '> button': {
    flexGrow: 1,
    maxWidth: '45%',
  },
}

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
  const [show, setShow] = useState(false)

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
                setShow(false)
              }
            }}
          >
            {actionButton.content}
          </Button>
        )}
        {showCloseButton && (
          <Button variant="outlined" onClick={() => setShow(false)}>
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
      onClick={() => setShow(!show)}
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
        sx={{ display: 'inline-block', cursor: 'pointer' }}
      >
        {children}
      </Box>
    </LightTooltip>
  )
}
