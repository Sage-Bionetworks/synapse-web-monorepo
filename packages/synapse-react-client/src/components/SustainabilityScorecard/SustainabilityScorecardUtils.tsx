import {
  QueryBundleRequest,
  QueryResultBundle,
  Row,
} from '@sage-bionetworks/synapse-types'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { SustainabilityScorecardProps } from './SustainabilityScorecard'

export const SUSTAINABILITY_ICON_COLORS = {
  check: '#52A31C',
  close: '#C13415',
}

export type MetricsConfig = {
  /** Name of the metric column in the table */
  key: string
  /** Display label for the metric */
  label: string
  /** Shown as a tooltip in SustainabilityScorecard and as summary text in SustainabilityScorecardSummary */
  text?: string
}

export type SustainabilityScorecardBaseProps = {
  queryRequest: QueryBundleRequest
  metricsConfig: MetricsConfig[]
  /** Name of the URL search parameter used to filter the data. */
  searchParamKey: string
  /** The name of the column in the table to apply the filter to. */
  filterColumn: string
  scoreDescriptorColumnName: string
}

/**
 * Maps each metric key to its value in the row
 * Returns an array of metric values in the same order as `metricsConfig`
 */
export const getMetricValues = (
  row: Row | undefined,
  queryResultBundle: QueryResultBundle | undefined,
  metricsConfig: MetricsConfig[],
) => {
  if (!row) return []
  return metricsConfig.map(metric => {
    const index = getFieldIndex(metric.key, queryResultBundle)
    return row.values[index] ?? ''
  })
}

export const getSelectedColumns = (
  metricsConfig: MetricsConfig[],
  scoreDescriptorColumnName: string,
): string[] =>
  metricsConfig.map(metric => metric.key).concat(scoreDescriptorColumnName)

/**
 * Creates an array of metric config objects from a QueryResultBundle.
 * @param bundle - The Synapse QueryResultBundle containing metric config data (key, label, summaryText, tooltipText)
 * @param textColumn - The name of the column to use for the `text` field ('summaryText' for the SustainabilityScorecardSummary component and 'tooltipText' for the SustainabilityScorecard component)
 */
export function getMetricConfig(
  bundle: QueryResultBundle | undefined,
  textColumn: 'summaryText' | 'tooltipText',
): MetricsConfig[] {
  const rows = bundle?.queryResult?.queryResults?.rows
  const headers = bundle?.queryResult?.queryResults?.headers
  if (!rows || !headers) return []

  const keyColIndex = getFieldIndex('key', bundle)
  const labelColIndex = getFieldIndex('label', bundle)
  const textColIndex = getFieldIndex(textColumn, bundle)

  return rows.map(row => ({
    key: row.values[keyColIndex] ?? '',
    label: row.values[labelColIndex] ?? '',
    text: row.values[textColIndex] ?? '',
  }))
}

/**
 * Custom hook that returns the provided SustainabilityScorecardProps only if the query returns data.
 * Helps conditionally render `SustainabilityScorecard` component
 * @param props - The props containing the queryRequest, metricsConfig, searchParamKey, filterColumn, and scoreDescriptorColumnName.
 */
export function useSustainabilityScorecardIfHasData(
  props: SustainabilityScorecardProps,
): SustainabilityScorecardProps | undefined {
  const { data: queryResultBundle, isLoading } = useGetQueryResultBundle(
    props.queryRequest,
  )

  const rows = queryResultBundle?.queryResult?.queryResults?.rows
  const hasSustainabilityData = Array.isArray(rows) && rows.length > 0

  if (isLoading || !hasSustainabilityData) {
    return undefined
  }

  return props
}
