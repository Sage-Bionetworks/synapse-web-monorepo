import { explorePageRoutes } from '@/config/explorePageRoutes'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

function Layout() {
  return <ExploreWrapper explorePaths={explorePageRoutes} />
}

export default Layout
