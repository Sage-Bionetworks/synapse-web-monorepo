import { StyledComponent } from '@emotion/styled'
import Paper, { PaperProps } from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

export const StyledInnerContainer: StyledComponent<PaperProps> = styled(Paper, {
  label: 'StyledInnerContainer',
})(({ theme }) => ({
  width: '550px',
  margin: '0 auto',
  padding: '30px',
  backgroundColor: theme.palette.background.paper,
}))
