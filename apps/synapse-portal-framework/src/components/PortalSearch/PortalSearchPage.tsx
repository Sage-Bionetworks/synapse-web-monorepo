import { Box } from '@mui/material'
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { useCallback, useState } from 'react'
import { SynapseSpinner } from 'synapse-react-client/components/LoadingScreen/LoadingScreen'
import { PortalSearchTabConfig, PortalSearchTabs } from './PortalSearchTabs'
import PortalFullTextSearchField from './PortalFullTextSearchField'
import SearchParamAwareQueryWrapperPlotNav from './SearchParamAwareQueryWrapperPlotNav'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import type { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { isSearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { useGetSuggestionsForSearchIndex } from 'synapse-react-client/components/SearchQueryWrapper/SearchQueryUseQueryOptions'
import { SearchIndexConfig } from '../../types/portal-util-types'

export type PortalSearchPageProps = {
  selectedTabIndex?: number
  configs: (QueryWrapperPlotNavProps | SearchQueryWrapperPlotNavProps)[]
  searchPageTabs: PortalSearchTabConfig[]
  roleMapping?: Record<string, string>
  searchIndexConfig?: SearchIndexConfig
}

function getQueryCount(queryResultBundleJSON: string) {
  const queryResultBundle = JSON.parse(
    queryResultBundleJSON,
  ) as QueryResultBundle
  const { queryCount } = queryResultBundle
  return queryCount
}

function getMaxScore(queryResultBundleJSON: string): number | undefined {
  const bundle = JSON.parse(queryResultBundleJSON) as QueryResultBundle & {
    maxScore?: number
  }
  return bundle.maxScore
}

export function PortalSearchPage(props: PortalSearchPageProps) {
  const {
    selectedTabIndex,
    configs,
    searchPageTabs,
    roleMapping,
    searchIndexConfig,
  } = props
  // Note: Files does not currently enable FTS
  const [searchPageTabsState, setSearchPageTabsState] = useState<
    PortalSearchTabConfig[]
  >([...searchPageTabs])
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const role = searchParams.get('SEARCH_ROLE')
  const onQueryResultBundleChange = useCallback(
    (
      tabIndex: number,
      newQueryResultBundleJSON: string,
      selectedTabIndex?: number,
    ) => {
      const newCount = getQueryCount(newQueryResultBundleJSON)
      const newScore = getMaxScore(newQueryResultBundleJSON)
      let didChange = false
      if (searchPageTabsState[tabIndex].count !== newCount) {
        searchPageTabsState[tabIndex].count = newCount
        didChange = true
      }
      if (searchPageTabsState[tabIndex].score !== newScore) {
        searchPageTabsState[tabIndex].score = newScore
        didChange = true
      }
      if (didChange) {
        setSearchPageTabsState([...searchPageTabsState])
      }
      // PORTALS-3382: If no tab is selected and all counts have been set, then redirect to the item with the highest count
      const allCountsSet = searchPageTabs.every(tab => tab.count !== undefined)
      if (selectedTabIndex == undefined && allCountsSet) {
        const roleTab =
          role &&
          roleMapping &&
          searchPageTabs.find(tab => tab.title === roleMapping[role])
        // If a role is selected, navigate to the corresponding tab from the roleMapping unless that corresponding tab has a count of 0.
        if (roleTab && roleTab.count) {
          navigate({
            pathname: `/Search/${roleTab.path}`,
            search: location.search,
          })
        } else {
          // Navigate to the tab with the highest relevance score.
          // Fall back to the first tab if no tab has a score (e.g. no results or search not yet performed).
          const maxScoreTab = searchPageTabs.reduce<
            PortalSearchTabConfig | undefined
          >((best, tab) => {
            if (tab.score === undefined) return best
            if (best === undefined || best.score === undefined) return tab
            return tab.score > best.score ? tab : best
          }, undefined)
          navigate({
            pathname: `/Search/${(maxScoreTab ?? searchPageTabs[0]).path}`,
            search: location.search,
          })
        }
      }
    },
    [searchPageTabsState, navigate, location.search],
  )
  const getSuggestions = useGetSuggestionsForSearchIndex(
    searchIndexConfig?.searchIndexId ?? '',
    searchIndexConfig?.autocompleteFieldName,
  )
  // on search field value update, update the special search parameter SEARCH_TERM, which the QueryWrapperPlotNav will load as the search term
  return (
    <Box
      sx={{
        px: { xs: '10px', lg: '50px' },
        pb: { xs: '10px', lg: '50px' },
        pt: { xs: '10px', lg: '20px' },
      }}
    >
      <PortalFullTextSearchField
        disabled={selectedTabIndex == undefined}
        path={location.pathname}
        getSuggestions={searchIndexConfig ? getSuggestions : undefined}
      />
      <Box
        sx={{
          pt: { xs: '10px', lg: '20px' },
        }}
      />
      {configs.length !== 1 && selectedTabIndex != undefined && (
        <PortalSearchTabs tabConfig={searchPageTabsState} />
      )}

      {configs.map((config, index) => {
        const key = `searchResultTab-${selectedTabIndex}-${index}`
        const sharedProps = {
          isVisible: selectedTabIndex == index,
          onQueryResultBundleChange: (newQueryResultBundleJSON: string) => {
            onQueryResultBundleChange(
              index,
              newQueryResultBundleJSON,
              selectedTabIndex,
            )
          },
        }
        if (isSearchQueryWrapperPlotNavProps(config)) {
          return (
            <SearchParamAwareQueryWrapperPlotNav
              key={key}
              {...sharedProps}
              searchQueryWrapperPlotNavProps={config}
            />
          )
        }
        return (
          <SearchParamAwareQueryWrapperPlotNav
            key={key}
            {...sharedProps}
            standaloneQueryWrapperProps={config}
          />
        )
      })}
      {selectedTabIndex == undefined && (
        <Box
          sx={{
            display: 'flex',
            mt: '100px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SynapseSpinner size={50} />
        </Box>
      )}
      <Outlet />
    </Box>
  )
}
