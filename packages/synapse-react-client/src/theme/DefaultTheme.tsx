import {
  alpha,
  Fade,
  inputBaseClasses,
  lighten,
  ThemeOptions,
} from '@mui/material'
import { typographyOptions } from './typography/Typography'
import { palette } from './palette/Palettes'
import linkTheme from './typography/Link'
import React from 'react'
import {
  CheckCircleTwoTone,
  ErrorTwoTone,
  HighlightOffTwoTone,
  InfoTwoTone,
} from '@mui/icons-material'

const DIALOG_INNER_PADDING = '2px'

// The default TransitionComponent, Grow, causes click event interception issues, especially in SWC's gwtbootstrap modals.
const TRANSITION_COMPONENT_OVERRIDE = Fade

export const defaultMuiThemeOptions: ThemeOptions = {
  typography: typographyOptions,
  palette: palette,
  components: {
    MuiAlert: {
      defaultProps: {
        square: true,
        iconMapping: {
          error: <HighlightOffTwoTone />,
          info: <InfoTwoTone />,
          success: <CheckCircleTwoTone />,
          warning: <ErrorTwoTone />,
        },
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          alignItems: 'center',
          fontSize: '14px',
          borderLeft: `10px solid ${
            // The default severity is 'success'.
            theme.palette[ownerState.severity || 'success']['main']
          }`,
          color: theme.palette.text.primary,
        }),
        icon: ({ theme }) => ({
          marginRight: theme.spacing(3),
        }),
        action: ({ ownerState, theme }) => ({
          paddingRight: theme.spacing(2),
          ...(ownerState.onClose &&
            !ownerState.action && { color: theme.palette.grey[700] }),
        }),
        standardSuccess: ({ theme }) => ({
          backgroundColor: lighten(theme.palette.success.light, 0.8),
        }),
        standardError: ({ theme }) => ({
          backgroundColor: lighten(theme.palette.error.light, 0.8),
        }),
        standardWarning: ({ theme }) => ({
          backgroundColor: lighten(theme.palette.warning.light, 0.8),
        }),
        standardInfo: ({ theme }) => ({
          backgroundColor: lighten(theme.palette.info.light, 0.8),
        }),
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          fontSize: '14px',
          fontWeight: 700,
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
        contained: ({ theme, ownerState }) => ({
          '&:hover, &:visited': {
            // Overrides a base style in bootstrap 3 and in SWC
            color:
              ownerState.color === 'inherit'
                ? ownerState.color
                : theme.palette[ownerState.color || 'primary'].contrastText,
          },
        }),
        outlined: ({ theme, ownerState }) => ({
          '&:hover, &:visited': {
            // Overrides a base style in Bootstrap 3 and in SWC
            color:
              ownerState.color === 'inherit'
                ? ownerState.color
                : theme.palette[ownerState.color || 'primary'].dark,
          },
        }),
        text: ({ theme, ownerState }) => ({
          '&:hover': {
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            textDecorationColor:
              ownerState.color === 'inherit'
                ? ownerState.color
                : theme.palette[ownerState.color || 'primary']['main'],
            textDecorationThickness: '2px',
          },
          '&:hover, &:visited': {
            // Overrides a base style in Bootstrap 3 and in SWC
            color:
              ownerState.color === 'inherit'
                ? ownerState.color
                : theme.palette[ownerState.color || 'primary']['main'],
          },
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow:
            '0px 16px 16px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 1px 1px rgba(0, 0, 0, 0.05)',
        },
      },
      defaultProps: {
        square: true,
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
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginLeft: '0',
          '&.Mui-error': {
            color: theme.palette.error.main,
          },
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          borderRadius: '3px',
          fontSize: '14px',
          position: 'relative',
          backgroundColor: theme.palette.grey[200],
          outline: ownerState.error
            ? `1px solid ${theme.palette.error.main}`
            : 'none',
          '&.Mui-disabled': {
            backgroundColor: theme.palette.grey[100],
          },
          '&.Mui-focused': {
            boxShadow: `${alpha(
              theme.palette.primary.main,
              0.25,
            )} 0 0 0 0.1rem`,
          },
          '& fieldset': {
            border: 'none',
          },
        }),
        input: ({ theme }) => ({
          padding: '14px 12px',
        }),
        multiline: {
          padding: '0px',
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: 700,
          mb: '4px',
          fontSize: '14px',
          transform: 'none',
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          [`& .${inputBaseClasses.root}`]: {
            marginTop: ownerState.label && theme.spacing(3),
          },
        }),
      },
    },
    MuiMenu: {
      defaultProps: {
        TransitionComponent: TRANSITION_COMPONENT_OVERRIDE,
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
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 900,
          textTransform: 'capitalize',
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        TransitionComponent: TRANSITION_COMPONENT_OVERRIDE,
      },
      styleOverrides: {
        arrow: ({ theme }) => ({
          color: theme.palette.common.black,
        }),
        tooltip: ({ theme }) => ({
          fontSize: '14px',
          borderRadius: '2px',
          backgroundColor: theme.palette.common.black,
          '& .MuiLink-root': {
            color: '#fff',
          },
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
