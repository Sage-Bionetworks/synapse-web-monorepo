import { StyledInnerContainer, StyledOuterContainer } from './StyledComponents'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

export function LeftRightPanel({
  leftContent,
  rightContent,
  className,
}: {
  leftContent: JSX.Element
  rightContent: JSX.Element
  className?: string
}) {
  const theme = useTheme()
  return (
    <StyledOuterContainer className={className}>
      <StyledInnerContainer>
        <Box className="left-panel">{leftContent}</Box>
        <Box sx={{ position: 'relative' }}>
          <Box
            className="right-panel"
            sx={{
              marginTop: { xs: 0, md: '95px' },
              marginBottom: { xs: 0, md: theme.spacing(4) },
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
