import { Button, Typography, Stack } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import styles from './DataExplorer.module.scss'
import { useSmartLink } from '../SmartLink/useSmartLink'
import { parseEntityIdFromSqlStatement } from '@/utils/functions'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from '@/utils'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { generateEncodedPathAndQueryForSelectedFacetURL } from '../QueryWrapper'
import ImageFromSynapseTable from '../ImageFromSynapseTable'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

type DataExplorerProps = {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  buttonText?: string
  buttonLink?: string
  sql: string
  explorePath?: string
  exploreQuerySql?: string
  filterColumnName?: string
}

enum ExpectedColumns {
  DATATYPE = 'datatype',
  ICON = 'icon',
  HEX_COLOR = 'hexColor',
  FILE_COUNT = 'fileCount',
}

export default function DataExplorer({
  sql,
  title,
  subtitle,
  buttonText,
  buttonLink,
  explorePath,
  exploreQuerySql,
  filterColumnName,
}: DataExplorerProps) {
  const hasTextSection = title || subtitle || buttonText
  const smartLinkProps = useSmartLink(buttonLink)

  const entityId = parseEntityIdFromSqlStatement(sql)

  const queryBundleRequest: QueryBundleRequest = {
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    query: {
      sql,
      sort: [{ column: 'order', direction: 'ASC' }],
    },
  }

  const { data: queryResultBundle } =
    useGetQueryResultBundle(queryBundleRequest)

  const dataRows = useMemo(
    () => queryResultBundle?.queryResult?.queryResults.rows ?? [],
    [queryResultBundle],
  )

  const datatypeColIndex = getFieldIndex(
    ExpectedColumns.DATATYPE,
    queryResultBundle,
  )

  const iconColIndex = getFieldIndex(ExpectedColumns.ICON, queryResultBundle)

  const hexColorColIndex = getFieldIndex(
    ExpectedColumns.HEX_COLOR,
    queryResultBundle,
  )

  const fileCountColIndex = getFieldIndex(
    ExpectedColumns.FILE_COUNT,
    queryResultBundle,
  )

  const [rowUrls, setRowUrls] = useState<string[]>([])

  useEffect(() => {
    if (!explorePath || !filterColumnName || !exploreQuerySql) return

    Promise.all(
      dataRows.map(row => {
        const dataType = row.values[datatypeColIndex]?.trim()
        if (!dataType) return Promise.resolve(explorePath)
        return generateEncodedPathAndQueryForSelectedFacetURL(
          explorePath,
          exploreQuerySql,
          [{ facet: filterColumnName, facetValue: dataType }],
        )
      }),
    ).then(setRowUrls)
  }, [
    dataRows,
    datatypeColIndex,
    explorePath,
    exploreQuerySql,
    filterColumnName,
  ])

  return (
    <div className={styles.dataExplorerContainer}>
      {hasTextSection && (
        <Stack className={styles.dataExplorerTextContainer}>
          {title && (
            <Typography
              variant="headline1"
              className={styles.dataExplorerTitle}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography
              variant="body1"
              component="div"
              className={styles.dataExplorerSubtitle}
            >
              {subtitle}
            </Typography>
          )}
          {buttonText && (
            <Button
              variant="contained"
              className={styles.dataExplorerButton}
              {...smartLinkProps}
            >
              {buttonText}
            </Button>
          )}
        </Stack>
      )}
      <div className={styles.dataContainer}>
        {dataRows.map((row, index) => {
          const dataType = row.values[datatypeColIndex] ?? ''
          const hexColor = row.values[hexColorColIndex] ?? undefined
          const rowUrl = rowUrls[index]
          return (
            <a key={row.rowId} className={styles.dataRow} href={rowUrl}>
              <div className={styles.dataRowInner}>
                <div className={styles.dataRowLeft}>
                  <div
                    className={styles.iconContainer}
                    style={hexColor ? { backgroundColor: hexColor } : undefined}
                  >
                    <ImageFromSynapseTable
                      tableId={entityId}
                      fileHandleId={row.values[iconColIndex]}
                      alt={row.values[datatypeColIndex] ?? ''}
                      style={{ width: 49, height: 49 }}
                    />
                  </div>
                  <div className={styles.dataRowNamePill}>
                    <Typography className={styles.dataRowTitle}>
                      {dataType}
                    </Typography>
                    <div className={styles.fileCount}>
                      {row.values[fileCountColIndex] ?? '10'}
                    </div>
                  </div>
                </div>
                {rowUrl && (
                  <div className={styles.viewCta}>
                    <span className={styles.viewCtaText}>View</span>
                    <ArrowForwardIcon className={styles.viewCtaIcon} />
                  </div>
                )}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
