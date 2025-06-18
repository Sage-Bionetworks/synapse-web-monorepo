import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { cloneElement, PropsWithChildren, ReactElement, useState } from 'react'
import { NavLink } from 'react-router'

export function ReturnToAppButton({ children }: PropsWithChildren) {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const onClose = () => setOpen(false)
  const redirectFn = () => {
    window.location.assign('/authenticated/myaccount')
  }
  const element = !children ? (
    <Button variant="text" onClick={() => setOpen(true)} fullWidth>
      Cancel Validation
    </Button>
  ) : (
    cloneElement(children as ReactElement, {
      onClick: () => setOpen(true),
    })
  )

  return (
    <>
      {element}
      <Dialog open={open} fullWidth maxWidth="sm">
        <DialogTitle>
          <Stack
            direction="row"
            sx={{
              alignItems: 'center',
              gap: '5px',
            }}
          >
            Cancel verification?
            <Box sx={{ flexGrow: 1 }} />
            <IconButton aria-label={'Close'} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent dividers>
          <Typography
            variant="body1"
            sx={{
              marginBottom: '16px',
            }}
          >
            If you cancel verification, you'll still be able to use portions of
            the application which are available to registered users, but your
            access will be restricted.
          </Typography>
          <Typography variant="body1">
            To resume your verification in the future, access the{' '}
            <NavLink target="_blank" to={'/authenticated/myaccount#trust'}>
              {' '}
              Trust and Credentials
            </NavLink>{' '}
            section of your account settings.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            sx={{
              borderColor: theme.palette.primary.main,
              '&:hover': { borderColor: theme.palette.primary.main },
            }}
            onClick={() => setOpen(false)}
          >
            Never mind
          </Button>
          <Button variant="contained" onClick={redirectFn}>
            Yes, cancel verification
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
