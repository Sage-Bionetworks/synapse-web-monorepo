import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { Outlet } from 'react-router-dom'
import { hackathonsSql } from 'src/config/resources'
import { columnAliases } from 'src/config/synapseConfigs/commonProps'
import { hackathonCardConfiguration } from 'src/config/synapseConfigs/hackathons'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
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
        {...hackathonCardConfiguration}
        columnAliases={{ ...columnAliases, studyStatus: 'Status' }}
        secondaryLabelLimit={Infinity}
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
