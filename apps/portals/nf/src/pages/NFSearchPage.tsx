import { PortalSearchPage } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchPage'
import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { RouteObject } from 'react-router'
import nfConfigs from 'src/config/synapseConfigs'
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
const portalSearchPageConfigs = [
  nfConfigs.initiatives,
  nfConfigs.studies,
  nfConfigs.datasets,
  nfConfigs.publications,
  nfConfigs.tools,
  nfConfigs.hackathons,
]

export const searchPageChildRoutes: RouteObject[] = [
  {
    index: true,
    element: (
      <PortalSearchPage
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
  {
    path: searchPageTabs[4].path,
    element: (
      <PortalSearchPage
        selectedTabIndex={4}
        configs={portalSearchPageConfigs}
        searchPageTabs={searchPageTabs}
      />
    ),
  },
  {
    path: searchPageTabs[5].path,
    element: (
      <PortalSearchPage
        selectedTabIndex={5}
        configs={portalSearchPageConfigs}
        searchPageTabs={searchPageTabs}
      />
    ),
  },
]
