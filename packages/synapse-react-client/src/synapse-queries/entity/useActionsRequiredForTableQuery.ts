import {
  ActionRequiredCount,
  AsynchronousJobStatus,
  ColumnModel,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import { cloneDeep } from 'lodash-es'
import { UseQueryOptions } from 'react-query'
import { getFileColumnModelId } from '../../components/SynapseTable/SynapseTableUtils'
import { SynapseConstants } from '../../utils'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useGetQueryResultBundleWithAsyncStatus } from './useGetQueryResultBundle'

export function useGetActionsRequiredForTableQuery(
  queryBundleRequest: QueryBundleRequest,
  columnModels: ColumnModel[],
  options?: UseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    ActionRequiredCount[]
  >,
) {
  const queryRequestCopy = useMemo(() => {
    const request = cloneDeep(queryBundleRequest)
    const fileColumnId = getFileColumnModelId(columnModels)
    if (fileColumnId) {
      request.query.selectFileColumn = Number(fileColumnId)
    }
    request.partMask = SynapseConstants.BUNDLE_MASK_ACTIONS_REQUIRED
    return request
  }, [columnModels, queryBundleRequest])

  return useGetQueryResultBundleWithAsyncStatus<ActionRequiredCount[]>(
    queryRequestCopy,
    {
      ...options,
      enabled:
        (options?.enabled ?? true) &&
        queryRequestCopy.query.selectFileColumn !== undefined,
      select: data => {
        return data?.responseBody?.actionsRequired!
      },
    },
  )
}
