import GoogleLogo from '@/assets/g-logo.png'
import {
  VALID_USERNAME_DESCRIPTION,
  validateAlias,
} from '@/utils/validateAlias'
import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import {
  AliasType,
  isMembershipInvtnSignedToken,
} from '@sage-bionetworks/synapse-types'
import { SyntheticEvent, useEffect, useMemo, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router'
import { useAppContext } from '../AppContext'
import { BackButton } from '@/components/BackButton'
import { EmailConfirmationPage } from '@/components/EmailConfirmationPage'
import { SourceAppLogo } from '@/components/SourceApp'
import {
  StyledFormControl,
  StyledInnerContainer,
  StyledOuterContainer,
} from '@/components/StyledComponents'
import {
  ARCUS_SOURCE_APP_ID,
  SYNAPSE_SOURCE_APP_ID,
  useSourceApp,
} from '@/components/useSourceApp'
import SynapseClient from 'synapse-react-client/synapse-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { displayToast } from 'synapse-react-client/components/ToastMessage/ToastMessage'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'
import { useApplicationSessionContext } from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'
import LastLoginInfo, {
  useLastLoginInfo,
} from 'synapse-react-client/components/Authentication/LastLoginInfo'
import RegisterPageLogoutPrompt from 'synapse-react-client/components/RegisterPageLogoutPrompt/RegisterPageLogoutPrompt'
import IconSvg from 'synapse-react-client/components/IconSvg/IconSvg'

export enum Pages {
  CHOOSE_REGISTRATION,
  EMAIL_REGISTRATION,
  EMAIL_REGISTRATION_THANK_YOU,
  OAUTH_REGISTRATION,
}

function BackButtonForPage(props: {
  page: Pages
  setPage: (page: Pages) => void
  isArcusApp: boolean
}) {
  const { page, setPage, isArcusApp } = props
  if (isArcusApp) {
    return <></>
  }
  switch (page) {
    case Pages.CHOOSE_REGISTRATION:
      return <BackButton to={'/authenticated/myaccount'} />
    case Pages.EMAIL_REGISTRATION:
    case Pages.OAUTH_REGISTRATION:
      return <BackButton onClick={() => setPage(Pages.CHOOSE_REGISTRATION)} />
    default:
      return <></>
  }
}

function handleError(e: unknown) {
  if (e instanceof SynapseClientError) {
    displayToast(e.reason, 'danger')
  } else if (e instanceof Error) {
    displayToast(e.message, 'danger')
  } else {
    // This should never happen
    console.error(e)
    displayToast(JSON.stringify(e), 'danger')
  }
}

const RegisterAccount1 = () => {
  const { accessToken } = useSynapseContext()
  const isSignedIn = !!accessToken
  const appContext = useAppContext()
  const sessionContext = useApplicationSessionContext()
  const theme = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [usernameInvalidReason, setUsernameInvalidReason] = useState<
    string | null
  >(null)
  const { appId: sourceAppId, friendlyName: sourceAppName } = useSourceApp()
  const isArcusApp = sourceAppId === ARCUS_SOURCE_APP_ID
  const [page, setPage] = useState(Pages.CHOOSE_REGISTRATION)
  const [membershipInvitationEmail, setMembershipInvitationEmail] =
    useState<string>()
  const [oauthRegistrationProvider, setOAuthRegistrationProvider] =
    useState<string>(SynapseConstants.OAUTH2_PROVIDERS.GOOGLE)
  const { search } = useLocation()
  const queryParams = useMemo(() => new URLSearchParams(search), [search])
  const emailFromParams = queryParams.get('email')

  // If we have an email param, initialize the email address with the param
  useEffect(() => {
    if (emailFromParams) {
      setEmail(emailFromParams)
      setPage(Pages.EMAIL_REGISTRATION)
    }
    // Initialize the email address field with the email query parameter, but allow the user to change it or register using OAuth
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // If this is the Arcus app, skip the "choose registration" page and go straight to OAuth registration
  useEffect(() => {
    if (isArcusApp) {
      setPage(Pages.OAUTH_REGISTRATION)
      setOAuthRegistrationProvider(SynapseConstants.OAUTH2_PROVIDERS.ARCUS)
    }
  }, [isArcusApp])

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
    height: '52px',
    marginBottom: '10px',
    padding: '10px',
    color: 'grey.800',
    borderColor: '#EAECEE',
  }

  const onSendRegistrationInfo = async (event: SyntheticEvent) => {
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
    } catch (e: unknown) {
      handleError(e)
    } finally {
      setIsLoading(false)
    }
  }

  const onSignUpWithOAuthProvider = async (provider: string) => {
    if (!username) {
      setUsernameInvalidReason('Please provide a user name and try again.')
      return
    }
    setUsernameInvalidReason(null)
    setIsLoading(true)
    try {
      const aliasCheckResponse = await SynapseClient.isAliasAvailable({
        alias: username,
        type: AliasType.USER_NAME,
      })
      try {
        validateAlias(aliasCheckResponse)
      } catch (e: unknown) {
        setUsernameInvalidReason((e as Error).message)
        return
      }
      // Looks good!  Go to Google oauth account creation flow
      // redirect to Google login, passing the username through via the state param.
      // Send us back to the special oauth2 account creation step2 path (which is ignored by our AppInitializer)
      localStorage.setItem(
        SynapseConstants.LAST_PLACE_LOCALSTORAGE_KEY,
        `${SynapseClient.getRootURL()}authenticated/signTermsOfUse`,
      )
      const redirectUrl = `${SynapseClient.getRootURL()}?provider=${provider}`
      const { authorizationUrl } = await SynapseClient.oAuthUrlRequest(
        provider,
        redirectUrl,
        { registrationUsername: username },
      )
      window.location.assign(authorizationUrl)
    } catch (e: unknown) {
      handleError(e)
    } finally {
      setIsLoading(false)
    }
  }

  const loginInfo = useLastLoginInfo()

  const lastLoginInfo = <LastLoginInfo display="box" {...loginInfo} />

  if (isSignedIn) {
    return (
      <StyledOuterContainer className="RegisterAccount1">
        <Box
          sx={{
            mx: 'auto',
            mt: 15,
            width: 'fit-content',
          }}
        >
          <RegisterPageLogoutPrompt
            onLogout={() => {
              void sessionContext.refreshSession()
            }}
            logo={<SourceAppLogo sx={{ width: '100%' }} />}
          />
        </Box>
      </StyledOuterContainer>
    )
  }

  return (
    <>
      <StyledOuterContainer className="RegisterAccount1">
        <StyledInnerContainer>
          {page !== Pages.EMAIL_REGISTRATION_THANK_YOU && (
            <>
              <Box sx={{ py: 10, px: 8, height: '100%', position: 'relative' }}>
                <BackButtonForPage
                  page={page}
                  setPage={setPage}
                  isArcusApp={isArcusApp}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: { xs: '100%', md: '530px' },
                  }}
                >
                  <div className="panel-logo logo-wrapper">
                    <SourceAppLogo />
                  </div>
                  {page === Pages.CHOOSE_REGISTRATION && (
                    <>
                      <div>
                        <Button
                          onClick={() => {
                            setOAuthRegistrationProvider(
                              SynapseConstants.OAUTH2_PROVIDERS.GOOGLE,
                            )
                            setPage(Pages.OAUTH_REGISTRATION)
                          }}
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
                      {lastLoginInfo && (
                        <Box
                          sx={{
                            mt: 'auto',
                          }}
                        >
                          {lastLoginInfo}
                        </Box>
                      )}
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
                          onKeyDown={e => {
                            if (e.key === 'Enter') {
                              void onSendRegistrationInfo(e)
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
                        onClick={e => {
                          void onSendRegistrationInfo(e)
                        }}
                        type="button"
                        disabled={!(email && !isLoading)}
                      >
                        Continue
                      </Button>
                    </div>
                  )}
                  {page === Pages.OAUTH_REGISTRATION && (
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
                          error={!!usernameInvalidReason}
                          helperText={usernameInvalidReason}
                          onChange={e => {
                            setUsername(e.target.value)
                          }}
                          value={username || ''}
                          onKeyDown={e => {
                            if (e.key === 'Enter') {
                              e.preventDefault()
                              void onSignUpWithOAuthProvider(
                                oauthRegistrationProvider,
                              )
                            }
                          }}
                        />
                      </StyledFormControl>
                      <Button
                        sx={buttonSx}
                        variant="contained"
                        onClick={e => {
                          e.preventDefault()
                          void onSignUpWithOAuthProvider(
                            oauthRegistrationProvider,
                          )
                        }}
                        type="button"
                        disabled={!(username && !isLoading)}
                      >
                        Continue
                      </Button>
                    </div>
                  )}
                </Box>
              </Box>
              <Box
                sx={{
                  background: {
                    xs: 'none',
                    md: "url('https://s3.amazonaws.com/static.synapse.org/images/login-panel-bg.svg') no-repeat right bottom 20px",
                  },
                }}
              >
                <Typography
                  variant="headline2"
                  sx={{ marginTop: { xs: '45px', md: '95px' } }}
                >
                  Create an Account
                </Typography>
                {page !== Pages.OAUTH_REGISTRATION && (
                  <>
                    {sourceAppId != SYNAPSE_SOURCE_APP_ID && (
                      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                        Your <strong>{sourceAppName}</strong> account is also a{' '}
                        <strong>Synapse account</strong>. You can also use it to
                        access many other resources from Sage Bionetworks.
                      </Typography>
                    )}
                    {sourceAppId === SYNAPSE_SOURCE_APP_ID && (
                      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                        Your <strong>Synapse</strong> account can also be used
                        to access many other resources from Sage Bionetworks.
                      </Typography>
                    )}
                  </>
                )}
                {page === Pages.OAUTH_REGISTRATION && (
                  <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                    {VALID_USERNAME_DESCRIPTION}
                  </Typography>
                )}
                <Link
                  color="primary"
                  component={RouterLink}
                  to="/sageresources"
                >
                  More about Synapse accounts
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

export default RegisterAccount1
