import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'
import { Outlet } from 'react-router'
import { studyCardConfiguration } from '../../config/synapseConfigs/studies'
import { studiesSql } from '@/config/resources'
import {
  STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
  STUDY_DETAILS_PAGE_METADATA_TAB_PATH,
} from '@/config/routeConstants'

const studyDetailsPageTabs: DetailsPageTabConfig[] = [
  {
    title: 'Study Details',
    path: STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
    iconName: 'study',
  },
  {
    title: 'Study Metadata',
    path: STUDY_DETAILS_PAGE_METADATA_TAB_PATH,
    iconName: 'database',
    iconClassName: 'tab-database',
  },
]

function StudyDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          cardConfiguration={{
            ...studyCardConfiguration,
            secondaryLabelLimit: Infinity,
            titleLinkConfig: undefined,
            isHeader: true,
          }}
          sql={studiesSql}
          isAlignToLeftNav
          searchParams={searchParams}
        />
      }
      sql={studiesSql}
      resourcePrimaryKey={['id']}
    >
      <DetailsPageTabs tabConfig={studyDetailsPageTabs} />
      <Outlet />
    </DetailsPage>
  )
}

export default StudyDetailsPage
