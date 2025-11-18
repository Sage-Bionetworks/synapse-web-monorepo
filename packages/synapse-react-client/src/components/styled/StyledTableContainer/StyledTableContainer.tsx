import { StyledComponent } from '@emotion/styled'
import { Box, BoxProps, styled } from '@mui/material'

export type StyledTableContainerProps = BoxProps & {
  /**
   * Controls the padding of the table cells
   * @default 'default'
   */
  density?: 'default' | 'compact'
  /**
   * Controls whether the rows of the table are striped using CSS. For virtualized tables, this should be set to false, since the
   * row even/oddness is not guaranteed to be consistent as DOM nodes are loaded and unloaded.
   * @default false
   */
  noStripedRows?: boolean
  ['data-testid']?: string
}

export const StyledTableContainer: StyledComponent<StyledTableContainerProps> =
  styled(Box, {
    shouldForwardProp: prop => prop !== 'density' && prop !== 'noStripedRows',
  })<StyledTableContainerProps>(
    ({ theme, density = 'default', noStripedRows = false }) => ({
      overflow: 'auto',
      paddingLeft: '2px',
      ['thead > tr']: {
        backgroundColor: theme.palette.grey[200],
      },
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
      ['tr:nth-of-type(2n)']: noStripedRows
        ? undefined
        : {
            backgroundColor: theme.palette.grey[100],
          },
      ['tr']: {
        backgroundColor: theme.palette.background.default,
      },
      ['tr:nth-of-type(even)']: noStripedRows
        ? undefined
        : {
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
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
      '.resizer': {
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        width: '3px',
        padding: 0,
        background: 'rgba(0,0,0,0.25)',
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
        },
        '*:hover > .resizer': {
          opacity: 0.75,
        },
      },
      '.MuiButton-root': {
        whiteSpace: 'nowrap',
      },
    }),
  )

export default StyledTableContainer
