import { LeftRightPanel } from '@/components/LeftRightPanel'
import { SourceAppLogo } from '@/components/SourceApp'
import SetPasswordInstructions from '@/components/SetPasswordInstructions'
import ChangePassword from 'synapse-react-client/components/ChangePassword/ChangePassword'

function ChangePasswordPage() {
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

export default ChangePasswordPage
