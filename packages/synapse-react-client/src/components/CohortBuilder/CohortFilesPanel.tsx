import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_FACETS,
  BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE,
  BUNDLE_MASK_QUERY_RESULTS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
  DEFAULT_PAGE_SIZE,
} from '@/utils/SynapseConstants'
import { Typography } from '@mui/material'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { PropsWithChildren, Suspense, useId, useMemo } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import AddToDownloadListConfirmationAlert from '../download_list/AddToDownloadListConfirmationAlert/AddToDownloadListConfirmationAlert'
import { ErrorBanner, SynapseErrorBoundary } from '../error/ErrorBanner'
import { useQueryContext } from '../QueryContext/QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper/QueryVisualizationContext'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import {
  AggregateQueryErrorNotice,
  getAggregateQueryError,
} from '../QueryWrapper/AggregateQueryErrorNotice'
import { QueryWrapper } from '../QueryWrapper/QueryWrapper'
import { useGetAddToDownloadListRequestForCurrentQuery } from '../QueryWrapper/useGetAddToDownloadListRequestForCurrentQuery'
import { useSuspenseGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'
import { RowSetView } from '../QueryWrapperPlotNav/RowSetView'
import TopLevelControls from '../SynapseTable/TopLevelControls/TopLevelControls'
import styles from './CohortBuilder.module.scss'
import { buildCohortHandOff, MAX_COHORT_PARTICIPANTS } from './cohortHandOff'

export const COHORT_FILES_PART_MASK =
  BUNDLE_MASK_QUERY_RESULTS |
  BUNDLE_MASK_QUERY_COUNT |
  BUNDLE_MASK_QUERY_SELECT_COLUMNS |
  BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE |
  BUNDLE_MASK_QUERY_COLUMN_MODELS |
  BUNDLE_MASK_QUERY_FACETS

export const COHORT_FILES_TITLE = 'Files and datasets'
export const COHORT_FILES_ZERO_COUNT_TEXT =
  'No files or datasets for the selected cohort'
export const COHORT_TOO_LARGE_TEXT = `This cohort is too large to list its files and datasets. Narrow it to ${MAX_COHORT_PARTICIPANTS.toLocaleString()} participants or fewer.`
const FILES_AND_DATASETS = 'files and datasets'

export type CohortFilesPanelProps = {
  /** The Files/Datasets VirtualTable: one row per file or dataset, grouped from the participant ⋈ file/dataset rows. */
  filesTableId: string
  /** The participant VirtualTable that the cohort is selected from. */
  participantsTableId: string
}

/**
 * Lists the files and datasets of the participant cohort in the enclosing QueryWrapper (the participant query). The
 * cohort is sent as a request-scoped cohort, so participant identifiers never reach the browser.
 */
export function CohortFilesPanel(props: CohortFilesPanelProps) {
  const { filesTableId, participantsTableId } = props
  const titleId = useId()
  const { getCurrentQueryRequest } = useQueryContext()
  const { data: participantMetadata } = useSuspenseGetQueryMetadata()

  const handOff = useMemo(
    () =>
      buildCohortHandOff(getCurrentQueryRequest().query, participantsTableId),
    [getCurrentQueryRequest, participantsTableId],
  )
  const filesRequest: QueryBundleRequest = useMemo(
    () => ({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      entityId: filesTableId,
      partMask: COHORT_FILES_PART_MASK,
      query: {
        sql: `SELECT * FROM ${filesTableId}`,
        limit: DEFAULT_PAGE_SIZE,
        cohorts: handOff ? [handOff.cohort] : undefined,
        additionalFilters: handOff ? [handOff.filter] : undefined,
      },
    }),
    [filesTableId, handOff],
  )

  // The participant count is exact, so a cohort the server would reject as too large is not sent.
  const isCohortTooLarge =
    handOff !== undefined &&
    (participantMetadata.queryCount ?? 0) > MAX_COHORT_PARTICIPANTS

  return (
    <section aria-labelledby={titleId}>
      <Typography variant="headline2" id={titleId}>
        {COHORT_FILES_TITLE}
      </Typography>
      {isCohortTooLarge ? (
        <Typography variant="body1" className={styles.state}>
          {COHORT_TOO_LARGE_TEXT}
        </Typography>
      ) : (
        // Keyed on the request so a new cohort resets the files query, its paging and its filters.
        <QueryWrapper
          key={JSON.stringify(filesRequest)}
          initQueryRequest={filesRequest}
        >
          {/* The files query is derived from the cohort, so it can't be searched, shared as a link, or re-run from SQL. */}
          <QueryVisualizationWrapper
            unitDescription="file"
            hideSearchBarControl
            hideCopyToClipboard
          >
            <CohortFilesErrorBoundary>
              <Suspense fallback={null}>
                <CohortFilesResults />
              </Suspense>
            </CohortFilesErrorBoundary>
          </QueryVisualizationWrapper>
        </QueryWrapper>
      )}
    </section>
  )
}

function CohortFilesErrorFallback({ error }: FallbackProps) {
  if (
    error instanceof SynapseClientError &&
    error.errorResponse &&
    'errorCode' in error.errorResponse &&
    error.errorResponse.errorCode === 'COHORT_TOO_LARGE'
  ) {
    return (
      <Typography variant="body1" className={styles.state}>
        {COHORT_TOO_LARGE_TEXT}
      </Typography>
    )
  }
  // A participant cohort that passed its own threshold can still match fewer files and datasets than the threshold.
  const aggregateQueryError = getAggregateQueryError(error)
  if (aggregateQueryError) {
    return (
      <AggregateQueryErrorNotice
        error={aggregateQueryError}
        pluralUnitDescription={FILES_AND_DATASETS}
      />
    )
  }
  return <ErrorBanner error={error} />
}

/** Resets when the files query changes, e.g. when a table column filter is applied. */
function CohortFilesErrorBoundary(props: PropsWithChildren) {
  const { currentQueryRequest } = useQueryContext()
  return (
    <ErrorBoundary
      FallbackComponent={CohortFilesErrorFallback}
      resetKeys={[currentQueryRequest]}
    >
      {props.children}
    </ErrorBoundary>
  )
}

function CohortFilesResults() {
  const { data: filesMetadata } = useSuspenseGetQueryMetadata()
  const count = filesMetadata.queryCount ?? 0
  if (count === 0) {
    return (
      <Typography variant="body1" className={styles.state}>
        {COHORT_FILES_ZERO_COUNT_TEXT}
      </Typography>
    )
  }
  return (
    <>
      <Typography variant="body1" className={styles.count}>
        {count.toLocaleString()}{' '}
        {count === 1 ? 'file or dataset' : FILES_AND_DATASETS}
      </Typography>
      <SynapseErrorBoundary>
        {/* Programmatic options are hidden: their code carries only the SQL, which can't express the cohort. */}
        <TopLevelControls
          hideQueryCount
          hideFacetFilterControl
          hideVisualizationsControl
          hideProgrammaticOptionsMenuItem
        />
      </SynapseErrorBoundary>
      <CohortFilesDownloadConfirmation />
      <RowSetView tableConfiguration={{}} hideDownload />
    </>
  )
}

/** Adds the files of the cohort's files query, which carries the cohort, to the Download List. */
function CohortFilesDownloadConfirmation() {
  const { showDownloadConfirmation, setShowDownloadConfirmation } =
    useQueryVisualizationContext()
  const addToDownloadListRequest =
    useGetAddToDownloadListRequestForCurrentQuery()
  if (!showDownloadConfirmation) {
    return null
  }
  return (
    <AddToDownloadListConfirmationAlert
      addToDownloadListRequest={addToDownloadListRequest}
      onClose={() => setShowDownloadConfirmation(false)}
    />
  )
}
