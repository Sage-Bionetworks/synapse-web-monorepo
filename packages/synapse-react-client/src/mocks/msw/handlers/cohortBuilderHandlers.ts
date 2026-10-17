import {
  CohortBuilderMockProfile,
  DATA_REFERENCE_COLUMN_NAME,
  ELITE_MOCK_PROFILE,
  PARTICIPANT_COUNT_COLUMN_NAME,
  PARTICIPANT_ID_COLUMN_NAME,
  REFERENCE_TYPE_COLUMN_NAME,
  STUDY_COLUMN_NAME,
} from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import {
  CohortBuilderAccess,
  CohortBuilderQueryBundleRequest,
  getCohortBuilderColumnModels,
  runCohortBuilderMockQuery,
} from '@/mocks/cohortBuilder/cohortBuilderMockQueryEngine'
import {
  CohortBuilderSyntheticData,
  createCohortBuilderSyntheticData,
} from '@/mocks/cohortBuilder/cohortBuilderSyntheticData'
import {
  ENTITY_ID,
  TABLE_QUERY_ASYNC_GET,
  TABLE_QUERY_ASYNC_START,
} from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { VirtualTable } from '@sage-bionetworks/synapse-types'
import { http, HttpHandler, HttpResponse } from 'msw'
import {
  AsyncJobFailure,
  dispatchEntry,
  generateAsyncJobHandlers,
} from './asyncJobHandlers'

const MOCK_MATERIAL_VIEW_ID = 'syn_MATERIAL'

const syntheticDataByProfile = new Map<
  CohortBuilderMockProfile,
  CohortBuilderSyntheticData
>()

/** Synthetic data for a profile, generated once per profile and reused across handlers. */
export function getCohortBuilderSyntheticData(
  profile: CohortBuilderMockProfile,
): CohortBuilderSyntheticData {
  let data = syntheticDataByProfile.get(profile)
  if (!data) {
    data = createCohortBuilderSyntheticData(profile)
    syntheticDataByProfile.set(profile, data)
  }
  return data
}

function getVirtualTableEntities(
  data: CohortBuilderSyntheticData,
): VirtualTable[] {
  const { profile, dataAttributeNames } = data
  const columnModels = getCohortBuilderColumnModels(data)
  const participantColumns = [
    PARTICIPANT_ID_COLUMN_NAME,
    STUDY_COLUMN_NAME,
    ...profile.participantAttributes.map(attribute => attribute.name),
  ].join(', ')
  const dataAttributeLists = dataAttributeNames
    .map(
      name =>
        `CAST(CONCAT('[', GROUP_CONCAT(DISTINCT CONCAT('"', ${name}, '"')), ']') AS <STRING_LIST column>) AS ${name}`,
    )
    .join(', ')
  const dataColumns = [
    REFERENCE_TYPE_COLUMN_NAME,
    STUDY_COLUMN_NAME,
    ...dataAttributeNames,
  ].join(', ')
  const virtualTable = (
    id: string,
    name: string,
    definingSQL: string,
    columnIds: string[],
  ): VirtualTable => ({
    id,
    name,
    concreteType: 'org.sagebionetworks.repo.model.table.VirtualTable',
    parentId: 'syn90000000',
    etag: '00000000-0000-0000-0000-000000000000',
    createdOn: '2026-10-01T00:00:00.000Z',
    modifiedOn: '2026-10-01T00:00:00.000Z',
    createdBy: '0',
    modifiedBy: '0',
    versionNumber: 1,
    versionLabel: 'in progress',
    isLatestVersion: true,
    isSearchEnabled: false,
    definingSQL,
    columnIds,
  })
  return [
    virtualTable(
      profile.participantsVirtualTableId,
      `${profile.portalName} Cohort Builder Participants (synthetic)`,
      `SELECT ${participantColumns}, ${dataAttributeLists} FROM ${MOCK_MATERIAL_VIEW_ID} GROUP BY ${participantColumns}`,
      columnModels.participants.map(column => column.id!),
    ),
    virtualTable(
      profile.dataVirtualTableId,
      `${profile.portalName} Cohort Builder Files and Datasets (synthetic)`,
      `SELECT ${DATA_REFERENCE_COLUMN_NAME} AS id, name, ${dataColumns}, COUNT(DISTINCT ${PARTICIPANT_ID_COLUMN_NAME}) AS ${PARTICIPANT_COUNT_COLUMN_NAME} FROM ${MOCK_MATERIAL_VIEW_ID} GROUP BY ${DATA_REFERENCE_COLUMN_NAME}, name, ${dataColumns}`,
      columnModels.dataReferences.map(column => column.id!),
    ),
  ]
}

export type CohortBuilderHandlersOptions = {
  profile?: CohortBuilderMockProfile
  access?: CohortBuilderAccess
  backendOrigin?: string
}

/**
 * MSW handlers that emulate the Cohort Builder 2.0 VirtualTables (participant
 * and file/dataset perspectives) over synthetic data, including the
 * AGGREGATE_DATA behavior an unapproved caller sees.
 */
export function getCohortBuilderHandlers(
  options: CohortBuilderHandlersOptions = {},
): HttpHandler[] {
  const {
    profile = ELITE_MOCK_PROFILE,
    access = 'AGGREGATE_ONLY',
    backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  } = options
  const data = getCohortBuilderSyntheticData(profile)

  const entityHandlers = getVirtualTableEntities(data).map(entity =>
    http.get(`${backendOrigin}${ENTITY_ID(entity.id!)}`, () =>
      HttpResponse.json(entity),
    ),
  )

  const queryHandlers = [
    profile.participantsVirtualTableId,
    profile.dataVirtualTableId,
  ].flatMap(entityId =>
    generateAsyncJobHandlers(
      dispatchEntry(
        'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        request => {
          const result = runCohortBuilderMockQuery(
            data,
            request as unknown as CohortBuilderQueryBundleRequest,
            access,
          )
          return result.status === 200
            ? result.body
            : new AsyncJobFailure(result.status, result.body)
        },
      ),
      {
        asyncTypeServicePaths: {
          requestPath: TABLE_QUERY_ASYNC_START(entityId),
          responsePath: tokenParam =>
            TABLE_QUERY_ASYNC_GET(entityId, tokenParam),
        },
        backendOrigin,
      },
    ),
  )

  return [...entityHandlers, ...queryHandlers]
}
