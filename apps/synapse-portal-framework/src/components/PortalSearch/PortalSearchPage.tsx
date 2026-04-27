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

export type PortalSearchPageProps = {
  selectedTabIndex?: number
  configs: (QueryWrapperPlotNavProps | SearchQueryWrapperPlotNavProps)[]
  searchPageTabs: PortalSearchTabConfig[]
  roleMapping?: Record<string, string>
}

function getQueryCount(queryResultBundleJSON: string) {
  const queryResultBundle = JSON.parse(
    queryResultBundleJSON,
  ) as QueryResultBundle
  const { queryCount } = queryResultBundle
  return queryCount
}

export function PortalSearchPage(props: PortalSearchPageProps) {
  const { selectedTabIndex, configs, searchPageTabs, roleMapping } = props
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
      if (searchPageTabsState[tabIndex].count !== newCount) {
        searchPageTabsState[tabIndex].count = newCount
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
          // Navigate to the tab that has the highest count.
          // Explicitly initialize the accumulator ("max") to the first element (searchPageTabs[0]). "max" will never be null
          const maxCountTab = searchPageTabs.reduce(
            (max, tab) => (tab.count! > max.count! ? tab : max),
            searchPageTabs[0],
          )
          navigate({
            pathname: `/Search/${maxCountTab.path}`,
            search: location.search,
          })
        }
      }
    },
    [searchPageTabsState, navigate, location.search],
  )
  // on search field value update, update the special search parameter SEARCH_TERM, which the QueryWrapperPlotNav will load as the search term
  return (
    <Box sx={{ p: { xs: '10px', lg: '50px' } }}>
      <PortalFullTextSearchField
        disabled={selectedTabIndex == undefined}
        path={location.pathname}
      />
      {selectedTabIndex != undefined && (
        <PortalSearchTabs tabConfig={searchPageTabsState} />
      )}
      {configs.map((config, index) => {
        const sharedProps = {
          key: `searchResultTab-${selectedTabIndex}-${index}`,
          isVisible: selectedTabIndex == index,
          onQueryResultBundleChange: (newQueryResultBundleJSON: string) => {
            onQueryResultBundleChange(
              index,
              newQueryResultBundleJSON,
              selectedTabIndex,
            )
          },
        }
        if ('searchIndexId' in config) {
          return (
            <SearchParamAwareQueryWrapperPlotNav
              {...sharedProps}
              searchQueryWrapperPlotNavProps={config}
            />
          )
        }
        return (
          <SearchParamAwareQueryWrapperPlotNav
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
