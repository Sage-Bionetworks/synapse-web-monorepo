import { PortalSearchPage } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchPage'
import {
  portalSearchPageConfigs,
  roleMapping,
  searchPageTabs,
} from '@/config/searchConfig'
import { useParams } from 'react-router'

function Search() {
  const params = useParams()
  const resourceType = params['resourceType']

  const selectedTabIndex = searchPageTabs.findIndex(
    tab => tab.path === resourceType,
  )

  return (
    <PortalSearchPage
      selectedTabIndex={selectedTabIndex === -1 ? undefined : selectedTabIndex}
      configs={portalSearchPageConfigs}
      searchPageTabs={searchPageTabs}
      roleMapping={roleMapping}
    />
  )
}

export default Search
