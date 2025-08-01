import {
  dataQueryWrapperPlotNavProps,
  /* part of PR #1865, not ready yet
  dataSetsQueryWrapperPlotNavProps, */
} from '@/config/synapseConfigs/data'
import { Box } from '@mui/material'
import { QueryWrapperPlotNav } from 'synapse-react-client'

function ExploreData() {
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
      <QueryWrapperPlotNav {...dataQueryWrapperPlotNavProps} />
    </Box>
  )
}

export default ExploreData
