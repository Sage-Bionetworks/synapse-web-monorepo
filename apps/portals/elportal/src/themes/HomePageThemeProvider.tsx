import { ThemeOptions, ThemeProvider, darken, useTheme } from '@mui/material'
import { DeepPartial } from 'synapse-react-client'
import { deepmerge } from '@mui/utils'
import React from 'react'

export function HomePageThemeProvider({ children }: React.PropsWithChildren) {
  const theme = useTheme()
  const homePageOverrides: DeepPartial<ThemeOptions> = {
    typography: {
      headline1: {
        fontFamily: "'Merriweather', serif",
      },
      headline2: {
        fontFamily: "'Merriweather', serif",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            animationTimingFunction: 'ease-out',
            animationDuration: '64ms',
            '&:hover': {
              color: '#FFF !important',
              backgroundColor: darken(theme.palette.primary.main, 0.2),
            },
          },
        },
      },
    },
  }
  const mergedTheme = deepmerge(theme, homePageOverrides)

  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>
}
