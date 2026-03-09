import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'

export type SignInRequiredModalProps = {
  onHide: () => void
  content?: React.ReactNode
}

export const CONFIRM_BUTTON_TEXT = 'Sign in'
export const DEFAULT_CONTENT =
  'You will need to sign in for access to that resource.'

export function SignInRequiredModal({
  onHide,
  content,
}: SignInRequiredModalProps) {
  return (
    <ConfirmationDialog
      open={true}
      title="Sign In Required"
      content={content ?? DEFAULT_CONTENT}
      onCancel={onHide}
      onConfirm={onHide}
      confirmButtonProps={{
        children: CONFIRM_BUTTON_TEXT,
        className: SRC_SIGN_IN_CLASS,
      }}
    />
  )
}
