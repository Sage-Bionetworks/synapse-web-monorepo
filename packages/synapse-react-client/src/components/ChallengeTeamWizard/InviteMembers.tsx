import React, { useState } from 'react'
import { Box } from '@mui/material'
import { PartialUpdate } from './ChallengeTeamWizard'
import TextField from '../TextField'

type InviteMembersProps = {
  onChangeInviteMembersInfo: (update: PartialUpdate) => void
  teamName?: string
}

export const InviteMembers = ({
  onChangeInviteMembersInfo,
  teamName,
}: InviteMembersProps) => {
  const [memberEmails, setMemberEmails] = useState('')
  const [teamRecruitmentMessage, setTeamRecruitmentMessage] = useState('')

  const handleTeamUpdate = (update: PartialUpdate) => {
    setMemberEmails(update.memberEmails)
    setTeamRecruitmentMessage(update.teamRecruitmentMessage)

    onChangeInviteMembersInfo(update)
  }

  return (
    <>
      {/* TODO: Link out team name to team page */}
      {teamName && (
        <Box>
          You have successfully joined team <b>{teamName}</b>
        </Box>
      )}
      <TextField
        id="teamRecruitmentMessage"
        label="Team Recruitment Message"
        value={memberEmails}
        fullWidth
        onChange={event =>
          handleTeamUpdate({ memberEmails: event.target.value })
        }
        sx={{ height: '94px' }}
      />
      <TextField
        id="teamEmailsToInvite"
        label="Emails of Additional Members to Invite"
        value={teamRecruitmentMessage}
        fullWidth
        onChange={event =>
          handleTeamUpdate({ teamRecruitmentMessage: event.target.value })
        }
        sx={{ height: '42px' }}
      />
    </>
  )
}
