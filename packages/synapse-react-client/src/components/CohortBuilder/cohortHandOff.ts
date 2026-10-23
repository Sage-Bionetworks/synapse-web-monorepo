import {
  COLUMN_COHORT_FILTER_CONCRETE_TYPE_VALUE,
  CohortDefinition,
  ColumnCohortFilter,
  Query,
} from '@sage-bionetworks/synapse-types'

/** Name of the request-scoped cohort that carries the participant cohort into the Files/Datasets query. */
export const COHORT_NAME = 'c1'

/**
 * The participant identifier: a column of the participant VirtualTable and of the Files/Datasets VirtualTable's
 * source. For callers with aggregate-only access it must be a quasi-identifier of that source.
 */
export const COHORT_PARTICIPANT_ID_COLUMN_NAME = 'individualId'

/**
 * The most participants a cohort can hold: the stack default of `org.sagebionetworks.table.query.cohort.max.values`.
 * The server rejects a larger cohort with COHORT_TOO_LARGE.
 */
export const MAX_COHORT_PARTICIPANTS = 10_000

export type CohortHandOff = {
  cohort: CohortDefinition
  /** References the cohort as a defining condition, so it applies to the rows the Files/Datasets VirtualTable groups. */
  filter: ColumnCohortFilter
}

/**
 * Builds the cohort that carries the participant query's filters into the Files/Datasets query, and the filter that
 * references it. Returns undefined when the participant query has no filters, because the cohort would be every
 * participant. Sort, limit and offset are never copied: the server rejects them in a cohort query.
 */
export function buildCohortHandOff(
  participantQuery: Query,
  participantsTableId: string,
): CohortHandOff | undefined {
  const { additionalFilters, selectedFacets } = participantQuery
  if (!additionalFilters?.length && !selectedFacets?.length) {
    return undefined
  }
  return {
    cohort: {
      name: COHORT_NAME,
      query: {
        sql: `SELECT ${COHORT_PARTICIPANT_ID_COLUMN_NAME} FROM ${participantsTableId}`,
        additionalFilters,
        selectedFacets,
      },
    },
    filter: {
      concreteType: COLUMN_COHORT_FILTER_CONCRETE_TYPE_VALUE,
      columnName: COHORT_PARTICIPANT_ID_COLUMN_NAME,
      cohortName: COHORT_NAME,
      isDefiningCondition: true,
    },
  }
}
