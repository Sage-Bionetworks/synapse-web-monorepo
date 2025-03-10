import {
  PortalSearchTabConfig,
  PortalSearchTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { PortalFullTextSearchField } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalFullTextSearchField'
import { SearchParamAwareStandaloneQueryWrapper } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/SearchParamAwareStandaloneQueryWrapper'
import { Box } from '@mui/material'
import { Outlet, RouteObject, useLocation, useNavigate } from 'react-router'
import nfConfigs from 'src/config/synapseConfigs'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { useCallback, useState } from 'react'
import { SynapseSpinner } from 'synapse-react-client/components/LoadingScreen/LoadingScreen'
export const searchPageTabs: PortalSearchTabConfig[] = [
  {
    title: 'Initiatives',
    path: 'Initiatives',
  },
  {
    title: 'Studies',
    path: 'Studies',
  },
  {
    title: 'Datasets',
    path: 'Datasets',
  },
  {
    title: 'Publications',
    path: 'Publications',
  },
  {
    title: 'Tools',
    path: 'Tools',
  },
  {
    title: 'Hackathons',
    path: 'Hackathons',
  },
]

export const searchPageChildRoutes: RouteObject[] = [
  {
    index: true,
    element: <NFSearchPage />,
  },
  {
    path: searchPageTabs[0].path,
    element: <NFSearchPage selectedTabIndex={0} />,
  },
  {
    path: searchPageTabs[1].path,
    element: <NFSearchPage selectedTabIndex={1} />,
  },
  {
    path: searchPageTabs[2].path,
    element: <NFSearchPage selectedTabIndex={2} />,
  },
  {
    path: searchPageTabs[3].path,
    element: <NFSearchPage selectedTabIndex={3} />,
  },
  {
    path: searchPageTabs[4].path,
    element: <NFSearchPage selectedTabIndex={4} />,
  },
  {
    path: searchPageTabs[5].path,
    element: <NFSearchPage selectedTabIndex={5} />,
  },
]

export type NFSearchPageProps = {
  selectedTabIndex?: number
}

function getQueryCount(queryResultBundleJSON: string) {
  const queryResultBundle = JSON.parse(
    queryResultBundleJSON,
  ) as QueryResultBundle
  const { queryCount } = queryResultBundle
  return queryCount
}

export function NFSearchPage(props: NFSearchPageProps) {
  const { selectedTabIndex } = props
  // Note: Files does not currently enable FTS
  const { initiatives, studies, datasets, publications, tools, hackathons } =
    nfConfigs
  const [searchPageTabsState, setSearchPageTabsState] =
    useState<PortalSearchTabConfig[]>(searchPageTabs)
  const navigate = useNavigate()
  const location = useLocation()

  const onQueryResultBundleChange = useCallback(
    (tabIndex: number, newQueryResultBundleJSON: string) => {
      const newCount = getQueryCount(newQueryResultBundleJSON)
      if (searchPageTabsState[tabIndex].count !== newCount) {
        searchPageTabs[tabIndex].count = newCount
        setSearchPageTabsState([...searchPageTabs])
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
    [searchPageTabsState, selectedTabIndex],
  )
  // on search field value update, update the special search parameter FTS_SEARCH_TERM, which the QueryWrapperPlotNav will load as the search term
  return (
    <Box sx={{ p: { xs: '10px', lg: '50px' } }}>
      <PortalFullTextSearchField disabled={selectedTabIndex == undefined} />
      {selectedTabIndex != undefined && (
        <PortalSearchTabs tabConfig={searchPageTabsState} />
      )}
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 0}
        standaloneQueryWrapperProps={{
          ...initiatives,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            onQueryResultBundleChange(0, newQueryResultBundleJSON)
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 1}
        standaloneQueryWrapperProps={{
          ...studies,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            onQueryResultBundleChange(1, newQueryResultBundleJSON)
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 2}
        standaloneQueryWrapperProps={{
          ...datasets,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            onQueryResultBundleChange(2, newQueryResultBundleJSON)
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 3}
        standaloneQueryWrapperProps={{
          ...publications,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            onQueryResultBundleChange(3, newQueryResultBundleJSON)
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 4}
        standaloneQueryWrapperProps={{
          ...tools,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            onQueryResultBundleChange(4, newQueryResultBundleJSON)
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 5}
        standaloneQueryWrapperProps={{
          ...hackathons,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            onQueryResultBundleChange(5, newQueryResultBundleJSON)
          },
        }}
      />
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
