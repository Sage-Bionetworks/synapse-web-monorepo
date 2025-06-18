import { monospaceFontFamily } from '@/theme/typography/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconSvg from '../IconSvg/IconSvg'

type TwoFactorSecretDialogProps = {
  secret: string
  open: boolean
  onClose: () => void
}

export default function TwoFactorSecretDialog(
  props: TwoFactorSecretDialogProps,
) {
  const { secret, open, onClose } = props
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            gap: '5px',
          }}
        >
          Use this code to set up 2FA <Box sx={{ flexGrow: 1 }} />
          <IconButton aria-label={'Close'} onClick={onClose}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Typography variant={'body1'}>
          Your authenticator app will ask for a code to activate two-factor
          authentication. Use the code below:
        </Typography>
        <Box
          sx={theme => ({
            my: 2,
            p: 2,
            width: '100%',
            textAlign: 'center',
            background: theme.palette.grey[200],
            fontFamily: monospaceFontFamily,
            letterSpacing: '2px',
            fontSize: '16px',
          })}
        >
          {secret}
        </Box>
        <Typography variant={'body1'}>
          After setup, you don’t need to save this code.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant={'contained'} onClick={onClose}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  )
}
