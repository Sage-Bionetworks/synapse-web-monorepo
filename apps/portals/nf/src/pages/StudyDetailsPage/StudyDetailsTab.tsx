import { publicationsSql, studiesSql, toolStudySql } from '@/config/resources'
import { columnAliases } from '@/config/synapseConfigs/commonProps'
import { publicationsCardConfiguration } from '@/config/synapseConfigs/publications'
import { studyCardConfiguration } from '@/config/synapseConfigs/studies'
import { toolsCardConfiguration } from '@/config/synapseConfigs/tools'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import { NoContentPlaceholderType } from 'synapse-react-client/components/SynapseTable/NoContentPlaceholderType'

function StudyDetailsTab() {
  const { value: studyId } = useDetailsPageContext('studyId')
  const { value: relatedStudies } = useDetailsPageContext('relatedStudies')
  const relatedStudiesArray: string[] = relatedStudies
    ? relatedStudies.split(',')
    : []
  if (studyId == null) {
    return null
  }

  return (
    <DetailsPageContent
      content={[
        {
          id: 'Access Requirements',
          title: 'Access Requirements',
          element: (
            <MarkdownSynapseFromColumnData
              isRawMarkdown
              columnName={'accessRequirements'}
            />
          ),
        },
        {
          id: 'Acknowledgement Statements',
          title: 'Acknowledgement Statements',
          element: (
            <MarkdownSynapseFromColumnData
              isRawMarkdown
              columnName={'acknowledgementStatements'}
            />
          ),
        },
        {
          id: 'Tools Used',
          title: 'Tools Used',
          element: (
            <CardContainerLogic
              sql={toolStudySql}
              initialLimit={3}
              cardConfiguration={toolsCardConfiguration}
              searchParams={{ studyId }}
            />
          ),
        },
        {
          id: 'Publications',
          title: 'Publications',
          element: (
            <CardContainerLogic
              sql={publicationsSql}
              cardConfiguration={publicationsCardConfiguration}
              // studyName holds the linked studies' Synapse IDs (ENTITYID_LIST)
              searchParams={{ studyName: studyId }}
            />
          ),
        },
        {
          id: 'Cited By',
          title: 'Cited By',
          element: (
            // Papers citing this study, each card showing the paper's own
            // studies and funders; citedStudyId lists the portal studies it
            // reuses, reviews or mentions (an ENTITYID_LIST, matched with HAS)
            <CardContainerLogic
              query={{
                sql: publicationsSql,
                additionalFilters: [
                  {
                    concreteType:
                      'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
                    columnName: 'citedStudyId',
                    function: ColumnMultiValueFunction.HAS,
                    _function: ColumnMultiValueFunction.HAS,
                    values: [studyId],
                  },
                ],
              }}
              cardConfiguration={publicationsCardConfiguration}
              columnAliases={columnAliases}
            />
          ),
        },
        {
          id: 'Related Studies',
          title: 'Related Studies',
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
                        columnName: 'studyId',
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
