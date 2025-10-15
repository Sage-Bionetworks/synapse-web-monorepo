import ChallengeHeader from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeHeader/ChallengeHeader'
import ChallengeMetrics from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeMetrics/ChallengeMetrics'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import TabbedSynapseObjects from '@sage-bionetworks/synapse-portal-framework/components/TabbedSynapseObjects'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic'
import { challengeProjectsSql, partnersSql } from '@/config/resources'
import {
  challengeTitleLinkConfig,
  challengeCardConfiguration,
} from '@/config/synapseConfig/challenges'
import { PortalFeaturedPartners } from 'synapse-react-client'

function Home() {
  return (
    <>
      <ChallengeHeader />
      <ChallengeMetrics />
      <PortalFeaturedPartners
        variation="centered"
        sql={partnersSql}
        titleText="Our Challenge Partners"
        sx={{ marginBottom: '160px' }}
      />

      <SectionLayout
        title="Listed Challenges"
        subtitle="Explore and join our currently running challenges, or browse completed ones and review their findings."
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <TabbedSynapseObjects
          centerTabs
          tabConfigs={[
            // Add list of challenge project cards
            {
              label: 'Active',
              element: (
                <CardContainerLogic
                  sql={`${challengeProjectsSql} where Status='Active'`}
                  cardConfiguration={{
                    ...challengeCardConfiguration,
                    titleLinkConfig: challengeTitleLinkConfig,
                  }}
                />
              ),
            },
            {
              label: 'Upcoming',
              element: (
                <CardContainerLogic
                  sql={`${challengeProjectsSql} where Status='Upcoming'`}
                  cardConfiguration={{
                    ...challengeCardConfiguration,
                    titleLinkConfig: challengeTitleLinkConfig,
                  }}
                />
              ),
            },
            {
              label: 'Completed',
              element: (
                <CardContainerLogic
                  sql={`${challengeProjectsSql} where Status='Closed'`}
                  cardConfiguration={{
                    ...challengeCardConfiguration,
                    titleLinkConfig: challengeTitleLinkConfig,
                  }}
                />
              ),
            },
          ]}
        />
      </SectionLayout>
    </>
  )
}

export default Home
