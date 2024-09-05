import React, { useEffect, useState } from 'react'
import ConfirmationDialog from '../ConfirmationDialog'
import { useGetEntity, useUpdateEntity } from '../../synapse-queries'
import { SubmissionView } from '@sage-bionetworks/synapse-types'
import SubmissionViewScopeEditor from './SubmissionViewScopeEditor'
import { Alert } from '@mui/material'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'

export type SubmissionViewScopeEditorModalProps = {
  open: boolean
  entityId: string
  onUpdate: () => void
  onCancel: () => void
}
export default function SubmissionViewScopeEditorModal(
  props: SubmissionViewScopeEditorModalProps,
) {
  const { open, entityId, onUpdate, onCancel } = props
  const [scopeIds, setScopeIds] = useState<string[]>([])
  const {
    data: entity,
    isLoading: isEntityLoading,
    error: entityError,
  } = useGetEntity<SubmissionView>(entityId, undefined, {
    staleTime: Infinity,
  })

  const {
    mutate,
    isPending: isUpdatePending,
    error: updateError,
  } = useUpdateEntity<SubmissionView>({ onSuccess: onUpdate })

  useEffect(() => {
    if (entity) {
      setScopeIds(entity.scopeIds)
    }
  }, [entity])

  const isLoading = isEntityLoading || isUpdatePending
  const error = entityError || updateError

  return (
    <ConfirmationDialog
      open={open}
      title="Edit Scope"
      content={
        <>
          <SubmissionViewScopeEditor
            evaluationIds={scopeIds}
            onChange={setScopeIds}
          />
          {error && (
            <Alert
              sx={{
                my: 1,
              }}
              severity="error"
            >
              {error.reason}
            </Alert>
          )}
        </>
      }
      confirmButtonProps={{
        children: isUpdatePending ? 'Saving...' : 'Save',
        disabled: isLoading,
        startIcon: isUpdatePending ? <SynapseSpinner /> : undefined,
      }}
      onConfirm={() => {
        if (entity) {
          mutate({ ...entity, scopeIds: scopeIds })
        }
      }}
      onCancel={onCancel}
      maxWidth="md"
    />
  )
}
