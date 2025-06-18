import Button from '@mui/material/Button'
import { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { StyledComponent } from '@emotion/styled'

export const LargeButton: StyledComponent<ButtonProps> = styled(Button, {
  label: 'LargeButton',
})(({ theme }) => ({
  padding: '10px 24px',
  fontSize: '16px',
}))

export default LargeButton
