import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/index'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import HomePageV2 from './HomePageV2'
import HomePageV1 from './HomePageV1'

function Home() {
  const isV2HomePageEnabled = useGetFeatureFlag(
    FeatureFlagEnum.ADKP_HOMEPAGE_V2,
  )

  return isV2HomePageEnabled ? <HomePageV2 /> : <HomePageV1 />
}

export default Home
