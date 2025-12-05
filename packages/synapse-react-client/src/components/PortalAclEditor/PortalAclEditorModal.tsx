import { noop } from 'lodash-es'
import { useRef } from 'react'
import { displayToast } from '../ToastMessage'
import { PortalAclEditor, PortalAclEditorHandle } from './PortalAclEditor'
import { DialogBase } from '../DialogBase'
import { Button } from '@mui/material'

export type PortalAclEditorModalProps = {
  portalId: string
  open: boolean
  onUpdateSuccess?: () => void
  onClose: () => void
}

export default function PortalAclEditorModal(
  props: PortalAclEditorModalProps,
): React.ReactNode {
  const { portalId, open, onUpdateSuccess = noop, onClose } = props
  const ref = useRef<PortalAclEditorHandle>(null)
  return (
    <>
      <DialogBase
        open={open}
        title="Portal Sharing Settings"
        onCancel={onClose}
        maxWidth={'md'}
        content={
          <PortalAclEditor
            ref={ref}
            portalId={portalId}
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
