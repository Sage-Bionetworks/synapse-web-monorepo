import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import { useAppContext } from 'AppContext'
import React from 'react'
import { Typography } from 'synapse-react-client'
import theme from 'style/theme'
import { NavLink } from 'react-router-dom'

export const ReturnToAppButton: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const { redirectURL } = useAppContext()
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
      <Dialog
        open={open}
        fullWidth
        maxWidth="sm"
        sx={{ borderRadius: 0 }}
        PaperProps={{ sx: { borderRadius: 0 } }}
      >
        <DialogTitle
          sx={{
            margin: theme.spacing(0, 5.5),
            padding: theme.spacing(4, 0, 2, 0),
            fontSize: '25px',
            fontWeight: 700,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: '40px',
              top: '30px',
              color: '#878E95',
            }}
          >
            <CloseIcon />
          </IconButton>
          Cancel verification?
        </DialogTitle>

        <DialogContent
          dividers
          sx={{ margin: theme.spacing(0, 5.5), padding: theme.spacing(3, 0) }}
        >
          <Typography variant="body2" paragraph>
            If you cancel verification, you'll still be able to use portions of
            the application which are available to registered users, but your
            access will be restricted.
          </Typography>
          <Typography variant="body2">
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
      </Dialog>{' '}
    </>
  )
}
