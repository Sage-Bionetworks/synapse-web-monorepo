import { Box } from '@mui/material'
import * as React from 'react'
import { AppUtils, ChallengeDetailPage } from 'synapse-react-client'

const ChallengeDetailPageWrapper = () => {
  const projectId = AppUtils.useQuerySearchParam('id')
  if (projectId) {
    return (
      <div className="container">
        <Box sx={{ position: 'absolute', marginTop: '170px', zIndex: 100 }}>
          <ChallengeDetailPage projectId={projectId} />
        </Box>
      </div>
    )
  } else return <></>
}

export default ChallengeDetailPageWrapper
