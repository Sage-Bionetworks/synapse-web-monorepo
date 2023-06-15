import { Button, ButtonProps, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export const InputSizedButton: StyledComponent<ButtonProps> = styled(Button, {
  label: 'InputSizedButton',
})(({ theme }) => ({
  height: 'calc(1.4375em + 33px)',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1.5),
}))

export default InputSizedButton
