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
} from '../../config/synapseConfigs/studies'

export const studyDetailsPageTabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Study Details',
    path: 'StudyDetails',
    iconName: 'study',
    tooltip: 'Description, methods, acknowledgements and related studies',
  },
  {
    title: 'Study Data',
    path: 'StudyData',
    iconName: 'database',
    tooltip: 'All of the Data generated within this study',
    iconClassName: 'tab-database',
  },
] satisfies DetailsPageTabConfig[]

function StudyDetailsPage() {
  const { studyKey } = useGetPortalComponentSearchParams()

  return (
    <>
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
      <DetailsPage
        sql={studiesSql}
        sqlOperator={ColumnSingleValueFilterOperator.LIKE}
        ContainerProps={{
          maxWidth: 'xl',
        }}
      >
        <DetailsPageTabs tabConfig={studyDetailsPageTabConfig} />
        <Outlet />
      </DetailsPage>
    </>
  )
}

export default StudyDetailsPage
