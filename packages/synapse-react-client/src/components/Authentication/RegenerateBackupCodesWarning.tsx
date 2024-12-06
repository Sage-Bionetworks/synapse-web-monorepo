import { Avatar, Box, Button, Paper, Typography, useTheme } from '@mui/material'
import FrontHand from '../../assets/icons/FrontHand'

type RegenerateBackupCodesWarningProps = {
  onConfirm: () => void
  onCancel: () => void
}

export function RegenerateBackupCodesWarning(
  props: RegenerateBackupCodesWarningProps,
) {
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
          Really regenerate backup codes?
        </Typography>
        <Typography variant={'body1'} sx={{ my: 1 }}>
          This will invalidate your old backup codes
        </Typography>
        <Typography variant={'body1'} sx={{ my: 1 }}>
          If you click “yes”, below, we will generate 10 new backup codes,
          replacing your old ones, which will no longer function.
        </Typography>
      </Box>
      <Button
        fullWidth
        variant="contained"
        onClick={onConfirm}
        sx={{ height: '50px', my: 1 }}
      >
        Yes, regenerate backup codes
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
