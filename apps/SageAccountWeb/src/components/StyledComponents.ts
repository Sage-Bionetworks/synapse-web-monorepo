import { StyledComponent } from '@emotion/styled'
import { BoxProps } from '@mui/material/Box'
import { FormControlProps } from '@mui/material/FormControl'
import Paper, { PaperProps } from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { StyledOuterContainer as _StyledOuterContainer } from 'synapse-react-client/components/styled/LeftRightPanel'
import { StyledFormControl as _StyledFormControl } from 'synapse-react-client/components/styled/StyledFormControl'

export const StyledOuterContainer: StyledComponent<BoxProps> =
  _StyledOuterContainer

export const StyledInnerContainer: StyledComponent<PaperProps> = styled(Paper, {
  label: 'StyledInnerContainer',
})(({ theme }) => ({
  width: '900px',
  margin: '0 auto',
  display: 'flex',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    overflowY: 'scroll',
  },

  '& > div:nth-of-type(1), & > div:nth-of-type(2)': {
    width: '450px',
    position: 'relative',
    padding: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      height: '100%',
      width: '100%',
    },
  },
  '& > div:nth-of-type(1)': {
    backgroundColor: '#FFF',
  },
  '& > div:nth-of-type(2)': {
    backgroundColor: '#F1F3F5',
  },
}))

export const StyledFormControl: StyledComponent<FormControlProps> =
  _StyledFormControl
