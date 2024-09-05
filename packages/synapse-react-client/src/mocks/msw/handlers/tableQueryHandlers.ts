import { uniqueId } from 'lodash-es'
import { rest } from 'msw'
import {
  TABLE_QUERY_ASYNC_GET,
  TABLE_QUERY_ASYNC_START,
} from '../../../utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import {
  ColumnModel,
  QueryBundleRequest,
  QueryResultBundle,
  TableUpdateTransactionRequest,
  TableUpdateTransactionResponse,
  ViewColumnModelRequest,
  ViewColumnModelResponse,
} from '@sage-bionetworks/synapse-types'
import { generateAsyncJobHandlers } from './asyncJobHandlers'
import defaultFileViewColumnModels from '../../query/defaultFileViewColumnModels'
import { SynapseError } from '../../../utils/SynapseError'
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
    rest.get(
      `${backendOrigin}/repo/v1/column/tableview/defaults`,
      async (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            concreteType: 'org.sagebionetworks.repo.model.table.ColumnModel',
            list: defaultFileViewColumnModels,
          }),
        )
      },
    ),
  ]
}

export function getCreateColumnModelBatchHandler(
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) {
  return rest.post(
    `${backendOrigin}/repo/v1/column/batch`,
    async (req, res, ctx) => {
      const { list: columnModels } = await req.json<{ list: ColumnModel[] }>()
      columnModels.forEach(cm => {
        if (!cm.id) {
          cm.id = uniqueId()
        }
      })
      return res(
        ctx.status(201),
        ctx.json({
          concreteType: 'org.sagebionetworks.repo.model.table.ColumnModel',
          list: columnModels,
        }),
      )
    },
  )
}

export function getTableTransactionHandlers(
  response: TableUpdateTransactionResponse | SynapseError,
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  statusCode?: number,
) {
  return generateAsyncJobHandlers<
    TableUpdateTransactionRequest,
    TableUpdateTransactionResponse | SynapseError
  >(
    `/repo/v1/entity/:entityId/table/transaction/async/start`,
    tokenParam =>
      `/repo/v1/entity/:entityId/table/transaction/async/get/${tokenParam}`,
    response,
    backendOrigin,
    statusCode,
  )
}
