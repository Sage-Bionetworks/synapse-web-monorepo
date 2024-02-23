import { TypographyOptions } from '@mui/material/styles/createTypography'
import { Palette } from '@mui/material/styles/createPalette'

export const defaultFontFamily = ['DM Sans', 'sans-serif'].join(',')
export const monospaceFontFamily = [
  'Menlo',
  'Courier New',
  'Courier',
  'monospace',
].join(',')

const defaultStyles = {
  fontStyle: 'normal',
  letterSpacing: '0px',
}

export const typographyOptions: (
  palette: Palette,
) => TypographyOptions = palette => ({
  fontFamily: defaultFontFamily,
  headline1: {
    ...defaultStyles,
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '28px',
  },
  headline2: {
    ...defaultStyles,
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  headline3: {
    ...defaultStyles,
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '20px',
  },
  body1: {
    ...defaultStyles,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  body1Italic: {
    ...defaultStyles,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    fontStyle: 'italic',
  },
  body2: {
    ...defaultStyles,
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  breadcrumb1: {
    ...defaultStyles,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
  },
  breadcrumb2: {
    ...defaultStyles,
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '16px',
  },
  smallText1: {
    ...defaultStyles,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
  },
  smallText2: {
    ...defaultStyles,
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '16px',
  },
  smallLink: {
    ...defaultStyles,
    fontSize: '14px',
    fontWeight: 900,
    lineHeight: '16px',
  },
  label: {
    ...defaultStyles,
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '16px',
  },
  buttonLink: {
    ...defaultStyles,
    fontSize: '16px',
    fontWeight: 900,
    lineHeight: '20px',
  },
  hintText: {
    ...defaultStyles,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  sectionTitle: {
    ...defaultStyles,
    fontSize: '21px',
    fontWeight: 700,
    lineHeight: '25px',
    textTransform: 'uppercase',
  },
  subsectionHeader: {
    ...defaultStyles,
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '21px',
  },
  dataFieldKey: {
    ...defaultStyles,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
    color: palette.grey[700],
    textTransform: 'uppercase',
  },
  monospace: {
    ...defaultStyles,
    fontFamily: monospaceFontFamily,
    fontSize: '13px',
  },
})
