import {
  ColumnTypeEnum,
  FileHandleAssociateType,
  FileHandleAssociation,
  ReferenceList,
} from '@sage-bionetworks/synapse-types'
import { isEntityViewOrDataset, isFileViewOrDataset } from './SynapseTableUtils'
import { useGetFileBatch } from '../../synapse-queries/file/useFiles'
import { useGetEntityHeaders } from '../../synapse-queries'
import { useAtomValue } from 'jotai'
import {
  tableQueryDataAtom,
  tableQueryEntityAtom,
} from '../QueryWrapper/QueryWrapper'

function usePrefetchFileHandleData() {
  const entity = useAtomValue(tableQueryEntityAtom)
  const data = useAtomValue(tableQueryDataAtom)
  const fileHandleIdColumnIndices = (data?.columnModels ?? []).reduce(
    (prev: number[], curr, index) => {
      if (curr.columnType === ColumnTypeEnum.FILEHANDLEID) {
        return [...prev, index]
      }
      return prev
    },
    [],
  )

  let fileHandlesToPrefetch: FileHandleAssociation[] = []

  // Now add all IDs from the entity ID columns
  if (entity && data && data.columnModels) {
    fileHandlesToPrefetch = (
      data?.queryResult?.queryResults?.rows ?? []
    ).reduce(
      (prev: FileHandleAssociation[], curr) => {
        fileHandleIdColumnIndices.forEach(index => {
          const value = curr.values[index]
          if (value) {
            const columnModel = data?.columnModels![index]
            if (
              isFileViewOrDataset(entity) &&
              columnModel.name === 'dataFileHandleId'
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

function usePrefetchEntityData() {
  const entity = useAtomValue(tableQueryEntityAtom)
  const data = useAtomValue(tableQueryDataAtom)

  let entitiesToPrefetch: ReferenceList = []

  // If this is a file view/dataset, collect all of the row IDs; they correspond to entities that we'll end up fetching
  if (entity && isEntityViewOrDataset(entity)) {
    entitiesToPrefetch = (data?.queryResult?.queryResults?.rows ?? []).reduce(
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
      entitiesToPrefetch,
    )
  }

  const entityIdColumnIndices = (data?.columnModels ?? []).reduce(
    (prev: number[], curr, index) => {
      if (curr.columnType === ColumnTypeEnum.ENTITYID) {
        if (entity && isEntityViewOrDataset(entity) && curr.name === 'id') {
          // If this is a view/dataset, we don't need to fetch the entities in the entity ID column
          // Collecting the row IDs in the last step was sufficient
          return prev
        }
        return [...prev, index]
      }
      return prev
    },
    [],
  )

  // Now add all IDs from the entity ID columns
  entitiesToPrefetch = (data?.queryResult?.queryResults?.rows ?? []).reduce(
    (prev: ReferenceList, curr) => {
      entityIdColumnIndices.forEach(index => {
        const value = curr.values[index]
        if (
          value &&
          !prev.find(e => e.targetId === value && e.targetVersionNumber == null)
        ) {
          prev.push({ targetId: value })
        }
      })
      return prev
    },
    entitiesToPrefetch,
  )

  return useGetEntityHeaders(entitiesToPrefetch, {
    enabled: entitiesToPrefetch.length > 0,
  })
}

/**
 * Uses react-query to prefetch data rendered by SynapseTable. Each SynapseTableCell instance load data to render rich
 * content (e.g. entity data) for the cell based on its column type. This hook uses react-query hooks that will
 * fetch and de-normalize batch requests, so when the SynapseTableCell component renders, the data is already loaded
 * in the cache. In practice, this avoids Synapse backend throttling and 'waterfall' content rendering.
 */
export function usePrefetchTableData(): { dataHasBeenPrefetched: boolean } {
  const { isLoading: isLoadingEntityData } = usePrefetchEntityData()
  const { isLoading: isLoadingFileHandleData } = usePrefetchFileHandleData()

  // TODO: Add user profile prefetch
  // User profile prefetch may not be easy/possible because the user card component fetches the UserProfile,
  // But only UserGroupHeaders can be fetched in a batch request.

  return {
    dataHasBeenPrefetched: !isLoadingEntityData && !isLoadingFileHandleData,
  }
}
