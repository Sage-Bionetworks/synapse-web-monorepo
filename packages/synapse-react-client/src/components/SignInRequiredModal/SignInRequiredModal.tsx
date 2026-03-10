import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import {
  ConfirmationDialog,
  ConfirmationDialogProps,
} from '../ConfirmationDialog/ConfirmationDialog'

export type SignInRequiredModalProps = Partial<
  Omit<ConfirmationDialogProps, 'title' | 'onConfirm' | 'onCancel'>
> & {
  onHide: () => void
}

export const CONFIRM_BUTTON_TEXT = 'Sign in'
export const DEFAULT_CONTENT =
  'You will need to sign in for access to that resource.'
export const TITLE = 'Sign In Required'

export function SignInRequiredModal({
  onHide,
  content = DEFAULT_CONTENT,
  open = true,
  ...rest
}: SignInRequiredModalProps) {
  return (
    <ConfirmationDialog
      {...rest}
      open={open}
      title={TITLE}
      content={content}
      onCancel={onHide}
      onConfirm={onHide}
      confirmButtonProps={{
        ...rest.confirmButtonProps,
        children: rest.confirmButtonProps?.children ?? CONFIRM_BUTTON_TEXT,
        className: SRC_SIGN_IN_CLASS,
      }}
    />
  )
}
