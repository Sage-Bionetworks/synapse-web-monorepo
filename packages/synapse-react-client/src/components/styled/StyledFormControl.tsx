import { StyledComponent } from '@emotion/styled'
import FormControl, { FormControlProps } from '@mui/material/FormControl'
import { formHelperTextClasses } from '@mui/material/FormHelperText'
import { inputBaseClasses } from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'

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
