import { Box, Container, Paper } from '@mui/material'
import WebhookDashboard from 'synapse-react-client/components/Webhook/WebhookDashboard'
import { BackButton } from './BackButton'
import { SourceAppLogo } from './SourceApp'
import { StyledOuterContainer } from './StyledComponents'
import { SourceAppProvider, SYNAPSE_SOURCE_APP_ID } from './useSourceApp'

export function WebhooksManagementPageInternal() {
  return (
    <StyledOuterContainer>
      <Container>
        <Paper
          className="SageResourcesPage"
          sx={{
            margin: '0 auto',
            '& .SourceAppLogo': {
              display: 'block',
            },
          }}
        >
          <Box sx={{ padding: '60px', position: 'relative' }}>
            <BackButton to={'/authenticated/myaccount'} />
            <SourceAppLogo />
            <WebhookDashboard />
          </Box>
        </Paper>
      </Container>
    </StyledOuterContainer>
  )
}
export function WebhookManagementPage() {
  // Webhooks are exclusively for Synapse, so use the Synapse theme
  return (
    <SourceAppProvider sourceAppId={SYNAPSE_SOURCE_APP_ID}>
      <WebhooksManagementPageInternal />
    </SourceAppProvider>
  )
}
