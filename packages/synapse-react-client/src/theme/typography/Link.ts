import { Components, Theme } from '@mui/material'

const linkTheme: Components<Theme>['MuiLink'] = {
  defaultProps: {
    underline: 'always',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      fontWeight: 700,
      color:
        theme.palette.mode === 'light' ? undefined : theme.palette.primary[200],
      '&:hover': {
        // overrides base style in bootstrap 3
        color:
          theme.palette.mode === 'light'
            ? theme.palette.primary.main
            : theme.palette.primary[100],
      },
    }),
    underlineAlways: ({ theme }) => ({
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
      textDecorationThickness: '1px',
      textDecorationColor: theme.palette.grey[600],
      '&:hover': {
        textDecorationColor:
          theme.palette.mode === 'light'
            ? theme.palette.primary.main
            : theme.palette.primary[100],
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
