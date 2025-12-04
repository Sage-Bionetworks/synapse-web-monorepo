import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { Outlet } from 'react-router'
import { CardContainerLogic } from 'synapse-react-client'
import { studiesSql } from '../../config/resources'
import studyHeaderSvg from '../../config/style/study-header.svg?url'
import {
  studyCardConfiguration,
  studyColumnAliases,
  studyDoiConfiguration,
} from '../../config/synapseConfigs/studies'
import {
  STUDY_DETAILS_PAGE_DATA_TAB_PATH,
  STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
} from '@/config/routeConstants'

export const studyDetailsPageTabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Study Details',
    path: STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
    iconName: 'study',
    tooltip: 'Description, methods, acknowledgements and related studies',
  },
  {
    title: 'Study Data',
    path: STUDY_DETAILS_PAGE_DATA_TAB_PATH,
    iconName: 'database',
    tooltip: 'All of the Data generated within this study',
    iconClassName: 'tab-database',
  },
] satisfies DetailsPageTabConfig[]

function StudyDetailsPage() {
  const { studyKey } = useGetPortalComponentSearchParams()

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          sql={studiesSql}
          cardConfiguration={{
            ...studyCardConfiguration,
            secondaryLabelLimit: Infinity,
            iconOptions: { study: studyHeaderSvg },
            isHeader: true,
          }}
          columnAliases={studyColumnAliases}
          isAlignToLeftNav
          searchParams={{ studyKey }}
        />
      }
      sql={studiesSql}
      sqlOperator={ColumnSingleValueFilterOperator.LIKE}
      ContainerProps={{
        maxWidth: 'xl',
      }}
      resourcePrimaryKey={['studyKey']}
      portalDOIConfiguration={studyDoiConfiguration}
    >
      <DetailsPageTabs tabConfig={studyDetailsPageTabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default StudyDetailsPage
