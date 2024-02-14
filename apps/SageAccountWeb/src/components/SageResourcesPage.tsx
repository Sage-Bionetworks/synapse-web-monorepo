import React from 'react'
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material'
import { ShowMore } from 'synapse-react-client'
import { useHistory } from 'react-router-dom'
import { StyledOuterContainer } from './StyledComponents'
import { BackButton } from './BackButton'
import { useSourceAppConfigs } from './useSourceAppConfigs'
import {
  DEFAULT_SOURCE_APP_ID,
  SourceAppProvider,
  useSourceApp,
} from './useSourceApp'

export function SageResourcesPageInternal() {
  const history = useHistory()
  const theme = useTheme()
  const sourceAppConfigs = useSourceAppConfigs()
  const sageSourceAppConfig = useSourceApp()
  return (
    <StyledOuterContainer>
      <Paper
        className="SageResourcesPage"
        sx={{
          margin: '0 auto',
          width: '900px',
        }}
      >
        <Box
          sx={{
            px: theme.spacing(8),
            paddingTop: theme.spacing(8),
            position: 'relative',
          }}
        >
          <BackButton
            onClick={() => {
              history.goBack()
            }}
          />
          <Box
            sx={{
              backgroundColor: '#3959790D',
              padding: '30px',
              marginBottom: '40px',
            }}
          >
            <div className="SageLogo">{sageSourceAppConfig?.logo}</div>
            <Typography
              variant="subtitle1"
              sx={{ marginTop: '30px', paddingBottom: '30px', fontWeight: 500 }}
            >
              Your Sage Account gets you access to all these tools.
            </Typography>

            <Typography
              variant="body1"
              sx={{ paddingBottom: '30px', fontWeight: 500 }}
            >
              Sage Bionetworks creates resources to help speed the translation
              of science into medicine.
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingBottom: '30px', fontWeight: 500 }}
            >
              Your Sage Account can be used across all these different products.
              You can manage your account at{' '}
              <a href="/authenticated/myaccount">accounts.sagebionetwork.org</a>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            px: theme.spacing(8),
            py: theme.spacing(0),
          }}
        >
          <Grid container spacing={5} mx={{ paddingTop: '20px' }}>
            {sourceAppConfigs?.map(config => {
              if (config.isPublicized) {
                return (
                  <Grid
                    item
                    xs={4}
                    className="sourceAppItem"
                    key={config.appId}
                  >
                    <a href={config.appURL}>{config.logo}</a>
                    <Typography
                      variant="body1"
                      sx={{ paddingBottom: '30px', fontWeight: 500 }}
                    >
                      <ShowMore summary={config.description} />
                    </Typography>
                  </Grid>
                )
              } else {
                return false
              }
            })}
          </Grid>
        </Box>
      </Paper>
    </StyledOuterContainer>
  )
}

export function SageResourcesPage() {
  return (
    // This page should always use the Sage Bionetworks resources and theme
    <SourceAppProvider sourceAppId={DEFAULT_SOURCE_APP_ID}>
      <SageResourcesPageInternal />
    </SourceAppProvider>
  )
}
