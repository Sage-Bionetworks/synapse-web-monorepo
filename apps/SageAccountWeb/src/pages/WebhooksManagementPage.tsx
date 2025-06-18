import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { BackButton } from '@/components/BackButton'
import { SourceAppLogo } from '@/components/SourceApp'
import { StyledOuterContainer } from '@/components/StyledComponents'
import {
  SourceAppProvider,
  SYNAPSE_SOURCE_APP_ID,
} from '@/components/useSourceApp'
import WebhookDashboard from 'synapse-react-client/components/Webhook/WebhookDashboard'

function WebhooksManagementPageInternal() {
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

function WebhookManagementPage() {
  // Webhooks are exclusively for Synapse, so use the Synapse theme
  return (
    <SourceAppProvider sourceAppId={SYNAPSE_SOURCE_APP_ID}>
      <WebhooksManagementPageInternal />
    </SourceAppProvider>
  )
}

export default WebhookManagementPage
