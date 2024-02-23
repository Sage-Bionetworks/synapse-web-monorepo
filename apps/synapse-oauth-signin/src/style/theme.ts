import 'synapse-react-client'
import { ThemeOptions } from '@mui/material'
import { Palettes } from 'synapse-react-client'

export const fontDefinition = ['DM Sans', 'Roboto', 'Helvetica', 'Arial'].join(
  ',',
)

const themeOptions: ThemeOptions = {
  palette: Palettes.palette,
  components: {
    MuiCssBaseline: {},
    MuiButton: {
      styleOverrides: {
        contained: {
          justifyContent: 'center',
          alignItems: 'center',
          padding: '14px 16px',
          height: '52px',
          fontWeight: '900',
          fontSize: '16px',
          borderRadius: '3px',
        },
        outlined: {
          height: '48px',
          background: '#FFFFFF',
          border: '1px solid #EAECEE',
          boxShadow:
            '0px 4px 4px rgba(0, 0, 0, 0.03), 0px 2px 2px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.03)',
          borderRadius: '3px',
          fontWeight: 700,
          '&:hover': {
            backgroundColor: '#FFFFFF',
            border: '2px solid #EAECEE',
          },
        },
        containedSecondary: {
          height: '48px',
          background: '#FFFFFF',
          border: '1px solid #EAECEE',
          boxShadow:
            '0px 4px 4px rgba(0, 0, 0, 0.03), 0px 2px 2px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.03)',
          borderRadius: '3px',
        },
        text: {
          '&:hover': {
            backgroundColor: 'transparent',
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          width: '100%',
          '&.MuiInputLabel-root': {
            fontFamily: fontDefinition,
            fontWeight: 700,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {},
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '24px 24px 0px 24px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          color: '#4A5056',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '24px',
          '& .MuiButton-root': {
            height: '36px',
            padding: '0 16px',
            borderRadius: '0px',
            fontSize: '15px',
            '&:first-child': {
              marginRight: '14px',
            },
            '&.MuiButton-outlinedPrimary': {
              borderWidth: '1px',
              fontWeight: 700,
              '&:hover': {
                '&.MuiButton-outlinedPrimary:hover': { borderWidth: '1px' },
              },
            },
          },
        },
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily: fontDefinition,
      fontSize: '14px',
    },
    headline1: {},
    headline2: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '28px',
      color: '#353A3F',
      alignItems: 'center',
      marginBottom: '20px',
    },
    headline3: {
      fontWeight: '700',
      fontSize: '18px',
      lineHeight: '20px',
    },
    body1: {
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '150%',
      letterSpacing: '-0.019em',
      color: '#4A5056',
    },
    body1Italic: {},
    body2: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
    breadcrumb1: {},
    breadcrumb2: {},
    smallText1: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '21px',
      color: '#878E95',
    },
    smallText2: {},
    smallLink: {},
    label: {},
    buttonLink: {},
    hintText: {},
    sectionTitle: {},
    subsectionHeader: {},
    dataFieldKey: {},
    monospace: {},
  },
}

export default themeOptions
