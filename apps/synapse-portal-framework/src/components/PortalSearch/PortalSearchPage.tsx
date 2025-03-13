import { Box } from '@mui/material'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { useCallback, useMemo, useState } from 'react'
import { SynapseSpinner } from 'synapse-react-client/components/LoadingScreen/LoadingScreen'
import { PortalSearchTabConfig, PortalSearchTabs } from './PortalSearchTabs'
import PortalFullTextSearchField from './PortalFullTextSearchField'
import SearchParamAwareStandaloneQueryWrapper from './SearchParamAwareStandaloneQueryWrapper'
import {
  QueryWrapperPlotNavProps,
  StandaloneQueryWrapperProps,
} from 'synapse-react-client'

export type PortalSearchPageProps = {
  selectedTabIndex?: number
  configs: QueryWrapperPlotNavProps[]
  searchPageTabs: PortalSearchTabConfig[]
}

function getQueryCount(queryResultBundleJSON: string) {
  const queryResultBundle = JSON.parse(
    queryResultBundleJSON,
  ) as QueryResultBundle
  const { queryCount } = queryResultBundle
  return queryCount
}

export function PortalSearchPage(props: PortalSearchPageProps) {
  const { selectedTabIndex, configs, searchPageTabs } = props
  // Note: Files does not currently enable FTS
  const [searchPageTabsState, setSearchPageTabsState] = useState<
    PortalSearchTabConfig[]
  >([...searchPageTabs])
  const navigate = useNavigate()
  const location = useLocation()
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
    },
    [searchPageTabsState, navigate, location.search],
  )
  const searchParamAwareQueryWrapperProps: StandaloneQueryWrapperProps[] =
    useMemo(() => {
      return configs.map((config, index) => {
        return {
          ...config,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            onQueryResultBundleChange(
              index,
              newQueryResultBundleJSON,
              selectedTabIndex,
            )
          },
        }
      })
    }, [configs, selectedTabIndex])

  // on search field value update, update the special search parameter FTS_SEARCH_TERM, which the QueryWrapperPlotNav will load as the search term
  return (
    <Box sx={{ p: { xs: '10px', lg: '50px' } }}>
      <PortalFullTextSearchField disabled={selectedTabIndex == undefined} />
      {selectedTabIndex != undefined && (
        <PortalSearchTabs tabConfig={searchPageTabsState} />
      )}
      {searchParamAwareQueryWrapperProps.map(
        (searchParamAwareQueryWrapperProps, index) => (
          <SearchParamAwareStandaloneQueryWrapper
            key={`searchResultTab-${selectedTabIndex}-${index}`}
            isVisible={selectedTabIndex == index}
            standaloneQueryWrapperProps={searchParamAwareQueryWrapperProps}
          />
        ),
      )}
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
