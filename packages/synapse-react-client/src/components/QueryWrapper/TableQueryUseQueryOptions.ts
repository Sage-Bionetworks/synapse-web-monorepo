import * as SynapseClient from '@/synapse-client/SynapseClient'
import {
  getInfiniteQueryResultBundleOptions,
  KeyFactory,
  tableQueryUseQueryDefaults,
} from '@/synapse-queries'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  normalizeBinnedFacets,
  partitionQueryBundleRequestIntoRowsAndMetadata,
  removeLockedColumnFromFacetData,
} from '@/utils/functions/queryUtils'
import { LockedColumn } from '@/utils/types/LockedColumn'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
  RowSet,
} from '@sage-bionetworks/synapse-types'
import {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  UseQueryOptions,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query'
import { omit } from 'lodash-es'
import { useMemo } from 'react'

export type TableQueryUseQueryOptions = {
  /** Disabled when the request's partMask does not include BUNDLE_MASK_QUERY_RESULTS. */
  rowDataQueryOptions: UseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    RowSet | undefined
  >

  /** Disabled when the request's partMask does not include BUNDLE_MASK_QUERY_RESULTS. */
  rowDataInfiniteQueryOptions: UseInfiniteQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    InfiniteData<AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>>,
    QueryKey,
    string | number | undefined
  >

  queryMetadataQueryOptions: UseSuspenseQueryOptions<
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
  const isRowDataRequested = rowDataRequest.partMask > 0
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
      enabled: isRowDataRequested,
    }

  const rowDataInfiniteQueryOptions: TableQueryUseQueryOptions['rowDataInfiniteQueryOptions'] =
    {
      ...getInfiniteQueryResultBundleOptions(
        rowDataRequest,
        keyFactory,
        accessToken,
      ),
      enabled: isRowDataRequested,
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
          normalizeBinnedFacets(
            removeLockedColumnFromFacetData(data.responseBody, lockedColumn),
          ),
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
