import { SourceAppLogo } from '@/components/SourceApp'
import { StyledOuterContainer } from '@/components/StyledComponents'
import { Box, Paper, Typography } from '@mui/material'
import { BackButton } from '@/components/BackButton'
import {
  SourceAppProvider,
  SYNAPSE_SOURCE_APP_ID,
} from '@/components/useSourceApp'
import OAuthClientManagement from 'synapse-react-client/components/OAuthClientManagement'

function OAuthClientManagementPageInternal() {
  return (
    <StyledOuterContainer className="OAuthClientManagementPage">
      <Paper
        className="SageResourcesPage"
        sx={{
          margin: '0 auto',
          width: { xs: '100%', md: '900px' },
          '& .SourceAppLogo': {
            display: 'block',
          },
        }}
      >
        <Box
          sx={{
            py: '60px',
            px: { xs: '10px', med: '60px' },
            position: 'relative',
          }}
        >
          <BackButton to={'/authenticated/myaccount'} />
          <SourceAppLogo />
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

function OAuthClientManagementPage() {
  // OAuth2 clients are exclusively for Synapse, so use the Synapse theme
  return (
    <SourceAppProvider sourceAppId={SYNAPSE_SOURCE_APP_ID}>
      <OAuthClientManagementPageInternal />
    </SourceAppProvider>
  )
}

export default OAuthClientManagementPage
