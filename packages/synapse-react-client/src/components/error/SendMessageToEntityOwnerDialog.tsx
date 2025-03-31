import {
  useGetCurrentUserProfile,
  useSendMessageToEntityOwner,
} from '@/synapse-queries'
import { TextField, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import ConfirmationDialog from '../ConfirmationDialog'
import { displayToast } from '../ToastMessage'

export const CONTACT_ADMIN_DIALOG_TITLE = 'Contact the Administrator'

export type SendMessageToEntityOwnerDialogProps = {
  isOpen: boolean
  entityId: string
  onHide: () => void
}

export default function SendMessageToEntityOwnerDialog(
  props: SendMessageToEntityOwnerDialogProps,
) {
  const { onHide, entityId, isOpen } = props
  const [message, setMessage] = useState<string>('')
  const { data: currentUserProfile, isLoading: isLoadingCurrentUserProfile } =
    useGetCurrentUserProfile()
  const { mutate: sendMessage } = useSendMessageToEntityOwner({
    onSuccess: () => {
      onHide()
      setMessage('')
      displayToast('Message successfully sent')
    },
    onError: error => {
      displayToast(`Message could not be sent: ${error.reason}`, 'danger')
    },
  })
  const onSendMessage = useCallback(() => {
    if (isLoadingCurrentUserProfile) {
      console.error(
        'Attempted to send message before user profile was loaded. This should never happen.',
      )
      return
    }
    if (!currentUserProfile) {
      console.error(
        'Attempted to send message without a user profile. This should never happen.',
      )
      return
    }
    const { firstName, lastName, userName } = currentUserProfile
    sendMessage({
      entityId,
      subject: `${firstName} ${lastName} (@${userName}) Requested Access to ${entityId}`,
      body: `Requesting access to https://www.synapse.org/Synapse:${entityId}\n\n${message}`,
    })
  }, [message, currentUserProfile, sendMessage])
  return (
    <ConfirmationDialog
      maxWidth="md"
      open={isOpen}
      title={CONTACT_ADMIN_DIALOG_TITLE}
      content={
        <>
          <Typography variant={'body1'}>
            Please explain in your message why you believe you should be given
            VIEW access to the requested resource.
          </Typography>
          <Typography variant={'body1'}>
            Your message will be sent to the administrator. Your real email
            address, and the real email address of the administrator, will be
            hidden.
          </Typography>
          <Typography variant={'body1'}>
            Granting access to this resource is at the discretion of the
            resource administrator. The operators of this website (Sage
            Bionetworks) cannot grant access on their behalf.
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Text of your message"
            id="messageText"
            name="messageText"
            multiline
            rows={5}
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
        </>
      }
      onCancel={onHide}
      onConfirm={onSendMessage}
      confirmButtonProps={{
        children: 'Send',
        disabled: !message,
      }}
    />
  )
}
