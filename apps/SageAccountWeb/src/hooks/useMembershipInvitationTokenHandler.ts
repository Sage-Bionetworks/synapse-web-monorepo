import { useEffect, useState } from 'react'
import { useAppContext } from '../AppContext'
import { SynapseClient } from 'synapse-react-client/dist/utils'
import { isMembershipInvtnSignedToken } from 'synapse-react-client/dist/utils/synapseTypes/SignedToken/MembershipInvtnSignedToken'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { SignedTokenInterface } from 'synapse-react-client/dist/utils/synapseTypes/SignedToken/SignedTokenInterface'
import { MembershipInvitation } from 'synapse-react-client/dist/utils/synapseTypes/MembershipInvitation'
import { InviteeVerificationSignedToken } from 'synapse-react-client/dist/utils/synapseTypes/SignedToken/InviteeVerificationSignedToken'

export default function useMembershipInvitationTokenHandler():
  | MembershipInvitation
  | undefined {
  const context = useAppContext()
  const { accessToken } = useSynapseContext()
  const [signedToken, setSignedToken] = useState<
    SignedTokenInterface | undefined
  >(context.signedToken)
  const [inviteeVerificationSignedToken, setInviteeVerificationSignedToken] =
    useState<InviteeVerificationSignedToken>()
  const [membershipInvitation, setMembershipInvitation] = useState<
    MembershipInvitation | undefined
  >()

  // If we have a MembershipInvtnSignedToken in the local storage, then process and clear it!
  /**
   * Note: React 18 introduced a new development-only check to Strict Mode.
   * This check automatically unmounts and remounts the component, making the useEffect hook fire twice on the initial mount.
   */
  useEffect(() => {
    let ignore = false
    const fetchData = async () => {
      if (
        accessToken &&
        signedToken &&
        isMembershipInvtnSignedToken(signedToken)
      ) {
        let membershipInvitation = await SynapseClient.getMembershipInvitation(
          signedToken,
        )
        setMembershipInvitation(membershipInvitation)
        if (!membershipInvitation.inviteeId) {
          // email is filled in, we must first bind the invitation
          try {
            const inviteeSignedToken =
              await SynapseClient.getInviteeVerificationSignedToken(
                membershipInvitation.id,
                accessToken,
              )
            return inviteeSignedToken
          } catch (error) {
            if (error?.status === 403) {
              displayToast(
                `Couldn't join the team. This invitation was sent to an email address not associated to the current user. ${membershipInvitation.inviteeEmail} Please add this email in your Account Settings, or log in with the correct account before accepting the invitation on the Team Page.`,
                'warning',
                {
                  primaryButtonConfig: {
                    text: 'Account Settings',
                    href: '/authenticated/myaccount',
                  },
                  secondaryButtonConfig: {
                    text: 'Team Page',
                    href: `https://www.synapse.org/#!Team:${membershipInvitation.teamId}`,
                  },
                },
              )
            } else {
              throw error
            }
          }
        }
      }
      return undefined
    }

    fetchData()
      .then(inviteeSignedToken => {
        if (!ignore) {
          setInviteeVerificationSignedToken(inviteeSignedToken)
        }
      })
      .catch(err => {
        if (!ignore) {
          displayToast(err.reason, 'danger')
        }
      })

    return () => {
      ignore = true
    }
  }, [])

  useEffect(() => {
    let ignore = false
    const addTeamMember = async () => {
      if (
        !ignore &&
        accessToken &&
        signedToken &&
        inviteeVerificationSignedToken &&
        isMembershipInvtnSignedToken(signedToken)
      ) {
        let membershipInvitation = await SynapseClient.getMembershipInvitation(
          signedToken,
        )
        // attempt to bind the membership invite to new account
        await SynapseClient.bindInvitationToAuthenticatedUser(
          inviteeVerificationSignedToken,
          inviteeVerificationSignedToken.membershipInvitationId,
          accessToken,
        )
        membershipInvitation = await SynapseClient.getMembershipInvitation(
          signedToken,
        )

        // returns undefined (if inviteeId is null)
        if (membershipInvitation.inviteeId) {
          await SynapseClient.addTeamMemberAsAuthenticatedUserOrAdmin(
            membershipInvitation.teamId,
            membershipInvitation.inviteeId,
            accessToken,
          )
          // clear token from local storage, and show success UI
          localStorage.removeItem('signedToken')
          setSignedToken(undefined)
          displayToast(`Successfully joined the team.`)
        }
      }
    }
    addTeamMember().catch(err => {
      displayToast(err.reason, 'danger')
    })
    return () => {
      ignore = true
    }
  }, [inviteeVerificationSignedToken])

  return membershipInvitation
}
