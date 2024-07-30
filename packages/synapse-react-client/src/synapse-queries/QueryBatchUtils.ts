import { chunk } from 'lodash-es'
import { UseQueryOptions } from '@tanstack/react-query'

/**
 * Given a list of items, batch them into groups of maxBatchSize and create a QueryOptions object for each chunk based on the provided mapToQueryOptionsFn
 * @param listToBatch
 * @param maxBatchSize
 * @param mapToQueryOptionsFn
 */
export function batchQueries<
  T = unknown,
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
>(
  listToBatch: T[],
  maxBatchSize: number,
  mapToQueryOptionsFn: (
    chunkedList: T[],
  ) => UseQueryOptions<TQueryFnData, TError, TData>,
): UseQueryOptions<TQueryFnData, TError, TData>[] {
  // chunk the list into arrays with length not greater than the maxBatchSize
  const chunkedList = chunk(listToBatch, maxBatchSize)

  // Create a QueryOptions object for each chunk
  return chunkedList.map(mapToQueryOptionsFn)
}
