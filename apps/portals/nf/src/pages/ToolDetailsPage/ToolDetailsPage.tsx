import { toolsSql } from '@/config/resources'
import {
  TOOLS_DETAILS_PAGE_DATA_TAB_PATH,
  TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
  TOOLS_DETAILS_PAGE_OBSERVATIONS_TAB_PATH,
} from '@/config/routeConstants'
import { toolsSchema } from '@/config/synapseConfigs/tools'
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
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { metadataConfig } from './ToolDetailsPage.config'

export { metadataConfig }

const _routeExports = createDetailPageRouteExports(metadataConfig, {
  portalName: import.meta.env.VITE_PORTAL_NAME,
})
export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta

export const toolDetailsPageTabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Details',
    path: TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
  },
  {
    title: 'Observations',
    path: TOOLS_DETAILS_PAGE_OBSERVATIONS_TAB_PATH,
  },
  {
    title: 'Data',
    path: TOOLS_DETAILS_PAGE_DATA_TAB_PATH,
  },
] satisfies DetailsPageTabConfig[]

function ToolDetailsPage() {
  const { resourceId } = useParams<{ resourceId: string }>()

  if (!resourceId) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <>
          <CardContainerLogic
            sql={toolsSql}
            cardConfiguration={{
              type: SynapseConstants.GENERIC_CARD,
              genericCardSchema: toolsSchema,
              secondaryLabelLimit: 6,
              isHeader: true,
            }}
            searchParams={{ resourceId }}
          />
        </>
      }
      sql={toolsSql}
      searchParams={{ resourceId }}
      ContainerProps={{ maxWidth: 'xl' }}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      resourcePrimaryKey={['resourceId']}
    >
      <DetailsPageTabs tabConfig={toolDetailsPageTabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default ToolDetailsPage
