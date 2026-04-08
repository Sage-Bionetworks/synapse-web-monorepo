import { studiesSql } from '@/config/resources'
import { studyCardConfiguration } from '@/config/synapseConfigs/studies'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import { NoContentPlaceholderType } from 'synapse-react-client/components/SynapseTable/NoContentPlaceholderType'

function StudyDetailsTab() {
  const { value: relatedStudies } = useDetailsPageContext('RelatedStudies')
  const relatedStudiesArray: string[] = relatedStudies
    ? relatedStudies.split(',').map(s => s.trim())
    : []

  return (
    <DetailsPageContent
      content={[
        {
          title: 'Study Description',
          id: 'StudyDescription',
          element: <MarkdownSynapseFromColumnData columnName={'id'} />,
        },
        {
          title: 'Acknowledgement',
          id: 'Acknowledgement',
          element: (
            <MarkdownSynapseFromColumnData columnName={'Acknowledgement'} />
          ),
        },
        {
          title: 'Methods',
          id: 'Methods',
          element: <MarkdownSynapseFromColumnData columnName={'Methods'} />,
        },
        {
          title: 'Related Studies',
          id: 'RelatedStudies',
          element: (
            <>
              {relatedStudies && relatedStudies.length > 0 && (
                <CardContainerLogic
                  query={{
                    sql: studiesSql,
                    limit: 50,
                    additionalFilters: [
                      {
                        concreteType:
                          'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
                        columnName: 'id',
                        operator: ColumnSingleValueFilterOperator.IN,
                        values: relatedStudiesArray,
                      },
                    ],
                  }}
                  cardConfiguration={studyCardConfiguration}
                  noContentPlaceholderType={NoContentPlaceholderType.HIDDEN}
                />
              )}
            </>
          ),
        },
      ]}
    />
  )
}

export default StudyDetailsTab
