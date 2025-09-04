import { studiesSql } from '@/config/resources'
import {
  STUDY_TABLE_COLUMN_NAMES,
  studyCardConfiguration,
} from '@/config/synapseConfigs/studies'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { DetailsPageSectionLayoutType } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageSectionLayout'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic/index'
import MarkdownCollapse from 'synapse-react-client/components/Markdown/MarkdownCollapse'
import { transformStringIntoMarkdownProps } from 'synapse-react-client/components/Markdown/MarkdownUtils'

const studyDetailsTabContent: DetailsPageSectionLayoutType[] = [
  {
    title: 'Study Description',
    id: 'StudyDescription',
    element: (
      <MarkdownSynapseFromColumnData
        columnName={STUDY_TABLE_COLUMN_NAMES.STUDY}
      />
    ),
  },
  {
    title: 'Acknowledgement',
    id: 'Acknowledgement',
    element: (
      <>
        <MarkdownSynapseFromColumnData
          columnName={STUDY_TABLE_COLUMN_NAMES.ACK_CONTEXT}
        />
        <MarkdownSynapseFromColumnData
          columnName={STUDY_TABLE_COLUMN_NAMES.ACKNOWLEDGEMENT}
          MarkdownCollapseProps={{
            title: 'Acknowledgement Statement',
            textDescription: 'full statement',
            showCopyPlainText: true,
          }}
        />
        <DetailsPageContextConsumer
          columnName={STUDY_TABLE_COLUMN_NAMES.CITATIONS}
        >
          {({ value }) => {
            if (!value) {
              return null
            }
            const props = transformStringIntoMarkdownProps(value)
            return (
              <MarkdownCollapse
                {...props}
                title="Citations"
                textDescription="all citations"
                showCopyPlainText={true}
              />
            )
          }}
        </DetailsPageContextConsumer>
      </>
    ),
  },
  {
    id: 'Methods',
    title: 'Methods',
    hideTitle: true,
    element: (
      <MarkdownSynapseFromColumnData
        columnName={STUDY_TABLE_COLUMN_NAMES.METHODS}
        showEntityTitle
      />
    ),
  },
  {
    title: 'Related Studies',
    id: 'RelatedStudies',
    element: (
      <DetailsPageContextConsumer
        columnName={STUDY_TABLE_COLUMN_NAMES.RELATED_STUDIES}
      >
        {({ value }) => {
          if (!value) {
            return null
          }
          return (
            <CardContainerLogic
              sqlOperator={ColumnSingleValueFilterOperator.IN}
              sql={studiesSql}
              cardConfiguration={studyCardConfiguration}
              searchParams={{ [STUDY_TABLE_COLUMN_NAMES.STUDY]: value }}
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
