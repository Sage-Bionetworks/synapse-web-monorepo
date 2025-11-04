import { useGetCurrentUserProfile } from '@/synapse-queries'
import { SynapseConstants, useSynapseContext } from '@/utils'
import { useOneSageURL } from '@/utils/hooks/useOneSageURL'
import { Link, Typography } from '@mui/material'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'
import RequirementItem from './RequirementItem'

/**
 * Displays a data access request requirement prompts the user to authenticate if not already signed in.
 */
export default function AuthenticatedRequirement() {
  const { isAuthenticated } = useSynapseContext()
  const { data: userProfile } = useGetCurrentUserProfile()

  const registrationUrl = useOneSageURL('/register1')

  return (
    <RequirementItem
      status={
        isAuthenticated
          ? RequirementItemStatus.COMPLETE
          : RequirementItemStatus.LOCKED
      }
    >
      {!isAuthenticated && (
        <>
          <Typography variant={'body1'}>
            <Link className={SynapseConstants.SRC_SIGN_IN_CLASS}>Sign in</Link>{' '}
            with a Sage Platform (Synapse) user account. If you do not have a
            Sage account, you can{' '}
            <Link href={registrationUrl.toString()}>register for free.</Link>
          </Typography>
        </>
      )}
      {isAuthenticated && (
        <Typography variant={'body1'}>
          You have signed in with the Sage Platform (Synapse) user account{' '}
          <b>{userProfile?.userName}@synapse.org</b>
        </Typography>
      )}
    </RequirementItem>
  )
}
