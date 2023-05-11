import * as React from 'react'
import { Typography } from 'synapse-react-client'
import { Box } from '@mui/material'

const ChallengeDetailsPage = () => {
  return (
    <Box>
      <div className="header">
        <div className="home-container-description">
          <Typography variant="headline1" className="sectionTitle">
            Challenge Detail Page
          </Typography>
          <div className="center-content">
            <div className="description">
              <Typography variant="body1">
                Test
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default ChallengeDetailsPage
