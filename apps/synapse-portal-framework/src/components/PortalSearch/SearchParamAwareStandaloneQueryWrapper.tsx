import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { QueryWrapper, StandaloneQueryWrapper } from 'synapse-react-client'
import { StandaloneQueryWrapperProps } from 'synapse-react-client'
import { generateInitQueryRequest } from 'synapse-react-client/components/StandaloneQueryWrapper/StandaloneQueryWrapper'
import { getAdditionalFilters } from 'synapse-react-client/utils/functions'

export type SearchParamAwareStandaloneQueryWrapperProps = {
  isVisible: boolean
  standaloneQueryWrapperProps: StandaloneQueryWrapperProps
}
export function SearchParamAwareStandaloneQueryWrapper(
  props: SearchParamAwareStandaloneQueryWrapperProps,
) {
  const { isVisible, standaloneQueryWrapperProps } = props
  const [searchParams] = useSearchParams()
  const searchParamsRecords = useMemo(() => {
    if (searchParams) {
      return Object.fromEntries(searchParams.entries())
    }
    return undefined
  }, [searchParams])

  // if is visible, render a StandaloneQueryWrapper.
  // if not, just run the query wrapper with the query request derived from the search params (to populate the cache and return the count)
  if (isVisible) {
    return (
      <StandaloneQueryWrapper
        {...standaloneQueryWrapperProps}
        shouldDeepLink={false}
        searchParams={searchParamsRecords}
      />
    )
  }
  //else
  const { sql } = standaloneQueryWrapperProps
  const derivedQueryRequestFromSearchParams = generateInitQueryRequest(sql)
  derivedQueryRequestFromSearchParams.query.additionalFilters =
    getAdditionalFilters(undefined, searchParamsRecords, undefined)
  return (
    <QueryWrapper
      {...standaloneQueryWrapperProps}
      shouldDeepLink={false}
      initQueryRequest={derivedQueryRequestFromSearchParams}
    ></QueryWrapper>
  )
}

export default SearchParamAwareStandaloneQueryWrapper
