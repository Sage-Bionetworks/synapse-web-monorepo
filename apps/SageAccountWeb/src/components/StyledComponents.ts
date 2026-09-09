import { Paper, PaperProps, styled, Theme } from '@mui/material'
import { SystemStyleObject } from '@mui/system'
import { StyledComponent } from '@emotion/styled'
import {
  StyledInnerContainer as BaseStyledInnerContainer,
  StyledOuterContainer,
} from 'synapse-react-client/components/styled/LeftRightPanel'

export { StyledOuterContainer }

/**
 * SageAccountWeb flavor of the shared `StyledInnerContainer`
 * (`synapse-react-client/components/styled/LeftRightPanel`). The base
 * supplies the 900px two-column card, its two-tone panel colors, and the
 * mobile single-column stacking; this layer adds the app's panel padding and
 * relative positioning, reduced below `sm` so it fits a phone viewport
 * (SWC-7966).
 */
export const StyledInnerContainer: StyledComponent<PaperProps> = styled(
  BaseStyledInnerContainer,
)(({ theme }) => ({
  '& > div:nth-of-type(1), & > div:nth-of-type(2)': {
    position: 'relative',
    padding: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5),
    },
  },
}))

/**
 * Identifies the `StyledInnerContainer` column that only renders above `md`.
 * The column is a layout wrapper with no accessible role, so tests that assert
 * it is hidden on mobile have no accessible query to use; reference this
 * constant from both sides instead of a structural selector.
 */
export const DESKTOP_RIGHT_PANEL_TEST_ID = 'desktop-right-panel'

/**
 * Widens a `StyledInnerContainer` into a 1200px two-column layout (750px
 * left panel) for content that needs more room than the default 900px/450px
 * split.
 *
 * Scoped to `up('md')` so it never fights `StyledInnerContainer`'s own
 * mobile-responsive (single-column, full-width) layout below that
 * breakpoint (SWC-7966)
 */
export function getWideDesktopTwoColumnSx(
  theme: Theme,
): SystemStyleObject<Theme> {
  return {
    [theme.breakpoints.up('md')]: {
      width: '1200px',
      '& > div:nth-of-type(1)': {
        paddingTop: theme.spacing(10),
        width: '750px',
      },
      '& > div:nth-of-type(2)': { paddingTop: theme.spacing(10) },
    },
  }
}

/**
 * Centered card for single-column "next steps" screens (e.g. email
 * verification, profile-validation submission): fixed 500px width with
 * generous padding on desktop, full width with reduced padding below `sm` so
 * it never overflows a phone viewport (SWC-7966).
 */
export const StyledConfirmationCard: StyledComponent<PaperProps> = styled(
  Paper,
  { label: 'StyledConfirmationCard' },
)(({ theme }) => ({
  width: '500px',
  margin: '0 auto',
  padding: theme.spacing(8),
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: theme.spacing(5),
  },
}))
