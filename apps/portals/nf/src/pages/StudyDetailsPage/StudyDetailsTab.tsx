import { publicationsSql, studiesSql, toolStudySql } from '@/config/resources'
import { columnAliases } from '@/config/synapseConfigs/commonProps'
import { publicationsCardConfiguration } from '@/config/synapseConfigs/publications'
import { studyCardConfiguration } from '@/config/synapseConfigs/studies'
import { toolsCardConfiguration } from '@/config/synapseConfigs/tools'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client'
import { NoContentPlaceholderType } from 'synapse-react-client/components/SynapseTable/NoContentPlaceholderType'

export function StudyDetailsTab() {
  const { value: studyId } = useDetailsPageContext('studyId')
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
              searchParams={{ studyId }}
            />
          ),
        },
        {
          id: 'Related Studies',
          title: 'Related Studies',
          element: (
            <CardContainerLogic
              sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
              sql={studiesSql}
              columnAliases={columnAliases}
              noContentPlaceholderType={NoContentPlaceholderType.HIDDEN}
              cardConfiguration={studyCardConfiguration}
              searchParams={{ studyId }}
            />
          ),
        },
      ]}
    />
  )
}
