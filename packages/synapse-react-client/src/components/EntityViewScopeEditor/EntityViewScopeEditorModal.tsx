import React, { useEffect, useState } from 'react'
import ConfirmationDialog from '../ConfirmationDialog'
import EntityViewScopeEditor from './EntityViewScopeEditor'
import EntityViewMaskEditor from './EntityViewMaskEditor'
import { useGetEntity, useUpdateEntity } from '../../synapse-queries'
import {
  ENTITY_VIEW_TYPE_MASK_PROJECT,
  EntityView,
} from '@sage-bionetworks/synapse-types'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'

export type EntityViewScopeEditorModalProps = {
  entityId: string
  onUpdate: () => void
  onCancel: () => void
  open: boolean
}

export default function EntityViewScopeEditorModal(
  props: EntityViewScopeEditorModalProps,
) {
  const { entityId, onCancel, onUpdate, open } = props

  const [entityViewScopeIds, setEntityViewScopeIds] = useState<string[]>([])
  const [viewTypeMask, setViewTypeMask] = useState<number>(0)

  const isProjectView = viewTypeMask === ENTITY_VIEW_TYPE_MASK_PROJECT

  const { data: entity, isLoading: isEntityLoading } = useGetEntity<EntityView>(
    entityId,
    undefined,
    { staleTime: Infinity },
  )

  useEffect(() => {
    if (entity) {
      setEntityViewScopeIds(entity.scopeIds)
      setViewTypeMask(entity.viewTypeMask)
    }
  }, [entity])

  const { mutate, isLoading: isUpdateLoading } = useUpdateEntity<EntityView>({
    onSuccess: onUpdate,
  })

  const isLoading = isEntityLoading || isUpdateLoading

  return (
    <ConfirmationDialog
      open={open}
      title="Edit Scope"
      content={
        <>
          <EntityViewScopeEditor
            scopeIds={entityViewScopeIds}
            onChange={setEntityViewScopeIds}
            isProjectView={isProjectView}
            disabled={isLoading}
          ></EntityViewScopeEditor>
          {!isProjectView && (
            <EntityViewMaskEditor
              value={viewTypeMask}
              onChange={setViewTypeMask}
              disabled={isLoading}
            ></EntityViewMaskEditor>
          )}
        </>
      }
      confirmButtonProps={{
        children: isUpdateLoading ? 'Saving...' : 'Save',
        disabled: isLoading,
        startIcon: isUpdateLoading ? <SynapseSpinner /> : undefined,
      }}
      onConfirm={() => {
        if (entity) {
          mutate({
            ...entity,
            viewTypeMask: viewTypeMask,
            scopeIds: entityViewScopeIds,
          })
        }
      }}
      onCancel={onCancel}
      maxWidth="md"
    />
  )
}
