import { Components, Theme } from '@mui/material'

const linkTheme: Components<Theme>['MuiLink'] = {
  defaultProps: {
    underline: 'always',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      fontWeight: 700,
      '&:hover': {
        // overrides base style in bootstrap 3
        color: theme.palette.primary.main,
      },
    }),
    underlineAlways: ({ theme }) => ({
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
      textDecorationThickness: '1px',
      textDecorationColor: theme.palette.grey[600],
      '&:hover': {
        textDecorationColor: theme.palette.primary.main,
        textDecorationThickness: '2px',
      },
    }),
    underlineHover: {
      '&:hover': {
        textUnderlineOffset: '4px',
        textDecorationThickness: '2px',
      },
    },
  },
}

export default linkTheme
