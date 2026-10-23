import {
  CohortBuilderMockProfile,
  DATA_REFERENCE_COLUMN_NAME,
  ELITE_MOCK_PROFILE,
  PARTICIPANT_ID_COLUMN_NAME,
  REFERENCE_TYPE_COLUMN_NAME,
  STUDY_COLUMN_NAME,
} from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import {
  CohortBuilderAccess,
  CohortBuilderMockQueryOptions,
  getCohortBuilderColumnModels,
  runCohortBuilderMockQuery,
} from '@/mocks/cohortBuilder/cohortBuilderMockQueryEngine'
import {
  CohortBuilderSyntheticData,
  createCohortBuilderSyntheticData,
} from '@/mocks/cohortBuilder/cohortBuilderSyntheticData'
import {
  ENTITY_HEADERS,
  ENTITY_ID,
  TABLE_QUERY_ASYNC_GET,
  TABLE_QUERY_ASYNC_START,
} from '@/utils/APIConstants'
import { BUNDLE_MASK_QUERY_COUNT } from '@/utils/SynapseConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
  MOCK_REPO_ORIGIN,
} from '@/utils/functions/getEndpoint'
import {
  AddBatchOfFilesToDownloadListRequest,
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  EntityHeader,
  Query,
  QueryBundleRequest,
  Reference,
  VirtualTable,
} from '@sage-bionetworks/synapse-types'
import { http, HttpHandler, HttpResponse } from 'msw'
import {
  AsyncJobFailure,
  dispatchEntry,
  generateAsyncJobHandlers,
} from './asyncJobHandlers'
import { getEntityHandlers } from './entityHandlers'

const MOCK_MATERIAL_VIEW_ID = 'syn_MATERIAL'

const DOWNLOAD_LIST_ADD_ASYNC_START = '/repo/v1/download/list/add/async/start'
const DOWNLOAD_LIST_ADD_ASYNC_GET = (token: string) =>
  `/repo/v1/download/list/add/async/get/${token}`
const DOWNLOAD_LIST_ADD_STATS_ASYNC_START =
  '/repo/v1/download/list/add/stats/async/start'
const DOWNLOAD_LIST_ADD_STATS_ASYNC_GET = (token: string) =>
  `/repo/v1/download/list/add/stats/async/get/${token}`
const DOWNLOAD_LIST_ADD_BATCH = '/repo/v1/download/list/add'

/** Synthetic files have no file handles; each is reported at this size in Download List statistics. */
export const MOCK_COHORT_FILE_SIZE_BYTES = 10 * 1024 * 1024

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
      `SELECT ${DATA_REFERENCE_COLUMN_NAME} AS id, name, ${dataColumns} FROM ${MOCK_MATERIAL_VIEW_ID} GROUP BY ${DATA_REFERENCE_COLUMN_NAME}, name, ${dataColumns}`,
      columnModels.dataReferences.map(column => column.id!),
    ),
  ]
}

export type CohortBuilderHandlersOptions = CohortBuilderMockQueryOptions & {
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
    maxCohortValues,
    backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  } = options
  const data = getCohortBuilderSyntheticData(profile)

  const entityHandlers = getVirtualTableEntities(data).map(entity =>
    http.get(`${backendOrigin}${ENTITY_ID(entity.id!)}`, () =>
      HttpResponse.json(entity),
    ),
  )

  // Headers for the synthetic files and datasets; other references fall through to the next handler.
  const entityHeaderHandler = http.post(
    `${backendOrigin}${ENTITY_HEADERS}`,
    async ({ request }) => {
      const { references } = (await request.clone().json()) as {
        references: Reference[]
      }
      const results = references.flatMap((reference): EntityHeader[] => {
        const syntheticReference = data.references.get(reference.targetId)
        return syntheticReference
          ? [
              {
                id: syntheticReference.id,
                name: syntheticReference.name,
                type:
                  syntheticReference.referenceType === 'FILE'
                    ? 'org.sagebionetworks.repo.model.FileEntity'
                    : 'org.sagebionetworks.repo.model.table.Dataset',
                versionNumber: 1,
                isLatestVersion: true,
                benefactorId: 90000000,
                createdOn: '2026-10-01T00:00:00.000Z',
                modifiedOn: '2026-10-01T00:00:00.000Z',
                createdBy: '0',
                modifiedBy: '0',
              },
            ]
          : []
      })
      return results.length > 0 ? HttpResponse.json({ results }) : undefined
    },
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
            // The async-job mocks type request bodies with the generated client models; the engine uses the legacy
            // QueryBundleRequest, whose shape matches what the client sends.
            request as unknown as QueryBundleRequest,
            access,
            { maxCohortValues },
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

  // Counts a Files/Datasets query's rows as this caller sees them, optionally only the file rows.
  function countDataRows(
    requestQuery: unknown,
    onlyFiles: boolean,
  ): number | AsyncJobFailure {
    // The async-job mocks type request bodies with the generated client models; the engine uses the legacy Query,
    // whose shape (including cohorts) matches what the client sends.
    const query = requestQuery as Query
    const fileFilter: ColumnSingleValueQueryFilter = {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: REFERENCE_TYPE_COLUMN_NAME,
      operator: ColumnSingleValueFilterOperator.EQUAL,
      values: ['FILE'],
    }
    const result = runCohortBuilderMockQuery(
      data,
      {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId: profile.dataVirtualTableId,
        partMask: BUNDLE_MASK_QUERY_COUNT,
        query: onlyFiles
          ? {
              ...query,
              additionalFilters: [
                ...(query.additionalFilters ?? []),
                fileFilter,
              ],
            }
          : query,
      },
      access,
      { maxCohortValues },
    )
    // A count-only request returns a bundle with queryCount; anything else is an error body.
    return 'queryCount' in result.body
      ? (result.body.queryCount ?? 0)
      : new AsyncJobFailure(result.status, result.body)
  }

  // As on the server: the statistics count every row of the query, but only files are added. Datasets are skipped
  // until the server adds a dataset's files instead (PLFM-9997). Adding a VirtualTable query needs a version column,
  // which these tables don't have, unless the current versions are requested.
  const downloadListHandlers = [
    ...generateAsyncJobHandlers(
      dispatchEntry(
        'org.sagebionetworks.repo.model.download.AddToDownloadListStatsRequest',
        request => {
          const fileCount = countDataRows(request.request?.query, false)
          const filesOnly = countDataRows(request.request?.query, true)
          if (fileCount instanceof AsyncJobFailure) return fileCount
          if (filesOnly instanceof AsyncJobFailure) return filesOnly
          return {
            concreteType:
              'org.sagebionetworks.repo.model.download.AddToDownloadListStatsResponse',
            fileCount,
            fileSize: filesOnly * MOCK_COHORT_FILE_SIZE_BYTES,
            isFileCountAndSizeEstimate: false,
          }
        },
      ),
      {
        asyncTypeServicePaths: {
          requestPath: DOWNLOAD_LIST_ADD_STATS_ASYNC_START,
          responsePath: DOWNLOAD_LIST_ADD_STATS_ASYNC_GET,
        },
        backendOrigin,
      },
    ),
    ...generateAsyncJobHandlers(
      dispatchEntry(
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        request => {
          if (
            request.useVersionNumber !== false &&
            request.query?.selectFileVersionColumn === undefined
          ) {
            return new AsyncJobFailure(400, {
              concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
              reason: `'${profile.dataVirtualTableId}' is not a file view or a dataset, the query.selectFileVersionColumn must be specified`,
            })
          }
          const numberOfFilesAdded = countDataRows(request.query, true)
          return numberOfFilesAdded instanceof AsyncJobFailure
            ? numberOfFilesAdded
            : {
                concreteType:
                  'org.sagebionetworks.repo.model.download.AddToDownloadListResponse',
                numberOfFilesAdded,
              }
        },
      ),
      {
        asyncTypeServicePaths: {
          requestPath: DOWNLOAD_LIST_ADD_ASYNC_START,
          responsePath: DOWNLOAD_LIST_ADD_ASYNC_GET,
        },
        backendOrigin,
      },
    ),
    http.post(
      `${backendOrigin}${DOWNLOAD_LIST_ADD_BATCH}`,
      async ({ request }) => {
        const { batchToAdd } =
          (await request.json()) as AddBatchOfFilesToDownloadListRequest
        const numberOfFilesAdded = batchToAdd.filter(
          item =>
            data.references.get(item.fileEntityId)?.referenceType === 'FILE',
        ).length
        return HttpResponse.json({ numberOfFilesAdded })
      },
    ),
  ]

  return [
    ...entityHandlers,
    entityHeaderHandler,
    ...queryHandlers,
    ...downloadListHandlers,
  ]
}

/**
 * Storybook MSW handler groups that serve the Cohort Builder mocks on the mock stack. They replace the `entity` group so
 * they run before the stock entity handlers, which answer 404 for unknown entity IDs.
 */
export function getCohortBuilderStorybookHandlers(
  options: Omit<CohortBuilderHandlersOptions, 'backendOrigin'> = {},
): Record<string, HttpHandler[]> {
  return {
    entity: [
      ...getCohortBuilderHandlers({
        ...options,
        backendOrigin: MOCK_REPO_ORIGIN,
      }),
      ...getEntityHandlers(MOCK_REPO_ORIGIN),
    ],
  }
}
