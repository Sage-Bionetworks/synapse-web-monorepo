import { hackathonsSql } from '@/config/resources'
import { columnAliases } from '@/config/synapseConfigs/commonProps'
import { hackathonCardConfiguration } from '@/config/synapseConfigs/hackathons'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { Outlet } from 'react-router'
import { CardContainerLogic } from 'synapse-react-client'
import HackathonBackgroundResultsTab from './HackathonBackgroundResultsTab'
import HackathonMethodologyTab from './HackathonMethodologyTab'

const tabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Background & Results',
    path: 'Background&Results',
    iconName: 'chart',
  },
  {
    title: 'Methodology',
    path: 'Methodology',
    iconName: 'database',
    iconClassName: 'tab-database',
  },
]

function HackathonDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()
  return (
    <>
      <CardContainerLogic
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
        isHeader={true}
        cardConfiguration={{
          ...hackathonCardConfiguration,
          secondaryLabelLimit: Infinity,
        }}
        columnAliases={{ ...columnAliases, studyStatus: 'Status' }}
        sql={hackathonsSql}
        searchParams={{ id }}
      />
      <DetailsPage sql={hackathonsSql} ContainerProps={{ maxWidth: 'xl' }}>
        <DetailsPageTabs tabConfig={tabConfig} />
        <Outlet />
      </DetailsPage>
    </>
  )
}

export const hackathonDetailsPageRoutesConfig = {
  path: 'Explore/Hackathon/DetailsPage',
  element: <HackathonDetailsPage />,
  children: [
    {
      index: true,
      element: <RedirectWithQuery to={tabConfig[0].path} />,
    },
    {
      path: tabConfig[0].path,
      element: <HackathonBackgroundResultsTab />,
    },
    {
      path: tabConfig[1].path,
      element: <HackathonMethodologyTab />,
    },
  ],
}
