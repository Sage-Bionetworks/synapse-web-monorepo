import { Query, TextMatchesQueryFilter } from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { QueryWrapper } from 'synapse-react-client/components/QueryWrapper/QueryWrapper'
import type { StandaloneQueryWrapperProps } from 'synapse-react-client/components/StandaloneQueryWrapper/StandaloneQueryWrapper'
import { getTextMatchesQueryFilter } from 'synapse-react-client/components/FullTextSearch/FullTextSearchUtils'
import { generateInitQueryRequest } from 'synapse-react-client/components/StandaloneQueryWrapper/StandaloneQueryWrapper'
import { SEARCH_TERM } from 'synapse-react-client/utils/functions/SqlFunctions'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import type { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { SearchQueryWrapper } from 'synapse-react-client/components/SearchQueryWrapper/SearchQueryWrapper'
import { DEFAULT_PAGE_SIZE } from 'synapse-react-client/utils/SynapseConstants'

export type SearchParamAwareQueryWrapperPlotNavProps = {
  isVisible: boolean
  onQueryResultBundleChange?: (newQueryResultBundleJson: string) => void
} & (
  | { standaloneQueryWrapperProps: StandaloneQueryWrapperProps }
  | { searchQueryWrapperPlotNavProps: SearchQueryWrapperPlotNavProps }
)

/**
 * Thin dispatcher: renders the appropriate variant depending on whether the config
 * is a QueryWrapperPlotNavProps (standaloneQueryWrapperProps) or a
 * SearchQueryWrapperPlotNavProps (searchQueryWrapperPlotNavProps).
 *
 * Each sub-component is its own React component so hooks are not called conditionally.
 */
export function SearchParamAwareQueryWrapperPlotNav(
  props: SearchParamAwareQueryWrapperPlotNavProps,
) {
  if ('searchQueryWrapperPlotNavProps' in props) {
    return (
      <SearchParamAwareSearchQueryWrapperPlotNav
        isVisible={props.isVisible}
        config={props.searchQueryWrapperPlotNavProps}
        onQueryResultBundleChange={props.onQueryResultBundleChange}
      />
    )
  }
  return (
    <SearchParamAwareStandaloneQueryWrapperPlotNav
      isVisible={props.isVisible}
      standaloneQueryWrapperProps={props.standaloneQueryWrapperProps}
      onQueryResultBundleChange={props.onQueryResultBundleChange}
    />
  )
}

/**
 * Handles the SearchQueryWrapperPlotNavProps case, where the data comes from the
 * SearchQueryServicesApi. The URL search term is translated to a TextMatchesQueryFilter
 * in initQueryRequest.query.additionalFilters, which SearchQueryWrapper maps to
 * SearchSearchQuery.queryText.
 */
function SearchParamAwareSearchQueryWrapperPlotNav({
  isVisible,
  config,
  onQueryResultBundleChange,
}: {
  isVisible: boolean
  config: SearchQueryWrapperPlotNavProps
  onQueryResultBundleChange?: (json: string) => void
}) {
  const [searchParams] = useSearchParams()
  const searchText = searchParams.get(SEARCH_TERM)

  const initQueryRequest = useMemo(
    () => ({
      query: {
        additionalFilters: searchText
          ? [
              {
                concreteType:
                  'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter' as const,
                searchExpression: searchText,
              } satisfies TextMatchesQueryFilter,
            ]
          : undefined,
        limit: DEFAULT_PAGE_SIZE,
        offset: 0,
      },
    }),
    [searchText],
  )

  if (isVisible) {
    return (
      <SearchQueryWrapperPlotNav
        {...config}
        initQueryRequest={initQueryRequest}
        onQueryResultBundleChange={onQueryResultBundleChange}
      />
    )
  }

  // Hidden: run the query only to populate the count for tab auto-navigation
  return (
    <SearchQueryWrapper
      searchIndexId={config.searchIndexId}
      initQueryRequest={initQueryRequest}
      onQueryResultBundleChange={onQueryResultBundleChange}
    />
  )
}

/**
 * Handles the StandaloneQueryWrapperProps / QueryWrapperPlotNavProps case (original logic).
 * Visible: renders QueryWrapperPlotNav with a TextMatchesQueryFilter derived from the URL.
 * Hidden: renders a bare QueryWrapper to populate the count cache.
 */
function SearchParamAwareStandaloneQueryWrapperPlotNav({
  isVisible,
  standaloneQueryWrapperProps,
  onQueryResultBundleChange,
}: {
  isVisible: boolean
  standaloneQueryWrapperProps: StandaloneQueryWrapperProps
  onQueryResultBundleChange?: (json: string) => void
}) {
  const [searchParams] = useSearchParams()
  const {
    searchConfiguration,
    sql,
    fileIdColumnName,
    fileNameColumnName,
    fileVersionColumnName,
  } = standaloneQueryWrapperProps

  const searchText = searchParams.get(SEARCH_TERM)
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

  const query: Query = {
    sql: sql!,
    additionalFilters: textMatchesQueryFilter ? [textMatchesQueryFilter] : [],
  }

  if (isVisible) {
    return (
      <QueryWrapperPlotNav
        {...standaloneQueryWrapperProps}
        shouldDeepLink={false}
        query={query}
        onQueryResultBundleChange={onQueryResultBundleChange}
        hideCopyToClipboard={true}
        defaultShowPlots={false}
        defaultShowSearchBox={false}
        hideVisualizationsControl={true}
        hideSearchBarControl={true}
        name={undefined}
      />
    )
  }

  const derivedQueryRequestFromSearchParams = generateInitQueryRequest(query)
  return (
    <QueryWrapper
      fileIdColumnName={fileIdColumnName}
      fileNameColumnName={fileNameColumnName}
      fileVersionColumnName={fileVersionColumnName}
      shouldDeepLink={false}
      initQueryRequest={derivedQueryRequestFromSearchParams}
      onQueryResultBundleChange={onQueryResultBundleChange}
    />
  )
}

export default SearchParamAwareQueryWrapperPlotNav
