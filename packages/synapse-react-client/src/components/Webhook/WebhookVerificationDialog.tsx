import { useVerifyWebhook } from '@/synapse-queries/webhook/useWebhook'
import { Alert, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import { displayToast } from '../ToastMessage'

type WebhookVerificationDialogProps = {
  open: boolean
  onClose: () => void
  webhookId: string
}

export function WebhookVerificationDialog(
  props: WebhookVerificationDialogProps,
) {
  const { open, onClose } = props
  const [verificationCode, setVerificationCode] = useState('')

  const { mutate, isPending, error } = useVerifyWebhook({
    onSuccess: response => {
      if (response.isValid) {
        displayToast('Webhook verified', 'success')
      } else {
        displayToast(
          `Webhook was not verified: ${response.invalidReason}`,
          'danger',
        )
      }
      onClose()
    },
  })

  return (
    <ConfirmationDialog
      title={'Verify Webhook'}
      onCancel={() => {
        if (!isPending) {
          onClose()
        }
      }}
      open={open}
      content={
        <>
          <Typography variant="body1" gutterBottom>
            Enter the code sent to your webhook to verify it. Once the webhook
            has been verified, Synapse will start sending the events you chose
            to your webhook endpoint.
          </Typography>
          <TextField
            label={'Verification code'}
            value={verificationCode}
            onChange={e => setVerificationCode(e.target.value)}
            sx={{ mt: 1 }}
          />
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error.reason}
            </Alert>
          )}
        </>
      }
      onConfirm={() => {
        mutate({
          webhookId: props.webhookId,
          verifyWebhookRequest: { verificationCode },
        })
      }}
      confirmButtonProps={{
        children: 'Verify',
        disabled: isPending,
      }}
      cancelButtonProps={{
        disabled: isPending,
      }}
    />
  )
}
