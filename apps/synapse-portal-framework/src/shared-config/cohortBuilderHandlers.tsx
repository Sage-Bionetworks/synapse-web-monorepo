import {
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
} from '@sage-bionetworks/synapse-types'
import {
  SynapseClient,
  SynapseUtilityFunctions,
  CustomControlCallbackData,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { CustomControl } from 'synapse-react-client/components/SynapseTable/TopLevelControls/TopLevelControls'

const getAllIDs = async (event: CustomControlCallbackData) => {
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
        sql: `SELECT id FROM ${event.request?.entityId}`,
      },
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    },
    token,
  )
  return queryResultBundle.queryResult?.queryResults.rows.map(
    row => row.values[0]!,
  )!
}

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

export const handleSelectedFilesToParticipants = async (
  event: CustomControlCallbackData,
  individualsPath: string = '/Explore/Cohort Builder/Individuals',
) => {
  // add filter for files perspective, to show participants associated to the selected files only.
  const idColIndex = event.queryMetadata?.columnModels?.findIndex(
    cm => cm.name === 'id',
  )
  // if selected rows were defined, then get the ids from the event selected rows.  Otherwise, get ALL ids (across all pages)
  const ids =
    event.selectedRows && event.selectedRows.length > 0
      ? event.selectedRows.map(row => row.values[idColIndex!]!)
      : await getAllIDs(event)
  if (ids !== undefined) {
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
      JSON.stringify([sessionStorageFilter]),
    )
  } else {
    sessionStorage.removeItem(
      SynapseUtilityFunctions.QUERY_FILTERS_SESSION_STORAGE_KEY(
        'cohort-builder-individuals-perspective',
      ),
    )
  }
  // Use window.location.href instead of react-router navigate to trigger a full page reload.
  // The reload is necessary to ensure the component loads the filters from sessionStorage.
  window.location.href = individualsPath
}

export const handleSelectedParticipantsToFiles = async (
  event: CustomControlCallbackData,
  filesPath: string = '/Explore/Cohort Builder/Data',
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
  // Use window.location.href instead of react-router navigate to trigger a full page reload.
  // The reload is necessary to ensure the component loads the filters from sessionStorage.
  window.location.href = filesPath
}

/**
 * Factory function to create a custom control for viewing associated participants.
 * @param individualsPath - The path to navigate to when viewing participants (default: '/Explore/Cohort Builder/Individuals')
 */
export const createViewAssociatedParticipantsCustomControl = (
  individualsPath: string = '/Explore/Cohort Builder/Individuals',
): CustomControl => ({
  buttonText: 'View associated participants',
  onClick: event => {
    handleSelectedFilesToParticipants(event, individualsPath)
  },
  title: 'Refining & Exporting Data',
  description:
    'Fine-tune your results using dataset or file-level filters. Once ready, add your files to the download cart or transfer them directly to an analysis platform. To adjust your source cohort, select "View participants" to return to the participant records associated with your current file selection.',
})

/**
 * Factory function to create a custom control for viewing associated files.
 * @param filesPath - The path to navigate to when viewing files (default: '/Explore/Cohort Builder/Data')
 */
export const createViewAssociatedFilesCustomControl = (
  filesPath: string = '/Explore/Cohort Builder/Data',
): CustomControl => ({
  buttonText: 'View associated files',
  onClick: event => {
    handleSelectedParticipantsToFiles(event, filesPath)
  },
  buttonID: 'ViewAllFilesButton',
  title: 'Cohort Discovery',
  description:
    'Use the Cohort Builder to define your custom research cohort. Filter for human research participants based on demographic or clinical attributes, browse their associated data files, then refine your selection using specific dataset or file-level properties. Once you have identified the data you need, add the files to your download cart or send results to an analysis platform. ',
})

/**
 * @deprecated Use createViewAssociatedParticipantsCustomControl() instead. This will be removed in a future version.
 */
export const viewAssociatedParticipantsCustomControl: CustomControl =
  createViewAssociatedParticipantsCustomControl()

/**
 * @deprecated Use createViewAssociatedFilesCustomControl() instead. This will be removed in a future version.
 */
export const viewAssociatedFilesCustomControl: CustomControl =
  createViewAssociatedFilesCustomControl()
