import {
  PortalSearchTabConfig,
  PortalSearchTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { PortalFullTextSearchField } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalFullTextSearchField'

import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { Outlet, RouteObject } from 'react-router-dom'
import { grantQueryWrapperPlotNavProps } from 'src/config/synapseConfigs/grants'
import { QueryWrapperPlotNav } from 'synapse-react-client'
export const searchPageTabs: PortalSearchTabConfig[] = [
  {
    title: 'Grants',
    path: 'Grants',
    tooltip: 'Search Grants',
  },
]

export const searchPageChildRoutes: RouteObject[] = [
  {
    index: true,
    element: <RedirectWithQuery to={searchPageTabs[0].path} />,
  },
  {
    path: searchPageTabs[0].path,
    element: <QueryWrapperPlotNav {...grantQueryWrapperPlotNavProps} />,
  },
]

export function CCKPSearchPage(props: React.PropsWithChildren) {
  const { children } = props
  const searchParams = useGetPortalComponentSearchParams()
  // on search field value update, update the special search parameter FTS_SEARCH_TERM, which the QueryWrapperPlotNav will load as the search term
  return (
    <>
      <PortalFullTextSearchField />
      <PortalSearchTabs tabConfig={searchPageTabs} />
      {children}
      <Outlet />
    </>
  )
}
