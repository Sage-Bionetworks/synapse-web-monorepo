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

const getAllIndividualIDs = async (event: CustomControlCallbackData) => {
  const selectedFacets = event.request?.query.selectedFacets
  const additionalFilters = event.request?.query.additionalFilters
  if (selectedFacets == undefined && additionalFilters == undefined) {
    return undefined
  }
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
        sql: `SELECT individualID FROM ${event.request?.entityId}`,
      },
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    },
    token,
  )
  return queryResultBundle.queryResult?.queryResults.rows.map(
    (row) => row.values[0!]!,
  )!
}

export const handleSelectedParticipantsToFiles = async (
  event: CustomControlCallbackData,
) => {
  // add filter for files perspective, to show files associated to the selected participants only.
  const idColIndex = event.data?.columnModels?.findIndex(
    (cm) => cm.name === 'individualID',
  )
  // if selected rows were defined, then get the ids from the event selected rows.  Otherwise, get ALL ids (across all pages)
  const ids =
    event.selectedRows && event.selectedRows.length > 0
      ? event.selectedRows.map((row) => row.values[idColIndex!]!)
      : await getAllIndividualIDs(event)

  if (ids !== undefined) {
    const sessionStorageFilter: ColumnSingleValueQueryFilter = {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: 'individualID',
      operator: ColumnSingleValueFilterOperator.IN,
      isDefiningCondition: true,
      values: ids,
    }
    sessionStorage.setItem(
      SynapseUtilityFunctions.QUERY_FILTERS_SESSION_STORAGE_KEY(
        'cohort-builder-files-perspective',
      ),
      JSON.stringify([sessionStorageFilter]),
    )
  } else {
    sessionStorage.removeItem(
      SynapseUtilityFunctions.QUERY_FILTERS_SESSION_STORAGE_KEY(
        'cohort-builder-files-perspective',
      ),
    )
  }
  window.location.href = '/Explore/Data by Files'
}
