import {
  COLOR_PALETTE_EVEN,
  COLOR_PALETTE_ODD,
} from '../utils/functions/colorPalette'

export function rgba2rgb(background: number[], color: number[]) {
  const alpha = color[3]
  return [
    Math.floor((1 - alpha) * background[0] + alpha * color[0] + 0.5),
    Math.floor((1 - alpha) * background[1] + alpha * color[1] + 0.5),
    Math.floor((1 - alpha) * background[2] + alpha * color[2] + 0.5),
  ]
}

export function getColorPalette(
  start: number,
  end: number,
): { colorPalette: string[]; textColors: string[] } {
  let colorPaletteSelection = []
  const textColors = []
  let offset = -1

  if (start % 2 === 0) {
    colorPaletteSelection = COLOR_PALETTE_EVEN
    offset = start * 5
  } else {
    colorPaletteSelection = COLOR_PALETTE_ODD
    offset = (start - 1) * 5
  }

  const colorPalette: string[] = []

  for (let i = 0; i < end; i += 1) {
    const textColor: string = i % 10 < 2 || i % 10 > 7 ? 'white' : 'black'
    const color: string = `${
      colorPaletteSelection[(offset + i) % colorPaletteSelection.length]
    }`
    colorPalette.push(color)
    textColors.push(textColor)
  }
  return { colorPalette, textColors }
}

export default getColorPalette
