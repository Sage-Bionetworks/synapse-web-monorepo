/* eslint-disable @typescript-eslint/no-empty-interface */

import '@mui/material/styles'

// If creating a new Typography variant, add it to this list.
type CustomTypographyVariants =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'body1'
  | 'body1Italic'
  | 'body2'
  | 'breadcrumb1'
  | 'breadcrumb2'
  | 'smallText1'
  | 'smallText2'
  | 'smallLink'
  | 'label'
  | 'buttonLink'
  | 'hintText'
  | 'sectionTitle'
  | 'subsectionHeader'
  | 'dataFieldKey'
  | 'monospace'

// We create this type because we have to use interfaces in the module augmentations, which don't allow mapped types.
// This is also why we override ESLint to allow empty interfaces in this file.
type RecordWithCustomVariantKeys<Value> = {
  [key in CustomTypographyVariants]: Value
}

// To add custom Typography variants to the MUI theme, we have to extend the MUI theme type.
// See https://mui.com/material-ui/customization/theming/#theme-configuration-variables CTRL+F TypeScript
declare module '@mui/material/styles' {
  interface Theme {
    styledBackground: string
  }

  interface ThemeOptions {
    styledBackground?: string
  }

  interface TypographyVariants
    extends RecordWithCustomVariantKeys<React.CSSProperties> {}

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions
    extends RecordWithCustomVariantKeys<React.CSSProperties | undefined> {}

  interface Palette {
    tertiary: Palette['primary']
    /* Neutral is same as grey, but provides a full palette so it can be used for components like buttons.
       This is necessary because the builtin grey cannot be overridden for this purpose. */
    neutral: Palette['primary']
    darkPrimary: Palette['primary']
    lightPrimary: Palette['primary']
    light: Palette['primary']
  }

  interface PaletteOptions {
    tertiary: PaletteOptions['primary']
    /* Neutral is same as grey, but provides a full palette so it can be used for components like buttons.
       This is necessary because the builtin grey cannot be overridden for this purpose. */
    neutral: PaletteOptions['primary']
    darkPrimary: PaletteOptions['primary']
    lightPrimary: PaletteOptions['primary']
    light: PaletteOptions['primary']
  }
}

declare module '@mui/material' {
  interface Color {
    // MUI doesn't go up to 1000 but our palette does
    [1000]: string
  }

  interface ButtonPropsColorOverrides {
    neutral: true
    darkPrimary: true
    lightPrimary: true
    light: true
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides
    extends RecordWithCustomVariantKeys<true> {}
}
