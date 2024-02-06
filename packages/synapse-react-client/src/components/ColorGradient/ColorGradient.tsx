import {
  COLOR_PALETTE_EVEN,
  COLOR_PALETTE_ODD,
} from '../../utils/functions/colorPalette'

export function rgba2rgb(background: number[], color: number[]) {
  const alpha = color[3]
  return [
    Math.floor((1 - alpha) * background[0] + alpha * color[0] + 0.5),
    Math.floor((1 - alpha) * background[1] + alpha * color[1] + 0.5),
    Math.floor((1 - alpha) * background[2] + alpha * color[2] + 0.5),
  ]
}

const VARIANTS_PER_HUE = 5
const NUMBER_OF_HUES = Math.floor(COLOR_PALETTE_EVEN.length / VARIANTS_PER_HUE)

export function getColorPalette(
  start: number,
  end: number,
): { colorPalette: string[]; textColors: string[] } {
  let colorPaletteSelection: string[] = []
  const textColors: string[] = []
  let offset = -1

  if (start % 2 === 0) {
    colorPaletteSelection = COLOR_PALETTE_EVEN
    offset = start * VARIANTS_PER_HUE
  } else {
    colorPaletteSelection = COLOR_PALETTE_ODD
    offset = (start - 1) * VARIANTS_PER_HUE
  }

  const colorPalette: string[] = []

  for (let i = 0; i < end; i++) {
    // Each hue goes from dark to light, then light to dark, and repeats
    // So we can use the index * 2 to determine if text shown should be white or black
    const textColor: string =
      i % (VARIANTS_PER_HUE * 2) < 2 || i % (VARIANTS_PER_HUE * 2) > 7
        ? 'white'
        : 'black'
    const color: string =
      colorPaletteSelection[(offset + i) % colorPaletteSelection.length]

    colorPalette.push(color)
    textColors.push(textColor)
  }
  return { colorPalette, textColors }
}

export function getContrastColorPalette(
  palette: 'even' | 'odd',
  offset: number,
  numberOfPalettes: number,
): string[] {
  let colorPaletteSelection: string[] = []

  if (palette === 'even') {
    colorPaletteSelection = COLOR_PALETTE_EVEN
  } else {
    colorPaletteSelection = COLOR_PALETTE_ODD
  }
  const colorPalette: string[] = []

  for (let i = 0; i < numberOfPalettes; i++) {
    // Each iteration should be a different hue
    const hueIndex = i * VARIANTS_PER_HUE
    // Select a lighter/darker variant using the offset
    // if we happen to need more colors than we have hues, increment the offset (hence adding i / NUMBER_OF_HUES)
    const hueOffset =
      (offset + Math.floor(i / NUMBER_OF_HUES)) % VARIANTS_PER_HUE
    const color: string =
      colorPaletteSelection[
        (hueIndex + hueOffset) % colorPaletteSelection.length
      ]

    colorPalette.push(color)
  }
  return colorPalette
}
