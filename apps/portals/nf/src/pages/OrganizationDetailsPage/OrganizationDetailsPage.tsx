import { fundersSql } from '@/config/resources'
import { organizationCardSchema } from '@/config/synapseConfigs/organizations'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { Outlet, useParams } from 'react-router'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import {
  ORGANIZATION_DATA_TAB_PATH,
  ORGANIZATION_DETAILS_TAB_PATH,
} from '@/config/routeConstants'
import { metadataConfig } from './OrganizationDetailsPage.config'

export { metadataConfig }

const _routeExports = createDetailPageRouteExports(metadataConfig, {
  portalName: import.meta.env.VITE_PORTAL_NAME,
})
export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta

const tabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Organization Details',
    path: ORGANIZATION_DETAILS_TAB_PATH,
    iconName: 'study',
  },
  {
    title: 'Organization Data',
    path: ORGANIZATION_DATA_TAB_PATH,
    iconName: 'database',
    tooltip: "All of the Data generated from this Organization's studies",
    iconClassName: 'tab-database',
  },
]

function OrganizationDetailsPage() {
  const { abbreviation } = useParams<{ abbreviation: string }>()
  const searchParams: Record<string, string> = abbreviation
    ? { abbreviation }
    : {}
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
    >
      <DetailsPageTabs tabConfig={tabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default OrganizationDetailsPage
