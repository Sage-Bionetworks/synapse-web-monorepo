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
  QueryBundleRequestConcreteTypeEnum,
  TableUpdateTransactionRequestConcreteTypeEnum,
  ViewColumnModelRequestConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import {
  ColumnModel,
  QueryBundleRequest,
  TableUpdateTransactionResponse,
  ViewColumnModelResponse,
} from '@sage-bionetworks/synapse-types'
import { uniqueId } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import defaultFileViewColumnModels from '../../query/defaultFileViewColumnModels'
import { dispatchEntry, generateAsyncJobHandlers } from './asyncJobHandlers'
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
  return generateAsyncJobHandlers(
    dispatchEntry(
      QueryBundleRequestConcreteTypeEnum.org_sagebionetworks_repo_model_table_QueryBundleRequest,
      // Get the table query result from the service. `getTableQueryResult` takes the legacy
      // synapse-types `QueryBundleRequest`, structurally incompatible with the generated
      // client's request variant (differing optionality on `entityId`) -- bridge with a cast.
      request => getTableQueryResult(request as unknown as QueryBundleRequest),
    ),
    {
      asyncTypeServicePaths: {
        requestPath: TABLE_QUERY_ASYNC_START(entityId),
        responsePath: tokenParam => TABLE_QUERY_ASYNC_GET(entityId, tokenParam),
      },
      backendOrigin,
    },
  )
}

export function getAnnotationColumnHandlers(
  response: ViewColumnModelResponse,
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) {
  return generateAsyncJobHandlers(
    {
      [ViewColumnModelRequestConcreteTypeEnum.org_sagebionetworks_repo_model_table_ViewColumnModelRequest]:
        () => response,
    },
    {
      asyncTypeServicePaths: {
        requestPath: '/repo/v1/column/view/scope/async/start',
        responsePath: tokenParam =>
          `/repo/v1/column/view/scope/async/get/${tokenParam}`,
      },
      backendOrigin,
    },
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
  return generateAsyncJobHandlers(
    {
      [TableUpdateTransactionRequestConcreteTypeEnum.org_sagebionetworks_repo_model_table_TableUpdateTransactionRequest]:
        () => response,
    },
    {
      asyncTypeServicePaths: {
        requestPath: `/repo/v1/entity/:entityId/table/transaction/async/start`,
        responsePath: tokenParam =>
          `/repo/v1/entity/:entityId/table/transaction/async/get/${tokenParam}`,
      },
      backendOrigin,
      serviceSpecificEndpointResponseStatus: statusCode,
    },
  )
}
