import { ButtonProps, Typography } from '@mui/material'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import { useSynapseContext } from '../../../utils/context/SynapseContext'
import { TWO_FACTOR_DOCS_LINK } from '../../Authentication/TwoFactorEnrollmentForm'
import { useGetTwoFactorEnrollmentStatus } from '../../../synapse-queries/auth/useTwoFactorEnrollment'
import RequirementItem, { RequirementItemProps } from './RequirementItem'
import { TwoFactorAuthStatus } from '@sage-bionetworks/synapse-types'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'

const TWO_FACTOR_ENROLLMENT_LINK = `${getEndpoint(
  BackendDestinationEnum.PORTAL_ENDPOINT,
)}TwoFactorAuth:Enroll`

function getState(
  isSignedIn: boolean,
  isLoading: boolean,
  status?: TwoFactorAuthStatus['status'],
): RequirementItemStatus {
  if (!isSignedIn) {
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
  const { accessToken } = useSynapseContext()

  const isSignedIn = !!accessToken

  const { data: twoFactorAuthStatus, isLoading } =
    useGetTwoFactorEnrollmentStatus({
      enabled: isSignedIn,
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
      status={getState(isSignedIn, isLoading, twoFactorAuthStatus?.status)}
      actions={actions}
    >
      <Typography variant={'body1'}>
        You must have Two-factor Authentication (2FA) active on your Synapse
        account in order to download the requested files
      </Typography>
    </RequirementItem>
  )
}
