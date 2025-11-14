import { studiesSql } from '@/config/resources'
import {
  STUDY_DETAILS_PAGE_DATA_TAB_PATH,
  STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
} from '@/config/routeConstants'
import studyHeaderSvg from '@/config/style/study-header.svg?url'
import {
  STUDY_TABLE_COLUMN_NAMES,
  studyCardConfiguration,
  studyColumnAliases,
  studyDoiConfiguration,
} from '@/config/synapseConfigs/studies'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { DetailsPageProps } from '@sage-bionetworks/synapse-portal-framework/types/portal-util-types'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { Outlet } from 'react-router'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic/index'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'

const studyDetailsPageTabs: DetailsPageTabConfig[] = [
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
    iconClassName: 'tab-database',
    tooltip: 'All of the Data generated within this study',
  },
]

const studiesDetailsPageProps: DetailsPageProps = {
  sql: studiesSql,
  sqlOperator: ColumnSingleValueFilterOperator.LIKE,
  portalDOIConfiguration: studyDoiConfiguration,
  resourcePrimaryKey: [STUDY_TABLE_COLUMN_NAMES.STUDY],
}

function StudyDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()

  const study = searchParams[STUDY_TABLE_COLUMN_NAMES.STUDY]
  const studyName = searchParams[STUDY_TABLE_COLUMN_NAMES.STUDY_NAME]

  if (study == null && studyName == null) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      {...studiesDetailsPageProps}
      header={
        <CardContainerLogic
          cardConfiguration={{
            ...studyCardConfiguration,
            secondaryLabelLimit: Infinity,
            iconOptions: {
              study: studyHeaderSvg,
            },
            isHeader: true,
          }}
          sql={studiesSql}
          columnAliases={studyColumnAliases}
          isAlignToLeftNav={true}
          searchParams={searchParams}
        />
      }
    >
      <DetailsPageTabs tabConfig={studyDetailsPageTabs} />
      <Outlet />
    </DetailsPage>
  )
}

export default StudyDetailsPage
