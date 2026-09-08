import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/index'
import { FeatureFlagEnum } from 'synapse-react-client/utils/featureflag/FeatureFlags'

function ExploreLayout() {
  const showModels = useGetFeatureFlag(FeatureFlagEnum.ELITE_PORTAL_MODELS)
  return (
    <ExploreWrapper
      explorePaths={[
        {
          path: 'Programs',
        },
        {
          path: 'Projects',
        },
        {
          path: 'Studies',
        },
        {
          path: 'Datasets',
        },
        ...(showModels
          ? [
              {
                path: 'Models',
              },
            ]
          : []),
        {
          displayName: 'Files',
          path: 'Data',
        },
        {
          displayName: 'Cohort Discovery',
          path: 'Cohort Builder',
        },
        {
          path: 'Publications',
        },
        {
          displayName: 'Tools',
          path: 'Computational Tools',
        },
        {
          path: 'People',
        },
      ]}
    />
  )
}

export default ExploreLayout
