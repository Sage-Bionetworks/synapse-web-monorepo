import React from 'react'
import { useGetCurrentUserProfile } from '../../../synapse-queries'
import { Link, Typography } from '@mui/material'
import { SynapseConstants, useSynapseContext } from '../../../utils'
import RequirementItem from './RequirementItem'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'
import { useOneSageURL } from '../../../utils/hooks/useOneSageURL'

/**
 * Displays a data access request requirement prompts the user to authenticate if not already signed in.
 */
export default function AuthenticatedRequirement() {
  const { accessToken } = useSynapseContext()
  const { data: userProfile } = useGetCurrentUserProfile()

  const registrationUrl = useOneSageURL('/register1')

  const isSignedIn = !!accessToken

  return (
    <RequirementItem
      status={
        isSignedIn
          ? RequirementItemStatus.COMPLETE
          : RequirementItemStatus.LOCKED
      }
    >
      {!isSignedIn && (
        <>
          <Typography variant={'body1'}>
            <Link className={SynapseConstants.SRC_SIGN_IN_CLASS}>Sign in</Link>{' '}
            with a Sage Platform (Synapse) user account. If you do not have a
            Sage account, you can{' '}
            <Link href={registrationUrl.toString()}>register for free.</Link>
          </Typography>
        </>
      )}
      {isSignedIn && (
        <Typography variant={'body1'}>
          You have signed in with the Sage Platform (Synapse) user account{' '}
          <b>{userProfile?.userName}@synapse.org</b>
        </Typography>
      )}
    </RequirementItem>
  )
}
