import { Button, ButtonProps, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export const LargeButton: StyledComponent<ButtonProps> = styled(Button, {
  label: 'LargeButton',
})(({ theme }) => ({
  padding: '10px 24px',
  fontSize: '16px',
  // TODO: remove this line after we have removed bootstrap
  '&:hover': { color: theme.palette.common.white }, // otherwise tab-focus.less overrides color
}))

export default LargeButton
