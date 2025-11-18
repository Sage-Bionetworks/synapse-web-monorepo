import { useGetTwoFactorEnrollmentStatus } from '@/synapse-queries/auth/useTwoFactorEnrollment'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { ButtonProps, Typography } from '@mui/material'
import { TwoFactorAuthStatus } from '@sage-bionetworks/synapse-types'
import { TWO_FACTOR_DOCS_LINK } from '../../Authentication/TwoFactorEnrollmentForm/TwoFactorEnrollmentForm'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'
import RequirementItem, { RequirementItemProps } from './RequirementItem'

const TWO_FACTOR_ENROLLMENT_LINK = `${getEndpoint(
  BackendDestinationEnum.PORTAL_ENDPOINT,
)}TwoFactorAuth:Enroll`

function getState(
  isAuthenticated: boolean,
  isLoading: boolean,
  status?: TwoFactorAuthStatus['status'],
): RequirementItemStatus {
  if (!isAuthenticated) {
    return RequirementItemStatus.LOCKED
  }
  if (isLoading) {
    return RequirementItemStatus.LOADING
  }
  return status === 'ENABLED'
    ? RequirementItemStatus.COMPLETE
    : RequirementItemStatus.LOCKED
}

/**
 * Displays a data access request requirement that prompts the user to enable two-factor authentication.
 */
export default function TwoFactorAuthEnabledRequirement() {
  const { isAuthenticated } = useSynapseContext()

  const { data: twoFactorAuthStatus, isLoading } =
    useGetTwoFactorEnrollmentStatus({
      enabled: isAuthenticated,
      // If required, we send the user to a new tab to complete 2FA enrollment
      // Refetch on window focus so the enrollment state is immediately updated when they return to this tab
      refetchOnWindowFocus: true,
      // Refetch won't happen unless staleTime is less than the amount of time since last fetch. 5sec seems reasonable
      staleTime: 5000,
    })

  const actions: RequirementItemProps['actions'] =
    twoFactorAuthStatus?.status === 'DISABLED'
      ? [
          {
            variant: 'outlined',
            href: TWO_FACTOR_ENROLLMENT_LINK,
            target: '_blank',
            rel: 'noopener noreferrer',
            children: 'Activate 2FA (opens a new tab)',
          } as ButtonProps,
          {
            variant: 'text',
            href: TWO_FACTOR_DOCS_LINK,
            target: '_blank',
            rel: 'noopener noreferrer',
            children: '2FA Documentation',
          } as ButtonProps,
        ]
      : undefined

  return (
    <RequirementItem
      status={getState(isAuthenticated, isLoading, twoFactorAuthStatus?.status)}
      actions={actions}
    >
      <Typography variant={'body1'}>
        You must have Two-factor Authentication (2FA) active on your Synapse
        account in order to download the requested files
      </Typography>
    </RequirementItem>
  )
}
