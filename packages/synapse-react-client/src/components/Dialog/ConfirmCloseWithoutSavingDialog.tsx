import { SetOptional } from 'type-fest'
import {
  ConfirmationDialog,
  ConfirmationDialogProps,
} from '../ConfirmationDialog/ConfirmationDialog'

export type ConfirmCloseWithoutSavingDialogProps = SetOptional<
  ConfirmationDialogProps,
  'title' | 'content' | 'confirmButtonProps'
>

function ConfirmCloseWithoutSavingDialog(
  props: ConfirmCloseWithoutSavingDialogProps,
) {
  const {
    title = 'Close without saving?',
    content = 'Are you sure you want to close the editor without saving your changes?',
    confirmButtonProps = {
      children: 'Close without saving',
      color: 'error',
    },
    ...rest
  } = props
  return (
    <ConfirmationDialog
      title={title}
      content={content}
      confirmButtonProps={confirmButtonProps}
      {...rest}
    />
  )
}

export default ConfirmCloseWithoutSavingDialog
