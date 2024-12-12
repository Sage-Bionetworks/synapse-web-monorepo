import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Button, ButtonProps, useTheme } from '@mui/material'

export function ContinueButton(props: ButtonProps) {
  const theme = useTheme()
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{ marginTop: theme.spacing(5) }}
      {...props}
      endIcon={<ArrowRightAltIcon />}
    >
      {props.children || 'Continue'}
    </Button>
  )
}
