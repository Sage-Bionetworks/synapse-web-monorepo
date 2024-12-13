import {
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
} from '@sage-bionetworks/synapse-types'
import { CustomControlCallbackData } from 'synapse-react-client/components/SynapseTable/TopLevelControls/TopLevelControls'
import SynapseClient from 'synapse-react-client/synapse-client'
import { QUERY_FILTERS_SESSION_STORAGE_KEY } from 'synapse-react-client/utils/functions/SqlFunctions'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

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
    row => row.values[0]!,
  )!
}

export const handleSelectedParticipantsToFiles = async (
  event: CustomControlCallbackData,
) => {
  // add filter for files perspective, to show files associated to the selected participants only.
  const idColIndex = event.queryMetadata?.columnModels?.findIndex(
    cm => cm.name === 'individualID',
  )
  // if selected rows were defined, then get the ids from the event selected rows.  Otherwise, get ALL ids (across all pages)
  const ids =
    event.selectedRows && event.selectedRows.length > 0
      ? event.selectedRows.map(row => row.values[idColIndex!]!)
      : await getAllIndividualIDs(event)

  if (ids !== undefined) {
    const sessionStorageFilter: ColumnSingleValueQueryFilter = {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: 'individualId',
      operator: ColumnSingleValueFilterOperator.IN,
      isDefiningCondition: true,
      values: ids,
    }
    sessionStorage.setItem(
      QUERY_FILTERS_SESSION_STORAGE_KEY('cohort-builder-files-perspective'),
      JSON.stringify([sessionStorageFilter]),
    )
  } else {
    sessionStorage.removeItem(
      QUERY_FILTERS_SESSION_STORAGE_KEY('cohort-builder-files-perspective'),
    )
  }
  window.location.href = '/Explore/Data'
}
