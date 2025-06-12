import { SynapseApiResponse } from '@/mocks/msw/handlers'
import {
  TABLE_QUERY_ASYNC_GET,
  TABLE_QUERY_ASYNC_START,
} from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  ColumnModel,
  QueryBundleRequest,
  QueryResultBundle,
  TableUpdateTransactionRequest,
  TableUpdateTransactionResponse,
  ViewColumnModelRequest,
  ViewColumnModelResponse,
} from '@sage-bionetworks/synapse-types'
import { uniqueId } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import defaultFileViewColumnModels from '../../query/defaultFileViewColumnModels'
import { generateAsyncJobHandlers } from './asyncJobHandlers'
import { getTableQueryResult } from './tableQueryService'

/**
 * Creates MSW handlers for basic table query operations.
 *
 * To register a specific table query result, see `./tableQueryService#registerTableQueryResult`.
 * @param backendOrigin
 * @param entityId
 */
export function getHandlersForTableQuery(
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  entityId = ':id',
) {
  return generateAsyncJobHandlers<QueryBundleRequest, QueryResultBundle>(
    TABLE_QUERY_ASYNC_START(entityId),
    tokenParam => TABLE_QUERY_ASYNC_GET(entityId, tokenParam),
    // Get the table query result from the service
    request => getTableQueryResult(request),
    backendOrigin,
  )
}

export function getAnnotationColumnHandlers(
  response: ViewColumnModelResponse,
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) {
  return generateAsyncJobHandlers<
    ViewColumnModelRequest,
    ViewColumnModelResponse
  >(
    '/repo/v1/column/view/scope/async/start',
    tokenParam => `/repo/v1/column/view/scope/async/get/${tokenParam}`,
    response,
    backendOrigin,
  )
}

export function getDefaultColumnHandlers(
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) {
  return [
    http.get(`${backendOrigin}/repo/v1/column/tableview/defaults`, () => {
      return HttpResponse.json(
        {
          concreteType: 'org.sagebionetworks.repo.model.table.ColumnModel',
          list: defaultFileViewColumnModels,
        },
        { status: 200 },
      )
    }),
  ]
}

export function getCreateColumnModelBatchHandler(
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) {
  return http.post<never, { list: ColumnModel[] }>(
    `${backendOrigin}/repo/v1/column/batch`,
    async ({ request }) => {
      const { list: columnModels } = await request.json()
      columnModels.forEach(cm => {
        if (!cm.id) {
          cm.id = uniqueId()
        }
      })
      return HttpResponse.json(
        {
          concreteType: 'org.sagebionetworks.repo.model.table.ColumnModel',
          list: columnModels,
        },
        { status: 201 },
      )
    },
  )
}

export function getTableTransactionHandlers(
  response: SynapseApiResponse<TableUpdateTransactionResponse>,
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  statusCode?: number,
) {
  return generateAsyncJobHandlers<
    TableUpdateTransactionRequest,
    SynapseApiResponse<TableUpdateTransactionResponse>
  >(
    `/repo/v1/entity/:entityId/table/transaction/async/start`,
    tokenParam =>
      `/repo/v1/entity/:entityId/table/transaction/async/get/${tokenParam}`,
    response,
    backendOrigin,
    statusCode,
  )
}
