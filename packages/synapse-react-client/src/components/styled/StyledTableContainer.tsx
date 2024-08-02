import { Box, BoxProps, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export type StyledTableContainerProps = BoxProps & {
  density?: 'default' | 'compact'
  ['data-testid']?: string
}

export const StyledTableContainer: StyledComponent<StyledTableContainerProps> =
  styled(Box)<StyledTableContainerProps>(({ theme, density = 'default' }) => ({
    overflow: 'auto',
    paddingLeft: '2px',
    th: {
      height: '38px',
      backgroundColor: theme.palette.grey[200],
      borderRight: '1px solid',
      borderColor: theme.palette.grey[400],
    },
    ['th:first-of-type']: {
      paddingLeft: '10px',
    },
    ['td:first-of-type']: {
      paddingLeft: '10px',
    },
    ['tr:nth-of-type(2n)']: {
      backgroundColor: theme.palette.grey[100],
    },
    ['th,td']: {
      position: 'relative',
      paddingLeft: theme.spacing(density === 'compact' ? 0 : 1),
      paddingRight: theme.spacing(density === 'compact' ? 0 : 1),
    },
    td: {
      paddingTop: theme.spacing(density === 'compact' ? 0 : 1),
      paddingBottom: theme.spacing(density === 'compact' ? 0 : 1),
    },
    '.resizer': {
      position: 'absolute',
      right: 0,
      top: 0,
      height: '100%',
      width: '3px',
      padding: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      cursor: 'col-resize',
      userSelect: 'none',
      touchAction: 'none',
    },
    '.resizer.isResizing': {
      background: theme.palette.primary.main,
      opacity: 1,
    },
    '@media (hover: hover)': {
      '.resizer': {
        opacity: 0,
        '*:hover > .resizer': {
          opacity: 1,
        },
      },
    },
  }))
