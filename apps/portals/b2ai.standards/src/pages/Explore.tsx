import {
  NEGATIVE_RESPONSIVE_SIDE_MARGIN,
  RESPONSIVE_SIDE_PADDING,
} from '@sage-bionetworks/synapse-portal-framework/utils'
import { Box } from '@mui/material'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import { standardsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/standards'

export default function ExploreWrapper() {
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
      <QueryWrapperPlotNav {...standardsQueryWrapperPlotNavProps} />
    </Box>
  )
}
