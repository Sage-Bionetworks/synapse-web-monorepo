import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { Outlet } from 'react-router'
import {
  CardContainerLogic,
  ErrorPage,
  SynapseErrorType,
} from 'synapse-react-client'
import { studiesSql } from '../../config/resources'
import { columnAliases } from '../../config/synapseConfigs/commonProps'
import {
  studyCardConfiguration,
  studyHeaderIconOptions,
} from '../../config/synapseConfigs/studies'
import {
  STUDY_DETAILS_PAGE_ADDITIONAL_FILES_TAB_PATH,
  STUDY_DETAILS_PAGE_DATASETS_TAB_PATH,
  STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
  STUDY_DETAILS_PAGE_FILES_TAB_PATH,
} from '@/config/routeConstants'

const tabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Study Details',
    path: STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
    iconName: 'study',
    tooltip: 'Description, methods, acknowledgements and related studies',
  },
  {
    title: 'Study Datasets',
    path: STUDY_DETAILS_PAGE_DATASETS_TAB_PATH,
    iconName: 'dataset',
    tooltip: 'All of the Datasets generated within this study',
    iconClassName: 'tab-dataset',
  },
  {
    title: 'Study Files',
    path: STUDY_DETAILS_PAGE_FILES_TAB_PATH,
    iconName: 'database',
    tooltip: 'File data generated within this study',
    iconClassName: 'tab-database',
  },
  {
    title: 'Additional Files',
    path: STUDY_DETAILS_PAGE_ADDITIONAL_FILES_TAB_PATH,
    iconName: 'database',
    tooltip: 'Additional file data generated within this study',
    iconClassName: 'tab-database',
  },
]

function StudyDetailsPage() {
  const { studyId } = useGetPortalComponentSearchParams()

  if (!studyId) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <>
          <CardContainerLogic
            sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
            cardConfiguration={{
              ...studyCardConfiguration,
              secondaryLabelLimit: Infinity,
              iconOptions: studyHeaderIconOptions,
              isHeader: true,
            }}
            columnAliases={columnAliases}
            sql={studiesSql}
            searchParams={{ studyId }}
          />
        </>
      }
      sql={studiesSql}
      ContainerProps={{ maxWidth: 'xl' }}
    >
      <DetailsPageTabs tabConfig={tabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default StudyDetailsPage
