import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'

function InstructionsTab() {
  return (
    <DetailsPageContent
      content={[
        {
          id: 'Instructions',
          title: 'Instructions',
          element: (
            <MarkdownSynapseFromColumnData columnName={'Instructions'} />
          ),
        },
        {
          id: 'Eligibility Rules',
          title: 'Eligibility Rules',
          element: (
            <MarkdownSynapseFromColumnData columnName={'EligibilityRules'} />
          ),
        },
        {
          id: 'Conduct Rules',
          title: 'Conduct Rules',
          element: (
            <MarkdownSynapseFromColumnData columnName={'ConductRules'} />
          ),
        },
        {
          id: 'Data Conditions For Use',
          title: 'Data Conditions For Use',
          element: (
            <MarkdownSynapseFromColumnData
              columnName={'DataConditionsForUse'}
            />
          ),
        },
      ]}
    />
  )
}

export default InstructionsTab
