import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Button from '@mui/material/Button'
import { ButtonProps } from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'

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
