import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { Outlet, useParams } from 'react-router'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
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
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'
import { metadataConfig } from './StudyDetailsPage.config'
import { portalMetadata } from '@/config/portalMetadata'

export { metadataConfig }

const _routeExports = createDetailPageRouteExports(
  metadataConfig,
  portalMetadata,
)
export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta

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
  const { studyId } = useParams<{ studyId: string }>()

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
              sharePageLinkButtonProps: sharePageLinkButtonDetailPageProps,
            }}
            columnAliases={columnAliases}
            sql={studiesSql}
            searchParams={{ studyId }}
          />
        </>
      }
      sql={studiesSql}
      searchParams={{ studyId }}
      ContainerProps={{ maxWidth: 'xl' }}
      resourcePrimaryKey={['studyId']}
      disableCanonicalUrl
    >
      <DetailsPageTabs tabConfig={tabConfig} />
      <Outlet
        context={{ defaultTabPath: STUDY_DETAILS_PAGE_DETAILS_TAB_PATH }}
      />
    </DetailsPage>
  )
}

export default StudyDetailsPage
