import { Box } from '@mui/material'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'
import { standardsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/standards'

export default function ExploreWrapper() {
  return (
    <Box
      sx={{
        '.QueryWrapperPlotNav > *': {
          p: '0px 20px',
        },
        '.QueryWrapperPlotNav > .TopLevelControls': {
          mt: '0',
        },
      }}
    >
      <QueryWrapperPlotNav {...standardsQueryWrapperPlotNavProps} />
    </Box>
  )
}
