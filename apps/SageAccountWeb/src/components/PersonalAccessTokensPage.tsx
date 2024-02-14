import React from 'react'
import { SourceAppLogo } from './SourceApp'
import { StyledOuterContainer } from './StyledComponents'
import { Box, Paper, Typography } from '@mui/material'
import { BackButton } from './BackButton'
import { AccessTokenPage } from 'synapse-react-client'
import { SourceAppProvider, SYNAPSE_SOURCE_APP_ID } from './useSourceApp'

export function PersonalAccessTokensPageInternal() {
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
        <BackButton to={'/authenticated/myaccount'} />
        <Box sx={{ padding: '60px' }}>
          <SourceAppLogo sx={{ display: 'block' }} />
          <Typography variant="headline3">Personal Access Tokens</Typography>
          <AccessTokenPage
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

export function PersonalAccessTokensPage() {
  // PersonalAccessTokens are exclusively for Synapse, so use the Synapse theme
  return (
    <SourceAppProvider sourceAppId={SYNAPSE_SOURCE_APP_ID}>
      <PersonalAccessTokensPageInternal />
    </SourceAppProvider>
  )
}
