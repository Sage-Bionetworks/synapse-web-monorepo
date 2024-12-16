import { Box, Button, Typography, Stack, Skeleton } from '@mui/material'
import { useState } from 'react'
import IconSvg from '../IconSvg/IconSvg'
import { TWO_FACTOR_DOCS_LINK } from './TwoFactorEnrollmentForm'
import {
  useDisableTwoFactorAuth,
  useGetTwoFactorEnrollmentStatus,
} from '../../synapse-queries/auth/useTwoFactorEnrollment'
import ConditionalWrapper from '../utils/ConditionalWrapper'
import { displayToast } from '../ToastMessage/ToastMessage'
import { ConfirmationDialog } from '../ConfirmationDialog'

export type TwoFactorAuthSettingsPanelProps = {
  onRegenerateBackupCodes: () => void
  onBeginTwoFactorEnrollment: () => void
  hideTitle?: boolean
}

export default function TwoFactorAuthSettingsPanel(
  props: TwoFactorAuthSettingsPanelProps,
) {
  const [
    showDisable2FAConfirmationDialog,
    setShowDisable2FAConfirmationDialog,
  ] = useState(false)
  const {
    onRegenerateBackupCodes,
    onBeginTwoFactorEnrollment,
    hideTitle = false,
  } = props
  const { data: status, isLoading: isLoadingStatus } =
    useGetTwoFactorEnrollmentStatus()
  const isActivated = status?.status === 'ENABLED'

  const { mutate: disable2FA, isPending: disable2FAIsPending } =
    useDisableTwoFactorAuth({
      onSettled: () => {
        setShowDisable2FAConfirmationDialog(false)
      },
      onSuccess: () => {
        displayToast('2FA removed from this account', 'info')
      },
      onError: error => {
        displayToast(error.message, 'danger')
      },
    })

  const isLoading = isLoadingStatus || disable2FAIsPending

  return (
    <Box>
      <ConfirmationDialog
        title={'Disable 2FA?'}
        onCancel={() => setShowDisable2FAConfirmationDialog(false)}
        open={showDisable2FAConfirmationDialog}
        content={
          <>
            <Typography variant={'body1'}>
              Are you sure you want to disable two-factor authentication on your
              account? Your account will be less secure, and you may be unable
              to download certain sensitive data.
            </Typography>
            <Typography variant={'body1'} sx={{ mt: 2.5 }}>
              Two-factor authentication can be re-enabled at any time, but your
              current authenticator app and recovery codes will no longer work
              without being re-configured.
            </Typography>
          </>
        }
        onConfirm={() => {
          disable2FA()
        }}
        confirmButtonProps={{ children: 'Disable 2FA' }}
      />
      {!hideTitle && (
        <Typography variant={'headline2'} role={'heading'}>
          Two-factor Authentication (2FA)
        </Typography>
      )}
      <ConditionalWrapper condition={isLoading} wrapper={Skeleton}>
        <Typography
          variant={'body1'}
          color={isActivated ? 'success.main' : 'error.main'}
          sx={{ my: 2, display: 'flex', alignItems: 'center' }}
        >
          <IconSvg
            icon={isActivated ? 'check' : 'cross'}
            sx={{ mr: 1, height: '24px' }}
          />
          {isLoading ? 'Loading...' : isActivated ? 'Active' : 'Inactive'}
        </Typography>
      </ConditionalWrapper>
      <Typography variant={'body1Italic'} sx={{ my: 1 }}>
        Required to satisfy certain data access requirements, and recommended
        for overall account security.
      </Typography>
      <Typography variant={'body1'} sx={{ my: 2 }}>
        Synapse uses a time-based system, which you can set up using an app like
        Google Authenticator, Duo Mobile, Microsoft Authenticator, or Authy.
        Certain data may require 2FA to be turned on for your account in order
        to request access.
      </Typography>
      <Stack direction={'row'} gap={1}>
        <ConditionalWrapper condition={isLoadingStatus} wrapper={Skeleton}>
          <Button
            variant={'outlined'}
            disabled={isLoading}
            onClick={() => {
              if (!isActivated) {
                onBeginTwoFactorEnrollment()
              } else {
                setShowDisable2FAConfirmationDialog(true)
              }
            }}
          >
            {isActivated ? 'Deactivate' : 'Activate'} 2FA
          </Button>
        </ConditionalWrapper>
        {status?.status !== 'DISABLED' && (
          <ConditionalWrapper condition={isLoadingStatus} wrapper={Skeleton}>
            <Button
              variant={'text'}
              disabled={isLoading}
              onClick={() => {
                onRegenerateBackupCodes()
              }}
            >
              Regenerate Backup Codes
            </Button>
          </ConditionalWrapper>
        )}
        <Button
          variant={'text'}
          onClick={() => window.open(TWO_FACTOR_DOCS_LINK, '_blank')}
        >
          More Information
        </Button>
      </Stack>
    </Box>
  )
}
