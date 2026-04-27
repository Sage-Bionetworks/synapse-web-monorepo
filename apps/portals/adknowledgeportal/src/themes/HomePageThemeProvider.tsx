import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'

const homePageOverrides: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: '8px',
          background: 'var(--adkp-button-gradient)',
          border: '1px solid',
          borderColor: 'var(--adkp-button-border-color)',
          fontSize: '14px',
          fontWeight: 540,
          lineHeight: '14px',
          letterSpacing: '-0.28px',
          padding: '13px 16px',
          // TODO: Bootstrap 3 link color applies to all a:hover elements. Remove this override when Bootstrap 3 is removed
          color: '#FFF !important',
        },
      },
    },
  },
}

export function HomePageThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider
      theme={outerTheme =>
        createTheme(outerTheme as ThemeOptions, homePageOverrides)
      }
    >
      {children}
    </ThemeProvider>
  )
}
