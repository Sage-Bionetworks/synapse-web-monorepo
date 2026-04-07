import {
  allChallengesSql,
  featuredTeamSql,
  getInvolvedSql,
  // homeAllChallengesSql,
  homeNewChallengesSql,
  homeOpenChallengesSql,
  homePopularChallengesSql,
  metricsSql,
  newsSql,
  partnersSql,
} from '@/config/resources'
// import AllChallengesSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/AllChallengesSection/AllChallengesSection'
import ChallengeFeaturedTeam from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeFeaturedTeam/ChallengeFeaturedTeam'
import ChallengeHeader from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeHeader/ChallengeHeader'
import ChallengeMetrics from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeMetrics/ChallengeMetrics'
import ChallengeNewsSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeNewsSection/ChallengeNewsSection'
import GetInvolvedSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/GetInvolvedSection/GetInvolvedSection'
import NewChallengesSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/NewChallengesSection/NewChallengesSection'
import OpenChallengesSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/OpenChallengesSection/OpenChallengesSection'
import PopularChallengesSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/PopularChallengesSection/PopularChallengesSection'
import PortalFeaturedPartners from 'synapse-react-client/components/PortalFeaturedPartners/PortalFeaturedPartners'
import TotalChallengesTrackedSection from '@sage-bionetworks/synapse-portal-framework/components/challenges/TotalChallengesTrackedSection/TotalChallengesTrackedSection'

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
        sql={homeNewChallengesSql}
        borderRadiusPx={CARD_BORDER_RADIUS_PX}
      />
      <PopularChallengesSection
        sql={homePopularChallengesSql}
        borderRadiusPx={CARD_BORDER_RADIUS_PX}
      />
      <OpenChallengesSection
        sql={homeOpenChallengesSql}
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
      {/* <AllChallengesSection
        sql={homeAllChallengesSql}
        borderRadiusPx={CARD_BORDER_RADIUS_PX}
      /> */}
      <OpenChallengesSection
        sql={homeOpenChallengesSql}
        borderRadiusPx={CARD_BORDER_RADIUS_PX}
      />
      <TotalChallengesTrackedSection allChallengesSql={allChallengesSql} />
    </>
  )
}

export default Home
