import Badge from '@mui/material/Badge'
import { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import { StyledComponent } from '@emotion/styled'

/**
 * Renders a badge component in-line with other content, instead of as an overlay.
 */
export const InlineBadge: StyledComponent<BadgeProps> = styled(Badge, {
  label: 'InlineBadge',
})(({ theme }) => ({
  position: 'static',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '.MuiBadge-badge': {
    minWidth: 'unset',
    position: 'relative',
    transform: 'none',
  },
}))

export default InlineBadge
