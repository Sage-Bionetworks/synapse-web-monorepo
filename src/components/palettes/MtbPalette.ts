import { PaletteOptions } from '@mui/material'
import palette from 'synapse-react-client/dist/utils/theme/palette/Palette'

export const mtbPalette: PaletteOptions = {
  ...palette,
  primary: {
    ...palette.primary,
    light: '#777aa6',
    main: '#4F527D',
    dark: '#2b2d4a',
  },
  secondary: {
    main: '#C22E49',
  },
}

export default mtbPalette