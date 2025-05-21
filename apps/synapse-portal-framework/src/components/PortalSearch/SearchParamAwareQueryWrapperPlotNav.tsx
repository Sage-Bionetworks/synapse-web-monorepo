import { Query, TextMatchesQueryFilter } from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { QueryWrapperPlotNav } from 'synapse-react-client'
import { QueryWrapper, StandaloneQueryWrapperProps } from 'synapse-react-client'
import { getTextMatchesQueryFilter } from 'synapse-react-client/components/FullTextSearch/FullTextSearchUtils'
import { generateInitQueryRequest } from 'synapse-react-client/components/StandaloneQueryWrapper/StandaloneQueryWrapper'
import { FTS_SEARCH_TERM } from 'synapse-react-client/utils/functions/SqlFunctions'

export type SearchParamAwareQueryWrapperPlotNavProps = {
  isVisible: boolean
  standaloneQueryWrapperProps: StandaloneQueryWrapperProps
}
export function SearchParamAwareQueryWrapperPlotNav(
  props: SearchParamAwareQueryWrapperPlotNavProps,
) {
  const { isVisible, standaloneQueryWrapperProps } = props
  const [searchParams] = useSearchParams()
  const { searchConfiguration, sql } = standaloneQueryWrapperProps

  const searchText = searchParams.get(FTS_SEARCH_TERM)
  const textMatchesQueryFilter: TextMatchesQueryFilter | undefined =
    useMemo(() => {
      if (searchText) {
        return getTextMatchesQueryFilter(
          searchText,
          searchConfiguration?.ftsConfig,
        )
      }
      return undefined
    }, [searchText, searchConfiguration?.ftsConfig])

  // create the FTS filter
  const query: Query = {
    sql: sql!,
    additionalFilters: textMatchesQueryFilter ? [textMatchesQueryFilter] : [],
  }

  // if is visible, render a StandaloneQueryWrapper.
  // if not, just run the query wrapper with the query request derived from the search params (to populate the cache and return the count)
  if (isVisible) {
    return (
      <QueryWrapperPlotNav
        {...standaloneQueryWrapperProps}
        shouldDeepLink={false}
        query={query}
        hideCopyToClipboard={true}
        defaultShowPlots={false}
        defaultShowSearchBox={false}
        hideVisualizationsControl={true}
        hideSearchBarControl={true}
        name={undefined}
      />
    )
  }
  //else

  const derivedQueryRequestFromSearchParams = generateInitQueryRequest(query)
  return (
    <QueryWrapper
      {...standaloneQueryWrapperProps}
      shouldDeepLink={false}
      initQueryRequest={derivedQueryRequestFromSearchParams}
    />
  )
}

export default SearchParamAwareQueryWrapperPlotNav
