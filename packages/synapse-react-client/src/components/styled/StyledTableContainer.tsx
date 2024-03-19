import { Box, BoxProps, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export const StyledTableContainer: StyledComponent<BoxProps> = styled(Box)(
  ({ theme }) => ({
    overflow: 'auto',
    maxHeight: '250px',
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
  }),
)
