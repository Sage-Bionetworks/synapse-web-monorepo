import { studiesSql } from '@/config/resources'
import { studyCardConfiguration } from '@/config/synapseConfigs/studies'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client'

const studyDetailsTabContent = [
  {
    id: 'Study Description',
    title: 'Study Description',
    element: <MarkdownSynapseFromColumnData columnName={'studyDescription'} />,
  },
  {
    id: 'Acknowledgement',
    title: 'Acknowledgement',
    element: <MarkdownSynapseFromColumnData columnName={'ackContext'} />,
  },
  {
    id: 'acknowledgementFull',
    element: (
      <MarkdownSynapseFromColumnData
        columnName={'acknowledgment'}
        MarkdownCollapseProps={{
          textDescription: 'full statement',
          showCopyPlainText: true,
        }}
      />
    ),
  },
  {
    id: 'Methods',
    title: 'Methods',
    element: <MarkdownSynapseFromColumnData columnName={'methods'} />,
  },
  {
    id: 'Related Studies',
    title: 'Related Studies',
    element: (
      <DetailsPageContextConsumer columnName={'relatedStudies'}>
        {({ value }) => {
          if (!value) {
            return null
          }

          return (
            <CardContainerLogic
              sqlOperator={ColumnSingleValueFilterOperator.IN}
              sql={studiesSql}
              cardConfiguration={studyCardConfiguration}
              searchParams={{ id: value }}
            />
          )
        }}
      </DetailsPageContextConsumer>
    ),
  },
]

function StudyDetailsTab() {
  return <DetailsPageContent content={studyDetailsTabContent} />
}

export default StudyDetailsTab
