import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import columnAliases from '@/config/columnAliases'
import { toolsSql } from '@/config/resources'
import DatasetSvg from '@/config/style/Dataset.svg?url'
import { toolsConfiguration } from '@/config/synapseConfigs/tools'
import { SharePageLinkButton } from 'synapse-react-client/components/SharePageLinkButton'
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import {
  TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
  TOOLS_DETAILS_PAGE_SUSTAINABILITY_AND_REUSABILITY_TAB_PATH,
} from '@/config/routeConstants'
import { Outlet } from 'react-router'

export const toolDetailsPageTabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Details',
    path: TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
  },
  {
    title: 'Sustainability and Reusability Report',
    path: TOOLS_DETAILS_PAGE_SUSTAINABILITY_AND_REUSABILITY_TAB_PATH,
  },
] satisfies DetailsPageTabConfig[]

function ToolsDetailsPage() {
  const { toolName } = useGetPortalComponentSearchParams()

  if (!toolName) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <>
      <SharePageLinkButton {...sharePageLinkButtonDetailPageProps} />
      <CardContainerLogic
        cardConfiguration={{
          ...toolsConfiguration,
          iconOptions: {
            dataset: DatasetSvg,
          },
          secondaryLabelLimit: Infinity,
          isHeader: true,
        }}
        sql={toolsSql}
        columnAliases={columnAliases}
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
        searchParams={{ toolName }}
      />
      <DetailsPage
        sql={toolsSql}
        sqlOperator={ColumnSingleValueFilterOperator.LIKE}
      >
        <DetailsPageTabs tabConfig={toolDetailsPageTabConfig} />
        <Outlet />
      </DetailsPage>
    </>
  )
}

export default ToolsDetailsPage
