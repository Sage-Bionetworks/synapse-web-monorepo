import Button from '@mui/material/Button'
import { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { StyledComponent } from '@emotion/styled'

export const WideButton: StyledComponent<ButtonProps> = styled(Button, {
  label: 'WideButton',
})(({ theme }) => ({
  minWidth: '168px',
  padding: '10px',
  fontSize: '16px',
}))

export default WideButton
