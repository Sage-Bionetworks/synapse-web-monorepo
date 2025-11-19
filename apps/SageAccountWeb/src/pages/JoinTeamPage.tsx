import { CelebrationOutlined, Groups2Outlined } from '@mui/icons-material'
import { Box, Button, Typography, useTheme } from '@mui/material'
import {
  isJoinTeamSignedToken,
  isMembershipInvtnSignedToken,
  JoinTeamSignedToken,
  MembershipInvitation,
  ResponseMessage,
} from '@sage-bionetworks/synapse-types'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import { useAppContext } from '../AppContext'
import { StyledOuterContainer } from '../components/StyledComponents'
import SynapseClient from 'synapse-react-client/synapse-client'
import UserOrTeamBadge from 'synapse-react-client/components/UserOrTeamBadge/UserOrTeamBadge'
import { displayToast } from 'synapse-react-client/components/ToastMessage'

function JoinTeamPage() {
  const context = useAppContext()
  const theme = useTheme()
  const [joinTeamToken, setJoinTeamToken] = useState<JoinTeamSignedToken>()
  const [joinedTeamResponseMessage, setJoinedTeamResponseMessage] =
    useState<ResponseMessage>()
  const [redirectToRegistration, setRedirectToRegistration] =
    useState<boolean>(false)
  const [redirectToTeamPage, setRedirectToTeamPage] = useState<boolean>(false)
  const [membershipInvitation, setMembershipInvitation] =
    useState<MembershipInvitation>()
  useEffect(() => {
    if (context && context.signedToken) {
      if (isJoinTeamSignedToken(context.signedToken)) {
        setJoinTeamToken(context.signedToken)
      } else if (isMembershipInvtnSignedToken(context.signedToken)) {
        SynapseClient.getMembershipInvitation(context.signedToken).then(
          invitation => {
            setMembershipInvitation(invitation)
          },
        )
      }
    }
  }, [context])

  useEffect(() => {
    if (redirectToTeamPage) {
      window.location.href = `https://www.synapse.org/Team:${joinTeamToken?.teamId}`
    }
  }, [redirectToTeamPage])

  useEffect(() => {
    if (joinTeamToken) {
      SynapseClient.addTeamMemberWithToken(joinTeamToken)
        .then(responseMessage => {
          // clear token from local storage, and show success UI
          localStorage.removeItem('signedToken')
          setJoinedTeamResponseMessage(responseMessage)
        })
        .catch(error => {
          displayToast(error.reason, 'danger')
        })
    }
  }, [joinTeamToken])

  return (
    <StyledOuterContainer>
      {redirectToRegistration && <Navigate to="/register1" />}
      <Box
        sx={{
          width: '700px',
          padding: theme.spacing(8),
          margin: '0 auto',
          backgroundColor: '#fff',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            width: '100px',
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme.spacing(4),
            justifyContent: 'center',
            height: '100px',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '50%',
          }}
        >
          {joinedTeamResponseMessage && (
            <CelebrationOutlined sx={{ color: '#fff', fontSize: '64px' }} />
          )}
          {membershipInvitation && (
            <Groups2Outlined sx={{ color: '#fff', fontSize: '64px' }} />
          )}
        </Box>
        {membershipInvitation && (
          <>
            <Typography
              variant="headline2"
              sx={{
                marginBottom: '16px',
              }}
            >
              Join a Team
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ paddingTop: '10px', paddingBottom: '30px' }}
            >
              <UserOrTeamBadge principalId={membershipInvitation.createdBy} />{' '}
              invited you to join:
              <br />
              <UserOrTeamBadge principalId={membershipInvitation.teamId} />
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ paddingTop: '10px', paddingBottom: '10px' }}
            >
              To join this team, you must register for a Synapse account using
              the same email address that was invited to the team.
            </Typography>
            <Box
              sx={{
                padding: '20px 30px',
                backgroundColor: 'rgba(241, 243, 245, 0.75)',
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Use this email address when you register
              </Typography>
              <Typography variant="subtitle1">
                <em>{membershipInvitation.inviteeEmail}</em>
              </Typography>
            </Box>
            <Button
              type="button"
              color="primary"
              variant="contained"
              fullWidth
              sx={{ marginTop: '45px', padding: '10px', height: '100%' }}
              onClick={() => {
                setRedirectToRegistration(true)
              }}
            >
              Register for a new account
            </Button>
          </>
        )}
        {joinedTeamResponseMessage && (
          <>
            <Typography
              variant="headline2"
              sx={{
                marginBottom: '16px',
              }}
            >
              Joined a Team!
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ paddingTop: '10px', paddingBottom: '50px' }}
            >
              <UserOrTeamBadge principalId={joinTeamToken?.memberId} /> is now a
              member of:
              <br />
              <UserOrTeamBadge principalId={joinTeamToken?.teamId} />
            </Typography>
            <Button
              type="button"
              color="primary"
              variant="contained"
              fullWidth
              sx={{ padding: '10px', height: '100%' }}
              onClick={() => {
                setRedirectToTeamPage(true)
              }}
            >
              View the team page
            </Button>
          </>
        )}
      </Box>
    </StyledOuterContainer>
  )
}

export default JoinTeamPage
