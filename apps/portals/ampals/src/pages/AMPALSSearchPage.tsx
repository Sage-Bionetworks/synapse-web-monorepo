import configs from '@/config/synapseConfigs'
import { PortalSearchPage } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchPage'
import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { RouteObject } from 'react-router'

export const searchPageTabs = [
  {
    title: 'Programs',
    path: 'Programs',
  },
  {
    title: 'Collections',
    path: 'Collections',
  },
  {
    title: 'Datasets',
    path: 'Datasets',
  },
  {
    title: 'Data',
    path: 'Data',
  },
] as const satisfies PortalSearchTabConfig[]

const portalSearchPageConfigs = [
  configs.programs,
  configs.collections,
  configs.datasets,
  configs.data,
]

export const searchPageChildRoutes: RouteObject[] = [
  {
    index: true,
    element: (
      <PortalSearchPage
        selectedTabIndex={undefined}
        configs={portalSearchPageConfigs}
        searchPageTabs={searchPageTabs}
      />
    ),
  },
  {
    path: searchPageTabs[0].path,
    element: (
      <PortalSearchPage
        selectedTabIndex={0}
        configs={portalSearchPageConfigs}
        searchPageTabs={searchPageTabs}
      />
    ),
  },
  {
    path: searchPageTabs[1].path,
    element: (
      <PortalSearchPage
        selectedTabIndex={1}
        configs={portalSearchPageConfigs}
        searchPageTabs={searchPageTabs}
      />
    ),
  },
  {
    path: searchPageTabs[2].path,
    element: (
      <PortalSearchPage
        selectedTabIndex={2}
        configs={portalSearchPageConfigs}
        searchPageTabs={searchPageTabs}
      />
    ),
  },
  {
    path: searchPageTabs[3].path,
    element: (
      <PortalSearchPage
        selectedTabIndex={3}
        configs={portalSearchPageConfigs}
        searchPageTabs={searchPageTabs}
      />
    ),
  },
]
