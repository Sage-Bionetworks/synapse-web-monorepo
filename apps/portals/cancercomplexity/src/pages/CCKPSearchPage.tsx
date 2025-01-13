import {
  PortalSearchTabConfig,
  PortalSearchTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { PortalFullTextSearchField } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalFullTextSearchField'
import { SearchParamAwareStandaloneQueryWrapper } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/SearchParamAwareStandaloneQueryWrapper'
import { Box } from '@mui/material'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { Outlet, RouteObject } from 'react-router-dom'
import cckpConfigs from 'src/config/synapseConfigs'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
export const searchPageTabs: PortalSearchTabConfig[] = [
  {
    title: 'Grants',
    path: 'Grants',
  },
  {
    title: 'People',
    path: 'People',
  },
  {
    title: 'Publications',
    path: 'Publications',
  },
  {
    title: 'Datasets',
    path: 'Datasets',
  },
  {
    title: 'Tools',
    path: 'Tools',
  },
  {
    title: 'Educational Resources',
    path: 'EducationalResources',
  },
]

export const searchPageChildRoutes: RouteObject[] = [
  {
    index: true,
    element: <RedirectWithQuery to={searchPageTabs[0].path} />,
  },
  {
    path: searchPageTabs[0].path,
    element: <CCKPSearchPage selectedTabIndex={0} />,
  },
  {
    path: searchPageTabs[1].path,
    element: <CCKPSearchPage selectedTabIndex={1} />,
  },
  {
    path: searchPageTabs[2].path,
    element: <CCKPSearchPage selectedTabIndex={2} />,
  },
  {
    path: searchPageTabs[3].path,
    element: <CCKPSearchPage selectedTabIndex={3} />,
  },
  {
    path: searchPageTabs[4].path,
    element: <CCKPSearchPage selectedTabIndex={4} />,
  },
  {
    path: searchPageTabs[5].path,
    element: <CCKPSearchPage selectedTabIndex={5} />,
  },
]

export type CCKPSearchPageProps = {
  selectedTabIndex: number
}

function getQueryCount(queryResultBundleJSON: string) {
  const queryResultBundle = JSON.parse(
    queryResultBundleJSON,
  ) as QueryResultBundle
  const { queryCount } = queryResultBundle
  return queryCount
}

export function CCKPSearchPage(props: CCKPSearchPageProps) {
  const { selectedTabIndex } = props
  const { datasets, education, grants, people, publications, tools } =
    cckpConfigs
  const [searchPageTabsState, setSearchPageTabsState] =
    useState<PortalSearchTabConfig[]>(searchPageTabs)
  // on search field value update, update the special search parameter FTS_SEARCH_TERM, which the QueryWrapperPlotNav will load as the search term
  return (
    <Box sx={{ p: { xs: '10px', lg: '50px' } }}>
      <PortalFullTextSearchField />
      <PortalSearchTabs tabConfig={searchPageTabsState} />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 0}
        standaloneQueryWrapperProps={{
          ...grants,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            searchPageTabs[0].count = getQueryCount(newQueryResultBundleJSON)
            setSearchPageTabsState([...searchPageTabs])
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 1}
        standaloneQueryWrapperProps={{
          ...people,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            searchPageTabs[1].count = getQueryCount(newQueryResultBundleJSON)
            setSearchPageTabsState([...searchPageTabs])
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 2}
        standaloneQueryWrapperProps={{
          ...publications,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            searchPageTabs[2].count = getQueryCount(newQueryResultBundleJSON)
            setSearchPageTabsState([...searchPageTabs])
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 3}
        standaloneQueryWrapperProps={{
          ...datasets,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            searchPageTabs[3].count = getQueryCount(newQueryResultBundleJSON)
            setSearchPageTabsState([...searchPageTabs])
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 4}
        standaloneQueryWrapperProps={{
          ...tools,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            searchPageTabs[4].count = getQueryCount(newQueryResultBundleJSON)
            setSearchPageTabsState([...searchPageTabs])
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 5}
        standaloneQueryWrapperProps={{
          ...education,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            searchPageTabs[5].count = getQueryCount(newQueryResultBundleJSON)
            setSearchPageTabsState([...searchPageTabs])
          },
        }}
      />
      <Outlet />
    </Box>
  )
}
