import { cloneDeep, uniqueId } from 'lodash-es'
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
  return generateAsyncJobHandlers<QueryBundleRequest, QueryResultBundle>(
    TABLE_QUERY_ASYNC_START(':id'),
    tokenParam => TABLE_QUERY_ASYNC_GET(':entityId', tokenParam),
    request => removeBundleFieldsUsingMask(response, request.partMask),
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
