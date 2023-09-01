import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { OAuthClientManagement } from 'synapse-react-client'
import { SourceAppLogo } from './SourceApp'
import { StyledOuterContainer } from './StyledComponents'
import { BackButton } from './BackButton'

export const OAuthClientManagementPage = () => {
  return (
    <StyledOuterContainer className="OAuthClientManagementPage">
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
        <BackButton to={'/authenticated/myaccount'} />
        <Box sx={{ padding: '60px' }}>
          <SourceAppLogo sx={{ display: 'block' }} />
          <Typography
            variant="headline3"
            sx={{ marginTop: '20px', marginBottom: '20px' }}
          >
            OAuth Client Management
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            OAuth Clients can be created to develop applications that use
            Synapse as an identity provider.
          </Typography>
          <OAuthClientManagement />
        </Box>
      </Paper>
    </StyledOuterContainer>
  )
}
