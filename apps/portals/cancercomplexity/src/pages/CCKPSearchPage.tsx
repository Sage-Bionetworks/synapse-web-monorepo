import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { RouteObject } from 'react-router'
import cckpConfigs from 'src/config/synapseConfigs'
import { PortalSearchPage } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchPage'

export const searchPageTabs = [
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
] as const satisfies PortalSearchTabConfig[]

type CCKPSearchRole =
  | 'researcher'
  | 'principalInvestigator'
  | 'funder'
  | 'student'
  | 'patientAdvocate'
const roleMapping: Record<
  CCKPSearchRole,
  (typeof searchPageTabs)[number]['title']
> = {
  researcher: 'Datasets',
  principalInvestigator: 'Grants',
  funder: 'Grants',
  student: 'Educational Resources',
  patientAdvocate: 'Educational Resources',
}

const portalSearchPageConfigs = [
  cckpConfigs.grants,
  cckpConfigs.people,
  cckpConfigs.publications,
  cckpConfigs.datasets,
  cckpConfigs.tools,
  cckpConfigs.education,
]

export const searchPageChildRoutes: RouteObject[] = [
  {
    index: true,
    element: (
      <PortalSearchPage
        selectedTabIndex={undefined}
        configs={portalSearchPageConfigs}
        searchPageTabs={searchPageTabs}
        roleMapping={roleMapping}
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
        roleMapping={roleMapping}
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
        roleMapping={roleMapping}
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
        roleMapping={roleMapping}
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
        roleMapping={roleMapping}
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
        roleMapping={roleMapping}
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
        roleMapping={roleMapping}
      />
    ),
  },
]
