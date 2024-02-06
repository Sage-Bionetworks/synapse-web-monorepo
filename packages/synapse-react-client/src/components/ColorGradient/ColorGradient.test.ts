import { getColorPalette, getContrastColorPalette } from './ColorGradient'
import {
  COLOR_PALETTE_EVEN,
  COLOR_PALETTE_ODD,
} from '../../utils/functions/colorPalette'

describe('the color gradient calculated is correct', () => {
  it('calculates the odd case', () => {
    const { colorPalette } = getColorPalette(0, 110)
    expect(colorPalette).toEqual(COLOR_PALETTE_EVEN)
  })

  it('calculates the even case', () => {
    const { colorPalette } = getColorPalette(1, 110)
    expect(colorPalette).toEqual(COLOR_PALETTE_ODD)
  })

  it('getContrastColorPalette returns divergent colors, even case', () => {
    const colorPalette = getContrastColorPalette('even', 0, 5)
    expect(colorPalette).toEqual([
      COLOR_PALETTE_EVEN[0],
      COLOR_PALETTE_EVEN[5],
      COLOR_PALETTE_EVEN[10],
      COLOR_PALETTE_EVEN[15],
      COLOR_PALETTE_EVEN[20],
    ])
  })

  it('getContrastColorPalette returns divergent colors, even case, with offset', () => {
    const colorPalette = getContrastColorPalette('even', 1, 5)
    expect(colorPalette).toEqual([
      COLOR_PALETTE_EVEN[1],
      COLOR_PALETTE_EVEN[6],
      COLOR_PALETTE_EVEN[11],
      COLOR_PALETTE_EVEN[16],
      COLOR_PALETTE_EVEN[21],
    ])
  })

  it('increments the offset when generating more colors than hues', () => {
    // This test assumes that COLOR_PALETTE_EVEN has 22 hues with 5 variants each. If that changes, this test will need to be updated.
    expect(COLOR_PALETTE_EVEN).toHaveLength(22 * 5)

    // There are 22 distinct hues, we want to validate what happens when we generate 23 colors
    const colorPalette = getContrastColorPalette('even', 0, 23)
    expect(colorPalette).toHaveLength(23)
    // Just check the last two colors:
    expect(colorPalette.slice(-2)).toEqual([
      // The second-to-last color will be the 22nd hue
      COLOR_PALETTE_EVEN[5 * 21],
      // The last color will be the first hue, with an offset of 1
      COLOR_PALETTE_EVEN[1],
    ])
  })

  it('getContrastColorPalette returns divergent colors, odd case', () => {
    const colorPalette = getContrastColorPalette('odd', 0, 5)
    expect(colorPalette).toEqual([
      COLOR_PALETTE_ODD[0],
      COLOR_PALETTE_ODD[5],
      COLOR_PALETTE_ODD[10],
      COLOR_PALETTE_ODD[15],
      COLOR_PALETTE_ODD[20],
    ])
  })
  it('getContrastColorPalette returns divergent colors, odd case, with offset', () => {
    const colorPalette = getContrastColorPalette('odd', 1, 5)
    expect(colorPalette).toEqual([
      COLOR_PALETTE_ODD[1],
      COLOR_PALETTE_ODD[6],
      COLOR_PALETTE_ODD[11],
      COLOR_PALETTE_ODD[16],
      COLOR_PALETTE_ODD[21],
    ])
  })
})
