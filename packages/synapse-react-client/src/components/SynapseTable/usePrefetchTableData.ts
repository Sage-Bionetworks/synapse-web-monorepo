import {
  useGetEntity,
  useGetEntityHeaders,
  useGetFileBatch,
  useGetRestrictionInformationBatch,
  useGetUserGroupHeaders,
} from '@/synapse-queries'
import { useSynapseContext } from '@/utils'
import { getFieldIndex, getTypeIndices } from '@/utils/functions/queryUtils'
import { goToPage as transformQueryToGoToPage } from '@/utils/hooks/useImmutableTableQuery/TableQueryReducerActions'
import {
  ColumnTypeEnum,
  FileHandleAssociateType,
  FileHandleAssociation,
  QueryBundleRequest,
  ReferenceList,
  RestrictableObjectType,
  RowSet,
  Table,
} from '@sage-bionetworks/synapse-types'
import { useQueryClient } from '@tanstack/react-query'
import { cloneDeep } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import { useQueryContext } from '../QueryContext'
import { getTableQueryUseQueryOptions } from '../QueryWrapper/TableQueryUseQueryOptions'
import { useGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'
import {
  isEntityViewOrDatasetOrCollection,
  isFileViewOrDataset,
} from './SynapseTableUtils'

function usePrefetchFileHandleData(rowSet: RowSet) {
  const { entityId, versionNumber } = useQueryContext()

  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)
  const { data: queryMetadata } = useGetQueryMetadata()

  const fileHandleIdColumnIndices = getTypeIndices(
    ColumnTypeEnum.FILEHANDLEID,
    queryMetadata?.selectColumns,
  )

  let fileHandlesToPrefetch: FileHandleAssociation[] = []

  // Now add all IDs from the entity ID columns
  if (entity && rowSet && queryMetadata && queryMetadata.selectColumns) {
    fileHandlesToPrefetch = rowSet.rows.reduce(
      (prev: FileHandleAssociation[], curr) => {
        fileHandleIdColumnIndices.forEach(index => {
          const value = curr.values[index]
          if (value) {
            const selectColumn = queryMetadata?.selectColumns![index]
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

function useGetEntitiesInTable(rowSet: RowSet) {
  const { entityId, versionNumber } = useQueryContext()
  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)
  const { data: queryMetadata } = useGetQueryMetadata()

  let entitiesInTable: ReferenceList = []

  // If this is a file view/dataset, collect all the row IDs; they correspond to entities that we'll end up fetching
  if (entity && isEntityViewOrDatasetOrCollection(entity)) {
    entitiesInTable = rowSet.rows.reduce((prev: ReferenceList, curr) => {
      const { rowId, versionNumber } = curr
      if (rowId) {
        prev.push({
          targetId: `syn${rowId}`,
          targetVersionNumber: versionNumber,
        })
      }
      return prev
    }, entitiesInTable)
  }

  let entityIdColumnIndices = getTypeIndices(
    ColumnTypeEnum.ENTITYID,
    queryMetadata?.selectColumns,
  )

  if (entity && isEntityViewOrDatasetOrCollection(entity)) {
    // If this is a view/dataset, we don't need to fetch the entities in the entity ID column
    // Collecting the row IDs in the last step was sufficient
    const idColumnIndex = getFieldIndex('id', queryMetadata)
    entityIdColumnIndices = entityIdColumnIndices.filter(
      index => index !== idColumnIndex,
    )
  }

  const entityIdListColumnIndices = getTypeIndices(
    ColumnTypeEnum.ENTITYID_LIST,
    queryMetadata?.selectColumns,
  )

  entitiesInTable = rowSet.rows.reduce((prev: ReferenceList, curr) => {
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
            !prev.find(e => e.targetId === id && e.targetVersionNumber == null)
          ) {
            prev.push({ targetId: id })
          }
        })
      }
    })

    return prev
  }, entitiesInTable)

  return entitiesInTable
}

function usePrefetchEntityData(entitiesToPrefetch: ReferenceList) {
  return useGetEntityHeaders(entitiesToPrefetch, {
    enabled: entitiesToPrefetch.length > 0,
  })
}

function usePrefetchUserGroupHeaderData(rowSet: RowSet) {
  const { data: queryMetadata } = useGetQueryMetadata()

  const userIdColumnIndices = getTypeIndices(
    ColumnTypeEnum.USERID,
    queryMetadata?.selectColumns,
  )

  const userIdListColumnIndices = getTypeIndices(
    ColumnTypeEnum.USERID_LIST,
    queryMetadata?.selectColumns,
  )

  const principalIdsToPrefetch: string[] = rowSet.rows.reduce(
    (prev: string[], curr) => {
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
    },
    [],
  )

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
export function usePrefetchResourcesInTable(rowSet: RowSet): {
  dataHasBeenPrefetched: boolean
} {
  const entitiesToPrefetch = useGetEntitiesInTable(rowSet)
  const { isLoading: isLoadingEntityData } =
    usePrefetchEntityData(entitiesToPrefetch)
  const { isLoading: isLoadingEntityRestrictionData } =
    usePrefetchEntityRestrictionData(entitiesToPrefetch)
  const { isLoading: isLoadingFileHandleData } =
    usePrefetchFileHandleData(rowSet)
  const { isLoading: isLoadingUserGroupData } =
    usePrefetchUserGroupHeaderData(rowSet)

  return {
    dataHasBeenPrefetched:
      !isLoadingEntityData &&
      !isLoadingEntityRestrictionData &&
      !isLoadingFileHandleData &&
      !isLoadingUserGroupData,
  }
}

/**
 * Uses react-query to prefetch an entire page of row data.
 *
 * @returns A function that will prefetch the data for a given page number.
 */
export function usePrefetchTableRows(): (pageNumber: number) => Promise<void> {
  const { keyFactory, accessToken } = useSynapseContext()
  const { currentQueryRequest } = useQueryContext()
  const queryClient = useQueryClient()

  // locked column does not matter for row data
  const lockedColumn = undefined
  return useCallback(
    (pageNumber: number) => {
      // Get the query for the next page
      const queryWithUpdatedPage = transformQueryToGoToPage(
        { type: 'goToPage', pageNumber },
        cloneDeep(currentQueryRequest) as QueryBundleRequest,
      )

      // Transform the query into UseQueryOptions
      const { rowDataQueryOptions } = getTableQueryUseQueryOptions(
        queryWithUpdatedPage,
        lockedColumn,
        keyFactory,
        accessToken,
      )

      // Finally, prefetch the data
      return queryClient.prefetchQuery(rowDataQueryOptions)
    },
    [accessToken, currentQueryRequest, keyFactory, lockedColumn, queryClient],
  )
}
