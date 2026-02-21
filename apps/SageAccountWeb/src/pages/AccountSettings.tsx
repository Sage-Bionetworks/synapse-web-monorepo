import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  Link,
  ListItemButton,
  MenuItem,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import {
  FeatureFlagEnum,
  UserBundle,
  UserProfile,
  VerificationState,
  VerificationStateEnum,
} from '@sage-bionetworks/synapse-types'
import React from 'react'
import { RefObject, useEffect, useRef, useState } from 'react'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router'
import RORInstitutionField from 'synapse-react-client/components/RORInstitutionField/RORInstitutionField'
import UniversalCookies from 'universal-cookie'
import { ConfigureEmail } from '../components/ConfigureEmail'
import { ProfileAvatar } from '../components/ProfileAvatar'
import { ORCiDButton } from '../components/ProfileValidation/ORCiDButton'
import { UnbindORCiDDialog } from '../components/ProfileValidation/UnbindORCiD'
import { StyledFormControl } from '../components/StyledComponents'
import AccountSettingsTopBar from '../components/AccountSettingsTopBar'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import IconSvg from 'synapse-react-client/components/IconSvg/IconSvg'
import { useCookiePreferences } from 'synapse-react-client/utils/hooks/useCookiePreferences'
import { useApplicationSessionContext } from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/featureflags/useGetFeatureFlag'
import { useGetCurrentRealm } from 'synapse-react-client/synapse-queries/realm/useRealmPrincipals'
import SynapseClient from 'synapse-react-client/synapse-client'
import { displayToast } from 'synapse-react-client/components/ToastMessage/ToastMessage'
import ChangePassword from 'synapse-react-client/components/ChangePassword/ChangePassword'
import TwoFactorAuthSettingsPanel from 'synapse-react-client/components/Authentication/TwoFactorAuthSettingsPanel'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'
import CookiePreferencesDialog from 'synapse-react-client/components/CookiesNotification/CookiePreferencesDialog'
import { SYNAPSE_REALM } from 'synapse-react-client/utils/SynapseConstants'

function CompletionStatus({ isComplete }: { isComplete: boolean | undefined }) {
  return (
    <div className="item-completion">
      {isComplete ? (
        <span className="completeIcon">
          <IconSvg icon="check" /> Completed
        </span>
      ) : (
        <span className="incompleteIcon">
          <IconSvg icon="close" /> Incomplete
        </span>
      )}
    </div>
  )
}

const AccountSettings = (): React.ReactNode => {
  const { accessToken } = useSynapseContext()
  const { hash } = useLocation()
  const [userProfile, setUserProfile] = useState<UserProfile>()
  const [firstName, setFirstName] = useState<string>()
  const [lastName, setLastName] = useState<string>()
  const [position, setPosition] = useState<string>()
  const [company, setCompany] = useState<string>()
  const [location, setLocation] = useState<string>()
  const [url, setUrl] = useState<string>()
  const [industry, setIndustry] = useState<string>()
  const [username, setUsername] = useState<string>()
  const [bio, setBio] = useState<string>()
  const [changeInForm, setChangeInForm] = useState(false)
  const [orcid, setOrcid] = useState<string>()
  const [verified, setVerified] = useState<boolean>()
  const [verificationState, setCurrentVerificationState] =
    useState<VerificationState>()
  const [isCertified, setIsCertified] = useState<boolean>()
  const [termsOfUse, setTermsOfUse] = useState<boolean>()
  const [showUnbindORCiDDialog, setShowUnbindORCiDDialog] =
    useState<boolean>(false)
  const navigate = useNavigate()
  const profileInformationRef = useRef<HTMLDivElement>(null)
  const changePasswordRef = useRef<HTMLDivElement>(null)
  const timezoneRef = useRef<HTMLDivElement>(null)
  const emailAddressesRef = useRef<HTMLDivElement>(null)
  const trustCredentialRef = useRef<HTMLDivElement>(null)
  const twoFactorAuthRef = useRef<HTMLDivElement>(null)
  const personalAccessTokenRef = useRef<HTMLDivElement>(null)
  const oauthClientManagementRef = useRef<HTMLDivElement>(null)
  const webhooksRef = useRef<HTMLDivElement>(null)
  const cookieManagementRef = useRef<HTMLDivElement>(null)
  const signOutSectionRef = useRef<HTMLDivElement>(null)
  const [cookiePreferences] = useCookiePreferences()
  const [isCookiePrefsDialogVisible, setIsCookiePrefsDialogVisible] =
    useState(false)

  const { clearSession } = useApplicationSessionContext()
  const showWebhooks = useGetFeatureFlag(FeatureFlagEnum.WEBHOOKS_UI)
  const { data: currentRealm } = useGetCurrentRealm()
  const cookies = new UniversalCookies()
  const [isUTCTime, setUTCTime] = useState<string>(
    SynapseClient.getUseUtcTimeFromCookie().toString(),
  )
  const [isUTCTimeStaged, setUTCTimeStaged] = useState<string>(isUTCTime)
  const handleChangesFn = (val: string) => {
    navigate(`/authenticated/${val}`)
  }
  useEffect(() => {
    const current = new Date()
    const nextYear = new Date()
    nextYear.setFullYear(current.getFullYear() + 1)
    const hostname = window.location.hostname.toLowerCase()
    cookies.set(SynapseConstants.DATETIME_UTC_COOKIE_KEY, isUTCTime, {
      path: '/',
      expires: nextYear,
      domain: hostname.endsWith('.synapse.org') ? 'synapse.org' : undefined,
    })
  }, [isUTCTime])

  const markFormDirty = () => setChangeInForm(true)
  const credentialButtonSX = {
    marginRight: '26px',
  }

  const unpackBundle = (bundle: UserBundle) => {
    setUserProfile(bundle.userProfile)
    setUsername(bundle.userProfile?.userName)
    setFirstName(bundle.userProfile?.firstName)
    setLastName(bundle.userProfile?.lastName)
    setPosition(bundle.userProfile?.position)
    setCompany(bundle.userProfile?.company)
    setLocation(bundle.userProfile?.location)
    setIndustry(bundle.userProfile?.industry)
    setUrl(bundle.userProfile?.url)
    setBio(bundle.userProfile?.summary)
    setVerified(bundle.isVerified)
    setOrcid(bundle.ORCID)
    setIsCertified(bundle.isCertified)
    const stateHistory = bundle.verificationSubmission?.stateHistory
    const currentState = stateHistory
      ? stateHistory[stateHistory.length - 1]
      : undefined
    setCurrentVerificationState(currentState)
  }

  const getUserData = async () => {
    try {
      const mask =
        SynapseConstants.USER_BUNDLE_MASK_ORCID |
        SynapseConstants.USER_BUNDLE_MASK_USER_PROFILE |
        SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED |
        SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED |
        SynapseConstants.USER_BUNDLE_MASK_VERIFICATION_SUBMISSION
      const bundle: UserBundle = await SynapseClient.getMyUserBundle(
        mask,
        accessToken,
      )
      unpackBundle(bundle)
      setTermsOfUse(true)
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const updateUserProfile = async () => {
    try {
      if (userProfile) {
        userProfile.userName = username as string
        userProfile.firstName = firstName as string
        userProfile.lastName = lastName as string
        userProfile.position = position as string
        userProfile.company = company as string
        userProfile.location = location as string
        userProfile.industry = industry as string
        userProfile.url = url as string
        userProfile.summary = bio as string

        await SynapseClient.updateMyUserProfile(userProfile, accessToken)
        getUserData()
        setChangeInForm(false)
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  useEffect(() => {
    if (hash === '#trust') {
      handleScroll(trustCredentialRef)
    } else if (hash === '#ChangePassword') {
      handleScroll(changePasswordRef)
    }
  }, [hash])

  const menuConfigArray = [
    { label: 'Profile Information', ref: profileInformationRef },
    { label: 'Email Addresses', ref: emailAddressesRef },
    { label: 'Change Password', ref: changePasswordRef },
    { label: 'Date/Time Format', ref: timezoneRef },
    { label: 'Trust & Credentials', ref: trustCredentialRef },
    {
      label: 'Two-factor Authentication (2FA)',
      ref: twoFactorAuthRef,
    },
    {
      label: 'Personal Access Tokens',
      ref: personalAccessTokenRef,
    },
    { label: 'OAuth Clients', ref: oauthClientManagementRef },
    { label: 'Webhooks', ref: webhooksRef },
    { label: 'Privacy Preferences', ref: cookieManagementRef },
    { label: 'Sign Out', ref: signOutSectionRef },
  ].filter(
    item =>
      (item.label !== 'Webhooks' || showWebhooks) &&
      (item.label !== 'Change Password' || currentRealm === SYNAPSE_REALM),
  )

  const handleScroll = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const isRequestValidationButtonDisabled =
    verificationState?.state == VerificationStateEnum.APPROVED ||
    verificationState?.state == VerificationStateEnum.SUBMITTED

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const formControlMargin = isMobile ? 'dense' : 'normal'

  return (
    <div className="account-settings-page">
      <AccountSettingsTopBar accountSettingsPanelConfig={menuConfigArray} />
      <div className="panel-wrapper-bg with-account-setting">
        <Container
          maxWidth="lg"
          sx={{ paddingTop: '100px', position: 'relative' }}
        >
          <Box sx={{ display: 'flex', my: { xs: '10px', sm: '60px' } }}>
            <Paper component="nav" className="account-setting-panel nav-panel">
              {menuConfigArray.map((item, index) => (
                <ListItemButton
                  key={index}
                  onClick={() => handleScroll(item.ref)}
                >
                  {item.label}
                </ListItemButton>
              ))}
            </Paper>

            <div>
              <Paper
                ref={profileInformationRef}
                className="account-setting-panel main-panel"
              >
                <Typography variant={'headline2'}>
                  Profile Information
                </Typography>
                <Typography variant={'body1'}>
                  This information is reused across all{' '}
                  <Link
                    color="primary"
                    component={RouterLink}
                    to="/sageresources"
                  >
                    Synapse resources
                  </Link>
                  .
                </Typography>
                <ProfileAvatar
                  userProfile={userProfile}
                  onProfileUpdated={() => {
                    getUserData()
                  }}
                />
                <form onChange={markFormDirty}>
                  <StyledFormControl
                    fullWidth
                    variant="standard"
                    margin={formControlMargin}
                    required
                  >
                    <TextField
                      label={'Username'}
                      id="username"
                      name="username"
                      fullWidth
                      onChange={e => setUsername(e.target.value)}
                      value={username}
                    />
                  </StyledFormControl>
                  <StyledFormControl
                    fullWidth
                    variant="standard"
                    margin={formControlMargin}
                  >
                    <TextField
                      label={'First name'}
                      id="firstName"
                      name="firstName"
                      fullWidth
                      onChange={e => setFirstName(e.target.value)}
                      value={firstName}
                    />
                  </StyledFormControl>
                  <StyledFormControl
                    fullWidth
                    variant="standard"
                    margin={formControlMargin}
                  >
                    <TextField
                      label={'Last name'}
                      id="lastName"
                      name="lastName"
                      fullWidth
                      onChange={e => setLastName(e.target.value)}
                      value={lastName}
                    />
                  </StyledFormControl>
                  <StyledFormControl
                    fullWidth
                    variant="standard"
                    margin={formControlMargin}
                  >
                    <TextField
                      label={'Current position'}
                      id="position"
                      name="position"
                      fullWidth
                      onChange={e => setPosition(e.target.value)}
                      value={position}
                    />
                  </StyledFormControl>
                  <StyledFormControl
                    fullWidth
                    variant="standard"
                    margin={formControlMargin}
                  >
                    <TextField
                      label={'Industry'}
                      id="industry"
                      name="industry"
                      fullWidth
                      onChange={e => setIndustry(e.target.value)}
                      value={industry}
                    />
                  </StyledFormControl>
                  <StyledFormControl
                    fullWidth
                    variant="standard"
                    margin={formControlMargin}
                  >
                    <TextField
                      label={'Website'}
                      id="website"
                      name="website"
                      fullWidth
                      onChange={e => setUrl(e.target.value)}
                      value={url}
                    />
                  </StyledFormControl>
                  <StyledFormControl
                    fullWidth
                    variant="standard"
                    margin={formControlMargin}
                  >
                    <TextField
                      label={'City, Country'}
                      id="location"
                      name="location"
                      fullWidth
                      onChange={e => setLocation(e.target.value)}
                      value={location}
                    />
                  </StyledFormControl>
                  <StyledFormControl
                    fullWidth
                    variant="standard"
                    margin={formControlMargin}
                  >
                    <RORInstitutionField
                      onChange={value => setCompany(value)}
                      value={company || ''}
                    />
                  </StyledFormControl>
                  <TextField
                    fullWidth
                    margin={formControlMargin}
                    label="Bio"
                    id="bio"
                    name="bio"
                    multiline
                    rows={5}
                    onChange={e => setBio(e.target.value)}
                    value={bio}
                  />
                  <div className="primary-button-container">
                    <Button
                      onClick={() => {
                        updateUserProfile()
                      }}
                      disabled={!changeInForm}
                      variant="contained"
                    >
                      Save Changes
                    </Button>
                  </div>
                </form>
              </Paper>
              <Paper
                ref={emailAddressesRef}
                className="account-setting-panel main-panel"
              >
                <Typography variant={'headline2'}>Email Addresses</Typography>
                <ConfigureEmail returnToPath="authenticated/myaccount" />
              </Paper>
              {currentRealm === SYNAPSE_REALM && (
                <Paper
                  ref={changePasswordRef}
                  className="account-setting-panel main-panel"
                >
                  <Typography variant={'headline2'}>Change Password</Typography>
                  <ChangePassword
                    // The user is logged in. If they want to disable 2FA, they can do so from this page.
                    hideReset2FA={true}
                  />
                </Paper>
              )}
              <Paper
                ref={timezoneRef}
                className="account-setting-panel main-panel"
              >
                <Typography variant={'headline2'}>Date/Time Format</Typography>
                <StyledFormControl
                  fullWidth
                  variant="standard"
                  margin={formControlMargin}
                  sx={{ marginBottom: '10px' }}
                >
                  <TextField
                    label={'Choose a format'}
                    id="timezone-select"
                    value={isUTCTimeStaged}
                    fullWidth
                    select
                    disabled={!cookiePreferences.functionalAllowed}
                    onChange={event => {
                      setUTCTimeStaged(event.target.value)
                    }}
                  >
                    <MenuItem value="false" sx={{ fontSize: '14px' }}>
                      Local
                    </MenuItem>
                    <MenuItem value="true" sx={{ fontSize: '14px' }}>
                      UTC
                    </MenuItem>
                  </TextField>
                </StyledFormControl>
                <div className="primary-button-container">
                  <Button
                    disabled={isUTCTimeStaged === isUTCTime}
                    variant="contained"
                    sx={{ credentialButtonSX }}
                    onClick={() => setUTCTime(isUTCTimeStaged)}
                  >
                    Update Preference
                  </Button>
                </div>
              </Paper>

              <Paper
                ref={trustCredentialRef}
                className="account-setting-panel main-panel"
              >
                <Typography variant={'headline2'}>
                  Trust & Credentials
                </Typography>
                <Typography variant={'body1'}>
                  This section lists the various ways we support verifying your
                  trust and identity in order to permit access to our products.
                  You may be asked to complete any of the following as part of
                  requesting access within a system.
                </Typography>
                <div className="credential-partition">
                  <h4>Terms and Conditions for Use</h4>
                  <CompletionStatus isComplete={termsOfUse} />
                  <Typography variant={'body1'} sx={{ my: 1 }}>
                    <i>Required to register</i>
                  </Typography>
                  <Typography variant={'body1'} sx={{ my: 1 }}>
                    You must affirm your agreement to follow these terms and
                    conditions in order to create an account.{' '}
                  </Typography>
                  <div className="primary-button-container">
                    <Button
                      disabled={termsOfUse}
                      variant="outlined"
                      sx={credentialButtonSX}
                      onClick={() => handleChangesFn('signTermsOfUse')}
                    >
                      Agree to Terms and Conditions
                    </Button>
                    <Link
                      href={SynapseConstants.URL_TERMS_CONDITIONS_AGREEMENT}
                      target="_blank"
                    >
                      More information
                    </Link>
                  </div>
                </div>
                <div className="credential-partition">
                  <h4>Certification</h4>
                  <CompletionStatus isComplete={isCertified} />
                  <Typography variant={'body1'} sx={{ my: 1 }}>
                    <i>Required to upload data.</i>
                  </Typography>
                  <Typography variant={'body1'} sx={{ my: 1 }}>
                    There are times where human data can only be shared with
                    certain restrictions. In order to upload data on any
                    application, you must pass a quiz on the technical and
                    ethical aspects of sharing data in our system.
                  </Typography>
                  <div className="primary-button-container">
                    <Button
                      disabled={isCertified}
                      variant="outlined"
                      sx={credentialButtonSX}
                      onClick={() => handleChangesFn('certificationquiz')}
                    >
                      Take the certification quiz
                    </Button>
                    <Link
                      href="https://help.synapse.org/docs/User-Types.2007072795.html#UserAccountTiers-CertifiedUsers"
                      target="_blank"
                    >
                      More information
                    </Link>
                  </div>
                </div>
                {currentRealm === SYNAPSE_REALM && (
                  <div className="credential-partition">
                    <h4>ORCID Profile</h4>
                    <div className="item-completion">
                      {orcid ? (
                        <a href={orcid}>{orcid}</a>
                      ) : (
                        <CompletionStatus isComplete={false} />
                      )}
                    </div>
                    <p>
                      <i>
                        Linking your ORCID profile is useful for other
                        researchers, and is required for profile validation.
                      </i>
                    </p>
                    <div className="primary-button-container">
                      {orcid ? (
                        <Button
                          variant="outlined"
                          sx={credentialButtonSX}
                          onClick={() => setShowUnbindORCiDDialog(true)}
                        >
                          Unlink your ORCID profile
                        </Button>
                      ) : (
                        <ORCiDButton
                          sx={credentialButtonSX}
                          redirectAfter={`${SynapseClient.getRootURL()}authenticated/myaccount`}
                        />
                      )}
                      <Link
                        href="https://help.synapse.org/docs/Synapse-User-Account-Types.2007072795.html#SynapseUserAccountTypes-ValidatedUsers"
                        target="_blank"
                      >
                        More information
                      </Link>
                    </div>
                    <UnbindORCiDDialog
                      show={showUnbindORCiDDialog}
                      setShow={setShowUnbindORCiDDialog}
                      orcid={orcid}
                      redirectAfter={`${SynapseClient.getRootURL()}authenticated/myaccount`}
                    />
                  </div>
                )}
                <div className="credential-partition">
                  <h4>Profile Validation</h4>
                  {(verificationState === undefined ||
                    verificationState.state ===
                      VerificationStateEnum.APPROVED) && (
                    <CompletionStatus isComplete={verified} />
                  )}
                  {verificationState?.state ==
                    VerificationStateEnum.SUBMITTED && (
                    <Alert severity="info">
                      Application is currently pending review
                    </Alert>
                  )}
                  {verificationState?.state ==
                    VerificationStateEnum.REJECTED && (
                    <Alert severity="error">
                      <AlertTitle>Application has been rejected</AlertTitle>
                      <Typography
                        variant="body1"
                        sx={{
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {verificationState?.reason}
                      </Typography>
                    </Alert>
                  )}
                  {verificationState?.state ==
                    VerificationStateEnum.SUSPENDED && (
                    <Alert severity="warning">
                      <AlertTitle>Validated profile suspension</AlertTitle>
                      <Typography
                        variant="body1"
                        sx={{
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {verificationState?.reason}
                      </Typography>
                    </Alert>
                  )}
                  <p style={{ marginTop: '7px' }}>
                    <i>
                      Users with a validated profile can access more features
                      and data.
                    </i>
                  </p>
                  <Typography variant={'body1'} sx={{ my: 1 }}>
                    Profile validation requires you to complete your profile,
                    link an ORCID profile, agree to the Synapse pledge, and
                    upload an identity attestation document, after which your
                    application will be manually reviewed (which may take
                    several days).
                  </Typography>
                  <div className="primary-button-container">
                    <Button
                      disabled={isRequestValidationButtonDisabled}
                      variant="outlined"
                      sx={credentialButtonSX}
                      onClick={() => handleChangesFn('validate')}
                    >
                      Request validation
                    </Button>
                    <Link
                      href="https://help.synapse.org/docs/User-Types.2007072795.html#UserAccountTiers-ValidatedUsers"
                      target="_blank"
                    >
                      More information
                    </Link>
                  </div>
                </div>
              </Paper>
              <Paper
                ref={twoFactorAuthRef}
                className="account-setting-panel main-panel"
              >
                <TwoFactorAuthSettingsPanel
                  onRegenerateBackupCodes={() => {
                    navigate('/authenticated/2fa/generatecodes')
                  }}
                  onReset2FA={() => {
                    navigate('/authenticated/2fa/resetconfirmation')
                  }}
                />
              </Paper>
              <Paper
                ref={personalAccessTokenRef}
                className="account-setting-panel main-panel"
              >
                <Typography variant={'headline2'}>
                  Personal Access Tokens
                </Typography>
                <Typography variant={'body1'} sx={{ my: 1 }}>
                  You can issue personal access tokens to authenticate your
                  scripts with scoped access to your account. It is important
                  that you treat personal access tokens with the same security
                  as your password.
                </Typography>
                <div className="primary-button-container">
                  <Button
                    sx={credentialButtonSX}
                    variant="outlined"
                    onClick={() => handleChangesFn('personalaccesstokens')}
                  >
                    Manage Personal Access Tokens
                  </Button>
                  <Link
                    href="https://help.synapse.org/docs/Managing-Your-Account.2055405596.html#ManagingYourAccount-PersonalAccessTokens"
                    target="_blank"
                  >
                    More information
                  </Link>
                </div>
              </Paper>
              <Paper
                ref={oauthClientManagementRef}
                className="account-setting-panel main-panel"
              >
                <Typography variant={'headline2'}>OAuth Clients</Typography>
                <Typography variant={'body1'} sx={{ my: 1 }}>
                  OAuth Clients can be created to develop applications that use
                  Synapse as an identity provider.
                </Typography>
                <div className="primary-button-container">
                  <Button
                    sx={credentialButtonSX}
                    variant="outlined"
                    onClick={() => handleChangesFn('oauthclientmanagement')}
                  >
                    Manage OAuth Clients
                  </Button>
                  <Link
                    href="https://help.synapse.org/docs/Using-Synapse-as-an-OAuth-Server.2048327904.html"
                    target="_blank"
                  >
                    More information
                  </Link>
                </div>
              </Paper>
              {showWebhooks && (
                <Paper
                  ref={webhooksRef}
                  className="account-setting-panel main-panel"
                >
                  <Typography variant={'headline2'}>Webhooks</Typography>
                  <Typography variant={'body1'} sx={{ my: 1 }}>
                    Webhooks can be used to receive programmatic events
                    triggered by actions in Synapse.
                  </Typography>
                  <div className="primary-button-container">
                    <Button
                      sx={credentialButtonSX}
                      variant="outlined"
                      onClick={() => handleChangesFn('webhook')}
                    >
                      Manage Webhooks
                    </Button>
                    <Link
                      href="https://rest-docs.synapse.org/rest/index.html#org.sagebionetworks.repo.web.controller.WebhookController"
                      target="_blank"
                    >
                      More information
                    </Link>
                  </div>
                </Paper>
              )}
              <Paper
                ref={cookieManagementRef}
                className="account-setting-panel main-panel"
              >
                <Typography variant={'headline2'}>
                  Privacy Preferences
                </Typography>
                <Typography variant={'body1'} sx={{ my: 1 }}>
                  Modify consent settings for how Sage Bionetworks products can
                  save your data (cookies, browser storage, etc).
                </Typography>
                <div className="primary-button-container">
                  <Button
                    variant="outlined"
                    sx={credentialButtonSX}
                    onClick={() => setIsCookiePrefsDialogVisible(true)}
                  >
                    Manage Privacy Preferences
                  </Button>
                </div>
                <CookiePreferencesDialog
                  isOpen={isCookiePrefsDialogVisible}
                  onSave={() => {
                    setIsCookiePrefsDialogVisible(false)
                  }}
                  onHide={() => {
                    setIsCookiePrefsDialogVisible(false)
                  }}
                />
              </Paper>
              <Paper
                ref={signOutSectionRef}
                className="account-setting-panel main-panel"
              >
                <Typography variant={'headline2'}>Sign Out</Typography>
                <Typography variant={'body1'} sx={{ my: 1 }}>
                  You can sign out of all other sessions where your Synapse
                  account is currently active. This will not impact sessions
                  where you are using a personal access token, or where you have
                  granted permissions to a third party to access your Synapse
                  resources.
                </Typography>
                <Typography variant={'body1'} sx={{ my: 1 }}>
                  Signing out of all sessions will also sign you out of the
                  current session.
                </Typography>
                <div className="primary-button-container">
                  <Button
                    variant="outlined"
                    sx={credentialButtonSX}
                    onClick={() => void clearSession()}
                  >
                    Sign out
                  </Button>
                  <Button
                    variant="outlined"
                    color={'error'}
                    sx={credentialButtonSX}
                    onClick={() => {
                      SynapseClient.deleteAllSessionAccessTokens(
                        accessToken!,
                      ).then(() => clearSession())
                    }}
                  >
                    Sign out of all sessions
                  </Button>
                </div>
              </Paper>
            </div>
          </Box>
        </Container>
      </div>
    </div>
  )
}

export default AccountSettings
