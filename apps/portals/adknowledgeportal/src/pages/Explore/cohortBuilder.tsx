import {
  cohortBuilderV2Props,
  individualsViewQueryWrapperPlotNavProps,
} from '@/config/synapseConfigs/cohortbuilder'
import { CohortBuilder } from 'synapse-react-client/components/CohortBuilder/CohortBuilder'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/index'
import { FeatureFlagEnum } from 'synapse-react-client/utils/featureflag/FeatureFlags'

function ExploreCohortBuilder() {
  const showCohortBuilderV2 = useGetFeatureFlag(
    FeatureFlagEnum.COHORT_BUILDER_V2,
  )
  if (showCohortBuilderV2) {
    return <CohortBuilder {...cohortBuilderV2Props} />
  }
  return <QueryWrapperPlotNav {...individualsViewQueryWrapperPlotNavProps} />
}

export default ExploreCohortBuilder
