import React, { useCallback } from 'react'
import { EntityType } from '@sage-bionetworks/synapse-types'
import { EntityDetailsListSharedProps } from '../EntityFinder/details/EntityDetailsList'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'
import { EntityFinderHeader } from '../EntityFinder/EntityFinderHeader'
import { useEntitySelection } from '../EntityFinder/useEntitySelection'
import { ChallengeEntityChildrenDetails } from './ChallengeEntityChildrenDetails'

type ChallengeDataDownloadProps = {
  parentContainerId: string
}

export function ChallengeDataDownload({
  parentContainerId,
}: ChallengeDataDownloadProps) {
  const selectMultiple = true
  const [selectedEntities, toggleSelection] = useEntitySelection(selectMultiple)

  const isIdSelected = useCallback(
    (entity: EntityFinderHeader) => {
      return selectedEntities.has(entity.id)
    },
    [selectedEntities],
  )

  const sharedProps: EntityDetailsListSharedProps = {
    versionSelection: VersionSelectionType.DISALLOWED,
    selectColumnType: 'checkbox',
    enableSelectAll: true,
    visibleTypes: [EntityType.FILE],
    selected: selectedEntities,
    selectableTypes: [EntityType.FILE],
    isIdSelected,
    isSelectable: () => true,
    toggleSelection,
  }
  return (
    <ChallengeEntityChildrenDetails
      parentContainerId={parentContainerId}
      {...sharedProps}
    />
  )
}
