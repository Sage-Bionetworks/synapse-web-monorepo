import React, { useEffect, useRef, useState } from 'react'
import {
  Button,
  Link,
  Container,
  Box,
  Grid,
  Select,
  MenuItem,
} from '@mui/material'
import {
  UserBundle,
  UserProfile,
} from 'synapse-react-client/dist/utils/synapseTypes'
import {
  SynapseClient,
  SynapseConstants,
  Typography,
} from 'synapse-react-client'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { ChangePassword } from './ChangePassword'
import IconSvg from 'synapse-react-client/dist/containers/IconSvg'
import { useHistory } from 'react-router-dom'
import { ORCiDButton } from './ProfileValidation/ORCiDButton'
import AccountSettingsTopBar from './AccountSettingsTopBar'
import { useLocation } from 'react-router-dom'
import { ConfigureEmail } from './ConfigureEmail'
import { UnbindORCiDDialog } from './ProfileValidation/UnbindORCiD'
import SourceAppConfigs from './SourceAppConfigs'
import UniversalCookies from 'universal-cookie'
import { DATETIME_UTC_COOKIE_KEY } from 'synapse-react-client/dist/utils/SynapseConstants'
import { getUseUtcTimeFromCookie } from 'synapse-react-client/dist/utils/SynapseClient'
import { StyledFormControl } from './StyledComponents'
import { ProfileAvatar } from './ProfileAvatar'

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
  const [changeInForm, setChangeInForm] = useState(false)
  const [orcid, setOrcid] = useState<string>()
  const [verified, setVerified] = useState<boolean>()
  const [isCertified, setIsCertified] = useState<boolean>()
  const [termsOfUse, setTermsOfUse] = useState<boolean>()
  const [showUnbindORCiDDialog, setShowUnbindORCiDDialog] =
    useState<boolean>(false)
  const history = useHistory()

  const profileInformationRef = useRef<HTMLDivElement>(null)
  const changePasswordRef = useRef<HTMLDivElement>(null)
  const timezoneRef = useRef<HTMLDivElement>(null)
  const emailAddressesRef = useRef<HTMLDivElement>(null)
  const trustCredentialRef = useRef<HTMLDivElement>(null)
  const personalAccessTokenRef = useRef<HTMLDivElement>(null)
  const cookies = new UniversalCookies()
  const [isUTCTime, setUTCTime] = useState<string>(
    getUseUtcTimeFromCookie().toString(),
  )
  const handleChangesFn = (val: string) => {
    history.push(`/authenticated/${val}`)
  }
  useEffect(() => {
    const current = new Date()
    const nextYear = new Date()
    nextYear.setFullYear(current.getFullYear() + 1)
    cookies.set(DATETIME_UTC_COOKIE_KEY, isUTCTime, {
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
    <>
      <AccountSettingsTopBar />
      <div className="panel-wrapper-bg with-account-setting">
        <Container maxWidth="md">
          <Box sx={{ display: 'flex' }}>
            <nav className="account-setting-panel nav-panel">
              <MenuItem onClick={() => handleScroll(profileInformationRef)}>
                Profile Information
              </MenuItem>
              <MenuItem onClick={() => handleScroll(emailAddressesRef)}>
                Email Addresses
              </MenuItem>
              <MenuItem onClick={() => handleScroll(changePasswordRef)}>
                Change Password
              </MenuItem>
              <MenuItem onClick={() => handleScroll(timezoneRef)}>
                Date/Time Format
              </MenuItem>
              <MenuItem onClick={() => handleScroll(trustCredentialRef)}>
                Trust & Credentials
              </MenuItem>
              <MenuItem onClick={() => handleScroll(personalAccessTokenRef)}>
                Personal Access Tokens
              </MenuItem>
            </nav>

            <div>
              <div
                ref={profileInformationRef}
                className="account-setting-panel main-panel"
              >
                <h3>Profile Information</h3>
                <p>This information is reused across all Sage products.</p>
                <ProfileAvatar
                  userProfile={userProfile}
                  onProfileUpdated={() => {
                    getUserData()
                  }}
                />
                <Form onChange={markFormDirty}>
                  <FormGroup className="required">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                      onChange={e => setUsername(e.target.value)}
                      value={username}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>First name</FormLabel>
                    <FormControl
                      onChange={e => setFirstName(e.target.value)}
                      value={firstName}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Last name</FormLabel>
                    <FormControl
                      onChange={e => setLastName(e.target.value)}
                      value={lastName}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Current position</FormLabel>
                    <FormControl
                      placeholder="e.g Principal Investigator"
                      onChange={e => setPosition(e.target.value)}
                      value={position}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Industry</FormLabel>
                    <FormControl
                      onChange={e => setIndustry(e.target.value)}
                      value={industry}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Website</FormLabel>
                    <FormControl
                      placeholder="https://example.com"
                      onChange={e => setUrl(e.target.value)}
                      value={url}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>City, Country</FormLabel>
                    <FormControl
                      onChange={e => setLocation(e.target.value)}
                      value={location}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Institutional affiliation</FormLabel>
                    <FormControl
                      placeholder="e.g. Example University"
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
                      {SourceAppConfigs.map(config => {
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
                  </FormGroup>
                  <Button
                    onClick={updateUserProfile}
                    disabled={!changeInForm}
                    variant="contained"
                  >
                    Save Changes
                  </Button>
                </Form>
              </div>
              <div
                ref={emailAddressesRef}
                className="account-setting-panel main-panel"
              >
                <h3>Email Addresses</h3>
                <ConfigureEmail returnToPath="authenticated/myaccount" />
              </div>
              <div
                ref={changePasswordRef}
                className="account-setting-panel main-panel"
              >
                <h3>Change Password</h3>
                <ChangePassword />
              </div>
              <div
                ref={timezoneRef}
                className="account-setting-panel main-panel"
              >
                <h3>Date/Time Format</h3>
                <StyledFormControl fullWidth>
                  <Select
                    labelId="timezone-select-label"
                    id="timezone-select"
                    value={isUTCTime}
                    onChange={event => {
                      setUTCTime(event.target.value)
                    }}
                  >
                    <MenuItem value="false">Local</MenuItem>
                    <MenuItem value="true">UTC</MenuItem>
                  </Select>
                </StyledFormControl>
              </div>

              <div
                ref={trustCredentialRef}
                className="account-setting-panel main-panel"
              >
                <h3>Trust & Credentials</h3>
                <p>
                  This section lists the various ways we support verifying your
                  trust and identity in order to permit access to our products.
                  You may be asked to complete any of the following as part of
                  requesting access within a system.
                </p>
                <div className="credential-partition">
                  <h4>Terms and Conditions for Use</h4>
                  <i>Required to register</i>
                  <p>
                    You must affirm your agreement to follow these terms and
                    conditions in order to create an account.{' '}
                  </p>
                  <div className="item-completion">
                    {termsOfUse ? (
                      <span className="completeIcon">
                        <IconSvg icon="check" /> Completed
                      </span>
                    ) : (
                      <span className="incompleteIcon">
                        <IconSvg icon="close" /> Incompleted
                      </span>
                    )}
                  </div>
                  <Button
                    disabled={termsOfUse}
                    variant="outlined"
                    sx={credentialButtonSX}
                    onClick={() => handleChangesFn('signTermsOfUse')}
                  >
                    Agree to Terms and Conditions
                  </Button>
                  <Link
                    href="https://s3.amazonaws.com/static.synapse.org/governance/SageBionetworksSynapseTermsandConditionsofUse.pdf?v=5"
                    target="_blank"
                  >
                    More information
                  </Link>
                </div>
                <div className="credential-partition">
                  <h4>Certification</h4>
                  <i>Required to upload data.</i>
                  <p>
                    There are times where human data can only be shared with
                    certain restrictions. In order to upload data on any
                    application, you must pass a quiz on the technical and
                    ethical aspects of sharing data in our system.
                  </p>
                  <div className="item-completion">
                    {isCertified ? (
                      <span className="completeIcon">
                        <IconSvg icon="check" /> Completed
                      </span>
                    ) : (
                      <span className="incompleteIcon">
                        <IconSvg icon="close" /> Incompleted
                      </span>
                    )}
                  </div>

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
                <div className="credential-partition">
                  <h4>ORCID Profile</h4>
                  <i>
                    Linking your ORCID profile is useful for other researchers,
                    and is required for profile validation.
                  </i>
                  <div className="item-completion">
                    {orcid ? (
                      <a href={orcid}>{orcid}</a>
                    ) : (
                      <span className="incompleteIcon">
                        <IconSvg icon="close" /> Incompleted
                      </span>
                    )}
                  </div>
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
                  <UnbindORCiDDialog
                    show={showUnbindORCiDDialog}
                    setShow={setShowUnbindORCiDDialog}
                    orcid={orcid}
                    redirectAfter={`${SynapseClient.getRootURL()}authenticated/myaccount`}
                  />
                  <Link
                    href="https://help.synapse.org/docs/Synapse-User-Account-Types.2007072795.html#SynapseUserAccountTypes-ValidatedUsers"
                    target="_blank"
                  >
                    More information
                  </Link>
                </div>
                <div className="credential-partition">
                  <h4>Profile Validation</h4>
                  <i>
                    Users with a validated profile can access more features and
                    data.
                  </i>
                  <p>
                    Profile validation requires you to complete your profile,
                    link an ORCID profile, sign and date the Sage pledge, and
                    upload both the pledge and an identity attestation document,
                    after which your application will be manually reviewed
                    (which may take several days).
                  </p>
                  <div className="item-completion">
                    {verified ? (
                      <span className="completeIcon">
                        <IconSvg icon="check" /> Completed
                      </span>
                    ) : (
                      <span className="incompleteIcon">
                        <IconSvg icon="close" /> Incompleted
                      </span>
                    )}
                  </div>
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
              <div
                ref={personalAccessTokenRef}
                className="account-setting-panel main-panel"
              >
                <h3>Personal Access Tokens</h3>
                <p>
                  You can issue personal access tokens to authenticate your
                  scripts with scoped access to your account. It is important
                  that you treat personal access tokens with the same security
                  as your password.
                </p>
                <Link sx={credentialButtonSX}>
                  Manage Personal Access Tokens
                </Link>
                <Link
                  href="https://help.synapse.org/docs/Managing-Your-Account.2055405596.html#ManagingYourAccount-PersonalAccessTokens"
                  target="_blank"
                >
                  More information
                </Link>
              </div>
            </div>
          </Box>
        </Container>
      </div>
    </>
  )
}
