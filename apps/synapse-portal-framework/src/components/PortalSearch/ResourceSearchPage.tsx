import { PortalSearchPage } from '@/components/PortalSearch/PortalSearchPage'
import { useParams } from 'react-router'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav'
import { PortalSearchTabConfig } from './PortalSearchTabs'

type ResourceSearchPageProps = {
  portalSearchPageConfigs: QueryWrapperPlotNavProps[]
  searchPageTabs: PortalSearchTabConfig[]
  roleMapping?: Record<string, string>
}

function ResourceSearchPage({
  portalSearchPageConfigs,
  searchPageTabs,
  roleMapping,
}: ResourceSearchPageProps) {
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

export default ResourceSearchPage
