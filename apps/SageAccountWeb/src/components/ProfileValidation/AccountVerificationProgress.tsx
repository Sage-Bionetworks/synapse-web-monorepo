import React from 'react'
import Arrow from '@/assets/Arrow.svg?url'
import confirmProfile from '@/assets/ConfirmProfile.svg?url'
import confirmProfileFilled from '@/assets/ConfirmProfileFilled.svg?url'
import inActiveSignPledge from '@/assets/InactiveSignPledge.svg?url'
import inActiveVerifyId from '@/assets/InactiveVerifyId.svg?url'
import PaperAirPlane from '@/assets/PaperAirPlane.svg?url'
import RocketShip from '@/assets/RocketShip.svg?url'
import activeSignPledge from '@/assets/SignPledge.svg?url'
import verifyId from '@/assets/VerifyID.svg?url'
import verifyIdFilled from '@/assets/VerifyIDFilled.svg?url'
import { ValidationWizardStep } from './ProfileValidation'

export const PlaneToRocket = (): React.ReactNode => {
  return (
    <div>
      <img src={PaperAirPlane} alt="paper airplane" />
      <img src={Arrow} alt="arrow" style={{ margin: '0 16px' }} />
      <img src={RocketShip} alt="rocket ship" />
    </div>
  )
}

interface VerificationProgressProps {
  currentProgress: number
  imgHeight: number
  profileSrc: string
  verifySrc: string
  signPledgeSrc: string
  profileFont: string
  identityFont: string
  signFont: string
}

export function VerificationProgress(props: VerificationProgressProps) {
  return (
    <div className="progress-container">
      <div
        className="progress-element progress-border"
        style={{ width: '100%', top: props.imgHeight / 2 }}
      ></div>
      <div
        className="progress-element progress-border"
        style={{
          width: `${props.currentProgress}%`,
          top: props.imgHeight / 2,
          color: '#4DB3B9',
        }}
      ></div>
      <img
        className="progress-element"
        src={props.profileSrc}
        alt="profile"
        style={{ left: 0 }}
      />
      <img
        className="progress-element verify-identity"
        src={props.verifySrc}
        alt="verifyId"
      />
      <img
        className="progress-element"
        src={props.signPledgeSrc}
        alt="signPledgeSrc"
        style={{ right: 0 }}
      />
      <div
        className={`progress-element ${props.profileFont}`}
        style={{ left: -props.imgHeight, top: props.imgHeight * 1.5 }}
      >
        1. Confirm Profile
      </div>
      <div
        className={`progress-element verify-identity ${props.identityFont}`}
        style={{ top: props.imgHeight * 1.5 }}
      >
        2. Verify Identity
      </div>
      <div
        className={`progress-element ${props.signFont}`}
        style={{ right: -props.imgHeight, top: props.imgHeight * 1.5 }}
      >
        3.Sign Pledge
      </div>
    </div>
  )
}

interface AccountVerificationProgressProps {
  step: ValidationWizardStep
}

export function AccountVerificationProgess({
  step,
}: AccountVerificationProgressProps) {
  return (
    <div className="progress-indicator">
      <div style={{ textAlign: 'center' }}>
        <PlaneToRocket />
        <span>Account Verification</span>
      </div>

      {step === ValidationWizardStep.PROFILE_INFO && (
        <VerificationProgress
          currentProgress={15}
          imgHeight={40}
          profileSrc={confirmProfile}
          verifySrc={inActiveVerifyId}
          signPledgeSrc={inActiveSignPledge}
          profileFont="current-font"
          identityFont="inactive-font"
          signFont="inactive-font"
        />
      )}
      {step === ValidationWizardStep.VERIFY_IDENTITY && (
        <VerificationProgress
          currentProgress={65}
          imgHeight={40}
          profileSrc={confirmProfileFilled}
          verifySrc={verifyId}
          signPledgeSrc={inActiveSignPledge}
          profileFont="completed-font"
          identityFont="current-font"
          signFont="inactive-font"
        />
      )}
      {step === ValidationWizardStep.SIGN_PLEDGE && (
        <VerificationProgress
          currentProgress={100}
          imgHeight={40}
          profileSrc={confirmProfileFilled}
          verifySrc={verifyIdFilled}
          signPledgeSrc={activeSignPledge}
          profileFont="completed-font"
          identityFont="completed-font"
          signFont="current-font"
        />
      )}
    </div>
  )
}
