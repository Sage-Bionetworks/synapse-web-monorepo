import React from 'react'
import { Tooltip, TooltipProps, tooltipClasses, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export const LightTooltip: StyledComponent<TooltipProps> = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ),
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[1000],
    boxShadow: theme.shadows[1],
    border: `1px solid ${theme.palette.grey[500]}`,
  },
  [`& .${tooltipClasses.arrow}`]: {
    '&:before': {
      boxShadow: theme.shadows[1],
      border: `1px solid ${theme.palette.grey[500]}`,
    },
    color: theme.palette.common.white,
  },
}))

export default LightTooltip
