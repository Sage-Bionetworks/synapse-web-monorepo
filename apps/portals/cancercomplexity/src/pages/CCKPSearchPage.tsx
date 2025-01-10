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
    element: (
      <SearchParamAwareStandaloneQueryWrapper
        {...grantQueryWrapperPlotNavProps}
      />
    ),
  },
  {
    path: searchPageTabs[1].path,
    element: (
      <SearchParamAwareStandaloneQueryWrapper
        {...peopleQueryWrapperPlotNavProps}
      />
    ),
  },
]

export function CCKPSearchPage(props: React.PropsWithChildren) {
  const { children } = props
  // on search field value update, update the special search parameter FTS_SEARCH_TERM, which the QueryWrapperPlotNav will load as the search term
  return (
    <Box sx={{ p: { xs: '10px', lg: '50px' } }}>
      <PortalFullTextSearchField />
      <PortalSearchTabs tabConfig={searchPageTabs} />
      {children}
      <Outlet />
    </Box>
  )
}
