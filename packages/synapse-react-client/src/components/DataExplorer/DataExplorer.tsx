import { Button, Typography, Stack } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import styles from './DataExplorer.module.scss'
import { useSmartLink } from '../SmartLink/useSmartLink'
import { parseEntityIdFromSqlStatement } from '@/utils/functions'
import {
  QueryBundleRequest,
  FacetColumnResultValues,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from '@/utils'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { generateEncodedPathAndQueryForSelectedFacetURL } from '../QueryWrapper'
import ImageFromSynapseTable from '../ImageFromSynapseTable'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { getFacets } from '../widgets/facet-nav/useFacetPlots'
import { orderBy } from 'lodash-es'

type DataExplorerProps = {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  buttonText?: string
  buttonLink?: string
  sql: string
  explorePath?: string
  exploreQuerySql?: string
  facetSql?: string
}

enum ExpectedColumns {
  DATATYPE = 'datatype',
  ICON = 'icon',
  HEX_COLOR = 'hexColor',
  ORDER = 'order',
  COLUMN_NAME = 'columnName',
}

/**
 * DataExplorer
 *
 * A reusable component that renders a list of data types/categories with associated icons.
 * It drives navigation by linking each row to a pre-filtered exploration view.
 *
 * How it works:
 * 1. `sql`: Fetches a configuration table defining the display categories,
 *    their display order, hex colors, and icons.
 * 2. `facetSql`: Fetches real-time counts for these categories from the actual
 *    underlying data table.
 * 3. Links are dynamically built to point to a target path (`explorePath`) pre-filtered to the
 *    clicked category.
 */
export default function DataExplorer({
  sql,
  title,
  subtitle,
  buttonText,
  buttonLink,
  explorePath,
  exploreQuerySql,
  facetSql,
}: DataExplorerProps) {
  const hasTextSection = title || subtitle || buttonText
  const smartLinkProps = useSmartLink(buttonLink)

  const entityId = parseEntityIdFromSqlStatement(sql)
  const facetEntityId = parseEntityIdFromSqlStatement(facetSql ?? '')

  const queryBundleRequest: QueryBundleRequest = {
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    query: {
      sql,
    },
  }

  const facetQueryRequest: QueryBundleRequest = {
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_FACETS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: facetEntityId,
    query: {
      sql: facetSql ?? '',
    },
  }

  const { data: queryResultBundle } =
    useGetQueryResultBundle(queryBundleRequest)

  const dataRows = useMemo(
    () => queryResultBundle?.queryResult?.queryResults.rows ?? [],
    [queryResultBundle],
  )

  const { data: facetQueryResultBundle } = useGetQueryResultBundle(
    facetQueryRequest,
    { enabled: Boolean(facetSql) },
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

  const orderColIndex = getFieldIndex(ExpectedColumns.ORDER, queryResultBundle)

  const columnNameColIndex = getFieldIndex(
    ExpectedColumns.COLUMN_NAME,
    queryResultBundle,
  )

  // Key rows by columnName + dataType to prevent collisions when the same dataType appears in multiple columns.
  const getRowKey = (dataType: string, columnName: string) =>
    columnName ? `${columnName}::${dataType}` : dataType

  const [rowUrls, setRowUrls] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!explorePath || !exploreQuerySql) return
    Promise.all(
      dataRows.map(row => {
        const dataType = row.values[datatypeColIndex]?.trim() ?? ''
        const columnName = row.values[columnNameColIndex]?.trim() ?? ''
        const rowKey = getRowKey(dataType, columnName)
        if (!dataType || !columnName)
          return Promise.resolve([rowKey, explorePath] as const)
        return generateEncodedPathAndQueryForSelectedFacetURL(
          explorePath,
          exploreQuerySql,
          [{ facet: columnName, facetValue: dataType }],
        ).then(url => [rowKey, url] as const)
      }),
    ).then(entries => setRowUrls(Object.fromEntries(entries)))
  }, [
    dataRows,
    datatypeColIndex,
    columnNameColIndex,
    explorePath,
    exploreQuerySql,
  ])

  // Create a map of facet counts by column name and data type for quick lookup
  const facetCountsByColumn = useMemo(() => {
    const facets = getFacets(
      facetQueryResultBundle,
    ) as FacetColumnResultValues[]
    const map = new Map<string, Map<string, number>>()
    for (const facet of facets) {
      map.set(
        facet.columnName,
        new Map(facet.facetValues.map(fv => [fv.value, fv.count])),
      )
    }
    return map
  }, [facetQueryResultBundle])

  const getFacetCount = (dataType: string, columnName?: string) =>
    columnName ? facetCountsByColumn.get(columnName)?.get(dataType) : undefined

  // Sort by order column ascending, then by facet count descending
  const sortedRows = orderBy(
    dataRows,
    [
      row => Number(row.values[orderColIndex] ?? Number.MAX_SAFE_INTEGER),
      row =>
        getFacetCount(
          row.values[datatypeColIndex]?.trim() ?? '',
          row.values[columnNameColIndex]?.trim() ?? '',
        ) ?? 0,
    ],
    ['asc', 'desc'],
  )

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
        {sortedRows.map(row => {
          const dataType = row.values[datatypeColIndex]?.trim() ?? ''
          const hexColor = row.values[hexColorColIndex] ?? undefined
          const columnName = row.values[columnNameColIndex]?.trim() ?? ''
          const rowUrl = rowUrls[getRowKey(dataType, columnName)]
          const facetCount = getFacetCount(dataType, columnName)
          return (
            <a
              key={getRowKey(dataType, columnName)}
              className={styles.dataRow}
              href={rowUrl}
            >
              <div className={styles.dataRowInner}>
                <div className={styles.dataRowLeft}>
                  <div
                    className={styles.iconContainer}
                    style={hexColor ? { backgroundColor: hexColor } : undefined}
                  >
                    <ImageFromSynapseTable
                      tableId={entityId}
                      fileHandleId={row.values[iconColIndex]}
                      alt={dataType}
                      style={{ width: 49, height: 49 }}
                    />
                  </div>
                  <div className={styles.dataRowNamePill}>
                    <Typography className={styles.dataRowTitle}>
                      {dataType}
                    </Typography>
                    {facetCount && (
                      <div className={styles.facetCount}>{facetCount}</div>
                    )}
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
