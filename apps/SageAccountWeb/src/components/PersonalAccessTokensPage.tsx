import React from 'react'
import { SourceAppLogo } from './SourceApp'
import { SynapseComponents } from 'synapse-react-client'
import { StyledOuterContainer } from './StyledComponents'
import { Box, Paper, Typography } from '@mui/material'

export const PersonalAccessTokensPage = () => {
  return (
    <StyledOuterContainer className="PersonalAccessTokenPage">
      <Paper
        className="SageResourcesPage"
        sx={{
          margin: '0 auto',
          width: '900px',
          '& .SourceAppLogo': {
            display: 'block',
          },
        }}
      >
        <Box sx={{ padding: '60px' }}>
          <SourceAppLogo sx={{ display: 'block' }} />
          <Typography variant="headline3">Personal Access Tokens</Typography>
          <SynapseComponents.AccessTokenPage
            title=""
            body="Issue personal access tokens to access your Synapse resources in the
            command line clients. A personal access token will expire if it is
            unused for 180 consecutive days. You may create up to 100 personal
            access tokens."
          />
        </Box>
      </Paper>
    </StyledOuterContainer>
  )
}
