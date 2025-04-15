import { Query } from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import {
  QueryWrapper,
  StandaloneQueryWrapper,
  StandaloneQueryWrapperProps,
} from 'synapse-react-client'
import {
  generateInitQueryRequest,
  getQueryFromProps,
} from 'synapse-react-client/components/StandaloneQueryWrapper/StandaloneQueryWrapper'

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

  // FTS_SEARCH_ROLE is used for search page behavior and should not be passed to the QueryWrapper to instantiate a filter.
  const { FTS_SEARCH_ROLE: _, ...filteredSearchParams } =
    searchParamsRecords || {}

  // if is visible, render a StandaloneQueryWrapper.
  // if not, just run the query wrapper with the query request derived from the search params (to populate the cache and return the count)
  if (isVisible) {
    return (
      <StandaloneQueryWrapper
        {...standaloneQueryWrapperProps}
        shouldDeepLink={false}
        searchParams={filteredSearchParams}
      />
    )
  }
  //else
  const query: Query = getQueryFromProps({
    ...standaloneQueryWrapperProps,
    searchParams: filteredSearchParams,
  })
  const derivedQueryRequestFromSearchParams = generateInitQueryRequest(query)
  return (
    <QueryWrapper
      {...standaloneQueryWrapperProps}
      shouldDeepLink={false}
      initQueryRequest={derivedQueryRequestFromSearchParams}
    />
  )
}

export default SearchParamAwareStandaloneQueryWrapper
