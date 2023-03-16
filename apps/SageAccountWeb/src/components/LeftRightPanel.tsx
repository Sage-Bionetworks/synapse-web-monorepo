import React from 'react'
import { StyledInnerContainer, StyledOuterContainer } from './StyledComponents'
import { Box } from '@mui/material'
import theme from 'style/theme'

export const LeftRightPanel: React.FC<{
  leftContent: JSX.Element
  rightContent: JSX.Element
  className?: string
}> = ({ leftContent, rightContent, className }) => {
  return (
    <StyledOuterContainer className={className}>
      <StyledInnerContainer>
        <Box>{leftContent}</Box>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              marginTop: theme.spacing(8),
              marginBottom: theme.spacing(4),
              overflow: 'hidden',
              fontWeight: '700',
              fontSize: '16px',
              color: '#4A5056',
            }}
          >
            {rightContent}
          </Box>
        </Box>
      </StyledInnerContainer>
    </StyledOuterContainer>
  )
}
