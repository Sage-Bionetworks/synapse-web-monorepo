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
          id: 'Eligibility',
          title: 'Eligibility',
          element: <MarkdownSynapseFromColumnData columnName={'Eligibility'} />,
        },
        // {
        //   id: 'Conduct Rules',
        //   title: 'Conduct Rules',
        //   element: (
        //     <MarkdownSynapseFromColumnData columnName={'ConductRules'} />
        //   ),
        // },
        {
          id: 'Challenge Rules',
          title: 'Challenge Rules',
          element: (
            <MarkdownSynapseFromColumnData columnName={'ChallengeRules'} />
          ),
        },
      ]}
    />
  )
}

export default InstructionsTab
