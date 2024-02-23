import React, { useEffect, useState } from 'react'
import ConfirmationDialog from '../ConfirmationDialog'
import SqlDefinedTableEditor from './SqlDefinedTableEditor'
import { useGetEntity, useUpdateEntity } from '../../synapse-queries'
import { convertToEntityType } from '../../utils/functions/EntityTypeUtils'
import { MaterializedView, VirtualTable } from '@sage-bionetworks/synapse-types'
import { Alert } from '@mui/material'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'

export type SqlDefinedTableEditorModalProps = {
  open: boolean
  entityId: string
  onUpdate: () => void
  onCancel: () => void
}
export default function SqlDefinedTableEditorModal(
  props: SqlDefinedTableEditorModalProps,
) {
  const { open, entityId, onCancel, onUpdate } = props
  const {
    data: entity,
    isLoading: isEntityLoading,
    error: entityError,
  } = useGetEntity<MaterializedView | VirtualTable>(entityId, undefined, {
    // Set the stale time to infinity because we don't want to refetch this in the middle of an edit
    staleTime: Infinity,
  })
  const [sql, setSql] = useState('')

  useEffect(() => {
    if (entity) {
      setSql(entity.definingSQL)
    }
  }, [entity])

  const type = entity ? convertToEntityType(entity.concreteType) : undefined
  const {
    mutate,
    isPending: isUpdatePending,
    error: updateError,
  } = useUpdateEntity<MaterializedView | VirtualTable>({ onSuccess: onUpdate })
  const isLoading = isEntityLoading || isUpdatePending
  const error = entityError || updateError
  return (
    <ConfirmationDialog
      open={open}
      title="Update SQL"
      content={
        <>
          <SqlDefinedTableEditor
            value={sql}
            entityType={type}
            onChange={e => setSql(e.target.value)}
            disabled={isLoading}
          ></SqlDefinedTableEditor>
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
          mutate({ ...entity, definingSQL: sql })
        }
      }}
      onCancel={onCancel}
      maxWidth="md"
    />
  )
}
