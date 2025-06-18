import { createTheme } from '@mui/material/styles'
import { StyledEngineProvider } from '@mui/material/styles'
import { ThemeOptions } from '@mui/material/styles'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { PropsWithChildren, useMemo } from 'react'
import defaultMuiThemeOptions from './DefaultTheme'
import { mergeTheme } from './mergeTheme'

export type ThemeProviderProps = PropsWithChildren<{
  theme?: ThemeOptions
}>

export const ThemeProvider = ({
  theme = defaultMuiThemeOptions,
  children,
}: ThemeProviderProps) => {
  const mergedTheme = useMemo(() => mergeTheme(theme), [theme])
  const muiTheme = createTheme(mergedTheme)
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </StyledEngineProvider>
  )
}
