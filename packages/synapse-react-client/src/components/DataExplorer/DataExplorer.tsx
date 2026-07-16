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
  filterColumnName?: string
  facetSql?: string
}

enum ExpectedColumns {
  DATATYPE = 'datatype',
  ICON = 'icon',
  HEX_COLOR = 'hexColor',
  ORDER = 'order',
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
    { enabled: Boolean(facetSql && filterColumnName) },
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

  const [rowUrls, setRowUrls] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!explorePath || !filterColumnName || !exploreQuerySql) return

    Promise.all(
      dataRows.map(row => {
        const dataType = row.values[datatypeColIndex]?.trim() ?? ''
        if (!dataType) return Promise.resolve([dataType, explorePath] as const)
        return generateEncodedPathAndQueryForSelectedFacetURL(
          explorePath,
          exploreQuerySql,
          [{ facet: filterColumnName, facetValue: dataType }],
        ).then(url => [dataType, url] as const)
      }),
    ).then(entries => setRowUrls(Object.fromEntries(entries)))
  }, [
    dataRows,
    datatypeColIndex,
    explorePath,
    exploreQuerySql,
    filterColumnName,
  ])

  const getFacetCount = (dataType: string) => {
    const [facet] = getFacets(
      facetQueryResultBundle,
      filterColumnName ? [filterColumnName] : [],
    ) as FacetColumnResultValues[]

    return facet?.facetValues.find(facetValue => facetValue.value === dataType)
      ?.count
  }

  // Sort by order column ascending, then by facet count descending
  const sortedRows = orderBy(
    dataRows,
    [
      row => Number(row.values[orderColIndex] ?? Number.MAX_SAFE_INTEGER),
      row => getFacetCount(row.values[datatypeColIndex]?.trim() ?? '') ?? 0,
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
          const rowUrl = rowUrls[dataType]
          const facetCount = getFacetCount(dataType)
          return (
            <a key={dataType} className={styles.dataRow} href={rowUrl}>
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
