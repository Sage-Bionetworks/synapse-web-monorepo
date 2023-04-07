import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import { useAppContext } from 'AppContext'
import React from 'react'
import { Typography } from 'synapse-react-client'
import { NavLink } from 'react-router-dom'

export const ReturnToAppButton: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const { redirectURL } = useAppContext()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const onClose = () => setOpen(false)
  const redirectFn = () => {
    redirectURL
      ? window.location.assign(redirectURL)
      : window.location.assign('/authenticated/myaccount')
  }
  const element = !children ? (
    <Button variant="text" onClick={() => setOpen(true)} fullWidth>
      Cancel Validation and Return to Website
    </Button>
  ) : (
    React.cloneElement(children as React.ReactElement, {
      onClick: () => setOpen(true),
    })
  )

  return (
    <>
      {element}
      <Dialog open={open} fullWidth maxWidth="sm">
        <DialogTitle>
          <Stack direction="row" alignItems={'center'} gap={'5px'}>
            Cancel verification?
            <Box sx={{ flexGrow: 1 }} />
            <IconButton aria-label={'Close'} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" paragraph>
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
