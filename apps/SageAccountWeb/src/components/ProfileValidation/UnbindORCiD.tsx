import React from 'react'
import { SynapseClient } from 'synapse-react-client/dist/utils'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { PROVIDERS } from 'synapse-react-client/dist/containers/auth/AuthenticationMethodSelection'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'

export const unbindORCiD = async (
  event: React.SyntheticEvent,
  orcid: string | undefined,
  accessToken: string | undefined,
  setShow: (show: boolean) => void,
  redirectAfter: string,
) => {
  event.preventDefault()
  if (orcid) {
    try {
      await SynapseClient.unbindOAuthProviderToAccount(
        PROVIDERS.ORCID,
        accessToken,
        orcid,
      )
      setShow(false)
      window.location.assign(redirectAfter)
    } catch (err: any) {
      console.error(err)
    }
  }
}
export type UnbindORCiDDialogProps = {
  show: boolean
  setShow: (show: boolean) => void
  orcid: string | undefined
  redirectAfter: string
}

export const UnbindORCiDDialog = (props: UnbindORCiDDialogProps) => {
  const { accessToken } = useSynapseContext()
  return (
    <Dialog open={props.show} maxWidth="sm">
      <DialogTitle>Unlink ORCID?</DialogTitle>
      <DialogContent>
        <Typography variant="body1" paragraph>
          Are you sure you want to unlink this ORCID from your profile?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => props.setShow(false)}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={event =>
            unbindORCiD(
              event,
              props.orcid,
              accessToken,
              props.setShow,
              props.redirectAfter,
            )
          }
        >
          Yes, unlink ORCID
        </Button>
      </DialogActions>
    </Dialog>
  )
}
