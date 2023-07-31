import { Box, BoxProps, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export const PlatformOfferingsGrid: StyledComponent<BoxProps> = styled(Box, {
  label: 'PlatformOfferingsGrid',
})(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '40% 20% 20% 20%',
}))
export default PlatformOfferingsGrid
