import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'
import { useQuery } from '@tanstack/react-query'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { useTableQueryUseQueryOptions } from './TableQueryUseQueryOptions'
import { useEffect, useState } from 'react'

type UseOnQueryDataChangeOptions = {
  queryBundleRequest: QueryBundleRequest
  onChange: (data: QueryResultBundle) => void
}

/**
 * Calls the onChange callback with the current QueryResultBundle when the data for the passed query changes
 * @param options
 */
export default function useOnQueryDataChange(
  options: UseOnQueryDataChangeOptions,
) {
  const { queryBundleRequest, onChange } = options
  const { rowDataQueryOptions, queryMetadataQueryOptions } =
    useTableQueryUseQueryOptions(queryBundleRequest)

  const { data: rowData, isLoading: rowDataIsLoading } = useQuery({
    ...rowDataQueryOptions,
    select: asyncJobResponse => asyncJobResponse.responseBody,
  })
  const { data: queryMetadata, isLoading: queryMetadataIsLoading } = useQuery(
    queryMetadataQueryOptions,
  )

  // SWC requires the entire QueryResultBundle to enable editing table data, so merge the data back into one object before
  // passing it to the onChange callback
  const [mergedData, setMergedData] = useState<QueryResultBundle>()
  useEffect(() => {
    if (
      rowData &&
      queryMetadata &&
      !rowDataIsLoading &&
      !queryMetadataIsLoading
    ) {
      setMergedData({
        ...queryMetadata,
        ...rowData,
      })
    }
  }, [queryMetadata, queryMetadataIsLoading, rowData, rowDataIsLoading])

  // mergedData is sometimes undefined, which useDeepCompareEffect doesn't like, so use useDeepCompareEffectNoCheck instead
  useDeepCompareEffectNoCheck(() => {
    if (mergedData && onChange) {
      onChange(mergedData)
    }
  }, [mergedData, onChange])
}
