import {
  StyledInnerContainer,
  StyledOuterContainer,
} from '@/components/StyledComponents'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Typography,
  useTheme,
} from '@mui/material'
import {
  UserBundle,
  UserProfile,
  VerificationSubmission,
} from '@sage-bionetworks/synapse-types'
import { SyntheticEvent, useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import {
  displayToast,
  SynapseClient,
  SynapseConstants,
  SynapseContextUtils,
} from 'synapse-react-client'
import { getSearchParam } from '../../URLUtils'
import { BackButton } from '../BackButton'
import { SourceAppLogo } from '../SourceApp'
import { TermsOfUseRightPanelText } from '../TermsOfUseRightPanelText'
import { useSourceApp } from '../useSourceApp'
import Attestation from './Attestation'
import { ProfileFieldsEditor } from './ProfileFieldsEditor'
import { ReturnToAppButton } from './ReturnToAppButton'
import TermsAndConditionsWrapped from './TermsAndConditionsWrapped'
import ThankYou from './ThankYou'
import { VerifyIdentify } from './VerifyIdentify'

const IDENTITY_ATTESTATION_TEMPLATE_DOCUMENT_LINK =
  'https://help.synapse.org/__attachments/2007072795/signing_official.doc?inst-v=77bba77d-449d-4402-a8bb-6895820b38a9'

const NOTARIZED_LETTER_TEMPLATE_DOCUMENT_LINK =
  'https://help.synapse.org/__attachments/2007072795/notarized_letter.doc?inst-v=77bba77d-449d-4402-a8bb-6895820b38a9'

const STEP_CONTENT = [
  {
    title: 'Identity verification',
    body: (
      <>
        <Typography
          variant="subtitle1"
          sx={theme => ({ fontWeight: 500, marginBottom: theme.spacing(3) })}
        >
          During <strong>identity verification</strong>, our data governance
          team will check the information you provide here.
        </Typography>
        <Typography variant="smallText1" paragraph>
          <strong>First and last names</strong> are required so that we can
          verify your identity.
        </Typography>
        <Typography variant="smallText1" paragraph>
          Your <strong>Current Affiliation</strong> is the name of the group,
          company, or institution you are currently working with while
          requesting access to this application.{' '}
        </Typography>
        <Typography variant="smallText1" paragraph>
          Your <strong>Location</strong> is important because different
          regulations around data are applicable in different geographic areas.
        </Typography>{' '}
      </>
    ),
  },
  {
    title: 'Link your ORCID profile',
    body: (
      <Typography>
        In order to validate your identity, we require accounts to have an{' '}
        <strong>ORCID profile.</strong>
      </Typography>
    ),
  },

  {
    title: null,
    body: (
      <>
        <TermsOfUseRightPanelText />
      </>
    ),
  },

  {
    title: 'Submit recent identity attestation documentation.',
    body: (
      <>
        <Typography variant="body1" paragraph>
          This document must be current within the past month. Acceptable forms
          of documentation, <strong>in English</strong>, are any one of the
          following:{' '}
        </Typography>

        <ul
          style={{
            marginLeft: '0px',
            paddingLeft: '20px',
          }}
        >
          <li>
            <Typography variant="body1">
              A letter from a signing official on letterhead attesting to your
              identity (
              <Link
                color="primary"
                href={IDENTITY_ATTESTATION_TEMPLATE_DOCUMENT_LINK}
                rel="nofollow"
              >
                {' '}
                template here
              </Link>
              ).&nbsp;
              <i>
                Note that you <strong>cannot</strong> serve as your own signing
                official.
              </i>
            </Typography>
            <Typography
              sx={theme => ({ textAlign: 'center', margin: theme.spacing(1) })}
              variant="body1"
            >
              OR
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              A notarized letter attesting to your identity (
              <Link
                color="primary"
                href={NOTARIZED_LETTER_TEMPLATE_DOCUMENT_LINK}
                rel="nofollow"
              >
                template here
              </Link>
              )
            </Typography>
            <Typography
              sx={theme => ({ textAlign: 'center', margin: theme.spacing(1) })}
              variant="body1"
            >
              OR
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              A copy of your professional license (e.g., a photocopy of your
              medical license).&nbsp;
            </Typography>
            <Typography variant="body1" paragraph>
              <i>
                Note that a copy of a work or university identification badge is{' '}
                <strong>not</strong> an accepted form of identity attestation
                documentation.
              </i>
            </Typography>
          </li>
        </ul>
      </>
    ),
  },
]

function RightPanel({ stepNumber }: { stepNumber: number }) {
  const theme = useTheme()
  const totalSteps = 4
  return (
    <Box sx={{ position: 'relative' }}>
      {stepNumber === 0 && (
        <ReturnToAppButton>
          <IconButton
            sx={theme => ({
              position: 'absolute',
              top: theme.spacing(1.5),
              right: theme.spacing(1.5),
            })}
          >
            <CloseIcon />
          </IconButton>
        </ReturnToAppButton>
      )}
      <Divider
        sx={theme => ({
          marginTop: theme.spacing(8),
          marginBottom: theme.spacing(4),
          fontWeight: '700',
          fontSize: '16px',
          color: '#4A5056',
        })}
      >
        {' '}
        Step {stepNumber + 1} of {totalSteps}
      </Divider>
      <Typography
        variant="headline2"
        sx={{
          color: theme.palette.grey[900],
        }}
      >
        {STEP_CONTENT[stepNumber].title}
      </Typography>
      <Box>{STEP_CONTENT[stepNumber].body}</Box>
    </Box>
  )
}

export enum ValidationWizardStep {
  PROFILE_INFO,
  VERIFY_IDENTITY,
  TERMS_AGREE,
  SIGN_PLEDGE,
  THANK_YOU,
}

function BodyControlFactory(args: {
  step: ValidationWizardStep

  onNext: (vs: VerificationSubmission) => void
  onReturnToSettings: () => void
  verificationSubmission?: VerificationSubmission
}) {
  switch (args.step) {
    case ValidationWizardStep.PROFILE_INFO: {
      return (
        <>
          <ProfileFieldsEditor
            verificationSubmission={args.verificationSubmission!}
            onNext={vs => args.onNext(vs)}
          />
        </>
      )
    }
    case ValidationWizardStep.VERIFY_IDENTITY: {
      return (
        <>
          <VerifyIdentify
            onNext={vs => args.onNext(vs)}
            verificationSubmission={args.verificationSubmission!}
          />
        </>
      )
    }
    case ValidationWizardStep.TERMS_AGREE: {
      return (
        <TermsAndConditionsWrapped
          verificationSubmission={args.verificationSubmission!}
          onNext={() => args.onNext(args.verificationSubmission!)}
        />
      )
    }
    case ValidationWizardStep.SIGN_PLEDGE: {
      return (
        <>
          <Attestation
            verificationSubmission={args.verificationSubmission!}
            onNext={() => args.onNext(args.verificationSubmission!)}
          />
        </>
      )
    }
    case ValidationWizardStep.THANK_YOU: {
      return (
        <>
          <Typography variant="headline3">Thank you for verifying.</Typography>
          <Button
            variant="contained"
            onClick={() => args.onReturnToSettings()}
            type="button"
          >
            Return to Account Settings
          </Button>
        </>
      )
    }
  }
}

export type ProfileValidationProps = {}

export const ProfileValidation = (props: ProfileValidationProps) => {
  const { accessToken } = SynapseContextUtils.useSynapseContext()
  const [verificationSubmission, setVerificationSubmission] =
    useState<VerificationSubmission>()
  const [profile, setProfile] = useState<UserProfile>()
  const [step, setStep] = useState<ValidationWizardStep>(
    ValidationWizardStep.PROFILE_INFO,
  )

  const [isReturnToAccountSettings, setIsReturnToAccountSettings] =
    useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const mask =
          SynapseConstants.USER_BUNDLE_MASK_ORCID |
          SynapseConstants.USER_BUNDLE_MASK_USER_PROFILE |
          SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED |
          SynapseConstants.USER_BUNDLE_MASK_VERIFICATION_SUBMISSION

        const bundle: UserBundle = await SynapseClient.getMyUserBundle(
          mask,
          accessToken,
        )
        let verificationSubmission = bundle.verificationSubmission
        const profile = bundle.userProfile!
        // is this the first verification submission
        if (!verificationSubmission) {
          verificationSubmission = {
            company: '',
            emails: [],
            firstName: '',
            lastName: '',
            location: '',
            orcid: '',
            attachments: [],
          }
        }
        // in any case, initialize to values that come from the current user profile state
        verificationSubmission.id = undefined
        verificationSubmission.company = profile.company ?? ''
        verificationSubmission.emails = profile.emails!
        verificationSubmission.firstName = profile.firstName
        verificationSubmission.lastName = profile.lastName
        verificationSubmission.location = profile.location ?? ''
        verificationSubmission.orcid = bundle.ORCID ?? ''

        setVerificationSubmission(verificationSubmission)
        setProfile(bundle.userProfile)
        const startStep = getSearchParam('step')
        if (startStep) {
          setStep(parseInt(startStep))
        }
      } catch (err: any) {
        displayToast(err.reason as string, 'danger')
      }
    }

    getData()
  }, [accessToken])

  if (isReturnToAccountSettings) {
    return <Navigate to="/authenticated/myaccount" />
  }
  const onSubmit = async () => {
    if (profile && verificationSubmission) {
      try {
        await SynapseClient.createProfileVerificationSubmission(
          verificationSubmission,
          accessToken!,
        )

        setStep(ValidationWizardStep.THANK_YOU)
      } catch (err: any) {
        displayToast(err.reason as string, 'danger')
      }
    }
  }

  const updateProfileFromVerificationSubmission = async () => {
    if (profile && verificationSubmission) {
      profile.company = verificationSubmission.company
      profile.firstName = verificationSubmission.firstName
      profile.lastName = verificationSubmission.lastName
      profile.location = verificationSubmission.location
      const updatedProfile = await SynapseClient.updateMyUserProfile(
        profile,
        accessToken,
      )
      setProfile(updatedProfile)
    }
  }

  const onNext = async (vs?: VerificationSubmission) => {
    //  event.preventDefault()
    switch (step) {
      case ValidationWizardStep.PROFILE_INFO:
        try {
          Object.assign(verificationSubmission || {}, vs!)
          await updateProfileFromVerificationSubmission()
          setStep(ValidationWizardStep.VERIFY_IDENTITY)
        } catch (err: any) {
          displayToast(err.reason as string, 'danger')
        }
        break
      case ValidationWizardStep.VERIFY_IDENTITY:
        setStep(ValidationWizardStep.TERMS_AGREE)
        break
      case ValidationWizardStep.TERMS_AGREE:
        setStep(ValidationWizardStep.SIGN_PLEDGE)
        break
      case ValidationWizardStep.SIGN_PLEDGE:
        onSubmit()
        break
    }
  }

  const onPrevious = async (event: SyntheticEvent) => {
    event.preventDefault()
    switch (step) {
      case ValidationWizardStep.VERIFY_IDENTITY:
        setStep(ValidationWizardStep.PROFILE_INFO)
        break
      case ValidationWizardStep.TERMS_AGREE:
        setStep(ValidationWizardStep.VERIFY_IDENTITY)
        break
      case ValidationWizardStep.SIGN_PLEDGE:
        setStep(ValidationWizardStep.TERMS_AGREE)
        break
    }
  }

  return (
    <StyledOuterContainer>
      {step !== ValidationWizardStep.THANK_YOU ? (
        <StyledInnerContainer
          sx={
            step === ValidationWizardStep.TERMS_AGREE
              ? theme => ({
                  width: '1200px',
                  '& > div:nth-of-type(1)': {
                    paddingTop: theme.spacing(10),
                    width: '750px',
                  },
                  '& > div:nth-of-type(2)': { paddingTop: theme.spacing(10) },
                })
              : null
          }
        >
          {verificationSubmission && (
            <Box>
              {step !== ValidationWizardStep.PROFILE_INFO && (
                <BackButton onClick={onPrevious} />
              )}
              <SourceAppLogo sx={{ textAlign: 'center' }} />
              <BodyControlFactory
                {...{
                  step: step,
                  verificationSubmission: verificationSubmission,
                  onNext: onNext,

                  onReturnToSettings: () => {
                    setIsReturnToAccountSettings(true)
                  },
                }}
              />
            </Box>
          )}
          <RightPanel stepNumber={step} />
        </StyledInnerContainer>
      ) : (
        <ThankYou>
          <Button
            variant="contained"
            fullWidth
            onClick={() => setIsReturnToAccountSettings(true)}
            type="button"
            sx={theme => ({ marginTop: theme.spacing(5) })}
            endIcon={<ArrowRightAltIcon />}
          >
            Return to {useSourceApp()?.friendlyName}
          </Button>
        </ThankYou>
      )}
    </StyledOuterContainer>
  )
}
