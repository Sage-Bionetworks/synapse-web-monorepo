import ChallengeParticipantGoogleMap from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeParticipantGoogleMap'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic'
import NoContentAvailable from 'synapse-react-client/components/SynapseTable/NoContentAvailable'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

function OverviewTab() {
  return (
    <DetailsPageContent
      content={[
        {
          id: 'Overview',
          title: 'Overview',
          element: <MarkdownSynapseFromColumnData columnName={'id'} />,
        },
        {
          id: 'Objective',
          title: 'Objective',
          element: <MarkdownSynapseFromColumnData columnName={'Objective'} />,
        },
        {
          id: 'Description',
          title: 'Description',
          element: <MarkdownSynapseFromColumnData columnName={'Description'} />,
        },
        {
          id: 'Timeline',
          title: 'Timeline',
          element: <MarkdownSynapseFromColumnData columnName={'Timeline'} />,
        },
        {
          id: 'Organizers',
          title: 'Organizers',
          element: (
            <DetailsPageContextConsumer columnName={'Organizers'}>
              {({ value }) => (
                <CardContainerLogic
                  sql={`SELECT * FROM ${value}`}
                  limit={6}
                  cardConfiguration={{
                    type: SynapseConstants.MEDIUM_USER_CARD,
                  }}
                />
              )}
            </DetailsPageContextConsumer>
          ),
        },
        {
          id: 'OrganizersDescription',
          element: (
            <MarkdownSynapseFromColumnData
              columnName={'OrganizersDescription'}
            />
          ),
        },
        {
          id: 'Contributors',
          title: 'Contributors',
          element: (
            <DetailsPageContextConsumer columnName={'Contributors'}>
              {({ value }) => (
                <CardContainerLogic
                  sql={`SELECT * FROM ${value}`}
                  limit={6}
                  cardConfiguration={{
                    type: SynapseConstants.MEDIUM_USER_CARD,
                  }}
                />
              )}
            </DetailsPageContextConsumer>
          ),
        },
        {
          id: 'ContributorsDescription',
          element: (
            <MarkdownSynapseFromColumnData
              columnName={'ContributorsDescription'}
            />
          ),
        },
        {
          id: 'Sponsors',
          title: 'Sponsors',
          element: (
            <DetailsPageContextConsumer columnName={'Sponsors'}>
              {({ value }) => (
                <CardContainerLogic
                  sql={`SELECT * FROM ${value}`}
                  limit={6}
                  cardConfiguration={{
                    type: SynapseConstants.MEDIUM_USER_CARD,
                  }}
                />
              )}
            </DetailsPageContextConsumer>
          ),
        },
        {
          id: 'Support',
          title: 'Support',
          element: (
            <DetailsPageContextConsumer columnName={'Support'}>
              {({ value }) => {
                // TODO: Generalize sql transform to apply falsy check everywhere
                if (value) {
                  return (
                    <CardContainerLogic
                      sql={`SELECT * FROM ${value}`}
                      limit={6}
                      cardConfiguration={{
                        type: SynapseConstants.MEDIUM_USER_CARD,
                      }}
                    />
                  )
                }
                return <NoContentAvailable />
              }}
            </DetailsPageContextConsumer>
          ),
        },
        {
          id: 'Participants',
          title: 'Participants',
          element: (
            <DetailsPageContextConsumer columnName={'id'}>
              {({ value: id }) => (
                <ChallengeParticipantGoogleMap projectId={id!} />
              )}
            </DetailsPageContextConsumer>
          ),
        },
        {
          id: 'Incentives',
          title: 'Incentives',
          element: (
            <MarkdownSynapseFromColumnData
              columnName={'Incentives'}
              showNoContentAvailable={true}
            />
          ),
        },
      ]}
    />
  )
}

export default OverviewTab
