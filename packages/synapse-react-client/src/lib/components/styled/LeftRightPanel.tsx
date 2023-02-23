import React from 'react'
import { Box, BoxProps, Paper, PaperProps, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export const StyledOuterContainer: StyledComponent<BoxProps> = styled(Box, {
  label: 'StyledOuterContainer',
})(() => ({
  minHeight: '100vh',
  paddingTop: '50px',
  paddingBottom: '50px',
  background:
    "linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)), url('https://s3.amazonaws.com/static.synapse.org/images/SynapseLoginPageBackground.svg')",
  backgroundSize: 'cover',
}))

export const StyledInnerContainer: StyledComponent<PaperProps> = styled(Paper, {
  label: 'StyledInnerContainer',
})(({ theme }) => ({
  width: '900px',
  minHeight: '600px',
  margin: '0 auto',
  display: 'flex',
  '& > div:nth-of-type(1), & > div:nth-of-type(2)': {
    borderRadius: 'inherit',
    width: '450px',
  },
  '& > div:nth-of-type(1)': {
    backgroundColor: theme.palette.background.paper,
  },
  '& > div:nth-of-type(2)': {
    backgroundColor: theme.palette.grey[200],
  },
}))

export const LeftRightPanel: React.FC<{
  leftContent: JSX.Element
  rightContent: JSX.Element
  className?: string
}> = ({ leftContent, rightContent, className }) => {
  return (
    <StyledOuterContainer className={className}>
      <StyledInnerContainer>
        <Box>{leftContent}</Box>
        <Box>{rightContent}</Box>
      </StyledInnerContainer>
    </StyledOuterContainer>
  )
}
