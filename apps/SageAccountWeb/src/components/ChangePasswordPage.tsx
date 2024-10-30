import React from 'react'
import { LeftRightPanel } from './LeftRightPanel'
import { SourceAppLogo } from './SourceApp'
import { SetPasswordInstructions } from './ResetPassword'
import { ChangePassword } from 'synapse-react-client'

export const ChangePasswordPage = () => {
  // previously, if the errorCode was PASSWORD_RESET_VIA_EMAIL_REQUIRED then this page would tell the user that their current password does not meet Synapse security requirements.  But this is not necessarily true.
  const instructions = 'Set a new password'
  return (
    <>
      <LeftRightPanel
        className={'ResetPasswords'}
        leftContent={
          <>
            <SourceAppLogo />
            <ChangePassword redirectToRoute="/" />
          </>
        }
        rightContent={<SetPasswordInstructions title={instructions} />}
      ></LeftRightPanel>
    </>
  )
}
