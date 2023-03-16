import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { SynapseConstants, Typography } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import {
  createProfileVerificationSubmission,
  getMyUserBundle,
  updateMyUserProfile,
} from 'synapse-react-client/dist/utils/SynapseClient'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import {
  UserBundle,
  UserProfile,
  VerificationSubmission,
} from 'synapse-react-client/dist/utils/synapseTypes'
import { getSearchParam } from 'URLUtils'
import { ProfileFieldsEditor } from './ProfileFieldsEditor'
import { VerifyIdentify } from './VerifyIdentify'
import { StyledInnerContainer, StyledOuterContainer } from '../StyledComponents'
import { Box, Button, Divider, IconButton, Link } from '@mui/material'
import theme from 'style/theme'
import { SourceAppLogo, useSourceApp } from '../SourceApp'
import Attestation from './Attestation'
import ThankYou from './ThankYou'
import TermsAndConditionsWrapped from './TermsAndConditionsWrapped'
import { ReturnToAppButton } from './ReturnToAppButton'

const STEP_CONTENT = [
  {
    title: 'Identity verification',
    body: (
      <>
        <Typography
          variant="body1"
          sx={{ fontWeight: 500, marginBottom: theme.spacing(3) }}
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
    title: 'Synapse Pledge',
    body: (
      <>
        <Typography variant="body2" paragraph>
          You need to indicate your understanding and agreement with each of the
          terms
        </Typography>
        .
        <Typography variant="body2" paragraph>
          You must complete this step in order to request validation.{' '}
        </Typography>
      </>
    ),
  },

  {
    title: 'Submit recent identity attestation documentation.',
    body: (
      <>
        <Typography variant="body2" paragraph>
          This document must be current within the past month. Acceptable forms
          of documentation, in English, are any one of the following:{' '}
        </Typography>

        <ul
          style={{
            marginLeft: '0px',
            paddingLeft: '20px',
          }}
        >
          <li>
            <Typography variant="body2">
              A letter from a signing official on letterhead attesting to your
              identity (
              <Link
                color="primary"
                href="https://help.synapse.org/docs/2007072795/signing_official.doc?inst-v=82ba44ea-c50a-4c56-b8f9-f744ebd4620b"
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
              style={{ textAlign: 'center', margin: theme.spacing(1) }}
              variant="body2"
            >
              OR
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              A notarized letter attesting to your identity (
              <Link
                color="primary"
                href="https://help.synapse.org/docs/2007072795/notarized_letter.doc?inst-v=82ba44ea-c50a-4c56-b8f9-f744ebd4620b"
                rel="nofollow"
              >
                template here
              </Link>
              )
            </Typography>
            <Typography
              style={{ textAlign: 'center', margin: theme.spacing(1) }}
              variant="body2"
            >
              OR
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              A copy of your professional license (e.g., a photocopy of your
              medical license).&nbsp;
            </Typography>
            <Typography variant="body2" paragraph>
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

const RightPanel: React.FC<{ stepNumber: number }> = ({ stepNumber }) => {
  const totalSteps = 4
  return (
    <Box sx={{ position: 'relative' }}>
      {stepNumber === 0 && (
        <ReturnToAppButton>
          <IconButton
            sx={{
              position: 'absolute',
              top: theme.spacing(1.5),
              right: theme.spacing(1.5),
            }}
          >
            <CloseIcon />
          </IconButton>
        </ReturnToAppButton>
      )}
      <Divider
        sx={{
          marginTop: theme.spacing(8),
          marginBottom: theme.spacing(4),
          fontWeight: '700',
          fontSize: '16px',
          color: '#4A5056',
        }}
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
  const { accessToken } = useSynapseContext()
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

        const bundle: UserBundle = await getMyUserBundle(mask, accessToken)
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
    return <Redirect to="/authenticated/myaccount" />
  }
  const onSubmit = async () => {
    if (profile && verificationSubmission) {
      try {
        await createProfileVerificationSubmission(
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
      const updatedProfile = await updateMyUserProfile(profile, accessToken)
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

  const onPrevious = async (event: React.SyntheticEvent) => {
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

  // Useful for verification state logic, in account settings
  // if (verificationSubmission) {
  //   //is there an existing verification submission?
  //   if (verificationSubmission.stateHistory && verificationSubmission.stateHistory.length > 0) {
  //     //what is the state of the submission?
  //     const  currentVerificationState:VerificationState = verificationSubmission.stateHistory[verificationSubmission.stateHistory.length-1]

  //     switch(currentVerificationState.state) {
  //       case VerificationStateEnum.APPROVED:
  //       case VerificationStateEnum.REJECTED:
  //         // can resubmit
  //         break
  //       case VerificationStateEnum.SUBMITTED:
  //         // can  cancel
  //         break
  //       case VerificationStateEnum.SUSPENDED:
  //         // show suspended "reason"
  //         break
  //     }
  //   } else {
  //     } else {
  //       // give user a chance to create a submission
  //     }
  //   }
  // }

  return (
    <StyledOuterContainer>
      {step !== ValidationWizardStep.THANK_YOU ? (
        <StyledInnerContainer>
          {verificationSubmission && (
            <Box>
              {step !== ValidationWizardStep.PROFILE_INFO && (
                <IconButton
                  onClick={onPrevious}
                  sx={{
                    position: 'absolute',
                    top: theme.spacing(1.5),
                    left: theme.spacing(1.5),
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>
              )}
              <SourceAppLogo
                sx={{ textAlign: 'center', paddingBottom: '35px' }}
              />
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
            sx={{ marginTop: theme.spacing(5) }}
            endIcon={<ArrowRightAltIcon />}
          >
            Return to {useSourceApp()?.friendlyName}
          </Button>
        </ThankYou>
      )}
    </StyledOuterContainer>
  )
}
