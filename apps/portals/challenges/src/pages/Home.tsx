import {
  featuredTeamSql,
  getInvolvedSql,
  homeChallengesSql,
  metricsSql,
  newsSql,
  partnersSql,
} from '@/config/resources'
import AllChallengesSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/AllChallengesSection/AllChallengesSection'
import ChallengeFeaturedTeam from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeFeaturedTeam/ChallengeFeaturedTeam'
import ChallengeHeader from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeHeader/ChallengeHeader'
import ChallengeMetrics from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeMetrics/ChallengeMetrics'
import ChallengeNewsSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeNewsSection/ChallengeNewsSection'
import GetInvolvedSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/GetInvolvedSection/GetInvolvedSection'
import NewChallengesSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/NewChallengesSection/NewChallengesSection'
import OpenChallengesSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/OpenChallengesSection/OpenChallengesSection'
import PopularChallengesSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/PopularChallengesSection/PopularChallengesSection'
import PortalFeaturedPartners from 'synapse-react-client/components/PortalFeaturedPartners/PortalFeaturedPartners'

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
        sql={homeChallengesSql}
        borderRadiusPx={CARD_BORDER_RADIUS_PX}
      />
      <PopularChallengesSection
        sql={homeChallengesSql}
        borderRadiusPx={CARD_BORDER_RADIUS_PX}
      />
      <OpenChallengesSection
        sql={homeChallengesSql}
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
        sql={homeChallengesSql}
        borderRadiusPx={CARD_BORDER_RADIUS_PX}
      />
    </>
  )
}

export default Home
