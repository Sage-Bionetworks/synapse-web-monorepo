import { getFiles } from '@/synapse-client/SynapseClient'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  BatchFileRequest,
  FileHandleAssociateType,
  FileHandleAssociation,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { useEffect, useState } from 'react'

export default function useGetGoalData(
  entityId: string,
  queryResultBundle: QueryResultBundle | undefined,
) {
  const [assets, setAssets] = useState<string[] | undefined>()
  const [error, setError] = useState<string | SynapseClientError | undefined>()
  const { accessToken } = useSynapseContext()

  enum ExpectedColumns {
    TABLEID = 'TableId',
    COUNT_SQL = 'CountSql',
    TITLE = 'Title',
    SUMMARY = 'Summary',
    LINK = 'Link',
    ASSET = 'Asset',
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const assetColumnIndex = getFieldIndex(
          ExpectedColumns.ASSET,
          queryResultBundle,
        )
        const fileHandle =
          (queryResultBundle?.queryResult!.queryResults.rows.map(
            row => row.values[assetColumnIndex],
          ) ?? []) as string[]
        const assetFileHandleIds = fileHandle.filter(
          v => v != null && v !== undefined,
        )
        if (assetFileHandleIds.length === 0) {
          setAssets(undefined)
          setError(undefined)
          return
        }
        const fileHandleAssociationList: FileHandleAssociation[] =
          assetFileHandleIds.map(fileId => {
            return {
              associateObjectId: entityId,
              associateObjectType: FileHandleAssociateType.TableEntity,
              fileHandleId: fileId,
            }
          })
        const batchFileRequest: BatchFileRequest = {
          includeFileHandles: false,
          includePreSignedURLs: true,
          includePreviewPreSignedURLs: false,
          requestedFiles: fileHandleAssociationList,
        }
        const files = await getFiles(batchFileRequest, accessToken)
        setError(undefined)
        const outFiles = files.requestedFiles
          .filter(row => row.preSignedURL !== undefined)
          .map(row => row.preSignedURL!)
        setAssets(outFiles)
      } catch (e) {
        setError(e)
        setAssets(undefined)
      }
    }
    getData()
  }, [entityId, queryResultBundle, accessToken])

  return { assets, error }
}
