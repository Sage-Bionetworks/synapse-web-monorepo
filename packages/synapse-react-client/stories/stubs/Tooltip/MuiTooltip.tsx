import React from 'react'
import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@mui/material'

export interface TooltipProps extends MuiTooltipProps {}

export const Tooltip = (props: TooltipProps) => <MuiTooltip {...props} />
