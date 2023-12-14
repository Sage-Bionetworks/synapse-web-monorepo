import { ThemeOptions } from '@mui/material'
import defaultMuiThemeOptions from './DefaultTheme'
import { PartialDeep } from 'type-fest'
import { mergeTheme } from './mergeTheme'

describe('Synapse Theme tests', () => {
  it('properly merges a custom theme with the default theme', () => {
    const customColor = '#000000'
    const customTheme = {
      palette: {
        success: {
          main: customColor,
        },
        tertiary: {
          main: '#fff',
        },
      },
    } satisfies PartialDeep<ThemeOptions>
    const mergedTheme = mergeTheme(customTheme)

    // @ts-expect-error -- we added a custom color to the palette
    expect(mergedTheme.palette!.success!.main).toEqual(customColor)
    expect(mergedTheme.palette!.warning).toEqual(
      defaultMuiThemeOptions.palette!.warning,
    )
    expect(mergedTheme.palette!.info).toEqual(
      defaultMuiThemeOptions.palette!.info,
    )
    expect(mergedTheme.palette!.error).toEqual(
      defaultMuiThemeOptions.palette!.error,
    )
  })

  // TODO: Test merging color palettes and validate that an entire palette is generated when providing one color
})
