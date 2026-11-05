import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_FACETS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '@/utils/SynapseConstants'
import { Alert, Typography } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import pluralize from 'pluralize'
import { ReactNode, Suspense, useMemo, useState } from 'react'
import { SignInPrompt, SynapseErrorBoundary } from '../error/ErrorBanner'
import { QueryBuilderControls } from '../QueryBuilder/QueryBuilderControls'
import { QBGroup, QBGroupDefinition } from '../QueryBuilder/QueryBuilderTypes'
import { useQueryContext } from '../QueryContext/QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper/QueryVisualizationContext'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper/QueryWrapper'
import QueryWrapperLoadingScreen from '../QueryWrapper/QueryWrapperLoadingScreen'
import { useSuspenseGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'
import { QueryWrapperErrorBoundary } from '../QueryWrapperErrorBoundary'
import PlotsContainer from '../widgets/facet-nav/PlotsContainer'
import { AggregateDataPreviewControls } from './AggregateDataPreviewControls'
import styles from './CohortBuilder.module.scss'
import { CohortFilesPanel } from './CohortFilesPanel'
import { CohortDiscoveryBanner } from './CohortDiscoveryBanner'
import { CohortSampleQuerySelector } from './CohortSampleQuerySelector'

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
  /**
   * The AGGREGATE_DATA source table that the participant VirtualTable derives from. When set, users with the
   * Administrator permission on it can preview the results that users with aggregate-only access see.
   */
  participantsSourceTableId?: string
  /**
   * The Files/Datasets VirtualTable. When set, the files and datasets of the cohort are listed below its plots, using
   * the cohort as a request-scoped cohort.
   */
  filesTableId?: string
  /** Faceted columns to plot, in order. Defaults to every faceted column. */
  facetsToPlot?: string[]
  /** Mapping from column name to the name shown for the column. */
  columnAliases?: Record<string, string>
  /** The singular noun for one row of the participant table. Defaults to "participant". */
  unitDescription?: string
  /** Notice that queries are logged. Defaults to {@link DEFAULT_COHORT_BUILDER_AUDIT_NOTICE}. */
  auditNotice?: ReactNode
  /** Sample queries, by name, that users can load into the Query Builder. Listed in insertion order. */
  sampleQueries?: Record<string, QBGroupDefinition>
}

/**
 * Builds a cohort of participants with the Query Builder and shows the cohort's participant count and facet plots,
 * and optionally its files and datasets. Participant rows are never requested. Signed-out users are asked to sign in.
 */
export function CohortBuilder(props: CohortBuilderProps) {
  const {
    participantsTableId,
    participantsSourceTableId,
    filesTableId,
    facetsToPlot,
    columnAliases,
    unitDescription = 'participant',
    auditNotice = DEFAULT_COHORT_BUILDER_AUDIT_NOTICE,
    sampleQueries,
  } = props
  const { isAuthenticated } = useSynapseContext()

  const initQueryRequest: QueryBundleRequest = useMemo(
    () => ({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      entityId: participantsTableId,
      partMask: COHORT_BUILDER_PART_MASK,
      query: { sql: `SELECT * FROM ${participantsTableId}` },
    }),
    [participantsTableId],
  )

  if (!isAuthenticated) {
    return (
      <div className={styles.root}>
        <CohortDiscoveryBanner />
        <Typography variant="body1" className={styles.state}>
          <SignInPrompt />
        </Typography>
      </div>
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
          <CohortDiscoveryBanner />
          <div className={styles.notices}>
            <Alert severity="info">{auditNotice}</Alert>
            <CohortPreviewNotice />
          </div>
          {participantsSourceTableId && (
            <AggregateDataPreviewControls
              sourceTableId={participantsSourceTableId}
            />
          )}
          <CohortQueryBuilder sampleQueries={sampleQueries} />
          {/* Only the results are replaced by an error or withheld-result notice, so the cohort stays editable. */}
          <QueryWrapperErrorBoundary>
            <Suspense fallback={<QueryWrapperLoadingScreen />}>
              <CohortResults
                facetsToPlot={facetsToPlot}
                participantsTableId={participantsTableId}
                filesTableId={filesTableId}
              />
            </Suspense>
          </QueryWrapperErrorBoundary>
        </div>
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

function CohortPreviewNotice() {
  const { currentQueryRequest } = useQueryContext()
  if (!currentQueryRequest.aggregateDataPreview) {
    return null
  }
  return <Alert severity="warning">{COHORT_BUILDER_PREVIEW_NOTICE}</Alert>
}

function CohortQueryBuilder(props: {
  sampleQueries?: Record<string, QBGroupDefinition>
}) {
  const { sampleQueries } = props
  const [tree, setTree] = useState<QBGroup | null>(null)
  // The Query Builder's value options are queried with the current request, so changing it (e.g. stopping an
  // aggregate-only preview whose threshold withheld them) can clear the error.
  const { currentQueryRequest } = useQueryContext()
  return (
    <SynapseErrorBoundary resetKeys={[currentQueryRequest]}>
      <Suspense fallback={null}>
        {sampleQueries && Object.keys(sampleQueries).length > 0 && (
          <CohortSampleQuerySelector
            sampleQueries={sampleQueries}
            tree={tree}
            onTreeChange={setTree}
          />
        )}
        <QueryBuilderControls
          tree={tree}
          onTreeChange={setTree}
          onlyFacetedColumns
        />
      </Suspense>
    </SynapseErrorBoundary>
  )
}

function CohortResults(props: {
  facetsToPlot?: string[]
  participantsTableId: string
  filesTableId?: string
}) {
  const { facetsToPlot, participantsTableId, filesTableId } = props
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
        facetsToPlot={facetsToPlot}
        defaultPlotType="HORIZONTAL_BAR"
        disableFiltering
      />
      {filesTableId && (
        <CohortFilesPanel
          filesTableId={filesTableId}
          participantsTableId={participantsTableId}
        />
      )}
    </>
  )
}
