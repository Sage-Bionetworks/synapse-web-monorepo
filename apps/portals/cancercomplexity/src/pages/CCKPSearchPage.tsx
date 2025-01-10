import {
  PortalSearchTabConfig,
  PortalSearchTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { PortalFullTextSearchField } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalFullTextSearchField'
import { SearchParamAwareStandaloneQueryWrapper } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/SearchParamAwareStandaloneQueryWrapper'
import { Box } from '@mui/material'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { Outlet, RouteObject } from 'react-router-dom'
import { grantQueryWrapperPlotNavProps } from 'src/config/synapseConfigs/grants'
import { peopleQueryWrapperPlotNavProps } from 'src/config/synapseConfigs'
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
  const [searchPageTabsState, setSearchPageTabsState] =
    useState<PortalSearchTabConfig[]>(searchPageTabs)
  // on search field value update, update the special search parameter FTS_SEARCH_TERM, which the QueryWrapperPlotNav will load as the search term
  return (
    <Box sx={{ p: { xs: '10px', lg: '50px' } }}>
      <PortalFullTextSearchField />
      <PortalSearchTabs tabConfig={searchPageTabsState} />
      <SearchParamAwareStandaloneQueryWrapper
        sx={{ display: selectedTabIndex == 0 ? undefined : 'none' }}
        standaloneQueryWrapperProps={{
          ...grantQueryWrapperPlotNavProps,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            searchPageTabs[0].count = getQueryCount(newQueryResultBundleJSON)
            setSearchPageTabsState([...searchPageTabs])
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        sx={{ display: selectedTabIndex == 1 ? undefined : 'none' }}
        standaloneQueryWrapperProps={{
          ...peopleQueryWrapperPlotNavProps,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            searchPageTabs[1].count = getQueryCount(newQueryResultBundleJSON)
            setSearchPageTabsState([...searchPageTabs])
          },
        }}
      />
      <Outlet />
    </Box>
  )
}
