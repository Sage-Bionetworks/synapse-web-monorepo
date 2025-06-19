import Box from '@mui/material/Box'
import { BoxProps } from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { PaperProps } from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { StyledComponent } from '@emotion/styled'

export const StyledOuterContainer: StyledComponent<BoxProps> = styled(Box, {
  label: 'StyledOuterContainer',
})(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: '50px',
  paddingBottom: '50px',
  background: theme.styledBackground,
  backgroundSize: 'cover',
  [theme.breakpoints.down('md')]: {
    padding: 0,
  },
}))

export const StyledInnerContainer: StyledComponent<PaperProps> = styled(Paper, {
  label: 'StyledInnerContainer',
})(({ theme }) => ({
  width: '900px',
  minHeight: '675px',
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

type LeftRightPanelProps = {
  leftContent: JSX.Element
  rightContent: JSX.Element
  className?: string
}

export function LeftRightPanel({
  leftContent,
  rightContent,
  className,
}: LeftRightPanelProps) {
  return (
    <StyledOuterContainer className={className}>
      <StyledInnerContainer>
        <Box>{leftContent}</Box>
        <Box>{rightContent}</Box>
      </StyledInnerContainer>
    </StyledOuterContainer>
  )
}
