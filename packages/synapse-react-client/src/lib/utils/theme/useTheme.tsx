import { createTheme, StyledEngineProvider, ThemeOptions } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { merge } from 'lodash-es'
import React, { useMemo } from 'react'
import defaultMuiTheme from './DefaultTheme'
import type { PartialDeep } from 'type-fest'

export function mergeTheme(
  themeOverrides: PartialDeep<ThemeOptions>,
): ThemeOptions {
  // TODO: Handle merging color palettes where an entire palette can be generated from a single base color.
  return merge({}, defaultMuiTheme, themeOverrides)
}

export type ThemeProviderProps = React.PropsWithChildren<{
  theme?: ThemeOptions
}>

export const ThemeProvider = ({
  theme = defaultMuiTheme,
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
