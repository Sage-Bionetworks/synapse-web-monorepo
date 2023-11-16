import {
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
} from '@sage-bionetworks/synapse-types'
import {
  SynapseClient,
  SynapseConstants,
  SynapseUtilityFunctions,
} from 'synapse-react-client'
import { CustomControlCallbackData } from 'synapse-react-client/src/components/SynapseTable/TopLevelControls/TopLevelControls'

export const handleFilesToParticipants = async (
  event: CustomControlCallbackData,
) => {
  // add filter for files perspective, to show participants associated to the selected files only.
  const token = await SynapseClient.getAccessTokenFromCookie()

  const queryResultBundle = await SynapseClient.getFullQueryTableResults(
    {
      ...event.request!,
      query: {
        ...event.request?.query,
        sql: `SELECT id FROM ${event.request?.entityId}`,
      },
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    },
    token,
  )

  const localStorageFilter: ColumnSingleValueQueryFilter = {
    concreteType:
      'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
    columnName: 'fileId',
    operator: ColumnSingleValueFilterOperator.IN,
    isDefiningCondition: true,
    values: queryResultBundle.queryResult?.queryResults.rows.map(
      (row) => row.values[0!]!,
    )!,
  }
  localStorage.setItem(
    SynapseUtilityFunctions.QUERY_FILTERS_LOCAL_STORAGE_KEY(
      'cohort-builder-individuals-perspective',
    ),
    // TODO: set additionalFiltersLocalStorageKey to 'cohort-builder-files-perspective' in files perspective of Virtual Table
    JSON.stringify([localStorageFilter]),
  )
  event.refresh()
  window.location.href = '/Explore/Data by Participants'
}

export const handleSelectedFilesToParticipants = (
  event: CustomControlCallbackData,
) => {
  // add filter for files perspective, to show participants associated to the selected files only.
  const idColIndex = event.data?.columnModels?.findIndex(
    (cm) => cm.name === 'id',
  )
  const localStorageFilter: ColumnSingleValueQueryFilter = {
    concreteType:
      'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
    columnName: 'fileId',
    operator: ColumnSingleValueFilterOperator.IN,
    isDefiningCondition: true,
    values: event.selectedRows!.map((row) => row.values[idColIndex!]!),
  }
  localStorage.setItem(
    SynapseUtilityFunctions.QUERY_FILTERS_LOCAL_STORAGE_KEY(
      'cohort-builder-individuals-perspective',
    ),
    // TODO: set additionalFiltersLocalStorageKey to 'cohort-builder-files-perspective' in files perspective of Virtual Table
    JSON.stringify([localStorageFilter]),
  )
  event.refresh()
  window.location.href = '/Explore/Data by Participants'
}
