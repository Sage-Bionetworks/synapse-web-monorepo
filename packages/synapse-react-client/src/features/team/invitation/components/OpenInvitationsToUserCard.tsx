import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { UserBadge } from '@/components/UserCard/UserBadge'
import UserOrTeamBadge from '@/components/UserOrTeamBadge/UserOrTeamBadge'
import {
  useAddMemberToTeam,
  useDeleteMembershipInvitation,
  useGetAllOpenMembershipInvitations,
} from '@/synapse-queries/team/useTeamMembers'
import { useGetCurrentUserProfile } from '@/synapse-queries/user/useUserBundle'
import { ChatTwoTone } from '@mui/icons-material'
import { Card, CardProps, Collapse, Divider, Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MembershipInvitation } from '@sage-bionetworks/synapse-client/generated/models/index'
import { useRef } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import {
  ACCEPT_TEAM_INVITATION_ERROR_MESSAGE,
  ACCEPT_TEAM_INVITATION_SUCCESS_MESSAGE,
  DECLINE_TEAM_INVITATION_ERROR_MESSAGE,
} from '../utils/constants'
import styles from './OpenInvitationsToUserCard.module.scss'

function InvitationRow(props: { invitation: MembershipInvitation }) {
  const { invitation } = props

  const { mutate: acceptInvitation, isPending: acceptIsPending } =
    useAddMemberToTeam({
      onSuccess: () => {
        displayToast(ACCEPT_TEAM_INVITATION_SUCCESS_MESSAGE, 'success')
      },
      onError: error => {
        displayToast(error.message, 'danger', {
          title: ACCEPT_TEAM_INVITATION_ERROR_MESSAGE,
        })
      },
    })
  const { mutate: deleteMembershipInvitation, isPending: deleteIsPending } =
    useDeleteMembershipInvitation({
      onSuccess: () => {
        displayToast('Invitation dismissed.', 'info')
      },
      onError: error => {
        displayToast(error.message, 'danger', {
          title: DECLINE_TEAM_INVITATION_ERROR_MESSAGE,
        })
      },
    })

  return (
    <div key={invitation.id} className={styles.row}>
      <span className={styles.teamName}>
        <UserOrTeamBadge principalId={invitation.teamId} />
      </span>
      <div className={styles.invitationMessage}>
        {invitation.message && (
          <>
            <Tooltip
              title={
                <>
                  Message from{' '}
                  <UserBadge
                    userId={invitation.createdBy}
                    showFullName
                    showCardOnHover={false}
                    disableLink
                  />
                </>
              }
            >
              <ChatTwoTone sx={{ color: 'grey.700' }} />
            </Tooltip>
            <Typography variant="body2" color="text.secondary">
              {invitation.message}
            </Typography>
          </>
        )}
      </div>
      <Button
        variant="contained"
        color="primary"
        loading={acceptIsPending}
        disabled={deleteIsPending}
        onClick={() => {
          acceptInvitation({
            teamId: invitation.teamId!,
            userId: invitation.inviteeId!,
          })
        }}
      >
        Join
      </Button>
      <Button
        variant="outlined"
        loading={deleteIsPending}
        disabled={acceptIsPending}
        onClick={() => {
          deleteMembershipInvitation({
            membershipInvitation: invitation,
          })
        }}
      >
        Decline
      </Button>
    </div>
  )
}

type OpenInvitationsToUserCardProps = {
  cardProps?: CardProps
}

/**
 * Shows a card of the open team membership invitations for the current user, if any exist. If no invitations exist, nothing is shown.
 */
export default function OpenInvitationsToUserCard(
  props: OpenInvitationsToUserCardProps,
) {
  const { cardProps } = props
  const { data: currentUser } = useGetCurrentUserProfile()
  const { data: openInvitations, isLoading } =
    useGetAllOpenMembershipInvitations(currentUser?.ownerId!, {
      enabled: Boolean(currentUser?.ownerId),
    })

  // Keep track of the maximum number of invitations seen so that if the list of invitations goes down to 0 we can still show the section (with a message indicating there are no invitations) instead of hiding the section entirely.
  // This is to prevent jarring changes in the UI if a user accepts/declines an invitation and the section disappears entirely.
  const maxSeenInvitationsRef = useRef(0)
  maxSeenInvitationsRef.current = Math.max(
    maxSeenInvitationsRef.current,
    openInvitations?.length ?? 0,
  )
  if (
    maxSeenInvitationsRef.current == 0 &&
    (isLoading || !openInvitations || openInvitations.length === 0)
  ) {
    return null
  }

  return (
    <Card {...cardProps}>
      <Typography variant="headline3" gutterBottom>
        Pending Team Invitations
      </Typography>
      <Typography variant="body1" gutterBottom>
        You have been invited to join the following team(s). New content may be
        visible to you after you accept a team invitation.
      </Typography>
      {openInvitations && openInvitations.length > 0 ? (
        <Stack
          component={TransitionGroup}
          divider={<Divider flexItem />}
          spacing={2}
          mt={2}
        >
          {openInvitations.map(invitation => (
            <Collapse key={invitation.id}>
              <InvitationRow invitation={invitation} />
            </Collapse>
          ))}
        </Stack>
      ) : (
        <Typography
          variant="body1Italic"
          align="center"
          color="text.secondary"
          mt={2}
        >
          You have no pending team invitations.
        </Typography>
      )}
    </Card>
  )
}
