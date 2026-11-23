import { Box } from '@mui/material'
import {
  NEGATIVE_RESPONSIVE_SIDE_MARGIN,
  RESPONSIVE_SIDE_PADDING,
} from '@sage-bionetworks/synapse-portal-framework/utils'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { modelsSearch } from '@/config/synapseConfigs/models'
import { portalMetadata } from '@/config/portalMetadata'

export const meta = createStaticMeta(
  { title: 'Explore Models' },
  portalMetadata,
)

export default function ExploreModels() {
  return (
    <Box
      sx={{
        ...RESPONSIVE_SIDE_PADDING,
        ['.TopLevelControls, .TotalQueryResults.hasFilters']: {
          ...NEGATIVE_RESPONSIVE_SIDE_MARGIN,
          mt: 0,
          px: RESPONSIVE_SIDE_PADDING['px'],
        },
        '.TopLevelControls > div': {
          px: 0,
          py: 2.5,
        },
      }}
    >
      <SearchQueryWrapperPlotNav {...modelsSearch} shouldDeepLink={true} />
    </Box>
  )
}
