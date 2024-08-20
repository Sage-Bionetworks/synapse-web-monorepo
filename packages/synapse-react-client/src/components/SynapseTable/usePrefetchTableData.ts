import {
  ColumnTypeEnum,
  FileHandleAssociateType,
  FileHandleAssociation,
  ReferenceList,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { isEntityViewOrDataset, isFileViewOrDataset } from './SynapseTableUtils'
import {
  useGetEntityHeaders,
  useGetFileBatch,
  useGetRestrictionInformationBatch,
  useGetUserGroupHeaders,
} from '../../synapse-queries'
import { useAtomValue } from 'jotai'
import {
  tableQueryDataAtom,
  tableQueryEntityAtom,
} from '../QueryWrapper/QueryWrapper'
import { getFieldIndex, getTypeIndices } from '../../utils/functions/queryUtils'
import { useMemo } from 'react'

function usePrefetchFileHandleData() {
  const entity = useAtomValue(tableQueryEntityAtom)
  const data = useAtomValue(tableQueryDataAtom)

  const fileHandleIdColumnIndices = getTypeIndices(
    ColumnTypeEnum.FILEHANDLEID,
    data,
  )

  let fileHandlesToPrefetch: FileHandleAssociation[] = []

  // Now add all IDs from the entity ID columns
  if (entity && data && data.selectColumns) {
    fileHandlesToPrefetch = (
      data?.queryResult?.queryResults?.rows ?? []
    ).reduce(
      (prev: FileHandleAssociation[], curr) => {
        fileHandleIdColumnIndices.forEach(index => {
          const value = curr.values[index]
          if (value) {
            const selectColumn = data?.selectColumns![index]
            if (
              isFileViewOrDataset(entity) &&
              selectColumn.name === 'dataFileHandleId'
            ) {
              // The association is the entity
              prev.push({
                fileHandleId: value,
                associateObjectId: String(curr.rowId),
                associateObjectType: FileHandleAssociateType.FileEntity,
              })
            } else {
              // The association is the table entity
              prev.push({
                fileHandleId: value,
                associateObjectId: entity.id!,
                associateObjectType: FileHandleAssociateType.TableEntity,
              })
            }
          }
        })
        return prev
      },

      fileHandlesToPrefetch,
    )
  }

  return useGetFileBatch(
    {
      requestedFiles: fileHandlesToPrefetch,
      includeFileHandles: true,
      includePreSignedURLs: false,
      includePreviewPreSignedURLs: false,
    },
    {
      enabled: fileHandlesToPrefetch.length > 0,
    },
  )
}

function useGetEntitiesInTable() {
  const entity = useAtomValue(tableQueryEntityAtom)
  const data = useAtomValue(tableQueryDataAtom)

  let entitiesInTable: ReferenceList = []

  // If this is a file view/dataset, collect all the row IDs; they correspond to entities that we'll end up fetching
  if (entity && isEntityViewOrDataset(entity)) {
    entitiesInTable = (data?.queryResult?.queryResults?.rows ?? []).reduce(
      (prev: ReferenceList, curr) => {
        const { rowId, versionNumber } = curr
        if (rowId) {
          prev.push({
            targetId: `syn${rowId}`,
            targetVersionNumber: versionNumber,
          })
        }
        return prev
      },
      entitiesInTable,
    )
  }

  let entityIdColumnIndices = getTypeIndices(ColumnTypeEnum.ENTITYID, data)

  if (entity && isEntityViewOrDataset(entity)) {
    // If this is a view/dataset, we don't need to fetch the entities in the entity ID column
    // Collecting the row IDs in the last step was sufficient
    const idColumnIndex = getFieldIndex('id', data)
    entityIdColumnIndices = entityIdColumnIndices.filter(
      index => index !== idColumnIndex,
    )
  }

  const entityIdListColumnIndices = getTypeIndices(
    ColumnTypeEnum.ENTITYID_LIST,
    data,
  )

  entitiesInTable = (data?.queryResult?.queryResults?.rows ?? []).reduce(
    (prev: ReferenceList, curr) => {
      // Get all IDs from the entity ID columns
      entityIdColumnIndices.forEach(index => {
        const value = curr.values[index]
        if (
          value &&
          !prev.find(e => e.targetId === value && e.targetVersionNumber == null)
        ) {
          prev.push({ targetId: value })
        }
      })
      // Get all IDs from the entity ID list columns
      entityIdListColumnIndices.forEach(index => {
        const value = curr.values[index]
        if (value) {
          const ids = JSON.parse(value) as string[]
          ids.forEach(id => {
            if (
              id &&
              !prev.find(
                e => e.targetId === id && e.targetVersionNumber == null,
              )
            ) {
              prev.push({ targetId: id })
            }
          })
        }
      })

      return prev
    },
    entitiesInTable,
  )

  return entitiesInTable
}

function usePrefetchEntityData(entitiesToPrefetch: ReferenceList) {
  return useGetEntityHeaders(entitiesToPrefetch, {
    enabled: entitiesToPrefetch.length > 0,
  })
}

function usePrefetchUserGroupHeaderData() {
  const data = useAtomValue(tableQueryDataAtom)

  const userIdColumnIndices = getTypeIndices(ColumnTypeEnum.USERID, data)

  const userIdListColumnIndices = getTypeIndices(
    ColumnTypeEnum.USERID_LIST,
    data,
  )

  const principalIdsToPrefetch: string[] = (
    data?.queryResult?.queryResults?.rows ?? []
  ).reduce((prev: string[], curr) => {
    // Add all IDs from the USERID columns
    userIdColumnIndices.forEach(index => {
      const value = curr.values[index]
      if (value && !prev.includes(value)) {
        prev.push(value)
      }
    })
    // Add all IDs from the USERID_LIST columns
    userIdListColumnIndices.forEach(index => {
      const value = curr.values[index]
      if (value) {
        const userIds = JSON.parse(value) as number[]
        userIds.forEach(userId => {
          if (!prev.includes(String(userId))) {
            prev.push(String(userId))
          }
        })
      }
    })
    return prev
  }, [])

  return useGetUserGroupHeaders(principalIdsToPrefetch, {
    enabled: principalIdsToPrefetch.length > 0,
  })
}

function usePrefetchEntityRestrictionData(entitiesToPrefetch: ReferenceList) {
  // This information only varies by entity ID, not version number. The restriction information is the same for all versions.
  const uniqueEntityIds = useMemo(() => {
    const entityIds = entitiesToPrefetch.map(e => e.targetId)
    // Dedupe the list in case there were duplicates, e.g. there were multiple versions of the same entity
    return Array.from(new Set(entityIds))
  }, [entitiesToPrefetch])

  return useGetRestrictionInformationBatch(
    {
      objectIds: uniqueEntityIds,
      restrictableObjectType: RestrictableObjectType.ENTITY,
    },
    {
      enabled: entitiesToPrefetch.length > 0,
    },
  )
}

/**
 * Uses react-query to prefetch data rendered by SynapseTable. Each SynapseTableCell instance load data to render rich
 * content (e.g. entity data) for the cell based on its column type. This hook uses react-query hooks that will
 * fetch and de-normalize batch requests, so when the SynapseTableCell component renders, the data is already loaded
 * in the cache. In practice, this avoids Synapse backend throttling and 'waterfall' content rendering.
 */
export function usePrefetchTableData(): { dataHasBeenPrefetched: boolean } {
  const entitiesToPrefetch = useGetEntitiesInTable()
  const { isLoading: isLoadingEntityData } =
    usePrefetchEntityData(entitiesToPrefetch)
  const { isLoading: isLoadingEntityRestrictionData } =
    usePrefetchEntityRestrictionData(entitiesToPrefetch)
  const { isLoading: isLoadingFileHandleData } = usePrefetchFileHandleData()
  const { isLoading: isLoadingUserGroupData } = usePrefetchUserGroupHeaderData()

  return {
    dataHasBeenPrefetched:
      !isLoadingEntityData &&
      !isLoadingEntityRestrictionData &&
      !isLoadingFileHandleData &&
      !isLoadingUserGroupData,
  }
}
