import { useEffect, useState } from 'react'
import {
  QueryBundleRequest,
  FileHandleAssociation,
  FileHandleAssociateType,
  BatchFileRequest,
} from '@sage-bionetworks/synapse-types'
import * as SynapseConstants from '../../utils/SynapseConstants'
import { getFiles } from '../../synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { ErrorBanner } from '../error/ErrorBanner'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import useShowDesktop from '../../utils/hooks/useShowDesktop'
import GoalsMobile from './Goals.Mobile'
import GoalsDesktop from './Goals.Desktop'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import { useSynapseContext } from '../../utils/context/SynapseContext'

export type GoalsProps = {
  entityId: string
}

export type GoalsDataProps = {
  countSql?: string
  title: string
  summary: string
  link: string
  asset: string
}

enum ExpectedColumns {
  TABLEID = 'TableId', // Both TableId or CountSql are used to indicate what Table rows to count.
  COUNT_SQL = 'CountSql', // Code uses CountSql over TableId if defined (if the CountSql column is in the schema and filled in).
  TITLE = 'Title',
  SUMMARY = 'Summary',
  LINK = 'Link',
  ASSET = 'Asset',
}

// PORTALS-2367
const GOALS_DESKTOP_MIN_BREAKPOINT = 1200

export function Goals(props: GoalsProps) {
  const { entityId } = props
  const { accessToken } = useSynapseContext()
  const [assets, setAssets] = useState<string[] | undefined>()
  const [error, setError] = useState<string | SynapseClientError | undefined>()
  const showDesktop = useShowDesktop(GOALS_DESKTOP_MIN_BREAKPOINT)
  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: `select * from ${entityId} order by ItemOrder`,
    },
  }
  const { data: queryResultBundle } =
    useGetQueryResultBundle(queryBundleRequest)

  useEffect(() => {
    const getData = async () => {
      try {
        const assetColumnIndex = getFieldIndex(
          ExpectedColumns.ASSET,
          queryResultBundle,
        )
        const assets = (queryResultBundle?.queryResult!.queryResults.rows.map(
          el => el.values[assetColumnIndex],
        ) ?? []) as string[]
        const assetFileHandleIds = assets.filter(
          v => v != null && v !== undefined,
        )
        if (assetFileHandleIds.length === 0) {
          // wait for data to load
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
        setAssets(
          files.requestedFiles
            .filter(el => el.preSignedURL !== undefined)
            .map(el => el.preSignedURL!),
        )
      } catch (e) {
        console.error('Error on get data', e)
        setError(e)
      }
    }
    getData()
  }, [entityId, accessToken, queryResultBundle])

  const tableIdColumnIndex = getFieldIndex(
    ExpectedColumns.TABLEID,
    queryResultBundle,
  )
  const countSqlColumnIndex = getFieldIndex(
    ExpectedColumns.COUNT_SQL,
    queryResultBundle,
  )

  const titleColumnIndex = getFieldIndex(
    ExpectedColumns.TITLE,
    queryResultBundle,
  )
  const summaryColumnIndex = getFieldIndex(
    ExpectedColumns.SUMMARY,
    queryResultBundle,
  )
  const linkColumnIndex = getFieldIndex(ExpectedColumns.LINK, queryResultBundle)

  return (
    <div className={`Goals${showDesktop ? '__Desktop' : ''}`}>
      {error && <ErrorBanner error={error} />}
      {queryResultBundle?.queryResult!.queryResults.rows.map((el, index) => {
        const values = el.values as string[]
        if (values.some(value => value === null)) {
          // We cast values above assuming there are no null values, emit a warning just in case.
          console.warn('Row has null value(s) when no nulls expected')
        }
        const tableId =
          tableIdColumnIndex > -1 ? values[tableIdColumnIndex] : undefined
        let countSql
        if (countSqlColumnIndex > -1 && values[countSqlColumnIndex]) {
          countSql = values[countSqlColumnIndex]
        } else if (tableId) {
          countSql = `SELECT * FROM ${tableId}`
        }
        const title = values[titleColumnIndex]
        const summary = values[summaryColumnIndex]
        const link = values[linkColumnIndex]
        // assume that we recieve assets in order of rows and there is an asset for each item
        // can revisit if this isn't the case.
        const asset = assets?.[index] ?? ''
        const goalsDataProps: GoalsDataProps = {
          countSql,
          title,
          summary,
          link,
          asset,
        }
        return showDesktop ? (
          <GoalsDesktop {...goalsDataProps} />
        ) : (
          <GoalsMobile {...goalsDataProps} />
        )
      })}
    </div>
  )
}

export default Goals
