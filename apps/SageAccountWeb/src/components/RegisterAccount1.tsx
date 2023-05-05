import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  InputLabel,
  Link,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { SynapseClient } from 'synapse-react-client/dist/utils'
import { PROVIDERS } from 'synapse-react-client/dist/containers/auth/AuthenticationMethodSelection'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import {
  isAliasAvailable,
  registerAccountStep1,
} from 'synapse-react-client/dist/utils/SynapseClient'
import { AliasType } from 'synapse-react-client/dist/utils/synapseTypes/Principal/PrincipalServices'
import { SourceAppLogo, useSourceApp } from './SourceApp'
import { Link as RouterLink } from 'react-router-dom'
import { EmailConfirmationPage } from './EmailConfirmationPage'
import IconSvg from 'synapse-react-client/dist/containers/IconSvg'
import GoogleLogo from '../assets/g-logo.png'
import { useAppContext } from '../AppContext'
import { isMembershipInvtnSignedToken } from 'synapse-react-client/dist/utils/synapseTypes/SignedToken/MembershipInvtnSignedToken'
import { BackButton } from './BackButton'
import {
  StyledFormControl,
  StyledInnerContainer,
  StyledOuterContainer,
} from './StyledComponents'
import { POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY } from 'synapse-react-client/dist/utils/AppUtils'

export type RegisterAccount1Props = {}

export enum Pages {
  CHOOSE_REGISTRATION,
  EMAIL_REGISTRATION,
  EMAIL_REGISTRATION_THANK_YOU,
  GOOGLE_REGISTRATION,
}

export const RegisterAccount1 = (props: RegisterAccount1Props) => {
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
          setEmail(membershipInvitation.inviteeEmail)
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
      await registerAccountStep1({ email }, callbackUrl)
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
      const aliasCheckResponse = await isAliasAvailable({
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
          POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY,
          `${SynapseClient.getRootURL()}authenticated/signTermsOfUse`,
        )
        const redirectUrl = `${SynapseClient.getRootURL()}?provider=${
          PROVIDERS.GOOGLE
        }`
        SynapseClient.oAuthUrlRequest(PROVIDERS.GOOGLE, redirectUrl, username)
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

  return (
    <>
      <StyledOuterContainer className="RegisterAccount1">
        <StyledInnerContainer>
          {page !== Pages.EMAIL_REGISTRATION_THANK_YOU && (
            <>
              <Box sx={{ py: 10, px: 8, height: '100%', position: 'relative' }}>
                <BackButtonForPage />
                <Box sx={{ minHeight: '530px' }}>
                  <div className="panel-logo logo-wrapper">
                    <SourceAppLogo />
                  </div>
                  {page === Pages.CHOOSE_REGISTRATION && (
                    <div style={{ marginTop: '30px' }}>
                      <Button
                        onClick={() => setPage(Pages.GOOGLE_REGISTRATION)}
                        sx={chooseButtonSx}
                        variant="outlined"
                      >
                        <img
                          className="googleLogo"
                          src={GoogleLogo}
                          alt="Google Logo"
                          style={{ width: 25, marginRight: 5 }}
                        />
                        <span className="signInText">
                          Create account with Google
                        </span>
                      </Button>
                      <Button
                        onClick={() => setPage(Pages.EMAIL_REGISTRATION)}
                        sx={chooseButtonSx}
                        variant="outlined"
                      >
                        <IconSvg icon="email" sx={{ marginRight: '5px' }} />
                        Create account with your email
                      </Button>
                    </div>
                  )}
                  {page === Pages.EMAIL_REGISTRATION && (
                    <div className="EmailAddressUI">
                      <StyledFormControl
                        fullWidth
                        variant="standard"
                        margin="normal"
                        sx={formControlSx}
                      >
                        <InputLabel shrink htmlFor="emailAddress" required>
                          Email address
                        </InputLabel>
                        <TextField
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
                        <InputLabel shrink htmlFor="username" required>
                          Username
                        </InputLabel>
                        <TextField
                          fullWidth
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
