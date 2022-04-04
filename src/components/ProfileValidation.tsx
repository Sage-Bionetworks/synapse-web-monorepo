import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { SynapseConstants, Typography } from 'synapse-react-client'
import TermsAndConditions from 'synapse-react-client/dist/containers/TermsAndConditions'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { getMyUserBundle, updateMyUserProfile, createProfileVerificationSubmission } from 'synapse-react-client/dist/utils/SynapseClient'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { UserBundle, UserProfile, VerificationSubmission } from 'synapse-react-client/dist/utils/synapseTypes'
import { getSearchParam } from 'URLUtils'
import { AccountVerificationProgess } from './AccountVerificationProgress'
import { ProfileFieldsEditor } from './ProfileValidationSteps/ProfileFieldsEditor'
import { VerifyIdentify } from './ProfileValidationSteps/VerifyIdentify'
import ArrowLight from '../assets/ArrowLight.svg'
import Arrow from '../assets/Arrow.svg'
import ReturnArrow from '../assets/ReturnArrow.svg'


export enum ValidationWizardStep {
  PROFILE_INFO,
  VERIFY_IDENTITY,
  SIGN_PLEDGE,
  THANK_YOU
}

export type ProfileValidationProps = {
}

export const ProfileValidation = (props: ProfileValidationProps) => {
  const { accessToken } = useSynapseContext()
  const [verificationSubmission, setVerificationSubmission] = useState<VerificationSubmission>()
  const [profile, setProfile] = useState<UserProfile>()
  const [step, setStep] = useState<ValidationWizardStep>(ValidationWizardStep.PROFILE_INFO)
  const [isContinueButtonEnabled, setIsContinueButtonEnabled] = useState(true)
  const [isReturnToAccountSettings, setIsReturnToAccountSettings] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const mask =
          SynapseConstants.USER_BUNDLE_MASK_ORCID |
          SynapseConstants.USER_BUNDLE_MASK_USER_PROFILE |
          SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED | 
          SynapseConstants.USER_BUNDLE_MASK_VERIFICATION_SUBMISSION

        const bundle:UserBundle = await getMyUserBundle(
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
            attachments: []
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
      } catch (err:any) {
        displayToast(err.reason as string, 'danger')
      }
    }

    getData()
  }, [accessToken])

  if (isReturnToAccountSettings) {
    return <Redirect to='/authenticated/myaccount' />
  }
  const onSubmit = async () => {
    if (profile && verificationSubmission) {
      try {
        await createProfileVerificationSubmission(verificationSubmission, accessToken!)
        setStep(ValidationWizardStep.THANK_YOU)
      } catch (err:any) {
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

  const onNext = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    switch (step) {
      case ValidationWizardStep.PROFILE_INFO:
        try{
          await updateProfileFromVerificationSubmission()
          setStep(ValidationWizardStep.VERIFY_IDENTITY)
          // the continue button is only enabled if ORCiD is bound
          setIsContinueButtonEnabled(!!verificationSubmission!.orcid)
        } catch (err:any) {
          displayToast(err.reason as string, 'danger')
        }
        break
      case ValidationWizardStep.VERIFY_IDENTITY:
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
      case ValidationWizardStep.SIGN_PLEDGE:
        setStep(ValidationWizardStep.PROFILE_INFO)
        break
    }
  }

  // Useful for verification state logic, in account settings
  // if (verificationSubmission) {
  //   //is there an existing verification submission?
  //   if (verificationSubmission.stateHistory && verificationSubmission.stateHistory.length > 0) {
  //     //what is the state of the submission?
  //     const currentVerificationState:VerificationState = verificationSubmission.stateHistory[verificationSubmission.stateHistory.length-1]
      
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
    <>
      <div className="ProfileValidation bootstrap-4-backport blue-background">
        <Link className='return-link' to='/authenticated/myaccount'><img className='arrow-icon' src={ReturnArrow} alt='return arrow'/>Return to Account Settings</Link>
        <Container>
          {verificationSubmission && <>
            {step === ValidationWizardStep.PROFILE_INFO && <>
            <AccountVerificationProgess step={ValidationWizardStep.PROFILE_INFO}/>
            <ProfileFieldsEditor verificationSubmission={verificationSubmission} />
            </>}
            {step === ValidationWizardStep.VERIFY_IDENTITY && <>
            <AccountVerificationProgess step={ValidationWizardStep.VERIFY_IDENTITY}/>
            <VerifyIdentify verificationSubmission={verificationSubmission} /></>}
            {step === ValidationWizardStep.SIGN_PLEDGE && <>
              <AccountVerificationProgess step={ValidationWizardStep.SIGN_PLEDGE}/>
              <TermsAndConditions onFormChange={(isFormComplete) => {
                setIsContinueButtonEnabled(isFormComplete)
              }} />
            </>}
            {step === ValidationWizardStep.THANK_YOU && <>
              <Typography variant="headline3">Thank you for verifying.</Typography>
              <Button
                variant='secondary'
                onClick={() => {setIsReturnToAccountSettings(true)}}
                type="button"
              >
                Return to Account Settings
              </Button>
            </>}
          </>}
          <div className='button-container'>
            { (step !== ValidationWizardStep.PROFILE_INFO && step !== ValidationWizardStep.THANK_YOU) && <Button
              variant='default'
              onClick={onPrevious}
              type="button"
              className='emptyButton btn-container'
            >
              <img className='arrow-icon button-arrow' src={Arrow} alt='left-arrow' style={{transform:'rotate(180deg)'}}/>Previous
            </Button>}
            { step !== ValidationWizardStep.THANK_YOU && <Button
              variant='secondary'
              className='btn-container'
              onClick={onNext}
              type="button"
              disabled={ !isContinueButtonEnabled }
            >
              {step === ValidationWizardStep.SIGN_PLEDGE ? 'Submit' : 'Continue'}
              {step !== ValidationWizardStep.SIGN_PLEDGE && <img className='arrow-icon button-arrow' src={ArrowLight} alt='right-arrow'/>}
            </Button>}
          </div>

        </Container>
      </div>
    </>
    
  )
}
