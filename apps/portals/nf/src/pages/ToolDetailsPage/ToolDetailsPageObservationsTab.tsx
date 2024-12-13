import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { observationsSql } from 'src/config/resources'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'

import DynamicFormModal from 'synapse-react-client/components/DynamicForm/DynamicFormModal'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import TimelinePlot from 'synapse-react-client/components/TimelinePlot/TimelinePlot'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

export default function ToolDetailsPageObservationsTab() {
  return (
    <DetailsPageContent
      hideMenu
      content={[
        {
          id: 'naturalHistoryObservationsTimeline',
          element: (
            <DetailsPageContextConsumer columnName="resourceId">
              {({ value }) => (
                <TimelinePlot
                  title="Natural History Observations"
                  subTitle="To view the observations, click on a mark on the timeline."
                  sql={observationsSql}
                  sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                  searchParams={{ resourceId: value! }}
                />
              )}
            </DetailsPageContextConsumer>
          ),
        },
        {
          id: 'Community Observations',
          title: 'Community Observations',
          element: (
            <DetailsPageContextConsumer columnName="resourceId">
              {({ value }) => (
                <CardContainerLogic
                  sql={`${observationsSql} WHERE observationTime IS NULL`}
                  type={SynapseConstants.OBSERVATION_CARD}
                  initialLimit={3}
                  searchParams={{ resourceId: value! }}
                  multiCardList
                  topLevelEnumeratedFacetToFilter={{
                    columnName: 'observationType',
                  }}
                />
              )}
            </DetailsPageContextConsumer>
          ),
        },
        {
          id: 'Share Your Observation',
          title: 'Share Your Observation',
          element: <Markdown ownerId="syn26338068" wikiId={'629946'} />,
        },
        {
          id: 'DynamicFormModal',
          element: (
            <DynamicFormModal
              schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/observations/SubmitObservationSchema.json"
              uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/observations/SubmitObservationUiSchema.json"
              postUrl="https://submit-form.com/KwZ46H4T"
              submitButtonText="Submit Observation"
            />
          ),
        },
      ]}
    />
  )
}
