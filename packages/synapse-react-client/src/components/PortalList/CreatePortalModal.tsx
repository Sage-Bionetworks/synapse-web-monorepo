import { useCreatePortal } from '@/synapse-queries/portal/usePortal'
import { Alert } from '@mui/material'
import { Portal } from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { KeyboardEvent, useState } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import { displayToast } from '../ToastMessage'
import TextField from '../TextField/TextField'

export type CreatePortalModalProps = {
  open: boolean
  onClose: () => void
  onSuccess?: (portal: Portal) => void
}

export function CreatePortalModal({
  open,
  onClose,
  onSuccess,
}: CreatePortalModalProps): React.ReactNode {
  const [portalName, setPortalName] = useState<string>('')
  const [portalUrl, setPortalUrl] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>()

  const { mutate: createPortal, isPending } = useCreatePortal({
    onSuccess: portal => {
      displayToast('Portal created successfully', 'success')
      handleClose()
      onSuccess?.(portal)
    },
    onError: (error: SynapseClientError) => {
      setErrorMessage(error.reason || error.message)
    },
  })

  const handleClose = () => {
    setPortalName('')
    setPortalUrl('')
    setErrorMessage(undefined)
    onClose()
  }

  const handleCreate = () => {
    if (!portalName.trim()) {
      setErrorMessage('Portal name is required')
      return
    }
    if (!portalUrl.trim()) {
      setErrorMessage('Portal URL is required')
      return
    }

    const newPortal: Portal = {
      name: portalName.trim(),
      url: portalUrl.trim(),
    }

    createPortal(newPortal)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && portalName.trim() && portalUrl.trim()) {
      handleCreate()
    }
  }

  const dialogContent = (
    <>
      <TextField
        id="portalNameInput"
        label="Portal Name"
        value={portalName}
        fullWidth
        required
        onChange={event => {
          setPortalName(event.target.value)
          setErrorMessage(undefined)
        }}
        inputProps={{
          onKeyDown: handleKeyDown,
        }}
        sx={{ mb: 2 }}
      />
      <TextField
        id="portalUrlInput"
        label="Portal URL"
        value={portalUrl}
        fullWidth
        required
        placeholder="https://example.synapse.org"
        onChange={event => {
          setPortalUrl(event.target.value)
          setErrorMessage(undefined)
        }}
        inputProps={{
          onKeyDown: handleKeyDown,
        }}
      />
      {errorMessage && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errorMessage}
        </Alert>
      )}
    </>
  )

  return (
    <ConfirmationDialog
      open={open}
      title="Create a New Portal"
      content={dialogContent}
      confirmButtonProps={{
        children: 'Create',
        disabled: isPending || !portalName.trim() || !portalUrl.trim(),
      }}
      onConfirm={handleCreate}
      onCancel={handleClose}
      maxWidth="sm"
    />
  )
}

export default CreatePortalModal
