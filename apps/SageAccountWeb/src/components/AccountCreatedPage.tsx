import React from 'react'
import { SourceAppLogo } from './SourceApp'
import { Button, Grid, Link, Typography } from '@mui/material'
import { AppContextConsumer } from '../AppContext'
import { Link as RouterLink } from 'react-router-dom'
import { LeftRightPanel } from './LeftRightPanel'
import useMembershipInvitationTokenHandler from '../hooks/useMembershipInvitationTokenHandler'
import { useSourceApp } from './useSourceApp'
import { useSourceAppConfigs } from './useSourceAppConfigs'

export type AccountCreatedPageProps = {}

export const AccountCreatedPage = (props: AccountCreatedPageProps) => {
  const membershipInvitation = useMembershipInvitationTokenHandler()
  const sourceApp = useSourceApp()
  const sourceAppConfigs = useSourceAppConfigs()
  return (
    <>
      <AppContextConsumer>
        {appContext => (
          <LeftRightPanel
            className={'AccountCreatedPage'}
            leftContent={
              <div>
                <SourceAppLogo sx={{ textAlign: 'center' }} />
                <Typography variant="headline2">Account created</Typography>
                <Typography
                  variant="headline3"
                  sx={{ paddingTop: '10px', paddingBottom: '20px' }}
                >
                  <strong>Welcome to {sourceApp?.friendlyName}!</strong>
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: '10px' }}>
                  You’ve created a Synapse account, which you can use on the{' '}
                  {sourceApp?.friendlyName}.
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: '30px' }}>
                  For full access to data and other functionality, we’ll need
                  additional information to verify your identity and certify you
                  to upload data.
                </Typography>
                {membershipInvitation && sourceApp?.appId == 'synapse.org' ? (
                  <Button
                    type="button"
                    color="primary"
                    variant="contained"
                    sx={{ padding: '10px', height: '100%' }}
                    onClick={() => {
                      window.location.assign(
                        `https://www.synapse.org/Team:${membershipInvitation.teamId}`,
                      )
                    }}
                  >
                    Take me to the team page
                  </Button>
                ) : (
                  <Button
                    type="button"
                    color="primary"
                    variant="contained"
                    sx={{ padding: '10px', height: '100%' }}
                    onClick={() => {
                      appContext?.redirectURL &&
                        window.location.assign(appContext.redirectURL)
                    }}
                  >
                    Take me to {sourceApp?.friendlyName}
                  </Button>
                )}
                <Typography variant="body1" sx={{ paddingBottom: '30px' }}>
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
              </div>
            }
            rightContent={
              <div className={'panel-right-text'}>
                <Typography
                  variant="headline3"
                  sx={{ paddingBottom: '10px', fontWeight: 500 }}
                >
                  Your <strong>Synapse account</strong> can also be used to
                  access all these resources.
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: '10px' }}>
                  <Link
                    color="primary"
                    component={RouterLink}
                    to="/sageresources"
                    target="_blank"
                  >
                    More about these resources
                  </Link>
                </Typography>

                <Grid container spacing={4} mx={{ paddingTop: '20px' }}>
                  {sourceAppConfigs?.map(config => {
                    if (
                      config.appId != sourceApp?.appId &&
                      config.isPublicized
                    ) {
                      return (
                        <Grid
                          item
                          xs={6}
                          className="sourceAppItem"
                          key={config.appId}
                          // sx={{
                          //   '&:hover': { backgroundColor: '#EAECEE' },
                          // }}
                        >
                          <a href={config.appURL}>{config.logo}</a>
                        </Grid>
                      )
                    } else {
                      return <></>
                    }
                  })}
                </Grid>
              </div>
            }
          ></LeftRightPanel>
        )}
      </AppContextConsumer>
    </>
  )
}
