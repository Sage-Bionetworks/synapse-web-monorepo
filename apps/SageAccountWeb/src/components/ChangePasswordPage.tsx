import React from 'react'
import { LeftRightPanel } from './LeftRightPanel'
import { SourceAppLogo } from './SourceApp'
import { SetPasswordInstructions } from './ResetPassword'
import { ChangePassword } from 'synapse-react-client'
import { useLocation } from 'react-router-dom'

export const ChangePasswordPage = () => {
  const { search } = useLocation()
  const urlSearchParams = new URLSearchParams(search)
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
            <ChangePassword redirectToRoute="/" />
          </>
        }
        rightContent={<SetPasswordInstructions title={instructions} />}
      ></LeftRightPanel>
    </>
  )
}
