import { Button, ButtonProps, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export const WideButton: StyledComponent<ButtonProps> = styled(Button, {
  label: 'WideButton',
})(({ theme }) => ({
  minWidth: '168px',
  padding: '10px',
  fontSize: '16px',
  // TODO: remove this line after we have removed bootstrap
  '&:hover': { color: theme.palette.common.white }, // otherwise tab-focus.less overrides color
}))

export default WideButton
