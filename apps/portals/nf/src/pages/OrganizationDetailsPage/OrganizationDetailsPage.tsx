import { fundersSql } from '@/config/resources'
import {
  ORGANIZATION_ANALYTICS_TAB_PATH,
  ORGANIZATION_DATASETS_TAB_PATH,
  ORGANIZATION_DETAILS_TAB_PATH,
  ORGANIZATION_PUBLICATIONS_TAB_PATH,
  ORGANIZATION_STUDIES_TAB_PATH,
} from '@/config/routeConstants'
import { organizationCardSchema } from '@/config/synapseConfigs/organizations'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { useMemo } from 'react'
import { Outlet, useParams } from 'react-router'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import { useGetCurrentUserProfile } from 'synapse-react-client/synapse-queries/user/useUserBundle'
import { useGetIsUserMemberOfTeam } from 'synapse-react-client/synapse-queries/team/useTeamMembers'
import { metadataConfig } from './OrganizationDetailsPage.config'

/** Funder-specific admin teams — members see that funder's Analytics tab. */
const FUNDER_TEAM_IDS: Record<string, string> = {
  CTF: '3359657',
  NTAP: '3331266',
  GFF: '3406072',
}

/** Cross-funder staff teams — members see ALL funders' Analytics tabs. */
const STAFF_TEAM_IDS = {
  NF_OSI: '3378999', // NF-OSI Sage Team
  SAGE: '273957', // Sage Bionetworks
}

export { metadataConfig }

const _routeExports = createDetailPageRouteExports(metadataConfig, {
  portalName: import.meta.env.VITE_PORTAL_NAME,
  portalKey: import.meta.env.VITE_PORTAL_KEY,
})
export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta

const BASE_TABS: DetailsPageTabConfig[] = [
  {
    title: 'Organization Details',
    path: ORGANIZATION_DETAILS_TAB_PATH,
    iconName: 'study',
  },
  {
    title: 'Studies',
    path: ORGANIZATION_STUDIES_TAB_PATH,
    iconName: 'chart',
    tooltip: 'Study portfolio with data release and status breakdowns',
  },
  {
    title: 'Datasets',
    path: ORGANIZATION_DATASETS_TAB_PATH,
    iconName: 'database',
    tooltip: "All datasets generated from this Organization's studies",
    iconClassName: 'tab-database',
  },
  {
    title: 'Publications',
    path: ORGANIZATION_PUBLICATIONS_TAB_PATH,
    iconName: 'chart',
    tooltip: "Publications linked to this Organization's studies",
  },
]

const ANALYTICS_TAB: DetailsPageTabConfig = {
  title: 'Analytics',
  path: ORGANIZATION_ANALYTICS_TAB_PATH,
  iconName: 'chart',
  tooltip: 'Data downloads, unique users, and usage by institution type',
}

function OrganizationDetailsPage() {
  const { abbreviation } = useParams<{ abbreviation: string }>()

  // Show Analytics tab to: (a) funder-specific admin team, or (b) any NF-OSI/Sage staff.
  // Always call exactly 3 hooks (Rules of Hooks).
  const { data: userProfile } = useGetCurrentUserProfile()
  const userId = userProfile?.ownerId ?? ''
  const funderTeamId = FUNDER_TEAM_IDS[abbreviation ?? ''] ?? ''
  const { data: funderMembership } = useGetIsUserMemberOfTeam(
    funderTeamId,
    userId,
    { enabled: !!funderTeamId && !!userId },
  )
  const { data: nfosiMembership } = useGetIsUserMemberOfTeam(
    STAFF_TEAM_IDS.NF_OSI,
    userId,
    { enabled: !!userId },
  )
  const { data: sageMembership } = useGetIsUserMemberOfTeam(
    STAFF_TEAM_IDS.SAGE,
    userId,
    { enabled: !!userId },
  )
  const isFunderMember = !!(
    funderMembership ||
    nfosiMembership ||
    sageMembership
  )

  const tabConfig = useMemo<DetailsPageTabConfig[]>(
    () => (isFunderMember ? [...BASE_TABS, ANALYTICS_TAB] : BASE_TABS),
    [isFunderMember],
  )
  const searchParams: Record<string, string> = abbreviation
    ? { abbreviation }
    : {}

  if (!abbreviation) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          sql={fundersSql}
          cardConfiguration={{
            type: SynapseConstants.GENERIC_CARD,
            genericCardSchema: {
              ...organizationCardSchema,
              imageFileHandleColumnName: 'headerLogo',
            },
            isHeader: true,
          }}
          searchParams={searchParams}
        />
      }
      sql={fundersSql}
      searchParams={searchParams}
      ContainerProps={{ maxWidth: 'xl' }}
      resourcePrimaryKey={['abbreviation']}
      disableCanonicalUrl
    >
      <DetailsPageTabs tabConfig={tabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default OrganizationDetailsPage
