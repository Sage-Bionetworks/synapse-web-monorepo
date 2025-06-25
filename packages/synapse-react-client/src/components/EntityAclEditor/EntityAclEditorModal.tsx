import ConfirmCloseWithoutSavingDialog from '@/components/Dialog/ConfirmCloseWithoutSavingDialog'
import { useGetEntityBundle } from '@/synapse-queries'
import { entityTypeToFriendlyName } from '@/utils/functions/EntityTypeUtils'
import { noop } from 'lodash-es'
import { useRef, useState } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog'
import { displayToast } from '../ToastMessage'
import EntityAclEditor, { EntityAclEditorHandle } from './EntityAclEditor'

const ENTITY_SHARING_SETTINGS_HELP_MARKDOWN = `Sharing settings determine who can access your content, and what kind of access they have. Choose people/teams and define their level of access below.\n\n_Only Administrators can add, delete, or change access levels for other people._`
const ENTITY_SHARING_SETTINGS_HELP_URL =
  'https://help.synapse.org/docs/Sharing-Settings,-Permissions,-and-Conditions-for-Use.2024276030.html'

export type EntityAclEditorModalProps = {
  entityId: string
  open: boolean
  onUpdateSuccess?: () => void
  onClose: () => void
  isAfterUpload?: boolean
}

export default function EntityAclEditorModal(props: EntityAclEditorModalProps) {
  const {
    entityId,
    open,
    onUpdateSuccess = noop,
    onClose,
    isAfterUpload = false,
  } = props
  const [showConfirmCloseDialog, setShowConfirmCloseDialog] = useState(false)
  const [isDirty, setIsDirty] = useState(false)
  const entityAclEditorRef = useRef<EntityAclEditorHandle>(null)

  // We just need the entity type, but the editor will also fetch the bundle, so we can use that and rely on/preload the cache
  const { data: entityBundle } = useGetEntityBundle(entityId)
  const entityTypeDisplay = entityBundle?.entityType
    ? entityTypeToFriendlyName(entityBundle?.entityType)
    : ''
  const canEdit = entityBundle?.permissions?.canChangePermissions

  function handleClose() {
    if (isDirty) {
      setShowConfirmCloseDialog(true)
    } else {
      onClose()
    }
  }

  return (
    <>
      <ConfirmCloseWithoutSavingDialog
        open={showConfirmCloseDialog}
        onCancel={() => {
          setShowConfirmCloseDialog(false)
        }}
        onConfirm={() => {
          setShowConfirmCloseDialog(false)
          onClose()
        }}
      />
      <ConfirmationDialog
        title={`${entityTypeDisplay} Sharing Settings`.trim()}
        onCancel={handleClose}
        open={open}
        maxWidth={'md'}
        titleHelpPopoverProps={{
          markdownText: ENTITY_SHARING_SETTINGS_HELP_MARKDOWN,
          helpUrl: ENTITY_SHARING_SETTINGS_HELP_URL,
        }}
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
            isAfterUpload={isAfterUpload}
          />
        }
        onConfirm={e => {
          // SWC-7055 - The default action may trigger `beforeunload` and erroneously warn the user about leaving the page.
          e.preventDefault()
          entityAclEditorRef.current!.save()
        }}
        confirmButtonProps={{
          children: canEdit ? 'Save' : 'OK',
          disabled: !isDirty,
        }}
      />
    </>
  )
}
