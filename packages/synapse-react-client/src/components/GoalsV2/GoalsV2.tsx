import React, { useEffect, useState } from 'react'
import {
  QueryBundleRequest,
  FileHandleAssociation,
  FileHandleAssociateType,
  BatchFileRequest,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from '../../utils'
import { getFiles } from '../../synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { ErrorBanner } from '../error/ErrorBanner'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import useShowDesktop from '../../utils/hooks/useShowDesktop'
import GoalsV2Mobile from './GoalsV2.Mobile'
import GoalsV2Desktop from './GoalsV2.Desktop'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { Box, Link, Typography, Button, darken } from '@mui/material'

export type GoalsV2Props = {
  entityId: string
}

export type GoalsV2DataProps = {
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
const GOALSV2_DESKTOP_MIN_BREAKPOINT = 1200

export const GoalsV2: React.FC<GoalsV2Props> = (props: GoalsV2Props) => {
  const { entityId } = props
  const { accessToken } = useSynapseContext()
  const [assets, setAssets] = useState<string[] | undefined>()
  const [error, setError] = useState<string | SynapseClientError | undefined>()
  const showDesktop = useShowDesktop(GOALSV2_DESKTOP_MIN_BREAKPOINT)
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

  const goalsDataArray: GoalsV2DataProps[] = []

  queryResultBundle?.queryResult!.queryResults.rows.forEach((el, index) => {
    const values = el.values as string[]
    if (values.some(value => value === null)) {
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
    const asset = assets?.[index] ?? ''
    const goalsV2DataProps: GoalsV2DataProps = {
      countSql,
      title,
      summary,
      link,
      asset,
    }
    goalsDataArray.push(goalsV2DataProps)
  })

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 128, 0, 0.05)',
        height: '560px',
        padding: '80px',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          paddingBottom: '30px',
        }}
      >
        <Typography
          variant="headline1"
          style={{
            color: 'grey.1000',
            fontFamily: 'Merriweather',
            fontSize: '32px',
          }}
          sx={{
            pt: '30px',
            mb: '10px',
            mx: 'auto',
            width: 'max-content',
            borderTop: '3px solid rgba(128, 128, 128, 0.25)',
          }}
        >
          What's in the Portal?
        </Typography>
        <Link
          href="https://eliteportal.synapse.org/Explore/Data"
          target="_blank"
          rel="noopener noreferrer"
          fontFamily="Lato"
          fontSize="18"
          fontStyle="semi-bold"
        >
          <Button
            href="https://eliteportal.synapse.org/Explore/Data" // <-- this should probably be a prop for reusability
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              backgroundColor: '#5BA998',
              border: '1px solid white',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: darken('#5BA998', 0.05),
                boxShadow: 'none',
              },
            }}
          >
            Start Exploring Data
          </Button>
        </Link>
      </Box>
      {error && <ErrorBanner error={error} />}
      <div className={`Goals${showDesktop ? '__Desktop' : ''}`}>
        {goalsDataArray.map((row, index) => {
          return showDesktop ? (
            <Box sx={{ display: 'grid' }}>
              <GoalsV2Desktop key={index} {...row} />
            </Box>
          ) : (
            <Box sx={{ display: 'grid' }}>
              <GoalsV2Mobile key={index} {...row} />
            </Box>
          )
        })}
      </div>
    </Box>
  )
}

export default GoalsV2
