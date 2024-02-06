import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  ListItemButton,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { UserBundle, UserProfile } from '@sage-bionetworks/synapse-types'
import {
  displayToast,
  IconSvg,
  SynapseClient,
  SynapseConstants,
  TwoFactorAuthSettingsPanel,
  useSynapseContext,
} from 'synapse-react-client'
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { ChangePassword } from './ChangePassword'
import { ORCiDButton } from './ProfileValidation/ORCiDButton'
import AccountSettingsTopBar from './AccountSettingsTopBar'
import { ConfigureEmail } from './ConfigureEmail'
import { UnbindORCiDDialog } from './ProfileValidation/UnbindORCiD'
import UniversalCookies from 'universal-cookie'
import { StyledFormControl } from './StyledComponents'
import { ProfileAvatar } from './ProfileAvatar'
import { useSourceAppConfigs } from './useSourceAppConfigs'

const CompletionStatus: React.FC<{ isComplete: boolean | undefined }> = ({
  isComplete,
}) => {
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

export const AccountSettings = () => {
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
  const [isCertified, setIsCertified] = useState<boolean>()
  const [termsOfUse, setTermsOfUse] = useState<boolean>()
  const [showUnbindORCiDDialog, setShowUnbindORCiDDialog] =
    useState<boolean>(false)
  const history = useHistory()
  const sourceAppConfigs = useSourceAppConfigs()
  const profileInformationRef = useRef<HTMLDivElement>(null)
  const changePasswordRef = useRef<HTMLDivElement>(null)
  const timezoneRef = useRef<HTMLDivElement>(null)
  const emailAddressesRef = useRef<HTMLDivElement>(null)
  const trustCredentialRef = useRef<HTMLDivElement>(null)
  const twoFactorAuthRef = useRef<HTMLDivElement>(null)
  const personalAccessTokenRef = useRef<HTMLDivElement>(null)
  const oauthClientManagementRef = useRef<HTMLDivElement>(null)
  const cookies = new UniversalCookies()
  const [isUTCTime, setUTCTime] = useState<string>(
    SynapseClient.getUseUtcTimeFromCookie().toString(),
  )
  const [isUTCTimeStaged, setUTCTimeStaged] = useState<string>(isUTCTime)
  const handleChangesFn = (val: string) => {
    history.push(`/authenticated/${val}`)
  }
  useEffect(() => {
    const current = new Date()
    const nextYear = new Date()
    nextYear.setFullYear(current.getFullYear() + 1)
    cookies.set(SynapseConstants.DATETIME_UTC_COOKIE_KEY, isUTCTime, {
      path: '/',
      expires: nextYear,
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
    }
  }, [hash])

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="account-settings-page">
      <AccountSettingsTopBar />
      <div className="panel-wrapper-bg with-account-setting">
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', my: '60px' }}>
            <Paper component="nav" className="account-setting-panel nav-panel">
              <ListItemButton
                onClick={() => handleScroll(profileInformationRef)}
              >
                Profile Information
              </ListItemButton>
              <ListItemButton onClick={() => handleScroll(emailAddressesRef)}>
                Email Addresses
              </ListItemButton>
              <ListItemButton onClick={() => handleScroll(changePasswordRef)}>
                Change Password
              </ListItemButton>
              <ListItemButton onClick={() => handleScroll(timezoneRef)}>
                Date/Time Format
              </ListItemButton>
              <ListItemButton onClick={() => handleScroll(trustCredentialRef)}>
                Trust & Credentials
              </ListItemButton>
              <ListItemButton onClick={() => handleScroll(twoFactorAuthRef)}>
                Two-factor Authentication (2FA)
              </ListItemButton>
              <ListItemButton
                onClick={() => handleScroll(personalAccessTokenRef)}
              >
                Personal Access Tokens
              </ListItemButton>
              <ListItemButton
                onClick={() => handleScroll(oauthClientManagementRef)}
              >
                OAuth Clients
              </ListItemButton>
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
                  <RouterLink to="/sageresources">Sage products.</RouterLink>
                </Typography>
                <ProfileAvatar
                  userProfile={userProfile}
                  onProfileUpdated={() => {
                    getUserData()
                  }}
                />
                <Form onChange={markFormDirty}>
                  <StyledFormControl
                    fullWidth
                    variant="standard"
                    margin="normal"
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
                    margin="normal"
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
                    margin="normal"
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
                    margin="normal"
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
                    margin="normal"
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
                    margin="normal"
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
                    margin="normal"
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
                    margin="normal"
                  >
                    <TextField
                      label={'Institutional affiliation'}
                      id="company"
                      name="company"
                      fullWidth
                      onChange={e => setCompany(e.target.value)}
                      value={company}
                    />
                    <Grid
                      container
                      spacing={1}
                      mx={{ paddingTop: '5px', paddingBottom: '20px' }}
                    >
                      <Typography
                        variant="smallText1"
                        sx={{ paddingLeft: '10px', paddingTop: '8px' }}
                      >
                        Used by
                      </Typography>
                      {sourceAppConfigs?.map(config => {
                        if (config.requestAffiliation) {
                          return (
                            <Grid
                              item
                              key={config.appId}
                              xs={2}
                              className="sourceAppItem"
                            >
                              <a
                                style={{ display: 'block' }}
                                href={config.appURL}
                              >
                                {config.logo}
                              </a>
                            </Grid>
                          )
                        } else {
                          return <></>
                        }
                      })}
                    </Grid>
                  </StyledFormControl>
                  <TextField
                    fullWidth
                    margin="normal"
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
                </Form>
              </Paper>
              <Paper
                ref={emailAddressesRef}
                className="account-setting-panel main-panel"
              >
                <Typography variant={'headline2'}>Email Addresses</Typography>
                <ConfigureEmail returnToPath="authenticated/myaccount" />
              </Paper>
              <Paper
                ref={changePasswordRef}
                className="account-setting-panel main-panel"
              >
                <Typography variant={'headline2'}>Change Password</Typography>
                <ChangePassword />
              </Paper>
              <Paper
                ref={timezoneRef}
                className="account-setting-panel main-panel"
              >
                <Typography variant={'headline2'}>Date/Time Format</Typography>
                <StyledFormControl
                  fullWidth
                  variant="standard"
                  margin="normal"
                  sx={{ marginBottom: '10px' }}
                >
                  <TextField
                    label={'Choose a format'}
                    id="timezone-select"
                    value={isUTCTimeStaged}
                    fullWidth
                    select
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
                <div className="credential-partition">
                  <h4>Profile Validation</h4>
                  <CompletionStatus isComplete={verified} />
                  <p>
                    <i>
                      Users with a validated profile can access more features
                      and data.
                    </i>
                  </p>
                  <Typography variant={'body1'} sx={{ my: 1 }}>
                    Profile validation requires you to complete your profile,
                    link an ORCID profile, sign and date the Synapse pledge, and
                    upload both the pledge and an identity attestation document,
                    after which your application will be manually reviewed
                    (which may take several days).
                  </Typography>
                  <div className="primary-button-container">
                    <Button
                      disabled={!!verified}
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
                    history.push('/authenticated/2fa/generatecodes')
                  }}
                  onBeginTwoFactorEnrollment={() => {
                    history.push('/authenticated/2fa/enroll')
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
                  <Link
                    sx={credentialButtonSX}
                    onClick={() => handleChangesFn('personalaccesstokens')}
                  >
                    Manage Personal Access Tokens
                  </Link>
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
                  <Link
                    sx={credentialButtonSX}
                    onClick={() => handleChangesFn('oauthclientmanagement')}
                  >
                    Manage OAuth Clients
                  </Link>
                  <Link
                    href="https://help.synapse.org/docs/Using-Synapse-as-an-OAuth-Server.2048327904.html"
                    target="_blank"
                  >
                    More information
                  </Link>
                </div>
              </Paper>
            </div>
          </Box>
        </Container>
      </div>
    </div>
  )
}
