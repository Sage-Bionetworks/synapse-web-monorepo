import { getColorPalette } from '../../src/components/ColorGradient'
import {
  COLOR_PALETTE_EVEN,
  COLOR_PALETTE_ODD,
} from '../../src/utils/functions/colorPalette'

describe('the color gradient calculated is correct', () => {
  it('calculates the odd case ', () => {
    const { colorPalette } = getColorPalette(0, 110)
    expect(colorPalette).toEqual(COLOR_PALETTE_EVEN)
  })

  it('calculates the even case ', () => {
    const { colorPalette } = getColorPalette(1, 110)
    expect(colorPalette).toEqual(COLOR_PALETTE_ODD)
  })
})
