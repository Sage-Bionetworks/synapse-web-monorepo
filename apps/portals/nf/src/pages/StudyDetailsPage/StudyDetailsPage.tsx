import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { Outlet, RouteObject } from 'react-router'
import {
  CardContainerLogic,
  ErrorPage,
  SharePageLinkButton,
  SynapseErrorType,
} from 'synapse-react-client'
import { studiesSql } from '../../config/resources'
import { columnAliases } from '../../config/synapseConfigs/commonProps'
import {
  studyCardConfiguration,
  studyHeaderIconOptions,
} from '../../config/synapseConfigs/studies'
import StudyAdditionalFilesTab from './StudyAdditionalFilesTab'
import StudyDatasetsTab from './StudyDatasetsTab'
import { StudyDetailsTab } from './StudyDetailsTab'
import StudyFilesTab from './StudyFilesTab'

const tabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Study Details',
    path: 'Details',
    iconName: 'study',
    tooltip: 'Description, methods, acknowledgements and related studies',
  },
  {
    title: 'Study Datasets',
    path: 'Datasets',
    iconName: 'dataset',
    tooltip: 'All of the Datasets generated within this study',
    iconClassName: 'tab-dataset',
  },
  {
    title: 'Study Files',
    path: 'Files',
    iconName: 'database',
    tooltip: 'File data generated within this study',
    iconClassName: 'tab-database',
  },
  {
    title: 'Additional Files',
    path: 'AdditionalFiles',
    iconName: 'database',
    tooltip: 'Additional file data generated within this study',
    iconClassName: 'tab-database',
  },
]

export default function StudyDetailsPage() {
  const { studyId } = useGetPortalComponentSearchParams()

  if (!studyId) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <>
      <SharePageLinkButton {...sharePageLinkButtonDetailPageProps} />
      <CardContainerLogic
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
        isHeader
        cardConfiguration={{
          ...studyCardConfiguration,
          secondaryLabelLimit: Infinity,
          iconOptions: studyHeaderIconOptions,
        }}
        columnAliases={columnAliases}
        sql={studiesSql}
        searchParams={{ studyId }}
      />
      <DetailsPage sql={studiesSql} ContainerProps={{ maxWidth: 'xl' }}>
        <DetailsPageTabs tabConfig={tabConfig} />
        <Outlet />
      </DetailsPage>
    </>
  )
}

export const studyDetailsPageRoute: RouteObject = {
  path: 'Explore/Studies/DetailsPage',
  element: <StudyDetailsPage />,
  children: [
    {
      index: true,
      element: <RedirectWithQuery to={tabConfig[0].path} />,
    },
    {
      path: tabConfig[0].path,
      element: <StudyDetailsTab />,
    },
    {
      path: tabConfig[1].path,
      element: <StudyDatasetsTab />,
    },
    {
      path: tabConfig[2].path,
      element: <StudyFilesTab />,
    },
    {
      path: tabConfig[3].path,
      element: <StudyAdditionalFilesTab />,
    },
  ],
}
