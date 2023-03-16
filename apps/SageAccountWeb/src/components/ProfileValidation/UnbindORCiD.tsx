import React from 'react'
import { SynapseClient, Typography } from 'synapse-react-client'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { PROVIDERS } from 'synapse-react-client/dist/containers/auth/AuthenticationMethodSelection'
import { Dialog, DialogActions, DialogContent, Button } from '@mui/material'
import theme from 'style/theme'

export const unbindORCiD = async (
  event: React.SyntheticEvent,
  orcid: string | undefined,
  accessToken: string | undefined,
  setShow: Function,
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
  setShow: Function
  orcid: string | undefined
  redirectAfter: string
}

export const UnbindORCiDDialog = (props: UnbindORCiDDialogProps) => {
  const { accessToken } = useSynapseContext()
  return (
    <Dialog
      open={props.show}
      maxWidth="sm"
      sx={{ borderRadius: 0 }}
      PaperProps={{ sx: { borderRadius: 0 } }}
    >
      <DialogContent
        sx={{ margin: theme.spacing(0, 5.5), padding: theme.spacing(3, 0) }}
      >
        <Typography variant="body2" paragraph>
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
