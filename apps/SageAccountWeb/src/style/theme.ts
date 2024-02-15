import { ThemeOptions } from '@mui/material'
import { PartialDeep } from 'type-fest'
export const fontDefinition = ['DM Sans', 'Roboto', 'Helvetica', 'Arial'].join(
  ',',
)

// Merge the default theme (defined in synapse-react-client) with the SageAccountWeb overrides defined here.
export const sageAccountWebThemeOverrides: PartialDeep<ThemeOptions> = {
  styledBackground:
    "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://s3.amazonaws.com/static.synapse.org/images/SynapseLoginPageBackground.svg')",

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          justifyContent: 'center',
          alignItems: 'center',
          padding: '14px 16px',
          height: '52px',
          fontWeight: '900',
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
            border: '1px solid #b5bcc3',
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
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          boxShadow: '0px 2px 6px rgba(53, 58, 63, 0.1)',
        },
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily: fontDefinition,
      fontSize: '14px',
    },
    button: {
      fontSize: '16px',
    },
    headline2: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '28px',
      color: '#353A3F',
      alignItems: 'center',
      marginBottom: '20px',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '150%',
      letterSpacing: '-0.019em',
    },
    smallText1: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '21px',
      color: '#878E95',
    },
  },
}
