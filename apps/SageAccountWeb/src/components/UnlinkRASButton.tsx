import { Button, SxProps, Typography } from '@mui/material'
import {
  OAuthProvider,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import React, { useState } from 'react'
import { ConfirmationDialog } from 'synapse-react-client/components/ConfirmationDialog/ConfirmationDialog'
import { displayToast } from 'synapse-react-client/components/ToastMessage/ToastMessage'
import { useUnbindOAuthProviderIdentity } from 'synapse-react-client/synapse-queries/auth/useUnbindOAuthProviderIdentity'

export type UnlinkRASButtonProps = {
  onUnlink?: () => void
  sx?: SxProps
}

export const UnlinkRASButton = (
  props: UnlinkRASButtonProps,
): React.ReactNode => {
  const { onUnlink, sx } = props
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const { mutate, isPending } = useUnbindOAuthProviderIdentity({
    onSuccess: () => {
      setIsDialogOpen(false)
      displayToast('Your NIH account has been unlinked.', 'success')
      onUnlink?.()
    },
    onError: (err: SynapseClientError) => {
      displayToast(err.reason, 'danger')
    },
  })

  return (
    <>
      <Button
        variant="outlined"
        type="button"
        sx={sx}
        onClick={() => setIsDialogOpen(true)}
      >
        Unlink your NIH account
      </Button>
      <ConfirmationDialog
        open={isDialogOpen}
        title="Unlink NIH account?"
        content={
          <Typography variant="body1">
            Are you sure you want to unlink your NIH account? You will no longer
            be able to sign in to Synapse using your NIH credentials.
          </Typography>
        }
        onCancel={() => setIsDialogOpen(false)}
        onConfirm={() => mutate(OAuthProvider.NIH_RESEARCHER_AUTH_SERVICE)}
        confirmButtonProps={{
          children: 'Yes, unlink NIH account',
          loading: isPending,
        }}
      />
    </>
  )
}
