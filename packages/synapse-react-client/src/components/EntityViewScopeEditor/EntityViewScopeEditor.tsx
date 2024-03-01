import React, { useMemo } from 'react'
import EntityHeaderTable from '../EntityHeaderTable'
import { EntityType, ReferenceList } from '@sage-bionetworks/synapse-types'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'
import { FinderScope } from '../EntityFinder/tree/EntityTree'
import { EntityTypeGroup } from '../../utils/functions/EntityTypeUtils'
import { Typography } from '@mui/material'

const DEFAULT_SELECTABLE_TYPES = EntityTypeGroup.CONTAINER
const PROJECT_VIEW_SELECTABLE_TYPES = [EntityType.PROJECT]

export type EntityViewScopeEditorProps = {
  scopeIds: string[]
  onChange: (scopeIds: string[]) => void
  isProjectView?: boolean
  disabled?: boolean
}

export default function EntityViewScopeEditor(
  props: EntityViewScopeEditorProps,
) {
  const { scopeIds, isProjectView = false, onChange, disabled } = props
  const references: ReferenceList = useMemo(
    () => scopeIds.map(scope => ({ targetId: scope })),
    [scopeIds],
  )

  return (
    <>
      <Typography variant={'body1'} mb={1.25} sx={{ fontWeight: 700 }}>
        Scope
      </Typography>
      {scopeIds.length === 0 && (
        <Typography variant={'smallText1'} color={'grey.600'}>
          Empty! Add items to populate your view
        </Typography>
      )}
      <EntityHeaderTable
        references={references}
        isEditable={true}
        disabled={disabled}
        onUpdate={newReferences => {
          onChange(newReferences.map(ref => ref.targetId))
        }}
        removeSelectedRowsButtonText={'Remove Selected Items from View Scope'}
        objectNameCopy={isProjectView ? 'project' : 'container'}
        hideTextFieldToPasteValue={true}
        entityFinderConfiguration={{
          selectMultiple: true,
          versionSelection: VersionSelectionType.DISALLOWED,
          initialScope: FinderScope.ALL_PROJECTS,
          initialContainer: 'root',
          selectableTypes: isProjectView
            ? PROJECT_VIEW_SELECTABLE_TYPES
            : DEFAULT_SELECTABLE_TYPES,
        }}
      />
    </>
  )
}
