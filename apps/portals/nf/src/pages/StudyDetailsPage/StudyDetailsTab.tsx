import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { publicationsSql, studiesSql, toolStudySql } from 'src/config/resources'
import { columnAliases } from 'src/config/synapseConfigs/commonProps'
import { publicationsCardConfiguration } from 'src/config/synapseConfigs/publications'
import { studyCardConfiguration } from 'src/config/synapseConfigs/studies'
import { toolsCardConfiguration } from 'src/config/synapseConfigs/tools'
import {
  CardContainerLogic,
  NoContentPlaceholderType,
} from 'synapse-react-client'

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
              {...toolsCardConfiguration}
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
              {...publicationsCardConfiguration}
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
              {...studyCardConfiguration}
              searchParams={{ studyId }}
            />
          ),
        },
      ]}
    />
  )
}
