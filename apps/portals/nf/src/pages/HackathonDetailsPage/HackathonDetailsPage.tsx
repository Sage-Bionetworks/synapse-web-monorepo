import { hackathonsSql } from '@/config/resources'
import { columnAliases } from '@/config/synapseConfigs/commonProps'
import { hackathonCardConfiguration } from '@/config/synapseConfigs/hackathons'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { Outlet, useParams } from 'react-router'
import {
  CardContainerLogic,
  ErrorPage,
  SynapseErrorType,
} from 'synapse-react-client'
import {
  HACKATHONS_DETAILS_PAGE_BACKGROUND_AND_RESULTS_TAB_PATH,
  HACKATHONS_DETAILS_PAGE_METHODOLOGY_TAB_PATH,
} from '@/config/routeConstants'

const tabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Background & Results',
    path: HACKATHONS_DETAILS_PAGE_BACKGROUND_AND_RESULTS_TAB_PATH,
    iconName: 'chart',
  },
  {
    title: 'Methodology',
    path: HACKATHONS_DETAILS_PAGE_METHODOLOGY_TAB_PATH,
    iconName: 'database',
    iconClassName: 'tab-database',
  },
]

function HackathonDetailsPage() {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
          cardConfiguration={{
            ...hackathonCardConfiguration,
            secondaryLabelLimit: Infinity,
            isHeader: true,
          }}
          columnAliases={{ ...columnAliases, studyStatus: 'Status' }}
          sql={hackathonsSql}
          searchParams={{ id }}
        />
      }
      sql={hackathonsSql}
      ContainerProps={{ maxWidth: 'xl' }}
      resourcePrimaryKey={['id']}
    >
      <DetailsPageTabs tabConfig={tabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default HackathonDetailsPage
