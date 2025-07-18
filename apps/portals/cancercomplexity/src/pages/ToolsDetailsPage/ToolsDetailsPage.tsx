import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ColumnSingleValueFilterOperator,
  FeatureFlagEnum,
} from '@sage-bionetworks/synapse-types'
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
import { useSustainabilityScorecardProps } from './ToolsDetailsPageUtils'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries'
import { useSustainabilityScorecardIfHasData } from 'synapse-react-client/components/SustainabilityScorecard/SustainabilityScorecardUtils'

function ToolsDetailsPage() {
  const { toolName } = useGetPortalComponentSearchParams()
  const isFeatureFlagEnabled = useGetFeatureFlag(
    FeatureFlagEnum.PORTAL_SUSTAINABILITY_SCORECARD,
  )

  const { summaryProps, scorecardProps } =
    useSustainabilityScorecardProps(toolName)

  const showSustainabilityTab =
    useSustainabilityScorecardIfHasData(summaryProps)

  const sustainabilityScorecard =
    useSustainabilityScorecardIfHasData(scorecardProps)

  const toolDetailsPageTabConfig: DetailsPageTabConfig[] = [
    {
      title: 'Details',
      path: TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
    },
    ...(showSustainabilityTab && isFeatureFlagEnabled
      ? [
          {
            title: 'Sustainability and Reusability Report',
            path: TOOLS_DETAILS_PAGE_SUSTAINABILITY_AND_REUSABILITY_TAB_PATH,
          },
        ]
      : []),
  ] satisfies DetailsPageTabConfig[]

  if (!toolName) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
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
              sustainabilityScorecard,
            }}
            sql={toolsSql}
            columnAliases={columnAliases}
            sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
            searchParams={{ toolName }}
          />
        </>
      }
      sql={toolsSql}
      sqlOperator={ColumnSingleValueFilterOperator.LIKE}
    >
      <DetailsPageTabs tabConfig={toolDetailsPageTabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default ToolsDetailsPage
