import { allChallenges } from '@/config/synapseConfig/allChallenges'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { QueryWrapperPlotNav } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'

const ChallengeListPage = (): React.ReactNode => {
  return (
    <>
      <Box px="60px" py="20px" display="flex" justifyContent="center">
        <Typography variant="h3" fontWeight="700" color="black">
          Listed Challenges
        </Typography>
      </Box>
      <Box px="80px">
        <QueryWrapperPlotNav {...allChallenges} />
      </Box>
    </>
  )
}

export default ChallengeListPage
