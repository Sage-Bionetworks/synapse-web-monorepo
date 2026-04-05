import { fundersSql } from '@/config/resources'
import {
  ORGANIZATION_DATA_TAB_PATH,
  ORGANIZATION_DETAILS_TAB_PATH,
} from '@/config/routeConstants'
import { organizationCardSchema } from '@/config/synapseConfigs/organizations'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { Outlet, useParams } from 'react-router'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import { metadataConfig } from './OrganizationDetailsPage.config'

export { metadataConfig }

const _routeExports = createDetailPageRouteExports(metadataConfig, {
  portalName: import.meta.env.VITE_PORTAL_NAME,
  portalKey: import.meta.env.VITE_PORTAL_KEY,
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
