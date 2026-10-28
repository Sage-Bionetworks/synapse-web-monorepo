import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_FACETS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '@/utils/SynapseConstants'
import { Alert, Typography } from '@mui/material'
import { AggregateDataConfiguration } from '@sage-bionetworks/synapse-client'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import pluralize from 'pluralize'
import { ReactNode, Suspense, useMemo, useState } from 'react'
import { SignInPrompt, SynapseErrorBoundary } from '../error/ErrorBanner'
import { QueryBuilderControls } from '../QueryBuilder/QueryBuilderControls'
import { QBGroup } from '../QueryBuilder/QueryBuilderTypes'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper/QueryVisualizationContext'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper/QueryWrapper'
import QueryWrapperLoadingScreen from '../QueryWrapper/QueryWrapperLoadingScreen'
import { useSuspenseGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'
import { QueryWrapperErrorBoundary } from '../QueryWrapperErrorBoundary'
import PlotsContainer from '../widgets/facet-nav/PlotsContainer'
import styles from './CohortBuilder.module.scss'

/**
 * The Cohort Builder only requests the count and facet statistics: it never shows participant rows, and the server
 * rejects participant row requests from callers with aggregate-only access.
 */
export const COHORT_BUILDER_PART_MASK =
  BUNDLE_MASK_QUERY_COUNT |
  BUNDLE_MASK_QUERY_SELECT_COLUMNS |
  BUNDLE_MASK_QUERY_COLUMN_MODELS |
  BUNDLE_MASK_QUERY_FACETS

export const DEFAULT_COHORT_BUILDER_AUDIT_NOTICE =
  'Queries you run in the Cohort Builder are logged to protect participant privacy.'

export const COHORT_BUILDER_ZERO_COUNT_TEXT = 'No data for the selected cohort'

export const COHORT_BUILDER_PREVIEW_NOTICE =
  'Previewing the results that users with aggregate-only access see.'

export type CohortBuilderProps = {
  /** The participant VirtualTable: one row per participant. */
  participantsTableId: string
  /** Faceted columns to plot, in order. Defaults to every faceted column. */
  facetsToPlot?: string[]
  /** Mapping from column name to the name shown for the column. */
  columnAliases?: Record<string, string>
  /** The singular noun for one row of the participant table. Defaults to "participant". */
  unitDescription?: string
  /** Lets a data manager preview the results that users with aggregate-only access see. */
  aggregateDataPreview?: AggregateDataConfiguration
  /** Notice that queries are logged. Defaults to {@link DEFAULT_COHORT_BUILDER_AUDIT_NOTICE}. */
  auditNotice?: ReactNode
}

/**
 * Builds a cohort of participants with the Query Builder and shows the cohort's participant count and facet plots.
 * Participant rows are never requested. Signed-out users are asked to sign in.
 */
export function CohortBuilder(props: CohortBuilderProps) {
  const {
    participantsTableId,
    facetsToPlot,
    columnAliases,
    unitDescription = 'participant',
    aggregateDataPreview,
    auditNotice = DEFAULT_COHORT_BUILDER_AUDIT_NOTICE,
  } = props
  const { isAuthenticated } = useSynapseContext()

  const initQueryRequest: QueryBundleRequest = useMemo(
    () => ({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      entityId: participantsTableId,
      partMask: COHORT_BUILDER_PART_MASK,
      query: { sql: `SELECT * FROM ${participantsTableId}` },
      aggregateDataPreview,
    }),
    [participantsTableId, aggregateDataPreview],
  )

  if (!isAuthenticated) {
    return (
      <Typography variant="body1" className={styles.state}>
        <SignInPrompt />
      </Typography>
    )
  }

  return (
    // Keyed on the request so that new props reset the query and the Query Builder tree.
    <QueryWrapper
      key={JSON.stringify(initQueryRequest)}
      initQueryRequest={initQueryRequest}
    >
      <QueryVisualizationWrapper
        unitDescription={unitDescription}
        columnAliases={columnAliases}
        defaultShowPlots
      >
        <div className={styles.root}>
          <div className={styles.notices}>
            <Alert severity="info">{auditNotice}</Alert>
            {aggregateDataPreview && (
              <Alert severity="warning">{COHORT_BUILDER_PREVIEW_NOTICE}</Alert>
            )}
          </div>
          <CohortQueryBuilder />
          {/* Only the results are replaced by an error or withheld-result notice, so the cohort stays editable. */}
          <QueryWrapperErrorBoundary>
            <Suspense fallback={<QueryWrapperLoadingScreen />}>
              <CohortResults facetsToPlot={facetsToPlot} />
            </Suspense>
          </QueryWrapperErrorBoundary>
        </div>
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

function CohortQueryBuilder() {
  const [tree, setTree] = useState<QBGroup | null>(null)
  return (
    <SynapseErrorBoundary>
      <Suspense fallback={null}>
        <QueryBuilderControls
          tree={tree}
          onTreeChange={setTree}
          onlyFacetedColumns
        />
      </Suspense>
    </SynapseErrorBoundary>
  )
}

function CohortResults(props: { facetsToPlot?: string[] }) {
  const { data: queryMetadata } = useSuspenseGetQueryMetadata()
  const { unitDescription } = useQueryVisualizationContext()
  const count = queryMetadata.queryCount ?? 0

  if (count === 0) {
    return (
      <Typography variant="headline3" component="p" className={styles.state}>
        {COHORT_BUILDER_ZERO_COUNT_TEXT}
      </Typography>
    )
  }
  return (
    <>
      <Typography variant="headline3" component="p" className={styles.count}>
        {count.toLocaleString()} {pluralize(unitDescription, count)}
      </Typography>
      {/* The Query Builder is the only way to change the cohort. */}
      <PlotsContainer
        facetsToPlot={props.facetsToPlot}
        defaultPlotType="HORIZONTAL_BAR"
        disableFiltering
      />
    </>
  )
}
