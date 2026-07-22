import {
  defaultSearchTabIndex,
  portalSearchPageConfigs,
  searchPageTabs,
} from '@/config/searchConfig'
import ResourceSearchPage from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/ResourceSearchPage'

function Search() {
  return (
    <ResourceSearchPage
      portalSearchPageConfigs={portalSearchPageConfigs}
      searchPageTabs={searchPageTabs}
      defaultSearchTabIndex={defaultSearchTabIndex}
    />
  )
}

export default Search
