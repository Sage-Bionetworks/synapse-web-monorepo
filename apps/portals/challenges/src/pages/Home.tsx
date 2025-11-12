import ChallengeHeader from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeHeader/ChallengeHeader'
import ChallengeMetrics from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeMetrics/ChallengeMetrics'
import ChallengeFeaturedTeam from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeFeaturedTeam/ChallengeFeaturedTeam'
import {
  metricsSql,
  partnersSql,
  featuredTeamSql,
  newChallengesSql,
  popularChallengesSql,
  getInvolvedSql,
  newsSql,
  allChallengesSql,
} from '@/config/resources'
import { PortalFeaturedPartners } from 'synapse-react-client'
import NewChallengesSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/NewChallengesSection/NewChallengesSection'
import ChallengeNewsSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeNewsSection/ChallengeNewsSection'
import PopularChallengesSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/PopularChallengesSection/PopularChallengesSection'
import GetInvolvedSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/GetInvolvedSection/GetInvolvedSection'
import AllChallengesSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/AllChallengesSection/AllChallengesSection'

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
      <ChallengeNewsSection
        sql={newsSql}
        borderRadiusPx={CARD_BORDER_RADIUS_PX}
        cardSize="large"
      />
      <AllChallengesSection
        sql={allChallengesSql}
        borderRadiusPx={CARD_BORDER_RADIUS_PX}
      />
    </>
  )
}

export default Home
