import React, { Fragment, useMemo, useState } from 'react'
import { ChallengeDataTableRowData } from './types'
import {
  ENTITY_CONCRETE_TYPE,
  EntityType,
} from '@sage-bionetworks/synapse-types'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'
import { useGetEntityBundle } from '../../synapse-queries'
import { ChallengeDataTable } from './ChallengeDataTable'

/*
 * These hardcoded values should probably be props for the component.
 * These `entityId`s should come from a call that gets all the files in the challenge.
 */
const entityId = `syn50932087`
const hasNextPage = false
const isFetchingNextPage = false
const versionNumber = 1

interface ChallengeDataDownloadProps {
  challengeId: string
}

/**
 * Fix this to:
 * * Accept a ChallengeID
 * * Query Synapse for the files associated
 * * The `useGetEntityBundle` hook should not be used
 * * Pass the returned file data to the ChallengeDataTable component
 */
export function ChallengeDataDownload({
  challengeId,
}: ChallengeDataDownloadProps) {
  const { data, isLoading } = useGetEntityBundle(entityId, versionNumber)

  const tableData: ChallengeDataTableRowData[] = useMemo(() => {
    return [
      {
        createdBy: data?.entity.createdBy || ``,
        createdOn: data?.entity.createdOn || ``,
        currentSelectedVersion: versionNumber,
        entityId,
        entityType: data?.entityType || EntityType.FILE,
        id: data?.entity.id || ``,
        isDisabled: false,
        isSelected: true,
        isLatestVersion: true,
        isVersionableEntity: true,
        modifiedBy: data?.entity.modifiedBy || ``,
        modifiedOn: data?.entity.modifiedOn || ``,
        name: data?.fileName || ``,
        onChangeSelected: () => {},
        size: data?.fileHandles[0].contentSize as number,
        type: data?.entity.concreteType as ENTITY_CONCRETE_TYPE,
        versionNumber,
      },
    ]
  }, [data])
  const versionSelection = VersionSelectionType.REQUIRED

  return (
    <Fragment>
      <ChallengeDataTable
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        tableData={tableData}
        versionSelection={versionSelection}
      />
      {'Need a button here'}
    </Fragment>
  )
}
