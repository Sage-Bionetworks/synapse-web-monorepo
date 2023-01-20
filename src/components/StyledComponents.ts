import { styled, Box } from '@mui/material'

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
