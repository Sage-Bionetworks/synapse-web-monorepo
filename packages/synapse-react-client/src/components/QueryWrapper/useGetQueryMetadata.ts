import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import {
  useQuery,
  UseQueryOptions,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query'
import { useQueryContext } from '../QueryContext/index'

/**
 * Get the metadata (columns, count, i.e. not row data) for the query in the current QueryContext (provided by
 * QueryWrapper)
 */
export function useGetQueryMetadata<
  TSelect = Omit<QueryResultBundle, 'queryResult'>,
>(
  optionsOverrides?: Partial<
    UseQueryOptions<
      AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
      SynapseClientError,
      TSelect
    >
  >,
) {
  const { queryMetadataQueryOptions } = useQueryContext()

  const mergedOptions = {
    ...queryMetadataQueryOptions,
    ...optionsOverrides,
  } as UseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    TSelect
  >

  return useQuery(mergedOptions)
}

/**
 * Get the metadata (columns, count, i.e. not row data) for the query in the current QueryContext (provided by
 * QueryWrapper). Suspends the component tree if the query data is not yet loaded.
 */
export function useSuspenseGetQueryMetadata<
  TSelect = Omit<QueryResultBundle, 'queryResult'>,
>(
  optionsOverrides?: Partial<
    UseSuspenseQueryOptions<
      AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
      SynapseClientError,
      TSelect
    >
  >,
) {
  const { queryMetadataQueryOptions } = useQueryContext()

  const mergedOptions = {
    ...queryMetadataQueryOptions,
    ...optionsOverrides,
  } as UseSuspenseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    TSelect
  >

  return useSuspenseQuery<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    TSelect
  >(mergedOptions)
}
