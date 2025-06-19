import Tooltip from '@mui/material/Tooltip'
import { TooltipProps } from '@mui/material/Tooltip'
import { tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import { linkClasses } from '@mui/material/Link'
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
