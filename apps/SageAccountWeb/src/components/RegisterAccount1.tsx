import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import {
  IconSvg,
  LastLoginInfo,
  SynapseClient,
  SynapseConstants,
  displayToast,
  useLastLoginInfo,
} from 'synapse-react-client'
import {
  AliasType,
  isMembershipInvtnSignedToken,
} from '@sage-bionetworks/synapse-types'
import { SourceAppLogo } from './SourceApp'
import { Link as RouterLink } from 'react-router-dom'
import { EmailConfirmationPage } from './EmailConfirmationPage'
import GoogleLogo from '../assets/g-logo.png'
import { useAppContext } from '../AppContext'
import { BackButton } from './BackButton'
import {
  StyledFormControl,
  StyledInnerContainer,
  StyledOuterContainer,
} from './StyledComponents'
import { useSourceApp } from './useSourceApp'

export enum Pages {
  CHOOSE_REGISTRATION,
  EMAIL_REGISTRATION,
  EMAIL_REGISTRATION_THANK_YOU,
  GOOGLE_REGISTRATION,
}

export const RegisterAccount1 = () => {
  const appContext = useAppContext()
  const theme = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [page, setPage] = useState(Pages.CHOOSE_REGISTRATION)
  const sourceAppName = useSourceApp()?.friendlyName
  const [membershipInvitationEmail, setMembershipInvitationEmail] =
    useState<string>()

  // If we have a MembershipInvtnSignedToken, initialize the email address with the membership invitation invitee email.
  useEffect(() => {
    if (
      appContext.signedToken &&
      isMembershipInvtnSignedToken(appContext.signedToken)
    ) {
      SynapseClient.getMembershipInvitation(appContext.signedToken).then(
        membershipInvitation => {
          setEmail(membershipInvitation.inviteeEmail!)
          setMembershipInvitationEmail(membershipInvitation.inviteeEmail)
        },
      )
    }
  }, [appContext.signedToken])

  const formControlSx = {
    marginTop: '0px',
    marginBottom: '10px',
  }

  const buttonSx = {
    width: '100%',
    padding: '10px',
    color: 'white',
    marginTop: '30px',
  }

  const chooseButtonSx = {
    width: '100%',
    marginBottom: '10px',
    padding: '10px',
    color: 'grey.800',
    borderColor: '#EAECEE',
  }

  const BackButtonForPage = () => {
    switch (page) {
      case Pages.CHOOSE_REGISTRATION:
        return <BackButton to={'/authenticated/myaccount'} />
      case Pages.EMAIL_REGISTRATION:
      case Pages.GOOGLE_REGISTRATION:
        return <BackButton onClick={() => setPage(Pages.CHOOSE_REGISTRATION)} />
      default:
        return <></>
    }
  }

  const onSendRegistrationInfo = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!email) {
      displayToast('Please provide a valid email and try again.', 'danger')
      return
    }
    setIsLoading(true)
    try {
      const callbackUrl = `${window.location.protocol}//${window.location.host}/register2?emailValidationSignedToken=`
      await SynapseClient.registerAccountStep1({ email }, callbackUrl)
      setPage(Pages.EMAIL_REGISTRATION_THANK_YOU)
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  const onSignUpWithGoogle = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!username) {
      displayToast('Please provide a user name and try again.', 'danger')
      return
    }
    setIsLoading(true)
    try {
      const aliasCheckResponse = await SynapseClient.isAliasAvailable({
        alias: username,
        type: AliasType.USER_NAME,
      })
      if (!aliasCheckResponse.available) {
        displayToast('Sorry, that username has already been taken.', 'danger')
      } else if (!aliasCheckResponse.valid) {
        displayToast('Sorry, that username is not valid.', 'danger')
      } else {
        // Looks good!  Go to Google oauth account creation flow
        // redirect to Google login, passing the username through via the state param.
        // Send us back to the special oauth2 account creation step2 path (which is ignored by our AppInitializer)
        localStorage.setItem(
          SynapseConstants.POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY,
          `${SynapseClient.getRootURL()}authenticated/signTermsOfUse`,
        )
        const redirectUrl = `${SynapseClient.getRootURL()}?provider=${
          SynapseConstants.OAUTH2_PROVIDERS.GOOGLE
        }`
        SynapseClient.oAuthUrlRequest(
          SynapseConstants.OAUTH2_PROVIDERS.GOOGLE,
          redirectUrl,
          username,
        )
          .then((data: any) => {
            const authUrl = data.authorizationUrl
            window.location.assign(authUrl)
          })
          .catch((err: any) => {
            displayToast(err.reason as string, 'danger')
          })
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  const lastLoginInfo = LastLoginInfo({
    display: 'box',
    ...useLastLoginInfo(),
  })

  return (
    <>
      <StyledOuterContainer className="RegisterAccount1">
        <StyledInnerContainer>
          {page !== Pages.EMAIL_REGISTRATION_THANK_YOU && (
            <>
              <Box sx={{ py: 10, px: 8, height: '100%', position: 'relative' }}>
                <BackButtonForPage />
                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{ minHeight: '530px' }}
                >
                  <div className="panel-logo logo-wrapper">
                    <SourceAppLogo />
                  </div>
                  {page === Pages.CHOOSE_REGISTRATION && (
                    <>
                      <div>
                        <Button
                          onClick={() => setPage(Pages.GOOGLE_REGISTRATION)}
                          sx={chooseButtonSx}
                          variant="outlined"
                          startIcon={
                            <img
                              className="googleLogo"
                              src={GoogleLogo}
                              alt="Google Logo"
                              style={{ width: 25 }}
                            />
                          }
                        >
                          Create account with Google
                        </Button>
                        <Button
                          onClick={() => setPage(Pages.EMAIL_REGISTRATION)}
                          sx={chooseButtonSx}
                          variant="outlined"
                          startIcon={<IconSvg icon="email" />}
                        >
                          Create account with your email
                        </Button>
                      </div>
                      {lastLoginInfo && <Box mt="auto">{lastLoginInfo}</Box>}
                    </>
                  )}
                  {page === Pages.EMAIL_REGISTRATION && (
                    <div className="EmailAddressUI">
                      <StyledFormControl
                        fullWidth
                        variant="standard"
                        margin="normal"
                        sx={formControlSx}
                      >
                        <TextField
                          label={'Email address'}
                          fullWidth
                          id="emailAddress"
                          name="emailAddress"
                          required
                          onChange={e =>
                            setEmail(
                              e.target.value ?? membershipInvitationEmail,
                            )
                          }
                          value={email || ''}
                          onKeyPress={(e: any) => {
                            if (e.key === 'Enter') {
                              onSendRegistrationInfo(e)
                            }
                          }}
                        />
                        {!!membershipInvitationEmail &&
                          membershipInvitationEmail !== email && (
                            <Typography
                              variant="smallText1"
                              sx={{ color: theme.palette.error.main }}
                            >
                              Changing your email address will affect any items
                              that have been shared with you. You can add
                              additional email addresses after account creation.
                            </Typography>
                          )}
                      </StyledFormControl>
                      <Button
                        sx={buttonSx}
                        variant="contained"
                        onClick={onSendRegistrationInfo}
                        type="button"
                        disabled={email && !isLoading ? false : true}
                      >
                        Continue
                      </Button>
                    </div>
                  )}
                  {page === Pages.GOOGLE_REGISTRATION && (
                    <div>
                      <StyledFormControl
                        fullWidth
                        variant="standard"
                        margin="normal"
                        sx={formControlSx}
                      >
                        <TextField
                          fullWidth
                          label={'Username'}
                          id="username"
                          name="username"
                          required
                          onChange={e => setUsername(e.target.value)}
                          value={username || ''}
                          onKeyPress={(e: any) => {
                            if (e.key === 'Enter') {
                              onSignUpWithGoogle(e)
                            }
                          }}
                        />
                      </StyledFormControl>
                      <Button
                        sx={buttonSx}
                        variant="contained"
                        onClick={onSignUpWithGoogle}
                        type="button"
                        disabled={username && !isLoading ? false : true}
                      >
                        Continue
                      </Button>
                    </div>
                  )}
                </Box>
              </Box>
              <Box
                sx={{
                  background:
                    "url('https://s3.amazonaws.com/static.synapse.org/images/login-panel-bg.svg') no-repeat right bottom 20px",
                }}
              >
                <Typography variant="headline2" sx={{ marginTop: '95px' }}>
                  Create an Account
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                  Your <strong>{sourceAppName}</strong> account is also a{' '}
                  <strong>Sage account</strong>. You can also use it to access
                  many other resources from Sage.
                </Typography>
                <Link
                  color="primary"
                  component={RouterLink}
                  to="/sageresources"
                >
                  More about Sage accounts
                </Link>
              </Box>
            </>
          )}
        </StyledInnerContainer>
        {page === Pages.EMAIL_REGISTRATION_THANK_YOU && (
          <EmailConfirmationPage email={email} />
        )}
      </StyledOuterContainer>
    </>
  )
}
