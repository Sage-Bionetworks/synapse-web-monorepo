import { PortalSearchPage } from '@/components/PortalSearch/PortalSearchPage'
import { Navigate, useLocation, useParams } from 'react-router'
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
  defaultSearchTabIndex?: number
  roleMapping?: Record<string, string>
  searchIndexConfig?: SearchIndexConfig
}

function ResourceSearchPage({
  portalSearchPageConfigs,
  searchPageTabs,
  defaultSearchTabIndex = -1,
  roleMapping,
  searchIndexConfig,
}: ResourceSearchPageProps) {
  const params = useParams()
  const { search } = useLocation()
  const resourceType = params['resourceType']

  const selectedTabIndex = searchPageTabs.findIndex(
    tab => tab.path === resourceType,
  )

  if (selectedTabIndex === -1 && defaultSearchTabIndex >= 0) {
    return (
      <Navigate
        to={`/Search/${searchPageTabs[defaultSearchTabIndex].path}${search}`}
        replace
      />
    )
  }

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
