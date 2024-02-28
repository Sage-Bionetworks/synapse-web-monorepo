import React, { useCallback } from 'react'
import {
  useAddMemberToTeam,
  useGetAllOpenMembershipInvitations,
  useGetCurrentUserProfile,
  useGetTeam,
} from '../../synapse-queries'
import { UserBadge } from '../UserCard/UserBadge'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { Alert, Button, ButtonProps, Stack, Typography } from '@mui/material'
import UserOrTeamBadge from '../UserOrTeamBadge'
import { noop } from 'lodash-es'

export type AcceptInvitationProps = {
  teamId: string
  onSuccess?: () => void
}

export function AcceptMembershipInvitationButton(
  props: AcceptInvitationProps & ButtonProps,
) {
  const { teamId, onSuccess = noop, ...buttonProps } = props
  const { data: currentUserProfile } = useGetCurrentUserProfile()

  const { mutate, isPending } = useAddMemberToTeam({
    onSuccess: () => {
      onSuccess()
    },
  })

  const isLoading = !currentUserProfile || isPending

  const onClick = useCallback(() => {
    if (currentUserProfile?.ownerId) {
      mutate({ teamId, userId: currentUserProfile.ownerId })
    }
  }, [currentUserProfile?.ownerId, mutate, teamId])

  return (
    <Button
      variant="contained"
      disabled={isLoading}
      startIcon={isPending ? <SynapseSpinner /> : undefined}
      {...buttonProps}
      onClick={onClick}
    >
      Accept Invitation
    </Button>
  )
}

/**
 * For the current, authenticated user, displays the details of an open MembershipInvitation for the provided team ID.
 *
 * This component requires
 *   1. The current user is logged-in
 *   2. The current user has an open invitation to join the teamId passed in via props
 *
 * To prompt the user to accept the invitation, use the {@link AcceptMembershipInvitationButton} component.
 */
export function OpenMembershipInvitation(props: AcceptInvitationProps) {
  const { teamId } = props
  const { data: currentUserProfile } = useGetCurrentUserProfile()
  const {
    data: membershipInvitations,
    status,
    error,
  } = useGetAllOpenMembershipInvitations(currentUserProfile?.ownerId!, {
    enabled: Boolean(currentUserProfile?.ownerId),
  })
  const { data: team } = useGetTeam(teamId, { enabled: Boolean(teamId) })

  if (status === 'pending') {
    return <SynapseSpinner />
  }

  if (status === 'error') {
    return <Alert severity={'error'}>{error.message}</Alert>
  }
  const matchingInvitation = membershipInvitations.find(
    inv => inv.teamId === teamId,
  )

  if (matchingInvitation == null) {
    return (
      <Alert severity={'error'}>
        No matching invitation for team {team ? team.name : `ID: ${teamId}`}
      </Alert>
    )
  }

  return (
    <Stack gap={2}>
      <Typography variant={'body1'}>
        <UserBadge userId={matchingInvitation.createdBy} /> has invited you to
        join{' '}
        <span>
          <UserOrTeamBadge principalId={teamId} />
        </span>
        {matchingInvitation.message ? ' with the following message:' : '.'}
      </Typography>
      {matchingInvitation.message && (
        <Typography variant={'body1'} component={'blockquote'}>
          {matchingInvitation.message}
        </Typography>
      )}
      <Typography variant={'body1'}>
        Do you want to accept this invitation?
      </Typography>
    </Stack>
  )
}
