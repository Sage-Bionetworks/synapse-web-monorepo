import { ThemeOptions } from '@mui/material/styles'
import { typographyOptions } from './typography/Typography'
import palette from './palette/Palettes'
import { Fade } from '@mui/material'
import linkTheme from './typography/Link'

const defaultMuiTheme: ThemeOptions = {
  typography: typographyOptions,
  palette: palette,
  components: {
    MuiLink: linkTheme,
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 900,
          padding: '6px 12px',
          borderRadius: '0px',
          textTransform: 'none',
          '&:hover': {
            transition: '0.2s',
          },
        },
        text: ({ theme }) => ({
          '&:hover': {
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            textDecorationColor: theme.palette.primary.main,
            textDecorationThickness: '2px',
          },
        }),
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiDialog: {
      defaultProps: {
        PaperProps: {
          sx: {
            borderRadius: '0px',
            padding: '35px',
            alignSelf: 'flex-start',
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottom: `1px solid ${theme.palette.grey[300]}`,
          padding: '0px 0px 20px',
          marginBottom: '20px',
        }),
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '0px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '20px 0px 0px',
          marginTop: '20px',
          borderTop: `1px solid ${theme.palette.grey[300]}`,
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          height: '38px',
          paddingLeft: '12px',
          paddingRight: '12px',
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        TransitionComponent: Fade,
      },
      styleOverrides: {
        arrow: ({ theme }) => ({
          color: theme.palette.common.black,
        }),
        tooltip: ({ theme }) => ({
          fontSize: '14px',
          borderRadius: '2px',
          backgroundColor: theme.palette.common.black,
        }),
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // For now use p for headlines, since the bootstrap-4-backport class will override style
          headline1: 'p',
          headline2: 'p',
          headline3: 'p',
          body1: 'p',
          body1Italic: 'p',
          body2: 'p',
          breadcrumb1: 'span',
          breadcrumb2: 'span',
          smallText1: 'p',
          smallText2: 'p',
          smallLink: 'span',
          label: 'span',
          buttonLink: 'span',
          hintText: 'p',
          sectionTitle: 'p',
          subsectionHeader: 'p',
          dataFieldKey: 'p',
        },
      },
    },
  },
}

export default defaultMuiTheme
