import type { ThemeOptions } from '@mui/material/styles'
import type { PartialDeep } from 'type-fest'
import deepmerge from '@mui/utils/deepmerge'
import defaultMuiThemeOptions from '@/react-ui/theme/DefaultTheme'

export function mergeTheme(
  themeOverrides: ThemeOptions | PartialDeep<ThemeOptions>,
): ThemeOptions {
  // TODO: Handle merging color palettes where an entire palette can be generated from a single base color.
  return deepmerge(defaultMuiThemeOptions, themeOverrides)
}
