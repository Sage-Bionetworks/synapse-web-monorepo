import { QueryResultBundle, Row } from '@sage-bionetworks/synapse-types'
import { getFieldIndex } from '@/utils/functions/queryUtils'

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
  sql: string
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
