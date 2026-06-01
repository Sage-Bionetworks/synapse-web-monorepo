import {
  FormControl,
  FormControlProps,
  formHelperTextClasses,
  inputBaseClasses,
  styled,
} from '@mui/material'
import { StyledComponent } from '@emotion/styled'

/**
 * Provides bootstrap-like label/text inputs for a MUI FormControl.
 *
 * This should not be used with components that provide their own FormControl, such as TextField.
 *
 * @example
 * ```tsx
 *       <StyledFormControl fullWidth variant="standard" margin="normal">
 *         <InputLabel shrink htmlFor="someinput">
 *           labelText
 *         </InputLabel>
 *         <InputBase id="someinput"/>
 *       </StyledFormControl>
 * ```
 */
export const StyledFormControl: StyledComponent<FormControlProps> = styled(
  FormControl,
  {
    label: 'StyledFormControl',
  },
)(({ theme }) => ({
  '& label': {
    position: 'static',
    fontSize: '14px',
    transform: 'none',
  },
  [`& .${formHelperTextClasses.root}`]: {
    marginLeft: '0',
    [`&.Mui-error`]: {
      color: '#c13415',
    },
  },

  [`& .${inputBaseClasses.root}`]: {
    marginTop: theme.spacing(0.5),
  },
  '& .MuiInputBase-multiline': {
    padding: '0px',
  },
  '& fieldset': {
    border: 'none',
  },
}))

export default StyledFormControl
