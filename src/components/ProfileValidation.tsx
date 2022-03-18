import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { SynapseConstants } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { getMyUserBundle, updateMyUserProfile, createProfileVerificationSubmission } from 'synapse-react-client/dist/utils/SynapseClient'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { UserBundle, UserProfile, VerificationSubmission } from 'synapse-react-client/dist/utils/synapseTypes'
import { getSearchParam } from 'URLUtils'
import { ProfileFieldsEditor } from './ProfileValidationSteps/ProfileFieldsEditor'
import { VerifyIdentify } from './ProfileValidationSteps/VerifyIdentify'

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
        // this is a new verification submission (perhaps based on an existing submission)
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
      await updateMyUserProfile(profile, accessToken)
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
      <div className="ProfileValidation bootstrap-4-backport">
        {verificationSubmission && <>
          {step === ValidationWizardStep.PROFILE_INFO && <ProfileFieldsEditor verificationSubmission={verificationSubmission} />}
          {step === ValidationWizardStep.VERIFY_IDENTITY && <VerifyIdentify verificationSubmission={verificationSubmission} />}

        </>}
        { (step !== ValidationWizardStep.PROFILE_INFO && step !== ValidationWizardStep.THANK_YOU) && <Button
          variant='default'
          onClick={onPrevious}
          type="button"
          style={{ marginLeft: 20 }}
        >
          Previous
        </Button>}
        { step !== ValidationWizardStep.THANK_YOU && <Button
          variant='primary'
          onClick={onNext}
          type="button"
          style={{ marginLeft: 20 }}
          disabled={ !isContinueButtonEnabled }
        >
          {step === ValidationWizardStep.SIGN_PLEDGE ? 'Submit' : 'Continue'}
        </Button>}
      </div>
    </>
    
  )
}
