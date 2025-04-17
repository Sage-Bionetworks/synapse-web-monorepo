import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { CardContainerLogic } from 'synapse-react-client'
import { publicationsSql, studiesSql } from '../config/resources'
import { publicationsCardConfiguration } from '../config/synapseConfigs/publications'
import { studyCardConfiguration } from '../config/synapseConfigs/studies'

export default function StudyDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()

  return (
    <>
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
      <DetailsPage sql={studiesSql}>
        <DetailsPageContent
          content={[
            {
              title: 'Study Description',
              id: 'Study Description',
              element: <MarkdownSynapseFromColumnData columnName={'id'} />,
            },
            {
              title: 'Access Requirements',
              id: 'Access Requirements',
              element: (
                <MarkdownSynapseFromColumnData
                  columnName={'accessRequirements'}
                />
              ),
            },
            {
              title: 'Publications',
              id: 'Publications',
              element: (
                <DetailsPageContextConsumer columnName={'id'}>
                  {({ value: id }) => (
                    <CardContainerLogic
                      sql={publicationsSql}
                      cardConfiguration={publicationsCardConfiguration}
                      searchParams={{ study: id! }}
                    />
                  )}
                </DetailsPageContextConsumer>
              ),
            },
          ]}
        />
      </DetailsPage>
    </>
  )
}
