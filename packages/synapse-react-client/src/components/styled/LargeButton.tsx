import { Button, ButtonProps, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export const LargeButton: StyledComponent<ButtonProps> = styled(Button, {
  label: 'LargeButton',
})(({ theme }) => ({
  padding: '10px 24px',
  fontSize: '16px',
}))

export default LargeButton
