import {
  LockedColumn,
  SynapseClientError,
  useSynapseContext,
} from '../../utils'
import { useMemo } from 'react'
import {
  partitionQueryBundleRequestIntoRowsAndMetadata,
  removeLockedColumnFromFacetData,
} from '../../utils/functions/queryUtils'
import SynapseClient from '../../synapse-client'
import { omit } from 'lodash-es'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
  RowSet,
} from '@sage-bionetworks/synapse-types'
import {
  getInfiniteQueryResultBundleOptions,
  KeyFactory,
  tableQueryUseQueryDefaults,
} from '../../synapse-queries'
import {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  UseQueryOptions,
} from '@tanstack/react-query'

export type TableQueryUseQueryOptions = {
  rowDataQueryOptions: UseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    RowSet | undefined
  >

  rowDataInfiniteQueryOptions: UseInfiniteQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    InfiniteData<AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>>,
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    QueryKey,
    string | number | undefined
  >

  queryMetadataQueryOptions: UseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    Omit<QueryResultBundle, 'queryResult'>
  >
}

export function getTableQueryUseQueryOptions(
  queryBundleRequest: QueryBundleRequest,
  lockedColumn: LockedColumn | undefined,
  keyFactory: KeyFactory,
  accessToken: string | undefined,
) {
  const { rowDataRequest, queryMetadataRequest } =
    partitionQueryBundleRequestIntoRowsAndMetadata(queryBundleRequest)
  const rowDataQueryOptions: TableQueryUseQueryOptions['rowDataQueryOptions'] =
    {
      ...tableQueryUseQueryDefaults,
      queryKey: keyFactory.getEntityTableQueryResultWithAsyncStatusQueryKey(
        rowDataRequest,
        false,
      ),
      queryFn: () =>
        SynapseClient.getQueryTableAsyncJobResults(rowDataRequest, accessToken),
      select: data => data.responseBody?.queryResult?.queryResults,
    }

  const rowDataInfiniteQueryOptions: TableQueryUseQueryOptions['rowDataInfiniteQueryOptions'] =
    {
      ...getInfiniteQueryResultBundleOptions(
        rowDataRequest,
        keyFactory,
        accessToken,
      ),
    }

  const queryMetadataQueryOptions: TableQueryUseQueryOptions['queryMetadataQueryOptions'] =
    {
      ...tableQueryUseQueryDefaults,
      queryKey: keyFactory.getEntityTableQueryResultWithAsyncStatusQueryKey(
        queryMetadataRequest,
        false,
      ),
      queryFn: () =>
        SynapseClient.getQueryTableAsyncJobResults(
          queryMetadataRequest,
          accessToken,
        ),

      select: data =>
        omit(
          removeLockedColumnFromFacetData(data.responseBody, lockedColumn),
          'queryResults',
        ),
    }

  return {
    rowDataQueryOptions,
    rowDataInfiniteQueryOptions,
    queryMetadataQueryOptions,
  }
}

/**
 * Return the UseQueryOptions used to retrieve a table query's row data and query metadata.
 * @param queryBundleRequest
 * @param lockedColumn - remove a particular facet name (e.g. study) and all possible values based on the parameter
 * specified in the url this is to remove the facet from the charts, search and filter.
 */
export function useTableQueryUseQueryOptions(
  queryBundleRequest: QueryBundleRequest,
  lockedColumn?: LockedColumn,
): TableQueryUseQueryOptions {
  const { keyFactory, accessToken } = useSynapseContext()

  return useMemo(
    () =>
      getTableQueryUseQueryOptions(
        queryBundleRequest,
        lockedColumn,
        keyFactory,
        accessToken,
      ),
    [keyFactory, accessToken, queryBundleRequest, lockedColumn],
  )
}
