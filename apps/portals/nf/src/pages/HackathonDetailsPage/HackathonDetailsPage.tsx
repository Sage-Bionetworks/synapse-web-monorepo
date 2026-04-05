import { hackathonsSql } from '@/config/resources'
import { columnAliases } from '@/config/synapseConfigs/commonProps'
import { hackathonCardConfiguration } from '@/config/synapseConfigs/hackathons'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { Outlet, useParams } from 'react-router'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import {
  HACKATHONS_DETAILS_PAGE_BACKGROUND_AND_RESULTS_TAB_PATH,
  HACKATHONS_DETAILS_PAGE_METHODOLOGY_TAB_PATH,
} from '@/config/routeConstants'
import { metadataConfig } from './HackathonDetailsPage.config'

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
      searchParams={{ id }}
      ContainerProps={{ maxWidth: 'xl' }}
      resourcePrimaryKey={['id']}
      disableCanonicalUrl
    >
      <DetailsPageTabs tabConfig={tabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default HackathonDetailsPage
