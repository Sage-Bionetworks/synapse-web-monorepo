import { portalSearchPageConfigs, searchPageTabs } from '@/config/searchConfig'
import ResourceSearchPage from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/ResourceSearchPage'

function Search() {
  return (
    <ResourceSearchPage
      portalSearchPageConfigs={portalSearchPageConfigs}
      searchPageTabs={searchPageTabs}
    />
  )
}

export default Search
