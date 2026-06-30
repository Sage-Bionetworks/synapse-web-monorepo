import { PortalSearchPage } from '@/components/PortalSearch/PortalSearchPage'
import { useParams } from 'react-router'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import type { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { PortalSearchTabConfig } from './PortalSearchTabs'
import { SearchIndexConfig } from '../../types/portal-util-types'

type ResourceSearchPageProps = {
  portalSearchPageConfigs: (
    | QueryWrapperPlotNavProps
    | SearchQueryWrapperPlotNavProps
  )[]
  searchPageTabs: PortalSearchTabConfig[]
  roleMapping?: Record<string, string>
  searchIndexConfig?: SearchIndexConfig
}

function ResourceSearchPage({
  portalSearchPageConfigs,
  searchPageTabs,
  roleMapping,
  searchIndexConfig,
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
      searchIndexConfig={searchIndexConfig}
    />
  )
}

export default ResourceSearchPage
