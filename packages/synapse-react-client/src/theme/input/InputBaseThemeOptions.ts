import { alpha, Components, Theme } from '@mui/material'

const muiInputBaseThemeOptions: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const hasOutline = ownerState.error || ownerState.focused
      let outline = 'none'
      if (hasOutline) {
        if (ownerState.error) {
          outline = `1px solid ${theme.palette.error.main}`
        } else if (ownerState.color) {
          outline = `1px solid ${theme.palette[ownerState.color].main}`
        }
      }
      const formHelperTextColor =
        ownerState.color === 'warning'
          ? theme.palette[ownerState.color].main
          : undefined
      return {
        borderRadius: '3px',
        fontSize: '14px',
        position: 'relative',
        backgroundColor:
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.primary[600],
        outline: outline,
        '&+.MuiFormHelperText-root': {
          color: formHelperTextColor,
        },
        '&.Mui-disabled': {
          backgroundColor:
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[800],
        },
        '&.Mui-focused': {
          boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
        },
        '& fieldset': {
          border: 'none',
        },
      }
    },
    input: ({ theme }) => ({
      padding: '14px 12px',
    }),
    multiline: {
      padding: '0px',
    },
  },
}

export default muiInputBaseThemeOptions
