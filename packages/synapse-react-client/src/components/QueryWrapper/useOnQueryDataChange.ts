// data is sometimes undefined, which useDeepCompareEffect doesn't like, so use useDeepCompareEffectNoCheck instead
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { DefaultError } from '@tanstack/query-core'

type UseOnQueryDataChangeOptions<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
> = {
  useQueryOptions: UseQueryOptions<TQueryFnData, TError, TData>
  onChange: (data: TData) => void
}

export default function useOnQueryDataChange<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
>(options: UseOnQueryDataChangeOptions<TQueryFnData, TError, TData>) {
  const { useQueryOptions, onChange } = options
  const { data: data } = useQuery(useQueryOptions)

  useDeepCompareEffectNoCheck(() => {
    if (data && onChange) {
      onChange(data)
    }
  }, [data, onChange])
}
