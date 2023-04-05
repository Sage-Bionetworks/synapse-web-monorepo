import React from 'react'
import { Grid, Paper, Box } from '@mui/material'
import { Typography } from 'synapse-react-client'
import ShowMore from 'synapse-react-client/dist/containers/row_renderers/utils/ShowMore'
import { useHistory } from 'react-router-dom'
import { StyledOuterContainer } from './StyledComponents'
import { useSourceApp, useSourceAppConfigs } from './SourceApp'
import { BackButton } from './BackButton'

export type SageResourcesPageProps = {}

export const SageResourcesPage = (props: SageResourcesPageProps) => {
  const history = useHistory()
  const sourceAppConfigs = useSourceAppConfigs()
  const sageSourceAppConfig = useSourceApp('SAGE')
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
            px: '64px',
            paddingTop: '64px',
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
              variant="body1"
              sx={{ marginTop: '30px', paddingBottom: '30px', fontWeight: 500 }}
            >
              Your Sage Account gets you access to all these tools.
            </Typography>

            <Typography
              variant="body2"
              sx={{ paddingBottom: '30px', fontWeight: 500 }}
            >
              Sage Bionetworks creates resources to help speed the translation
              of science into medicine.
            </Typography>
            <Typography
              variant="body2"
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
            padding: '0px 64px',
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
                      variant="body2"
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
