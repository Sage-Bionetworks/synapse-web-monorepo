import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import { explorePaths } from '@/config/explorePageRoutes'

function Layout() {
  return <ExploreWrapper explorePaths={explorePaths} />
}

export default Layout
