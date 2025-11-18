import FrontHand from '@/assets/icons/FrontHand'
import { Avatar, Box, Button, Paper, Typography, useTheme } from '@mui/material'

type Reset2FAWarningProps = {
  onConfirm: () => void
  onCancel: () => void
}

export default function Reset2FAWarning(props: Reset2FAWarningProps) {
  const { onConfirm, onCancel } = props
  const theme = useTheme()
  return (
    <Paper sx={{ m: 'auto', maxWidth: '500px', p: 8 }}>
      <Avatar
        sx={{
          bgcolor: theme.palette.primary.main,
          height: '100px',
          width: '100px',
        }}
      >
        <FrontHand sx={{ height: '54px', width: '54px' }} />
      </Avatar>
      <Box sx={{ my: 5 }}>
        <Typography variant={'headline1'} sx={{ mb: 2 }}>
          Really reset 2FA?
        </Typography>
        <Typography variant={'body1'} sx={{ my: 1 }}>
          You'll set up new security codes on the next screen using your
          authenticator app. Your current codes will keep working until you
          finish setting up the new ones.
        </Typography>
        <Typography variant={'body1'} sx={{ my: 1 }}>
          Once setup is complete, only your new codes will work for logging in.
        </Typography>
      </Box>
      <Button
        fullWidth
        variant="contained"
        onClick={onConfirm}
        sx={{ height: '50px', my: 1 }}
      >
        Yes, reset 2FA
      </Button>
      <Button
        fullWidth
        variant="text"
        onClick={onCancel}
        sx={{ height: '50px', my: 1 }}
      >
        Nevermind
      </Button>
    </Paper>
  )
}
