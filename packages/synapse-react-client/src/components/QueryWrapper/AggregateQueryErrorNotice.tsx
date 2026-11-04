import { Box, Typography } from '@mui/material'
import {
  BelowThresholdErrorResponse,
  instanceOfBelowThresholdErrorResponse,
} from '@sage-bionetworks/synapse-client/generated/models/BelowThresholdErrorResponse'
import {
  instanceOfRowSuppressionErrorResponse,
  RowSuppressionErrorResponse,
} from '@sage-bionetworks/synapse-client/generated/models/RowSuppressionErrorResponse'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import pluralize from 'pluralize'
import { useContext } from 'react'
import { QueryVisualizationContext } from '../QueryVisualizationWrapper/QueryVisualizationContext'

export type AggregateQueryError =
  | BelowThresholdErrorResponse
  | RowSuppressionErrorResponse

/**
 * Returns the server's error body when a table query was withheld because the caller has aggregate-only access: the
 * number of matching rows was below the suppression threshold (BELOW_THRESHOLD), or row results were requested
 * (ROW_SUPPRESSED). Returns undefined for any other error.
 */
export function getAggregateQueryError(
  error: unknown,
): AggregateQueryError | undefined {
  if (!(error instanceof SynapseClientError) || !error.errorResponse) {
    return undefined
  }
  const body: object = error.errorResponse
  return instanceOfBelowThresholdErrorResponse(body) ||
    instanceOfRowSuppressionErrorResponse(body)
    ? body
    : undefined
}

function getNoticeText(error: AggregateQueryError, units: string) {
  if (instanceOfBelowThresholdErrorResponse(error)) {
    const threshold = error.suppressionThreshold
    return {
      title:
        threshold === undefined
          ? `Too few ${units} match these filters`
          : `A minimum of ${threshold.toLocaleString()} ${units} is required`,
      description: `Broaden your filters to include more ${units}.`,
    }
  }
  return {
    title: 'Individual records are not available',
    description:
      'Your access to this data is limited to counts and charts, so individual records cannot be shown.',
  }
}

export type AggregateQueryErrorNoticeProps = {
  error: AggregateQueryError
  /** What the queried rows are, in the plural (e.g. "files and datasets"). Defaults to the pluralized unitDescription. */
  pluralUnitDescription?: string
}

/**
 * Explains a table query result that the server withheld from a caller with aggregate-only access. It is a normal
 * state, not an error: the query is valid, and the caller can adjust it.
 */
export function AggregateQueryErrorNotice(
  props: AggregateQueryErrorNoticeProps,
) {
  // Read the context directly: the notice can render outside a QueryVisualizationWrapper (e.g. from an ErrorBanner).
  const unitDescription =
    useContext(QueryVisualizationContext)?.unitDescription ?? 'result'
  const { title, description } = getNoticeText(
    props.error,
    props.pluralUnitDescription ?? pluralize(unitDescription),
  )
  return (
    <Box role="status" sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="headline3" component="p">
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {description}
      </Typography>
    </Box>
  )
}
