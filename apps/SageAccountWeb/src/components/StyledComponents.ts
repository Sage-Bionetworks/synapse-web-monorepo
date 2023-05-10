import { BoxProps, Paper, PaperProps, styled } from '@mui/material'
import { StyledComponent } from '@mui/styles'
import { SynapseComponents } from 'synapse-react-client'

export const StyledOuterContainer: StyledComponent<BoxProps> =
  SynapseComponents.StyledOuterContainer

export const StyledInnerContainer: StyledComponent<PaperProps> = styled(Paper, {
  label: 'StyledInnerContainer',
})(({ theme }) => ({
  width: '900px',
  margin: '0 auto',
  display: 'flex',
  overflow: 'hidden',
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

export const StyledFormControl = SynapseComponents.StyledFormControl
