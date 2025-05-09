import cckpConfigs from '@/config/synapseConfigs'
import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'

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
  | 'trainee'
  | 'patientAdvocate'
export const roleMapping: Record<
  CCKPSearchRole,
  (typeof searchPageTabs)[number]['title']
> = {
  researcher: 'Datasets',
  principalInvestigator: 'Grants',
  funder: 'Grants',
  trainee: 'Educational Resources',
  patientAdvocate: 'Educational Resources',
}

export const portalSearchPageConfigs = [
  cckpConfigs.grants,
  cckpConfigs.people,
  cckpConfigs.publications,
  cckpConfigs.datasets,
  cckpConfigs.tools,
  cckpConfigs.education,
]
