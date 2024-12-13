import { ThemeOptions, ThemeProvider, darken, useTheme } from '@mui/material'
import { deepmerge } from '@mui/utils'
import React from 'react'
import DeepPartial from 'synapse-react-client/utils/types/DeepPartial'

export function HomePageThemeProvider({ children }: React.PropsWithChildren) {
  const theme = useTheme()
  // Note if adapting for other portals: ensure portal-specific fonts are loaded in the portal styles
  const homePageOverrides: DeepPartial<ThemeOptions> = {
    typography: {
      headline1: {
        fontFamily: "'Merriweather', serif",
      },
      headline2: {
        fontFamily: "'Merriweather', serif",
      },
      headline3: {
        fontFamily: "'Merriweather', serif",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            boxShadow: 'none !important',
            animationTimingFunction: 'ease-out',
            animationDuration: '64ms',
            '&:hover': {
              backgroundColor: darken(theme.palette.primary.main, 0.2),
              // TODO: Bootstrap 3 link color applies to all a:hover elements. Remove this override when Bootstrap 3 is removed
              color: '#FFF !important',
            },
          },
        },
      },
    },
  }
  const mergedTheme = deepmerge(theme, homePageOverrides)

  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>
}
