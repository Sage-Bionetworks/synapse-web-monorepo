import { faVenusDouble } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'
import {
  Button,
} from 'react-bootstrap'
import { Typography, SynapseConstants } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { getMyUserBundle, updateMyUserProfile } from 'synapse-react-client/dist/utils/SynapseClient'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { UserBundle, UserProfile, VerificationState, VerificationStateEnum, VerificationSubmission } from 'synapse-react-client/dist/utils/synapseTypes'
import { ORCiDButton } from './ORCiDButton'
import SourceApp from './SourceApp'
import { VerificationSubmissionEditor } from './VerificationSubmissionEditor'

export type ProfileValidationProps = {
}

export const ProfileValidation = (props: ProfileValidationProps) => {
  const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState(false)
  const [verificationSubmission, setVerificationSubmission] = useState<VerificationSubmission>()
  const [profile, setProfile] = useState<UserProfile>()
  const [orcID, setOrcID] = useState<string>()
  const [isEditingSubmission, setIsEditingSubmission] = useState(false)
  

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)

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
          // initialize to profile values
          verificationSubmission = {
            company: profile.company ?? '',
            emails: profile.emails!,
            firstName: profile.firstName,
            lastName: profile.lastName,
            location: profile.location ?? '',
            orcid: bundle.ORCID ?? '',
            attachments: [],
          }
        }
        setVerificationSubmission(verificationSubmission)
        setOrcID(bundle.ORCID)
        setProfile(bundle.userProfile)
      } catch (err:any) {
        displayToast(err.reason as string, 'danger')
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [accessToken])

  const onCreateSubmission = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    // update profile with new values
    if (profile && verificationSubmission) {
      profile.company = verificationSubmission.company
      profile.firstName = verificationSubmission.firstName
      profile.lastName = verificationSubmission.lastName
      profile.location = verificationSubmission.location
      await updateMyUserProfile(profile, accessToken)
      // and create the new submission
      fjkldsjflds
    }
  }

  // const onChangeField = (event: React.SyntheticEvent<HTMLInputElement>) => {
  //   setField(event.currentTarget.value)
  // }

  let validationUI = <></>


  if (verificationSubmission) {
    //is there an existing verification submission?
    if (verificationSubmission.stateHistory && verificationSubmission.stateHistory.length > 0) {
      //what is the state of the submission?
      const currentVerificationState:VerificationState = verificationSubmission.stateHistory[verificationSubmission.stateHistory.length-1]
      
      switch(currentVerificationState.state) {
        case VerificationStateEnum.APPROVED:
        case VerificationStateEnum.REJECTED:
          // can resubmit
          break
        case VerificationStateEnum.SUBMITTED:
          // can  cancel
          break
        case VerificationStateEnum.SUSPENDED:
          // show suspended "reason"
          break
      }
      validationUI = <>
        <p>Your profile validation is {currentVerificationState.state}</p>
      </>
    } else {
      // No verification submission yet
      if (!orcID) {
        // user has not yet bound profile to an ORCiD
        validationUI = <>
          <p>Step 1 (?) Bind to a ORCiD</p>
          <ORCiDButton />
        </>
      } else {
        // give user a chance to create a submission
        // on submit, edit the user profile with the new values from the editor, create the new submission!
        validationUI = <>
          <p>Create your profile validation submission</p>
        </>
        setIsEditingSubmission(true)
      }
      
    }
  }
  return (
    <>
      <SourceApp />
      <div className="ProfileValidation bootstrap-4-backport">
        {validationUI}
        {isEditingSubmission && verificationSubmission && <VerificationSubmissionEditor verificationSubmission={verificationSubmission} />}
      </div>
    </>
    
  )
}
