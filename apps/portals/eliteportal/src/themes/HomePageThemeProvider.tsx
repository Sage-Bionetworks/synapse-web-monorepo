import { ThemeOptions } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import { darken } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import { DeepPartial } from 'synapse-react-client'
import deepmerge from '@mui/utils/deepmerge'
import React from 'react'

export function HomePageThemeProvider({ children }: React.PropsWithChildren) {
  const theme = useTheme()
  // Note if adapting for other portals: ensure portal-specific fonts are loaded in the portal styles
  const homePageOverrides: DeepPartial<ThemeOptions> = {
    typography: {
      headline1: {
        fontFamily: "'Merriweather', serif",
        lineHeight: 'normal',
      },
      headline2: {
        fontFamily: "'Merriweather', serif",
        lineHeight: 'normal',
      },
      headline3: {
        fontFamily: "'Merriweather', serif",
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            '&:hover': {
              color: '#1C9F87',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          contained: {
            boxShadow: 'none',
            animationTimingFunction: 'ease-out',
            animationDuration: '64ms',
            // TODO: Bootstrap 3 link color applies to all a:hover elements. Remove this override when Bootstrap 3 is removed
            color: '#FFF !important',
            '&:hover': {
              backgroundColor: darken(theme.palette.primary.main, 0.2),
              boxShadow: 'none',
            },
            '&:focus': {
              textDecoration: 'none',
              boxShadow: 'none',
            },
            '&:active': {
              boxShadow: 'none',
            },
          },
        },
      },
      MuiStack: {
        defaultProps: {
          useFlexGap: true,
        },
      },
    },
  }
  const mergedTheme = deepmerge(theme, homePageOverrides)

  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>
}
