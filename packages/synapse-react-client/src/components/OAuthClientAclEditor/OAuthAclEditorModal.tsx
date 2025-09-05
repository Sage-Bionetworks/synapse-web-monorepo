import { noop } from 'lodash-es'
import { useRef } from 'react'
import { displayToast } from '../ToastMessage'
import {
  OAuthClientAclEditor,
  OAuthClientAclEditorHandle,
} from './OAuthClientAclEditor1'
import { DialogBase } from '../DialogBase'
import { Button } from '@mui/material'

export type OAuthAclEditorModalProps = {
  clientId: string
  open: boolean
  onUpdateSuccess?: () => void
  onClose: () => void
}

export default function OAuthAclEditorModal(props: OAuthAclEditorModalProps) {
  const { clientId, open, onUpdateSuccess = noop, onClose } = props
  const ref = useRef<OAuthClientAclEditorHandle>(null)
  return (
    <>
      <DialogBase
        open={open}
        title="OAuth Client Sharing Settings"
        onCancel={onClose}
        maxWidth={'md'}
        content={
          <OAuthClientAclEditor
            ref={ref}
            clientId={clientId}
            onSaveComplete={() => {
              displayToast(
                'Permissions were successfully saved to Synapse',
                'info',
              )
              onUpdateSuccess()
              onClose()
            }}
          />
        }
        actions={
          <>
            <Button
              variant="outlined"
              onClick={() => {
                onClose()
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                ref.current?.save()
              }}
            >
              Save
            </Button>
          </>
        }
      />
    </>
  )
}
