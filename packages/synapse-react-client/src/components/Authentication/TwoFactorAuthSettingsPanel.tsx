import { Box, Button, Typography, Stack, Skeleton } from '@mui/material'
import React from 'react'
import IconSvg from '../IconSvg/IconSvg'
import { TWO_FACTOR_DOCS_LINK } from './TwoFactorEnrollmentForm'
import {
  useDisableTwoFactorAuth,
  useGetTwoFactorEnrollmentStatus,
} from '../../synapse-queries/auth/useTwoFactorEnrollment'
import ConditionalWrapper from '../utils/ConditionalWrapper'
import { displayToast } from '../ToastMessage/ToastMessage'

export type TwoFactorAuthSettingsPanelProps = {
  onRegenerateBackupCodes: () => void
  onBeginTwoFactorEnrollment: () => void
  hideTitle?: boolean
}

export default function TwoFactorAuthSettingsPanel(
  props: TwoFactorAuthSettingsPanelProps,
) {
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
      onSuccess: () => {
        displayToast('2FA removed from this account', 'info')
      },
    })

  const isLoading = isLoadingStatus || disable2FAIsPending

  return (
    <Box>
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
                disable2FA()
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
