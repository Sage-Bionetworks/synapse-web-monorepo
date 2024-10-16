import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { observationsSql } from 'src/config/resources'
import {
  TimelinePlot,
  CardContainerLogic,
  SynapseConstants,
  Markdown,
} from 'synapse-react-client'

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
          id: 'Natural History Observations',
          title: 'Natural History Observations',
          element: (
            <DetailsPageContextConsumer columnName="resourceId">
              {({ value }) => (
                <CardContainerLogic
                  sql={`${observationsSql} WHERE observationTime IS NOT NULL ORDER BY observationTime DESC`}
                  type={SynapseConstants.OBSERVATION_CARD}
                  limit={3}
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
                />
              )}
            </DetailsPageContextConsumer>
          ),
        },
        {
          id: 'Submit an Observation',
          title: 'Submit an Observation',
          element: <Markdown ownerId="syn26338068" wikiId={'613438'} />,
        },
      ]}
    />
  )
}
