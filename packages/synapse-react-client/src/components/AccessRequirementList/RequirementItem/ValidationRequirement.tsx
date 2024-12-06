import { useGetCurrentUserBundle } from '../../../synapse-queries'
import { Link, Typography } from '@mui/material'
import RequirementItem from './RequirementItem'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'
import { useOneSageURL } from '../../../utils/hooks/useOneSageURL'

/**
 * When creating requests for access requirements on a particular file, one or more access requirements may require that the
 * user has a validated profile.
 *
 * This component checks if the user has a validated profile, and if not, provides a link on how to begin profile validation.
 */
export default function ValidationRequirement() {
  const { data: userBundle, isLoading } = useGetCurrentUserBundle()
  const validationURL = useOneSageURL(
    '/authenticated/myaccount',
    undefined,
    'trust',
  )

  return (
    <RequirementItem
      status={
        isLoading
          ? RequirementItemStatus.LOADING
          : userBundle!.isVerified
          ? RequirementItemStatus.COMPLETE
          : RequirementItemStatus.LOCKED
      }
    >
      <Typography variant={'body1'}>
        You must first apply to have your{' '}
        <Link href={validationURL.toString()} target={'_blank'}>
          user profile validated
        </Link>
      </Typography>
      {isLoading && <span className="spinner" />}
      {userBundle?.isVerified && (
        <Typography variant={'body1'}>
          Your user profile is validated.
        </Typography>
      )}
    </RequirementItem>
  )
}
