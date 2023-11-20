import React, { useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  DialogTitle,
  DialogActions,
} from '@mui/material'

export type RedirectDialogProps = {
  redirectUrl: string
  redirectInstructions: string
}

const RedirectDialog = (props: RedirectDialogProps) => {
  const [countdownSeconds, setCountdownSeconds] = React.useState<
    number | undefined
  >()
  const { redirectUrl, redirectInstructions } = props
  const [isCancelled, setIsCancelled] = React.useState<boolean>(false)

  useEffect(() => {
    if (countdownSeconds) {
      // You would expect that we should redirect when countdownSeconds reaches 0,
      // but it actually takes about a second to perform the redirect.
      // So let's start the process when we get to 1.
      if (countdownSeconds <= 1) {
        window.location.assign(redirectUrl)
      }
      setTimeout(() => {
        if (countdownSeconds) {
          setCountdownSeconds(countdownSeconds => countdownSeconds! - 1)
        }
      }, 1000)
    }
  }, [redirectUrl, countdownSeconds])

  useEffect(() => {
    if (countdownSeconds == undefined) {
      setCountdownSeconds(10)
    }
  }, [countdownSeconds])

  const onClose = () => {
    // reset countdown seconds
    setCountdownSeconds(undefined)
    setIsCancelled(true)
  }

  return (
    <Dialog
      open={!isCancelled}
      onClose={onClose}
      className="RedirectDialog"
      // PaperProps={{ sx: { padding: 0 } }}
    >
      <DialogTitle>Redirecting</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ paddingBottom: '20px' }}>
          <strong>{redirectInstructions}</strong>
        </Typography>
        <Typography variant="body1" sx={{ paddingBottom: '20px' }}>
          You will be redirected in <strong>{countdownSeconds} seconds</strong>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => {
            window.location.assign(redirectUrl)
          }}
        >
          Go to the site now
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default RedirectDialog
