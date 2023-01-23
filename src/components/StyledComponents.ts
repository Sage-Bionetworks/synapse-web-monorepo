import {
  alpha,
  Box,
  FormControl,
  formHelperTextClasses,
  inputBaseClasses,
  styled,
  textFieldClasses,
} from '@mui/material'
import { latoFont } from 'style/theme'

export const StyledOuterContainer = styled(Box, {
  label: 'StyledOuterContainer',
})(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: '50px',
  paddingBottom: '50px',
  background:
    "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://s3.amazonaws.com/static.synapse.org/images/SynapseLoginPageBackground.svg')",
  backgroundSize: 'cover',
}))

export const StyledInnerContainer = styled(Box, {
  label: 'StyledInnerContainer',
})(({ theme }) => ({
  width: '900px',
  margin: '0 auto',
  display: 'flex',
  '& > div:nth-of-type(1), & > div:nth-of-type(2)': {
    width: '450px',
    position: 'relative',
    padding: theme.spacing(8),
  },
  '& > div:nth-of-type(1)': {
    backgroundColor: '#FFF',
  },
  '& > div:nth-of-type(2)': {
    backgroundColor: '#F1F3F5',
  },
}))

/* bootstrap-like label/text inputs 
 usage: 
        <StyledFormControl fullWidth variant="standard" margin="normal">
          <InputLabel shrink htmlFor="someinput">
            labelText
          </InputLabel>
          <TextField
            id="someinput"/>
        </StyledFormControl>
*/
export const StyledFormControl = styled(FormControl, {
  label: 'StyledFormControl',
})(({ theme }) => ({
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
  [`& .${textFieldClasses.root}`]: {
    marginTop: theme.spacing(3),

    [`& .${inputBaseClasses.root}`]: {
      borderRadius: '3px',
    },
    '& .MuiInputBase-input': {
      borderRadius: '3px',
      fontSize: '14px',
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F1F3F5' : '#F1F3F5',
      border: 'none',
      padding: '14px 12px',
      fontFamily: latoFont,
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
        borderColor: theme.palette.primary.main,
      },
    },
    '& fieldset': {
      border: 'none',
    },
  },
}))
