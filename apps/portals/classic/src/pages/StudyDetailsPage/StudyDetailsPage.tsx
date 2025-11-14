import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic'
import { studyCardConfiguration } from '../../config/synapseConfigs/studies'
import { studiesSql } from '@/config/resources'

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
      <DetailsPageContent
        content={[
          {
            // title: 'Study Description',
            id: 'Study Description',
            element: <MarkdownSynapseFromColumnData columnName={'id'} />,
          },
        ]}
      />
    </DetailsPage>
  )
}

export default StudyDetailsPage
