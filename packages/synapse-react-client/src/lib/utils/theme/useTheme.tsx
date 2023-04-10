import { createTheme, StyledEngineProvider, ThemeOptions } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'
import React, { useMemo } from 'react'
import defaultMuiThemeOptions from './DefaultTheme'
import type { PartialDeep } from 'type-fest'

export function mergeTheme(
  themeOverrides: PartialDeep<ThemeOptions>,
): ThemeOptions {
  // TODO: Handle merging color palettes where an entire palette can be generated from a single base color.
  return deepmerge(defaultMuiThemeOptions, themeOverrides)
}

export type ThemeProviderProps = React.PropsWithChildren<{
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
