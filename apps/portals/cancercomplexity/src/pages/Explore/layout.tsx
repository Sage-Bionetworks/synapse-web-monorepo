import explorePageRoutes from '@/config/explorePageRoutes'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import { sharePageLinkExplorePageButtonProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'
import SharePageLinkButton from 'synapse-react-client/components/SharePageLinkButton'

function ExploreLayout() {
  return (
    <>
      <SharePageLinkButton {...sharePageLinkExplorePageButtonProps} />
      <ExploreWrapper explorePaths={explorePageRoutes} />
    </>
  )
}

export default ExploreLayout
