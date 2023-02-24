import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import IconSvg from '../IconSvg'
import React from 'react'

type TwoFactorSecretDialogProps = {
  secret: string
} & Pick<DialogProps, 'open' | 'onHide'>

export default function TwoFactorSecretDialog(
  props: TwoFactorSecretDialogProps,
) {
  const { secret, open, onHide } = props
  return (
    <Dialog open={open} onHide={onHide}>
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          Use this code to set up 2FA <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={onHide}>
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
            fontFamily: 'Menlo, monospace',
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
        <Button variant={'contained'} onClick={onHide}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  )
}
