import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import columnAliases from '@/config/columnAliases'
import { portalMetadata } from '@/config/portalMetadata'
import { toolsSql } from '@/config/resources'
import DatasetSvg from '@/config/style/Dataset.svg?url'
import { toolsConfiguration } from '@/config/synapseConfigs/tools'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic/index'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import {
  TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
  TOOLS_DETAILS_PAGE_SUSTAINABILITY_AND_REUSABILITY_TAB_PATH,
} from '@/config/routeConstants'
import { Outlet, useParams } from 'react-router'
import { useSustainabilityScorecardProps } from './ToolsDetailsPageUtils'
import { useSustainabilityScorecardIfHasData } from 'synapse-react-client/components/SustainabilityScorecard/SustainabilityScorecardUtils'
import { metadataConfig } from './ToolsDetailsPage.config'

export { metadataConfig }

const _routeExports = createDetailPageRouteExports(
  metadataConfig,
  portalMetadata,
)
export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta

function ToolsDetailsPage() {
  const { toolName } = useParams<{ toolName: string }>()

  const { summaryProps, scorecardProps } = useSustainabilityScorecardProps(
    toolName ?? '',
  )

  const showSustainabilityTab =
    useSustainabilityScorecardIfHasData(summaryProps)

  const sustainabilityScorecard =
    useSustainabilityScorecardIfHasData(scorecardProps)

  const toolDetailsPageTabConfig: DetailsPageTabConfig[] = [
    {
      title: 'Details',
      path: TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
    },
    ...(showSustainabilityTab
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
      searchParams={{ toolName }}
      sqlOperator={ColumnSingleValueFilterOperator.LIKE}
      resourcePrimaryKey={['toolName']}
      disableCanonicalUrl
    >
      <DetailsPageTabs tabConfig={toolDetailsPageTabConfig} />
      <Outlet
        context={{ defaultTabPath: TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH }}
      />
    </DetailsPage>
  )
}

export default ToolsDetailsPage
