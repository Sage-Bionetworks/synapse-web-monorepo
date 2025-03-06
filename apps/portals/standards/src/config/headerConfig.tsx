import { HomePageHeaderConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { ReactComponent as HeaderImg } from './style/header.svg'

const homePageHeader: HomePageHeaderConfig = {
  title: 'Welcome to the Bridge2AI Standards Explorer',
  summary: (
    <>
      This portal is designed to support the Grand Challenges in biomedical data and artificial intelligence. By categorizing standards based on these challenges, the registry helps researchers and developers identify relevant tools and guidelines, foster collaboration, and accelerates progress toward solving complex scientific problems.
      <br />
      <br />
    </>
  ),
  showBlur: true,
  HeaderSvg: HeaderImg, // need's to be direct svg import for proper scaling
}

export default homePageHeader
