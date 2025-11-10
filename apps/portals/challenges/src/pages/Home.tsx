import ChallengeHeader from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeHeader/ChallengeHeader'
import ChallengeMetrics from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeMetrics/ChallengeMetrics'
import ChallengeFeaturedTeam from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeFeaturedTeam/ChallengeFeaturedTeam'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import TabbedSynapseObjects from '@sage-bionetworks/synapse-portal-framework/components/TabbedSynapseObjects'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic'
import {
  challengeProjectsSql,
  metricsSql,
  partnersSql,
  featuredTeamSql,
  newChallengesSql,
  popularChallengesSql,
  getInvolvedSql,
} from '@/config/resources'
import {
  challengeTitleLinkConfig,
  challengeCardConfiguration,
} from '@/config/synapseConfig/challenges'
import { PortalFeaturedPartners } from 'synapse-react-client'
import NewChallengesSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/NewChallengesSection/NewChallengesSection'
import PopularChallengesSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/PopularChallengesSection/PopularChallengesSection'
import GetInvolvedSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/GetInvolvedSection/GetInvolvedSection'

const CARD_BORDER_RADIUS_PX = 4

function Home() {
  return (
    <>
      <ChallengeHeader />
      <ChallengeMetrics sql={metricsSql} />
      <PortalFeaturedPartners
        variation="centered"
        sql={partnersSql}
        titleText="Our Challenge Partners"
        sx={{ marginBottom: '160px' }}
      />
      <NewChallengesSection
        sql={newChallengesSql}
        borderRadiusPx={CARD_BORDER_RADIUS_PX}
      />
      <PopularChallengesSection
        sql={popularChallengesSql}
        borderRadiusPx={CARD_BORDER_RADIUS_PX}
      />
      <ChallengeFeaturedTeam sql={featuredTeamSql} />
      <GetInvolvedSection
        sql={getInvolvedSql}
        borderRadiusPx={CARD_BORDER_RADIUS_PX}
        cardSize="large"
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
