import { toolsSql } from '@/config/resources'
import {
  TOOLS_DETAILS_PAGE_DATA_TAB_PATH,
  TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
  TOOLS_DETAILS_PAGE_OBSERVATIONS_TAB_PATH,
} from '@/config/routeConstants'
import { toolsSchema } from '@/config/synapseConfigs/tools'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { Outlet } from 'react-router'
import {
  CardContainerLogic,
  ErrorPage,
  SharePageLinkButton,
  SynapseConstants,
  SynapseErrorType,
} from 'synapse-react-client'

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
  const { resourceId } = useGetPortalComponentSearchParams()

  if (!resourceId) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <>
          <SharePageLinkButton {...sharePageLinkButtonDetailPageProps} />
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
      ContainerProps={{ maxWidth: 'xl' }}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
    >
      <DetailsPageTabs tabConfig={toolDetailsPageTabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default ToolDetailsPage
