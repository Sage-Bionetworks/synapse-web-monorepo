import { fundersSql } from '@/config/resources'
import { organizationCardSchema } from '@/config/synapseConfigs/organizations'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { Outlet } from 'react-router'
import { CardContainerLogic, SynapseConstants } from 'synapse-react-client'
import {
  ORGANIZATION_DATA_TAB_PATH,
  ORGANIZATION_DETAILS_TAB_PATH,
} from '@/config/routeConstants'

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
    tooltip: 'All of the Data generated from this Organization’s studies',
    iconClassName: 'tab-database',
  },
]

function OrganizationDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()
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
      ContainerProps={{ maxWidth: 'xl' }}
      resourcePrimaryKey={['abbreviation']}
    >
      <DetailsPageTabs tabConfig={tabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default OrganizationDetailsPage
