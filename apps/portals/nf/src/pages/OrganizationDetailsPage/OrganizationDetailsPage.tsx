import { fundersSql } from '@/config/resources'
import { organizationCardSchema } from '@/config/synapseConfigs/organizations'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { Outlet, RouteObject } from 'react-router'
import { CardContainerLogic, SynapseConstants } from 'synapse-react-client'
import OrganizationDataTab from './OrganizationDataTab'
import OrganizationDetailsTab from './OrganizationDetailsTab'

const tabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Organization Details',
    path: 'Details',
    iconName: 'study',
  },
  {
    title: 'Organization Data',
    path: 'Data',
    iconName: 'database',
    tooltip: 'All of the Data generated from this Organization’s studies',
    iconClassName: 'tab-database',
  },
]

function OrganizationDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()
  return (
    <>
      <CardContainerLogic
        sql={fundersSql}
        cardConfiguration={{
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema: {
            ...organizationCardSchema,
            imageFileHandleColumnName: 'headerLogo',
          },
        }}
        isHeader={true}
        searchParams={searchParams}
      />
      <DetailsPage
        sql={fundersSql}
        ContainerProps={{ maxWidth: 'xl' }}
        resourcePrimaryKey={['abbreviation']}
      >
        <DetailsPageTabs tabConfig={tabConfig} />
        <Outlet />
      </DetailsPage>
    </>
  )
}

export const organizationsDetailsPageRoute: RouteObject = {
  path: 'Organizations/DetailsPage',
  element: <OrganizationDetailsPage />,
  children: [
    {
      index: true,
      element: <RedirectWithQuery to={tabConfig[0].path} />,
    },
    {
      path: tabConfig[0].path,
      element: <OrganizationDetailsTab />,
    },
    {
      path: tabConfig[1].path,
      element: <OrganizationDataTab />,
    },
  ],
}
