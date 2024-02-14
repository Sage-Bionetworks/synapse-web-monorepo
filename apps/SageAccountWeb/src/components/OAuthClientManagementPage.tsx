import React from 'react'
import { SourceAppLogo } from './SourceApp'
import { StyledOuterContainer } from './StyledComponents'
import { Box, Paper, Typography } from '@mui/material'
import { BackButton } from './BackButton'
import { OAuthClientManagement } from 'synapse-react-client'
import { SourceAppProvider, SYNAPSE_SOURCE_APP_ID } from './useSourceApp'

export function OAuthClientManagementPageInternal() {
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
export function OAuthClientManagementPage() {
  // OAuth2 clients are exclusively for Synapse, so use the Synapse theme
  return (
    <SourceAppProvider sourceAppId={SYNAPSE_SOURCE_APP_ID}>
      <OAuthClientManagementPageInternal />
    </SourceAppProvider>
  )
}
