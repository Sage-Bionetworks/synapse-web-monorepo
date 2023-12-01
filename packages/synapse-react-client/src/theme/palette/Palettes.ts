import { PaletteColorOptions, PaletteOptions } from '@mui/material'
import tinycolor from 'tinycolor2'

export const generatePalette = (
  mainColor: tinycolor.ColorInput,
  specificColors?: PaletteColorOptions,
): PaletteColorOptions => {
  return {
    100: tinycolor(mainColor).desaturate(25).lighten(50).toString(),
    200: tinycolor(mainColor).desaturate(13).lighten(20).toString(),
    300: tinycolor(mainColor).desaturate(3).lighten(10).toString(),
    400: tinycolor(mainColor).desaturate(1).lighten(5).toString(),
    500: tinycolor(mainColor).toString(),
    600: tinycolor(mainColor).saturate(5).darken(4).toString(),
    700: tinycolor(mainColor).saturate(11).darken(8).toString(),
    800: tinycolor(mainColor).saturate(18).darken(10).toString(),
    900: tinycolor(mainColor).saturate(24).darken(18).toString(),
    light:
      (specificColors && 400 in specificColors && specificColors[400]) ||
      tinycolor(mainColor).desaturate(1).lighten(5).toString(), // 400
    main: tinycolor(mainColor).toString(), // 500
    dark:
      (specificColors && 600 in specificColors && specificColors[600]) ||
      tinycolor(mainColor).saturate(5).darken(4).toString(), // 600
    contrastText: '#fff',
    ...specificColors,
  }
}

/**
 * Default colors here match the default colors in _variables.scss.  We now have a single point of control
 */
export const palette: PaletteOptions = {
  primary: generatePalette('#395979', {
    100: '#d7dee4',
    200: '#b0bdc9',
    300: '#889baf',
    400: '#617a94',
    500: '#395979',
    600: '#2e4761',
    700: '#223549',
    800: '#172430',
    900: '#0b1218',
  }),
  secondary: generatePalette('#469285', {
    100: '#dae9e7',
    200: '#b5d3ce',
    300: '#90beb6',
    400: '#6ba89d',
    500: '#469285',
    600: '#38756a',
    700: '#2a6960',
    800: '#1c3a35',
    900: '#0e1d1b',
  }),
  tertiary: generatePalette('#EDC766', {
    100: '#fbf4e0',
    200: '#f8e9c2',
    300: '#f4dda3',
    400: '#f1d285',
    500: '#edc766',
    600: '#be9f52',
    700: '#8e773d',
    800: '#5f5029',
    900: '#2f2814',
  }),
  grey: {
    1000: '#22252a',
    900: '#353a3f',
    800: '#4a5056',
    700: '#878e95',
    600: '#aeb5bc',
    500: '#d0d4d9',
    400: '#dfe2e6',
    300: '#eaecee',
    200: '#f1f3f5',
    100: '#fbfbfc',
  },
  // The neutral palette can be used to color components like buttons in grayscale
  neutral: generatePalette('#878e95'), // grey-700
  darkPrimary: generatePalette('#164B6E'),
  lightPrimary: { ...generatePalette('#f8f9fa'), contrastText: '#164B6E' },
  light: { ...generatePalette('#f8f9fa'), contrastText: '#22252a' }, // grey-1000
  success: { main: '#32a330' },
  info: { main: '#017fa5' },
  warning: { main: '#cc9f00' },
  error: { main: '#c13415' },
  text: {
    primary: '#353a3f', // gray-900
    secondary: '#4a5056', // gray-800
  },
  // Set a minimum contrast of at least 4.5:1 as defined in WCAG 2.1 Rule 1.4.3.
  // https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html.
  // But the contrast text color is currently not updated when the colors are: https://github.com/mui/material-ui/issues/35895
  contrastThreshold: 4.5,
}

export const mtbPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#4F527D'),
  secondary: generatePalette('#9499C7'),
}

export const arkPortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#e79776'),
  secondary: generatePalette('#e79776'),
}

export const adKnowledgePortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#4d5491'),
  secondary: generatePalette('#2f8e94'),
}

export const elPortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#39AC97'),
  secondary: generatePalette('#39AC97'),
}

export const nfPortalPalette: PaletteOptions = {
  ...palette,
  primary: { ...generatePalette('#125e81'), contrastText: '#fff' },
  secondary: { ...generatePalette('#404b63'), contrastText: '#fff' },
}

export const bsmnPortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#00255c'),
  secondary: generatePalette('#2699a7'),
}

export const psychEncodePortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#00565e'),
  secondary: generatePalette('#f7a700'),
}

export const stopAdPortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#4d5491'),
  secondary: generatePalette('#4d5491'),
}

export const digitalHealthPortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#3e7293'),
  secondary: generatePalette('#164767'),
}

export const crcResearcherPortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#0085ff'),
  secondary: generatePalette('#0085ff'),
}

export const cancerComplexityPortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#38568e'),
  secondary: generatePalette('#47337d'),
}

export const sageBionetworksPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#24AB9F'),
  secondary: generatePalette('#F5B33C'),
}

export const challengePortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#407BA0'),
  secondary: generatePalette('#407BA0'),
}

export default {
  palette,
  generatePalette,
  adKnowledgePortalPalette,
  mtbPalette,
  arkPortalPalette,
  challengePortalPalette,
  elPortalPalette,
  nfPortalPalette,
  bsmnPortalPalette,
  psychEncodePortalPalette,
  stopAdPortalPalette,
  digitalHealthPortalPalette,
  crcResearcherPortalPalette,
  cancerComplexityPortalPalette,
  sageBionetworksPalette,
}
