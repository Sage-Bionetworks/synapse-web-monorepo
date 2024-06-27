import { Box, BoxProps, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export type StyledTableContainerProps = BoxProps & {
  density?: 'default' | 'compact'
}

export const StyledTableContainer: StyledComponent<StyledTableContainerProps> =
  styled(Box)<StyledTableContainerProps>(({ theme, density = 'default' }) => ({
    overflow: 'auto',
    paddingLeft: '2px',
    th: {
      height: '38px',
      backgroundColor: theme.palette.grey[200],
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
      paddingLeft: theme.spacing(density === 'compact' ? 0 : 1),
      paddingRight: theme.spacing(density === 'compact' ? 0 : 1),
    },
    td: {
      paddingTop: theme.spacing(density === 'compact' ? 0 : 1),
      paddingBottom: theme.spacing(density === 'compact' ? 0 : 1),
    },
  }))
