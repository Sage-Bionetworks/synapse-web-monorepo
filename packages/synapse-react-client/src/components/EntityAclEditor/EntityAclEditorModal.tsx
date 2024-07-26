import React, { useRef, useState } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog'
import EntityAclEditor, { EntityAclEditorHandle } from './EntityAclEditor'
import { displayToast } from '../ToastMessage'
import { useGetEntityBundle } from '../../synapse-queries'
import { entityTypeToFriendlyName } from '../../utils/functions/EntityTypeUtils'
import { noop } from 'lodash-es'

export type EntityAclEditorModalProps = {
  entityId: string
  open: boolean
  onUpdateSuccess?: () => void
  onClose: () => void
}

export default function EntityAclEditorModal(props: EntityAclEditorModalProps) {
  const { entityId, open, onUpdateSuccess = noop, onClose } = props
  const [isDirty, setIsDirty] = useState(false)
  const entityAclEditorRef = useRef<EntityAclEditorHandle>(null)

  // We just need the entity type, but the editor will also fetch the bundle, so we can use that and rely on/preload the cache
  const { data: entityBundle } = useGetEntityBundle(entityId)
  const entityTypeDisplay = entityBundle?.entityType
    ? entityTypeToFriendlyName(entityBundle?.entityType)
    : ''
  const canEdit = entityBundle?.permissions?.canChangePermissions

  return (
    <ConfirmationDialog
      title={`${entityTypeDisplay} Sharing Settings`.trim()}
      onCancel={onClose}
      open={open}
      maxWidth={'md'}
      content={
        <EntityAclEditor
          ref={entityAclEditorRef}
          entityId={entityId}
          onCanSaveChange={isDirty => setIsDirty(isDirty)}
          onUpdateSuccess={() => {
            displayToast(
              'Permissions were successfully saved to Synapse',
              'info',
            )
            onUpdateSuccess()
            onClose()
          }}
        />
      }
      onConfirm={() => {
        entityAclEditorRef.current!.save()
      }}
      confirmButtonProps={{
        children: canEdit ? 'Save' : 'OK',
        disabled: !isDirty,
      }}
    />
  )
}
