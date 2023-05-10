import React from 'react'
import { SourceAppLogo } from './SourceApp'
import { StyledOuterContainer } from './StyledComponents'
import { Box, Paper, Typography } from '@mui/material'
import { BackButton } from './BackButton'
import { AccessTokenPage } from 'synapse-react-client/dist/containers/personal_access_token/AccessTokenPage'

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
