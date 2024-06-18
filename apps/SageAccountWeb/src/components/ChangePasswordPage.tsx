import React from 'react'

import { LeftRightPanel } from './LeftRightPanel'
import { SourceAppLogo } from './SourceApp'
import { SetPasswordInstructions } from './ResetPassword'
import { ChangePassword } from 'synapse-react-client'

export const ChangePasswordPage = () => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const errorCode = urlSearchParams.get('errorCode') ?? ''
  const instructions =
    errorCode == 'PASSWORD_RESET_VIA_EMAIL_REQUIRED'
      ? 'Your current password does not meet Synapse security requirements'
      : 'Set a new password'
  return (
    <>
      <LeftRightPanel
        className={'ResetPasswords'}
        leftContent={
          <>
            <SourceAppLogo />
            <ChangePassword />
          </>
        }
        rightContent={<SetPasswordInstructions title={instructions} />}
      ></LeftRightPanel>
    </>
  )
}
