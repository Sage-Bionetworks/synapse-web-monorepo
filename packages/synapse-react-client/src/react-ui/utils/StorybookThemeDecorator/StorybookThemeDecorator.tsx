import { createTheme, ThemeProvider } from '@mui/material/styles'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import defaultMuiThemeOptions from '@/react-ui/theme/DefaultTheme/index'
import {
  adKnowledgePortalPalette,
  arkPortalPalette,
  bsmnPortalPalette,
  cancerComplexityPortalPalette,
  crcResearcherPortalPalette,
  digitalHealthPortalPalette,
  elPortalPalette,
  geniePalette,
  mtbPalette,
  nfPortalPalette,
  sageBionetworksPalette,
  stopAdPortalPalette,
  standardsPortalPalette,
} from '@/react-ui/theme/palette/Palettes'
import { Decorator } from '@storybook/react-vite'

/**
 * Uses @storybook/addon-themes to inject the MUI theme provider, and provide a control to
 * allow switching between MUI themes in Storybook.
 */
const decorator: Decorator = withThemeFromJSXProvider({
  Provider: ThemeProvider,
  themes: {
    ['Synapse']: createTheme(defaultMuiThemeOptions),
    ['Sage Bionetworks']: createTheme(defaultMuiThemeOptions, {
      palette: sageBionetworksPalette,
    }),
    ['MTB']: createTheme(defaultMuiThemeOptions, { palette: mtbPalette }),
    ['ARK Portal']: createTheme(defaultMuiThemeOptions, {
      palette: arkPortalPalette,
    }),
    ['NF Portal']: createTheme(defaultMuiThemeOptions, {
      palette: nfPortalPalette,
    }),
    ['BSMN Portal']: createTheme(defaultMuiThemeOptions, {
      palette: bsmnPortalPalette,
    }),
    ['STOP AD Portal']: createTheme(defaultMuiThemeOptions, {
      palette: stopAdPortalPalette,
    }),
    ['dhealth Portal']: createTheme(defaultMuiThemeOptions, {
      palette: digitalHealthPortalPalette,
    }),
    ['CRC Researcher Portal']: createTheme(defaultMuiThemeOptions, {
      palette: crcResearcherPortalPalette,
    }),
    ['Cancer Complexity Portal']: createTheme(defaultMuiThemeOptions, {
      palette: cancerComplexityPortalPalette,
    }),

    ['AD Knowledge Portal']: createTheme(defaultMuiThemeOptions, {
      palette: adKnowledgePortalPalette,
    }),
    ['EL Portal']: createTheme(defaultMuiThemeOptions, {
      palette: elPortalPalette,
    }),
    ['GENIE Portal']: createTheme(defaultMuiThemeOptions, {
      palette: geniePalette,
    }),
    ['Standards Explorer']: createTheme(defaultMuiThemeOptions, {
      palette: standardsPortalPalette,
    }),
  },
  defaultTheme: 'Synapse',
})

export default decorator
