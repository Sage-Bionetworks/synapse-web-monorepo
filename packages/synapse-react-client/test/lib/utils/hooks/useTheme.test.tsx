import { mergeTheme } from '../../../../src/lib/utils/theme/useTheme'
import { ThemeOptions } from '@mui/material'
import defaultMuiThemeOptions from '../../../../src/lib/utils/theme/DefaultTheme'

describe('Synapse Theme tests', () => {
  it('properly merges a custom theme with the default theme', () => {
    const customColor = '#000000'
    const customTheme: ThemeOptions = {
      palette: {
        success: {
          main: customColor,
        },
        tertiary: {
          main: '#fff',
        },
      },
    }
    const mergedTheme = mergeTheme(customTheme)

    expect(mergedTheme.palette!.success!.main).toEqual(customColor)
    expect(mergedTheme.palette.warning).toEqual(
      defaultMuiThemeOptions.palette.warning,
    )
    expect(mergedTheme.palette.info).toEqual(
      defaultMuiThemeOptions.palette.info,
    )
    expect(mergedTheme.palette.error).toEqual(
      defaultMuiThemeOptions.palette.error,
    )
  })

  // TODO: Test merging color palettes and validate that an entire palette is generated when providing one color
})
