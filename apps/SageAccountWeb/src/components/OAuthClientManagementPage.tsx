import React from 'react'
import { SourceAppLogo } from './SourceApp'
import { StyledOuterContainer } from './StyledComponents'
import { Box, Paper, Typography } from '@mui/material'
import { BackButton } from './BackButton'
import { OAuthManagement } from 'synapse-react-client/dist/containers/oauth/OAuthManagement'

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
          <OAuthManagement />
        </Box>
      </Paper>
    </StyledOuterContainer>
  )
}
