import React from 'react'
import { createTheme, StyledEngineProvider, ThemeOptions } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { PropsWithChildren, useMemo } from 'react'
import defaultMuiThemeOptions from '@/react-ui/theme/DefaultTheme'
import { mergeTheme } from './mergeTheme'

export type ThemeProviderProps = PropsWithChildren<{
  theme?: ThemeOptions
}>

export const ThemeProvider = ({
  theme = defaultMuiThemeOptions,
  children,
}: ThemeProviderProps): React.ReactNode => {
  const mergedTheme = useMemo(() => mergeTheme(theme), [theme])
  const muiTheme = createTheme(mergedTheme)
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </StyledEngineProvider>
  )
}
