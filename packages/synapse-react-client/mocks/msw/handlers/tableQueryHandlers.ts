import { cloneDeep, uniqueId } from 'lodash-es'
import { rest } from 'msw'
import {
  ASYNCHRONOUS_JOB_TOKEN,
  TABLE_QUERY_ASYNC_GET,
  TABLE_QUERY_ASYNC_START,
} from '../../../src/lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../src/lib/utils/functions/getEndpoint'
import {
  BUNDLE_MASK_LAST_UPDATED_ON,
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_FACETS,
  BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE,
  BUNDLE_MASK_QUERY_RESULTS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
  BUNDLE_MASK_SUM_FILES_SIZE_BYTES,
} from '../../../src/lib/utils/SynapseConstants'
import {
  AsynchronousJobStatus,
  AsyncJobId,
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../src/lib/utils/synapseTypes'

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
  const asyncJobId = uniqueId()
  let queryBundleRequest: QueryBundleRequest | undefined

  return [
    rest.post(
      `${backendOrigin}${TABLE_QUERY_ASYNC_START(':id')}`,
      async (req, res, ctx) => {
        queryBundleRequest = req.body as QueryBundleRequest
        return res(
          ctx.status(201),
          ctx.json<AsyncJobId>({
            token: asyncJobId,
          }),
        )
      },
    ),

    rest.get(
      `${backendOrigin}${ASYNCHRONOUS_JOB_TOKEN(asyncJobId)}`,
      async (req, res, ctx) => {
        const resultBundle = removeBundleFieldsUsingMask(
          response,
          queryBundleRequest!.partMask,
        )

        return res(
          ctx.status(201),
          ctx.json<
            AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>
          >({
            jobState: 'COMPLETE',
            jobCanceling: false,
            requestBody: queryBundleRequest!,
            etag: '00000000-0000-0000-0000-000000000000',
            jobId: asyncJobId,
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
      `${backendOrigin}${TABLE_QUERY_ASYNC_GET(':id', asyncJobId)}`,
      async (req, res, ctx) => {
        const resultBundle = removeBundleFieldsUsingMask(
          response,
          queryBundleRequest!.partMask,
        )

        return res(ctx.status(201), ctx.json<QueryResultBundle>(resultBundle))
      },
    ),
  ]
}
