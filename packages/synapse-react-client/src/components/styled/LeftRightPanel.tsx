import { Box, BoxProps, Paper, PaperProps, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'
import { ReactNode } from 'react'

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

/**
 * Canonical 900px two-column card that stacks into a single scrollable column
 * on mobile. Layout-only: consumers supply their own panel padding.
 * `apps/SageAccountWeb` extends this (adding baked-in panel padding) rather
 * than redefining it -- see that app's `StyledComponents.ts` (SWC-7966).
 */
export const StyledInnerContainer: StyledComponent<PaperProps> = styled(Paper, {
  label: 'StyledInnerContainer',
})(({ theme }) => ({
  width: '900px',
  minHeight: '675px',
  margin: '0 auto',
  display: 'flex',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    width: '100%',
    minHeight: 0,
    height: '100vh',
    overflowX: 'auto',
    overflowY: 'scroll',
  },
  '& > div:nth-of-type(1), & > div:nth-of-type(2)': {
    borderRadius: 'inherit',
    width: '450px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  '& > div:nth-of-type(1)': {
    backgroundColor: theme.palette.background.paper,
  },
  '& > div:nth-of-type(2)': {
    backgroundColor: theme.palette.grey[200],
  },
}))

type LeftRightPanelProps = {
  leftContent: ReactNode
  rightContent: ReactNode
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
