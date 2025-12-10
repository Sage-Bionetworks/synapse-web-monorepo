import React from 'react'
import { SyntheticEvent } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import * as SynapseClient from 'synapse-react-client/synapse-client/SynapseClient'

export const unbindORCiD = async (
  event: SyntheticEvent,
  orcid: string | undefined,
  accessToken: string | undefined,
  setShow: (show: boolean) => void,
  redirectAfter: string,
) => {
  event.preventDefault()
  if (orcid) {
    try {
      await SynapseClient.unbindOAuthProviderToAccount(
        SynapseConstants.OAUTH2_PROVIDERS.ORCID,
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

export const UnbindORCiDDialog = (
  props: UnbindORCiDDialogProps,
): React.ReactNode => {
  const { accessToken } = useSynapseContext()
  return (
    <Dialog open={props.show} maxWidth="sm">
      <DialogTitle>Unlink ORCID?</DialogTitle>
      <DialogContent>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '16px',
          }}
        >
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
