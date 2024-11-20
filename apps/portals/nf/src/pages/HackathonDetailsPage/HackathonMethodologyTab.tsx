import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import React from 'react'

export default function HackathonMethodologyTab() {
  return (
    <DetailsPageContent
      content={[
        {
          id: 'wiki',
          element: (
            <MarkdownSynapseFromColumnData columnName="tab2wikipointer" />
          ),
        },
      ]}
    />
  )
}
