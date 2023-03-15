import { Paper, PaperProps, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export const StyledInnerContainer: StyledComponent<PaperProps> = styled(Paper, {
  label: 'StyledInnerContainer',
})(({ theme }) => ({
  width: '550px',
  margin: '0 auto',
  padding: '30px',
  backgroundColor: theme.palette.background.paper,
}))
