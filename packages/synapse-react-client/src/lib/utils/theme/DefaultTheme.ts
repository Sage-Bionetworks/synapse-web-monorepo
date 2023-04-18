import { ThemeOptions } from '@mui/material/styles'
import { typographyOptions } from './typography/Typography'
import palette from './palette/Palettes'
import { alpha, Fade } from '@mui/material'
import linkTheme from './typography/Link'

const DIALOG_INNER_PADDING = '2px'

const defaultMuiThemeOptions: ThemeOptions = {
  typography: typographyOptions,
  palette: palette,
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: '0px',
          fontSize: '16px',
          borderLeft: `10px solid ${
            // The default severity is 'success'.
            theme.palette[ownerState.severity || 'success']['main']
          }`,
        }),
      },
    },
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
          borderRadius: '3px',
          textTransform: 'capitalize',
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
          sx: theme => ({
            borderRadius: '0px',
            padding: theme.spacing(5.5),
            alignSelf: 'flex-start',
          }),
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '24px',
          fontWeight: 700,
          paddingLeft: '0px',
          paddingRight: '0px',
          paddingBottom: theme.spacing(3),
        }),
      },
    },
    MuiDialogContent: {
      defaultProps: {
        dividers: true,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          color: theme.palette.text.secondary,
          paddingTop: ownerState.dividers ? theme.spacing(3) : 0,
          paddingBottom: ownerState.dividers ? theme.spacing(3) : 0,
          // Hack - set add a small padding and offset with a negative margin so box-shadow effects on full width elements (like input fields) are shown
          paddingLeft: DIALOG_INNER_PADDING,
          paddingRight: DIALOG_INNER_PADDING,
          marginLeft: `-${DIALOG_INNER_PADDING}`,
          marginRight: `-${DIALOG_INNER_PADDING}`,
          // Add a filter on the `dividers` borders so that the borders are transparent on the edges based on the DIALOG_INNER_PADDING length
          borderImage: ownerState.dividers
            ? `linear-gradient(to right, transparent 0px, transparent ${DIALOG_INNER_PADDING}, ${theme.palette.grey[400]} ${DIALOG_INNER_PADDING}, ${theme.palette.grey[400]} calc(100% - ${DIALOG_INNER_PADDING}), transparent calc(100% - ${DIALOG_INNER_PADDING})) 1`
            : undefined,
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: '0px',
          paddingRight: '0px',
          paddingTop: theme.spacing(3),
          '& .MuiButton-root': {
            height: '36px',
            padding: '0px 16px',
          },
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '3px',
          fontSize: '14px',
          position: 'relative',
          backgroundColor: theme.palette.grey[200],
          border: 'none',
          '&.Mui-focused': {
            boxShadow: `${alpha(
              theme.palette.primary.main,
              0.25,
            )} 0 0 0 0.1rem`,
            borderColor: theme.palette.primary.main,
          },
        }),
        input: ({ theme }) => ({
          padding: '14px 12px',
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
  styledBackground:
    "url('https://s3.amazonaws.com/static.synapse.org/images/SynapseLoginPageBackground.svg')",
}

export default defaultMuiThemeOptions
