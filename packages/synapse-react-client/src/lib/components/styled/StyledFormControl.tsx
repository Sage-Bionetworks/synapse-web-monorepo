import {
  FormControl,
  FormControlProps,
  formHelperTextClasses,
  inputBaseClasses,
  styled,
} from '@mui/material'
import { StyledComponent } from '@emotion/styled'

/* bootstrap-like label/text inputs
 usage:
        <StyledFormControl fullWidth variant="standard" margin="normal">
          <InputLabel shrink htmlFor="someinput">
            labelText
          </InputLabel>
          <InputBase id="someinput"/>
        </StyledFormControl>
*/
export const StyledFormControl: StyledComponent<FormControlProps> = styled(
  FormControl,
  {
    label: 'StyledFormControl',
  },
)(({ theme }) => ({
  '& label': {
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
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-multiline': {
    padding: '0px',
  },
  '& fieldset': {
    border: 'none',
  },
}))

export default StyledFormControl
