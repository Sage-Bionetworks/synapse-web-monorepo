import { useMemo } from 'react'
import { Box, Skeleton, Typography } from '@mui/material'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { sankeyDetailsSql, sankeyDetailsTableId } from '@/config/resources'
import styles from './SankeyFlowDetails.module.scss'

/** Facets summarized for a flow, in the order they are displayed. */
const SUMMARIZED_FACETS = [
  { column: 'assay', label: 'Assays' },
  { column: 'dataType', label: 'Data types' },
  { column: 'species', label: 'Species' },
] as const

/** Number of values listed per facet before the remainder is counted. */
const MAX_VALUES_PER_FACET = 4

type FlowSummary = {
  datasetCount: number
  participantCount: number
  facetCounts: Record<string, Map<string, number>>
}

/**
 * Synapse returns multi-value columns as a JSON array and single-value columns
 * as a plain string, and some values pack several terms into one comma-
 * delimited string. Normalize all three into a list of trimmed terms.
 */
function parseMultiValue(raw: string | null): string[] {
  if (!raw) {
    return []
  }
  const trimmed = raw.trim()
  if (trimmed.startsWith('[')) {
    try {
      const parsed: unknown = JSON.parse(trimmed)
      if (Array.isArray(parsed)) {
        return parsed.map(value => String(value).trim()).filter(Boolean)
      }
    } catch {
      // Fall through to comma splitting for values that only look like JSON.
    }
  }
  return trimmed
    .split(',')
    .map(value => value.trim())
    .filter(Boolean)
}

function summarizeRows(
  rows: { values: (string | null)[] }[],
  columnIndex: Record<string, number>,
): FlowSummary {
  const facetCounts: Record<string, Map<string, number>> = {}
  SUMMARIZED_FACETS.forEach(({ column }) => {
    facetCounts[column] = new Map()
  })

  let participantCount = 0
  rows.forEach(row => {
    participantCount += Number(row.values[columnIndex.participant_count]) || 0
    SUMMARIZED_FACETS.forEach(({ column }) => {
      const counts = facetCounts[column]
      // A dataset counts once per distinct term, so a value repeated within one
      // dataset does not inflate the total.
      new Set(parseMultiValue(row.values[columnIndex[column]])).forEach(
        value => {
          counts.set(value, (counts.get(value) ?? 0) + 1)
        },
      )
    })
  })

  return { datasetCount: rows.length, participantCount, facetCounts }
}

function FacetList(props: { label: string; counts: Map<string, number> }) {
  const { label, counts } = props
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1])

  if (sorted.length === 0) {
    return null
  }

  const shown = sorted.slice(0, MAX_VALUES_PER_FACET)
  const remainder = sorted.length - shown.length

  return (
    <Box className={styles.facet}>
      <Typography
        variant="smallText2"
        component="dt"
        className={styles.facetLabel}
      >
        {label}
      </Typography>
      <Box component="dd" className={styles.facetValues}>
        {shown.map(([value, count]) => (
          <Typography key={value} variant="smallText1" component="span">
            {value} <span className={styles.count}>{count}</span>
          </Typography>
        ))}
        {remainder > 0 && (
          <Typography
            variant="smallText1"
            component="span"
            className={styles.remainder}
          >
            +{remainder} more
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export type SankeyFlowDetailsProps = {
  /** Label of the flow under the cursor, or null for the portal-wide summary. */
  focusedCategory: string | null
}

/**
 * Describes what kind of data sits behind a Sankey flow — the question the
 * chart raises but its counts alone cannot answer.
 *
 * Every dataset is fetched once and summarized in memory rather than issuing a
 * query per flow, so hovering is instant and does not put the panel into a
 * loading state on each move.
 */
export default function SankeyFlowDetails(props: SankeyFlowDetailsProps) {
  const { focusedCategory } = props

  const queryRequest: QueryBundleRequest = useMemo(
    () => ({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      entityId: sankeyDetailsTableId,
      query: { sql: sankeyDetailsSql },
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
        SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS,
    }),
    [],
  )

  const { data, isLoading, error } = useGetQueryResultBundle(queryRequest)

  const { columnIndex, rows } = useMemo(() => {
    const headers = data?.queryResult?.queryResults.headers ?? []
    const index: Record<string, number> = {}
    headers.forEach((header, position) => {
      index[header.name] = position
    })
    return {
      columnIndex: index,
      rows: data?.queryResult?.queryResults.rows ?? [],
    }
  }, [data])

  const summary = useMemo(() => {
    const relevantRows = focusedCategory
      ? rows.filter(row => row.values[columnIndex.source] === focusedCategory)
      : // The chart totals count(source), which skips datasets with no source,
        // so the unfocused summary skips them too and the two figures agree.
        rows.filter(row => row.values[columnIndex.source]?.trim())
    return summarizeRows(relevantRows, columnIndex)
  }, [rows, columnIndex, focusedCategory])

  if (isLoading) {
    return <Skeleton variant="rounded" width="100%" height={280} />
  }
  // The chart beside this panel still stands on its own, so a failure here is
  // reported quietly rather than escalated.
  if (error || rows.length === 0) {
    return null
  }

  return (
    <Box className={styles.root}>
      <Typography
        variant="sectionTitle"
        component="h3"
        className={styles.title}
      >
        {focusedCategory ?? 'All sources'}
      </Typography>
      <Typography variant="smallText1" className={styles.lede}>
        {focusedCategory
          ? 'Data contributed through this source.'
          : 'Hover over a flow in the chart for individual dataset statistics.'}
      </Typography>

      <Box component="dl" className={styles.stats}>
        <Box className={styles.stat}>
          <Typography
            variant="headline3"
            component="dd"
            className={styles.statValue}
          >
            {summary.datasetCount.toLocaleString()}
          </Typography>
          <Typography variant="smallText2" component="dt">
            {summary.datasetCount === 1 ? 'dataset' : 'datasets'}
          </Typography>
        </Box>
        {summary.participantCount > 0 && (
          <Box className={styles.stat}>
            <Typography
              variant="headline3"
              component="dd"
              className={styles.statValue}
            >
              {summary.participantCount.toLocaleString()}
            </Typography>
            <Typography variant="smallText2" component="dt">
              participants
            </Typography>
          </Box>
        )}
      </Box>

      <Box component="dl" className={styles.facets}>
        {SUMMARIZED_FACETS.map(({ column, label }) => (
          <FacetList
            key={column}
            label={label}
            counts={summary.facetCounts[column]}
          />
        ))}
      </Box>
    </Box>
  )
}
