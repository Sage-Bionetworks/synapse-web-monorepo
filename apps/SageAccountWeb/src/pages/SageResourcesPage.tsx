import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Typography,
  useTheme,
} from '@mui/material'
import { Link as RouterLink } from 'react-router'
import { sourceAppConfigTableID } from '../resources'
import { StyledOuterContainer } from '@/components/StyledComponents'
import {
  SourceAppProvider,
  SYNAPSE_SOURCE_APP_ID,
  useSourceApp,
} from '@/components/useSourceApp'
import ShowMore from 'synapse-react-client/components/ShowMore/ShowMore'
import { useSourceAppConfigs } from 'synapse-react-client/utils/hooks/useSourceAppConfigs'

function SageResourcesPageInternal() {
  const theme = useTheme()
  const sourceAppConfigs = useSourceAppConfigs(sourceAppConfigTableID)
  const sageSourceAppConfig = useSourceApp()
  return (
    <StyledOuterContainer>
      <Paper
        className="SageResourcesPage"
        sx={{
          margin: '0 auto',
          maxWidth: '900px',
        }}
      >
        <Box
          sx={{
            px: { xs: '0px', sm: theme.spacing(8) },
            paddingTop: { xs: '0px', sm: theme.spacing(8) },
            position: 'relative',
          }}
        >
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
              Your Synapse account gets you access to all these tools.
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
              Your Synapse account can be used across all these different
              products.
            </Typography>
            <Button
              type="button"
              color="primary"
              variant="contained"
              sx={{
                padding: '10px 50px',
                marginTop: '30px',
                height: '100%',
                '&:hover': { color: 'white' },
              }}
              href="https://www.synapse.org"
            >
              Take me to Synapse
            </Button>

            <Typography variant="body1" sx={{ padding: '15px 0px 30px 50px' }}>
              <Link
                color="primary"
                component={RouterLink}
                to="/authenticated/myaccount"
                sx={{
                  paddingTop: '15px',
                  paddingBottom: '15px',
                  textAlign: 'center',
                }}
              >
                Complete my profile
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            px: theme.spacing(8),
            py: theme.spacing(0),
          }}
        >
          <Grid
            container
            spacing={5}
            sx={{
              mx: { paddingTop: '20px' },
            }}
          >
            {sourceAppConfigs?.map(config => {
              if (
                config.isPublicized &&
                config.appId !== SYNAPSE_SOURCE_APP_ID
              ) {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={4}
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

function SageResourcesPage() {
  return (
    // This page should always use the Synapse resources and theme
    <SourceAppProvider sourceAppId={SYNAPSE_SOURCE_APP_ID}>
      <SageResourcesPageInternal />
    </SourceAppProvider>
  )
}

export default SageResourcesPage
