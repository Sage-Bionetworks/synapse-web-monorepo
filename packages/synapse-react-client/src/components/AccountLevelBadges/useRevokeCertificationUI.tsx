import { ButtonProps, Link, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { useRevokeCertification } from '../../synapse-queries/user/useRevokeCertification'
import { useIsCurrentUserACTMember } from '../../synapse-queries/user/useUserBundle'
import { ConfirmationDialogProps } from '../ConfirmationDialog'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { displayToast } from '../ToastMessage'

export type RevokeCertificationUIOptions = {
  /* The ID of the user whose certification may be revoked. */
  userId: string
  buttonProps: Omit<ButtonProps, 'onClick'>
}

export type RevokeCertificationUIReturn = {
  /* Whether a button to revoke certification should be shown (i.e. is the logged-in user ACT?)*/
  showButton: boolean
  /* Props to pass to a MUI Button to show a prompt to revoke certification. */
  buttonProps: ButtonProps
  /* Props to pass to a ConfirmationDialog to confirm/cancel revocation. */
  confirmationDialogProps: ConfirmationDialogProps
}

/**
 * Hook that provides UI data and props related to revoking a user's certification.
 * @param options
 */
export default function useRevokeCertificationUI(
  options: RevokeCertificationUIOptions,
): RevokeCertificationUIReturn {
  const { userId, buttonProps: additionalButtonProps } = options
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false)

  const { data: isACT } = useIsCurrentUserACTMember()

  const { mutate: revokeCertification, isPending } = useRevokeCertification({
    onSettled: () => {
      setShowConfirmationDialog(false)
    },
    onSuccess: () => {
      displayToast('User certification revoked', 'success')
    },
    onError: error => {
      displayToast(error.message, 'danger')
    },
  })

  const buttonProps: ButtonProps = useMemo(
    () => ({
      children: 'Revoke Certification',
      ...additionalButtonProps,
      disabled: isPending || additionalButtonProps.disabled,
      onClick: () => setShowConfirmationDialog(true),
    }),
    [additionalButtonProps, isPending],
  )

  const confirmationDialogProps: ConfirmationDialogProps = useMemo(
    () => ({
      title: 'Revoke user certification?',
      onCancel: () => setShowConfirmationDialog(false),
      open: showConfirmationDialog,
      content: (
        <>
          <Typography variant={'body1'} sx={{ fontWeight: 'bold', mb: 2.5 }}>
            This action can&apos;t be undone.
          </Typography>
          <Typography variant={'body1'} sx={{ my: 2.5 }}>
            Revoking user certification means this user won’t be able to upload
            files or tables, or make new projects or folders. To become
            certified again, they’ll have to retake the certification quiz.
          </Typography>
          <Typography variant={'body1'} sx={{ mt: 2.5 }}>
            <Link
              href={
                'https://help.synapse.org/docs/Synapse-User-Account-Types.2007072795.html#SynapseUserAccountTypes-CertifiedUser'
              }
            >
              More about certified users
            </Link>
          </Typography>
        </>
      ),
      onConfirm: () => {
        revokeCertification(userId)
      },
      confirmButtonProps: {
        children: 'Revoke',
        disabled: isPending,
        startIcon: isPending ? <SynapseSpinner /> : null,
      },
      cancelButtonProps: { disabled: isPending },
    }),
    [isPending, revokeCertification, showConfirmationDialog, userId],
  )

  return { showButton: isACT || false, buttonProps, confirmationDialogProps }
}
