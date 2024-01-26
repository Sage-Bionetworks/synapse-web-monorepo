import {
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
} from '@sage-bionetworks/synapse-types'
import {
  SynapseClient,
  SynapseConstants,
  SynapseUtilityFunctions,
  CustomControlCallbackData,
} from 'synapse-react-client'

const getAllIDs = async (event: CustomControlCallbackData) => {
  let token: string | undefined = undefined
  try {
    token = await SynapseClient.getAccessTokenFromCookie()
  } catch (err) {
    console.log(err)
  }

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
  return queryResultBundle.queryResult?.queryResults.rows.map(
    (row) => row.values[0!]!,
  )!
}

export const handleSelectedFilesToParticipants = async (
  event: CustomControlCallbackData,
) => {
  // add filter for files perspective, to show participants associated to the selected files only.
  const idColIndex = event.data?.columnModels?.findIndex(
    (cm) => cm.name === 'id',
  )
  // if selected rows were defined, then get the ids from the event selected rows.  Otherwise, get ALL ids (across all pages)
  const ids =
    event.selectedRows && event.selectedRows.length > 0
      ? event.selectedRows.map((row) => row.values[idColIndex!]!)
      : await getAllIDs(event)
  const sessionStorageFilter: ColumnSingleValueQueryFilter = {
    concreteType:
      'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
    columnName: 'fileId',
    operator: ColumnSingleValueFilterOperator.IN,
    isDefiningCondition: true,
    values: ids,
  }
  sessionStorage.setItem(
    SynapseUtilityFunctions.QUERY_FILTERS_SESSION_STORAGE_KEY(
      'cohort-builder-individuals-perspective',
    ),
    // TODO: set additionalFiltersSessionStorageKey to 'cohort-builder-files-perspective' in files perspective of Virtual Table
    JSON.stringify([sessionStorageFilter]),
  )
  event.refresh()
  window.location.href = '/Explore/Data by Participants'
}
