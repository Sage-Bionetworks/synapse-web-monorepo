import React from 'react'
import { useSourceApp, SourceAppLogo } from './SourceApp'
import { Button, Link, Grid } from '@mui/material'
import { AppContextConsumer } from 'AppContext'
import { Typography } from 'synapse-react-client'
import { Link as RouterLink } from 'react-router-dom'
import SourceAppConfigs from './SourceAppConfigs'
import { LeftRightPanel } from './LeftRightPanel'
import { sage } from 'configs/sagebionetworks'
import useMembershipInvitationTokenHandler from 'hooks/useMembershipInvitationTokenHandler'
import { synapse } from 'configs/synapse'
export type AccountCreatedPageProps = {}

export const AccountCreatedPage = (props: AccountCreatedPageProps) => {
  const membershipInvitation = useMembershipInvitationTokenHandler()
  const sourceApp = useSourceApp()
  return (
    <>
      <AppContextConsumer>
        {appContext => (
          <LeftRightPanel
            className={'AccountCreatedPage'}
            leftContent={
              <div>
                <SourceAppLogo
                  sx={{ textAlign: 'center', paddingBottom: '50px' }}
                />
                <Typography variant="headline2">Account created</Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ paddingTop: '10px', paddingBottom: '20px' }}
                >
                  <strong>Welcome to {sourceApp?.friendlyName}!</strong>
                </Typography>
                <p>
                  You’ve created a Sage Account, which you can use on the{' '}
                  {sourceApp?.friendlyName}.
                </p>
                <p>
                  For full access to data and other functionality, we’ll need
                  additional information to verify your identity and certify you
                  to upload data.
                </p>
                <Link
                  color="primary"
                  component={RouterLink}
                  to="/authenticated/validate"
                  sx={{ paddingTop: '30px' }}
                >
                  Start identity verification
                </Link>
                <Link
                  color="primary"
                  component={RouterLink}
                  to="/authenticated/certificationquiz"
                  sx={{ paddingTop: '15px', paddingBottom: '15px' }}
                >
                  Get certified for data upload
                </Link>
                {membershipInvitation && sourceApp == synapse ? (
                  <Button
                    type="button"
                    color="primary"
                    variant="contained"
                    sx={{ padding: '10px', height: '100%' }}
                    onClick={() => {
                      window.location.assign(
                        `https://www.synapse.org/#!Team:${membershipInvitation.teamId}`,
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
              </div>
            }
            rightContent={
              <div className={'panel-right-text'}>
                <Typography
                  variant="headline3"
                  sx={{ paddingBottom: '30px', fontWeight: 500 }}
                >
                  Your <strong>Sage Account</strong> can also be used to access
                  all these resources.
                </Typography>
                <Grid container spacing={5} mx={{ paddingTop: '20px' }}>
                  {SourceAppConfigs.map(config => {
                    if (
                      config.appId != sourceApp?.appId &&
                      config.appId != sage.appId
                    ) {
                      return (
                        <Grid item xs={6} className="sourceAppItem">
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
