import { Button, ButtonProps, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export const WideButton: StyledComponent<ButtonProps> = styled(Button, {
  label: 'WideButton',
})(({ theme }) => ({
  minWidth: '168px',
  padding: '10px',
  fontSize: '16px',
}))

export default WideButton
