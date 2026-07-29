import { portalSearchPageConfigs, searchPageTabs } from '@/config/searchConfig'
import ResourceSearchPage from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/ResourceSearchPage'
import { useMemo } from 'react'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/index'
import { FeatureFlagEnum } from 'synapse-react-client/utils/featureflag/FeatureFlags'

const MODELS_TAB_PATH = 'Models'

function Search() {
  const showModels = useGetFeatureFlag(FeatureFlagEnum.ELITE_PORTAL_MODELS)

  const { tabs, configs } = useMemo(() => {
    if (showModels) {
      return { tabs: searchPageTabs, configs: portalSearchPageConfigs }
    }
    const modelsIndex = searchPageTabs.findIndex(
      tab => tab.path === MODELS_TAB_PATH,
    )
    if (modelsIndex === -1) {
      return { tabs: searchPageTabs, configs: portalSearchPageConfigs }
    }
    return {
      tabs: searchPageTabs.filter((_, i) => i !== modelsIndex),
      configs: portalSearchPageConfigs.filter((_, i) => i !== modelsIndex),
    }
  }, [showModels])

  return (
    <ResourceSearchPage
      portalSearchPageConfigs={configs}
      searchPageTabs={tabs}
    />
  )
}

export default Search
