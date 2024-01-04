import React from 'react'
import {
  Tooltip,
  TooltipProps,
  tooltipClasses,
  styled,
  linkClasses,
} from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export const LightTooltip: StyledComponent<TooltipProps> = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ),
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.grey[1000],
    boxShadow: theme.shadows[1],
    border: `1px solid ${theme.palette.grey[500]}`,
  },
  [`& .${tooltipClasses.arrow}`]: {
    '&:before': {
      boxShadow: theme.shadows[1],
      border: `1px solid ${theme.palette.grey[500]}`,
    },
    color: theme.palette.background.paper,
  },
  [`& .${tooltipClasses.tooltip} .${linkClasses.root}`]: {
    color: `${theme.palette.primary.main}`,
  },
}))

export default LightTooltip
