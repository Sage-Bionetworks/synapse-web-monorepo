import { cloneDeep, uniqueId } from 'lodash-es'
import { rest } from 'msw'
import {
  ASYNCHRONOUS_JOB_TOKEN,
  TABLE_QUERY_ASYNC_GET,
  TABLE_QUERY_ASYNC_START,
} from '../../../utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import {
  BUNDLE_MASK_LAST_UPDATED_ON,
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_FACETS,
  BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE,
  BUNDLE_MASK_QUERY_RESULTS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
  BUNDLE_MASK_SUM_FILES_SIZE_BYTES,
} from '../../../utils/SynapseConstants'
import {
  AsynchronousJobStatus,
  AsyncJobId,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'

const BIT_TO_FIELD_MAP: Record<number, keyof QueryResultBundle> = {
  [BUNDLE_MASK_QUERY_RESULTS]: 'queryResult',
  [BUNDLE_MASK_QUERY_COUNT]: 'queryCount',
  [BUNDLE_MASK_QUERY_SELECT_COLUMNS]: 'selectColumns',
  [BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE]: 'maxRowsPerPage',
  [BUNDLE_MASK_QUERY_COLUMN_MODELS]: 'columnModels',
  [BUNDLE_MASK_QUERY_FACETS]: 'facets',
  [BUNDLE_MASK_SUM_FILES_SIZE_BYTES]: 'sumFileSizes',
  [BUNDLE_MASK_LAST_UPDATED_ON]: 'lastUpdatedOn',
}

function removeBundleFieldsUsingMask(
  queryResultBundle: QueryResultBundle,
  partMask: number,
): QueryResultBundle {
  const result = cloneDeep(queryResultBundle)
  Object.entries(BIT_TO_FIELD_MAP).forEach(([bit, field]) => {
    if ((partMask & parseInt(bit)) === 0) {
      delete result[field]
    }
  })
  return result
}

export function getHandlersForTableQuery(
  response: QueryResultBundle,
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) {
  // We must map generated async job IDs to requests to disambiguate multiple calls to these endpoints
  const mapOfRequests = new Map<string, QueryBundleRequest>()

  return [
    rest.post(
      `${backendOrigin}${TABLE_QUERY_ASYNC_START(':id')}`,
      async (req, res, ctx) => {
        const asyncJobId = uniqueId()
        mapOfRequests.set(asyncJobId, await req.json())
        return res(
          ctx.status(201),
          ctx.json<AsyncJobId>({
            token: asyncJobId,
          }),
        )
      },
    ),

    rest.get(
      `${backendOrigin}${ASYNCHRONOUS_JOB_TOKEN(':id')}`,
      async (req, res, ctx) => {
        const id = req.params.id as string
        const queryBundleRequest = mapOfRequests.get(id)
        if (!id || !queryBundleRequest) {
          return res(
            ctx.status(404),
            ctx.json({ message: 'The mocked asynchronous job was not found' }),
          )
        }

        const resultBundle = removeBundleFieldsUsingMask(
          response,
          queryBundleRequest.partMask,
        )

        return res(
          ctx.status(201),
          ctx.json<
            AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>
          >({
            jobState: 'COMPLETE',
            jobCanceling: false,
            requestBody: queryBundleRequest,
            etag: '00000000-0000-0000-0000-000000000000',
            jobId: id,
            responseBody: resultBundle,
            startedByUserId: 0,
            startedOn: '',
            changedOn: '',
            progressMessage: '',
            progressCurrent: 100,
            progressTotal: 100,
            exception: '',
            errorMessage: '',
            errorDetails: '',
            runtimeMS: 100,
          }),
        )
      },
    ),

    rest.get(
      `${backendOrigin}${TABLE_QUERY_ASYNC_GET(':entityId', ':asyncJobToken')}`,
      async (req, res, ctx) => {
        const asyncJobToken = req.params.asyncJobToken as string
        const request = mapOfRequests.get(asyncJobToken)
        if (!asyncJobToken || !request) {
          return res(
            ctx.status(404),
            ctx.json({ message: 'The mocked asynchronous job was not found' }),
          )
        }
        const resultBundle = removeBundleFieldsUsingMask(
          response,
          request.partMask,
        )

        return res(ctx.status(201), ctx.json<QueryResultBundle>(resultBundle))
      },
    ),
  ]
}
